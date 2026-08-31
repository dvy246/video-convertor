import { FORMAT_PAGES, type FormatPageData } from './formatPages';
import type { SupportedLanguage } from '../i18n/languages';

// Language-specific terms dictionary for programmatic metadata localization
const TRANSLATION_PATTERNS: Record<SupportedLanguage, {
  convertPrefix: string;
  compressPrefix: string;
  onlineFree: string;
  heroSuffix: string;
  dropzoneText: string;
  howItWorks: string;
  whyTitle: string;
  whyDesc: string;
  freeNoUpload: string;
  faq1Q: string;
  faq1A: string;
  faq2Q: string;
  faq2A: string;
}> = {
  pt: {
    convertPrefix: 'Conversor de Vídeo para',
    compressPrefix: 'Compressor de Vídeo',
    onlineFree: 'Online Grátis — 100% no Navegador',
    heroSuffix: 'sem enviar nenhum arquivo para servidores externos.',
    dropzoneText: 'Arraste seu arquivo aqui para converter para',
    howItWorks: 'Como funciona a conversão local?',
    whyTitle: 'Por que usar nosso conversor?',
    whyDesc: 'Todo o processamento ocorre dentro do seu navegador usando WebAssembly.',
    freeNoUpload: '100% gratuito e privado. Sem upload para a nuvem.',
    faq1Q: 'Este serviço é gratuito?',
    faq1A: 'Sim! O ConversordeVideo.com é 100% gratuito, sem cadastro e sem limites.',
    faq2Q: 'Meus arquivos ficam seguros?',
    faq2A: 'Totalmente. Nenhum arquivo é enviado para servidores externos. O processamento é 100% local no seu navegador.'
  },
  en: {
    convertPrefix: 'Video Converter to',
    compressPrefix: 'Video Compressor',
    onlineFree: 'Free Online — 100% In-Browser',
    heroSuffix: 'without uploading any files to remote servers.',
    dropzoneText: 'Drag your video file here to convert to',
    howItWorks: 'How does in-browser conversion work?',
    whyTitle: 'Why choose our converter?',
    whyDesc: 'All transcoding is processed securely within your browser memory via WebAssembly.',
    freeNoUpload: '100% free and private. Zero cloud uploads.',
    faq1Q: 'Is this conversion service free?',
    faq1A: 'Yes! Our tool is 100% free with no registration, no watermarks, and no file paywalls.',
    faq2Q: 'Are my video files secure?',
    faq2A: 'Absolutely. Zero bytes are uploaded to remote servers. All processing runs 100% locally on your device.'
  },
  es: {
    convertPrefix: 'Convertidor de Video a',
    compressPrefix: 'Compresor de Video',
    onlineFree: 'Online Gratis — 100% en el Navegador',
    heroSuffix: 'sin subir ningún archivo a servidores externos.',
    dropzoneText: 'Arrastra tu archivo aquí para convertir a',
    howItWorks: '¿Cómo funciona la conversión local?',
    whyTitle: '¿Por qué elegir nuestro convertidor?',
    whyDesc: 'Todo el procesamiento se realiza en la memoria de tu dispositivo mediante WebAssembly.',
    freeNoUpload: '100% gratuito y privado. Cero subidas a la nube.',
    faq1Q: '¿Es gratuito este servicio?',
    faq1A: '¡Sí! Es 100% gratis, sin registro, sin marcas de agua y sin límites de archivos.',
    faq2Q: '¿Están seguros mis videos?',
    faq2A: 'Totalmente. Ningún archivo se envía a servidores externos. Todo el proceso es 100% local en tu navegador.'
  },
  fr: {
    convertPrefix: 'Convertisseur Vidéo vers',
    compressPrefix: 'Compresseur Vidéo',
    onlineFree: 'Gratuit en Ligne — 100% dans le Navigateur',
    heroSuffix: 'sans téléverser aucun fichier sur des serveurs externes.',
    dropzoneText: 'Glissez votre fichier ici pour convertir en',
    howItWorks: 'Comment fonctionne la conversion locale ?',
    whyTitle: 'Pourquoi choisir notre convertisseur ?',
    whyDesc: 'Tout le transcodage est exécuté dans la mémoire de votre appareil grâce à WebAssembly.',
    freeNoUpload: '100% gratuit et confidentiel. Aucun fichier téléversé.',
    faq1Q: 'Ce service est-il gratuit ?',
    faq1A: 'Oui ! Notre outil est 100% gratuit, sans inscription, sans filigrane et sans limite.',
    faq2Q: 'Mes fichiers sont-ils protégés ?',
    faq2A: 'Absolument. Aucun octet n’est envoyé sur des serveurs distants. Tout est traité localement sur votre appareil.'
  },
  ja: {
    convertPrefix: '動画変換ツール：',
    compressPrefix: '動画圧縮ツール：',
    onlineFree: '完全無料・ブラウザ完結型',
    heroSuffix: 'ファイルをサーバーにアップロードすることなく安全に処理します。',
    dropzoneText: 'ここにファイルをドラッグして変換：',
    howItWorks: 'ブラウザ内ローカル変換の仕組み',
    whyTitle: '当ツールが選ばれる理由',
    whyDesc: 'WebAssembly技術により、端末のメモリ上で安全かつ高速に動画を変換・圧縮します。',
    freeNoUpload: '完全無料・100%プライベート。ファイル送信なし。',
    faq1Q: 'このサービスは本当に無料ですか？',
    faq1A: 'はい！登録不要、ウォーターマークなし、完全無料でご利用いただけます。',
    faq2Q: 'プライバシーやセキュリティは安全ですか？',
    faq2A: '完全に安全です。ファイルが外部サーバーへ送信されることは一切なく、端末内で処理されます。'
  },
  zh: {
    convertPrefix: '视频转换器 转',
    compressPrefix: '视频压缩器',
    onlineFree: '免费在线版 — 100% 浏览器本地处理',
    heroSuffix: '无需将任何文件上传至远程云端服务器。',
    dropzoneText: '拖拽视频文件到此处进行转换：',
    howItWorks: '本地转换工作原理',
    whyTitle: '为什么选择我们的转换工具？',
    whyDesc: '基于 WebAssembly 技术，在您的设备内存中高速且安全地完成转码与压缩。',
    freeNoUpload: '100% 免费私密，零文件上传。',
    faq1Q: '这个工具完全免费吗？',
    faq1A: '是的！免注册、无水印、无文件大小付费限制，完全免费使用。',
    faq2Q: '我的视频文件安全吗？',
    faq2A: '绝对安全。文件绝不上传至任何服务器，所有计算均在您的本地浏览器内完成。'
  },
  no: {
    convertPrefix: 'Videokonvertering til',
    compressPrefix: 'Videokomprimering',
    onlineFree: 'Gratis på Nett — 100% i Nettleseren',
    heroSuffix: 'uten å laste opp filer til eksterne servere.',
    dropzoneText: 'Dra videofilen hit for å konvertere til',
    howItWorks: 'Hvordan fungerer lokal konvertering?',
    whyTitle: 'Hvorfor velge vår konverter?',
    whyDesc: 'All koding behandles direkte i nettleserminnet ditt via WebAssembly.',
    freeNoUpload: '100% gratis og privat. Ingen skyopplasting.',
    faq1Q: 'Er denne tjenesten gratis?',
    faq1A: 'Ja! Verktøyet er 100% gratis, uten registrering, vannmerker eller gebyrer.',
    faq2Q: 'Er videofilene mine trygge?',
    faq2A: 'Helt trygge. Ingen filer sendes over internett. Alt behandles lokalt på enheten din.'
  },
  tr: {
    convertPrefix: 'Video Dönüştürücü ->',
    compressPrefix: 'Video Sıkıştırıcı',
    onlineFree: 'Ücretsiz Çevrimiçi — %100 Tarayıcıda',
    heroSuffix: 'dosyalarınızı sunuculara yüklemeden güvenle dönüştürün.',
    dropzoneText: 'Dönüştürmek istediğiniz videoyu buraya sürükleyin:',
    howItWorks: 'Yerel dönüştürme nasıl çalışır?',
    whyTitle: 'Neden bizim dönüştürücümüz?',
    whyDesc: 'Tüm kodlama işlemleri WebAssembly ile doğrudan cihazınızın belleğinde çalışır.',
    freeNoUpload: '%100 ücretsiz ve gizli. Buluta yükleme yok.',
    faq1Q: 'Bu hizmet ücretsiz mi?',
    faq1A: 'Evet! Aracımız üyelik gerektirmeden, filigransız ve tamamen ücretsizdir.',
    faq2Q: 'Dosyalarım güvende mi?',
    faq2A: 'Kesinlikle. Hiçbir veri uzak sunuculara yüklenmez. Her şey cihazınızda yerel olarak işlenir.'
  },
  pl: {
    convertPrefix: 'Konwerter Wideo na',
    compressPrefix: 'Kompresor Wideo',
    onlineFree: 'Online za Darmo — 100% w Przeglądarce',
    heroSuffix: 'bez przesyłania plików na zewnętrzne serwery.',
    dropzoneText: 'Przeciągnij plik tutaj, aby przekonwertować na',
    howItWorks: 'Jak działa lokalna konwersja?',
    whyTitle: 'Dlaczego warto wybrać nasze narzędzie?',
    whyDesc: 'Całe przetwarzanie odbywa się bezpiecznie w pamięci RAM dzięki WebAssembly.',
    freeNoUpload: '100% darmowy i prywatny. Zero wysyłania do chmury.',
    faq1Q: 'Czy ta usługa jest bezpłatna?',
    faq1A: 'Tak! Nasz konwerter jest w 100% darmowy, bez rejestracji, znaków wodnych i limitów.',
    faq2Q: 'Czy moje pliki są bezpieczne?',
    faq2A: 'Całkowicie. Żaden bajt nie trafia na zewnętrzne serwery. Wszystko działa lokalnie w przeglądarce.'
  }
};

