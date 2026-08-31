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
    'url': SITE_CONFIG.url,
    'logo': `${SITE_CONFIG.url}/favicon.svg`,
    'sameAs': [],
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'customer support',
      'url': `${SITE_CONFIG.url}/sobre`,
      'availableLanguage': ['Portuguese', 'Spanish']
    }
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': SITE_CONFIG.name,
    'url': SITE_CONFIG.url,
    'inLanguage': 'pt-BR',
    'description': SITE_CONFIG.description
  };
}

export function generateWebApplicationSchema(options?: {
  name?: string;
  description?: string;
  url?: string;
  applicationSubCategory?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': options?.name || SITE_CONFIG.name,
    'url': options?.url || SITE_CONFIG.url,
    'description': options?.description || 'Conversor e compressor de vídeo gratuito no navegador sem upload de arquivos e 100% privado.',
    'applicationCategory': 'MultimediaApplication',
    'applicationSubCategory': options?.applicationSubCategory || 'Video Converter & Compressor',
    'operatingSystem': 'All (Web Browser)',
    'inLanguage': 'pt-BR',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'BRL'
    },
    'browserRequirements': 'Requires modern browser with WebAssembly support',
    'featureList': [
      'Conversão e compressão 100% no navegador (sem upload para servidores)',
      'Sem necessidade de cadastro ou e-mail',
      'Suporte para MP4, MOV, MP3, GIF, WebM, AVI, MKV',
      'Compressão inteligente para WhatsApp e e-mail',
      'Privacidade total em conformidade com a LGPD'
    ]
  };
}

export function generateHowToSchema(options: {
  name: string;
  description: string;
  totalTime?: string;
  steps: HowToStep[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': options.name,
    'description': options.description,
    'totalTime': options.totalTime || 'PT1M',
    'inLanguage': 'pt-BR',
    'step': options.steps.map((step) => ({
      '@type': 'HowToStep',
      'position': step.position,
      'name': step.name,
      'text': step.text,
      'url': `${SITE_CONFIG.url}/#passo-${step.position}`
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
