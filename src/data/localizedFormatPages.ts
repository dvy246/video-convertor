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
    freeNoUpload: '100% gratuito e privado. Cero subidas a la nube.',
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

interface SlugSpecificOverride {
  h1Prefix?: string;
  h1Highlight?: string;
  h1Suffix?: string;
  badge?: string;
  metaTitle?: string;
  metaDescription?: string;
  heroSubtitle?: string;
  dropzoneTitle?: string;
  explainerTitle?: string;
  explainerParagraphs?: string[];
  sourceDetailsTitle?: string;
  sourceDetails?: string[];
  targetDetailsTitle?: string;
  targetDetails?: string[];
}

const SLUG_LOCALIZATIONS: Record<string, Partial<Record<SupportedLanguage, SlugSpecificOverride>>> = {
  'melhor-conversor-de-video-gratuito': {
    en: {
      h1Prefix: 'The Best',
      h1Highlight: 'Free Video Converter 2026',
      h1Suffix: 'Online & Safe',
      badge: '🏆 Best Free In-Browser Video Converter',
      metaTitle: 'Best Free Video Converter Online 2026 — Zero Upload & Safe',
      metaDescription: 'Discover why ConversordeVideo.com is the best free video converter: zero uploads, no file size limits, no registration, and 100% private.',
      heroSubtitle: 'The ultimate tool to convert MP4, MOV, MP3, WebM, and GIF. Zero wait queues, no intrusive ads, and 100% in your browser.',
      dropzoneTitle: 'Drag any video or audio file here to start converting',
      explainerTitle: 'Why choose our in-browser WebAssembly converter?',
      explainerParagraphs: [
        'While traditional cloud converters (CloudConvert, Convertio, FreeConvert) charge monthly subscriptions, enforce long wait queues, and force you to upload private files to remote servers, ConversordeVideo.com runs 100% locally on your computer or phone.',
        'Powered by WebAssembly, you achieve lightning speed without consuming mobile upload bandwidth and with full data privacy compliance.'
      ],
      sourceDetailsTitle: 'Traditional Cloud Services',
      sourceDetails: [
        'Slow upload times on heavy videos',
        'Shared queue delays up to 15 minutes',
        '100 MB free file paywalls',
        'Videos stored on third-party remote servers'
      ],
      targetDetailsTitle: 'ConversordeVideo.com',
      targetDetails: [
        'Zero upload — 100% in-browser memory processing',
        'No queue delays and unlimited conversions',
        'Instant mobile and camera footage conversions',
        'Completely free with no sign-up required'
      ]
    },
    es: {
      h1Prefix: 'El Mejor',
      h1Highlight: 'Convertidor de Video Gratis 2026',
      h1Suffix: 'Online y Seguro',
      badge: '🏆 Mejor Convertidor de Video Gratuito',
      metaTitle: 'El Mejor Convertidor de Video Gratuito Online 2026 — Sin Límites y Seguro',
      metaDescription: 'Descubre por qué ConversordeVideo.com es el mejor convertidor de video gratuito: sin subidas, sin límites de tamaño, sin registro y 100% privado.',
      heroSubtitle: 'La herramienta definitiva para convertir MP4, MOV, MP3, WebM y GIF. Cero colas, sin anuncios invasivos y 100% en tu navegador.',
      dropzoneTitle: 'Arrastra cualquier archivo de video o audio para comenzar',
      explainerTitle: '¿Por qué elegir nuestro convertidor en el navegador?',
      explainerParagraphs: [
        'Mientras los convertidores tradicionales cobran suscripciones, imponen colas de espera y obligan a subir tus videos a la nube, ConversordeVideo.com funciona 100% en tu dispositivo.',
        'Gracias a WebAssembly, disfrutas de máxima velocidad sin gastar tus datos de subida y con total privacidad.'
      ],
      sourceDetailsTitle: 'Servicios en la Nube Tradicionales',
      sourceDetails: [
        'Subida lenta de archivos pesados',
        'Colas de espera de hasta 15 minutos',
        'Límite gratuito de 100 MB',
        'Videos almacenados en servidores ajenos'
      ],
      targetDetailsTitle: 'ConversordeVideo.com',
      targetDetails: [
        'Cero subidas — 100% procesamiento local',
        'Sin colas ni límites de conversiones',
        'Conversión instantánea en móviles y cámaras',
        'Totalmente gratis y sin registro'
      ]
    },
    fr: {
      h1Prefix: 'Le Meilleur',
      h1Highlight: 'Convertisseur Vidéo Gratuit 2026',
      h1Suffix: 'En Ligne et Sécurisé',
      badge: '🏆 Meilleur Convertisseur Vidéo Gratuit',
      metaTitle: 'Meilleur Convertisseur Vidéo Gratuit en Ligne 2026 — Sans Limite et Sécurisé',
      metaDescription: 'Découvrez pourquoi ConversordeVideo.com est le meilleur convertisseur vidéo gratuit : aucun téléversement, aucune limite de taille et 100% privé.',
      heroSubtitle: 'L’outil ultime pour convertir MP4, MOV, MP3, WebM et GIF. Aucune file d’attente et 100% dans votre navigateur.',
      dropzoneTitle: 'Glissez n’importe quel fichier vidéo ou audio pour commencer',
      explainerTitle: 'Pourquoi choisir notre convertisseur dans le navigateur ?',
      explainerParagraphs: [
        'Alors que les outils cloud traditionnels imposent des abonnements payants et des files d’attente, ConversordeVideo.com s’exécute localement sur votre appareil.',
        'Grâce à WebAssembly, profitez d’un transcodage instantané sans envoyer aucun octet sur internet.'
      ],
      sourceDetailsTitle: 'Services Cloud Anciens',
      sourceDetails: [
        'Téléversement lent des vidéos lourdes',
        'Files d’attente jusqu’à 15 minutes',
        'Limites gratuites de 100 Mo',
        'Fichiers stockés sur des serveurs distants'
      ],
      targetDetailsTitle: 'ConversordeVideo.com',
      targetDetails: [
        'Zéro téléversement — 100% traitement local',
        'Aucune file d’attente et conversions illimitées',
        'Compatibilité instantanée iPhone et caméras',
        '100% gratuit et sans inscription'
      ]
    },
    ja: {
      h1Prefix: '完全無料・安全な',
      h1Highlight: '2026年 最優秀 動画変換ツール',
      h1Suffix: '徹底比較ガイド',
      badge: '🏆 最優秀 オンライン動画変換ツール',
      metaTitle: '2026年 おすすめ無料動画変換ツール — 制限なし・高セキュリティ',
      metaDescription: 'ConversordeVideo.comが選ばれる理由：ファイル送信不要、容量無制限、登録不要、完全プライベートな動画変換。',
      heroSubtitle: 'MP4, MOV, MP3, WebM, GIF を高品質に変換。待ち時間ゼロ・広告なし・ブラウザ内で完結。',
      dropzoneTitle: 'ここに動画または音声ファイルをドラッグして開始',
      explainerTitle: 'なぜブラウザ内 WebAssembly 変換が選ばれるのか？',
      explainerParagraphs: [
        '従来のクラウド変換ツールは月額課金や待ち時間があり、大事なプライベート動画をサーバーへ送信する必要がありました。ConversordeVideo.com はお使いの端末内で100%処理します。',
        'WebAssembly技術により、回線速度に左右されず超高速・安全に動画を変換できます。'
      ],
      sourceDetailsTitle: '従来のクラウド変換ツール',
      sourceDetails: [
        '大容量動画のアップロードに時間がかかる',
        '最大15分の順番待ちキュー',
        '無料枠は100MBまでなどの制限',
        '外部サーバーにデータが保管されるリスク'
      ],
      targetDetailsTitle: 'ConversordeVideo.com',
      targetDetails: [
        'ファイル送信不要 — 端末メモリ内で100%処理',
        '待ち時間ゼロ・回数無制限',
        'スマホ動画やカメラ映像を即時変換',
        '登録不要・完全無料'
      ]
    },
    zh: {
      h1Prefix: '2026年度最佳',
      h1Highlight: '免费在线视频转换工具',
      h1Suffix: '深度评测',
      badge: '🏆 最佳免费视频转换器与评测',
      metaTitle: '2026 最佳免费在线视频转换器 — 零上传无限制安全转码',
      metaDescription: '了解为什么 ConversordeVideo.com 是最佳免费视频转换器：零文件上传、无文件大小付费限制、免注册且 100% 私密安全。',
      heroSubtitle: '转换 MP4、MOV、MP3、WebM 和 GIF 的终极利器。免排队、无侵入式广告，100% 浏览器本地运行。',
      dropzoneTitle: '拖拽任意视频或音频文件到此处即可开始转换',
      explainerTitle: '为什么选择我们的浏览器本地 WebAssembly 转换器？',
      explainerParagraphs: [
        '传统的云端转换网站（如 CloudConvert、Convertio）收取高额订阅费，限制文件大小，并要求将私密视频上传至远程服务器。ConversordeVideo.com 100% 在您的本地电脑或手机内存中完成转码。',
        '依托先进的 WebAssembly 技术，无需消耗上传流量，享受极限转换速度与严密隐私保障。'
      ],
      sourceDetailsTitle: '传统云端转换工具',
      sourceDetails: [
        '大文件上传极其缓慢',
        '共享队列排队高达 15 分钟',
        '100 MB 免费额度限制及付费墙',
        '视频文件被存储在第三方云端服务器'
      ],
      targetDetailsTitle: 'ConversordeVideo.com',
      targetDetails: [
        '零文件上传 — 100% 浏览器内存安全计算',
        '零等待排队，无转换次数限制',
        '手机与高清摄像机视频瞬间转码',
        '免注册、免登录，完全免费'
      ]
    },
    no: {
      h1Prefix: 'Den Beste',
      h1Highlight: 'Gratis Videokonvertereren 2026',
      h1Suffix: 'på Nett og Trygg',
      badge: '🏆 Kåret til Raskeste og Tryggeste Konverterer',
      metaTitle: 'Beste Gratis Videokonverterer på Nett 2026 — Uten Begrensninger',
      metaDescription: 'Oppdag hvorfor ConversordeVideo.com er den beste gratis videokonvertereren: ingen skyopplasting, ingen størrelsesgrenser og 100% privat.',
      heroSubtitle: 'Det ultimate verktøyet for MP4, MOV, MP3, WebM og GIF. Null køer, ingen irriterende annonser og 100% i nettleseren.',
      dropzoneTitle: 'Dra en video- eller lydfil hit for å starte',
      explainerTitle: 'Hvorfor velge vår nettleserbaserte videokonverterer?'
    },
    tr: {
      h1Prefix: '2026’nın En İyi',
      h1Highlight: 'Ücretsiz Video Dönüştürücüsü',
      h1Suffix: 'Çevrimiçi ve Güvenli',
      badge: '🏆 En Hızlı ve Güvenli Video Dönüştürücü',
      metaTitle: 'En İyi Ücretsiz Video Dönüştürücü Çevrimiçi 2026 — Limitsiz ve Güvenli',
      metaDescription: 'ConversordeVideo.com’un neden en iyi ücretsiz video dönüştürücü olduğunu keşfedin: buluta yükleme yok, boyut sınırı yok, %100 gizli.',
      heroSubtitle: 'MP4, MOV, MP3, WebM ve GIF dönüştürmek için mükemmel araç. Bekleme sırası yok, reklam yok ve %100 tarayıcınızda.',
      dropzoneTitle: 'Dönüştürmeye başlamak için videoyu buraya sürükleyin',
      explainerTitle: 'Neden tarayıcı içi WebAssembly dönüştürücümüzü seçmelisiniz?'
    },
    pl: {
      h1Prefix: 'Najlepszy',
      h1Highlight: 'Darmowy Konwerter Wideo 2026',
      h1Suffix: 'Online i Bezpieczny',
      badge: '🏆 Najszybszy i Najbezpieczniejszy Konwerter',
      metaTitle: 'Najlepszy Darmowy Konwerter Wideo Online 2026 — Bez Limitów i Bezpieczny',
      metaDescription: 'Dowiedz się, dlaczego ConversordeVideo.com to najlepszy darmowy konwerter wideo: brak wysyłania do chmury, brak limitów rozmiaru i 100% prywatności.',
      heroSubtitle: 'Niezastąpione narzędzie do konwersji MP4, MOV, MP3, WebM i GIF. Brak kolejek i 100% w Twojej przeglądarce.',
      dropzoneTitle: 'Przeciągnij dowolny plik wideo lub audio, aby rozpocząć',
      explainerTitle: 'Dlaczego warto wybrać nasz konwerter w przeglądarce?'
    }
  },
  'converter-video-para-mp3': {
    en: {
      h1Prefix: 'Extract Audio',
      h1Highlight: 'Video to MP3 Converter',
      h1Suffix: 'Hi-Fi 192 kbps',
      badge: '🎵 Audio Track Extractor'
    },
    es: {
      h1Prefix: 'Extraer Audio',
      h1Highlight: 'Video a MP3',
      h1Suffix: 'Alta Fidelidad 192 kbps',
      badge: '🎵 Extractor de Audio MP3'
    },
    fr: {
      h1Prefix: 'Extraire l’Audio',
      h1Highlight: 'Vidéo vers MP3',
      h1Suffix: 'Haute Fidélité 192 kbps',
      badge: '🎵 Extracteur Audio MP3'
    },
    ja: {
      h1Prefix: '音声を抽出',
      h1Highlight: '動画から MP3 変換',
      h1Suffix: '192 kbps 高音質',
      badge: '🎵 高音質 MP3 音声抽出'
    },
    zh: {
      h1Prefix: '提取音频',
      h1Highlight: '视频提取 MP3',
      h1Suffix: '192 kbps 高保真',
      badge: '🎵 高保真 MP3 音频提取'
    }
  },
  'video-para-gif': {
    en: {
      h1Prefix: 'Convert',
      h1Highlight: 'Video to Animated GIF',
      h1Suffix: 'High Quality Loops',
      badge: '✨ Animated GIF Maker'
    },
    es: {
      h1Prefix: 'Convertir',
      h1Highlight: 'Video a GIF Animado',
      h1Suffix: 'Bucles de Alta Calidad',
      badge: '✨ Creador de GIFs Animados'
    },
    fr: {
      h1Prefix: 'Convertir',
      h1Highlight: 'Vidéo vers GIF Animé',
      h1Suffix: 'Boucles Fluides',
      badge: '✨ Créateur de GIF Animé'
    },
    ja: {
      h1Prefix: '動画から',
      h1Highlight: 'アニメーション GIF 作成',
      h1Suffix: '高画質ループ',
      badge: '✨ GIF アニメーション作成'
    },
    zh: {
      h1Prefix: '精彩剪辑',
      h1Highlight: '视频转动态 GIF',
      h1Suffix: '高画质循环动图',
      badge: '✨ 高清 GIF 动图制作'
    }
  },
  'conversor-de-audio': {
    en: {
      h1Prefix: 'Universal',
      h1Highlight: 'Audio Converter Online',
      h1Suffix: 'Free',
      badge: '🎧 Universal Audio Transcoder',
      metaTitle: 'Free Online Audio Converter — Transcode Audio to MP3',
      metaDescription: 'Convert audio files (WAV, FLAC, M4A, OGG, AAC) and extract audio from videos to 192 kbps MP3 in your browser. 100% free, private with no file uploads.',
      heroSubtitle: 'Convert sound files and extract audio tracks from videos into universal MP3 with crystal-clear stereo fidelity. 100% processed in your browser.'
    },
    es: {
      h1Prefix: 'Convertidor de',
      h1Highlight: 'Audio Online',
      h1Suffix: 'Gratis',
      badge: '🎧 Transcodificador de Audio Universal',
      metaTitle: 'Convertidor de Audio Online Gratis — Transcodificar a MP3',
      metaDescription: 'Convierte archivos de audio (WAV, FLAC, M4A, OGG, AAC) y extrae sonido de videos a MP3 de 192 kbps en tu navegador. 100% gratis y privado sin subir archivos.',
      heroSubtitle: 'Transforma grabaciones, pistas musicales y audios de video en MP3 universal con alta claridad estéreo. Procesamiento 100% en tu navegador.'
    },
    fr: {
      h1Prefix: 'Convertisseur d’',
      h1Highlight: 'Audio en Ligne',
      h1Suffix: 'Gratuit',
      badge: '🎧 Transcodeur Audio Universel',
      metaTitle: 'Convertisseur Audio en Ligne Gratuit — Transcoder en MP3',
      metaDescription: 'Convertissez des fichiers audio (WAV, FLAC, M4A, OGG, AAC) et extrayez le son de vidéos en MP3 192 kbps dans votre navigateur. 100% gratuit, sans upload.',
      heroSubtitle: 'Transformez enregistrements, pistes audio et vidéos en MP3 universel avec une fidélité stéréo irréprochable. 100% local dans votre navigateur.'
    },
    ja: {
      h1Prefix: '高音質',
      h1Highlight: '万能 音声変換ツール',
      h1Suffix: '無料',
      badge: '🎧 万能オーディオコンバーター',
      metaTitle: '無料オンライン音声変換ツール — 音声・動画を MP3 に変換',
      metaDescription: 'WAV、FLAC、M4A、OGG、AAC などの音声や動画から 192 kbps 高音質 MP3 へブラウザ上で変換。サーバー送信不要で100%安全・無料。',
      heroSubtitle: '録音ファイルや音楽、動画から音声を抽出し、クリアなステレオ MP3 に変換。ブラウザ内完結で完全プライベート。'
    },
    zh: {
      h1Prefix: '万能',
      h1Highlight: '音频格式转换器',
      h1Suffix: '免费在线',
      badge: '🎧 全格式音频转码器',
      metaTitle: '免费在线音频转换器 — 各类音频转 MP3 高保真',
      metaDescription: '在浏览器中将 WAV、FLAC、M4A、OGG、AAC 音频及视频转换为 192 kbps MP3。无需上传服务器，100% 隐私安全且完全免费。',
      heroSubtitle: '将录音、音乐及视频音轨转换为高清晰度 MP3 格式。所有转码均在本地浏览器内完成。'
    },
    no: {
      h1Prefix: 'Universell',
      h1Highlight: 'Lydkonverterer Online',
      h1Suffix: 'Gratis',
      badge: '🎧 Universell Lydkonvertering',
      metaTitle: 'Gratis Lydkonverterer Online — Konverter Lyd til MP3',
      metaDescription: 'Konverter lydfiler (WAV, FLAC, M4A, OGG, AAC) og trekk ut lyd fra videoer til 192 kbps MP3 direkte i nettleseren. 100% gratis og privat.',
      heroSubtitle: 'Gjør om opptak, musikkspor og videolyd til universell MP3 med krystallklar stereolyd. 100% i nettleseren din.'
    },
    tr: {
      h1Prefix: 'Evrensel',
      h1Highlight: 'Çevrimiçi Ses Dönüştürücü',
      h1Suffix: 'Ücretsiz',
      badge: '🎧 Evrensel Ses Kodlayıcı',
      metaTitle: 'Ücretsiz Çevrimiçi Ses Dönüştürücü — MP3’e Dönüştür',
      metaDescription: 'Ses dosyalarını (WAV, FLAC, M4A, OGG, AAC) ve videolardaki sesi tarayıcınızda 192 kbps MP3 formatına dönüştürün. %100 ücretsiz, sunucuya yüklemesiz.',
      heroSubtitle: 'Ses kayıtlarını ve müzik parçalarını kristal netliğinde evrensel MP3 formatına dönüştürün. %100 tarayıcınızda işlenir.'
    },
    pl: {
      h1Prefix: 'Uniwersalny',
      h1Highlight: 'Konwerter Audio Online',
      h1Suffix: 'za Darmo',
      badge: '🎧 Uniwersalny Transkoder Audio',
      metaTitle: 'Darmowy Konwerter Audio Online — Konwertuj na MP3',
      metaDescription: 'Konwertuj pliki audio (WAV, FLAC, M4A, OGG, AAC) i wyodrębniaj dźwięk z wideo na MP3 192 kbps w przeglądarce. 100% darmowy i w pełni prywatny.',
      heroSubtitle: 'Przekształcaj nagrania, utwory i ścieżki dźwiękowe z wideo w uniwersalny format MP3. Przetwarzanie w 100% w Twojej przeglądarce.'
    }
  },
  'conversor-de-audio-para-mp3': {
    en: {
      h1Prefix: 'Convert Audio to',
      h1Highlight: 'MP3 Online',
      h1Suffix: 'Free',
      badge: '🎵 Hi-Fi Stereo • 192 kbps LAME',
      metaTitle: 'Audio to MP3 Converter Online Free — Fast & Private',
      metaDescription: 'Convert any audio recording or music file to 192 kbps stereo MP3 in your browser. 100% private, free with no file uploads to the cloud.',
      heroSubtitle: 'Transform voice notes, music tracks, and audio recordings into universal MP3 compatible with every audio player. No software installation needed.'
    },
    es: {
      h1Prefix: 'Convertidor de Audio a',
      h1Highlight: 'MP3 Online',
      h1Suffix: 'Gratis',
      badge: '🎵 Alta Fidelidad Estéreo • 192 kbps LAME',
      metaTitle: 'Convertidor de Audio a MP3 Online Gratis — Rápido y Seguro',
      metaDescription: 'Convierte cualquier archivo de sonido a MP3 con codificación LAME de 192 kbps estéreo en tu navegador. 100% gratuito y privado sin subir a la nube.',
      heroSubtitle: 'Transforma notas de voz, música y pistas de audio en MP3 compatible con todos los reproductores. Sin instalar programas ni esperas.'
    },
    fr: {
      h1Prefix: 'Convertisseur Audio vers',
      h1Highlight: 'MP3 en Ligne',
      h1Suffix: 'Gratuit',
      badge: '🎵 Haute Fidélité Stéréo • 192 kbps LAME',
      metaTitle: 'Convertisseur Audio vers MP3 en Ligne Gratuit — Rapide',
      metaDescription: 'Convertissez tout fichier audio en MP3 192 kbps stéréo directement dans votre navigateur. 100% gratuit, sans envoi sur serveur et totalement sécurisé.',
      heroSubtitle: 'Transformez enregistrements vocaux, musiques et pistes audio en MP3 universel compatible avec tous les lecteurs. Sans logiciel à installer.'
    },
    ja: {
      h1Prefix: '音声ファイルを',
      h1Highlight: 'MP3 に変換',
      h1Suffix: '無料オンライン',
      badge: '🎵 192 kbps 高音質ステレオ LAME',
      metaTitle: '音声から MP3 変換オンライン無料 — 高音質 192 kbps',
      metaDescription: 'あらゆる音声や音楽ファイルをブラウザ上で 192 kbps ステレオ MP3 に変換。サーバーへのアップロード不要で100%無料・安全。',
      heroSubtitle: 'ボイスメモや楽曲ファイルを全デバイス対応の MP3 形式に変換。インストール不要で即座に処理されます。'
    },
    zh: {
      h1Prefix: '音频格式转换为',
      h1Highlight: 'MP3 格式转换器',
      h1Suffix: '免费在线',
      badge: '🎵 192 kbps 高保真立体声 LAME',
      metaTitle: '音频转 MP3 格式转换器免费在线 — 极速且私密',
      metaDescription: '在浏览器中将任何音频文件转换为 192 kbps 立体声 MP3。完全本地运行，不上传云端，零等待且100%免费。',
      heroSubtitle: '将语音备忘录、音乐和各类录音转换为兼容所有播放器的标准 MP3。无需安装软件或排队等待。'
    },
    no: {
      h1Prefix: 'Konverter Lyd til',
      h1Highlight: 'MP3 Online',
      h1Suffix: 'Gratis',
      badge: '🎵 Hi-Fi Stereo • 192 kbps LAME',
      metaTitle: 'Lyd til MP3 Konverter Online Gratis — Rask og Sikker',
      metaDescription: 'Konverter lydfiler til 192 kbps stereo MP3 direkte i nettleseren. 100% privat, gratis og uten opplasting til skyen.',
      heroSubtitle: 'Gjør om taleopptak, musikk og lydfiler til universell MP3 som fungerer overalt. Ingen programvareinstallasjon nødvendig.'
    },
    tr: {
      h1Prefix: 'Sesi Dönüştür ->',
      h1Highlight: 'Çevrimiçi MP3',
      h1Suffix: 'Ücretsiz',
      badge: '🎵 Yüksek Kaliteli Stereo • 192 kbps LAME',
      metaTitle: 'Ses Dosyasını MP3’e Dönüştür Çevrimiçi Ücretsiz',
      metaDescription: 'Tüm ses kayıtlarını ve müzik dosyalarını tarayıcınızda 192 kbps stereo MP3’e dönüştürün. %100 özel, ücretsiz ve buluta yükleme yok.',
      heroSubtitle: 'Ses kayıtlarınızı tüm oynatıcılarla uyumlu MP3 formatına dönüştürün. Program yüklemeye gerek yok.'
    },
    pl: {
      h1Prefix: 'Konwertuj Audio na',
      h1Highlight: 'MP3 Online',
      h1Suffix: 'za Darmo',
      badge: '🎵 Wysoka Wierność Stereo • 192 kbps LAME',
      metaTitle: 'Konwerter Audio na MP3 Online za Darmo — Szybko',
      metaDescription: 'Konwertuj dowolny plik audio na stereo MP3 192 kbps w przeglądarce. 100% prywatny, darmowy i bez wysyłania plików do chmury.',
      heroSubtitle: 'Przekształcaj notatki głosowe i utwory w uniwersalny MP3 zgodny z każdym odtwarzaczem. Bez instalowania programów.'
    }
  },
  'baixar-conversor-de-audio-mp3-gratuito': {
    en: {
      h1Prefix: 'Free Audio to',
      h1Highlight: 'MP3 Converter No Download',
      h1Suffix: 'Online',
      badge: '🏆 No Software Download • 100% In-Browser',
      metaTitle: 'Free Audio to MP3 Converter — No Software Download Needed',
      metaDescription: 'Convert audio and video to MP3 free in your browser without downloading risky software. Fast, secure, zero signup and 100% private.',
      heroSubtitle: 'Skip bulky desktop app installations: convert any audio to MP3 directly in your browser at full native speed.'
    },
    es: {
      h1Prefix: 'Convertidor de Audio a',
      h1Highlight: 'MP3 Gratis Sin Descargas',
      h1Suffix: 'Online',
      badge: '🏆 Sin Descargar Programas • 100% Seguro en la Web',
      metaTitle: 'Convertidor de Audio a MP3 Gratis — Sin Instalar Programas',
      metaDescription: 'Convierte audio y video a MP3 gratis en tu navegador sin descargar programas pesados. Rápido, seguro, sin registro y 100% privado.',
      heroSubtitle: 'Olvídate de instalar aplicaciones pesadas: convierte cualquier audio a MP3 en el navegador con velocidad nativa.'
    },
    fr: {
      h1Prefix: 'Convertisseur Audio vers',
      h1Highlight: 'MP3 Gratuit Sans Téléchargement',
      h1Suffix: 'en Ligne',
      badge: '🏆 Sans Logiciel à Télécharger • 100% Web Sécurisé',
      metaTitle: 'Convertisseur Audio vers MP3 Gratuit — Sans Téléchargement',
      metaDescription: 'Convertissez audio et vidéo en MP3 gratuitement dans votre navigateur sans installer de logiciel. Rapide, sécurisé et 100% privé.',
      heroSubtitle: 'Plus besoin de télécharger d’application : convertissez vos pistes audio en MP3 directement dans le navigateur.'
    },
    ja: {
      h1Prefix: 'インストール不要',
      h1Highlight: '無料 MP3 音声変換ツール',
      h1Suffix: 'ブラウザ完結',
      badge: '🏆 ダウンロード不要・完全無料・安全',
      metaTitle: '無料 MP3 音声変換ツール — ソフトのダウンロード不要',
      metaDescription: '危険なフリーソフトをダウンロードすることなく、ブラウザ上で安全に音声を MP3 へ変換。登録不要・完全無料。',
      heroSubtitle: '重いソフトのインストールは不要：ブラウザを開くだけでネイティブアプリ並みの速度で MP3 に変換可能。'
    },
    zh: {
      h1Prefix: '无需下载软件',
      h1Highlight: '免费音频转 MP3 工具',
      h1Suffix: '网页版',
      badge: '🏆 免下载安装 • 100% 纯网页安全转码',
      metaTitle: '免费音频转 MP3 工具网页版 — 无需下载任何软件',
      metaDescription: '在浏览器中免费将音频和视频转换为 MP3，无需下载有风险的桌面软件。极速、安全、无限制且零广告插件。',
      heroSubtitle: '告别繁琐的软件安装：直接在浏览器中以本地极速将音频转为 MP3 格式。'
    },
    no: {
      h1Prefix: 'Gratis Lyd til',
      h1Highlight: 'MP3 Uten Nedlasting',
      h1Suffix: 'Online',
      badge: '🏆 Ingen Programnedlasting • 100% Trygt',
      metaTitle: 'Gratis Lyd til MP3 Konverterer — Uten Nedlasting',
      metaDescription: 'Konverter lyd og video til MP3 gratis i nettleseren uten å laste ned usikre programmer. Raskt, sikkert og 100% privat.',
      heroSubtitle: 'Hopp over store skrivebordsprogrammer: konverter all lyd til MP3 direkte i nettleseren med full hastighet.'
    },
    tr: {
      h1Prefix: 'İndirme Gerektirmeyen',
      h1Highlight: 'Ücretsiz MP3 Ses Dönüştürücü',
      h1Suffix: 'Çevrimiçi',
      badge: '🏆 Program İndirmeden • %100 Güvenli Web',
      metaTitle: 'Ücretsiz MP3 Ses Dönüştürücü — Program İndirmeden',
      metaDescription: 'Tarayıcınızda şüpheli programlar indirmeden sesleri ücretsiz MP3’e dönüştürün. Hızlı, güvenli, üyeliksiz ve %100 gizli.',
      heroSubtitle: 'Ağır masaüstü programları yüklemeyi unutun: tüm sesleri doğrudan tarayıcınızda MP3’e dönüştürün.'
    },
    pl: {
      h1Prefix: 'Darmowy Konwerter Audio na',
      h1Highlight: 'MP3 Bez Pobierania Programów',
      h1Suffix: 'Online',
      badge: '🏆 Bez Instalacji • 100% Bezpiecznie w Przeglądarce',
      metaTitle: 'Darmowy Konwerter Audio na MP3 — Bez Pobierania',
      metaDescription: 'Konwertuj dźwięk i wideo na MP3 za darmo w przeglądarce bez instalowania ryzykownych programów. Szybko, bezpiecznie i 100% prywatnie.',
      heroSubtitle: 'Pomiń instalację ciężkich aplikacji: konwertuj dowolne audio na MP3 bezpośrednio w przeglądarce.'
    }
  },
  'conversor-de-audio-mp3': {
    en: {
      h1Prefix: 'Fast',
      h1Highlight: 'Audio MP3 Converter',
      h1Suffix: 'Online Free',
      badge: '⚡ Fast MP3 Audio Encoder',
      metaTitle: 'Audio MP3 Converter Online Free — Crisp Sound',
      metaDescription: 'Transform any audio or video file into lightweight 192 kbps MP3. 100% in-browser, no upload to remote servers and zero signup.',
      heroSubtitle: 'The straightforward tool to turn music tracks and recordings into high-fidelity stereo MP3 without queues or limits.'
    },
    es: {
      h1Prefix: 'Convertidor de',
      h1Highlight: 'Audio MP3',
      h1Suffix: 'Online Gratis',
      badge: '⚡ Conversión Rápida a Formato MP3',
      metaTitle: 'Convertidor de Audio MP3 Online Gratis — Sonido Nítido',
      metaDescription: 'Transforma cualquier archivo de audio o video en MP3 ligero a 192 kbps. 100% en tu navegador, sin subidas a servidores y sin registros.',
      heroSubtitle: 'La herramienta práctica para convertir pistas de sonido en MP3 estéreo de alta fidelidad sin complicaciones.'
    },
    fr: {
      h1Prefix: 'Convertisseur d’',
      h1Highlight: 'Audio MP3',
      h1Suffix: 'en Ligne Gratuit',
      badge: '⚡ Encodage Rapide au Format MP3',
      metaTitle: 'Convertisseur Audio MP3 en Ligne Gratuit — Son Net',
      metaDescription: 'Transformez tout fichier audio ou vidéo en MP3 léger de 192 kbps. 100% dans votre navigateur, sans upload et sans inscription.',
      heroSubtitle: 'L’outil idéal pour convertir pistes musicales et vocales en MP3 stéréo haute fidélité sans attente.'
    },
    ja: {
      h1Prefix: '高速',
      h1Highlight: 'オーディオ MP3 変換',
      h1Suffix: '無料オンライン',
      badge: '⚡ 高速 MP3 オーディオエンコーダー',
      metaTitle: 'オーディオ MP3 変換オンライン無料 — クリアな高音質',
      metaDescription: 'あらゆる音声や動画を軽量な 192 kbps MP3 に変換。ブラウザ内ローカル処理でサーバー送信不要・登録不要。',
      heroSubtitle: '音声や楽曲を手軽に高音質ステレオ MP3 に変換できるシンプルなオンラインツール。'
    },
    zh: {
      h1Prefix: '极速',
      h1Highlight: '音频 MP3 转换器',
      h1Suffix: '免费在线',
      badge: '⚡ 极速 MP3 音频转码引擎',
      metaTitle: '音频 MP3 转换器免费在线 — 清晰音质',
      metaDescription: '将任何音频或视频文件转为轻量级 192 kbps MP3 格式。浏览器内 100% 本地完成，无需上传且无注册要求。',
      heroSubtitle: '轻松将音轨和录音转换为高保真立体声 MP3 的便捷工具，无排队与大小限制。'
    },
    no: {
      h1Prefix: 'Rask',
      h1Highlight: 'Lyd MP3 Konverter',
      h1Suffix: 'Online Gratis',
      badge: '⚡ Rask MP3 Koding',
      metaTitle: 'Lyd MP3 Konverter Online Gratis — Krystallklar Lyd',
      metaDescription: 'Gjør om alle lyd- eller videofiler til 192 kbps MP3. 100% i nettleseren, ingen opplasting og ingen registrering.',
      heroSubtitle: 'Et praktisk verktøy for å gjøre lydspor og opptak om til høykvalitets MP3 uten ventetid.'
    },
    tr: {
      h1Prefix: 'Hızlı',
      h1Highlight: 'Ses MP3 Dönüştürücü',
      h1Suffix: 'Çevrimiçi Ücretsiz',
      badge: '⚡ Hızlı MP3 Ses Kodlayıcı',
      metaTitle: 'Ses MP3 Dönüştürücü Çevrimiçi Ücretsiz — Net Ses',
      metaDescription: 'Tüm ses veya video dosyalarını hafif 192 kbps MP3’e dönüştürün. Tarayıcınızda %100 yerel, sunucuya yüklemesiz ve kayıtsız.',
      heroSubtitle: 'Müzikleri ve ses kayıtlarını yüksek kaliteli stereo MP3 formatına dönüştürmenin en pratik yolu.'
    },
    pl: {
      h1Prefix: 'Szybki',
      h1Highlight: 'Konwerter Audio MP3',
      h1Suffix: 'Online za Darmo',
      badge: '⚡ Szybki Enkoder Audio MP3',
      metaTitle: 'Konwerter Audio MP3 Online za Darmo — Czysty Dźwięk',
      metaDescription: 'Przekształć dowolny plik audio lub wideo w lekki MP3 192 kbps. 100% w przeglądarce, bez wysyłania na serwer i bez rejestracji.',
      heroSubtitle: 'Praktyczne narzędzie do zmiany ścieżek dźwiękowych w pliki MP3 o wysokiej wierności bez zbędnych formalności.'
    }
  },
  'conversor-de-audio-online': {
    en: {
      h1Prefix: 'Private',
      h1Highlight: 'Online Audio Converter',
      h1Suffix: 'In-Browser',
      badge: '🌐 100% Online • Zero Upload • Private',
      metaTitle: 'Online Audio Converter — Convert Locally in Your Browser',
      metaDescription: 'Convert audio files online with complete privacy: the entire transcode process runs in your browser without uploading to servers. Free & secure.',
      heroSubtitle: 'Convert music, podcasts, and voice notes in your browser without slow cloud uploads and with guaranteed privacy.'
    },
    es: {
      h1Prefix: 'Convertidor de',
      h1Highlight: 'Audio Online',
      h1Suffix: 'en el Navegador',
      badge: '🌐 100% Online • Sin Subidas • Privado',
      metaTitle: 'Convertidor de Audio Online — Sin Subir Archivos a la Web',
      metaDescription: 'Convierte archivos de audio online con total privacidad: todo el proceso corre en tu navegador sin subir a servidores. 100% gratis y seguro.',
      heroSubtitle: 'Convierte canciones, podcasts y grabaciones en tu navegador sin esperas de subida y con privacidad garantizada.'
    },
    fr: {
      h1Prefix: 'Convertisseur d’',
      h1Highlight: 'Audio en Ligne',
      h1Suffix: 'dans le Navigateur',
      badge: '🌐 100% en Ligne • Zéro Upload • Privé',
      metaTitle: 'Convertisseur Audio en Ligne — Sans Envoi sur Serveur',
      metaDescription: 'Convertissez vos fichiers audio en ligne en toute confidentialité : le traitement s’exécute dans votre navigateur sans upload. 100% gratuit.',
      heroSubtitle: 'Convertissez musiques, podcasts et voix dans votre navigateur sans téléversement lent et en toute sécurité.'
    },
    ja: {
      h1Prefix: '完全プライベート',
      h1Highlight: 'オンライン音声変換',
      h1Suffix: 'ブラウザ処理',
      badge: '🌐 100% オンライン・アップロード不要・安全',
      metaTitle: 'オンライン音声変換 — サーバーへ送信しない安全設計',
      metaDescription: '完全なプライバシーで音声をオンライン変換：全処理がブラウザ内で動作しサーバーへの送信は一切ありません。無料・安全。',
      heroSubtitle: 'アップロード待ち時間ゼロ：音楽や録音をブラウザ内で瞬時に高音質変換します。'
    },
    zh: {
      h1Prefix: '纯本地隐私',
      h1Highlight: '在线音频转换器',
      h1Suffix: '浏览器端转码',
      badge: '🌐 100% 在线 • 零上传 • 绝对隐私',
      metaTitle: '在线音频转换器 — 纯本地浏览器处理无需上传',
      metaDescription: '在线转换音频并享受极致隐私保护：所有转码均在您的浏览器本地执行，绝不向远程服务器上传文件。免费安全。',
      heroSubtitle: '在浏览器中转换音乐、播客和语音备忘录，告别缓慢的云端上传等待，完全保障数据安全。'
    },
    no: {
      h1Prefix: 'Privat',
      h1Highlight: 'Online Lydkonverterer',
      h1Suffix: 'i Nettleseren',
      badge: '🌐 100% Online • Ingen Opplasting • Privat',
      metaTitle: 'Online Lydkonverterer — Konverter Lokalt i Nettleseren',
      metaDescription: 'Konverter lydfiler online med fullt personvern: alt kjøres i nettleseren din uten opplasting til eksterne servere. Gratis og trygt.',
      heroSubtitle: 'Konverter musikk og opptak i nettleseren uten trege skyopplastinger og med garantert personvern.'
    },
    tr: {
      h1Prefix: 'Gizli ve Güvenli',
      h1Highlight: 'Çevrimiçi Ses Dönüştürücü',
      h1Suffix: 'Tarayıcıda',
      badge: '🌐 %100 Çevrimiçi • Sıfır Yükleme • Gizli',
      metaTitle: 'Çevrimiçi Ses Dönüştürücü — Sunucuya Yüklemesiz',
      metaDescription: 'Ses dosyalarını tam gizlilikle çevrimiçi dönüştürün: tüm işlem sunucuya yüklenmeden tarayıcınızda çalışır. Ücretsiz ve güvenli.',
      heroSubtitle: 'Müzik ve ses kayıtlarını yavaş yükleme süreleri olmadan tarayıcınızda güvenle dönüştürün.'
    },
    pl: {
      h1Prefix: 'Prywatny',
      h1Highlight: 'Konwerter Audio Online',
      h1Suffix: 'w Przeglądarce',
      badge: '🌐 100% Online • Zero Wysyłania • Prywatny',
      metaTitle: 'Konwerter Audio Online — Bez Wysyłania Plików w Sieć',
      metaDescription: 'Konwertuj pliki audio online z pełną prywatnością: całe przetwarzanie odbywa się w Twojej przeglądarce bez wysyłania na serwery. Bezpiecznie.',
      heroSubtitle: 'Konwertuj utwory i nagrania w przeglądarce bez czekania na przesyłanie plików i z gwarancją prywatności.'
    }
  },
  'conversor-de-audio-do-youtube': {
    en: {
      h1Prefix: 'Convert Downloaded',
      h1Highlight: 'YouTube Video to MP3 Audio',
      h1Suffix: 'Online',
      badge: '📹 Extract MP3 from Saved YouTube Videos',
      metaTitle: 'YouTube Video to MP3 Audio Converter — Local File Extraction',
      metaDescription: 'Extract audio from downloaded YouTube videos and Shorts into 192 kbps MP3 format. 100% in-browser, private with no file uploads.',
      heroSubtitle: 'Convert your saved YouTube video clips into crisp, lightweight MP3 audio files to listen on mobile, headphones, or in your car.'
    },
    es: {
      h1Prefix: 'Convertidor de Audio de',
      h1Highlight: 'Videos de YouTube a MP3',
      h1Suffix: 'Online',
      badge: '📹 Extraer MP3 de Videos Descargados de YouTube',
      metaTitle: 'Convertidor de Audio de YouTube a MP3 — Formatear Videos',
      metaDescription: 'Extrae el audio de videos y Shorts descargados de YouTube en formato MP3 a 192 kbps. 100% en el navegador, seguro y sin subir archivos.',
      heroSubtitle: 'Convierte grabaciones y clips guardados de YouTube en audios MP3 ligeros y nítidos para escuchar en el coche o móvil.'
    },
    fr: {
      h1Prefix: 'Convertisseur Audio de',
      h1Highlight: 'Vidéo YouTube vers MP3',
      h1Suffix: 'en Ligne',
      badge: '📹 Extraire le MP3 de Vidéos YouTube Enregistrées',
      metaTitle: 'Convertisseur Vidéo YouTube vers Audio MP3 — Fichiers Locaux',
      metaDescription: 'Extrayez la piste audio de vidéos et Shorts YouTube enregistrés au format MP3 192 kbps. 100% dans le navigateur, sans upload.',
      heroSubtitle: 'Convertissez vos vidéos YouTube enregistrées en fichiers MP3 légers et clairs pour les écouter partout.'
    },
    ja: {
      h1Prefix: '保存済み',
      h1Highlight: 'YouTube 動画から MP3 抽出',
      h1Suffix: '無料オンライン',
      badge: '📹 保存済み YouTube 動画から MP3 音声を抽出',
      metaTitle: 'YouTube 動画から MP3 音声変換 — ローカル動画から抽出',
      metaDescription: '保存した YouTube や Shorts 動画から 192 kbps MP3 音声を抽出。ブラウザ上でのローカル処理によりサーバー送信不要で安心。',
      heroSubtitle: '保存済みの YouTube クリップを軽量で高音質な MP3 ファイルに変換し、スマホやカーステレオで楽しめます。'
    },
    zh: {
      h1Prefix: '已保存的',
      h1Highlight: 'YouTube 视频提取 MP3 音频',
      h1Suffix: '免费在线',
      badge: '📹 从已下载的 YouTube 视频提取 MP3',
      metaTitle: 'YouTube 视频转 MP3 音频转换器 — 本地文件提取',
      metaDescription: '从已保存的 YouTube 视频与 Shorts 中提取 192 kbps MP3 音频。100% 浏览器本地运行，安全且不上传任何文件。',
      heroSubtitle: '将保存在本地的 YouTube 视频片段转换为轻巧清晰的 MP3 音频，方便在手机、耳机或车载音响上收听。'
    },
    no: {
      h1Prefix: 'Konverter Nedlastet',
      h1Highlight: 'YouTube Video til MP3',
      h1Suffix: 'Online',
      badge: '📹 Trekk ut MP3 fra Lagrede YouTube-videoer',
      metaTitle: 'YouTube Video til MP3 Lydkonverter — Lokal Uttrekking',
      metaDescription: 'Trekk ut lyd fra lagrede YouTube-videoer og Shorts til 192 kbps MP3-format. 100% i nettleseren, sikkert og uten filopplasting.',
      heroSubtitle: 'Gjør om lagrede YouTube-klipp til lette, krystallklare MP3-lydfiler for enkel lytting på farten.'
    },
    tr: {
      h1Prefix: 'Kaydedilen',
      h1Highlight: 'YouTube Videosundan MP3 Ses Çıkarıcı',
      h1Suffix: 'Çevrimiçi',
      badge: '📹 Kaydedilmiş YouTube Videosundan MP3 Çıkar',
      metaTitle: 'YouTube Videosundan MP3 Ses Çıkarıcı — Yerel Dosyalar',
      metaDescription: 'İndirilmiş YouTube ve Shorts videolarından 192 kbps MP3 ses çıkarın. %100 tarayıcıda, güvenli ve sunucuya yüklemesiz.',
      heroSubtitle: 'Kaydettiğiniz YouTube kliplerini araba veya kulaklıkta dinlemek için hafif ve net MP3 ses dosyalarına dönüştürün.'
    },
    pl: {
      h1Prefix: 'Konwertuj Zapisane',
      h1Highlight: 'Wideo z YouTube na Audio MP3',
      h1Suffix: 'Online',
      badge: '📹 Wyodrębnij MP3 z Zapisanych Wideo YouTube',
      metaTitle: 'Konwerter Wideo YouTube na Audio MP3 — Pliki Lokalne',
      metaDescription: 'Wyodrębnij dźwięk z pobranych filmów YouTube i Shorts do formatu MP3 192 kbps. 100% w przeglądarce, bezpiecznie i bez wysyłania plików.',
      heroSubtitle: 'Przekształcaj zapisane klipy z YouTube w lekkie i czyste pliki audio MP3 do słuchania w samochodzie lub telefonie.'
    }
  },
  'converter-video-em-audio': {
    en: {
      h1Prefix: 'Convert Video to',
      h1Highlight: 'Audio Online',
      h1Suffix: 'Free',
      badge: '🎵 Video to Audio Converter',
      metaTitle: 'Convert Video to Audio Online Free — Fast & Private MP3 Extractor',
      metaDescription: 'Convert any video (MP4, MOV, MKV, AVI, WebM) to crystal-clear MP3 audio in your browser. 100% free, unlimited, private with no file uploads.',
      heroSubtitle: 'Transform video recordings and clips into lightweight, high-fidelity stereo audio in seconds. 100% processed locally in your browser.'
    },
    es: {
      h1Prefix: 'Convertir Video en',
      h1Highlight: 'Audio Online',
      h1Suffix: 'Gratis',
      badge: '🎵 Conversor de Video a Audio',
      metaTitle: 'Convertir Video en Audio Online Gratis — Extractor Rápido y Privado',
      metaDescription: 'Convierte cualquier video (MP4, MOV, MKV, AVI, WebM) a audio MP3 de alta calidad en tu navegador. 100% gratis, sin límites y sin subir archivos.',
      heroSubtitle: 'Transforma grabaciones y videos en pistas de audio estéreo nítidas y ligeras en segundos. Procesamiento 100% local en tu navegador.'
    },
    fr: {
      h1Prefix: 'Convertir Vidéo en',
      h1Highlight: 'Audio en Ligne',
      h1Suffix: 'Gratuit',
      badge: '🎵 Convertisseur Vidéo vers Audio',
      metaTitle: 'Convertir Vidéo en Audio en Ligne Gratuit — Extraction Rapide',
      metaDescription: 'Convertissez toute vidéo (MP4, MOV, MKV, AVI, WebM) en audio MP3 de haute fidélité dans votre navigateur. 100% gratuit, sans limite et sans upload.',
      heroSubtitle: 'Transformez vos enregistrements et vidéos en pistes audio stéréo légères et nettes en quelques secondes. Traitement 100% local.'
    },
    ja: {
      h1Prefix: '動画ファイルを',
      h1Highlight: '高音質 音声に変換',
      h1Suffix: '無料',
      badge: '🎵 動画から音声への変換ツール',
      metaTitle: '動画を音声に変換 無料オンライン — 高音質 MP3 抽出',
      metaDescription: 'MP4、MOV、MKV、AVI などの動画をブラウザ上で高音質 MP3 音声に高速変換。完全無料・無制限・クラウド送信なしで安心。',
      heroSubtitle: '動画クリップや録画から音声トラックだけを抽出して軽量な MP3 に瞬時に変換します。端末内ローカル処理で完全プライベート。'
    },
    zh: {
      h1Prefix: '将任何视频转换为',
      h1Highlight: '高清音频',
      h1Suffix: '在线免费',
      badge: '🎵 视频转音频提取器',
      metaTitle: '视频转音频 在线免费转换 — 快速提取高清 MP3',
      metaDescription: '在浏览器中直接将各类视频（MP4、MOV、MKV、AVI、WebM）转换为清晰的 MP3 音频。100% 免费无限制，无需上传云端。',
      heroSubtitle: '数秒内将录像与视频转换为轻巧清晰的立体声音频。100% 浏览器本地安全处理。'
    },
    no: {
      h1Prefix: 'Konverter Video til',
      h1Highlight: 'Lyd Online',
      h1Suffix: 'Gratis',
      badge: '🎵 Video til Lyd Konverterer',
      metaTitle: 'Konverter Video til Lyd Online Gratis — Rask MP3 Uttrekking',
      metaDescription: 'Konverter enhver video (MP4, MOV, MKV, AVI, WebM) til krystallklar MP3-lyd i nettleseren. 100% gratis, uten begrensninger og uten opplasting.',
      heroSubtitle: 'Gjør om videoopptak og klipp til lette, høykvalitets stereolydfiler på sekunder. 100% lokalt i nettleseren.'
    },
    tr: {
      h1Prefix: 'Videoyu',
      h1Highlight: 'Sese Dönüştür',
      h1Suffix: 'Çevrimiçi Ücretsiz',
      badge: '🎵 Videodan Sese Dönüştürücü',
      metaTitle: 'Videoyu Sese Dönüştür Çevrimiçi Ücretsiz — Hızlı MP3 Çıkarma',
      metaDescription: 'Herhangi bir videoyu (MP4, MOV, MKV, AVI, WebM) tarayıcınızda kristal netliğinde MP3 sese dönüştürün. %100 ücretsiz, sınırsız ve yüklemesiz.',
      heroSubtitle: 'Video kayıtlarını ve kliplerini saniyeler içinde hafif, yüksek kaliteli stereo ses dosyalarına dönüştürün.'
    },
    pl: {
      h1Prefix: 'Konwertuj Wideo na',
      h1Highlight: 'Dźwięk Online',
      h1Suffix: 'Za Darmo',
      badge: '🎵 Konwerter Wideo na Audio',
      metaTitle: 'Konwertuj Wideo na Dźwięk Online Za Darmo — Ekstrakcja MP3',
      metaDescription: 'Konwertuj dowolne wideo (MP4, MOV, MKV, AVI, WebM) na krystalicznie czysty dźwięk MP3 w przeglądarce. 100% bezpłatnie, bez limitów i bez wysyłania.',
      heroSubtitle: 'Przekształcaj nagrania i klipy wideo w lekkie i czyste pliki audio stereo w kilka sekund. 100% lokalnie w Twojej przeglądarce.'
    }
  },
  'converter-video-em-audio-gratis': {
    en: {
      h1Prefix: 'Convert Video to Audio',
      h1Highlight: 'Free Online',
      h1Suffix: 'No Limits',
      badge: '⚡ 100% Free • Unlimited • No Signup',
      metaTitle: 'Free Video to Audio Converter Online — Unlimited & No Signup',
      metaDescription: 'Convert videos to audio for free without subscriptions, account creation, or watermarks. Experience the fastest and most private web converter.',
      heroSubtitle: 'Extract audio from your videos completely free: no paid plans, no queues, and 100% local processing on your device.'
    },
    es: {
      h1Prefix: 'Convertir Video en Audio',
      h1Highlight: 'Gratis Online',
      h1Suffix: 'Sin Límites',
      badge: '⚡ 100% Gratis • Ilimitado • Sin Registro',
      metaTitle: 'Convertir Video en Audio Gratis Online — Sin Límites ni Registro',
      metaDescription: 'Convierte videos a audio gratis sin suscripciones, sin crear cuentas y sin marcas de agua. La herramienta web más rápida y privada.',
      heroSubtitle: 'Extrae audio de tus videos sin costo: sin planes de pago, sin esperas y con procesamiento 100% local en tu dispositivo.'
    },
    fr: {
      h1Prefix: 'Convertir Vidéo en Audio',
      h1Highlight: 'Gratuit en Ligne',
      h1Suffix: 'Sans Limite',
      badge: '⚡ 100% Gratuit • Illimité • Sans Inscription',
      metaTitle: 'Convertir Vidéo en Audio Gratuit en Ligne — Illimité & Sans Inscription',
      metaDescription: 'Convertissez des vidéos en audio gratuitement sans abonnement, sans création de compte et sans filigrane. L’outil le plus rapide et privé.',
      heroSubtitle: 'Extrayez l’audio de vos vidéos sans frais : aucun plan payant, aucune file d’attente et un traitement 100% local sur votre appareil.'
    },
    ja: {
      h1Prefix: '完全無料',
      h1Highlight: '動画から音声へ変換',
      h1Suffix: '制限なし',
      badge: '⚡ 100%無料・登録不要・無制限',
      metaTitle: '無料 動画音声変換オンライン — 登録不要・利用制限なし',
      metaDescription: '有料プランや会員登録、透かしなしで動画を音声に完全無料変換。高速かつプライバシー重視のブラウザ内変換ツール。',
      heroSubtitle: '動画から音声を完全無料で抽出：待ち時間なし、日次制限なし、端末内ローカル処理で安全に変換。'
    },
    zh: {
      h1Prefix: '免费在线',
      h1Highlight: '视频转音频工具',
      h1Suffix: '无限次数',
      badge: '⚡ 100%免费 • 免注册 • 无限制',
      metaTitle: '免费视频转音频 在线转换器 — 无需注册且不限次数',
      metaDescription: '零费用将视频转换为音频，无需购买会员、无需注册账号、绝无水印。体验速度最快且保护隐私的本地转换工具。',
      heroSubtitle: '免费提取视频中的音频：无付费门槛、无需排队，100% 依赖本地设备算力。'
    },
    no: {
      h1Prefix: 'Konverter Video til Lyd',
      h1Highlight: 'Gratis Online',
      h1Suffix: 'Ubegrenset',
      badge: '⚡ 100% Gratis • Ubegrenset • Uten Registrering',
      metaTitle: 'Gratis Video til Lyd Konverterer — Ubegrenset & Uten Registrering',
      metaDescription: 'Konverter videoer til lyd gratis uten abonnement, kontooppretting eller vannmerker. Rask og privat nettbasert konvertering.',
      heroSubtitle: 'Trekk ut lyd fra videoene dine helt gratis: ingen betalingsmurer, ingen køer og 100% lokal prosessering.'
    },
    tr: {
      h1Prefix: 'Videoyu Sese Dönüştür',
      h1Highlight: 'Ücretsiz Çevrimiçi',
      h1Suffix: 'Limitsiz',
      badge: '⚡ %100 Ücretsiz • Limitsiz • Kayıtsız',
      metaTitle: 'Ücretsiz Videodan Sese Dönüştürücü — Limitsiz ve Kayıtsız',
      metaDescription: 'Abonelik, hesap oluşturma veya filigran olmadan videoları ücretsiz olarak sese dönüştürün. En hızlı ve gizli dönüştürücü.',
      heroSubtitle: 'Videolarınızdaki sesi tamamen ücretsiz çıkarın: ücretli plan yok, sıra bekleme yok, cihazınızda %100 yerel işlem.'
    },
    pl: {
      h1Prefix: 'Konwertuj Wideo na Audio',
      h1Highlight: 'Za Darmo Online',
      h1Suffix: 'Bez Limitów',
      badge: '⚡ 100% Za Darmo • Bez Rejestracji • Bez Limitów',
      metaTitle: 'Darmowy Konwerter Wideo na Audio Online — Bez Rejestracji',
      metaDescription: 'Konwertuj wideo na dźwięk za darmo bez subskrypcji, zakładania konta i znaków wodnych. Najszybsze i w 100% prywatne narzędzie.',
      heroSubtitle: 'Wyodrębniaj dźwięk z wideo całkowicie za darmo: bez płatności, bez kolejek i z przetwarzaniem w 100% na Twoim urządzeniu.'
    }
  },
  'extrair-audio-de-video': {
    en: {
      h1Prefix: 'Extract Audio from',
      h1Highlight: 'Video Online',
      h1Suffix: 'Free',
      badge: '🎧 Direct Audio Track Extraction',
      metaTitle: 'Extract Audio from Video Online Free — Save Sound as MP3',
      metaDescription: 'Extract audio tracks from any video file (MP4, MOV, MKV, AVI) to high-fidelity 192 kbps MP3 directly in your browser. Fast, free, and private.',
      heroSubtitle: 'Isolate sound tracks from videos, lectures, and recordings into pristine MP3 files without carrying unnecessary video bulk.'
    },
    es: {
      h1Prefix: 'Extraer Audio de',
      h1Highlight: 'Video Online',
      h1Suffix: 'Gratis',
      badge: '🎧 Extracción Directa de Pistas de Audio',
      metaTitle: 'Extraer Audio de Video Online Gratis — Guardar Sonido en MP3',
      metaDescription: 'Extrae pistas de audio de cualquier video (MP4, MOV, MKV, AVI) a MP3 de 192 kbps de alta fidelidad directamente en tu navegador. Rápido y privado.',
      heroSubtitle: 'Aísla la banda sonora de videos, conferencias y grabaciones en archivos MP3 nítidos sin cargar con el peso visual.'
    },
    fr: {
      h1Prefix: 'Extraire l’Audio d’une',
      h1Highlight: 'Vidéo en Ligne',
      h1Suffix: 'Gratuit',
      badge: '🎧 Extraction Audio Directe Sans Perte',
      metaTitle: 'Extraire l’Audio d’une Vidéo en Ligne — Sauvegarder en MP3',
      metaDescription: 'Extrayez la piste audio de toute vidéo (MP4, MOV, MKV, AVI) en MP3 192 kbps haute fidélité directement dans votre navigateur. Rapide et privé.',
      heroSubtitle: 'Isolez la bande sonore de vidéos, cours et enregistrements dans un fichier MP3 pur sans le poids inutile des images.'
    },
    ja: {
      h1Prefix: '動画から音声を',
      h1Highlight: '直接抽出ツール',
      h1Suffix: '無料',
      badge: '🎧 高音質 音声トラック抽出',
      metaTitle: '動画から音声を抽出 無料オンライン — MP3 ファイルとして保存',
      metaDescription: 'MP4、MOV、MKV、AVI 動画から音声トラックだけを直接抽出し、192 kbps 高音質 MP3 として保存。安全なブラウザ内処理。',
      heroSubtitle: '動画や講義、録画から映像を取り除き、クリアな MP3 音声ファイルだけを抽出して軽量保存します。'
    },
    zh: {
      h1Prefix: '从视频中',
      h1Highlight: '直接提取音频',
      h1Suffix: '在线免费',
      badge: '🎧 高保真音轨提取器',
      metaTitle: '从视频中提取音频 在线免费 — 保存为高清 MP3 音频',
      metaDescription: '在浏览器中直接从各类视频文件（MP4、MOV、MKV、AVI）中提取音轨，保存为 192 kbps 高保真 MP3。快速且安全。',
      heroSubtitle: '剔除冗余画面，将视频、讲座与录像中的声音单独提取为纯净清晰的 MP3 文件。'
    },
    no: {
      h1Prefix: 'Trekk ut Lyd fra',
      h1Highlight: 'Video Online',
      h1Suffix: 'Gratis',
      badge: '🎧 Direkte Lydspor-uttrekking',
      metaTitle: 'Trekk ut Lyd fra Video Online Gratis — Lagre Lyd som MP3',
      metaDescription: 'Trekk ut lydspor fra enhver videofil (MP4, MOV, MKV, AVI) til 192 kbps MP3 direkte i nettleseren. Raskt, gratis og sikkert.',
      heroSubtitle: 'Isoler lydsporet fra videoer, forelesninger og opptak til krystallklare MP3-filer uten unødvendig videostørrelse.'
    },
    tr: {
      h1Prefix: 'Videodan Sesi',
      h1Highlight: 'Çıkar Çevrimiçi',
      h1Suffix: 'Ücretsiz',
      badge: '🎧 Doğrudan Ses İzolasyonu',
      metaTitle: 'Videodan Sesi Çıkar Çevrimiçi Ücretsiz — MP3 Olarak Kaydet',
      metaDescription: 'Herhangi bir video dosyasından (MP4, MOV, MKV, AVI) doğrudan tarayıcınızda 192 kbps MP3 ses parçası çıkarın. Hızlı ve gizli.',
      heroSubtitle: 'Gereksiz video boyutunu taşımadan videolardan, derslerden ve kayıtlardan ses parçasını net MP3 olarak ayırın.'
    },
    pl: {
      h1Prefix: 'Wyodrębnij Dźwięk z',
      h1Highlight: 'Wideo Online',
      h1Suffix: 'Za Darmo',
      badge: '🎧 Bezpośrednia Ekstrakcja Ścieżki Audio',
      metaTitle: 'Wyodrębnij Dźwięk z Wideo Online Za Darmo — Zapisz w MP3',
      metaDescription: 'Wyodrębnij ścieżkę dźwiękową z dowolnego pliku wideo (MP4, MOV, MKV, AVI) do MP3 192 kbps bezpośrednio w przeglądarce. Szybko i prywatnie.',
      heroSubtitle: 'Odizoluj ścieżkę dźwiękową z filmów, wykładów i nagrań do czystego formatu MP3 bez zbędnego ciężaru obrazu.'
    }
  },
  'extrair-audio-de-video-online': {
    en: {
      h1Prefix: 'Extract Audio from Video',
      h1Highlight: 'Online in Browser',
      h1Suffix: 'Free',
      badge: '🌐 In-Browser • No Software Required',
      metaTitle: 'Extract Audio from Video Online in Browser — No Installation',
      metaDescription: 'Extract audio from videos online without downloading heavy editing software. Works directly in Chrome, Safari, and Edge with private local WebAssembly processing.',
      heroSubtitle: 'Forget complex desktop software: extract audio from your videos right inside your browser window with instant speed.'
    },
    es: {
      h1Prefix: 'Extraer Audio de Video',
      h1Highlight: 'Online en el Navegador',
      h1Suffix: 'Gratis',
      badge: '🌐 En el Navegador • Sin Instalación',
      metaTitle: 'Extraer Audio de Video Online en el Navegador — Sin Programas',
      metaDescription: 'Extrae audio de videos online sin descargar programas pesados. Funciona directo en Chrome, Safari y Edge con procesamiento local seguro.',
      heroSubtitle: 'Olvídate de instalar programas complejos: extrae el audio de tus videos directamente en la ventana de tu navegador.'
    },
    fr: {
      h1Prefix: 'Extraire l’Audio d’une Vidéo',
      h1Highlight: 'en Ligne dans le Navigateur',
      h1Suffix: 'Gratuit',
      badge: '🌐 Dans le Navigateur • Sans Logiciel',
      metaTitle: 'Extraire l’Audio d’une Vidéo en Ligne — Sans Installation',
      metaDescription: 'Extrayez l’audio de vidéos en ligne sans installer de logiciels lourds. Fonctionne directement dans Chrome, Safari et Edge en local.',
      heroSubtitle: 'Oubliez les logiciels complexes : extrayez l’audio de vos vidéos directement dans votre navigateur avec une vitesse instantanée.'
    },
    ja: {
      h1Prefix: 'ブラウザで直接',
      h1Highlight: '動画から音声を抽出',
      h1Suffix: 'インストール不要',
      badge: '🌐 インストール不要・Web完結',
      metaTitle: 'ブラウザで動画から音声を抽出 — ソフトインストール不要',
      metaDescription: '重い編集ソフトをインストールせず、ブラウザ上で直接動画から音声を抽出。Chrome、Safari、Edge で安全に動作。',
      heroSubtitle: '面倒なソフトウェアのインストールは不要：ブラウザの画面内で瞬時に動画から音声を抽出します。'
    },
    zh: {
      h1Prefix: '浏览器内直接',
      h1Highlight: '在线提取视频音频',
      h1Suffix: '免安装软件',
      badge: '🌐 网页端运行 • 无需安装',
      metaTitle: '在线网页提取视频音频 — 无需安装任何软件',
      metaDescription: '无需下载庞大的视频剪辑软件，直接在 Chrome、Safari 或 Edge 浏览器中提取视频音频。依托 WebAssembly 本地安全处理。',
      heroSubtitle: '告别复杂的桌面软件安装：直接在浏览器窗口内秒速提取视频音频。'
    },
    no: {
      h1Prefix: 'Trekk ut Lyd fra Video',
      h1Highlight: 'Online i Nettleseren',
      h1Suffix: 'Gratis',
      badge: '🌐 I Nettleseren • Ingen Programvare',
      metaTitle: 'Trekk ut Lyd fra Video i Nettleseren — Uten Installasjon',
      metaDescription: 'Trekk ut lyd fra videoer online uten å laste ned tunge redigeringsprogrammer. Fungerer direkte i Chrome, Safari og Edge.',
      heroSubtitle: 'Glem komplisert programvare: trekk ut lyd fra videoene dine direkte i nettleservinduet med umiddelbar hastighet.'
    },
    tr: {
      h1Prefix: 'Tarayıcıda',
      h1Highlight: 'Videodan Ses Çıkar',
      h1Suffix: 'Kurulumsuz',
      badge: '🌐 Tarayıcı İçi • Program Gerektirmez',
      metaTitle: 'Tarayıcıda Videodan Ses Çıkar — Program Yüklemeden',
      metaDescription: 'Ağır düzenleme yazılımları indirmeden çevrimiçi olarak videolardan ses çıkarın. Chrome, Safari ve Edge üzerinde doğrudan çalışır.',
      heroSubtitle: 'Karmaşık masaüstü yazılımlarını unutun: videolarınızdaki sesi doğrudan tarayıcı pencerenizde anında çıkarın.'
    },
    pl: {
      h1Prefix: 'Wyodrębnij Audio z Wideo',
      h1Highlight: 'Online w Przeglądarce',
      h1Suffix: 'Bez Instalacji',
      badge: '🌐 W Przeglądarce • Bez Instalacji',
      metaTitle: 'Wyodrębnij Audio z Wideo w Przeglądarce — Bez Programów',
      metaDescription: 'Wyodrębniaj dźwięk z filmów online bez pobierania ciężkich programów. Działa bezpośrednio w Chrome, Safari i Edge.',
      heroSubtitle: 'Zapomnij o instalacji skomplikowanych programów: wyodrębnij audio ze swoich filmów bezpośrednio w oknie przeglądarki.'
    }
  },
  'extrair-audio-de-video-do-youtube': {
    en: {
      h1Prefix: 'Extract Audio from Saved',
      h1Highlight: 'YouTube Video to MP3',
      h1Suffix: 'Online',
      badge: '🔴 Extract Audio from Saved YouTube Clips',
      metaTitle: 'Extract Audio from YouTube Video to MP3 — Local Files',
      metaDescription: 'Extract audio tracks from saved YouTube and Shorts video files into 192 kbps MP3 format. 100% private in browser with zero server uploads.',
      heroSubtitle: 'Turn downloaded YouTube recordings and clips into lightweight, clear MP3 audio files for seamless listening anywhere.'
    },
    es: {
      h1Prefix: 'Extraer Audio de Video de',
      h1Highlight: 'YouTube a MP3',
      h1Suffix: 'Online',
      badge: '🔴 Extraer Audio de Videos Guardados de YouTube',
      metaTitle: 'Extraer Audio de Video de YouTube a MP3 — Archivos Locales',
      metaDescription: 'Extrae pistas de audio de videos guardados de YouTube y Shorts a MP3 de 192 kbps. 100% privado en tu navegador sin subir archivos.',
      heroSubtitle: 'Convierte videos y grabaciones descargadas de YouTube en archivos MP3 ligeros y claros para escuchar en cualquier lugar.'
    },
    fr: {
      h1Prefix: 'Extraire l’Audio de Vidéos',
      h1Highlight: 'YouTube en MP3',
      h1Suffix: 'en Ligne',
      badge: '🔴 Extraire l’Audio de Vidéos YouTube Enregistrées',
      metaTitle: 'Extraire l’Audio de Vidéos YouTube en MP3 — Fichiers Locaux',
      metaDescription: 'Extrayez la piste audio de vidéos et Shorts YouTube enregistrés en MP3 192 kbps. 100% privé dans le navigateur, sans upload.',
      heroSubtitle: 'Transformez vos clips et vidéos YouTube téléchargés en fichiers audio MP3 légers et clairs à écouter partout.'
    },
    ja: {
      h1Prefix: '保存した',
      h1Highlight: 'YouTube 動画から MP3 音声を抽出',
      h1Suffix: 'オンライン',
      badge: '🔴 保存済み YouTube 動画から音声抽出',
      metaTitle: '保存した YouTube 動画から MP3 を抽出 — ローカルファイル対応',
      metaDescription: 'ダウンロード済みの YouTube や Shorts 動画から 192 kbps MP3 音声を抽出。サーバー送信なしで端末内ローカル完結。',
      heroSubtitle: '保存した YouTube クリップや録画を高音質で軽量な MP3 音声ファイルに変換して手軽に楽しめます。'
    },
    zh: {
      h1Prefix: '从已保存的',
      h1Highlight: 'YouTube 视频提取 MP3 音频',
      h1Suffix: '在线工具',
      badge: '🔴 提取已保存 YouTube 视频的音频',
      metaTitle: '从 YouTube 视频提取 MP3 音频 — 本地媒体文件处理',
      metaDescription: '从已保存的 YouTube 和 Shorts 视频中提取 192 kbps MP3 音轨。100% 浏览器本地安全运行，无需上传文件。',
      heroSubtitle: '将下载保存的 YouTube 视频与剪辑转化为体积小巧、音质清晰的 MP3 音频。'
    },
    no: {
      h1Prefix: 'Trekk ut Lyd fra Lagret',
      h1Highlight: 'YouTube Video til MP3',
      h1Suffix: 'Online',
      badge: '🔴 Trekk ut Lyd fra Lagrede YouTube-klipp',
      metaTitle: 'Trekk ut Lyd fra YouTube-video til MP3 — Lokale Filer',
      metaDescription: 'Trekk ut lydspor fra lagrede YouTube- og Shorts-videofiler til 192 kbps MP3. 100% privat i nettleseren uten filopplasting.',
      heroSubtitle: 'Gjør om lagrede YouTube-opptak og klipp til lette, krystallklare MP3-lydfiler for enkel lytting.'
    },
    tr: {
      h1Prefix: 'Kaydedilen',
      h1Highlight: 'YouTube Videosundan MP3 Çıkar',
      h1Suffix: 'Çevrimiçi',
      badge: '🔴 Kaydedilmiş YouTube Videolarından MP3',
      metaTitle: 'YouTube Videosundan MP3 Ses Çıkar — Yerel Dosyalar',
      metaDescription: 'İndirilmiş YouTube ve Shorts video dosyalarından 192 kbps MP3 ses parçasını çıkarın. %100 tarayıcıda, özel ve yüklemesiz.',
      heroSubtitle: 'İndirdiğiniz YouTube kayıtlarını her yerde dinlemek için hafif ve net MP3 ses dosyalarına dönüştürün.'
    },
    pl: {
      h1Prefix: 'Wyodrębnij Dźwięk z Zapisanych',
      h1Highlight: 'Wideo YouTube do MP3',
      h1Suffix: 'Online',
      badge: '🔴 Wyodrębnij Audio z Zapisanych Klipów YouTube',
      metaTitle: 'Wyodrębnij Dźwięk z Wideo YouTube do MP3 — Pliki Lokalne',
      metaDescription: 'Wyodrębnij ścieżkę audio z zapisanych filmów YouTube i Shorts do formatu MP3 192 kbps. 100% prywatnie w przeglądarce.',
      heroSubtitle: 'Zmieniaj pobrane klipy z YouTube w lekkie i czyste pliki MP3 do wygodnego słuchania.'
    }
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

  // Extract source format if format is converter-[source]-para-[target]
  let sourceFormat = '';
  const match = slug.match(/^converter-([a-z0-9]+)-para-([a-z0-9]+)$/);
  if (match) {
    sourceFormat = match[1].toUpperCase();
  }

  let titlePrefix = isCompressor ? p.compressPrefix : p.convertPrefix;
  let h1Highlight = targetLabel;
  let h1Prefix = titlePrefix;
  let h1Suffix = lang === 'ja' || lang === 'zh' ? '' : 'Online';
  let badge = original.badge;

  if (sourceFormat) {
    if (lang === 'en') {
      h1Prefix = 'Convert';
      h1Highlight = `${sourceFormat} to ${targetLabel}`;
      badge = `⚡ Fast ${sourceFormat} to ${targetLabel} Converter`;
    } else if (lang === 'es') {
      h1Prefix = 'Convertir';
      h1Highlight = `${sourceFormat} a ${targetLabel}`;
      badge = `⚡ Convertidor de ${sourceFormat} a ${targetLabel}`;
    } else if (lang === 'fr') {
      h1Prefix = 'Convertir';
      h1Highlight = `${sourceFormat} vers ${targetLabel}`;
      badge = `⚡ Convertisseur ${sourceFormat} vers ${targetLabel}`;
    } else if (lang === 'ja') {
      h1Prefix = `${sourceFormat} を`;
      h1Highlight = `${targetLabel} に変換`;
      badge = `⚡ ${sourceFormat} から ${targetLabel} 変換`;
    } else if (lang === 'zh') {
      h1Prefix = `${sourceFormat} 转`;
      h1Highlight = `${targetLabel} 视频转换`;
      badge = `⚡ ${sourceFormat} 转 ${targetLabel} 极速转换`;
    } else if (lang === 'no') {
      h1Prefix = 'Konverter';
      h1Highlight = `${sourceFormat} til ${targetLabel}`;
      badge = `⚡ Rask ${sourceFormat} til ${targetLabel} Konvertering`;
    } else if (lang === 'tr') {
      h1Prefix = `${sourceFormat} ->`;
      h1Highlight = `${targetLabel} Dönüştürücü`;
      badge = `⚡ Hızlı ${sourceFormat} -> ${targetLabel} Dönüştürme`;
    } else if (lang === 'pl') {
      h1Prefix = 'Konwertuj';
      h1Highlight = `${sourceFormat} na ${targetLabel}`;
      badge = `⚡ Szybka Konwersja ${sourceFormat} na ${targetLabel}`;
    }
  }

  // Check specific overrides for unique pages (e.g. melhor-conversor-de-video-gratuito)
  const override = SLUG_LOCALIZATIONS[slug]?.[lang] || SLUG_LOCALIZATIONS[slug]?.en;
  if (override) {
    if (override.h1Prefix) h1Prefix = override.h1Prefix;
    if (override.h1Highlight) h1Highlight = override.h1Highlight;
    if (override.h1Suffix !== undefined) h1Suffix = override.h1Suffix;
    if (override.badge) badge = override.badge;
  }

  const metaTitle = override?.metaTitle || `${h1Prefix} ${h1Highlight} ${p.onlineFree}`;
  const metaDescription = override?.metaDescription || `${h1Prefix} ${h1Highlight} ${p.freeNoUpload} ${p.heroSuffix}`;
  const heroSubtitle = override?.heroSubtitle || `${p.whyDesc} ${p.heroSuffix}`;
  const dropzoneTitle = override?.dropzoneTitle || `${p.dropzoneText} ${targetLabel}`;
  const explainerTitle = override?.explainerTitle || p.howItWorks;
  const explainerParagraphs = override?.explainerParagraphs || original.explainerParagraphs;
  const sourceDetailsTitle = override?.sourceDetailsTitle || original.sourceDetailsTitle;
  const sourceDetails = override?.sourceDetails || original.sourceDetails;
  const targetDetailsTitle = override?.targetDetailsTitle || original.targetDetailsTitle;
  const targetDetails = override?.targetDetails || original.targetDetails;

  return {
    ...original,
    badge,
    h1Prefix,
    h1Highlight,
    h1Suffix,
    metaTitle,
    metaDescription,
    heroSubtitle,
    dropzoneTitle,
    explainerTitle,
    explainerParagraphs,
    sourceDetailsTitle,
    sourceDetails,
    targetDetailsTitle,
    targetDetails,
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
    id: 'audio-converter',
    href: '/conversor-de-audio',
    icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z',
    titles: {
      pt: 'Conversor de Áudio Universal',
      en: 'Universal Audio Converter',
      es: 'Convertidor de Audio Universal',
      fr: 'Convertisseur Audio Universel',
      ja: '万能 音声変換ツール',
      zh: '万能音频格式转换器',
      no: 'Universell Lydkonverterer',
      tr: 'Evrensel Ses Dönüştürücü',
      pl: 'Uniwersalny Konwerter Audio'
    },
    descs: {
      pt: 'Converta faixas de áudio (WAV, FLAC, M4A, OGG) e extraia som de vídeos para MP3 a 192 kbps.',
      en: 'Convert any sound format (WAV, FLAC, M4A, OGG) and extract audio from videos to 192 kbps MP3.',
      es: 'Convierte archivos de sonido (WAV, FLAC, M4A, OGG) y extrae audios a MP3 de 192 kbps.',
      fr: 'Convertissez tout format audio (WAV, FLAC, M4A, OGG) et extrayez le son en MP3 192 kbps.',
      ja: 'WAV、FLAC、M4A、OGG などの各種音声を 192 kbps の高音質 MP3 に変換します。',
      zh: '将各类音频格式（WAV、FLAC、M4A、OGG）及视频音轨转换为 192 kbps MP3。',
      no: 'Konverter lydformater (WAV, FLAC, M4A, OGG) og trekk ut lyd fra videoer til MP3.',
      tr: 'Ses formatlarını (WAV, FLAC, M4A, OGG) ve video seslerini 192 kbps MP3’e dönüştürün.',
      pl: 'Konwertuj pliki audio (WAV, FLAC, M4A, OGG) oraz wyodrębniaj dźwięk do MP3 192 kbps.'
    },
    badges: {
      pt: 'Universal',
      en: 'Audio / MP3',
      es: 'Universal',
      fr: 'Universel',
      ja: '万能形式',
      zh: '全格式',
      no: 'Universell',
      tr: 'Evrensel',
      pl: 'Uniwersalny'
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
      fr: 'Convertissez des fichiers MP4 au format léger WebM ideal pour le web HTML5.',
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
