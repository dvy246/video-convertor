import React, { useState, useEffect, useRef } from 'react';
import { COLOR_PALETTES, type ColorPalette, applyPalette, getStoredPalette } from '../../lib/theme/palettes';

export default function PaletteStudio() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePalette, setActivePalette] = useState<string>('gelato');
  const [isDark, setIsDark] = useState<boolean>(true);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Read initial palette
    const initialPalette = getStoredPalette();
    setActivePalette(initialPalette);
    applyPalette(initialPalette);

    // Read initial theme mode
    const checkDark = document.documentElement.classList.contains('dark');
    setIsDark(checkDark);

    const handlePaletteChange = (e: CustomEvent<{ palette: string }>) => {
      setActivePalette(e.detail.palette);
    };

    window.addEventListener('palette-changed' as any, handlePaletteChange as any);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('palette-changed' as any, handlePaletteChange as any);
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectPalette = (palette: ColorPalette) => {
    setActivePalette(palette.id);
    applyPalette(palette.id);
  };

  const handleRandomize = () => {
    const remaining = COLOR_PALETTES.filter((p) => p.id !== activePalette);
    const random = remaining[Math.floor(Math.random() * remaining.length)];
    handleSelectPalette(random);
  };

  const handleToggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const currentObj = COLOR_PALETTES.find((p) => p.id === activePalette) || COLOR_PALETTES[0];

  return (
    <div className="fixed bottom-5 right-5 z-40 select-none font-sans" ref={panelRef}>
      {/* 1. Floating Pill Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800 shadow-xl shadow-zinc-950/15 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label="Personalizar Paleta de Cores"
        aria-expanded={isOpen}
      >
        {/* Animated Gradient Ring / Pill Indicator */}
        <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
          <span
            className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
            style={{ backgroundColor: currentObj.primary }}
          />
          <span
            className="relative inline-flex rounded-full h-3 w-3 border border-white/40 shadow-xs"
            style={{
              background: `linear-gradient(135deg, ${currentObj.primary}, ${currentObj.secondary})`
            }}
          />
        </span>

        <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 tracking-tight flex items-center gap-1.5">
          <span>{currentObj.emoji}</span>
          <span className="hidden sm:inline">{currentObj.name}</span>
          <span className="sm:hidden">Cores</span>
        </span>

        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/80 leading-none">
          8
        </span>
      </button>

      {/* 2. Color Studio Popover Modal */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-[340px] sm:w-[380px] max-w-[92vw] rounded-3xl bg-white/98 dark:bg-zinc-900/98 backdrop-blur-2xl border border-zinc-200/90 dark:border-zinc-800 shadow-2xl shadow-zinc-950/30 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200 flex flex-col z-50">
          
          {/* Header */}
          <div className="px-5 py-4 border-b border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs shadow-xs"
                style={{
                  background: `linear-gradient(135deg, ${currentObj.primary}, ${currentObj.secondary})`
                }}
              >
                🎨
              </div>
              <div>
                <h3 className="font-bold text-sm text-zinc-900 dark:text-white leading-tight">
                  Color Palette Studio
                </h3>
                <p className="text-[11px] text-zinc-400 dark:text-zinc-500">
                  Teste todas as paletas ao vivo no servidor
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Palette Selection Grid */}
          <div className="p-3.5 max-h-[360px] overflow-y-auto space-y-1.5 scrollbar-thin">
            {COLOR_PALETTES.map((palette) => {
              const isSelected = palette.id === activePalette;
              return (
                <button
                  key={palette.id}
                  type="button"
                  onClick={() => handleSelectPalette(palette)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-2xl transition-all duration-150 cursor-pointer text-left ${
                    isSelected
                      ? 'bg-zinc-100/90 dark:bg-zinc-800/90 border border-zinc-300/80 dark:border-zinc-700 shadow-xs scale-[1.01]'
                      : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/40 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Dual Swatch Circle */}
                    <div className="relative flex items-center shrink-0 w-8 h-8">
                      <div
                        className="w-6 h-6 rounded-full shadow-xs border-2 border-white dark:border-zinc-900 absolute left-0 z-10"
                        style={{ backgroundColor: palette.primary }}
                      />
                      <div
                        className="w-5 h-5 rounded-full shadow-xs border-2 border-white dark:border-zinc-900 absolute right-0 opacity-90"
                        style={{ backgroundColor: palette.secondary }}
                      />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-zinc-900 dark:text-white">
                          {palette.name}
                        </span>
                        <span className="text-xs">{palette.emoji}</span>
                      </div>
                      <span className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                        {palette.tagline}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs shadow-xs"
                      style={{ backgroundColor: palette.primary }}
                    >
                      <svg className="w-3.5 h-3.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Actions Footer */}
          <div className="p-3 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-950/60 flex items-center justify-between gap-2 text-xs">
            {/* Randomize Button */}
            <button
              type="button"
              onClick={handleRandomize}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-700/80 font-medium transition-colors cursor-pointer shadow-2xs"
            >
              <span>🔀</span>
              <span>Aleatório</span>
            </button>

            {/* Dark / Light Quick Mode Toggle */}
            <button
              type="button"
              onClick={handleToggleTheme}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-700/80 font-medium transition-colors cursor-pointer shadow-2xs"
            >
              <span>{isDark ? '☀️ Claro' : '🌙 Escuro'}</span>
            </button>

            {/* Reset to Default */}
            <button
              type="button"
              onClick={() => handleSelectPalette(COLOR_PALETTES[0])}
              className="text-[11px] text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:underline cursor-pointer"
            >
              Restaurar
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
