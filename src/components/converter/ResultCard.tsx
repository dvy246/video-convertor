import React, { useState } from 'react';
import type { ConversionResult } from '../../lib/ffmpeg/types';
import { formatBytes } from '../../lib/ffmpeg/metadata';

interface ResultCardProps {
  result: ConversionResult;
  posterUrl?: string;
  posterBlob?: Blob;
  onReset: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ 
  result, 
  posterUrl, 
  posterBlob, 
  onReset 
}) => {
  const [copiedEmbed, setCopiedEmbed] = useState(false);
  const [showEmbedCode, setShowEmbedCode] = useState(false);

  const isVideo = result.format !== 'mp3' && result.format !== 'gif';
  const isAudio = result.format === 'mp3';
  const isGif = result.format === 'gif';

  const embedCode = isVideo ? `<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <video
    controls
    playsinline
    preload="metadata"
    ${posterUrl ? `poster="${result.fileName.replace(/\.[^/.]+$/, "")}_poster.jpg"` : ''}
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain; background: #000;"
  >
    <source src="${result.fileName}" type="${result.blob.type || 'video/mp4'}" />
    Seu navegador não suporta a tag de vídeo HTML5.
  </video>
</div>` : '';

  const handleCopyEmbed = () => {
    if (!embedCode) return;
    navigator.clipboard.writeText(embedCode).then(() => {
      setCopiedEmbed(true);
      setTimeout(() => setCopiedEmbed(false), 2500);
    });
  };

  const downloadPoster = () => {
    if (!posterUrl) return;
    const a = document.createElement('a');
    a.href = posterUrl;
    a.download = `${result.fileName.replace(/\.[^/.]+$/, '')}_poster.jpg`;
    a.click();
  };

  return (
    <div className="w-full bg-white dark:bg-zinc-900 border border-emerald-200/90 dark:border-emerald-800/70 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-5">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/60 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
              Conversão Concluída com Sucesso!
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Processado em {(result.timeTakenMs / 1000).toFixed(1)} segundos no seu navegador
            </p>
          </div>
        </div>

        <span className="self-start sm:self-auto uppercase tracking-wider text-xs font-extrabold px-3.5 py-1 bg-emerald-100/70 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 rounded-full border border-emerald-200/50 dark:border-emerald-800/60">
          {result.format.toUpperCase()}
        </span>
      </div>

      {/* File Size Comparison Bar */}
      <div className="bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/80 rounded-2xl p-4 sm:p-5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-300">
          <div>
            Arquivo: <span className="font-mono text-zinc-900 dark:text-white font-semibold">{result.fileName}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Original: <strong className="text-zinc-800 dark:text-zinc-200">{formatBytes(result.originalSize)}</strong></span>
            <span>&rarr;</span>
            <span>Convertido: <strong className="text-emerald-700 dark:text-emerald-400">{formatBytes(result.outputSize)}</strong></span>
          </div>
        </div>

        {result.reductionPercentage > 0 && (
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                Economia de Espaço: {result.reductionPercentage}% menor
              </span>
              <span className="text-zinc-500 dark:text-zinc-400 font-mono text-[11px]">
                -{formatBytes(result.originalSize - result.outputSize)}
              </span>
            </div>
            <div className="w-full h-2.5 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 dark:bg-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.max(10, 100 - result.reductionPercentage)}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Media Preview (if supported) */}
      <div className="rounded-2xl overflow-hidden bg-zinc-950 flex items-center justify-center max-h-[380px] shadow-inner">
        {isVideo && (
          <video
            src={result.downloadUrl}
            poster={posterUrl}
            controls
            playsInline
            className="w-full max-h-[380px] object-contain"
          />
        )}
        {isAudio && (
          <div className="w-full p-8 bg-zinc-900 flex flex-col items-center gap-4">
            <div className="text-xs text-zinc-400 font-medium">Faixa de Áudio MP3 Extraída</div>
            <audio src={result.downloadUrl} controls className="w-full max-w-md" />
          </div>
        )}
        {isGif && (
          <img
            src={result.downloadUrl}
            alt="GIF Animado Convertido"
            className="w-full max-h-[380px] object-contain"
          />
        )}
      </div>

      {/* Primary Download & Action CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
        <a
          href={result.downloadUrl}
          download={result.fileName}
          className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Baixar Arquivo Convertido</span>
        </a>

        {posterUrl && (
          <button
            type="button"
            onClick={downloadPoster}
            className="w-full sm:w-auto px-4 py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
            title="Baixar imagem de capa (poster frame)"
          >
            <svg className="w-4 h-4 text-zinc-600 dark:text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Baixar Capa (Poster)</span>
          </button>
        )}

        <button
          type="button"
          onClick={onReset}
          className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 font-semibold text-sm transition-all active:scale-[0.98] cursor-pointer"
        >
          Converter Outro
        </button>
      </div>

      {/* Responsive HTML Embed Code Generator (For Web & Bloggers) */}
      {isVideo && (
        <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4 space-y-3">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setShowEmbedCode(!showEmbedCode)}
              className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span>{showEmbedCode ? 'Ocultar Código de Incorporação HTML' : 'Gerar Código HTML5 Responsivo (<video>)'}</span>
            </button>

            {showEmbedCode && (
              <button
                type="button"
                onClick={handleCopyEmbed}
                className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800 flex items-center gap-1 cursor-pointer"
              >
                {copiedEmbed ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    <span>Copiar Código HTML</span>
                  </>
                )}
              </button>
            )}
          </div>

          {showEmbedCode && (
            <div className="bg-zinc-900 rounded-xl p-3.5 font-mono text-xs text-emerald-400 overflow-x-auto border border-zinc-800">
              <pre className="whitespace-pre">{embedCode}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
