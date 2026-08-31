import React, { useState, useEffect } from 'react';
import type { OutputFormat, PresetId, ConversionStatus, ConversionProgress as ProgressData, ConversionResult } from '../../lib/ffmpeg/types';
import { PRESETS, FORMAT_DETAILS } from '../../lib/ffmpeg/presets';
import { ffmpegEngine } from '../../lib/ffmpeg/engine';
import { extractVideoMetadata, type VideoMetadata } from '../../lib/ffmpeg/metadata';
import { PrivacyBadge } from './PrivacyBadge';
import { FileDropZone } from './FileDropZone';
import { FormatSelector } from './FormatSelector';
import { PresetSelector } from './PresetSelector';
import { ConversionProgress } from './ConversionProgress';
import { ResultCard } from './ResultCard';

interface ConverterAppProps {
  initialTargetFormat?: OutputFormat;
  initialPreset?: PresetId;
  defaultTitle?: string;
}

export const ConverterApp: React.FC<ConverterAppProps> = ({
  initialTargetFormat = 'mp4',
  initialPreset = 'balanced',
  defaultTitle
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState<VideoMetadata | null>(null);
  const [posterUrl, setPosterUrl] = useState<string | undefined>(undefined);
  const [posterBlob, setPosterBlob] = useState<Blob | undefined>(undefined);

  const [targetFormat, setTargetFormat] = useState<OutputFormat>(initialTargetFormat);
  const [selectedPreset, setSelectedPreset] = useState<PresetId>(initialPreset);
  const [status, setStatus] = useState<ConversionStatus>('idle');
  const [progress, setProgress] = useState<ProgressData>({
    ratio: 0,
    percent: 0,
    statusMessage: 'Aguardando início...'
  });
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isBrowserSupported, setIsBrowserSupported] = useState<boolean>(true);
  const [browserSupportError, setBrowserSupportError] = useState<string | null>(null);

  useEffect(() => {
    ffmpegEngine.isBrowserSupported().then((res) => {
      setIsBrowserSupported(res.supported);
      if (!res.supported && res.reason) {
        setBrowserSupportError(res.reason);
      }
    });
  }, []);

  const handleFormatChange = (newFormat: OutputFormat) => {
    setTargetFormat(newFormat);
    const validPresets = FORMAT_DETAILS[newFormat].popularPresets;
    if (!validPresets.includes(selectedPreset)) {
      setSelectedPreset(validPresets[0]);
    }
  };

  const handleFileSelected = async (file: File) => {
    setSelectedFile(file);
    setStatus('ready');
    setErrorMessage(null);

    // Auto-detect format recommendations
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (ext === 'mov' && targetFormat === 'mov') {
      setTargetFormat('mp4');
      setSelectedPreset('balanced');
    }

    // Inspect file metadata & extract poster frame in background
    try {
      const { metadata: meta, posterUrl: pUrl, posterBlob: pBlob } = await extractVideoMetadata(file);
      setMetadata(meta);
      setPosterUrl(pUrl);
      setPosterBlob(pBlob);
    } catch (err) {
      console.warn('Metadata inspection fallback:', err);
    }
  };

  const handleStartConversion = async () => {
    if (!selectedFile) return;

    setStatus('converting');
    setErrorMessage(null);
    setProgress({
      ratio: 0.05,
      percent: 5,
      statusMessage: 'Preparando conversor no navegador...'
    });

    try {
      const conversionResult = await ffmpegEngine.convert(
        selectedFile,
        selectedPreset,
        targetFormat,
        metadata?.duration,
        (progressUpdate) => {
          setProgress(progressUpdate);
        }
      );

      setResult(conversionResult);
      setStatus('done');
    } catch (err: any) {
      if (err.message && err.message.includes('cancelada')) {
        handleReset();
        return;
      }
      console.error('Conversion failed:', err);
      setStatus('error');
      setErrorMessage(
        err?.message || 'Ocorreu um erro ao processar o vídeo. Tente com outro formato ou arquivo menor.'
      );
    }
  };

  const handleCancel = () => {
    ffmpegEngine.cancel();
    handleReset();
  };

  const handleReset = () => {
    setSelectedFile(null);
    setMetadata(null);
    if (posterUrl) {
      URL.revokeObjectURL(posterUrl);
      setPosterUrl(undefined);
      setPosterBlob(undefined);
    }
    setStatus('idle');
    setResult(null);
    setErrorMessage(null);
    setProgress({
      ratio: 0,
      percent: 0,
      statusMessage: 'Aguardando início...'
    });
  };

  if (!isBrowserSupported) {
    return (
      <div className="w-full max-w-3xl mx-auto p-6 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-3xl text-center space-y-3">
        <h3 className="text-lg font-bold text-amber-900 dark:text-amber-300">Navegador não suportado</h3>
        <p className="text-sm text-amber-800 dark:text-amber-400">
          {browserSupportError || 'Seu navegador não suporta WebAssembly local. Recomendamos usar o Google Chrome, Edge, Safari ou Firefox.'}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {/* Privacy Guarantee Header */}
      <div className="flex justify-center">
        <PrivacyBadge />
      </div>

      {/* Main Card Container */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 rounded-3xl p-5 sm:p-8 shadow-sm transition-all">
        {status === 'idle' && (
          <div className="space-y-6">
            {defaultTitle && (
              <div className="text-center space-y-1">
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  {defaultTitle}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                  Selecione o arquivo abaixo para iniciar a conversão instantânea
                </p>
              </div>
            )}
            <FileDropZone onFileSelected={handleFileSelected} />
          </div>
        )}

        {status === 'ready' && selectedFile && (
          <div className="space-y-6">
            {/* File Info & Metadata Inspection Card */}
            <div className="p-4 sm:p-5 bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/70 rounded-2xl space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  {posterUrl ? (
                    <img 
                      src={posterUrl} 
                      alt="Capa do vídeo" 
                      className="w-12 h-12 rounded-xl object-cover border border-zinc-200 dark:border-zinc-700 shrink-0" 
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-emerald-100/70 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xs uppercase">
                      {selectedFile.name.split('.').pop() || 'VID'}
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-zinc-900 dark:text-white truncate max-w-xs sm:max-w-md">
                      {selectedFile.name}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                      {metadata?.sizeFormatted || `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 px-3 py-1.5 hover:bg-zinc-200/60 dark:hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  Trocar arquivo
                </button>
              </div>

              {/* Metadata Badges */}
              {metadata && metadata.duration > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-200/60 dark:border-zinc-700/60 text-xs text-zinc-600 dark:text-zinc-300">
                  <span className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-2.5 py-1 rounded-md font-medium">
                    ⏱️ Duração: <strong className="text-zinc-900 dark:text-white">{metadata.durationFormatted}</strong>
                  </span>
                  {metadata.resolution !== 'Desconhecida' && (
                    <span className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-2.5 py-1 rounded-md font-medium">
                      📐 Resolução: <strong className="text-zinc-900 dark:text-white">{metadata.resolution}</strong>
                    </span>
                  )}
                  <span className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-2.5 py-1 rounded-md font-medium">
                    🔒 Processamento: <strong className="text-emerald-700 dark:text-emerald-400">100% Local</strong>
                  </span>
                </div>
              )}
            </div>

            {/* Format Selection */}
            <FormatSelector
              selectedFormat={targetFormat}
              onFormatChange={handleFormatChange}
            />

            {/* Preset Selection */}
            <PresetSelector
              format={targetFormat}
              selectedPreset={selectedPreset}
              onPresetChange={setSelectedPreset}
            />

            {/* Memory & Processing Warning for large files */}
            {selectedFile.size > 200 * 1024 * 1024 && (
              <div className="p-3.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-xl text-amber-900 dark:text-amber-300 text-xs flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>
                  <strong>Aviso de Memória:</strong> Arquivos acima de 200 MB utilizam uma quantidade maior de memória RAM. Mantenha a aba aberta durante o processamento para máxima velocidade.
                </span>
              </div>
            )}

            {/* Action CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleStartConversion}
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base sm:text-lg shadow-sm hover:shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Converter para {targetFormat.toUpperCase()} Agora</span>
              </button>
              <p className="text-center text-[11px] text-zinc-500 dark:text-zinc-400 pt-2">
                O arquivo é processado na memória do seu aparelho. Zero dados enviados à nuvem.
              </p>
            </div>
          </div>
        )}

        {status === 'converting' && selectedFile && (
          <ConversionProgress
            progress={progress}
            fileName={selectedFile.name}
            onCancel={handleCancel}
          />
        )}

        {status === 'done' && result && (
          <ResultCard 
            result={result} 
            posterUrl={posterUrl}
            posterBlob={posterBlob}
            onReset={handleReset} 
          />
        )}

        {status === 'error' && (
          <div className="space-y-4 text-center p-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900 flex items-center justify-center">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Não foi possível concluir a conversão</h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                {errorMessage || 'Ocorreu um erro durante a codificação do vídeo.'}
              </p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white text-white dark:text-zinc-900 rounded-xl font-semibold text-sm transition-all cursor-pointer"
              >
                Tentar Novamente
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