/**
 * Returns localized format page data for any supported language.
 * Defaults to the original Portuguese data if lang === 'pt'.
 */
export function getLocalizedFormatPage(slug: string, lang: SupportedLanguage): FormatPageData {
  const original = FORMAT_PAGES[slug];
  if (!original || lang === 'pt') {
    return original;
  }

  const p = TRANSLATION_PATTERNS[lang] || TRANSLATION_PATTERNS.en;
  const isCompressor = slug.includes('compressor') || slug.includes('comprimir');
  const targetLabel = original.targetFormat.toUpperCase();

  const titlePrefix = isCompressor ? p.compressPrefix : p.convertPrefix;
  const metaTitle = `${titlePrefix} ${targetLabel} ${p.onlineFree}`;
  const metaDescription = `${titlePrefix} ${targetLabel} ${p.freeNoUpload} ${p.heroSuffix}`;

  return {
    ...original,
    h1Prefix: titlePrefix,
    h1Highlight: targetLabel,
    h1Suffix: lang === 'ja' || lang === 'zh' ? '' : 'Online',
    metaTitle,
    metaDescription,
    heroSubtitle: `${p.whyDesc} ${p.heroSuffix}`,
    dropzoneTitle: `${p.dropzoneText} ${targetLabel}`,
    explainerTitle: p.howItWorks,
    sourceDetailsTitle: original.sourceDetailsTitle,
    targetDetailsTitle: original.targetDetailsTitle,
    faqs: [
      { question: p.faq1Q, answer: p.faq1A },
      { question: p.faq2Q, answer: p.faq2A }
    ]
  };
}

