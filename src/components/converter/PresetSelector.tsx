import React from 'react';
import type { OutputFormat, PresetId } from '../../lib/ffmpeg/types';
import { PRESETS, FORMAT_DETAILS } from '../../lib/ffmpeg/presets';
import { tClient } from '../../i18n/client';
import type { SupportedLanguage } from '../../i18n/languages';

interface PresetSelectorProps {
  format: OutputFormat;
  selectedPreset: PresetId;
  onPresetChange: (presetId: PresetId) => void;
  disabled?: boolean;
  lang?: SupportedLanguage;
}

export const PresetSelector: React.FC<PresetSelectorProps> = ({
  format,
  selectedPreset,
  onPresetChange,
  disabled = false,
  lang
}) => {
  const availablePresetIds = FORMAT_DETAILS[format].popularPresets;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {tClient('preset.selectTitle', lang)}
        </label>
        <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-900/60 px-2 py-0.5 rounded-full">
          {tClient('preset.noConfig', lang)}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="radiogroup" aria-label="Preset selection">
        {availablePresetIds.map((presetId) => {
          const preset = PRESETS[presetId];
          const isSelected = selectedPreset === presetId;
          const translatedLabel = tClient(`preset.${presetId}`, lang) !== `preset.${presetId}` 
            ? tClient(`preset.${presetId}`, lang) 
            : preset.label;

          return (
            <button
              key={presetId}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={disabled}
              onClick={() => onPresetChange(presetId)}
              className={`flex flex-col text-left p-3.5 rounded-xl border transition-all active:scale-[0.99] ${
                isSelected
                  ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-500 ring-1 ring-emerald-500 shadow-xs'
                  : 'bg-white dark:bg-zinc-800/80 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50/70 dark:hover:bg-zinc-800'
              } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className={`text-sm font-semibold ${isSelected ? 'text-emerald-950 dark:text-emerald-300' : 'text-zinc-900 dark:text-zinc-100'}`}>
                  {translatedLabel}
                </span>
                {preset.badge && (
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-md shrink-0 ${
                    isSelected ? 'bg-emerald-600 text-white' : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300'
                  }`}>
                    {preset.badge}
                  </span>
                )}
              </div>
              <p className={`text-xs leading-relaxed ${isSelected ? 'text-emerald-800/90 dark:text-emerald-400/90' : 'text-zinc-500 dark:text-zinc-400'}`}>
                {preset.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
