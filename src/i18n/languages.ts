export const languages = {
  pt: { name: 'Português', label: 'Português', code: 'pt-BR', flag: '🇧🇷' },
  en: { name: 'English', label: 'English', code: 'en', flag: '🇺🇸' },
  es: { name: 'Español', label: 'Español', code: 'es', flag: '🇪🇸' },
  fr: { name: 'Français', label: 'Français', code: 'fr', flag: '🇫🇷' },
  ja: { name: '日本語', label: '日本語', code: 'ja', flag: '🇯🇵' },
  zh: { name: '中文', label: '中文 (简体)', code: 'zh-CN', flag: '🇨🇳' },
  no: { name: 'Norsk', label: 'Norsk', code: 'no', flag: '🇳🇴' },
  tr: { name: 'Türkçe', label: 'Türkçe', code: 'tr', flag: '🇹🇷' },
  pl: { name: 'Polski', label: 'Polski', code: 'pl', flag: '🇵🇱' }
} as const;

export type SupportedLanguage = keyof typeof languages;
export const defaultLang: SupportedLanguage = 'pt';
export const nonDefaultLangs = (Object.keys(languages) as SupportedLanguage[]).filter(
  (l): l is SupportedLanguage => l !== defaultLang
);
export const showDefaultLang = false;
