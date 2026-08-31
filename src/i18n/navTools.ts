import type { SupportedLanguage } from './languages';

export interface NavToolItem {
  href: string;
  name: string;
  desc?: string;
}

export function getLocalizedPopularTools(lang: SupportedLanguage): NavToolItem[] {
  const dict: Record<SupportedLanguage, NavToolItem[]> = {
    pt: [
      { href: '/conversor-de-video-para-mp4', name: 'Conversor para MP4', desc: 'MOV, MKV, AVI, WebM para MP4' },
      { href: '/converter-video-em-audio', name: 'Vídeo em Áudio', desc: 'Qualquer vídeo para MP3 192 kbps' },
      { href: '/extrair-audio-de-video', name: 'Extrair Áudio de Vídeo', desc: 'Isolar trilha sonora original' },
      { href: '/conversor-de-audio', name: 'Conversor de Áudio', desc: 'Qualquer áudio para MP3' },
      { href: '/converter-mov-para-mp4', name: 'MOV para MP4', desc: 'Vídeos de iPhone e Mac' },
      { href: '/converter-video-para-mp3', name: 'Vídeo para MP3', desc: 'Extração de áudio 192 kbps' },
      { href: '/video-para-gif', name: 'Vídeo para GIF', desc: 'Animações em loop para stickers' },
      { href: '/converter-mp4-para-webm', name: 'MP4 para WebM', desc: 'Vídeo leve para sites e HTML5' }
    ],
    en: [
      { href: '/conversor-de-video-para-mp4', name: 'MP4 Converter', desc: 'MOV, MKV, AVI, WebM to MP4' },
      { href: '/converter-video-em-audio', name: 'Video to Audio', desc: 'Any video to 192 kbps MP3' },
      { href: '/extrair-audio-de-video', name: 'Extract Audio', desc: 'Isolate original sound track' },
      { href: '/conversor-de-audio', name: 'Audio Converter', desc: 'Any audio format to MP3' },
      { href: '/converter-mov-para-mp4', name: 'MOV to MP4', desc: 'iPhone & Mac QuickTime videos' },
      { href: '/converter-video-para-mp3', name: 'Video to MP3', desc: 'Hi-Fi 192 kbps audio extraction' },
      { href: '/video-para-gif', name: 'Video to GIF', desc: 'Looping animated stickers & memes' },
      { href: '/converter-mp4-para-webm', name: 'MP4 to WebM', desc: 'Lightweight HTML5 web video' }
    ],
    es: [
      { href: '/conversor-de-video-para-mp4', name: 'Convertidor a MP4', desc: 'MOV, MKV, AVI, WebM a MP4' },
      { href: '/converter-video-em-audio', name: 'Video a Audio', desc: 'Cualquier video a MP3 192 kbps' },
      { href: '/extrair-audio-de-video', name: 'Extraer Audio', desc: 'Aislar banda sonora original' },
      { href: '/conversor-de-audio', name: 'Convertidor de Audio', desc: 'Cualquier audio a MP3' },
      { href: '/converter-mov-para-mp4', name: 'MOV a MP4', desc: 'Videos de iPhone y Mac' },
      { href: '/converter-video-para-mp3', name: 'Video a MP3', desc: 'Extracción de audio a 192 kbps' },
      { href: '/video-para-gif', name: 'Video a GIF', desc: 'Animaciones en bucle para stickers' },
      { href: '/converter-mp4-para-webm', name: 'MP4 a WebM', desc: 'Video ligero para web y HTML5' }
    ],
    fr: [
      { href: '/conversor-de-video-para-mp4', name: 'Convertisseur MP4', desc: 'MOV, MKV, AVI, WebM vers MP4' },
      { href: '/converter-video-em-audio', name: 'Vidéo vers Audio', desc: 'Toute vidéo en MP3 192 kbps' },
      { href: '/extrair-audio-de-video', name: 'Extraire l’Audio', desc: 'Isoler la piste sonore originale' },
      { href: '/conversor-de-audio', name: 'Convertisseur Audio', desc: 'Tout format audio vers MP3' },
      { href: '/converter-mov-para-mp4', name: 'MOV vers MP4', desc: 'Vidéos d’iPhone et Mac' },
      { href: '/converter-video-para-mp3', name: 'Vidéo vers MP3', desc: 'Extraction audio 192 kbps' },
      { href: '/video-para-gif', name: 'Vidéo vers GIF', desc: 'Animations en boucle pour stickers' },
      { href: '/converter-mp4-para-webm', name: 'MP4 vers WebM', desc: 'Vidéo légère pour le web HTML5' }
    ],
    ja: [
      { href: '/conversor-de-video-para-mp4', name: 'MP4 変換ツール', desc: 'MOV, MKV, AVI, WebM を MP4 に' },
      { href: '/converter-video-em-audio', name: '動画から音声へ', desc: 'あらゆる動画を 192 kbps MP3 に' },
      { href: '/extrair-audio-de-video', name: '音声トラック抽出', desc: '原音のまま音声だけを分離' },
      { href: '/conversor-de-audio', name: '音声変換ツール', desc: 'あらゆる音声を MP3 に' },
      { href: '/converter-mov-para-mp4', name: 'MOV から MP4', desc: 'iPhone / Mac 録画動画' },
      { href: '/converter-video-para-mp3', name: '動画から MP3', desc: '高音質 192 kbps 音声抽出' },
      { href: '/video-para-gif', name: '動画から GIF', desc: 'ステッカー用ループアニメーション' },
      { href: '/converter-mp4-para-webm', name: 'MP4 から WebM', desc: 'HTML5 サイト用軽量動画' }
    ],
    zh: [
      { href: '/conversor-de-video-para-mp4', name: 'MP4 转换器', desc: 'MOV, MKV, AVI, WebM 转 MP4' },
      { href: '/converter-video-em-audio', name: '视频转音频', desc: '提取各类视频为 192 kbps MP3' },
      { href: '/extrair-audio-de-video', name: '提取视频原声', desc: '精准分离纯净音频轨道' },
      { href: '/conversor-de-audio', name: '万能音频转换器', desc: '各类音频转 MP3' },
      { href: '/converter-mov-para-mp4', name: 'MOV 转 MP4', desc: '苹果 iPhone / Mac 视频' },
      { href: '/converter-video-para-mp3', name: '视频提取 MP3', desc: '192 kbps 高保真音频提取' },
      { href: '/video-para-gif', name: '视频转 GIF', desc: '表情包循环动图制作' },
      { href: '/converter-mp4-para-webm', name: 'MP4 转 WebM', desc: '网站与 HTML5 轻量格式' }
    ],
    no: [
      { href: '/conversor-de-video-para-mp4', name: 'MP4 Konverter', desc: 'MOV, MKV, AVI, WebM til MP4' },
      { href: '/converter-video-em-audio', name: 'Video til Lyd', desc: 'Enhver video til 192 kbps MP3' },
      { href: '/extrair-audio-de-video', name: 'Trekk ut Lyd', desc: 'Isoler det originale lydsporet' },
      { href: '/conversor-de-audio', name: 'Lydkonverter', desc: 'Alle lydformater til MP3' },
      { href: '/converter-mov-para-mp4', name: 'MOV til MP4', desc: 'iPhone og Mac QuickTime-videoer' },
      { href: '/converter-video-para-mp3', name: 'Video til MP3', desc: 'Lyduttrekk i 192 kbps' },
      { href: '/video-para-gif', name: 'Video til GIF', desc: 'Animert sløyfe for klistremerker' },
      { href: '/converter-mp4-para-webm', name: 'MP4 til WebM', desc: 'Lett HTML5 nettvideo' }
    ],
    tr: [
      { href: '/conversor-de-video-para-mp4', name: 'MP4 Dönüştürücü', desc: 'MOV, MKV, AVI, WebM -> MP4' },
      { href: '/converter-video-em-audio', name: 'Videodan Sese', desc: 'Videodan 192 kbps MP3 sese' },
      { href: '/extrair-audio-de-video', name: 'Ses Parçası Çıkar', desc: 'Orijinal ses kanalını izole et' },
      { href: '/conversor-de-audio', name: 'Ses Dönüştürücü', desc: 'Tüm ses formatları -> MP3' },
      { href: '/converter-mov-para-mp4', name: 'MOV -> MP4', desc: 'iPhone ve Mac videoları' },
      { href: '/converter-video-para-mp3', name: 'Videodan MP3', desc: '192 kbps yüksek kaliteli ses' },
      { href: '/video-para-gif', name: 'Videodan GIF', desc: 'Çıkartma ve döngülü animasyon' },
      { href: '/converter-mp4-para-webm', name: 'MP4 -> WebM', desc: 'Web siteleri için hafif video' }
    ],
    pl: [
      { href: '/conversor-de-video-para-mp4', name: 'Konwerter MP4', desc: 'MOV, MKV, AVI, WebM na MP4' },
      { href: '/converter-video-em-audio', name: 'Wideo na Audio', desc: 'Dowolne wideo na 192 kbps MP3' },
      { href: '/extrair-audio-de-video', name: 'Wyodrębnij Dźwięk', desc: 'Wyizoluj oryginalną ścieżkę dźwiękową' },
      { href: '/conversor-de-audio', name: 'Konwerter Audio', desc: 'Dowolny format audio na MP3' },
      { href: '/converter-mov-para-mp4', name: 'MOV na MP4', desc: 'Wideo z iPhone’a i Maca' },
      { href: '/converter-video-para-mp3', name: 'Wideo na MP3', desc: 'Ekstrakcja audio 192 kbps' },
      { href: '/video-para-gif', name: 'Wideo na GIF', desc: 'Animowane pętle na naklejki' },
      { href: '/converter-mp4-para-webm', name: 'MP4 na WebM', desc: 'Lekkie wideo na strony HTML5' }
    ]
  };

  return dict[lang] || dict.en;
}

