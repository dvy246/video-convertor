import { languages, defaultLang, showDefaultLang, type SupportedLanguage } from './languages';
import { ui } from './ui';
import { SITE_CONFIG } from '../lib/seo/meta';

/**
 * Extracts the supported language from a URL pathname.
 * Defaults to 'pt' if at the root or if the prefix isn't a configured language.
 */
export function getLangFromUrl(url: URL): SupportedLanguage {
  const segments = url.pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && firstSegment in languages) {
    return firstSegment as SupportedLanguage;
  }
  return defaultLang;
}

/**
 * Clean path helper: removes any existing language prefix and returns the bare slug.
 * E.g., '/es/compressor-de-video' -> '/compressor-de-video'
 *       '/compressor-de-video' -> '/compressor-de-video'
 *       '/es/' -> '/'
 *       '/' -> '/'
 */
export function stripLangFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    segments.shift();
  }
  const clean = '/' + segments.join('/');
  return clean === '' ? '/' : clean;
}

/**
 * Returns a translation lookup function for the given language.
 * Falls back to defaultLang ('pt') if a key is missing.
 */
export function useTranslations(lang: SupportedLanguage) {
  const localizedUI = ui[lang] || ui[defaultLang];
  return function t(key: string): string {
    return localizedUI[key] || ui[defaultLang][key] || key;
  };
}

/**
 * Returns a function to prefix paths for the target language.
 * Default language ('pt') is unprefixed. Non-default languages are prefixed with '/<lang>'.
 */
export function useTranslatedPath(lang: SupportedLanguage) {
  return function translatePath(path: string, targetLang: SupportedLanguage = lang): string {
    const cleanPath = stripLangFromPath(path);
    if (!showDefaultLang && targetLang === defaultLang) {
      return cleanPath;
    }
    return cleanPath === '/' ? `/${targetLang}` : `/${targetLang}${cleanPath}`;
  };
}

/**
 * Generates an array of hreflang alternate URL objects for the current route across all supported languages.
 */
export function getAlternateLanguageUrls(pathname: string): { lang: SupportedLanguage; hreflang: string; href: string }[] {
  const cleanPath = stripLangFromPath(pathname);
  const siteUrl = SITE_CONFIG.url.replace(/\/$/, '');

  const alternates = (Object.keys(languages) as SupportedLanguage[]).map((lang) => {
    const langInfo = languages[lang];
    const path = !showDefaultLang && lang === defaultLang
      ? (cleanPath === '/' ? '' : cleanPath)
      : `/${lang}${cleanPath === '/' ? '' : cleanPath}`;
    
    return {
      lang,
      hreflang: langInfo.code,
      href: `${siteUrl}${path || '/'}`
    };
  });

  return alternates;
}
