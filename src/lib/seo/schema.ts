import { SITE_CONFIG } from './meta';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
  position: number;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

const LOCALIZED_FEATURES: Record<string, string[]> = {
  pt: [
    'Processamento de vídeo e áudio diretamente no navegador via WebAssembly',
    'Sem necessidade de cadastro ou e-mail',
    'Suporte para MP4, MOV, MP3, GIF, WebM, AVI, MKV',
    'Compressão inteligente para WhatsApp e e-mail',
    'Projetado para privacidade — arquivos de mídia não são enviados para servidores'
  ],
  en: [
    'Direct in-browser video and audio processing via WebAssembly',
    'No registration or email required',
    'Support for MP4, MOV, MP3, GIF, WebM, AVI, MKV and more',
    'Smart compression optimized for WhatsApp and email',
    'Zero cloud uploads — 100% private local processing'
  ],
  es: [
    'Procesamiento de video y audio en el navegador mediante WebAssembly',
    'Sin registro ni correo electrónico requerido',
    'Compatible con MP4, MOV, MP3, GIF, WebM, AVI, MKV',
    'Compresión inteligente para WhatsApp y correo electrónico',
    'Privacidad total: los archivos nunca se suben a servidores externos'
  ],
  fr: [
    'Traitement vidéo et audio directement dans le navigateur via WebAssembly',
    'Aucune inscription ni e-mail requis',
    'Prise en charge de MP4, MOV, MP3, GIF, WebM, AVI, MKV',
    'Compression intelligente optimisée pour WhatsApp et e-mail',
    'Confidentialité absolue : aucun fichier téléversé sur un serveur'
  ],
  ja: [
    'WebAssemblyによるブラウザ内ローカル動画・音声処理',
    'ユーザー登録やメールアドレス不要',
    'MP4, MOV, MP3, GIF, WebM, AVI, MKVなど多数の形式に対応',
    'WhatsAppやメール添付に最適なスマート圧縮',
    '100%のプライバシー保護：外部サーバーへのファイル送信ゼロ'
  ],
  zh: [
    '基于 WebAssembly 的浏览器本地视频与音频转换处理',
    '无需注册账户或提供电子邮箱',
    '支持 MP4, MOV, MP3, GIF, WebM, AVI, MKV 等多种主流格式',
    '针对社交软件及邮件发送的智能文件压缩',
    '纯本地私密运行：零文件上传至外部云端服务器'
  ],
  no: [
    'Direkte videobehandling i nettleseren via WebAssembly',
    'Ingen registrering eller e-post nødvendig',
    'Støtte for MP4, MOV, MP3, GIF, WebM, AVI, MKV',
    'Smart komprimering for WhatsApp og e-post',
    'Fullt personvern — ingen filer lastes opp til servere'
  ],
  tr: [
    'WebAssembly ile tarayıcıda doğrudan video ve ses işleme',
    'Kayıt veya e-posta gerekmez',
    'MP4, MOV, MP3, GIF, WebM, AVI, MKV desteği',
    'WhatsApp ve e-posta için akıllı dosya boyutu küçültme',
    '%100 gizlilik: dosyalarınız asla sunuculara yüklenmez'
  ],
  pl: [
    'Przetwarzanie wideo i audio bezpośrednio w przeglądarce za pomocą WebAssembly',
    'Brak konieczności rejestracji i podawania adresu e-mail',
    'Obsługa formatów MP4, MOV, MP3, GIF, WebM, AVI, MKV',
    'Inteligentna kompresja zoptymalizowana pod kątem komunikatorów i e-mail',
    '100% prywatności — pliki nigdy nie są wysyłane na serwer'
  ]
};

