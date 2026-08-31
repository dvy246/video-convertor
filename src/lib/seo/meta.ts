export interface PageSEO {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  keywords?: string[];
  locale?: string;
}

export const SITE_CONFIG = {
  name: 'Conversor de Vídeo',
  shortName: 'ConversordeVideo.com',
  url: 'https://conversordevideo.com',
  defaultLocale: 'pt-BR',
  themeColor: '#059669',
  defaultOgImage: 'https://conversordevideo.com/og-image.png',
  defaultKeywords: [
    'conversor de video',
    'conversor de video online',
    'converter mov para mp4',
    'conversor de video para mp3',
    'converter video para gif',
    'comprimir video sem perder qualidade',
    'conversor de video whatsapp',
    'conversor de video gratis'
  ]
};

export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/') return SITE_CONFIG.url;
  return `${SITE_CONFIG.url}${cleanPath}`;
}
