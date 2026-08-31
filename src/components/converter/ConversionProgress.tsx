import React from 'react';
import type { ConversionProgress as ProgressData } from '../../lib/ffmpeg/types';

interface ConversionProgressProps {
  progress: ProgressData;
  fileName: string;
  onCancel?: () => void;
}

export const ConversionProgress: React.FC<ConversionProgressProps> = ({
  progress,
  fileName,
  onCancel
}) => {
  return (
    <div className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <h4 className="text-base font-semibold text-zinc-900 dark:text-white">
              Convertendo no seu navegador...
            </h4>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate max-w-sm sm:max-w-md">
            Arquivo: <span className="font-mono text-zinc-700 dark:text-zinc-300 font-medium">{fileName}</span>
          </p>
        </div>

        <div className="flex items-center gap-2 text-right">
          <span className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
            {progress.percent}%
          </span>
        </div>
      </div>

      {/* Progress Track */}
      <div className="space-y-2">
        <div 
          className="w-full h-3.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden p-0.5 border border-zinc-200 dark:border-zinc-700"
          role="progressbar"
          aria-valuenow={progress.percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progresso da conversão do vídeo"
        >
          <div
            className="h-full bg-emerald-500 dark:bg-emerald-400 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
            style={{ width: `${Math.max(5, progress.percent)}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse-subtle"></div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <span className="font-medium text-zinc-700 dark:text-zinc-300">
            {progress.statusMessage}
          </span>
          {progress.fps && progress.fps > 0 && (
            <span className="font-mono text-zinc-400 dark:text-zinc-500">
              Velocidade: {progress.fps} FPS
            </span>
          )}
        </div>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/60 rounded-xl p-3.5 border border-zinc-100 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>O vídeo está sendo processado na memória RAM do seu aparelho sem uso de internet.</span>
        </div>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="text-zinc-500 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 text-xs font-medium underline underline-offset-2 shrink-0 transition-colors cursor-pointer"
          >
            Cancelar conversão
          </button>
        )}
      </div>
    </div>
  );
};
