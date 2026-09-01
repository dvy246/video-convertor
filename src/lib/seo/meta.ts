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
  description: 'Conversor e compressor de vídeo gratuito no navegador sem upload de arquivos. Processamento local e privado via WebAssembly.',
  defaultLocale: 'pt-BR',
  themeColor: '#059669',
  defaultOgImage: 'https://conversordevideo.com/og-image.png',
  defaultKeywords: [
    'conversor de video',
    'conversor de video online',
    'converter video em audio',
    'extrair audio de video',
    'compactar video',
    'compressor de video',
    'redimensionar video',
    'video para gif',
    'converter mov para mp4',
    'conversor de video para mp3',
    'comprimir video online',
    'conversor de video gratis'
  ]
};

export const DEFAULT_KEYWORDS_BY_LANG: Record<string, string[]> = {
  pt: SITE_CONFIG.defaultKeywords,
  en: [
    'video converter',
    'free video converter',
    'online video converter',
    'video to mp3',
    'extract audio from video',
    'compress video',
    'video compressor',
    'resize video',
    'video to gif',
    'convert mov to mp4',
    'convert mkv to mp4',
    'private video converter'
  ],
  es: [
    'convertidor de video',
    'convertidor de video online',
    'convertir video a mp3',
    'extraer audio de video',
    'comprimir video',
    'compresor de video',
    'redimensionar video',
    'video a gif',
    'convertir mov a mp4',
    'convertir video a audio',
    'convertidor de video gratis'
  ],
  fr: [
    'convertisseur video',
    'convertisseur video en ligne',
    'convertir video en mp3',
    'extraire audio video',
    'compresser video',
    'compresseur video',
    'redimensionner video',
    'video en gif',
    'convertir mov en mp4',
    'convertisseur video gratuit'
  ],
  ja: [
    '動画変換',
    'オンライン動画変換',
    '動画をmp3に変換',
    '動画から音声抽出',
    '動画圧縮',
    '動画リサイズ',
    '動画gif変換',
    'mov mp4 変換',
    '無料動画変換',
    '安全な動画変換'
  ],
  zh: [
    '视频转换器',
    '在线视频转换',
    '视频转mp3',
    '提取视频音频',
    '视频压缩',
    '调整视频尺寸',
    '视频转gif',
    'mov转mp4',
    '免费视频转换',
    '本地视频处理'
  ],
  no: [
    'videokonverterer',
    'gratis videokonvertering',
    'video til mp3',
    'trekk ut lyd fra video',
    'komprimer video',
    'videokomprimering',
    'endre videostørrelse',
    'video til gif',
    'konverter mov til mp4'
  ],
  tr: [
    'video dönüştürücü',
    'ücretsiz video dönüştürücü',
    'video mp3 dönüştürme',
    'videodan ses çıkarma',
    'video sıkıştırma',
    'video boyutu küçültme',
    'video gif yapma',
    'mov mp4 dönüştürücü'
  ],
  pl: [
    'konwerter wideo',
    'darmowy konwerter wideo',
    'wideo na mp3',
    'wyodrębnij dźwięk z wideo',
    'kompresuj wideo',
    'kompresor wideo',
    'zmień rozmiar wideo',
    'wideo na gif',
    'konwertuj mov na mp4'
  ]
};

export function getDefaultKeywords(lang?: string): string[] {
  if (!lang) return SITE_CONFIG.defaultKeywords;
  return DEFAULT_KEYWORDS_BY_LANG[lang] || DEFAULT_KEYWORDS_BY_LANG.en || SITE_CONFIG.defaultKeywords;
}

export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/') return SITE_CONFIG.url;
  return `${SITE_CONFIG.url}${cleanPath}`;
}
