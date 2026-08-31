import { ui } from './ui';
import type { SupportedLanguage } from './languages';

export function getClientLang(): SupportedLanguage {
  if (typeof document !== 'undefined') {
    const htmlLang = document.documentElement.lang;
    if (htmlLang) {
      if (htmlLang.startsWith('pt')) return 'pt';
      if (htmlLang.startsWith('en')) return 'en';
      if (htmlLang.startsWith('es')) return 'es';
      if (htmlLang.startsWith('fr')) return 'fr';
      if (htmlLang.startsWith('ja')) return 'ja';
      if (htmlLang.startsWith('zh')) return 'zh';
      if (htmlLang.startsWith('no') || htmlLang.startsWith('nb')) return 'no';
      if (htmlLang.startsWith('tr')) return 'tr';
      if (htmlLang.startsWith('pl')) return 'pl';
    }
    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);
    if (segments[0] && ['en', 'es', 'fr', 'ja', 'zh', 'no', 'tr', 'pl'].includes(segments[0])) {
      return segments[0] as SupportedLanguage;
    }
  }
  return 'pt';
}

export function tClient(key: string, lang?: SupportedLanguage): string {
  const activeLang = lang || getClientLang();
  const dict = ui[activeLang] || ui.pt;
  return dict[key] || ui.pt[key] || key;
}