export function getLocalizedCompressorTools(lang: SupportedLanguage): NavToolItem[] {
  const dict: Record<SupportedLanguage, NavToolItem[]> = {
    pt: [
      { href: '/compressor-de-video', name: 'Compressor de Vídeo', desc: 'Reduz até 80% do tamanho' },
      { href: '/compactar-video', name: 'Compactar Vídeo', desc: 'Diminui megabytes sem perda' },
      { href: '/redimensionar-video', name: 'Redimensionar Vídeo', desc: 'Ajuste 1080p, 720p e 9:16' },
      { href: '/compressor-de-video-mp4', name: 'Compressor MP4', desc: 'H.264 leve com faststart' },
      { href: '/compressor-de-video-gratuito', name: 'Compressor Gratuito', desc: '100% livre sem limites' },
      { href: '/comprimir-video', name: 'Comprimir p/ WhatsApp', desc: 'Garante tamanho < 16MB' },
      { href: '/converter-video-instagram', name: 'Vídeo para Instagram', desc: 'Reels e Stories em 9:16' },
      { href: '/conversor-de-video-youtube', name: 'Vídeo do YouTube', desc: 'Shorts 9:16 e 16:9 Full HD' }
    ],
    en: [
      { href: '/compressor-de-video', name: 'Video Compressor', desc: 'Reduce up to 80% file size' },
      { href: '/compactar-video', name: 'Compress Video', desc: 'Shrink megabytes without loss' },
      { href: '/redimensionar-video', name: 'Resize Video', desc: 'Adjust 1080p, 720p & 9:16' },
      { href: '/compressor-de-video-mp4', name: 'MP4 Compressor', desc: 'Fast H.264 with web faststart' },
      { href: '/compressor-de-video-gratuito', name: 'Free Compressor', desc: '100% free with no limits' },
      { href: '/comprimir-video', name: 'Compress for WhatsApp', desc: 'Guarantees file size < 16MB' },
      { href: '/converter-video-instagram', name: 'Video for Instagram', desc: 'Reels & Stories in 9:16' },
      { href: '/conversor-de-video-youtube', name: 'YouTube Video', desc: 'Shorts 9:16 & 16:9 Full HD' }
    ],
    es: [
      { href: '/compressor-de-video', name: 'Compresor de Video', desc: 'Reduce hasta un 80% el tamaño' },
      { href: '/compactar-video', name: 'Compactar Video', desc: 'Reduce megabytes sin pérdidas' },
      { href: '/redimensionar-video', name: 'Redimensionar Video', desc: 'Ajuste a 1080p, 720p y 9:16' },
      { href: '/compressor-de-video-mp4', name: 'Compresor MP4', desc: 'H.264 ligero con faststart' },
      { href: '/compressor-de-video-gratuito', name: 'Compresor Gratuito', desc: '100% libre sin límites' },
      { href: '/comprimir-video', name: 'Comprimir p/ WhatsApp', desc: 'Garantiza tamaño < 16MB' },
      { href: '/converter-video-instagram', name: 'Video para Instagram', desc: 'Reels y Stories en 9:16' },
      { href: '/conversor-de-video-youtube', name: 'Video de YouTube', desc: 'Shorts 9:16 y 16:9 Full HD' }
    ],
    fr: [
      { href: '/compressor-de-video', name: 'Compresseur Vidéo', desc: 'Réduit jusqu’à 80% le poids' },
      { href: '/compactar-video', name: 'Compresser Vidéo', desc: 'Diminue les mégaoctets sans perte' },
      { href: '/redimensionar-video', name: 'Redimensionner Vidéo', desc: 'Ajustez en 1080p, 720p et 9:16' },
      { href: '/compressor-de-video-mp4', name: 'Compresseur MP4', desc: 'H.264 léger avec faststart' },
      { href: '/compressor-de-video-gratuito', name: 'Compresseur Gratuit', desc: '100% gratuit sans limite' },
      { href: '/comprimir-video', name: 'Compresser p/ WhatsApp', desc: 'Garantit un poids < 16 Mo' },
      { href: '/converter-video-instagram', name: 'Vidéo pour Instagram', desc: 'Reels et Stories en 9:16' },
      { href: '/conversor-de-video-youtube', name: 'Vidéo YouTube', desc: 'Shorts 9:16 et 16:9 Full HD' }
    ],
    ja: [
      { href: '/compressor-de-video', name: '動画圧縮ツール', desc: '容量を最大80%軽量化' },
      { href: '/compactar-video', name: '動画サイズ削減', desc: '画質を落とさずに軽量化' },
      { href: '/redimensionar-video', name: '動画リサイズ', desc: '1080p・720p・9:16調整' },
      { href: '/compressor-de-video-mp4', name: 'MP4 圧縮', desc: 'faststart 最適化 H.264' },
      { href: '/compressor-de-video-gratuito', name: '完全無料圧縮', desc: '制限なし・100%無料' },
      { href: '/comprimir-video', name: 'WhatsApp用 圧縮', desc: '16MB未満に自動最適化' },
      { href: '/converter-video-instagram', name: 'Instagram 動画変換', desc: 'リール・Stories 9:16縦型' },
      { href: '/conversor-de-video-youtube', name: 'YouTube 動画', desc: 'Shorts 9:16・16:9 Full HD' }
    ],
    zh: [
      { href: '/compressor-de-video', name: '视频压缩器', desc: '最高缩减 80% 体积' },
      { href: '/compactar-video', name: '智能压缩视频', desc: '无损画质大幅减小体积' },
      { href: '/redimensionar-video', name: '调整视频尺寸', desc: '适配 1080p、720p 与 9:16' },
      { href: '/compressor-de-video-mp4', name: 'MP4 视频压缩', desc: '高速 H.264 与 faststart' },
      { href: '/compressor-de-video-gratuito', name: '免费无限制压缩', desc: '100% 免费无大小限制' },
      { href: '/comprimir-video', name: '压缩适配 WhatsApp', desc: '保证文件小于 16MB' },
      { href: '/converter-video-instagram', name: 'Instagram 视频', desc: 'Reels 与 Stories 9:16 竖屏' },
      { href: '/conversor-de-video-youtube', name: 'YouTube 视频', desc: 'Shorts 9:16 与 16:9 全高清' }
    ],
    no: [
      { href: '/compressor-de-video', name: 'Videokomprimering', desc: 'Reduser filstørrelse med opptil 80%' },
      { href: '/compactar-video', name: 'Krymp Video', desc: 'Kutt megabytes uten kvalitetstap' },
      { href: '/redimensionar-video', name: 'Endre Videostørrelse', desc: 'Juster til 1080p, 720p og 9:16' },
      { href: '/compressor-de-video-mp4', name: 'MP4 Komprimering', desc: 'Rask H.264 med faststart' },
      { href: '/compressor-de-video-gratuito', name: 'Gratis Komprimering', desc: '100% gratis uten grenser' },
      { href: '/comprimir-video', name: 'Komprimer for WhatsApp', desc: 'Garanterer størrelse < 16MB' },
      { href: '/converter-video-instagram', name: 'Video for Instagram', desc: 'Reels og Stories i 9:16' },
      { href: '/conversor-de-video-youtube', name: 'YouTube Video', desc: 'Shorts 9:16 og 16:9 Full HD' }
    ],
    tr: [
      { href: '/compressor-de-video', name: 'Video Sıkıştırıcı', desc: 'Boyutu %80’e kadar küçültün' },
      { href: '/compactar-video', name: 'Video Boyutu Küçült', desc: 'Kayıpsız megabayt azaltma' },
      { href: '/redimensionar-video', name: 'Video Boyutlandır', desc: '1080p, 720p ve 9:16 ayarı' },
      { href: '/compressor-de-video-mp4', name: 'MP4 Sıkıştırma', desc: 'Web için hızlı H.264' },
      { href: '/compressor-de-video-gratuito', name: 'Ücretsiz Sıkıştırıcı', desc: '%100 ücretsiz ve limitsiz' },
      { href: '/comprimir-video', name: 'WhatsApp İçin Sıkıştır', desc: '16MB altı garantili boyut' },
      { href: '/converter-video-instagram', name: 'Instagram Videosu', desc: '9:16 Reels ve Stories' },
      { href: '/conversor-de-video-youtube', name: 'YouTube Videosu', desc: 'Shorts 9:16 ve 16:9 Full HD' }
    ],
    pl: [
      { href: '/compressor-de-video', name: 'Kompresor Wideo', desc: 'Zmniejsz rozmiar nawet o 80%' },
      { href: '/compactar-video', name: 'Zmniejsz Wideo', desc: 'Ogranicz megabajty bez strat' },
      { href: '/redimensionar-video', name: 'Skaluj Wideo', desc: 'Dopasuj do 1080p, 720p i 9:16' },
      { href: '/compressor-de-video-mp4', name: 'Kompresor MP4', desc: 'Szybki H.264 z faststart' },
      { href: '/compressor-de-video-gratuito', name: 'Darmowy Kompresor', desc: '100% bezpłatny bez limitów' },
      { href: '/comprimir-video', name: 'Kompresuj pod WhatsApp', desc: 'Gwarancja rozmiaru < 16MB' },
      { href: '/converter-video-instagram', name: 'Wideo na Instagram', desc: 'Reels i Stories w 9:16' },
      { href: '/conversor-de-video-youtube', name: 'Wideo YouTube', desc: 'Shorts 9:16 i 16:9 Full HD' }
    ]
  };

  return dict[lang] || dict.en;
}

