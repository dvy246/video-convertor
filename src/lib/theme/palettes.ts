export interface ColorPalette {
  id: 'emerald' | 'caramel' | 'espresso' | 'meadow' | 'oxford' | 'gelato' | 'candy' | 'slate' | 'pastel' | 'beige' | 'indigo' | 'cyan' | 'purple' | 'amber' | 'blue' | 'rose' | 'mono';
  name: string;
  emoji: string;
  tagline: string;
  primary: string;
  secondary: string;
  badgeBg: string;
  badgeText: string;
}

export const COLOR_PALETTES: ColorPalette[] = [
  {
    id: 'gelato',
    name: 'Pastel Gelato',
    emoji: '🍧',
    tagline: 'Bubblegum, Glacier Ice & Mint Foam (Padrão)',
    primary: '#f9b2d7',
    secondary: '#daf9de',
    badgeBg: 'bg-pink-400',
    badgeText: 'text-pink-400'
  },
  {
    id: 'emerald',
    name: 'Emerald Mint',
    emoji: '🌿',
    tagline: 'Fresco & Confiável',
    primary: '#10b981',
    secondary: '#14b8a6',
    badgeBg: 'bg-emerald-500',
    badgeText: 'text-emerald-500'
  },
  {
    id: 'caramel',
    name: 'Warm Caramel',
    emoji: '🍯',
    tagline: 'Golden Toffee, Chestnut & Mahogany',
    primary: '#8c5a3c',
    secondary: '#c08552',
    badgeBg: 'bg-amber-700',
    badgeText: 'text-amber-700'
  },
  {
    id: 'espresso',
    name: 'Roasted Espresso',
    emoji: '🪵',
    tagline: 'Deep Walnut, Dark Roast & Custard',
    primary: '#664343',
    secondary: '#795757',
    badgeBg: 'bg-stone-700',
    badgeText: 'text-stone-700'
  },
  {
    id: 'meadow',
    name: 'Botanical Meadow',
    emoji: '🌱',
    tagline: 'Forest Green, Sprout & Sunlit Vanilla',
    primary: '#2a7c13',
    secondary: '#76c457',
    badgeBg: 'bg-lime-500',
    badgeText: 'text-lime-500'
  },
  {
    id: 'oxford',
    name: 'Oxford Navy & Sand',
    emoji: '⚓',
    tagline: 'Midnight Navy, Almond Sand & Chestnut Leather',
    primary: '#0a2947',
    secondary: '#8b5e3c',
    badgeBg: 'bg-blue-900',
    badgeText: 'text-blue-900'
  },
  {
    id: 'candy',
    name: 'Cotton Candy',
    emoji: '🍬',
    tagline: 'Powder Blue, Iris & Pastel Blush',
    primary: '#aa96da',
    secondary: '#fcbad3',
    badgeBg: 'bg-purple-400',
    badgeText: 'text-purple-400'
  },
  {
    id: 'slate',
    name: 'Slate & Electric Teal',
    emoji: '🌊',
    tagline: 'Nordic Slate & Electric Teal Accent',
    primary: '#00adb5',
    secondary: '#393e46',
    badgeBg: 'bg-cyan-500',
    badgeText: 'text-cyan-500'
  },
  {
    id: 'pastel',
    name: 'Pastel Dream',
    emoji: '🌸',
    tagline: 'Vintage Lilac, Sky & Cedar',
    primary: '#946d6d',
    secondary: '#a290b7',
    badgeBg: 'bg-rose-400',
    badgeText: 'text-rose-400'
  },
  {
    id: 'beige',
    name: 'Beige & Chocolate',
    emoji: '☕',
    tagline: 'Warm Chocolate & Cream Luxury',
    primary: '#8d5b36',
    secondary: '#c4a47c',
    badgeBg: 'bg-amber-800',
    badgeText: 'text-amber-800'
  },
  {
    id: 'indigo',
    name: 'Electric Indigo',
    emoji: '⚡',
    tagline: 'Modern SaaS / Linear Vibe',
    primary: '#6366f1',
    secondary: '#8b5cf6',
    badgeBg: 'bg-indigo-500',
    badgeText: 'text-indigo-500'
  },
  {
    id: 'cyan',
    name: 'Cyber Cyan',
    emoji: '🌌',
    tagline: 'Futurista & High-Tech',
    primary: '#06b6d4',
    secondary: '#0ea5e9',
    badgeBg: 'bg-cyan-500',
    badgeText: 'text-cyan-500'
  },
  {
    id: 'purple',
    name: 'Neon Purple',
    emoji: '🔮',
    tagline: 'Vibrante & Criativo',
    primary: '#a855f7',
    secondary: '#d946ef',
    badgeBg: 'bg-purple-500',
    badgeText: 'text-purple-500'
  },
  {
    id: 'amber',
    name: 'Sunset Amber',
    emoji: '🌅',
    tagline: 'Quente & Energético',
    primary: '#f59e0b',
    secondary: '#f97316',
    badgeBg: 'bg-amber-500',
    badgeText: 'text-amber-500'
  },
  {
    id: 'blue',
    name: 'Cobalt Sapphire',
    emoji: '💎',
    tagline: 'Clássico & Corporativo',
    primary: '#3b82f6',
    secondary: '#0ea5e9',
    badgeBg: 'bg-blue-500',
    badgeText: 'text-blue-500'
  },
  {
    id: 'rose',
    name: 'Crimson Rose',
    emoji: '🌹',
    tagline: 'Sofisticado & Marcante',
    primary: '#f43f5e',
    secondary: '#ec4899',
    badgeBg: 'bg-rose-500',
    badgeText: 'text-rose-500'
  },
  {
    id: 'mono',
    name: 'Titanium Mono',
    emoji: '🖤',
    tagline: 'Minimalista & Brutalista',
    primary: '#71717a',
    secondary: '#a1a1aa',
    badgeBg: 'bg-zinc-500',
    badgeText: 'text-zinc-500'
  }
];

export function getStoredPalette(): string {
  if (typeof window === 'undefined') return 'gelato';
  return localStorage.getItem('color-palette') || 'gelato';
}

export function applyPalette(paletteId: string) {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-palette', paletteId);
  localStorage.setItem('color-palette', paletteId);
  window.dispatchEvent(new CustomEvent('palette-changed', { detail: { palette: paletteId } }));
}
