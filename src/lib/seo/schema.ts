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
      'availableLanguage': ['Portuguese', 'English', 'Spanish']
    }
  };
}

export function generateWebSiteSchema(lang?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': SITE_CONFIG.name,
    'url': SITE_CONFIG.url,
    'inLanguage': lang || 'pt-BR',
    'description': SITE_CONFIG.description
  };
}

export function generateWebApplicationSchema(options?: {
  name?: string;
  description?: string;
  url?: string;
  applicationSubCategory?: string;
  lang?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': options?.name || SITE_CONFIG.name,
    'url': options?.url || SITE_CONFIG.url,
    'description': options?.description || 'Conversor e compressor de vídeo gratuito no navegador sem upload de arquivos. Processamento local e privado.',
    'applicationCategory': 'MultimediaApplication',
    'applicationSubCategory': options?.applicationSubCategory || 'Video Converter & Compressor',
    'operatingSystem': 'All (Web Browser)',
    'inLanguage': options?.lang || 'pt-BR',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'BRL'
    },
    'browserRequirements': 'Requires modern browser with WebAssembly support',
    'featureList': [
      'Processamento de vídeo e áudio diretamente no navegador via WebAssembly',
      'Sem necessidade de cadastro ou e-mail',
      'Suporte para MP4, MOV, MP3, GIF, WebM, AVI, MKV',
      'Compressão inteligente para WhatsApp e e-mail',
      'Projetado para privacidade — arquivos de mídia não são enviados para servidores'
    ]
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

