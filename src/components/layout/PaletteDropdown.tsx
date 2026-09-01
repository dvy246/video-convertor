import React, { useState, useEffect, useRef } from 'react';
import { COLOR_PALETTES, type ColorPalette, applyPalette, getStoredPalette } from '../../lib/theme/palettes';

interface Props {
  isMobileCompact?: boolean;
}

export default function PaletteDropdown({ isMobileCompact = false }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activePalette, setActivePalette] = useState<string>('gelato');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialPalette = getStoredPalette();
    setActivePalette(initialPalette);

    const handlePaletteChange = (e: CustomEvent<{ palette: string }>) => {
      setActivePalette(e.detail.palette);
    };
    window.addEventListener('palette-changed' as any, handlePaletteChange as any);

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('palette-changed' as any, handlePaletteChange as any);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (paletteId: string) => {
    setActivePalette(paletteId);
    applyPalette(paletteId);
    setIsOpen(false);
  };

  const currentObj = COLOR_PALETTES.find((p) => p.id === activePalette) || COLOR_PALETTES[0];

  if (isMobileCompact) {
    return (
      <div className="w-full space-y-2">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 px-1 flex items-center justify-between">
          <span>Paleta de Cores</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{currentObj.name}</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {COLOR_PALETTES.map((p) => {
            const isSelected = p.id === activePalette;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => handleSelect(p.id)}
                className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/60 ring-2 ring-emerald-500/20 shadow-xs'
                    : 'border-zinc-200/80 dark:border-zinc-700/80 bg-zinc-50 dark:bg-zinc-800/40 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
                title={p.name}
              >
                <div className="relative flex items-center shrink-0 w-6 h-6 mb-1">
                  <div
                    className="w-4.5 h-4.5 rounded-full shadow-2xs border border-white dark:border-zinc-900 absolute left-0 z-10"
                    style={{ backgroundColor: p.primary }}
                  />
                  <div
                    className="w-4 h-4 rounded-full shadow-2xs border border-white dark:border-zinc-900 absolute right-0 opacity-90"
                    style={{ backgroundColor: p.secondary }}
                  />
                </div>
                <span className="text-[10px] font-semibold text-zinc-800 dark:text-zinc-200 truncate max-w-full">
                  {p.emoji} {p.name.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Header Button Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Selecionar Paleta de Cores"
        aria-expanded={isOpen}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors text-xs font-medium cursor-pointer shadow-2xs"
      >
        {/* Dual Circle Swatch */}
        <div className="relative flex items-center shrink-0 w-5 h-5">
          <div
            className="w-3.5 h-3.5 rounded-full shadow-2xs border border-white dark:border-zinc-900 absolute left-0 z-10"
            style={{ backgroundColor: currentObj.primary }}
          />
          <div
            className="w-3 h-3 rounded-full shadow-2xs border border-white dark:border-zinc-900 absolute right-0 opacity-90"
            style={{ backgroundColor: currentObj.secondary }}
          />
        </div>

        <span className="hidden xl:inline font-medium text-xs">
          {currentObj.name}
        </span>
        <span className="xl:hidden font-medium text-xs">
          {currentObj.emoji}
        </span>

        <svg
          className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-zinc-600 dark:text-zinc-200' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-2xl shadow-zinc-950/20 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150 divide-y divide-zinc-100 dark:divide-zinc-800">
          <div className="px-3.5 py-2 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Paletas de Cores
            </span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
              8 Temas
            </span>
          </div>

          <div className="py-1 max-h-[300px] overflow-y-auto scrollbar-thin">
            {COLOR_PALETTES.map((p) => {
              const isSelected = p.id === activePalette;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelect(p.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors rounded-xl mx-1 max-w-[calc(100%-8px)] text-left cursor-pointer ${
                    isSelected
                      ? 'bg-zinc-100/90 dark:bg-zinc-800 text-zinc-950 dark:text-white font-bold'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {/* Swatch */}
                    <div className="relative flex items-center shrink-0 w-5 h-5">
                      <div
                        className="w-3.5 h-3.5 rounded-full shadow-2xs border border-white dark:border-zinc-900 absolute left-0 z-10"
                        style={{ backgroundColor: p.primary }}
                      />
                      <div
                        className="w-3 h-3 rounded-full shadow-2xs border border-white dark:border-zinc-900 absolute right-0 opacity-90"
                        style={{ backgroundColor: p.secondary }}
                      />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-xs font-semibold leading-tight">
                        {p.emoji} {p.name}
                      </span>
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500 leading-tight truncate max-w-[150px]">
                        {p.tagline}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[9px] shadow-xs shrink-0"
                      style={{ backgroundColor: p.primary }}
                    >
                      ✓
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
