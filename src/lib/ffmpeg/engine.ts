import type { OutputFormat, PresetId, ConversionProgress, ConversionResult } from './types';
import { PRESETS, FORMAT_DETAILS, calculateWhatsAppBitrateArgs } from './presets';

type FFmpegInstance = any;

class FFmpegEngine {
  private ffmpeg: FFmpegInstance | null = null;
  private isLoaded = false;
  private isLoading = false;
  private isCancelled = false;

  public async isBrowserSupported(): Promise<{ supported: boolean; reason?: string }> {
    if (typeof window === 'undefined') {
      return { supported: false, reason: 'Ambiente do servidor' };
    }
    if (typeof WebAssembly !== 'object' || typeof WebAssembly.instantiate !== 'function') {
      return { supported: false, reason: 'Seu navegador não possui suporte ao WebAssembly.' };
    }
    return { supported: true };
  }

  public cancel(): void {
    this.isCancelled = true;
  }

  public async load(onProgress?: (msg: string) => void): Promise<FFmpegInstance> {
    if (this.isLoaded && this.ffmpeg) {
      return this.ffmpeg;
    }

    if (this.isLoading) {
      while (this.isLoading) {
        await new Promise((r) => setTimeout(r, 100));
      }
      if (this.ffmpeg) return this.ffmpeg;
    }

    this.isLoading = true;
    this.isCancelled = false;

    try {
      onProgress?.('Carregando biblioteca FFmpeg WebAssembly no navegador...');
      
      const { FFmpeg } = await import('@ffmpeg/ffmpeg');
      const { toBlobURL } = await import('@ffmpeg/util');

      const ffmpeg = new FFmpeg();

      const hasSharedArrayBuffer = typeof window !== 'undefined' && typeof window.SharedArrayBuffer !== 'undefined';
      
      const baseURL = hasSharedArrayBuffer
        ? 'https://unpkg.com/@ffmpeg/core-mt@0.12.6/dist/esm'
        : 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm';

      onProgress?.('Inicializando motor WebAssembly...');

      try {
        await ffmpeg.load({
          coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
          wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
          ...(hasSharedArrayBuffer ? {
            workerURL: await toBlobURL(`${baseURL}/ffmpeg-core.worker.js`, 'text/javascript')
          } : {})
        });
      } catch (loadErr) {
        console.warn('Fallback para núcleo padrão single-thread:', loadErr);
        const fallbackBase = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm';
        await ffmpeg.load({
          coreURL: await toBlobURL(`${fallbackBase}/ffmpeg-core.js`, 'text/javascript'),
          wasmURL: await toBlobURL(`${fallbackBase}/ffmpeg-core.wasm`, 'application/wasm')
        });
      }

      this.ffmpeg = ffmpeg;
      this.isLoaded = true;
      onProgress?.('Motor pronto para processamento!');
      return ffmpeg;
    } catch (err: any) {
      this.isLoaded = false;
      this.ffmpeg = null;
      throw new Error(`Falha ao iniciar motor de conversão: ${err?.message || 'Erro de inicialização do WebAssembly'}`);
    } finally {
      this.isLoading = false;
    }
  }