const LOCALIZED_APP_DESCRIPTIONS: Record<string, string> = {
  pt: 'Conversor e compressor de vídeo gratuito no navegador sem upload de arquivos. Processamento local e privado.',
  en: 'Free online in-browser video converter and compressor without file uploads. Private and fast local WebAssembly processing.',
  es: 'Convertidor y compresor de video online gratis en el navegador sin subir archivos. Procesamiento local y privado.',
  fr: 'Convertisseur et compresseur vidéo gratuit en ligne dans le navigateur sans téléversement. Traitement local et privé.',
  ja: 'サーバーへのアップロード不要、ブラウザ完結型の無料オンライン動画変換・圧縮ツール。安心のローカル高速処理。',
  zh: '免上传文件的免费在线浏览器视频转换与压缩工具，基于 WebAssembly 的纯本地隐私快速处理。',
  no: 'Gratis nettbasert videokonverterer og komprimeringsverktøy i nettleseren uten opplasting. Privat og rask lokal behandling.',
  tr: 'Dosya yüklemesi gerektirmeyen, tarayıcı içi ücretsiz çevrimiçi video dönüştürücü ve sıkıştırıcı. Hızlı ve gizli yerel işlem.',
  pl: 'Darmowy konwerter i kompresor wideo online w przeglądarce bez przesyłania plików. Prywatne i szybkie przetwarzanie lokalne.'
};

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': SITE_CONFIG.name,
    'alternateName': 'ConversordeVideo.com',
    'url': SITE_CONFIG.url,
    'logo': `${SITE_CONFIG.url}/favicon.svg`,
    'email': 'suporte@conversordevideo.com',
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'customer support',
      'email': 'suporte@conversordevideo.com',
      'url': `${SITE_CONFIG.url}/sobre`,
      'availableLanguage': [
        'Portuguese',
        'English',
        'Spanish',
        'French',
        'Japanese',
        'Chinese',
        'Norwegian',
        'Turkish',
        'Polish'
      ]
    }
  };
}

export function generateWebSiteSchema(lang?: string, description?: string) {
  const currentLang = lang || 'pt';
  const langTag = currentLang === 'pt' ? 'pt-BR' : currentLang;
  const desc = description || LOCALIZED_APP_DESCRIPTIONS[currentLang] || SITE_CONFIG.description;
  const url = currentLang !== 'pt' ? `${SITE_CONFIG.url}/${currentLang}/` : `${SITE_CONFIG.url}/`;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': SITE_CONFIG.name,
    'url': url,
    'inLanguage': langTag,
    'description': desc
  };
}

export function generateWebApplicationSchema(options?: {
  name?: string;
  description?: string;
  url?: string;
  applicationSubCategory?: string;
  lang?: string;
  featureList?: string[];
}) {
  const currentLang = options?.lang || 'pt';
  const langTag = currentLang === 'pt' ? 'pt-BR' : currentLang;
  const features = options?.featureList || LOCALIZED_FEATURES[currentLang] || LOCALIZED_FEATURES.en || LOCALIZED_FEATURES.pt;
  const description = options?.description || LOCALIZED_APP_DESCRIPTIONS[currentLang] || LOCALIZED_APP_DESCRIPTIONS.pt;
  const currency = currentLang === 'pt' ? 'BRL' : 'USD';
  const appUrl = options?.url || (currentLang !== 'pt' ? `${SITE_CONFIG.url}/${currentLang}/` : `${SITE_CONFIG.url}/`);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': options?.name || SITE_CONFIG.name,
    'url': appUrl,
    'description': description,
    'applicationCategory': 'MultimediaApplication',
    'applicationSubCategory': options?.applicationSubCategory || 'Video Converter & Compressor',
    'operatingSystem': 'All (Web Browser)',
    'inLanguage': langTag,
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': currency
    },
    'browserRequirements': 'Requires modern browser with WebAssembly support (Chrome, Safari, Firefox, Edge)',
    'featureList': features
  };
}

export function generateHowToSchema(options: {
  name: string;
  description: string;
  totalTime?: string;
  steps: HowToStep[];
  lang?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': options.name,
    'description': options.description,
    'totalTime': options.totalTime || 'PT1M',
    'inLanguage': options.lang || 'pt-BR',
    'step': options.steps.map((step) => ({
      '@type': 'HowToStep',
      'position': step.position,
      'name': step.name,
      'text': step.text
    }))
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
}

export function generateCollectionPageSchema(options: {
  name: string;
  description: string;
  url: string;
  numberOfItems: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': options.name,
    'description': options.description,
    'url': options.url,
    'mainEntity': {
      '@type': 'ItemList',
      'numberOfItems': options.numberOfItems
    }
  };
}

