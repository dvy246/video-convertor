import React, { useState, useMemo } from 'react';
import type { LocalizedDirectoryToolItem, ToolCategory } from '../../data/allToolsData';
import type { SupportedLanguage } from '../../i18n/languages';

export interface ToolsDirectoryLabels {
  searchPlaceholder: string;
  filterAll: string;
  filterVideo: string;
  filterCompress: string;
  filterAudio: string;
  filterResize: string;
  filterGif: string;
  filterDevices: string;
  countShowing: string;
  countOf: string;
  countTools: string;
  emptyTitle: string;
  emptyDesc: string;
  clearFilters: string;
  openTool: string;
  statSpeed: string;
  statPrivacy: string;
  statFree: string;
}

interface Props {
  tools: LocalizedDirectoryToolItem[];
  lang: SupportedLanguage;
  labels: ToolsDirectoryLabels;
}

interface CategoryOption {
  id: 'all' | ToolCategory;
  label: string;
  icon: string;
}

export default function ToolsDirectory({ tools, lang, labels }: Props) {
  const [activeCategory, setActiveCategory] = useState<'all' | ToolCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: CategoryOption[] = useMemo(() => [
    { id: 'all', label: labels.filterAll, icon: '✨' },
    { id: 'video', label: labels.filterVideo, icon: '🎬' },
    { id: 'compress', label: labels.filterCompress, icon: '🗜️' },
    { id: 'audio', label: labels.filterAudio, icon: '🎵' },
    { id: 'resize', label: labels.filterResize, icon: '📐' },
    { id: 'gif', label: labels.filterGif, icon: '🎞️' },
    { id: 'devices', label: labels.filterDevices, icon: '📱' },
  ], [labels]);

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: tools.length };
    for (const t of tools) {
      counts[t.category] = (counts[t.category] || 0) + 1;
    }
    return counts;
  }, [tools]);

  // Filtered tools
  const filteredTools = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return tools.filter((t) => {
      // Category check
      if (activeCategory !== 'all' && t.category !== activeCategory) {
        return false;
      }
      // Search query check
      if (!q) return true;

      const inTitle = t.title.toLowerCase().includes(q);
      const inDesc = t.description.toLowerCase().includes(q);
      const inSlug = t.slug.toLowerCase().includes(q);
      const inBadge = t.badge.toLowerCase().includes(q);
      const inTarget = t.targetFormat.toLowerCase().includes(q);
      const inSources = t.sourceFormats.some((sf) => sf.toLowerCase().includes(q));

      return inTitle || inDesc || inSlug || inBadge || inTarget || inSources;
    });
  }, [tools, activeCategory, searchQuery]);

  const handleReset = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Controls: Search Bar & Stats */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-2xl">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={labels.searchPlaceholder}
            className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all shadow-xs"
            aria-label={labels.searchPlaceholder}
          />

          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer"
              aria-label="Clear search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Counter Badge */}
        <div className="flex items-center gap-2 self-start md:self-auto text-xs font-bold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-4 py-2.5 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>
            {labels.countShowing} <strong className="text-zinc-900 dark:text-white">{filteredTools.length}</strong> {labels.countOf} {tools.length} {labels.countTools}
          </span>
        </div>
      </div>

      {/* Category Pills Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = categoryCounts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 scale-[1.02]'
                  : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                  isActive
                    ? 'bg-emerald-700/60 text-white'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTools.map((tool) => (
            <a
              key={tool.slug}
              href={tool.href}
              className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 shadow-xs hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-200 hover:-translate-y-0.5 overflow-hidden"
            >
              {/* Top Row: Icon & Badges */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-900/50 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d={tool.icon} />
                    </svg>
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    {tool.isNew && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900/50">
                        Novo
                      </span>
                    )}
                    {tool.isPopular && !tool.isNew && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50">
                        Popular
                      </span>
                    )}
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700">
                      {tool.targetFormat}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug mb-1.5">
                  {tool.title}
                </h2>

                {/* Description */}
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2 mb-4">
                  {tool.description}
                </p>
              </div>

              {/* Bottom Row: Source Formats & Open CTA */}
              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-2 mt-auto">
                <div className="flex items-center gap-1 overflow-hidden">
                  {tool.sourceFormats.slice(0, 4).map((fmt, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 uppercase tracking-tight"
                    >
                      {fmt}
                    </span>
                  ))}
                  {tool.sourceFormats.length > 4 && (
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold">
                      +{tool.sourceFormats.length - 4}
                    </span>
                  )}
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform shrink-0">
                  <span>{labels.openTool}</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800 space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-zinc-200/80 dark:bg-zinc-800 flex items-center justify-center text-2xl">
            🔍
          </div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-white">
            {labels.emptyTitle}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
            {labels.emptyDesc}
          </p>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <span>{labels.clearFilters}</span>
          </button>
        </div>
      )}

      {/* Bottom Feature Badges */}
      <div className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 text-xs font-bold text-zinc-700 dark:text-zinc-300">
          {labels.statSpeed}
        </div>
        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 text-xs font-bold text-zinc-700 dark:text-zinc-300">
          {labels.statPrivacy}
        </div>
        <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 text-xs font-bold text-zinc-700 dark:text-zinc-300">
          {labels.statFree}
        </div>
      </div>

    </div>
  );
}