  public async convert(
    file: File,
    presetId: PresetId,
    targetFormat: OutputFormat,
    durationSeconds?: number,
    onProgressUpdate?: (progress: ConversionProgress) => void
  ): Promise<ConversionResult> {
    this.isCancelled = false;
    const startTime = performance.now();

    const ffmpeg = await this.load((msg) => {
      onProgressUpdate?.({
        ratio: 0.05,
        percent: 5,
        statusMessage: msg
      });
    });

    if (this.isCancelled) {
      throw new Error('Conversão cancelada pelo usuário.');
    }

    const { fetchFile } = await import('@ffmpeg/util');

    const inputExt = file.name.split('.').pop()?.toLowerCase() || 'mp4';
    const inputName = `input_${Date.now()}.${inputExt}`;
    const outputExt = FORMAT_DETAILS[targetFormat].ext;
    const outputName = `output_${Date.now()}.${outputExt}`;

    let lastProgress = 0;

    const progressHandler = ({ progress }: { progress: number; time: number }) => {
      if (this.isCancelled) return;
      const clamped = Math.max(0, Math.min(1, progress || 0));
      const percent = Math.round(clamped * 100);
      lastProgress = percent;

      onProgressUpdate?.({
        ratio: clamped,
        percent: Math.max(5, percent),
        statusMessage: percent < 95 ? `Processando no navegador... (${percent}%)` : 'Finalizando arquivo...'
      });
    };

    const logHandler = ({ message }: { message: string }) => {
      if (this.isCancelled) return;
      if (message.includes('frame=')) {
        const frameMatch = message.match(/frame=\s*(\d+)/);
        const fpsMatch = message.match(/fps=\s*([\d\.]+)/);
        const timeMatch = message.match(/time=\s*([\d\:\.]+)/);

        if (frameMatch) {
          const currentFrame = parseInt(frameMatch[1], 10);
          const fps = fpsMatch ? parseFloat(fpsMatch[1]) : undefined;
          
          onProgressUpdate?.({
            ratio: lastProgress / 100,
            percent: Math.max(10, Math.min(95, lastProgress)),
            currentFrame,
            fps,
            timeString: timeMatch ? timeMatch[1] : undefined,
            statusMessage: `Codificando: frame ${currentFrame}${fps ? ` a ${fps} fps` : ''}`
          });
        }
      }
    };

    ffmpeg.on('progress', progressHandler);
    ffmpeg.on('log', logHandler);

    try {
      onProgressUpdate?.({
        ratio: 0.1,
        percent: 10,
        statusMessage: 'Carregando arquivo na memória local...'
      });

      await ffmpeg.writeFile(inputName, await fetchFile(file));

      if (this.isCancelled) {
        throw new Error('Conversão cancelada pelo usuário.');
      }

      onProgressUpdate?.({
        ratio: 0.15,
        percent: 15,
        statusMessage: 'Iniciando transcodificação...'
      });

      // Select arguments (with special handling for dynamic WhatsApp target size)
      let args: string[];
      if (presetId === 'whatsapp' && durationSeconds && durationSeconds > 0) {
        args = calculateWhatsAppBitrateArgs(durationSeconds, inputName, outputName);
      } else {
        const preset = PRESETS[presetId] || PRESETS.balanced;
        args = preset.getArgs(inputName, outputName);
      }

      await ffmpeg.exec(args);

      if (this.isCancelled) {
        throw new Error('Conversão cancelada pelo usuário.');
      }

      onProgressUpdate?.({
        ratio: 0.92,
        percent: 92,
        statusMessage: 'Validando integridade do arquivo gerado...'
      });

      const data = await ffmpeg.readFile(outputName);
      const mime = FORMAT_DETAILS[targetFormat].mime;
      const blob = new Blob([data.buffer], { type: mime });

      // Output Validation: verify non-empty buffer
      if (!blob || blob.size < 128) {
        throw new Error('O arquivo gerado está corrompido ou vazio. Tente com outro formato ou predefinição.');
      }

      const downloadUrl = URL.createObjectURL(blob);
      const baseOriginalName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
      const resultFileName = `${baseOriginalName}_convertido.${outputExt}`;
      const timeTakenMs = Math.round(performance.now() - startTime);

      const originalSize = file.size;
      const outputSize = blob.size;
      const reductionPercentage = originalSize > 0 
        ? Math.round(((originalSize - outputSize) / originalSize) * 100)
        : 0;

      // Clean up virtual files
      try {
        await ffmpeg.deleteFile(inputName);
        await ffmpeg.deleteFile(outputName);
      } catch {}

      onProgressUpdate?.({
        ratio: 1,
        percent: 100,
        statusMessage: 'Arquivo pronto com sucesso!'
      });

      return {
        blob,
        downloadUrl,
        fileName: resultFileName,
        originalSize,
        outputSize,
        timeTakenMs,
        format: targetFormat,
        reductionPercentage
      };
    } catch (err: any) {
      try {
        await ffmpeg.deleteFile(inputName);
        await ffmpeg.deleteFile(outputName);
      } catch {}

      if (err.message && err.message.includes('cancelada')) {
        throw err;
      }
      console.error('FFmpeg execution error:', err);
      throw new Error(`Erro na conversão: ${err?.message || 'Falha ao processar trilhas de áudio/vídeo'}`);
    } finally {
      ffmpeg.off('progress', progressHandler);
      ffmpeg.off('log', logHandler);
    }
  }
}

export const ffmpegEngine = new FFmpegEngine();
