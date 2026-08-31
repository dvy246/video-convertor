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
import { tClient } from '../../i18n/client';

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
    statusMessage: 'Preparing...'
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
      statusMessage: tClient('progress.converting')
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
      console.error('Conversion execution error:', err);
      setErrorMessage(err?.message || 'Error occurred during video transcoding.');
      setStatus('error');
    }
  };

  const handleCancel = () => {
    ffmpegEngine.cancel();
    setStatus('ready');
    setProgress({ ratio: 0, percent: 0, statusMessage: 'Cancelled' });
  };

  const handleReset = () => {
    setSelectedFile(null);
    setMetadata(null);
    setPosterUrl(undefined);
    setPosterBlob(undefined);
    setStatus('idle');
    setResult(null);
    setErrorMessage(null);
    setProgress({ ratio: 0, percent: 0, statusMessage: '' });
  };

  if (!isBrowserSupported) {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-2xl text-amber-900 dark:text-amber-200 space-y-3">
        <div className="flex items-center gap-2 font-bold text-base">
          <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>Navegador Não Compatível com WebAssembly</span>
        </div>
        <p className="text-sm">
          {browserSupportError || 'Seu navegador não possui suporte aos recursos necessários (SharedArrayBuffer ou WebAssembly) para processar vídeos localmente.'}
        </p>
        <p className="text-xs text-amber-700 dark:text-amber-400">
          Recomendamos utilizar a versão mais recente do Google Chrome, Microsoft Edge, Mozilla Firefox, Brave ou Safari no macOS/iOS.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Privacy Guarantee Trust Badge */}
      <div className="flex justify-center mb-6">
        <PrivacyBadge />
      </div>

      {/* Main Converter Card */}
      <div className="bg-white dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 transition-colors duration-200">
        {status === 'idle' && (
          <FileDropZone onFileSelected={handleFileSelected} />
        )}

        {status === 'ready' && selectedFile && (
          <div className="space-y-6">
            {/* Selected File Details Bar */}
            <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700/80 rounded-2xl gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                {posterUrl ? (
                  <img
                    src={posterUrl}
                    alt="Preview"
                    className="w-14 h-14 rounded-xl object-cover border border-zinc-200 dark:border-zinc-700 shrink-0 bg-black"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-xl bg-emerald-100/70 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0 font-bold text-xs uppercase">
                    {selectedFile.name.split('.').pop() || 'FILE'}
                  </div>
                )}

                <div className="min-w-0">
                  <h4 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white truncate">
                    {selectedFile.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <span>{(selectedFile.size / (1024 * 1024)).toFixed(1)} MB</span>
                    {metadata?.duration && (
                      <>
                        <span>&bull;</span>
                        <span>{Math.floor(metadata.duration)}s</span>
                      </>
                    )}
                    {metadata?.width && metadata?.height && (
                      <>
                        <span>&bull;</span>
                        <span>{metadata.width}x{metadata.height}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-semibold text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 p-2 rounded-xl hover:bg-zinc-200/60 dark:hover:bg-zinc-700 transition-colors shrink-0 cursor-pointer"
                title="Trocar arquivo"
              >
                Trocar
              </button>
            </div>

            {/* Target Format Selector */}
            <FormatSelector
              selectedFormat={targetFormat}
              onFormatChange={handleFormatChange}
            />

            {/* Smart Preset Selector */}
            <PresetSelector
              format={targetFormat}
              selectedPreset={selectedPreset}
              onPresetChange={setSelectedPreset}
            />

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
                <span>{tClient('action.convert')} ({targetFormat.toUpperCase()})</span>
              </button>
              <p className="text-center text-[11px] text-zinc-500 dark:text-zinc-400 pt-2">
                {tClient('privacy.badge')}
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
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Conversion Error</h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                {errorMessage || 'An error occurred during video transcoding.'}
              </p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white text-white dark:text-zinc-900 rounded-xl font-semibold text-sm transition-all cursor-pointer"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