export function getLocalizedCamcorderTools(lang: SupportedLanguage): NavToolItem[] {
  const dict: Record<SupportedLanguage, NavToolItem[]> = {
    pt: [
      { href: '/converter-m2ts-para-mp4', name: 'M2TS para MP4', desc: 'Câmeras Sony e Blu-ray' },
      { href: '/converter-mts-para-mp4', name: 'MTS para MP4', desc: 'Filmadoras AVCHD' },
      { href: '/converter-ts-para-mp4', name: 'TS para MP4', desc: 'Gravações de TV Digital' },
      { href: '/converter-vob-para-mp4', name: 'VOB para MP4', desc: 'Discos e pastas de DVD' },
      { href: '/converter-video-iphone', name: 'Vídeo para iPhone', desc: 'Rolo de câmera do iOS' },
      { href: '/converter-video-android', name: 'Vídeo para Android', desc: 'Samsung, Motorola, Xiaomi' },
      { href: '/converter-flv-para-mp4', name: 'FLV para MP4', desc: 'Flash Video legado' },
      { href: '/converter-3gp-para-mp4', name: '3GP para MP4', desc: 'Celulares 3G antigos' }
    ],
    en: [
      { href: '/converter-m2ts-para-mp4', name: 'M2TS to MP4', desc: 'Sony Camcorders & Blu-ray' },
      { href: '/converter-mts-para-mp4', name: 'MTS to MP4', desc: 'AVCHD Camcorders' },
      { href: '/converter-ts-para-mp4', name: 'TS to MP4', desc: 'Digital TV Broadcasts' },
      { href: '/converter-vob-para-mp4', name: 'VOB to MP4', desc: 'DVD Discs & VIDEO_TS folders' },
      { href: '/converter-video-iphone', name: 'Video for iPhone', desc: 'iOS Camera Roll standard' },
      { href: '/converter-video-android', name: 'Video for Android', desc: 'Samsung, Google Pixel, Xiaomi' },
      { href: '/converter-flv-para-mp4', name: 'FLV to MP4', desc: 'Legacy Flash Video' },
      { href: '/converter-3gp-para-mp4', name: '3GP to MP4', desc: 'Legacy 3G Mobile phones' }
    ],
    es: [
      { href: '/converter-m2ts-para-mp4', name: 'M2TS a MP4', desc: 'Cámaras Sony y Blu-ray' },
      { href: '/converter-mts-para-mp4', name: 'MTS a MP4', desc: 'Cámaras AVCHD' },
      { href: '/converter-ts-para-mp4', name: 'TS a MP4', desc: 'Grabaciones de TV Digital' },
      { href: '/converter-vob-para-mp4', name: 'VOB a MP4', desc: 'Discos y carpetas de DVD' },
      { href: '/converter-video-iphone', name: 'Video para iPhone', desc: 'Carrete de fotos de iOS' },
      { href: '/converter-video-android', name: 'Video para Android', desc: 'Samsung, Motorola, Xiaomi' },
      { href: '/converter-flv-para-mp4', name: 'FLV a MP4', desc: 'Flash Video clásico' },
      { href: '/converter-3gp-para-mp4', name: '3GP a MP4', desc: 'Celulares 3G clásicos' }
    ],
    fr: [
      { href: '/converter-m2ts-para-mp4', name: 'M2TS vers MP4', desc: 'Caméscopes Sony et Blu-ray' },
      { href: '/converter-mts-para-mp4', name: 'MTS vers MP4', desc: 'Caméscopes AVCHD' },
      { href: '/converter-ts-para-mp4', name: 'TS vers MP4', desc: 'Enregistrements TV Numérique' },
      { href: '/converter-vob-para-mp4', name: 'VOB vers MP4', desc: 'Disques et dossiers DVD' },
      { href: '/converter-video-iphone', name: 'Vidéo pour iPhone', desc: 'Pellicule Photos iOS' },
      { href: '/converter-video-android', name: 'Vidéo pour Android', desc: 'Samsung, Xiaomi, Pixel' },
      { href: '/converter-flv-para-mp4', name: 'FLV vers MP4', desc: 'Ancien format Flash Video' },
      { href: '/converter-3gp-para-mp4', name: '3GP vers MP4', desc: 'Anciens mobiles 3G' }
    ],
    ja: [
      { href: '/converter-m2ts-para-mp4', name: 'M2TS から MP4', desc: 'ソニー製カメラ・Blu-ray' },
      { href: '/converter-mts-para-mp4', name: 'MTS から MP4', desc: 'AVCHD ビデオカメラ' },
      { href: '/converter-ts-para-mp4', name: 'TS から MP4', desc: 'デジタルテレビ放送録画' },
      { href: '/converter-vob-para-mp4', name: 'VOB から MP4', desc: 'DVDディスク・VIDEO_TS' },
      { href: '/converter-video-iphone', name: 'iPhone 向け動画', desc: 'iOS 写真ロール最適化' },
      { href: '/converter-video-android', name: 'Android 向け動画', desc: 'Galaxy / Xperia / Pixel' },
      { href: '/converter-flv-para-mp4', name: 'FLV から MP4', desc: 'Flash 動画の近代化' },
      { href: '/converter-3gp-para-mp4', name: '3GP から MP4', desc: 'ガラケー・初期スマホ動画' }
    ],
    zh: [
      { href: '/converter-m2ts-para-mp4', name: 'M2TS 转 MP4', desc: '索尼摄像机与蓝光' },
      { href: '/converter-mts-para-mp4', name: 'MTS 转 MP4', desc: 'AVCHD 高清摄像机' },
      { href: '/converter-ts-para-mp4', name: 'TS 转 MP4', desc: '数字电视广播录像' },
      { href: '/converter-vob-para-mp4', name: 'VOB 转 MP4', desc: 'DVD 光盘与 VIDEO_TS' },
      { href: '/converter-video-iphone', name: 'iPhone 专属视频', desc: 'iOS 相册原生兼容' },
      { href: '/converter-video-android', name: 'Android 安卓视频', desc: '三星、小米、华为通用' },
      { href: '/converter-flv-para-mp4', name: 'FLV 转 MP4', desc: '传统 Flash 视频' },
      { href: '/converter-3gp-para-mp4', name: '3GP 转 MP4', desc: '旧款功能机与 3G 视频' }
    ],
    no: [
      { href: '/converter-m2ts-para-mp4', name: 'M2TS til MP4', desc: 'Sony-kameraer og Blu-ray' },
      { href: '/converter-mts-para-mp4', name: 'MTS til MP4', desc: 'AVCHD-kameraer' },
      { href: '/converter-ts-para-mp4', name: 'TS til MP4', desc: 'Digitale TV-opptak' },
      { href: '/converter-vob-para-mp4', name: 'VOB til MP4', desc: 'DVD-plater og VIDEO_TS-mapper' },
      { href: '/converter-video-iphone', name: 'Video for iPhone', desc: 'iOS Kamerarull-standard' },
      { href: '/converter-video-android', name: 'Video for Android', desc: 'Samsung, Pixel, Xiaomi' },
      { href: '/converter-flv-para-mp4', name: 'FLV til MP4', desc: 'Klassisk Flash Video' },
      { href: '/converter-3gp-para-mp4', name: '3GP til MP4', desc: 'Eldre 3G-mobiltelefoner' }
    ],
    tr: [
      { href: '/converter-m2ts-para-mp4', name: 'M2TS -> MP4', desc: 'Sony Kamera ve Blu-ray' },
      { href: '/converter-mts-para-mp4', name: 'MTS -> MP4', desc: 'AVCHD Kameralar' },
      { href: '/converter-ts-para-mp4', name: 'TS -> MP4', desc: 'Dijital TV Yayınları' },
      { href: '/converter-vob-para-mp4', name: 'VOB -> MP4', desc: 'DVD Diskleri ve VIDEO_TS' },
      { href: '/converter-video-iphone', name: 'iPhone İçin Video', desc: 'iOS Film Rulosu formatı' },
      { href: '/converter-video-android', name: 'Android İçin Video', desc: 'Samsung, Xiaomi, Pixel' },
      { href: '/converter-flv-para-mp4', name: 'FLV -> MP4', desc: 'Eski Flash Video' },
      { href: '/converter-3gp-para-mp4', name: '3GP -> MP4', desc: 'Eski 3G Cep Telefonları' }
    ],
    pl: [
      { href: '/converter-m2ts-para-mp4', name: 'M2TS na MP4', desc: 'Kamery Sony i Blu-ray' },
      { href: '/converter-mts-para-mp4', name: 'MTS na MP4', desc: 'Kamery AVCHD' },
      { href: '/converter-ts-para-mp4', name: 'TS na MP4', desc: 'Nagrania TV Cyfrowej' },
      { href: '/converter-vob-para-mp4', name: 'VOB na MP4', desc: 'Płyty DVD i foldery VIDEO_TS' },
      { href: '/converter-video-iphone', name: 'Wideo na iPhone’a', desc: 'Rolka z aparatu iOS' },
      { href: '/converter-video-android', name: 'Wideo na Androida', desc: 'Samsung, Xiaomi, Motorola' },
      { href: '/converter-flv-para-mp4', name: 'FLV na MP4', desc: 'Klasyczny Flash Video' },
      { href: '/converter-3gp-para-mp4', name: '3GP na MP4', desc: 'Stare telefony 3G' }
    ]
  };

  return dict[lang] || dict.en;
}

