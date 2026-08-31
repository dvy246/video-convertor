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