export interface GridToolItem {
  title: string;
  href: string;
  description: string;
  badge: string;
  icon: string;
}

const RAW_GRID_TOOLS = [
  {
    id: 'mp4',
    href: '/conversor-de-video-para-mp4',
    icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z',
    titles: {
      pt: 'Conversor de Vídeo para MP4',
      en: 'Video Converter to MP4',
      es: 'Convertidor de Video a MP4',
      fr: 'Convertisseur Vidéo vers MP4',
      ja: 'MP4 動画変換ツール',
      zh: '视频转换器 转 MP4',
      no: 'Videokonvertering til MP4',
      tr: 'MP4 Video Dönüştürücü',
      pl: 'Konwerter Wideo na MP4'
    },
    descs: {
      pt: 'Converta qualquer formato (MOV, MKV, AVI, WebM, WMV) para MP4 universal com áudio AAC.',
      en: 'Convert any format (MOV, MKV, AVI, WebM, WMV) to universal MP4 with AAC stereo audio.',
      es: 'Convierte cualquier formato (MOV, MKV, AVI, WebM, WMV) a MP4 universal con audio AAC.',
      fr: 'Convertissez n’importe quel format (MOV, MKV, AVI, WebM) en MP4 universel avec audio AAC.',
      ja: 'MOV, MKV, AVI, WebM, WMV などの動画を汎用性の高い MP4 形式に変換します。',
      zh: '将任意格式（MOV、MKV、AVI、WebM、WMV）转换为通用 MP4 格式，内置 AAC 音频。',
      no: 'Konverter ethvert format (MOV, MKV, AVI, WebM, WMV) til universell MP4 med AAC-lyd.',
      tr: 'Herhangi bir formatı (MOV, MKV, AVI, WebM) AAC sesli evrensel MP4 formatına dönüştürün.',
      pl: 'Konwertuj dowolny format (MOV, MKV, AVI, WebM) na uniwersalny MP4 z dźwiękiem AAC.'
    },
    badges: {
      pt: 'Mais Buscado',
      en: 'Top Popular',
      es: 'Más Buscado',
      fr: 'Le Plus Populaire',
      ja: '人気 No.1',
      zh: '最热门',
      no: 'Mest Populær',
      tr: 'En Çok Aranan',
      pl: 'Najpopularniejszy'
    }
  },
  {
    id: 'mov',
    href: '/converter-mov-para-mp4',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    titles: {
      pt: 'MOV para MP4 (iPhone)',
      en: 'MOV to MP4 (iPhone / Mac)',
      es: 'MOV a MP4 (iPhone / Mac)',
      fr: 'MOV vers MP4 (iPhone / Mac)',
      ja: 'MOV を MP4 に変換 (iPhone)',
      zh: 'MOV 转 MP4 (苹果 iPhone / Mac)',
      no: 'MOV til MP4 (iPhone / Mac)',
      tr: 'MOV -> MP4 (iPhone / Mac)',
      pl: 'MOV na MP4 (iPhone / Mac)'
    },
    descs: {
      pt: 'Converta vídeos gravados em iPhone ou Mac para o padrão universal MP4 sem perda de qualidade.',
      en: 'Convert QuickTime videos recorded on iPhone or Mac into standard MP4 without quality loss.',
      es: 'Convierte videos de iPhone o Mac a MP4 estándar con máxima fidelidad visual.',
      fr: 'Convertissez les vidéos QuickTime d’iPhone ou Mac en MP4 standard sans perte de qualité.',
      ja: 'iPhone や Mac で撮影された MOV 動画を高画質な標準 MP4 に変換します。',
      zh: '将 iPhone 或 Mac 录制的 QuickTime MOV 视频转换为标准 MP4，无损画质。',
      no: 'Konverter QuickTime-videoer fra iPhone eller Mac til standard MP4 uten kvalitetstap.',
      tr: 'iPhone veya Mac’ten kaydedilen QuickTime videolarını kayıpsız standart MP4’e dönüştürün.',
      pl: 'Konwertuj wideo z iPhone’a lub Maca na standardowy MP4 bez utraty jakości.'
    },
    badges: {
      pt: 'Popular',
      en: 'iOS / Mac',
      es: 'Popular',
      fr: 'Populaire',
      ja: 'iPhone対応',
      zh: '苹果必备',
      no: 'Populær',
      tr: 'Popüler',
      pl: 'Popularne'
    }
  },
  {
    id: 'mp3',
    href: '/converter-video-para-mp3',
    icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    titles: {
      pt: 'Conversor de Vídeo para MP3',
      en: 'Video to MP3 Audio Extractor',
      es: 'Convertidor de Video a MP3',
      fr: 'Vidéo vers MP3 (Extraction Audio)',
      ja: '動画から MP3 音声を抽出',
      zh: '视频提取 MP3 音频',
      no: 'Video til MP3 Lyduttrekker',
      tr: 'Videodan MP3 Ses Çıkarıcı',
      pl: 'Wideo na MP3 (Ekstrakcja Audio)'
    },
    descs: {
      pt: 'Extraia o áudio de qualquer gravação ou clipe e salve como MP3 de alta fidelidade (192 kbps).',
      en: 'Extract audio tracks from any video and save as crystal-clear 192 kbps MP3 files.',
      es: 'Extrae el audio de cualquier video y guárdalo como MP3 de alta fidelidad (192 kbps).',
      fr: 'Extrayez la piste audio de toute vidéo et enregistrez-la en MP3 haute fidélité (192 kbps).',
      ja: '動画から音声を抽出し、クリアな高音質 MP3（192 kbps）として保存します。',
      zh: '从任何录音或视频中提取音频，并保存为 192 kbps 高保真 MP3。',
      no: 'Trekk ut lydspor fra enhver video og lagre som krystallklar MP3 på 192 kbps.',
      tr: 'Videolardan ses parçasını ayırın ve 192 kbps yüksek kaliteli MP3 olarak kaydedin.',
      pl: 'Wyodrębnij dźwięk z dowolnego wideo i zapisz jako krystalicznie czysty MP3 192 kbps.'
    },
    badges: {
      pt: 'Áudio',
      en: 'Audio HQ',
      es: 'Audio',
      fr: 'Audio',
      ja: '高音質抽出',
      zh: '音频提取',
      no: 'Lyd',
      tr: 'Ses',
      pl: 'Audio'
    }
  },
  {
    id: 'youtube',
    href: '/conversor-de-video-youtube',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    titles: {
      pt: 'Vídeo do YouTube & Shorts',
      en: 'YouTube & Shorts Video Formatter',
      es: 'Video de YouTube y Shorts',
      fr: 'Vidéo YouTube et Shorts',
      ja: 'YouTube / Shorts 動画変換',
      zh: 'YouTube 与 Shorts 视频转换',
      no: 'YouTube og Shorts Video',
      tr: 'YouTube ve Shorts Video',
      pl: 'Wideo YouTube i Shorts'
    },
    descs: {
      pt: 'Formate vídeos e clipes no padrão recomendado pelo YouTube (16:9 Full HD e Shorts 9:16).',
      en: 'Format video clips for YouTube standard (16:9 Full HD and Shorts 9:16 vertical).',
      es: 'Formatea videos en el estándar de YouTube (16:9 Full HD y Shorts 9:16 vertical).',
      fr: 'Formatez vos vidéos aux normes recommandées par YouTube (16:9 Full HD et Shorts 9:16).',
      ja: 'YouTube推奨の標準形式（16:9 Full HD / Shorts 9:16縦型）に最適化します。',
      zh: '转换为 YouTube 推荐的规格标准（16:9 全高清与 9:16 竖屏 Shorts）。',
      no: 'Formater videoer i henhold til YouTubes standarder (16:9 Full HD og Shorts 9:16).',
      tr: 'Videoları YouTube standartlarına (16:9 Full HD ve Shorts 9:16) göre biçimlendirin.',
      pl: 'Formatuj wideo zgodnie ze standardami YouTube (16:9 Full HD oraz Shorts 9:16).'
    },
    badges: {
      pt: 'YouTube',
      en: 'YouTube',
      es: 'YouTube',
      fr: 'YouTube',
      ja: 'YouTube',
      zh: '油管格式',
      no: 'YouTube',
      tr: 'YouTube',
      pl: 'YouTube'
    }
  },
  {
    id: 'gif',
    href: '/video-para-gif',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    titles: {
      pt: 'Vídeo para GIF Animado',
      en: 'Video to Animated GIF',
      es: 'Video a GIF Animado',
      fr: 'Vidéo vers GIF Animé',
      ja: '動画からアニメーション GIF 作成',
      zh: '视频转动态 GIF 动图',
      no: 'Video til Animert GIF',
      tr: 'Videodan Hareketli GIF Yapma',
      pl: 'Wideo na Animowany GIF'
    },
    descs: {
      pt: 'Transforme pequenos trechos de vídeo em animações GIF otimizadas para WhatsApp e redes sociais.',
      en: 'Convert video clips into smooth looping GIFs optimized for messaging and social media.',
      es: 'Convierte fragmentos de video en GIFs animados en bucle para WhatsApp y redes sociales.',
      fr: 'Transformez des extraits vidéo en animations GIF fluides pour WhatsApp et les réseaux.',
      ja: '動画の短いクリップを滑らかなループ GIF アニメーションに変換します。',
      zh: '将精彩视频片段制作为体积小巧、循环流畅的社交动图 GIF。',
      no: 'Gjør videoklipp om til jevne GIF-animasjoner optimalisert for sosiale medier.',
      tr: 'Video kesitlerini WhatsApp ve sosyal medya için akıcı döngülü GIF’lere dönüştürün.',
      pl: 'Przekształcaj fragmenty wideo w płynne pętle GIF zoptymalizowane pod komunikatory.'
    },
    badges: {
      pt: 'Animação',
      en: 'Loop GIF',
      es: 'Animación',
      fr: 'Animation',
      ja: 'GIFループ',
      zh: '动图表情',
      no: 'Animasjon',
      tr: 'Animasyon',
      pl: 'Animacja'
    }
  },
  {
    id: 'whatsapp',
    href: '/comprimir-video',
    icon: 'M19 14l-7 7m0 0l-7-7m7 7V3',
    titles: {
      pt: 'Comprimir Vídeo (WhatsApp)',
      en: 'Compress Video for WhatsApp',
      es: 'Comprimir Video para WhatsApp',
      fr: 'Compresser Vidéo pour WhatsApp',
      ja: 'WhatsApp / メッセージ用 動画圧縮',
      zh: '压缩视频适配 WhatsApp / 微信',
      no: 'Komprimer Video for WhatsApp',
      tr: 'WhatsApp İçin Video Sıkıştır',
      pl: 'Kompresuj Wideo pod WhatsApp'
    },
    descs: {
      pt: 'Diminua o tamanho de vídeos pesados para menos de 16MB mantendo nitidez em 720p/1080p.',
      en: 'Reduce heavy videos under the 16MB messaging limit while preserving 720p/1080p clarity.',
      es: 'Reduce videos pesados a menos de 16MB manteniendo excelente nitidez en 720p.',
      fr: 'Réduisez le poids de vos vidéos sous les 16 Mo tout en conservant une bonne netteté.',
      ja: '画質を落とさずに 16MB の送信制限内に動画サイズをスマート圧縮します。',
      zh: '将过大的视频无损压缩至 16MB 以内，方便在社交通讯软件中快速发送。',
      no: 'Reduser tunge videoer til under 16MB for rask deling uten uskarpe bilder.',
      tr: 'Büyük videoları 720p netliğini koruyarak 16MB sınırının altına indirin.',
      pl: 'Zmniejsz duże pliki wideo poniżej 16MB, zachowując ostrość obrazu.'
    },
    badges: {
      pt: 'WhatsApp',
      en: '< 16MB',
      es: 'WhatsApp',
      fr: 'WhatsApp',
      ja: '16MB未満',
      zh: '社交优化',
      no: 'WhatsApp',
      tr: 'WhatsApp',
      pl: 'WhatsApp'
    }
  },
  {
    id: 'compressor-hub',
    href: '/compressor-de-video',
    icon: 'M19 14l-7 7m0 0l-7-7m7 7V3',
    titles: {
      pt: 'Compressor de Vídeo Online',
      en: 'Online Video Compressor',
      es: 'Compresor de Video Online',
      fr: 'Compresseur Vidéo en Ligne',
      ja: 'オンライン動画圧縮ツール',
      zh: '在线视频智能压缩器',
      no: 'Nettbasert Videokomprimering',
      tr: 'Çevrimiçi Video Sıkıştırıcı',
      pl: 'Kompresor Wideo Online'
    },
    descs: {
      pt: 'Reduza até 80% do peso de qualquer vídeo MP4 ou MOV sem enviar arquivos para a nuvem.',
      en: 'Reduce file size up to 80% for any MP4 or MOV video without uploading to the cloud.',
      es: 'Reduce hasta un 80% el tamaño de videos MP4 o MOV sin subidas a servidores.',
      fr: 'Réduisez jusqu’à 80% le poids de vos vidéos MP4 ou MOV sans téléversement cloud.',
      ja: 'ファイルを外部に送信することなく、MP4 / MOV 動画を最大80%軽量化します。',
      zh: '在本地直接将 MP4 或 MOV 视频体积缩减高达 80%，零云端上传。',
      no: 'Reduser filstørrelsen med opptil 80% for MP4 og MOV uten skyopplasting.',
      tr: 'Buluta yükleme yapmadan MP4 ve MOV videolarının boyutunu %80’e kadar küçültün.',
      pl: 'Zmniejsz rozmiar wideo MP4 lub MOV nawet o 80% bez wysyłania do chmury.'
    },
    badges: {
      pt: 'Compressor',
      en: 'Compressor',
      es: 'Compresor',
      fr: 'Compresseur',
      ja: '容量削減',
      zh: '极速压缩',
      no: 'Komprimering',
      tr: 'Sıkıştırıcı',
      pl: 'Kompresor'
    }
  },
  {
    id: 'mp4-compress',
    href: '/compressor-de-video-mp4',
    icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z',
    titles: {
      pt: 'Compressor de Vídeo MP4',
      en: 'MP4 Video Compressor',
      es: 'Compresor de Video MP4',
      fr: 'Compresseur Vidéo MP4',
      ja: 'MP4 動画圧縮ツール',
      zh: 'MP4 视频压缩工具',
      no: 'MP4 Videokomprimering',
      tr: 'MP4 Video Sıkıştırıcı',
      pl: 'Kompresor Wideo MP4'
    },
    descs: {
      pt: 'Comprima vídeos MP4 com codec H.264 rápido e cabeçalho faststart para web.',
      en: 'Compress MP4 files with high-speed H.264 encoding and web-optimized faststart headers.',
      es: 'Comprime videos MP4 con códec H.264 rápido y encabezado faststart para web.',
      fr: 'Compressez vos vidéos MP4 en H.264 avec en-tête faststart pour le web.',
      ja: 'H.264 高速エンコードと faststart 最適化で MP4 を軽量化します。',
      zh: '采用高速 H.264 编码与 faststart 网页流媒体优化压缩 MP4 视频。',
      no: 'Komprimer MP4-filer med rask H.264-koding og faststart for nettet.',
      tr: 'Hızlı H.264 kodlama ve web akışı için faststart ile MP4 dosyalarını sıkıştırın.',
      pl: 'Kompresuj pliki MP4 z szybkim kodekiem H.264 i nagłówkiem faststart dla stron WWW.'
    },
    badges: {
      pt: 'MP4 Leve',
      en: 'Light MP4',
      es: 'MP4 Ligero',
      fr: 'MP4 Léger',
      ja: '高速・軽量',
      zh: '网页流媒体',
      no: 'Lett MP4',
      tr: 'Hafif MP4',
      pl: 'Lekki MP4'
    }
  },
  {
    id: 'webm',
    href: '/converter-mp4-para-webm',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    titles: {
      pt: 'MP4 para WebM',
      en: 'MP4 to WebM Converter',
      es: 'MP4 a WebM',
      fr: 'MP4 vers WebM',
      ja: 'MP4 を WebM に変換',
      zh: 'MP4 转 WebM 网页格式',
      no: 'MP4 til WebM',
      tr: 'MP4 -> WebM',
      pl: 'MP4 na WebM'
    },
    descs: {
      pt: 'Converta arquivos MP4 para o formato leve WebM ideal para sites, blogs e carregamento rápido.',
      en: 'Convert MP4 videos to lightweight WebM format for instant HTML5 web playback.',
      es: 'Convierte videos MP4 a formato WebM ultraligero para sitios web y blogs HTML5.',
      fr: 'Convertissez des fichiers MP4 au format léger WebM idéal pour le web HTML5.',
      ja: 'HTML5 サイトやブログに最適な超軽量 WebM 形式に変換します。',
      zh: '将 MP4 转换为超轻量 WebM 格式，适合网站背景与 HTML5 快速加载。',
      no: 'Konverter MP4-videoer til lett WebM-format for rask HTML5-avspilling.',
      tr: 'MP4 videolarını web siteleri için hafif WebM formatına dönüştürün.',
      pl: 'Konwertuj MP4 na lekki format WebM idealny na strony i blogi HTML5.'
    },
    badges: {
      pt: 'Web',
      en: 'HTML5 Web',
      es: 'Web',
      fr: 'Web',
      ja: 'Web最適化',
      zh: '网站专用',
      no: 'Web',
      tr: 'Web',
      pl: 'Web'
    }
  },
  {
    id: 'instagram',
    href: '/converter-video-instagram',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    titles: {
      pt: 'Vídeo para Instagram & TikTok',
      en: 'Instagram & TikTok Video Formatter',
      es: 'Video para Instagram y TikTok',
      fr: 'Vidéo pour Instagram et TikTok',
      ja: 'Instagram リール / TikTok 変換',
      zh: 'Instagram Reels 与 TikTok 竖屏转换',
      no: 'Video for Instagram og TikTok',
      tr: 'Instagram ve TikTok Video',
      pl: 'Wideo na Instagram i TikTok'
    },
    descs: {
      pt: 'Formate seu vídeo no padrão exato para Reels e Stories (9:16 vertical) com codec suportado.',
      en: 'Format clips for Instagram Reels and Stories in 9:16 vertical orientation.',
      es: 'Formatea tus clips para Reels y Stories en proporción vertical 9:16 exacta.',
      fr: 'Formatez vos vidéos au ratio 9:16 vertical pour les Reels et Stories.',
      ja: 'Instagram リールや TikTok に最適な 9:16 縦型動画にフォーマットします。',
      zh: '将视频剪辑调整为 Instagram Reels 及 TikTok 标准 9:16 竖屏规格。',
      no: 'Formater videoer til 9:16 vertikal standard for Reels og Stories.',
      tr: 'Videolarınızı Reels ve Stories için 9:16 dikey formata uyarlayın.',
      pl: 'Dostosuj wideo do formatu pionowego 9:16 dla Reels i Stories.'
    },
    badges: {
      pt: 'Social',
      en: 'Reels / 9:16',
      es: 'Social',
      fr: 'Réseaux',
      ja: 'SNS縦型',
      zh: '短视频',
      no: 'Sosialt',
      tr: 'Sosyal Medya',
      pl: 'Społeczności'
    }
  },
  {
    id: 'guide',
    href: '/melhor-conversor-de-video-gratuito',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    titles: {
      pt: 'Melhor Conversor Gratuito',
      en: 'Best Free Video Converter Guide',
      es: 'Mejor Convertidor Gratis',
      fr: 'Meilleur Convertisseur Gratuit',
      ja: '無料動画変換ツールの比較ガイド',
      zh: '最佳免费视频转换工具评测',
      no: 'Beste Gratis Videokonverterer',
      tr: 'En İyi Ücretsiz Dönüştürücü Rehberi',
      pl: 'Najlepszy Darmowy Konwerter Wideo'
    },
    descs: {
      pt: 'Compare nossa tecnologia 100% local contra ferramentas tradicionais na nuvem.',
      en: 'Compare in-browser WebAssembly architecture against traditional cloud converters.',
      es: 'Compara nuestra tecnología 100% local contra herramientas antiguas en la nube.',
      fr: 'Comparez le traitement WebAssembly local aux anciens services cloud.',
      ja: '端末内ローカル処理と従来のクラウド型ツールの違いを徹底比較します。',
      zh: '对比浏览器本地 WebAssembly 架构与传统云端转换工具的差异。',
      no: 'Sammenlign lokal WebAssembly-teknologi mot tradisjonelle skytjenester.',
      tr: 'Tarayıcı içi yerel teknolojiyi geleneksel bulut araçlarıyla karşılaştırın.',
      pl: 'Porównaj lokalną technologię WebAssembly z tradycyjnymi narzędziami w chmurze.'
    },
    badges: {
      pt: 'Guia 2026',
      en: '2026 Guide',
      es: 'Guía 2026',
      fr: 'Guide 2026',
      ja: '徹底比較',
      zh: '深度评测',
      no: 'Guide 2026',
      tr: '2026 Rehber',
      pl: 'Poradnik 2026'
    }
  },
  {
    id: 'm2ts',
    href: '/converter-m2ts-para-mp4',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    titles: {
      pt: 'M2TS / MTS para MP4',
      en: 'M2TS / MTS to MP4 (Camcorders)',
      es: 'M2TS / MTS a MP4 (Cámaras)',
      fr: 'M2TS / MTS vers MP4 (Caméscopes)',
      ja: 'M2TS / MTS を MP4 に変換',
      zh: 'M2TS / MTS 转 MP4 (高清摄像机)',
      no: 'M2TS / MTS til MP4 (Kameraer)',
      tr: 'M2TS / MTS -> MP4 (Kamera)',
      pl: 'M2TS / MTS na MP4 (Kamery)'
    },
    descs: {
      pt: 'Converta filmadoras Sony, Panasonic e gravações Blu-ray AVCHD para MP4.',
      en: 'Convert Sony, Panasonic AVCHD camcorder footage and Blu-ray streams to MP4.',
      es: 'Convierte grabaciones AVCHD de cámaras Sony/Panasonic y Blu-ray a MP4.',
      fr: 'Convertissez les flux de caméscopes AVCHD Sony/Panasonic et Blu-ray en MP4.',
      ja: 'ソニーやパナソニックの AVCHD ビデオカメラ録画や Blu-ray 映像を MP4 に変換。',
      zh: '将索尼、松下等高清摄像机的 AVCHD 录像及蓝光 M2TS 转换为标准 MP4。',
      no: 'Konverter Sony/Panasonic AVCHD-kameraopptak og Blu-ray til MP4.',
      tr: 'Sony, Panasonic AVCHD kamera kayıtlarını ve Blu-ray akışlarını MP4’e dönüştürün.',
      pl: 'Konwertuj nagrania z kamer Sony/Panasonic AVCHD oraz Blu-ray na MP4.'
    },
    badges: {
      pt: 'Câmeras',
      en: 'Camcorders',
      es: 'Cámaras',
      fr: 'Caméscopes',
      ja: 'カメラ録画',
      zh: '摄像机格式',
      no: 'Kameraer',
      tr: 'Kameralar',
      pl: 'Kamery'
    }
  },
  {
    id: 'vob',
    href: '/converter-vob-para-mp4',
    icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z',
    titles: {
      pt: 'VOB para MP4 (DVD)',
      en: 'VOB to MP4 (DVD Ripping)',
      es: 'VOB a MP4 (DVD)',
      fr: 'VOB vers MP4 (DVD)',
      ja: 'VOB を MP4 に変換 (DVD)',
      zh: 'VOB 转 MP4 (DVD 光盘视频)',
      no: 'VOB til MP4 (DVD)',
      tr: 'VOB -> MP4 (DVD)',
      pl: 'VOB na MP4 (DVD)'
    },
    descs: {
      pt: 'Converta discos e arquivos de DVD MPEG-2 em MP4 universal compatível com celulares.',
      en: 'Convert DVD MPEG-2 VIDEO_TS files into modern universal MP4 for mobile devices.',
      es: 'Convierte archivos de DVD MPEG-2 a MP4 moderno compatible con teléfonos.',
      fr: 'Convertissez des fichiers DVD MPEG-2 en MP4 moderne lisible sur smartphone.',
      ja: 'DVD（VIDEO_TS フォルダ）の MPEG-2 VOB 動画をスマホ対応の MP4 に変換。',
      zh: '将 DVD 光盘的 MPEG-2 VOB 视频转换为手机及电视通用的 MP4。',
      no: 'Konverter DVD MPEG-2-filer til moderne MP4 for mobiltelefoner.',
      tr: 'DVD MPEG-2 VIDEO_TS dosyalarını mobil uyumlu modern MP4’e dönüştürün.',
      pl: 'Konwertuj pliki DVD MPEG-2 na nowoczesny format MP4 dla telefonów.'
    },
    badges: {
      pt: 'DVD',
      en: 'DVD Video',
      es: 'DVD',
      fr: 'DVD',
      ja: 'DVD変換',
      zh: 'DVD光盘',
      no: 'DVD',
      tr: 'DVD',
      pl: 'DVD'
    }
  },
  {
    id: 'avi',
    href: '/converter-avi-para-mp4',
    icon: 'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z',
    titles: {
      pt: 'AVI para MP4',
      en: 'AVI to MP4 Converter',
      es: 'AVI a MP4',
      fr: 'AVI vers MP4',
      ja: 'AVI を MP4 に変換',
      zh: 'AVI 转 MP4',
      no: 'AVI til MP4',
      tr: 'AVI -> MP4',
      pl: 'AVI na MP4'
    },
    descs: {
      pt: 'Transforme vídeos antigos AVI em MP4 moderno para rodar em smart TVs e celulares.',
      en: 'Modernize classic AVI videos into standard MP4 for seamless playback on TVs and phones.',
      es: 'Moderniza videos AVI clásicos a MP4 para reproducir en Smart TVs y smartphones.',
      fr: 'Modernisez vos vidéos AVI classiques en MP4 lisible sur Smart TV et mobiles.',
      ja: '古い AVI 動画を最新のスマホやスマート TV で再生できる MP4 に変換します。',
      zh: '将老旧 AVI 视频转换为现代智能电视及手机流畅播放的 MP4。',
      no: 'Gjør klassiske AVI-videoer om til MP4 for avspilling på smart-TV og telefoner.',
      tr: 'Eski AVI videolarını akıllı TV ve telefonlarda oynatmak için MP4’e dönüştürün.',
      pl: 'Zmodernizuj klasyczne pliki AVI na MP4 do odtwarzania na Smart TV i telefonach.'
    },
    badges: {
      pt: 'Clássico',
      en: 'Classic AVI',
      es: 'Clásico',
      fr: 'Classique',
      ja: 'レトロ形式',
      zh: '传统格式',
      no: 'Klassisk',
      tr: 'Klasik',
      pl: 'Klasyczne'
    }
  },
  {
    id: 'mkv',
    href: '/converter-mkv-para-mp4',
    icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z',
    titles: {
      pt: 'MKV para MP4',
      en: 'MKV to MP4 Converter',
      es: 'MKV a MP4',
      fr: 'MKV vers MP4',
      ja: 'MKV を MP4 に変換',
      zh: 'MKV 转 MP4 高清转换',
      no: 'MKV til MP4',
      tr: 'MKV -> MP4',
      pl: 'MKV na MP4'
    },
    descs: {
      pt: 'Converta contêineres MKV para MP4 compatível com players nativos do Windows e Mac.',
      en: 'Convert Matroska (MKV) videos to MP4 compatible with native Mac and Windows media players.',
      es: 'Convierte videos Matroska (MKV) a MP4 compatible con reproductores de Windows y Mac.',
      fr: 'Convertissez des fichiers MKV en MP4 compatible avec les lecteurs Mac et Windows.',
      ja: 'MKV 動画を Mac や Windows の標準プレイヤーで再生可能な MP4 に変換します。',
      zh: '将 Matroska MKV 封装视频转换为 Mac 与 Windows 原生播放器兼容的 MP4。',
      no: 'Konverter MKV-filer til MP4 kompatibel med standard Windows- og Mac-spillere.',
      tr: 'Matroska (MKV) videolarını yerel medya oynatıcılarla uyumlu MP4’e dönüştürün.',
      pl: 'Konwertuj pliki MKV na MP4 zgodny z natywnymi odtwarzaczami Windows i Mac.'
    },
    badges: {
      pt: 'Filmes',
      en: 'Movies / HD',
      es: 'Películas',
      fr: 'Films HD',
      ja: 'HD映画',
      zh: '高清电影',
      no: 'Filmer',
      tr: 'Filmler',
      pl: 'Filmy'
    }
  },
  {
    id: 'webm-to-mp4',
    href: '/converter-webm-para-mp4',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    titles: {
      pt: 'WebM para MP4',
      en: 'WebM to MP4 Converter',
      es: 'WebM a MP4',
      fr: 'WebM vers MP4',
      ja: 'WebM を MP4 に変換',
      zh: 'WebM 转 MP4',
      no: 'WebM til MP4',
      tr: 'WebM -> MP4',
      pl: 'WebM na MP4'
    },
    descs: {
      pt: 'Converta vídeos baixados da internet em WebM para MP4 amplamente compatível.',
      en: 'Convert web-downloaded WebM files into universal MP4 for editors and media players.',
      es: 'Convierte videos WebM descargados de la web a MP4 universalmente compatible.',
      fr: 'Convertissez des vidéos WebM téléchargées en MP4 universel pour le montage.',
      ja: 'Web上からダウンロードした WebM 動画を編集ソフトやスマホで使える MP4 に変換。',
      zh: '将网上下载的 WebM 视频转换为剪辑软件和移动设备广泛兼容的 MP4。',
      no: 'Konverter nedlastede WebM-filer til universell MP4 for enkel redigering.',
      tr: 'İnternetten indirilen WebM dosyalarını evrensel MP4 formatına dönüştürün.',
      pl: 'Konwertuj pobrane pliki WebM na uniwersalny MP4 do montażu i odtwarzania.'
    },
    badges: {
      pt: 'Universal',
      en: 'Universal',
      es: 'Universal',
      fr: 'Universel',
      ja: '汎用形式',
      zh: '通用格式',
      no: 'Universell',
      tr: 'Evrensel',
      pl: 'Uniwersalny'
    }
  },
  {
    id: 'wmv',
    href: '/converter-wmv-para-mp4',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    titles: {
      pt: 'WMV para MP4',
      en: 'WMV to MP4 Converter',
      es: 'WMV a MP4',
      fr: 'WMV vers MP4',
      ja: 'WMV を MP4 に変換',
      zh: 'WMV 转 MP4 (微软视频格式)',
      no: 'WMV til MP4',
      tr: 'WMV -> MP4',
      pl: 'WMV na MP4'
    },
    descs: {
      pt: 'Atualize vídeos do Windows Media Video (WMV) para o padrão universal MP4.',
      en: 'Convert legacy Windows Media Video (WMV) to universally accepted MP4.',
      es: 'Actualiza videos de Windows Media Video (WMV) al estándar universal MP4.',
      fr: 'Convertissez vos anciens fichiers Windows Media Video (WMV) en MP4 standard.',
      ja: 'Windows Media Video (WMV) を iPhone や Mac でも再生できる MP4 に更新。',
      zh: '将旧版微软 Windows Media Video (WMV) 转换为全平台兼容的 MP4。',
      no: 'Oppdater eldre Windows Media Video (WMV) til universell MP4.',
      tr: 'Eski Windows Media Video (WMV) dosyalarını evrensel MP4 standardına güncelleyin.',
      pl: 'Zaktualizuj stare pliki Windows Media Video (WMV) do uniwersalnego standardu MP4.'
    },
    badges: {
      pt: 'Windows',
      en: 'Windows Video',
      es: 'Windows',
      fr: 'Windows',
      ja: 'Windows対応',
      zh: 'Windows格式',
      no: 'Windows',
      tr: 'Windows',
      pl: 'Windows'
    }
  }
];

export function getLocalizedGridTools(lang: SupportedLanguage): GridToolItem[] {
  const safeLang = (lang in TRANSLATION_PATTERNS ? lang : 'pt') as SupportedLanguage;
  return RAW_GRID_TOOLS.map((tool) => ({
    href: tool.href,
    icon: tool.icon,
    title: tool.titles[safeLang] || tool.titles.en || tool.titles.pt,
    description: tool.descs[safeLang] || tool.descs.en || tool.descs.pt,
    badge: tool.badges[safeLang] || tool.badges.en || tool.badges.pt
  }));
}
