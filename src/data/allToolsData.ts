import type { SupportedLanguage } from '../i18n/languages';
import { FORMAT_PAGES } from './formatPages';
import { getLocalizedFormatPage } from './localizedFormatPages';

export type ToolCategory = 'video' | 'compress' | 'audio' | 'resize' | 'gif' | 'devices';

export interface DirectoryToolItem {
  slug: string;
  category: ToolCategory;
  sourceFormats: string[];
  targetFormat: string;
  icon: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export interface LocalizedDirectoryToolItem {
  slug: string;
  href: string;
  title: string;
  description: string;
  badge: string;
  category: ToolCategory;
  sourceFormats: string[];
  targetFormat: string;
  icon: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export const ALL_DIRECTORY_TOOLS: DirectoryToolItem[] = [
  // 1. Core Video Converters (14 tools)
  {
    slug: 'conversor-de-video-para-mp4',
    category: 'video',
    sourceFormats: ['MOV', 'MKV', 'AVI', 'WebM', 'WMV', 'FLV'],
    targetFormat: 'MP4',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    isPopular: true
  },
  {
    slug: 'converter-mov-para-mp4',
    category: 'video',
    sourceFormats: ['MOV'],
    targetFormat: 'MP4',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    isPopular: true
  },
  {
    slug: 'converter-mkv-para-mp4',
    category: 'video',
    sourceFormats: ['MKV'],
    targetFormat: 'MP4',
    icon: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z',
    isPopular: true
  },
  {
    slug: 'converter-avi-para-mp4',
    category: 'video',
    sourceFormats: ['AVI'],
    targetFormat: 'MP4',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
  },
  {
    slug: 'converter-webm-para-mp4',
    category: 'video',
    sourceFormats: ['WebM'],
    targetFormat: 'MP4',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9'
  },
  {
    slug: 'converter-mp4-para-webm',
    category: 'video',
    sourceFormats: ['MP4'],
    targetFormat: 'WebM',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    slug: 'converter-wmv-para-mp4',
    category: 'video',
    sourceFormats: ['WMV'],
    targetFormat: 'MP4',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    slug: 'converter-flv-para-mp4',
    category: 'video',
    sourceFormats: ['FLV'],
    targetFormat: 'MP4',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    slug: 'converter-3gp-para-mp4',
    category: 'video',
    sourceFormats: ['3GP'],
    targetFormat: 'MP4',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
  },
  {
    slug: 'converter-m4v-para-mp4',
    category: 'video',
    sourceFormats: ['M4V'],
    targetFormat: 'MP4',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'
  },
  {
    slug: 'converter-rmvb-para-mp4',
    category: 'video',
    sourceFormats: ['RMVB', 'RM'],
    targetFormat: 'MP4',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
  },
  {
    slug: 'converter-divx-para-mp4',
    category: 'video',
    sourceFormats: ['DivX'],
    targetFormat: 'MP4',
    icon: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z'
  },
  {
    slug: 'converter-xvid-para-mp4',
    category: 'video',
    sourceFormats: ['XviD'],
    targetFormat: 'MP4',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
  },
  {
    slug: 'converter-ogv-para-mp4',
    category: 'video',
    sourceFormats: ['OGV'],
    targetFormat: 'MP4',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
  },
  {
    slug: 'converter-mxf-para-mp4',
    category: 'video',
    sourceFormats: ['MXF'],
    targetFormat: 'MP4',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
  },

  // 2. Compressors & Size Reducers (3 tools)
  {
    slug: 'compressor-de-video',
    category: 'compress',
    sourceFormats: ['MP4', 'MOV', 'MKV', 'AVI'],
    targetFormat: 'MP4',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    isPopular: true
  },
  {
    slug: 'compressor-de-video-mp4',
    category: 'compress',
    sourceFormats: ['MP4'],
    targetFormat: 'MP4',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  },
  {
    slug: 'compactar-video-para-whatsapp',
    category: 'compress',
    sourceFormats: ['MP4', 'MOV', 'AVI', 'MKV'],
    targetFormat: 'MP4',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    isNew: true,
    isPopular: true
  },
  // 3. Audio & MP3 Tools (5 tools)
  {
    slug: 'conversor-de-audio',
    category: 'audio',
    sourceFormats: ['WAV', 'AAC', 'M4A', 'FLAC', 'OGG', 'WMA'],
    targetFormat: 'MP3',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    isPopular: true
  },
  {
    slug: 'converter-video-em-audio',
    category: 'audio',
    sourceFormats: ['MP4', 'MOV', 'MKV', 'AVI', 'WebM'],
    targetFormat: 'MP3',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    isNew: true,
    isPopular: true
  },
  {
    slug: 'extrair-audio-de-video',
    category: 'audio',
    sourceFormats: ['MP4', 'MOV', 'MKV', 'AVI'],
    targetFormat: 'MP3',
    icon: 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z',
    isNew: true,
    isPopular: true
  },
  {
    slug: 'extrair-audio-de-video-do-youtube',
    category: 'audio',
    sourceFormats: ['MP4', 'WebM', 'MKV'],
    targetFormat: 'MP3',
    icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    isNew: true
  },
  {
    slug: 'converter-video-para-mp3',
    category: 'audio',
    sourceFormats: ['MP4', 'MOV', 'MKV', 'AVI', 'WebM'],
    targetFormat: 'MP3',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    isPopular: true
  },
  {
    slug: 'conversor-de-audio-para-mp3',
    category: 'audio',
    sourceFormats: ['WAV', 'AAC', 'M4A', 'FLAC', 'OGG', 'WMA'],
    targetFormat: 'MP3',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3'
  },
  // 4. Video Resizers & Scaling (3 tools)
  {
    slug: 'redimensionar-video',
    category: 'resize',
    sourceFormats: ['MP4', 'MOV', 'MKV', 'AVI'],
    targetFormat: 'MP4',
    icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4',
    isNew: true,
    isPopular: true
  },
  {
    slug: 'redimensionar-video-para-tiktok',
    category: 'resize',
    sourceFormats: ['MP4', 'MOV'],
    targetFormat: 'MP4',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    isNew: true,
    isPopular: true
  },
  {
    slug: 'redimensionar-video-para-instagram',
    category: 'resize',
    sourceFormats: ['MP4', 'MOV'],
    targetFormat: 'MP4',
    icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z',
    isNew: true
  },

  // 5. Animated GIF Tools (3 tools)
  {
    slug: 'video-para-gif',
    category: 'gif',
    sourceFormats: ['MP4', 'MOV', 'WebM', 'AVI'],
    targetFormat: 'GIF',
    icon: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z',
    isPopular: true
  },
  // 6. Camcorders, Devices & Social Platforms (10 tools)
  {
    slug: 'converter-video-iphone',
    category: 'devices',
    sourceFormats: ['MOV', 'HEVC', 'ProRes'],
    targetFormat: 'MP4',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    isPopular: true
  },
  {
    slug: 'converter-video-android',
    category: 'devices',
    sourceFormats: ['MP4', 'MKV', '3GP', 'WebM'],
    targetFormat: 'MP4',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
  },
  {
    slug: 'conversor-de-video-youtube',
    category: 'devices',
    sourceFormats: ['MP4', 'MOV', 'MKV', 'WebM'],
    targetFormat: 'MP4',
    icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    isPopular: true
  },
  {
    slug: 'converter-video-instagram',
    category: 'devices',
    sourceFormats: ['MP4', 'MOV', 'MKV'],
    targetFormat: 'MP4',
    icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z',
    isPopular: true
  },
  {
    slug: 'converter-m2ts-para-mp4',
    category: 'devices',
    sourceFormats: ['M2TS'],
    targetFormat: 'MP4',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
  },
  {
    slug: 'converter-mts-para-mp4',
    category: 'devices',
    sourceFormats: ['MTS'],
    targetFormat: 'MP4',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
  },
  {
    slug: 'converter-ts-para-mp4',
    category: 'devices',
    sourceFormats: ['TS'],
    targetFormat: 'MP4',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    slug: 'converter-vob-para-mp4',
    category: 'devices',
    sourceFormats: ['VOB'],
    targetFormat: 'MP4',
    icon: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0z M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z'
  },
  {
    slug: 'melhor-conversor-de-video-gratuito',
    category: 'devices',
    sourceFormats: ['Todos'],
    targetFormat: 'MP4',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    isPopular: true
  }
];

export function getLocalizedDirectoryTools(lang: SupportedLanguage): LocalizedDirectoryToolItem[] {
  const prefix = lang === 'pt' ? '' : `/${lang}`;
  
  return ALL_DIRECTORY_TOOLS.map((tool) => {
    const pageData = getLocalizedFormatPage(tool.slug, lang);
    const title = `${pageData.h1Prefix} ${pageData.h1Highlight} ${pageData.h1Suffix}`.trim();
    const description = pageData.metaDescription || pageData.whyDesc;
    const badge = pageData.badge;
    const href = `${prefix}/${tool.slug}`;

    return {
      slug: tool.slug,
      href,
      title,
      description,
      badge,
      category: tool.category,
      sourceFormats: tool.sourceFormats,
      targetFormat: tool.targetFormat,
      icon: tool.icon,
      isPopular: tool.isPopular,
      isNew: tool.isNew
    };
  });
}
