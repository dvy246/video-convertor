import React from 'react';
import type { OutputFormat } from '../../lib/ffmpeg/types';
import { FORMAT_DETAILS } from '../../lib/ffmpeg/presets';
import { tClient } from '../../i18n/client';
import type { SupportedLanguage } from '../../i18n/languages';

interface FormatSelectorProps {
  selectedFormat: OutputFormat;
  onFormatChange: (format: OutputFormat) => void;
  disabled?: boolean;
  lang?: SupportedLanguage;
}

export const FormatSelector: React.FC<FormatSelectorProps> = ({
  selectedFormat,
  onFormatChange,
  disabled = false,
  lang
}) => {
  const formats: OutputFormat[] = ['mp4', 'mp3', 'gif', 'webm', 'mov', 'avi', 'mkv'];

  return (
    <div className="space-y-2">
      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        {tClient('format.selectTitle', lang)}
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2" role="radiogroup" aria-label="Output format selector">
        {formats.map((format) => {
          const isSelected = selectedFormat === format;

          return (
            <button
              key={format}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={disabled}
              onClick={() => onFormatChange(format)}
              className={`flex flex-col items-center justify-center py-2.5 px-3 rounded-xl text-center border font-medium text-sm transition-all active:scale-[0.98] ${
                isSelected
                  ? 'bg-zinc-900 dark:bg-emerald-600 text-white border-zinc-900 dark:border-emerald-600 shadow-sm'
                  : 'bg-white dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800'
              } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <span className="font-bold text-sm uppercase tracking-wide">
                {format}
              </span>
              <span className={`text-[10px] truncate max-w-full ${isSelected ? 'text-zinc-300 dark:text-emerald-100' : 'text-zinc-500 dark:text-zinc-400'}`}>
                {format === 'mp3' ? 'Audio' : format === 'gif' ? 'GIF' : 'Video'}
              </span>
            </button>
          );
        })}
      </div>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 pt-0.5">
        {FORMAT_DETAILS[selectedFormat].description}
      </p>
    </div>
  );
};