export function getLocalizedFooterLinks1(lang: SupportedLanguage): NavToolItem[] {
  const pop = getLocalizedPopularTools(lang);
  const comp = getLocalizedCompressorTools(lang);
  return [
    pop[0], // mp4
    pop[1], // mov
    comp[0], // compressor
    comp[1], // compressor mp4
    comp[2], // compressor gratuito
    comp[3], // comprimir whatsapp
    pop[2], // mp3
    pop[3], // audio
    pop[4], // gif
    comp[4] // instagram
  ];
}

export function getLocalizedFooterLinks2(lang: SupportedLanguage): NavToolItem[] {
  const cam = getLocalizedCamcorderTools(lang);
  const pop = getLocalizedPopularTools(lang);
  return [
    { href: '/conversor-de-video-youtube', name: lang === 'pt' ? 'Vídeo do YouTube & Shorts' : 'YouTube & Shorts' },
    cam[4], // iphone
    cam[5], // android
    cam[0], // m2ts
    cam[1], // mts
    cam[2], // ts
    cam[3], // vob
    cam[6], // flv
    cam[7], // 3gp
    { href: '/converter-m4v-para-mp4', name: 'M4V -> MP4' },
    { href: '/converter-rmvb-para-mp4', name: 'RMVB -> MP4' },
    { href: '/converter-divx-para-mp4', name: 'DivX -> MP4' },
    { href: '/converter-xvid-para-mp4', name: 'XviD -> MP4' },
    { href: '/converter-ogv-para-mp4', name: 'OGV -> MP4' },
    { href: '/converter-mxf-para-mp4', name: 'MXF -> MP4' },
    pop[5], // webm
    { href: '/converter-avi-para-mp4', name: 'AVI -> MP4' },
    { href: '/converter-mkv-para-mp4', name: 'MKV -> MP4' },
    { href: '/converter-webm-para-mp4', name: 'WebM -> MP4' },
    { href: '/converter-wmv-para-mp4', name: 'WMV -> MP4' }
  ];
}

export function getLocalizedResourceLinks(lang: SupportedLanguage): NavToolItem[] {
  const dict: Record<SupportedLanguage, NavToolItem[]> = {
    pt: [
      { name: 'Todas as 51 Ferramentas', href: '/ferramentas' },
      { name: 'Melhor Conversor Gratuito', href: '/melhor-conversor-de-video-gratuito' },
      { name: 'Sobre a Tecnologia', href: '/sobre' },
      { name: 'Política de Privacidade & LGPD', href: '/privacidade' },
      { name: 'Termos de Uso', href: '/termos' }
    ],
    en: [
      { name: 'All 51 Online Tools', href: '/ferramentas' },
      { name: 'Best Free Video Converter', href: '/melhor-conversor-de-video-gratuito' },
      { name: 'About Technology', href: '/sobre' },
      { name: 'Privacy Policy & GDPR', href: '/privacidade' },
      { name: 'Terms of Service', href: '/termos' }
    ],
    es: [
      { name: 'Las 51 Herramientas', href: '/ferramentas' },
      { name: 'Mejor Convertidor Gratis', href: '/melhor-conversor-de-video-gratuito' },
      { name: 'Sobre la Tecnología', href: '/sobre' },
      { name: 'Política de Privacidad y RGPD', href: '/privacidade' },
      { name: 'Términos de Uso', href: '/termos' }
    ],
    fr: [
      { name: 'Tous les 51 Outils', href: '/ferramentas' },
      { name: 'Meilleur Convertisseur Gratuit', href: '/melhor-conversor-de-video-gratuito' },
      { name: 'À Propos de la Technologie', href: '/sobre' },
      { name: 'Politique de Confidentialité RGPD', href: '/privacidade' },
      { name: 'Conditions d’Utilisation', href: '/termos' }
    ],
    ja: [
      { name: '全51ツール一覧', href: '/ferramentas' },
      { name: '無料動画変換ツールの比較', href: '/melhor-conversor-de-video-gratuito' },
      { name: 'WebAssembly技術について', href: '/sobre' },
      { name: 'プライバシーポリシー', href: '/privacidade' },
      { name: '利用規約', href: '/termos' }
    ],
    zh: [
      { name: '全部 51 款在线工具', href: '/ferramentas' },
      { name: '最佳免费视频转换工具评测', href: '/melhor-conversor-de-video-gratuito' },
      { name: '关于浏览器本地技术', href: '/sobre' },
      { name: '隐私政策与安全', href: '/privacidade' },
      { name: '服务条款', href: '/termos' }
    ],
    no: [
      { name: 'Alle 51 Verktøy', href: '/ferramentas' },
      { name: 'Beste Gratis Videokonverterer', href: '/melhor-conversor-de-video-gratuito' },
      { name: 'Om Teknologien', href: '/sobre' },
      { name: 'Personvernerklæring & GDPR', href: '/privacidade' },
      { name: 'Brukervilkår', href: '/termos' }
    ],
    tr: [
      { name: 'Tüm 51 Araç Dizini', href: '/ferramentas' },
      { name: 'En İyi Ücretsiz Video Dönüştürücü', href: '/melhor-conversor-de-video-gratuito' },
      { name: 'Teknoloji Hakkında', href: '/sobre' },
      { name: 'Gizlilik Politikası & KVKK', href: '/privacidade' },
      { name: 'Kullanım Koşulları', href: '/termos' }
    ],
    pl: [
      { name: 'Wszystkie 51 Narzędzi', href: '/ferramentas' },
      { name: 'Najlepszy Darmowy Konwerter', href: '/melhor-conversor-de-video-gratuito' },
      { name: 'O Technologii', href: '/sobre' },
      { name: 'Polityka Prywatności i RODO', href: '/privacidade' },
      { name: 'Regulamin Serwisu', href: '/termos' }
    ]
  };

  return dict[lang] || dict.en;
}
