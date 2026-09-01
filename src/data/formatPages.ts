import type { OutputFormat, PresetId } from '../lib/ffmpeg/types';
import type { FAQItem } from '../lib/seo/schema';

export interface FormatPageData {
  slug: string;
  targetFormat: OutputFormat;
  initialPreset: PresetId;
  badge: string;
  h1Prefix: string;
  h1Highlight: string;
  h1Suffix: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  dropzoneTitle: string;
  keywords: string[];
  explainerTitle: string;
  explainerParagraphs: string[];
  comparisonTitle?: string;
  sourceDetailsTitle: string;
  sourceDetails: string[];
  targetDetailsTitle: string;
  targetDetails: string[];
  proTip?: string;
  faqs: FAQItem[];
}

export const FORMAT_PAGES: Record<string, FormatPageData> = {
  // Core High Volume
  'conversor-de-video-para-mp4': {
    slug: 'conversor-de-video-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '🚀 O Mais Usado no Brasil',
    h1Prefix: 'Conversor de Vídeo para',
    h1Highlight: 'MP4 Online',
    h1Suffix: 'Grátis',
    metaTitle: 'Conversor de Vídeo para MP4 Online Grátis — Universal e Privado',
    metaDescription: 'Converta qualquer arquivo de vídeo (MOV, MKV, AVI, WebM, WMV, FLV) para MP4 no navegador. Totalmente gratuito, sem limites e sem upload para a nuvem.',
    heroSubtitle: 'Transforme vídeos de qualquer formato no padrão universal MP4 com alta fidelidade visual. Processamento no seu navegador e sem filas de espera.',
    dropzoneTitle: 'Arraste seu arquivo de vídeo aqui para converter para MP4',
    keywords: ['conversor de video para mp4', 'conversor de video mp4', 'converter video para mp4', 'conversor de vídeo para mp4'],
    explainerTitle: 'Por que o formato MP4 é o padrão universal?',
    explainerParagraphs: [
      'O contêiner MP4 (MPEG-4 Part 14) com codec H.264 e áudio AAC é o formato multimídia mais aceito no mundo. Ele roda perfeitamente em praticamente todos os smartphones (Android e iPhone), computadores (Windows, Mac e Linux), Smart TVs e consoles de videogame.',
      'Ao converter qualquer vídeo para MP4 em nosso conversor, o arquivo recebe o cabeçalho "faststart", permitindo reprodução instantânea na web sem travamentos.'
    ],
    sourceDetailsTitle: 'Outros Formatos de Vídeo',
    sourceDetails: [
      'Podem não abrir no celular ou Smart TV',
      'Problemas de codec em players comuns',
      'Arquivos pesados e lentos para enviar'
    ],
    targetDetailsTitle: 'Formato MP4 Universal',
    targetDetails: [
      'Compatível com qualquer aparelho e sistema',
      'Compressão H.264 de alta eficiência',
      'Envio rápido por e-mail e mensageiros'
    ],
    proTip: 'Para streaming web de altíssima velocidade, nosso motor aplica automaticamente a flag -movflags +faststart, movendo o cabeçalho moov para o início do arquivo. Isso permite que navegadores e reprodutores iniciem o vídeo antes do download completo.',
    faqs: [
      {
        question: 'Quais formatos de vídeo posso converter para MP4?',
        answer: 'Nossa ferramenta aceita MOV, MKV, AVI, WebM, WMV, FLV, 3GP, M2TS, MTS, VOB, TS, MXF e dezenas de outros formatos.'
      },
      {
        question: 'Preciso pagar ou me cadastrar para converter vídeos em MP4?',
        answer: 'Não! O ConversordeVideo.com é totalmente gratuito, sem cadastro, sem assinaturas e sem marcas d’água.'
      }
    ]
  },

  'conversor-de-video-youtube': {
    slug: 'conversor-de-video-youtube',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '🔴 Especial para Criadores e Vídeos do YouTube',
    h1Prefix: 'Conversor de Vídeo do',
    h1Highlight: 'YouTube e Shorts',
    h1Suffix: 'Online',
    metaTitle: 'Conversor de Vídeo do YouTube Online Grátis — MP4, Shorts e MP3',
    metaDescription: 'Converta e formate vídeos baixados do YouTube e YouTube Shorts para MP4 ou MP3 no navegador. Rápido, totalmente seguro e sem upload de arquivos.',
    heroSubtitle: 'Converta e formate clipes e gravações para o formato padrão do YouTube (16:9 HD ou Shorts 9:16 vertical). totalmente privado no seu aparelho.',
    dropzoneTitle: 'Arraste o arquivo de vídeo para formatar para o YouTube',
    keywords: ['conversor de video do youtube', 'conversor de video youtube', 'conversor de vídeo do youtube', 'conversor de video youtube mp3'],
    explainerTitle: 'Como preparar e converter vídeos para o YouTube?',
    explainerParagraphs: [
      'O YouTube recomenda que vídeos enviados utilizem o contêiner MP4 com codec de vídeo H.264, áudio estéreo AAC a 48kHz e taxa de proporção padrão.',
      'Nossa ferramenta permite converter qualquer gravação bruta para os parâmetros recomendados pelo YouTube, evitando que a plataforma degrade a nitidez do seu canal.'
    ],
    sourceDetailsTitle: 'Vídeo Bruto / Não Otimizado',
    sourceDetails: [
      'Codecs pesados ou incompatíveis',
      'Processamento lento ao subir no YouTube Studio',
      'Possíveis perdas de sincronia de áudio'
    ],
    targetDetailsTitle: 'Vídeo Padrão YouTube',
    targetDetails: [
      'Formato ideal MP4 H.264 + áudio AAC',
      'Processamento instantâneo no YouTube Studio',
      'Qualidade máxima preservada em 1080p Full HD'
    ],
    faqs: [
      {
        question: 'Posso converter vídeos para o YouTube Shorts?',
        answer: 'Sim! Selecione a predefinição para vídeos verticais e converta seu arquivo no formato recomendado de 9:16.'
      },
      {
        question: 'Como converter o áudio de um vídeo para MP3?',
        answer: 'Basta escolher a opção MP3 na seleção de formato. Nossa ferramenta extrairá a trilha de som a 192 kbps estéreo.'
      }
    ]
  },

  'melhor-conversor-de-video-gratuito': {
    slug: 'melhor-conversor-de-video-gratuito',
    targetFormat: 'mp4',
    initialPreset: 'high_quality',
    badge: '🏆 Eleito o Conversor Mais Rápido e Seguro',
    h1Prefix: 'O Melhor',
    h1Highlight: 'Conversor de Vídeo Gratuito',
    h1Suffix: 'Online',
    metaTitle: 'Melhor Conversor de Vídeo Gratuito Online — Sem Limites e Seguro',
    metaDescription: 'Descubra por que o ConversordeVideo.com é o melhor conversor de vídeo gratuito: sem upload, sem limites de tamanho, sem cadastro e totalmente privado.',
    heroSubtitle: 'A ferramenta definitiva para converter MP4, MOV, MP3, WebM e GIF. Zero espera, sem anúncios invasivos e totalmente no seu navegador.',
    dropzoneTitle: 'Arraste qualquer arquivo de vídeo para começar',
    keywords: ['melhor conversor de vídeo gratuito', 'melhor conversor de video gratis', 'melhor conversor de vídeo online', 'conversor de video confiavel'],
    explainerTitle: 'Por que somos o melhor conversor de vídeo do Brasil?',
    explainerParagraphs: [
      'Enquanto os concorrentes tradicionais (CloudConvert, Convertio, FreeConvert) cobram assinaturas mensais, impõem filas de espera e obrigam você a fazer upload dos seus vídeos para servidores estrangeiros, o ConversordeVideo.com funciona totalmente no seu computador ou celular.',
      'Graças à tecnologia WebAssembly, você tem velocidade máxima sem depender da sua taxa de upload e com garantia de privacidade absoluta sob a LGPD.'
    ],
    sourceDetailsTitle: 'Concorrentes Tradicionais',
    sourceDetails: [
      'Upload lento de arquivos pesados',
      'Filas de espera de até 15 minutos',
      'Limite gratuito de 100 MB',
      'Arquivos armazenados em servidores de terceiros'
    ],
    targetDetailsTitle: 'ConversordeVideo.com',
    targetDetails: [
      'Zero upload — totalmente processamento local',
      'Sem filas e sem limite de conversões diárias',
      'Arquivos de celular convertidos instantaneamente',
      'Totalmente gratuito e sem cadastro'
    ],
    faqs: [
      {
        question: 'O conversor é realmente gratuito sem pegadinhas?',
        answer: 'Sim, totalmente gratuito. Não exigimos cartão de crédito, cadastro nem limitamos o número de arquivos que você pode converter por dia.'
      },
      {
        question: 'Meus vídeos ficam salvos em algum lugar?',
        answer: 'Não. Todo o processamento ocorre na memória RAM do seu próprio navegador. Nenhum byte é enviado para a internet.'
      }
    ]
  },

  'converter-mov-para-mp4': {
    slug: 'converter-mov-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '📱 Especial para Vídeos do iPhone e Mac',
    h1Prefix: 'Converter',
    h1Highlight: 'MOV para MP4',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter MOV para MP4 Online Grátis — Sem Perda de Qualidade',
    metaDescription: 'Converta arquivos de vídeo MOV do iPhone e Mac para MP4 no navegador. Rápido, gratuito, sem upload de arquivos e totalmente privado no seu dispositivo.',
    heroSubtitle: 'Transforme vídeos da Apple (.MOV) no formato universal MP4 sem instalar programas e sem enviar seus arquivos particulares para servidores externos.',
    dropzoneTitle: 'Arraste seu arquivo .MOV aqui para converter para MP4',
    keywords: ['converter mov para mp4', 'mov para mp4 online', 'converter video iphone para mp4', 'transformar mov em mp4'],
    explainerTitle: 'Por que converter arquivos MOV para MP4?',
    explainerParagraphs: [
      'O contêiner Apple QuickTime (.MOV) é o formato de captura nativo das câmeras do iPhone e do macOS. Ele é excelente para gravação com alta taxa de dados, mas frequentemente apresenta incompatibilidades ao ser aberto no Windows, em reprodutores de carros ou em Smart TVs mais antigas.',
      'Ao converter MOV para MP4 com codec H.264 e áudio AAC, você garante que qualquer pessoa em qualquer sistema operacional assista ao vídeo com perfeição, além de economizar até 60% de espaço em disco mantendo a nitidez original.'
    ],
    sourceDetailsTitle: 'Formato MOV (Apple QuickTime)',
    sourceDetails: [
      'Padrão em iPhone, iPad e macOS',
      'Arquivos mais volumosos e pesados',
      'Incompatível com reprodutores legados do Windows',
      'Pode travar ao ser enviado por e-mail ou WhatsApp'
    ],
    targetDetailsTitle: 'Formato MP4 (Padrão Universal)',
    targetDetails: [
      'totalmente compatível com qualquer celular, TV e PC',
      'Tamanho otimizado com cabeçalho faststart',
      'Reprodução instantânea na web e redes sociais',
      'Qualidade visual idêntica com compressão H.264'
    ],
    faqs: [
      {
        question: 'Por que os vídeos gravados no iPhone estão em formato MOV?',
        answer: 'A Apple utiliza o contêiner QuickTime (.MOV) por padrão porque ele suporta taxas de dados profissionais e múltiplos canais de cor. No entanto, o formato MP4 é o padrão aberto mundial mais compatível com todos os outros sistemas operacionais.'
      },
      {
        question: 'A conversão de MOV para MP4 perde qualidade de imagem?',
        answer: 'Ao utilizar nossa predefinição de "Alta Qualidade" ou "Qualidade Equilibrada", a perda visual é imperceptível (CRF 18 a 23), mantendo as cores e a nitidez originais do seu iPhone.'
      },
      {
        question: 'Preciso enviar meu vídeo para a internet para converter de MOV para MP4?',
        answer: 'Não! O ConversordeVideo.com processa todo o vídeo localmente na memória RAM do seu celular ou computador através de WebAssembly. Seus vídeos pessoais nunca saem do seu aparelho.'
      }
    ]
  },

  'converter-video-para-mp3': {
    slug: 'converter-video-para-mp3',
    targetFormat: 'mp3',
    initialPreset: 'audio_mp3',
    badge: '🎵 Extração de Áudio de Alta Fidelidade (192 kbps)',
    h1Prefix: 'Conversor de Vídeo para',
    h1Highlight: 'MP3 Online',
    h1Suffix: 'Grátis',
    metaTitle: 'Conversor de Vídeo para MP3 Online Grátis — Extrair Áudio',
    metaDescription: 'Extraia o áudio de qualquer vídeo em formato MP3 de alta qualidade (192 kbps) diretamente no navegador. totalmente gratuito, sem cadastro e sem upload.',
    heroSubtitle: 'Extraia a trilha de áudio de qualquer gravação ou clipe e salve como MP3 estéreo leve. totalmente no navegador e sem upload para servidores.',
    dropzoneTitle: 'Arraste o vídeo para extrair a trilha de áudio MP3',
    keywords: ['conversor de video para mp3', 'conversor de video mp3', 'conversor de vídeo para mp3', 'conversor de video em mp3', 'conversor de vídeo mp3', 'converter video em mp3', 'extrair audio de video'],
    explainerTitle: 'Como funciona a extração de áudio MP3 de vídeos?',
    explainerParagraphs: [
      'Muitas vezes você tem uma gravação de palestra, reunião, aula, show ou podcast em vídeo, mas deseja apenas ouvir o conteúdo como áudio enquanto caminha ou trabalha.',
      'Nossa ferramenta descarta a pesada trilha de vídeo e codifica somente a faixa sonora no padrão MP3 de 192 kbps estéreo, reduzindo o tamanho do arquivo em até 95% sem perder a nitidez das vozes e instrumentos.'
    ],
    sourceDetailsTitle: 'Arquivo de Vídeo Original',
    sourceDetails: [
      'Contém imagem e som juntos',
      'Tamanho volumoso (muitas vezes > 100 MB)',
      'Consome muita bateria para reproduzir em segundo plano',
      'Desnecessário quando você só quer ouvir o conteúdo'
    ],
    targetDetailsTitle: 'Arquivo MP3 Extraído',
    targetDetails: [
      'Apenas a trilha de som nítida',
      'Extremamente leve (redução de até 95% do tamanho)',
      'Toca em qualquer celular, rádio de carro e fone bluetooth',
      'Qualidade estéreo cristalina a 192 kbps'
    ],
    faqs: [
      {
        question: 'Como converter um vídeo para MP3 sem perder qualidade de áudio?',
        answer: 'Nossa ferramenta extrai a faixa de áudio original e codifica no formato MP3 com taxa constante de 192 kbps usando a biblioteca LAME MP3, garantindo clareza e fidelidade estéreo.'
      },
      {
        question: 'Posso converter gravações de voz ou vídeos do WhatsApp para MP3?',
        answer: 'Sim! Aceitamos vídeos de qualquer origem e convertemos em arquivos MP3 leves que você pode ouvir em qualquer player de música.'
      }
    ]
  },

  'video-para-gif': {
    slug: 'video-para-gif',
    targetFormat: 'gif',
    initialPreset: 'gif_standard',
    badge: '🎞️ Criação de Animações em Loop Sem Marca d\'Água',
    h1Prefix: 'Converter',
    h1Highlight: 'Vídeo para GIF',
    h1Suffix: 'Online',
    metaTitle: 'Converter Vídeo para GIF Online Grátis — Criar GIF Animado',
    metaDescription: 'Transforme trechos de vídeo em GIFs animados de alta qualidade no navegador. totalmente gratuito, sem marca d’água e sem upload de arquivos.',
    heroSubtitle: 'Transforme clipes de vídeo em GIFs animados leves e fluidos no navegador. Perfeito para figurinhas do WhatsApp, memes e reações.',
    dropzoneTitle: 'Arraste o vídeo para gerar a animação em GIF',
    keywords: ['video para gif', 'converter video para gif', 'vídeo para gif', 'conversor de video para gif', 'criar gif animado', 'transformar video em gif', 'video para gif online', 'converte video para gif', 'converter vídeo para gif', 'conversor de vídeo para gif', 'conversor video para gif', 'converter video para gif online'],
    explainerTitle: 'Por que criar GIFs animados a partir de vídeos?',
    explainerParagraphs: [
      'GIFs animados são a linguagem universal da internet para memes, demonstrações rápidas de produtos, reações em bate-papo e figurinhas.',
      'Nossa ferramenta aplica otimização de paleta de cores (Bayer Dithering) com 12 quadros por segundo, garantindo animações contínuas, sem ruídos e com tamanho de arquivo reduzido.',
      'Você pode converter vídeo para GIF online e gratuitamente para criar figurinhas de WhatsApp personalizadas, stickers para o Discord e Telegram, ou reações em formato de meme. O conversor de vídeo para GIF gera animações em loop sem marca d’água, prontas para compartilhar.'
    ],
    sourceDetailsTitle: 'Vídeo com Áudio',
    sourceDetails: [
      'Exige player de vídeo para reproduzir',
      'Pode ter áudio indesejado',
      'Não faz loop automático em chats'
    ],
    targetDetailsTitle: 'GIF Animado em Loop',
    targetDetails: [
      'Reprodução contínua e automática',
      'Sem áudio, ideal para stickers e memes',
      'Compatível com WhatsApp, Discord, Slack e Twitter'
    ],
    faqs: [
      {
        question: 'Como transformar um vídeo em GIF animado sem marca d’água?',
        answer: 'Basta arrastar seu clipe de vídeo para nossa ferramenta, selecionar a opção GIF e clicar em converter. O GIF gerado é totalmente livre de marcas d’água.'
      },
      {
        question: 'Qual a duração recomendada para o GIF?',
        answer: 'Recomendamos clipes de 3 a 15 segundos para manter o arquivo leve e fácil de carregar em conexões móveis.'
      },
      {
        question: 'Posso converter vídeo para GIF online sem instalar programas?',
        answer: 'Sim! Todo o processamento roda diretamente no navegador via WebAssembly. Não é necessário baixar nem instalar nenhum software — funciona no computador e no celular.'
      }
    ]
  },

  'converter-mp4-para-webm': {
    slug: 'converter-mp4-para-webm',
    targetFormat: 'webm',
    initialPreset: 'balanced',
    badge: '🌐 Vídeo Otimizado para Sites e HTML5',
    h1Prefix: 'Converter',
    h1Highlight: 'MP4 para WebM',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter MP4 para WebM Online Grátis — Vídeo para Web',
    metaDescription: 'Converta arquivos MP4 para o formato leve e moderno WebM para sites e HTML5. totalmente gratuito no navegador, sem upload e sem cadastro.',
    heroSubtitle: 'Transforme vídeos MP4 no padrão aberto e ultraleve WebM para carregamento instantâneo em páginas web. totalmente no seu navegador.',
    dropzoneTitle: 'Arraste o vídeo para converter para WebM',
    keywords: ['converter mp4 para webm', 'mp4 para webm online', 'conversor mp4 webm gratis'],
    explainerTitle: 'Por que utilizar o formato WebM em sites e blogs?',
    explainerParagraphs: [
      'Desenvolvido pelo Google, o WebM é um formato aberto projetado especificamente para a web moderna com tag <video> em HTML5.',
      'Ele oferece excelente taxa de compressão e tempos de carregamento muito menores, otimizando as métricas do Core Web Vitals.'
    ],
    sourceDetailsTitle: 'Vídeo MP4',
    sourceDetails: ['Compatível com dispositivos gerais', 'Pode ser mais pesado para carregar na web'],
    targetDetailsTitle: 'Vídeo WebM',
    targetDetails: ['Ultraleve para sites', 'Carregamento instantâneo em navegadores'],
    faqs: [
      {
        question: 'O formato WebM funciona em todos os navegadores?',
        answer: 'Sim, praticamente todos os navegadores modernos (Chrome, Firefox, Safari, Edge) reproduzem WebM nativamente.'
      }
    ]
  },

  'converter-video-instagram': {
    slug: 'converter-video-instagram',
    targetFormat: 'mp4',
    initialPreset: 'instagram_reels',
    badge: '📸 Otimização para Reels, Stories e Feed',
    h1Prefix: 'Conversor de Vídeo para',
    h1Highlight: 'Instagram',
    h1Suffix: 'Online',
    metaTitle: 'Conversor de Vídeo para Instagram Online — Reels, Stories e Feed',
    metaDescription: 'Converta e formate vídeos para o Instagram (Reels, Stories e Feed) nos formatos recomendados MP4 e H.264. totalmente gratuito e privado no navegador.',
    heroSubtitle: 'Prepare seus vídeos para postar no Instagram com a melhor nitidez possível. Sem distorções e no formato padrão MP4 H.264.',
    dropzoneTitle: 'Arraste o vídeo para otimizar para o Instagram',
    keywords: ['conversor de video instagram', 'conversor de video do instagram', 'converter video para reels', 'converter video para stories', 'formato video instagram'],
    explainerTitle: 'Como postar vídeos nítidos no Instagram sem perder qualidade?',
    explainerParagraphs: [
      'Quando um vídeo é enviado para o Instagram com parâmetros incompatíveis, o servidor da rede social recomprime o arquivo gerando artefatos e desfoque.',
      'Nossa predefinição exporta o vídeo na taxa de bits e perfil H.264 ideais para a plataforma, mantendo as cores vívidas e alta nitidez.'
    ],
    sourceDetailsTitle: 'Vídeo com Parâmetros Desconhecidos',
    sourceDetails: ['Risco de compressão destrutiva pelo Instagram', 'Pode sofrer corte ou distorção de proporção'],
    targetDetailsTitle: 'Vídeo Otimizado para Instagram',
    targetDetails: ['Formato exato MP4 H.264 + AAC', 'Taxa de bits calibrada para evitar borrões'],
    faqs: [
      {
        question: 'Qual a proporção recomendada para Reels e Stories?',
        answer: 'A proporção padrão é 9:16 vertical (resolução 1080x1920).'
      }
    ]
  },

  'converter-avi-para-mp4': {
    slug: 'converter-avi-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '📼 Atualize Vídeos Antigos para MP4',
    h1Prefix: 'Converter',
    h1Highlight: 'AVI para MP4',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter AVI para MP4 Online Grátis — Rápido e Seguro',
    metaDescription: 'Converta vídeos no formato AVI para MP4 universal no navegador. Sem necessidade de upload, sem cadastro e totalmente privado.',
    heroSubtitle: 'Modernize vídeos antigos em formato AVI para o padrão universal MP4. Compatível com todos os celulares e Smart TVs.',
    dropzoneTitle: 'Arraste seu arquivo .AVI aqui para converter para MP4',
    keywords: ['converter avi para mp4', 'avi para mp4 online gratis', 'transformar avi em mp4'],
    explainerTitle: 'Por que modernizar arquivos AVI para MP4?',
    explainerParagraphs: [
      'O formato AVI (Audio Video Interleave) foi lançado pela Microsoft na década de 1990. Seus codecs legados não são suportados nativamente pela maioria dos smartphones e navegadores atuais.',
      'A conversão para MP4 traz compatibilidade instantânea com qualquer tela moderna e reduz o tamanho do arquivo.'
    ],
    sourceDetailsTitle: 'Formato AVI Legado',
    sourceDetails: ['Incompatível com celulares modernos', 'Arquivos pesados'],
    targetDetailsTitle: 'Formato MP4 Moderno',
    targetDetails: ['Reproduz em qualquer tela', 'Alta eficiência de compressão'],
    faqs: [
      {
        question: 'A conversão de AVI para MP4 é rápida?',
        answer: 'Sim, nosso motor WebAssembly converte arquivos AVI em segundos usando seu processador local.'
      }
    ]
  },

  'converter-mkv-para-mp4': {
    slug: 'converter-mkv-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '🎬 Compatibilidade Total para Filmes e Séries',
    h1Prefix: 'Converter',
    h1Highlight: 'MKV para MP4',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter MKV para MP4 Online Grátis — Sem Travar',
    metaDescription: 'Converta vídeos MKV para MP4 universal no navegador sem enviar arquivos para a nuvem. Rápido, seguro e totalmente gratuito.',
    heroSubtitle: 'Transforme vídeos MKV no padrão universal MP4 com alta fidelidade visual. totalmente no navegador e sem upload para a nuvem.',
    dropzoneTitle: 'Arraste seu arquivo .MKV aqui para converter para MP4',
    keywords: ['converter mkv para mp4', 'mkv para mp4 online gratis', 'transformar mkv em mp4'],
    explainerTitle: 'Como converter vídeos MKV para MP4?',
    explainerParagraphs: [
      'O contêiner MKV (Matroska) é ótimo para armazenar filmes com múltiplas trilhas, mas não abre no QuickTime da Apple nem na maioria dos navegadores.',
      'A conversão para MP4 mantém a resolução e nitidez enquanto garante que o vídeo abra em qualquer aparelho.'
    ],
    sourceDetailsTitle: 'Contêiner MKV',
    sourceDetails: ['Não abre no Safari ou QuickTime', 'Requer players de terceiros'],
    targetDetailsTitle: 'Contêiner MP4',
    targetDetails: ['Abre nativamente em qualquer tela', 'Ideal para compartilhamento'],
    faqs: [
      {
        question: 'A conversão de MKV para MP4 mantém a alta resolução?',
        answer: 'Sim! Selecionando "Alta Qualidade HD", toda a nitidez de 1080p ou 720p é preservada.'
      }
    ]
  },

  'converter-webm-para-mp4': {
    slug: 'converter-webm-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '🔄 Compatibilidade Universal para Vídeos Web',
    h1Prefix: 'Converter',
    h1Highlight: 'WebM para MP4',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter WebM para MP4 Online Grátis — Fácil e Seguro',
    metaDescription: 'Transforme vídeos WebM da internet em MP4 amplamente compatível. totalmente gratuito, sem cadastro, sem marcas d’água e com processamento local.',
    heroSubtitle: 'Transforme vídeos baixados em WebM no padrão universal MP4 com alta fidelidade visual. totalmente no navegador.',
    dropzoneTitle: 'Arraste seu arquivo .WebM aqui para converter para MP4',
    keywords: ['converter webm para mp4', 'webm para mp4 online gratis', 'transformar webm em mp4'],
    explainerTitle: 'Por que converter WebM para MP4?',
    explainerParagraphs: [
      'Muitos editores de vídeo no Windows e Mac não importam vídeos em formato WebM. Converter para MP4 torna o arquivo compatível com qualquer software de edição e aparelho celular.'
    ],
    sourceDetailsTitle: 'Vídeo WebM',
    sourceDetails: ['Pode não abrir em editores de vídeo', 'Incompatível com alguns players de TV'],
    targetDetailsTitle: 'Vídeo MP4',
    targetDetails: ['Compatível com Premiere, Final Cut, CapCut', 'Reprodução em todos os dispositivos'],
    faqs: [
      {
        question: 'Por que converter arquivos WebM para MP4?',
        answer: 'Converter para MP4 permite editar o vídeo em qualquer software e enviá-lo sem problemas por e-mail ou WhatsApp.'
      }
    ]
  },

  'converter-wmv-para-mp4': {
    slug: 'converter-wmv-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '🪟 Atualização de Vídeos do Windows Media',
    h1Prefix: 'Converter',
    h1Highlight: 'WMV para MP4',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter WMV para MP4 Online Grátis — Windows Media para MP4',
    metaDescription: 'Converta vídeos no formato Windows Media Video (WMV) para MP4 universal no navegador. Rápido, sem upload de arquivos e totalmente gratuito.',
    heroSubtitle: 'Modernize vídeos antigos do Windows Media para o padrão universal MP4. Rápido, seguro e totalmente local.',
    dropzoneTitle: 'Arraste seu arquivo .WMV aqui para converter para MP4',
    keywords: ['converter wmv para mp4', 'wmv para mp4 online gratis', 'transformar wmv em mp4'],
    explainerTitle: 'Por que atualizar WMV para MP4?',
    explainerParagraphs: [
      'O WMV é um formato proprietário que não roda em iPhones ou Androids sem aplicativos extras. A conversão para MP4 garante que seu vídeo possa ser assistido em qualquer tela.'
    ],
    sourceDetailsTitle: 'Formato WMV (Windows)',
    sourceDetails: ['Incompatível com iPhone e iPad', 'Requer codecs específicos no Mac'],
    targetDetailsTitle: 'Formato MP4 Universal',
    targetDetails: ['Roda em qualquer dispositivo', 'Compressão H.264 moderna'],
    faqs: [
      {
        question: 'Por que converter arquivos WMV para MP4?',
        answer: 'O MP4 é suportado nativamente por todos os aparelhos móveis e Smart TVs.'
      }
    ]
  },

  // Camcorder & Broadcast Formats
  'converter-m2ts-para-mp4': {
    slug: 'converter-m2ts-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '📹 Câmeras Sony, Panasonic & Blu-ray',
    h1Prefix: 'Converter',
    h1Highlight: 'M2TS para MP4',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter M2TS para MP4 Online Grátis — Sem Perda de Qualidade',
    metaDescription: 'Converta gravações de filmadoras M2TS (AVCHD Blu-ray) para MP4 no navegador. Rápido, sem upload de arquivos e totalmente privado.',
    heroSubtitle: 'Transforme vídeos de câmeras digitais e discos Blu-ray (.m2ts) no formato universal MP4 sem travar seu computador.',
    dropzoneTitle: 'Arraste seu arquivo .M2TS aqui para converter para MP4',
    keywords: ['converter m2ts para mp4', 'm2ts para mp4 online', 'm2ts converter'],
    explainerTitle: 'O que é o formato M2TS e por que converter para MP4?',
    explainerParagraphs: [
      'Arquivos M2TS são fluxos de transporte BDAV MPEG-2 usados para gravar vídeos em alta definição em filmadoras AVCHD (como Sony Handycam e Panasonic Lumix).',
      'Como a maioria dos navegadores e smartphones não reproduzem M2TS nativamente, converter para MP4 H.264 garante compatibilidade total e reduz significativamente o tamanho do arquivo.'
    ],
    sourceDetailsTitle: 'Formato M2TS (AVCHD)',
    sourceDetails: ['Exclusivo de filmadoras e Blu-ray', 'Não roda em celulares ou navegadores', 'Tamanho de arquivo muito pesado'],
    targetDetailsTitle: 'Formato MP4 Universal',
    targetDetails: ['Compatível com todos os dispositivos', 'Reprodução imediata na web', 'Fácil de compartilhar no WhatsApp'],
    faqs: [
      { question: 'Como converter vídeos M2TS gravados na câmera para MP4?', answer: 'Basta arrastar o arquivo .m2ts para o conversor e clicar em Converter. O arquivo gerado será um MP4 leve e nítido.' }
    ]
  },

  'converter-mts-para-mp4': {
    slug: 'converter-mts-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '📷 Câmeras Digitais AVCHD',
    h1Prefix: 'Converter',
    h1Highlight: 'MTS para MP4',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter MTS para MP4 Online Grátis — AVCHD para MP4',
    metaDescription: 'Converta arquivos MTS de filmadoras Sony, Canon e Panasonic para MP4 universal no navegador. totalmente gratuito e privado.',
    heroSubtitle: 'Transforme gravações brutas de filmadoras digitais (.mts) em vídeos MP4 modernos prontos para compartilhar.',
    dropzoneTitle: 'Arraste seu arquivo .MTS aqui para converter para MP4',
    keywords: ['converter mts para mp4', 'mts para mp4 online', 'mts converter'],
    explainerTitle: 'Por que converter vídeos MTS para MP4?',
    explainerParagraphs: [
      'O contêiner MTS armazena dados brutos de vídeo em filmadoras AVCHD. A conversão para MP4 permite editar seus vídeos no CapCut, Premiere ou postar diretamente nas redes sociais.'
    ],
    sourceDetailsTitle: 'Vídeo MTS Bruto',
    sourceDetails: ['Difícil de abrir em computadores comuns', 'Incompatível com reprodutores de TV'],
    targetDetailsTitle: 'Vídeo MP4 Otimizado',
    targetDetails: ['Abre instantaneamente em qualquer tela', 'Fácil de editar e compartilhar'],
    faqs: [
      { question: 'A conversão de MTS para MP4 reduz a nitidez?', answer: 'Não. Utilizando a predefinição de Alta Qualidade, a nitidez Full HD da sua câmera é totalmente preservada.' }
    ]
  },

  'converter-ts-para-mp4': {
    slug: 'converter-ts-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '📡 Transmissões de TV & Streams',
    h1Prefix: 'Converter',
    h1Highlight: 'TS para MP4',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter TS para MP4 Online Grátis — Transport Stream para MP4',
    metaDescription: 'Converta gravações de TV Digital e transmissões TS para MP4 no navegador. Rápido, sem upload de arquivos e totalmente seguro.',
    heroSubtitle: 'Modernize transmissões MPEG Transport Stream (.ts) para o padrão universal MP4 com alta fidelidade.',
    dropzoneTitle: 'Arraste seu arquivo .TS aqui para converter para MP4',
    keywords: ['converter ts para mp4', 'ts para mp4 online', 'ts converter'],
    explainerTitle: 'O que são arquivos TS e como converter para MP4?',
    explainerParagraphs: [
      'O formato TS (MPEG Transport Stream) é usado em receptores de satélite e gravação de canais de TV digital. A conversão para MP4 remove metadados desnecessários de transmissão e gera um arquivo leve e compatível com celulares.'
    ],
    sourceDetailsTitle: 'Fluxo TS de TV',
    sourceDetails: ['Usado em gravadores de TV', 'Não abre nativamente em smartphones'],
    targetDetailsTitle: 'MP4 Universal',
    targetDetails: ['Reproduz em qualquer smartphone e TV', 'Tamanho de arquivo otimizado'],
    faqs: [
      { question: 'Posso converter gravações de TV em formato TS?', answer: 'Sim! Nosso motor WebAssembly converte fluxos de transporte TS em arquivos MP4 limpos e universais.' }
    ]
  },

  'converter-vob-para-mp4': {
    slug: 'converter-vob-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '📀 Vídeos de DVD (MPEG-2)',
    h1Prefix: 'Converter',
    h1Highlight: 'VOB para MP4',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter VOB para MP4 Online Grátis — DVD para MP4',
    metaDescription: 'Converta arquivos VOB de discos de DVD para MP4 universal no navegador. Sem necessidade de instalar programas ou fazer upload.',
    heroSubtitle: 'Converta vídeos de discos de DVD antigos (.vob) em arquivos MP4 modernos compatíveis com todos os celulares e Smart TVs.',
    dropzoneTitle: 'Arraste seu arquivo .VOB aqui para converter para MP4',
    keywords: ['converter vob para mp4', 'vob para mp4 online', 'vob converter', 'converter dvd para mp4'],
    explainerTitle: 'Como converter vídeos de DVD (VOB) para MP4?',
    explainerParagraphs: [
      'Arquivos VOB contêm vídeo em formato MPEG-2 e áudio AC3 presentes na pasta VIDEO_TS de DVDs. A conversão para MP4 H.264 preserva suas memórias e permite assisti-las em qualquer celular ou notebook sem leitor de DVD.'
    ],
    sourceDetailsTitle: 'Arquivo VOB (DVD)',
    sourceDetails: ['Requer leitor de DVD ou VLC', 'Incompatível com celulares modernos', 'Codec MPEG-2 antigo'],
    targetDetailsTitle: 'Arquivo MP4 Moderno',
    targetDetails: ['Roda em todos os celulares e Smart TVs', 'Redução de até 70% do tamanho', 'Fácil de guardar na nuvem ou pen drive'],
    faqs: [
      { question: 'Como converter a pasta VIDEO_TS de um DVD?', answer: 'Basta selecionar os arquivos .VOB principais e convertê-los diretamente em MP4 no seu navegador.' }
    ]
  },

  'converter-flv-para-mp4': {
    slug: 'converter-flv-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '⚡ Flash Video para MP4',
    h1Prefix: 'Converter',
    h1Highlight: 'FLV para MP4',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter FLV para MP4 Online Grátis — Flash Video para MP4',
    metaDescription: 'Transforme vídeos antigos em formato Flash (.flv) para MP4 universal no navegador. totalmente gratuito, sem upload e sem cadastro.',
    heroSubtitle: 'Atualize vídeos Flash FLV legados para o formato universal MP4 suportado por todos os navegadores modernos.',
    dropzoneTitle: 'Arraste seu arquivo .FLV aqui para converter para MP4',
    keywords: ['converter flv para mp4', 'flv para mp4 online', 'flv converter'],
    explainerTitle: 'Por que converter arquivos FLV para MP4?',
    explainerParagraphs: [
      'O Adobe Flash Video (FLV) foi o formato dominante da web nos anos 2000, mas foi completamente descontinuado pelos navegadores atuais. Converter seus vídeos FLV para MP4 garante que eles continuem acessíveis para sempre.'
    ],
    sourceDetailsTitle: 'Formato FLV Legado',
    sourceDetails: ['Incompatível com navegadores modernos', 'Não abre em iPhones ou Androids'],
    targetDetailsTitle: 'Formato MP4 Padrão',
    targetDetails: ['Suporte vitalício em qualquer sistema', 'Qualidade de imagem otimizada'],
    faqs: [
      { question: 'O formato FLV ainda funciona em celulares?', answer: 'Não. Os smartphones modernos não possuem reprodutores para Flash. Converter para MP4 é essencial.' }
    ]
  },

  'converter-3gp-para-mp4': {
    slug: 'converter-3gp-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '📱 Vídeos de Celulares Antigos',
    h1Prefix: 'Converter',
    h1Highlight: '3GP para MP4',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter 3GP para MP4 Online Grátis — 3GPP para MP4',
    metaDescription: 'Converta vídeos 3GP e 3GPP de celulares antigos para MP4 moderno no navegador. Rápido, seguro e totalmente gratuito.',
    heroSubtitle: 'Restaure gravações antigas de celulares 3G (.3gp) no formato universal MP4 com alta fidelidade sonora.',
    dropzoneTitle: 'Arraste seu arquivo .3GP aqui para converter para MP4',
    keywords: ['converter 3gp para mp4', '3gp para mp4 online', '3gp converter', 'converter 3gpp para mp4'],
    explainerTitle: 'Como modernizar vídeos 3GP para MP4?',
    explainerParagraphs: [
      'O formato 3GP foi criado para economizar dados nas redes celulares 3G. Seus codecs de baixa resolução frequentemente não abrem em players de TV atuais. Nossa ferramenta reempacota o vídeo em MP4 compatível.'
    ],
    sourceDetailsTitle: 'Formato 3GP / 3GPP',
    sourceDetails: ['Codec antigo de baixa compatibilidade', 'Incompatível com algumas Smart TVs'],
    targetDetailsTitle: 'Formato MP4',
    targetDetails: ['Abre em qualquer reprodutor atual', 'Áudio AAC nítido'],
    faqs: [
      { question: 'Consigo converter vídeos gravados em celulares antigos?', answer: 'Sim! Nosso conversor processa qualquer gravação .3gp ou .3gpp transformando-a em MP4 universal.' }
    ]
  },

  'converter-m4v-para-mp4': {
    slug: 'converter-m4v-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '🍎 Vídeos Apple iTunes & QuickTime',
    h1Prefix: 'Converter',
    h1Highlight: 'M4V para MP4',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter M4V para MP4 Online Grátis — Apple M4V para MP4',
    metaDescription: 'Converta vídeos no formato M4V para MP4 universal no navegador sem upload. Rápido, seguro e totalmente gratuito.',
    heroSubtitle: 'Transforme vídeos M4V do ecossistema Apple em MP4 universal compatível com Android, Windows e TVs.',
    dropzoneTitle: 'Arraste seu arquivo .M4V aqui para converter para MP4',
    keywords: ['converter m4v para mp4', 'm4v para mp4 online', 'm4v converter'],
    explainerTitle: 'Qual a diferença entre M4V e MP4?',
    explainerParagraphs: [
      'O contêiner M4V foi desenvolvido pela Apple para o iTunes. Embora muito semelhante ao MP4, muitos aparelhos Android e reprodutores de carro não reconhecem a extensão .m4v. A conversão para MP4 resolve esse problema instantaneamente.'
    ],
    sourceDetailsTitle: 'Formato M4V',
    sourceDetails: ['Específico do ecossistema Apple', 'Pode falhar em celulares Android'],
    targetDetailsTitle: 'Formato MP4',
    targetDetails: ['totalmente universal em qualquer aparelho', 'Fácil reprodução web'],
    faqs: [
      { question: 'A conversão de M4V para MP4 é rápida?', answer: 'Sim, a conversão ocorre em poucos segundos diretamente na memória do seu aparelho.' }
    ]
  },

  'converter-rmvb-para-mp4': {
    slug: 'converter-rmvb-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '📼 Vídeos RealMedia & RMVB',
    h1Prefix: 'Converter',
    h1Highlight: 'RMVB para MP4',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter RMVB para MP4 Online Grátis — RealMedia para MP4',
    metaDescription: 'Converta vídeos RMVB e RM antigos para MP4 universal no navegador. totalmente gratuito, sem upload e sem marcas d’água.',
    heroSubtitle: 'Modernize filmes e animes antigos em formato RealMedia (.rmvb) para o padrão universal MP4.',
    dropzoneTitle: 'Arraste seu arquivo .RMVB aqui para converter para MP4',
    keywords: ['converter rmvb para mp4', 'rmvb para mp4 online', 'rmvb converter', 'converter rm para mp4'],
    explainerTitle: 'Por que converter arquivos RMVB para MP4?',
    explainerParagraphs: [
      'O formato RMVB (RealMedia Variable Bitrate) foi extremamente popular para download de animes e filmes nos anos 2000, mas hoje nenhum celular ou Smart TV abre arquivos RMVB nativamente. A conversão para MP4 traz suas mídias de volta à vida.'
    ],
    sourceDetailsTitle: 'Formato RMVB',
    sourceDetails: ['Requer codecs RealPlayer antigos', 'Incompatível com celulares modernos'],
    targetDetailsTitle: 'Formato MP4',
    targetDetails: ['Compatível com todos os aparelhos atuais', 'Reprodução nítida em qualquer tela'],
    faqs: [
      { question: 'Consigo converter filmes antigos em RMVB?', answer: 'Sim! Nosso motor WebAssembly decodifica o formato RealMedia e converte para MP4 moderno com perfeição.' }
    ]
  },

  'converter-divx-para-mp4': {
    slug: 'converter-divx-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '🎬 Vídeos DivX & DVD Rips',
    h1Prefix: 'Converter',
    h1Highlight: 'DivX para MP4',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter DivX para MP4 Online Grátis — Rápido e Seguro',
    metaDescription: 'Converta vídeos no formato DivX para MP4 universal no navegador. Sem cadastro, sem upload de arquivos e totalmente gratuito.',
    heroSubtitle: 'Atualize vídeos codificados em DivX para o formato moderno MP4 H.264 compatível com todos os celulares.',
    dropzoneTitle: 'Arraste seu arquivo .DIVX aqui para converter para MP4',
    keywords: ['converter divx para mp4', 'divx para mp4 online', 'divx converter'],
    explainerTitle: 'Como converter vídeos DivX para MP4?',
    explainerParagraphs: [
      'O codec DivX foi pioneiro na compressão de DVDs em arquivos menores. Hoje, o formato H.264 MP4 oferece qualidade superior e suporte nativo em qualquer tela moderna.'
    ],
    sourceDetailsTitle: 'Codec DivX',
    sourceDetails: ['Incompatível com navegadores web', 'Requer reprodutores dedicados'],
    targetDetailsTitle: 'Codec H.264 MP4',
    targetDetails: ['Roda direto no navegador e celular', 'Alta nitidez de imagem'],
    faqs: [
      { question: 'O MP4 é melhor que o DivX?', answer: 'Sim. O MP4 com codec H.264 oferece maior compressão visual e funciona em qualquer dispositivo sem necessidade de codecs extras.' }
    ]
  },

  'converter-xvid-para-mp4': {
    slug: 'converter-xvid-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '📽️ Vídeos XviD (MPEG-4 ASP)',
    h1Prefix: 'Converter',
    h1Highlight: 'XviD para MP4',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter XviD para MP4 Online Grátis — Sem Perda de Qualidade',
    metaDescription: 'Transforme vídeos no formato XviD em MP4 universal no navegador. totalmente gratuito, sem upload de arquivos e sem filas.',
    heroSubtitle: 'Converta gravações e filmes em XviD para o padrão moderno MP4 com áudio AAC cristalino.',
    dropzoneTitle: 'Arraste seu arquivo .XVID aqui para converter para MP4',
    keywords: ['converter xvid para mp4', 'xvid para mp4 online', 'xvid converter'],
    explainerTitle: 'Por que converter XviD para MP4?',
    explainerParagraphs: [
      'O XviD é um codec de código aberto antigo. A conversão para MP4 H.264 garante que seu vídeo possa ser enviado pelo WhatsApp, postado no Instagram ou assistido em qualquer Smart TV.'
    ],
    sourceDetailsTitle: 'Codec XviD',
    sourceDetails: ['Incompatível com iPhones e Smart TVs novas'],
    targetDetailsTitle: 'Codec MP4 H.264',
    targetDetails: ['Compatibilidade absoluta em todos os aparelhos'],
    faqs: [
      { question: 'Preciso instalar programas para converter XviD?', answer: 'Não! Todo o processo roda totalmente no seu navegador sem instalar nada.' }
    ]
  },

  'converter-ogv-para-mp4': {
    slug: 'converter-ogv-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '🐧 Ogg Theora Vídeo para MP4',
    h1Prefix: 'Converter',
    h1Highlight: 'OGV para MP4',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter OGV para MP4 Online Grátis — Ogg Video para MP4',
    metaDescription: 'Converta arquivos de vídeo OGV (Ogg Theora) para MP4 universal no navegador sem upload. Rápido, seguro e gratuito.',
    heroSubtitle: 'Transforme arquivos de vídeo OGV de sistemas Linux e páginas web no formato universal MP4.',
    dropzoneTitle: 'Arraste seu arquivo .OGV aqui para converter para MP4',
    keywords: ['converter ogv para mp4', 'ogv para mp4 online', 'ogv converter'],
    explainerTitle: 'O que é o formato OGV e por que converter para MP4?',
    explainerParagraphs: [
      'O contêiner OGV utiliza o codec de vídeo Theora e áudio Vorbis. Como o suporte ao OGV é restrito a navegadores específicos, converter para MP4 torna o vídeo executável em qualquer player comercial.'
    ],
    sourceDetailsTitle: 'Formato OGV',
    sourceDetails: ['Incompatível com Safari e iPhones', 'Pouco suportado em editores de vídeo'],
    targetDetailsTitle: 'Formato MP4',
    targetDetails: ['Abre no iPhone, Mac, Windows e Android', 'Suporte universal em editores'],
    faqs: [
      { question: 'O formato OGV abre no iPhone?', answer: 'Não. O iOS não suporta Ogg Theora. É necessário converter para MP4.' }
    ]
  },

  'converter-mxf-para-mp4': {
    slug: 'converter-mxf-para-mp4',
    targetFormat: 'mp4',
    initialPreset: 'high_quality',
    badge: '🎥 Vídeos Profissionais Broadcast & TV',
    h1Prefix: 'Converter',
    h1Highlight: 'MXF para MP4',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Converter MXF para MP4 Online Grátis — Material Exchange Format',
    metaDescription: 'Converta vídeos profissionais MXF de câmeras Sony, Canon e Panasonic para MP4 no navegador. Rápido, privado e sem marcas d’água.',
    heroSubtitle: 'Transforme gravações profissionais MXF em arquivos MP4 leves e nítidos para envio a clientes e revisão rápida.',
    dropzoneTitle: 'Arraste seu arquivo .MXF aqui para converter para MP4',
    keywords: ['converter mxf para mp4', 'mxf para mp4 online', 'mxf converter'],
    explainerTitle: 'Como converter vídeos de câmeras profissionais MXF para MP4?',
    explainerParagraphs: [
      'O formato MXF (Material eXchange Format) é o padrão de gravação de emissoras de televisão e câmeras broadcast profissionais (como Sony FX6, FX9, Canon C70). Por serem extremamente pesados, convertê-los para MP4 facilita a prévia e o envio para clientes.'
    ],
    sourceDetailsTitle: 'Formato MXF Broadcast',
    sourceDetails: ['Arquivos gigantescos', 'Não abre em celulares sem apps profissionais'],
    targetDetailsTitle: 'Formato MP4 Otimizado',
    targetDetails: ['Tamanho compacto para prévia e envio', 'Reprodução perfeita em qualquer celular'],
    faqs: [
      { question: 'Consigo converter arquivos de câmeras de cinema MXF?', answer: 'Sim! Nosso motor WebAssembly decodifica contêineres MXF profissionais e gera arquivos MP4 leves mantendo alta nitidez.' }
    ]
  },

  'converter-video-iphone': {
    slug: 'converter-video-iphone',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '📱 Otimizado para iPhone & iPad (iOS)',
    h1Prefix: 'Conversor de Vídeo para',
    h1Highlight: 'iPhone e iOS',
    h1Suffix: 'Online',
    metaTitle: 'Conversor de Vídeo para iPhone Online Grátis — Formato Compatível',
    metaDescription: 'Converta qualquer vídeo para o formato compatível com iPhone e iPad (MP4 H.264 + AAC). totalmente no navegador, sem upload e seguro.',
    heroSubtitle: 'Converta vídeos de qualquer formato para rodar perfeitamente no reprodutor nativo e no rolo de câmera do iPhone.',
    dropzoneTitle: 'Arraste o vídeo para formatar para o iPhone',
    keywords: ['converter video para iphone', 'video converter iphone', 'conversor de video para celular iphone'],
    explainerTitle: 'Qual o melhor formato de vídeo para o iPhone?',
    explainerParagraphs: [
      'O iOS suporta com máxima eficiência vídeos em contêiner MP4 codificados em H.264 com áudio AAC estéreo. Ao usar nosso conversor, o vídeo é calibrado para salvar direto no app Fotos sem incompatibilidades.'
    ],
    sourceDetailsTitle: 'Formatos Incompatíveis com iPhone',
    sourceDetails: ['Vídeos MKV, AVI, WMV, FLV', 'Não salvam no Rolo de Câmera nativo'],
    targetDetailsTitle: 'Padrão Apple iOS',
    targetDetails: ['Salva direto no app Fotos', 'Compatível com AirDrop e WhatsApp'],
    faqs: [
      { question: 'Como colocar vídeos no iPhone sem programas extras?', answer: 'Basta converter seu arquivo para MP4 em nosso site e salvar o vídeo diretamente no seu rolo de câmera.' }
    ]
  },

  'converter-video-android': {
    slug: 'converter-video-android',
    targetFormat: 'mp4',
    initialPreset: 'balanced',
    badge: '🤖 Otimizado para Android & WhatsApp',
    h1Prefix: 'Conversor de Vídeo para',
    h1Highlight: 'Android',
    h1Suffix: 'Online Grátis',
    metaTitle: 'Conversor de Vídeo para Android Online Grátis — Todos os Modelos',
    metaDescription: 'Converta qualquer arquivo de vídeo para o formato ideal para celulares Android (Samsung, Motorola, Xiaomi). Rápido, sem cadastro e totalmente privado.',
    heroSubtitle: 'Transforme vídeos pesados ou incompatíveis no formato universal MP4 otimizado para celulares Android.',
    dropzoneTitle: 'Arraste o vídeo para formatar para Android',
    keywords: ['converter video para android', 'conversor de video android', 'video converter android'],
    explainerTitle: 'Como garantir que qualquer vídeo rode no Android?',
    explainerParagraphs: [
      'Alguns aparelhos Android possuem limitações para reproduzir formatos legados como MOV da Apple ou contêineres MKV com trilhas de som incompatíveis. Converter para MP4 garante execução suave e sem travamentos.'
    ],
    sourceDetailsTitle: 'Vídeos Incompatíveis',
    sourceDetails: ['Podem travar no player padrão', 'Demoram para enviar no WhatsApp'],
    targetDetailsTitle: 'Vídeo Otimizado Android',
    targetDetails: ['Execução instantânea na Galeria', 'Envio veloz no 4G/5G'],
    faqs: [
      { question: 'Qual o melhor formato para celulares Android?', answer: 'O formato padrão MP4 com codec H.264 é o mais leve e compatível com todos os modelos Android.' }
    ]
  },

  'conversor-de-audio': {
    slug: 'conversor-de-audio',
    targetFormat: 'mp3',
    initialPreset: 'audio_mp3',
    badge: '🎧 Conversor de Áudio Universal & Extração MP3',
    h1Prefix: 'Conversor de',
    h1Highlight: 'Áudio Online',
    h1Suffix: 'Grátis',
    metaTitle: 'Conversor de Áudio Online Grátis — Transcodificação e MP3',
    metaDescription: 'Converta arquivos de áudio (WAV, FLAC, M4A, OGG, AAC) e extraia som de vídeos para MP3 a 192 kbps. totalmente no navegador, sem upload e sem cadastro.',
    heroSubtitle: 'Transforme gravações, faixas musicais e trilhas sonoras de vídeos no padrão universal MP3 com alta nitidez estéreo. Processamento totalmente no seu navegador.',
    dropzoneTitle: 'Arraste qualquer arquivo de áudio ou vídeo para converter para MP3',
    keywords: ['conversor de audio', 'conversor de áudio', 'conversor de audio online', 'converter audio para mp3', 'conversor de áudio gratuito'],
    explainerTitle: 'Como funciona o conversor de áudio universal no navegador?',
    explainerParagraphs: [
      'O nosso conversor de áudio utiliza a biblioteca FFmpeg compilada para WebAssembly para processar arquivos de som e vídeo diretamente na memória RAM do seu celular ou computador. Isso significa que você pode converter formatos pesados ou incompatíveis (como WAV sem perdas, FLAC, M4A do iPhone, OGG ou AAC) para o contêiner universal MP3 a 192 kbps sem esperar filas de upload.',
      'Ao contrário de conversores tradicionais que enviam suas gravações para servidores remotos, nenhuma informação sai do seu dispositivo, garantindo velocidade máxima e privacidade total em conformidade com a LGPD.'
    ],
    sourceDetailsTitle: 'Formatos de Entrada Suportados',
    sourceDetails: [
      'Áudio: WAV, FLAC, M4A, OGG, AAC, WMA',
      'Vídeo: MP4, MOV, MKV, AVI, WebM, FLV',
      'Gravações de voz e notas de celular'
    ],
    targetDetailsTitle: 'Saída em MP3 Universal (192 kbps)',
    targetDetails: [
      'Compatível com todos os celulares, TVs e rádios',
      'Codificação LAME estéreo de alta fidelidade',
      'Redução drástica do tamanho com áudio nítido'
    ],
    faqs: [
      {
        question: 'Quais tipos de arquivo de áudio posso converter?',
        answer: 'Você pode converter arquivos WAV, FLAC, M4A, AAC, OGG, WMA, AIFF e também extrair faixas de áudio de vídeos em MP4, MOV, MKV, AVI e WebM.'
      },
      {
        question: 'O conversor de áudio é realmente gratuito e sem limites?',
        answer: 'Sim. O ConversordeVideo.com é totalmente gratuito, sem limite diário de conversões, sem necessidade de cadastro e sem marcas d’água.'
      },
      {
        question: 'Minhas gravações de voz ou músicas são enviadas para algum servidor?',
        answer: 'Não. O processamento é executado inteiramente na memória RAM do seu próprio navegador através de WebAssembly. Seus arquivos nunca são transmitidos pela internet.'
      },
      {
        question: 'Como converter áudio no celular Android ou iPhone?',
        answer: 'Basta abrir o site no navegador do seu smartphone (Chrome no Android ou Safari no iOS), selecionar o arquivo de áudio ou vídeo e clicar em converter para baixar o MP3.'
      }
    ]
  },

  'compressor-de-video': {
    slug: 'compressor-de-video',
    targetFormat: 'mp4',
    initialPreset: 'compress_balanced',
    badge: '⚡ Redução de até 80% do Tamanho sem Upload',
    h1Prefix: 'Compressor de Vídeo',
    h1Highlight: 'Online Grátis',
    h1Suffix: 'e Sem Perda de Qualidade',
    metaTitle: 'Compressor de Vídeo Online Grátis — Reduzir Tamanho sem Upload',
    metaDescription: 'Comprima vídeos MP4, MOV e outros formatos online diretamente no seu navegador. Reduza até 80% do tamanho de arquivo sem perder nitidez, sem upload e sem cadastro.',
    heroSubtitle: 'Reduza o peso dos seus vídeos em segundos para enviar por WhatsApp, e-mail e economizar espaço. Processamento totalmente local no seu aparelho.',
    dropzoneTitle: 'Arraste o vídeo que você deseja comprimir',
    keywords: ['compressor de video', 'compressor de video online', 'compressor de video gratis', 'comprimir video online', 'compactar video', 'comprimir vídeo online grátis', 'compactar video mp4', 'compactar video para whatsapp', 'compactar video online', 'comprimir video online gratis', 'comprimir vídeo online', 'reduzir tamanho do video', 'reduzir tamanho do vídeo', 'compactar vídeo mp4', 'compactar video gratis', 'compactar video sem perder qualidade', 'compactar vídeo para whatsapp', 'compactar vídeo online', 'como compactar video', 'comprimir mp4', 'comprimir mp4 online', 'comprimir mp4 gratis', 'reduzir tamanho mp4'],
    explainerTitle: 'Como funciona a compressão de vídeo inteligente no navegador?',
    explainerParagraphs: [
      'Celulares e câmeras gravam vídeos com taxas de bits elevadas que geram arquivos pesados sem ganho visível de nitidez na maioria das telas.',
      'Nosso compressor utiliza a tecnologia FFmpeg WebAssembly para reescalar e reencodificar o vídeo com fator de taxa constante (CRF), eliminando megabytes redundantes sem criar artefatos ou desfoque na imagem.',
      'Ao contrário de ferramentas convencionais que exigem o upload do arquivo para servidores remotos, todo o cálculo é executado na memória RAM do seu próprio dispositivo, garantindo velocidade instantânea e privacidade total.',
      'Para arquivos MP4 especificamente, o compressor aplica o perfil H.264 High com cabeçalho faststart e áudio AAC otimizado, reduzindo o tamanho em até 80% mantendo a compatibilidade universal com WhatsApp, e-mail, Smart TVs e navegadores.'
    ],
    sourceDetailsTitle: 'Vídeo Pesado Original',
    sourceDetails: [
      'Taxa de bits (bitrate) excessiva',
      'Arquivos de 100MB a 1GB difíceis de compartilhar',
      'Limite excedido no WhatsApp e e-mails'
    ],
    targetDetailsTitle: 'Vídeo Comprimido & Otimizado',
    targetDetails: [
      'Redução média de 50% a 80% do tamanho original',
      'Nitidez preservada em 1080p ou 720p HD',
      'Carregamento veloz e compatibilidade universal'
    ],
    faqs: [
      {
        question: 'O compressor reduz a qualidade visual do vídeo?',
        answer: 'Nossos algoritmos utilizam compressão perceptual (CRF 26/28), que reduz drasticamente o tamanho do arquivo removendo dados redundantes imperceptíveis ao olho humano, preservando a definição de rostos e textos.'
      },
      {
        question: 'Meus vídeos são enviados para a nuvem durante a compressão?',
        answer: 'Não. Todo o processamento ocorre totalmente no seu próprio navegador via WebAssembly. Nenhum byte do seu arquivo sai do seu celular ou computador.'
      },
      {
        question: 'Qual é o limite máximo de tamanho de arquivo aceito?',
        answer: 'Não há limite imposto pelo servidor. Como a compressão utiliza a memória RAM do seu aparelho, vídeos de até 300MB a 500MB são processados com facilidade na maioria dos dispositivos modernos.'
      },
      {
        question: 'Posso comprimir vídeos diretamente do celular?',
        answer: 'Sim! A ferramenta é totalmente compatível com navegadores móveis no Android (Chrome) e iPhone/iPad (Safari).'
      },
      {
        question: 'Como comprimir um arquivo MP4 online sem instalar programas?',
        answer: 'Basta arrastar o arquivo MP4 para o conversor e selecionar a predefinição de compressão. O motor WebAssembly reduz o tamanho recodificando o vídeo com bitrate otimizado e áudio AAC, sem necessidade de instalação.'
      },
      {
        question: 'É possível reduzir o tamanho do vídeo sem perder muita qualidade?',
        answer: 'Sim. Nosso compressor utiliza o método CRF (Constant Rate Factor), que prioriza a preservação de detalhes em cenas com rostos e textos, removendo apenas dados redundantes imperceptíveis ao olho humano.'
      }
    ]
  },

  'compressor-de-video-mp4': {
    slug: 'compressor-de-video-mp4',
    targetFormat: 'mp4',
    initialPreset: 'compress_balanced',
    badge: '🎬 Compressão MP4 de Alta Fidelidade (H.264)',
    h1Prefix: 'Compressor de Vídeo',
    h1Highlight: 'MP4 Online',
    h1Suffix: 'Grátis',
    metaTitle: 'Compressor de Vídeo MP4 Online Grátis — Diminuir Tamanho do MP4',
    metaDescription: 'Comprima arquivos de vídeo MP4 online sem perder resolução. Reduza megabytes mantendo áudio AAC cristalino e vídeo H.264 rápido para web.',
    heroSubtitle: 'Diminua o tamanho de qualquer vídeo MP4 sem comprometer a qualidade da imagem. Rápido, totalmente privado e sem marcas d’água.',
    dropzoneTitle: 'Arraste o arquivo MP4 para comprimir',
    keywords: ['compressor de video mp4', 'compressor de vídeo mp4', 'comprimir mp4', 'diminuir tamanho de mp4'],
    explainerTitle: 'Por que comprimir arquivos MP4 com codec H.264 e Faststart?',
    explainerParagraphs: [
      'O contêiner MP4 é o padrão mais amplamente aceito no mundo, mas vídeos exportados por editores ou gravados em smartphones frequentemente possuem bitrates de 20Mbps a 50Mbps — muito acima do necessário para visualização online.',
      'Nossa ferramenta reescreve a faixa de vídeo com perfil H.264 otimizado e adiciona a flag faststart no cabeçalho do arquivo, permitindo que o vídeo comece a rodar instantaneamente na internet antes mesmo de concluir o download completo.'
    ],
    sourceDetailsTitle: 'MP4 Original',
    sourceDetails: [
      'Taxa de dados muito pesada para upload',
      'Pode travar em conexões móveis 4G/5G',
      'Consome muito espaço em disco'
    ],
    targetDetailsTitle: 'MP4 Comprimido',
    targetDetails: [
      'Cabeçalho faststart para streaming imediato',
      'Tamanho otimizado para e-mail e mensageiros',
      'Áudio AAC estéreo preservado'
    ],
    faqs: [
      {
        question: 'Como diminuir o tamanho de um vídeo MP4 sem perder qualidade?',
        answer: 'Basta arrastar o MP4 para o conversor e escolher a predefinição "Compressão Média". A ferramenta ajustará o bitrate para reter os detalhes com metade do tamanho em disco.'
      },
      {
        question: 'O arquivo MP4 comprimido funciona em TVs e iPhones?',
        answer: 'Sim. O formato resultante é um MP4 universal padrão H.264 com áudio AAC, compatível com todos os aparelhos e sistemas operacionais.'
      }
    ]
  },

  // Audio Converter Cluster (High Search Volume Keywords)
  'conversor-de-audio-para-mp3': {
    slug: 'conversor-de-audio-para-mp3',
    targetFormat: 'mp3',
    initialPreset: 'audio_mp3',
    badge: '🎵 Alta Fidelidade Estéreo • 192 kbps LAME',
    h1Prefix: 'Conversor de Áudio para',
    h1Highlight: 'MP3 Online',
    h1Suffix: 'Grátis',
    metaTitle: 'Conversor de Áudio para MP3 Online Grátis — Rápido e Seguro',
    metaDescription: 'Converta qualquer arquivo de som para MP3 com codificação LAME 192 kbps estéreo. totalmente no navegador, sem upload para a nuvem e totalmente gratuito.',
    heroSubtitle: 'Transforme gravações de voz, músicas e áudios em MP3 compatível com todos os players. Sem instalar programas e sem fila de espera.',
    dropzoneTitle: 'Arraste seu arquivo de áudio aqui para converter para MP3',
    keywords: ['conversor de audio para mp3', 'conversor de áudio para mp3', 'converter audio para mp3', 'transformar audio em mp3'],
    explainerTitle: 'Por que converter arquivos de áudio para o padrão MP3?',
    explainerParagraphs: [
      'O MP3 (MPEG-1 Audio Layer III) continua sendo o formato de áudio mais universal e amplamente reconhecido no mundo. Enquanto formatos como WAV e FLAC ocupam dezenas de megabytes e arquivos M4A da Apple frequentemente apresentam falhas em aparelhos antigos, o MP3 garante reprodução instantânea em qualquer som de carro, caixa bluetooth, computador ou celular.',
      'Nosso conversor utiliza a consagrada biblioteca LAME MP3 configurada a uma taxa constante de 192 kbps estéreo, oferecendo o equilíbrio ideal entre preservação acústica cristalina e economia de espaço de armazenamento.'
    ],
    sourceDetailsTitle: 'Formatos de Áudio Variados',
    sourceDetails: [
      'Arquivos WAV pesados ou M4A incompatíveis',
      'Falhas de reprodução em aparelhos de som legados',
      'Dificuldade para anexar em e-mails e mensagens'
    ],
    targetDetailsTitle: 'Padrão MP3 Estéreo (192 kbps)',
    targetDetails: [
      'totalmente universal em qualquer reprodutor ou TV',
      'Tamanho compacto com fidelidade acústica',
      'Fácil de compartilhar e arquivar sem perdas visíveis'
    ],
    faqs: [
      {
        question: 'Qual a taxa de bits utilizada na conversão para MP3?',
        answer: 'Exportamos com taxa de bits constante (CBR) de 192 kbps estéreo a 44.1/48 kHz, o que garante excelente nitidez para músicas, podcasts e locuções.'
      },
      {
        question: 'Posso converter áudio gravado no WhatsApp ou no gravador do iPhone?',
        answer: 'Sim! Nosso conversor decodifica áudios em formato Opus/OGG do WhatsApp e gravações M4A/AAC do iPhone, transformando-os em arquivos MP3 universais.'
      },
      {
        question: 'A conversão de áudio para MP3 é ilimitada?',
        answer: 'Sim. Como todo o cálculo é realizado localmente no seu computador ou celular via WebAssembly, não cobramos assinaturas nem impomos limites de uso.'
      },
      {
        question: 'Preciso instalar codecs ou aplicativos extras?',
        answer: 'Não é necessário instalar nada. Todo o mecanismo de áudio roda de forma nativa e segura dentro do seu navegador web.'
      }
    ]
  },

  // Video to Audio Cluster (High Volume Brazil Keywords)
  'converter-video-em-audio': {
    slug: 'converter-video-em-audio',
    targetFormat: 'mp3',
    initialPreset: 'audio_mp3',
    badge: '🎵 Converter Qualquer Vídeo em Áudio MP3',
    h1Prefix: 'Converter Vídeo em',
    h1Highlight: 'Áudio Online',
    h1Suffix: 'Grátis',
    metaTitle: 'Converter Vídeo em Áudio Online Grátis — Extrair MP3 Rápido e Privado',
    metaDescription: 'Converta qualquer vídeo em áudio MP3 de 192 kbps no navegador. Rápido, gratuito, sem upload e sem cadastro. Funciona no celular e computador.',
    heroSubtitle: 'Transforme gravações de vídeo em áudio MP3 estéreo de alta fidelidade em segundos. Processamento totalmente local no seu navegador, sem enviar arquivos.',
    dropzoneTitle: 'Arraste o vídeo para converter em áudio MP3',
    keywords: ['converter video em audio', 'converter vídeo em áudio', 'converter vídeo em áudio grátis', 'converter video em áudio', 'converter vídeo em áudio online', 'como converter video em audio', 'converter vídeo em áudio mp3', 'converter video em audio gratis', 'como converter vídeo em áudio'],
    explainerTitle: 'Como converter vídeo em áudio MP3 diretamente no navegador?',
    explainerParagraphs: [
      'Converter vídeo em áudio é uma das tarefas mais comuns do dia a dia digital: você gravou uma palestra, uma reunião, um show ao vivo ou um vídeo de aula no celular, mas precisa apenas do som para escutar no carro, no fone bluetooth ou no aparelho de som sem gastar dados nem bateria com a tela ligada.',
      'Ao utilizar nosso conversor de vídeo para áudio, o motor FFmpeg WebAssembly descarta toda a trilha visual do arquivo e codifica exclusivamente a faixa de som original no padrão MP3 estéreo de 192 kbps com a consagrada biblioteca LAME. O resultado é um arquivo de áudio compacto — geralmente com redução de até 95% do tamanho — mantendo a nitidez de vozes, instrumentos e efeitos sonoros.',
      'Todo o processamento ocorre na memória RAM do seu próprio dispositivo, garantindo privacidade absoluta e velocidade instantânea. Seus vídeos nunca são enviados para servidores e você pode até desconectar a internet após carregar a página.'
    ],
    sourceDetailsTitle: 'Arquivo de Vídeo Original',
    sourceDetails: [
      'Contém imagem e áudio juntos em um contêiner pesado',
      'Consome bateria e dados para reproduzir o vídeo completo',
      'Desnecessário quando você só precisa ouvir o conteúdo',
      'Difícil de enviar por e-mail ou mensageiros'
    ],
    targetDetailsTitle: 'Áudio MP3 Convertido (192 kbps)',
    targetDetails: [
      'Somente a trilha sonora nítida e estéreo',
      'Arquivo até 95% mais leve que o vídeo original',
      'Toca em qualquer celular, rádio de carro e fone bluetooth',
      'Escuta em segundo plano com a tela apagada'
    ],
    proTip: 'Para gravações de voz e palestras, a taxa de 192 kbps oferece qualidade superior ao necessário. Se preferir arquivos ainda menores, utilize a taxa de 128 kbps no codec LAME sem perda perceptível em conteúdo de fala.',
    faqs: [
      {
        question: 'Como converter um vídeo em áudio MP3 grátis?',
        answer: 'Basta arrastar o arquivo de vídeo (MP4, MOV, MKV, AVI, WebM) para o conversor, selecionar o formato MP3 e clicar em Converter. O áudio é extraído instantaneamente no seu próprio navegador sem upload.'
      },
      {
        question: 'Converter vídeo em áudio funciona no celular?',
        answer: 'Sim! A ferramenta é totalmente compatível com navegadores móveis no Android (Chrome) e iPhone/iPad (Safari). Basta acessar o site e selecionar o vídeo da sua galeria.'
      },
      {
        question: 'Posso converter vídeos em áudio do YouTube?',
        answer: 'Sim, desde que o vídeo já esteja salvo no armazenamento do seu aparelho (MP4 ou WebM). Nossa ferramenta opera sobre arquivos locais e não faz downloads de URLs externas.'
      },
      {
        question: 'Qual a diferença entre converter vídeo em áudio e extrair áudio de vídeo?',
        answer: 'Na prática, são operações equivalentes: ambas isolam a faixa de som do arquivo de vídeo e a salvam como MP3. Nosso conversor oferece ferramentas dedicadas para cada fluxo de trabalho.'
      },
      {
        question: 'Preciso me cadastrar ou pagar para converter vídeo em áudio?',
        answer: 'Não. O serviço é totalmente gratuito, sem limite de conversões, sem exigência de e-mail e sem marcas d’água no arquivo de saída.'
      }
    ]
  },

  // Audio Extraction Cluster (High Volume Brazil Keywords)
  'extrair-audio-de-video': {
    slug: 'extrair-audio-de-video',
    targetFormat: 'mp3',
    initialPreset: 'audio_mp3',
    badge: '🎧 Extração Sonora Direta & Sem Perdas',
    h1Prefix: 'Extrair Áudio de',
    h1Highlight: 'Vídeo Online',
    h1Suffix: 'Grátis',
    metaTitle: 'Extrair Áudio de Vídeo Online Grátis — Isolar Faixa de Som em MP3',
    metaDescription: 'Extraia o áudio de qualquer arquivo de vídeo (MP4, MOV, MKV, AVI) em MP3 de 192 kbps diretamente no navegador. Rápido, totalmente gratuito e privado.',
    heroSubtitle: 'Isole a faixa de áudio de vídeos, palestras e gravações em MP3 cristalino sem carregar o peso da imagem. Processamento local e seguro.',
    dropzoneTitle: 'Arraste seu arquivo de vídeo para extrair o áudio',
    keywords: ['extrair audio de video', 'extrair áudio de vídeo', 'como extrair audio de video', 'extrair audio de video online', 'extrair audio de video do youtube', 'extrair audio de video youtube', 'extrair áudio de vídeo youtube', 'extrair áudio de vídeo online grátis', 'extrair áudio de vídeo link', 'extrair áudio de vídeo grátis', 'extrair áudio de vídeo online', 'extrair audio de vídeo', 'extrair áudio de vídeo do youtube', 'extrair audio de video do instagram', 'extrair áudio de vídeo instagram', 'extrair audio de video gratis'],
    explainerTitle: 'Como isolar e extrair o som de qualquer arquivo de vídeo?',
    explainerParagraphs: [
      'Ao gravar uma apresentação, aula ou evento, a câmera registra imagens e sons em um mesmo contêiner multimídia. Quando você precisa apenas do áudio para criar um episódio de podcast, estudar ou ouvir música, carregar o vídeo completo é ineficiente.',
      'A extração de áudio isola a trilha sonora original e a converte para o formato MP3 estéreo de 192 kbps. Essa operação elimina megabytes desnecessários e gera um arquivo leve e pronto para reprodução em qualquer fone ou reprodutor de áudio.',
      'Além de vídeos armazenados no celular, você pode extrair áudio de vídeos salvos do YouTube, Instagram ou qualquer rede social. Basta que o arquivo de vídeo esteja no seu dispositivo (MP4, WebM, MOV, MKV) e o conversor processará localmente sem enviar nada pela internet.'
    ],
    sourceDetailsTitle: 'Vídeo Original com Faixa Visual',
    sourceDetails: [
      'Gasto excessivo de dados e armazenamento',
      'Exige tela ligada para reprodução na maioria dos apps',
      'Difícil de transferir rapidamente via mensageiros'
    ],
    targetDetailsTitle: 'Áudio Isolado em MP3',
    targetDetails: [
      'Arquivo compacto com até 95% menos tamanho',
      'Áudio estéreo de alta fidelidade (192 kbps)',
      'Escuta contínua com tela apagada e economia de bateria'
    ],
    faqs: [
      {
        question: 'Como extrair o áudio de um vídeo sem perder qualidade?',
        answer: 'Nossa ferramenta extrai a faixa de som e a codifica com o codec LAME MP3 em 192 kbps de alta taxa de bits, preservando a nitidez de agudos e graves da gravação.'
      },
      {
        question: 'Quais formatos de vídeo são aceitos para extrair áudio?',
        answer: 'Você pode extrair som de vídeos nos formatos MP4, MOV, MKV, AVI, WebM, WMV, FLV, 3GP, M2TS, MTS, TS, VOB e muitos outros.'
      },
      {
        question: 'Posso extrair o áudio de arquivos de vídeo grandes?',
        answer: 'Sim. Como o processamento ocorre na memória RAM do seu aparelho via WebAssembly, não há restrições de upload de servidor.'
      },
      {
        question: 'A ferramenta funciona no celular Android e iPhone?',
        answer: 'Sim, basta abrir a página no navegador do seu smartphone (Chrome ou Safari) e escolher o vídeo da sua galeria.'
      },
      {
        question: 'Posso extrair áudio de vídeos salvos do Instagram?',
        answer: 'Sim! Se o vídeo do Instagram ou Reels já estiver salvo no armazenamento do seu celular, basta arrastá-lo para o conversor. A trilha de áudio será extraída localmente em MP3.'
      },
      {
        question: 'Como extrair áudio de vídeo a partir de um link?',
        answer: 'Nossa ferramenta processa arquivos de vídeo presentes no seu dispositivo, não URLs diretamente. Para vídeos da web, salve primeiro o arquivo no seu celular ou computador e depois arraste-o para o conversor.'
      }
    ]
  },

  'extrair-audio-de-video-do-youtube': {
    slug: 'extrair-audio-de-video-do-youtube',
    targetFormat: 'mp3',
    initialPreset: 'audio_mp3',
    badge: '🔴 Para Gravações e Clipes Salvos do YouTube',
    h1Prefix: 'Extrair Áudio de Vídeo do',
    h1Highlight: 'YouTube Online',
    h1Suffix: 'em MP3',
    metaTitle: 'Extrair Áudio de Vídeo do YouTube Online — Salvar Som em MP3',
    metaDescription: 'Extraia o áudio de vídeos e transmissões baixadas do YouTube em formato MP3 de 192 kbps. totalmente privado no navegador e sem upload de arquivos.',
    heroSubtitle: 'Converta gravações e clipes do YouTube salvos no seu aparelho em arquivos de som MP3 leves para escutar no celular ou no carro.',
    dropzoneTitle: 'Arraste o vídeo salvo do YouTube para extrair o áudio MP3',
    keywords: ['extrair audio de video do youtube', 'extrair audio de video youtube', 'extrair áudio de vídeo youtube', 'extrair áudio de vídeo do youtube', 'como extrair audio de video do youtube'],
    explainerTitle: 'Como extrair a faixa sonora de gravações do YouTube armazenadas no seu computador?',
    explainerParagraphs: [
      'Muitos usuários mantêm clipes, entrevistas, videoaulas e apresentações baixadas do YouTube em seus aparelhos nos contêineres MP4 ou WebM. Para transformar esses vídeos em arquivos de áudio portáteis, nossa ferramenta isola a faixa sonora em MP3 de 192 kbps estéreo.',
      'Atenção: este utilitário opera exclusivamente sobre arquivos de mídia já presentes no seu armazenamento local. Nenhum dado é baixado de servidores externos e seus arquivos não são enviados para a nuvem.'
    ],
    sourceDetailsTitle: 'Vídeo Baixado do YouTube',
    sourceDetails: [
      'Tamanho excessivo ocupando espaço na memória',
      'Reprodução exige player de vídeo compatível',
      'Desconfortável para escutar enquanto faz outras tarefas'
    ],
    targetDetailsTitle: 'Áudio MP3 Extraído',
    targetDetails: [
      'Redução de até 95% do peso do arquivo',
      'Toca em qualquer celular com tela bloqueada',
      'Ideal para pendrives, som de carro e fones bluetooth'
    ],
    faqs: [
      {
        question: 'Esta ferramenta extrai áudio diretamente de um link ou URL do YouTube?',
        answer: 'Não. Nossa ferramenta trabalha com arquivos locais já salvos no seu aparelho (MP4, WebM, etc.), extraindo a trilha sonora sem conexão remota.'
      },
      {
        question: 'Qual é a taxa de bits do áudio extraído de vídeos do YouTube?',
        answer: 'Codificamos a trilha em MP3 estéreo a 192 kbps com a biblioteca LAME, garantindo excelente nitidez sonora.'
      },
      {
        question: 'Posso extrair o áudio de vídeos verticais do YouTube Shorts?',
        answer: 'Sim! Todos os vídeos salvos do YouTube Shorts são aceitos normalmente.'
      },
      {
        question: 'O arquivo de vídeo original do YouTube é danificado?',
        answer: 'Não. O arquivo original permanece inalterado no seu dispositivo e um novo arquivo MP3 é gerado para download.'
      }
    ]
  },

  // Video Compacting Cluster (High Search Volume Keywords)
  'compactar-video-para-whatsapp': {
    slug: 'compactar-video-para-whatsapp',
    targetFormat: 'mp4',
    initialPreset: 'whatsapp',
    badge: '📱 Otimizado para WhatsApp (< 16 MB)',
    h1Prefix: 'Compactar Vídeo para',
    h1Highlight: 'WhatsApp Online',
    h1Suffix: 'sem Travar',
    metaTitle: 'Compactar Vídeo para WhatsApp Online — Enviar sem Limite de 16MB',
    metaDescription: 'Compacte vídeos pesados para menos de 16MB e envie no WhatsApp sem erros de limite e sem perda de nitidez. totalmente gratuito e privado no navegador.',
    heroSubtitle: 'Ajuste vídeos grandes para o limite oficial de 16 MB do WhatsApp mantendo resolução 720p HD e áudio nítido.',
    dropzoneTitle: 'Arraste o vídeo para compactar para o WhatsApp',
    keywords: ['compactar video para whatsapp', 'compactar vídeo para whatsapp', 'compactar video whatsapp', 'como compactar video para mandar no whatsapp'],
    explainerTitle: 'Como compactar vídeos para enviar no WhatsApp sem travar?',
    explainerParagraphs: [
      'O WhatsApp possui um limite rígido de 16 MB para envio direto de vídeos em chats. Ao tentar enviar arquivos maiores, o aplicativo costuma comprimir de forma agressiva, destruindo a nitidez da imagem.',
      'Nossa predefinição calcula automaticamente o bitrate necessário com base na duração do clipe, garantindo que o arquivo final fique abaixo de 15 MB mantendo resolução HD 720p e áudio AAC estéreo impecável.'
    ],
    sourceDetailsTitle: 'Vídeo Acima de 16 MB',
    sourceDetails: [
      'Bloqueado pelo limite do WhatsApp',
      'Compressão destrutiva pelo próprio aplicativo',
      'Demora para carregar e falhas de envio'
    ],
    targetDetailsTitle: 'Vídeo Otimizado (< 15 MB)',
    targetDetails: [
      'Envio instantâneo sem mensagens de erro',
      'Nitidez preservada em 720p HD',
      'Áudio AAC claro e sem ruídos'
    ],
    faqs: [
      {
        question: 'Qual é o tamanho máximo aceito pelo WhatsApp para vídeos?',
        answer: 'O WhatsApp impõe um limite de 16 MB para arquivos de vídeo enviados como mídia. Nossa ferramenta compacta seu vídeo para menos de 15 MB para garantir envio perfeito.'
      },
      {
        question: 'O WhatsApp destrói a qualidade do vídeo após o envio?',
        answer: 'Quando o vídeo já está abaixo de 16 MB no formato padrão H.264, o WhatsApp o envia diretamente sem aplicar compressões agressivas adicionais.'
      },
      {
        question: 'Posso compactar vídeos gravados no iPhone para enviar no WhatsApp?',
        answer: 'Sim! Aceitamos vídeos MOV do iPhone e os convertemos em MP4 leve otimizado para o WhatsApp.'
      },
      {
        question: 'Quanto tempo leva para compactar um vídeo para o WhatsApp?',
        answer: 'Geralmente de 5 a 15 segundos, dependendo da duração do vídeo e da velocidade do seu dispositivo.'
      }
    ]
  },

  // Video Resizer Cluster (High Volume Brazil Keywords)
  'redimensionar-video': {
    slug: 'redimensionar-video',
    targetFormat: 'mp4',
    initialPreset: 'resize_1080p',
    badge: '📐 Redimensionamento Inteligente',
    h1Prefix: 'Redimensionar Vídeo',
    h1Highlight: 'Online Grátis',
    h1Suffix: 'em Alta Resolução',
    metaTitle: 'Redimensionar Vídeo Online Grátis — Mudar Resolução e Proporção',
    metaDescription: 'Redimensione vídeos MP4 e MOV online sem perder qualidade. Ajuste para Full HD 1080p, 720p ou proporções 16:9 e 9:16 diretamente no seu navegador.',
    heroSubtitle: 'Altere a resolução e as dimensões dos seus vídeos de forma rápida e segura. Processamento totalmente no seu navegador via WebAssembly.',
    dropzoneTitle: 'Arraste seu arquivo de vídeo aqui para redimensionar',
    keywords: ['redimensionar video', 'redimensionar vídeo', 'como redimensionar vídeo', 'redimensionar vídeo grátis', 'redimensionar video online', 'redimensionar vídeo online grátis', 'redimensionar vídeo online', 'redimensionar vídeo para tiktok', 'redimensionar video para instagram'],
    explainerTitle: 'Como redimensionar a resolução de um vídeo sem distorcer a imagem?',
    explainerParagraphs: [
      'Plataformas digitais, redes sociais e reprodutores de vídeo frequentemente exigem resoluções ou proporções específicas para evitar barras pretas laterais ou cortes abruptos.',
      'Nossa ferramenta aplica filtros bicúbicos de reescalonamento em tempo real via WebAssembly, ajustando a matriz de pixels do vídeo com máxima precisão geométrica. O resultado é um arquivo reescalado em Full HD 1080p ou 720p com proporções perfeitas e sem envio para servidores.',
      'Para plataformas como TikTok, Instagram Reels e YouTube Shorts, você pode redimensionar vídeos horizontais para o formato vertical 9:16 (1080×1920 pixels). Para feeds do Instagram e Facebook, o formato quadrado 1:1 também é suportado. O redimensionamento online e gratuito preserva a proporção de aspecto para evitar distorções.'
    ],
    sourceDetailsTitle: 'Vídeo com Dimensões Inadequadas',
    sourceDetails: [
      'Resolução incompatível com telas e plataformas',
      'Bordas pretas indesejadas ou cortes forçados',
      'Arquivo pesado com pixels redundantes'
    ],
    targetDetailsTitle: 'Vídeo Redimensionado Perfeito',
    targetDetails: [
      'Escala precisa em 1080p Full HD ou 720p HD',
      'Proporção de aspecto correta sem distorções',
      'Compatibilidade universal e carregamento rápido'
    ],
    faqs: [
      {
        question: 'Como redimensionar um vídeo pelo navegador?',
        answer: 'Basta arrastar seu vídeo para o conversor, selecionar a predefinição de redimensionamento e clicar em converter. O vídeo é reescalado localmente no seu dispositivo.'
      },
      {
        question: 'O redimensionamento distorce ou estica o vídeo?',
        answer: 'Não. Nossos algoritmos calculam a proporção de aspecto (aspect ratio) para preservar as proporções originais da cena sem esticar pessoas ou objetos.'
      },
      {
        question: 'Posso redimensionar vídeos diretamente do celular?',
        answer: 'Sim! Você pode redimensionar vídeos gravados no iPhone ou Android diretamente pelo navegador do smartphone.'
      },
      {
        question: 'Meus vídeos são enviados para a internet durante o processo?',
        answer: 'Não. Todo o redimensionamento é processado localmente no navegador via WebAssembly com totalmente de privacidade.'
      },
      {
        question: 'É possível redimensionar vídeos online grátis sem marca d’água?',
        answer: 'Sim! Nosso redimensionador é totalmente gratuito e todos os vídeos exportados são completamente limpos, sem marcas d’água, assinaturas ou logos sobrepostos.'
      }
    ]
  },

  'redimensionar-video-para-tiktok': {
    slug: 'redimensionar-video-para-tiktok',
    targetFormat: 'mp4',
    initialPreset: 'instagram_reels',
    badge: '📱 Otimizado para TikTok (9:16 Vertical)',
    h1Prefix: 'Redimensionar Vídeo para',
    h1Highlight: 'TikTok Online',
    h1Suffix: '9:16',
    metaTitle: 'Redimensionar Vídeo para TikTok Online — Formato Vertical 9:16',
    metaDescription: 'Redimensione vídeos horizontais ou gravados em câmera para o formato vertical 9:16 do TikTok. totalmente gratuito e privado no navegador.',
    heroSubtitle: 'Formate clipes e vídeos no padrão vertical exigido pelo TikTok com alta definição e sem cortes estranhos.',
    dropzoneTitle: 'Arraste o vídeo para formatar para o TikTok',
    keywords: ['redimensionar vídeo para tiktok', 'redimensionar video para tiktok', 'formatar video tiktok', 'video para tiktok 9 16'],
    explainerTitle: 'Como formatar e redimensionar vídeos para o TikTok (9:16 Vertical)?',
    explainerParagraphs: [
      'O algoritmo do TikTok favorece conteúdos em tela cheia vertical com proporção 9:16 e resolução 1080x1920 pixels. Vídeos em formatos horizontais (16:9) sofrem com margens pretas indesejadas e menor engajamento.',
      'Nossa ferramenta adapta qualquer clipe para o enquadramento vertical recomendado pelo TikTok com taxa de quadros fluida e codec H.264 aceito pela plataforma.'
    ],
    sourceDetailsTitle: 'Vídeo Horizontal (16:9 / 4:3)',
    sourceDetails: [
      'Barras pretas superior e inferior no app',
      'Menor retenção de atenção dos espectadores',
      'Desperdício da tela inteira do smartphone'
    ],
    targetDetailsTitle: 'Vídeo Vertical TikTok (9:16)',
    targetDetails: [
      'Preenchimento total da tela do celular',
      'Resolução nítida e codec H.264 otimizado',
      'Máximo apelo visual para retenção no feed'
    ],
    faqs: [
      {
        question: 'Qual é a proporção ideal de vídeo para o TikTok?',
        answer: 'A proporção padrão do TikTok é 9:16 vertical (1080x1920 pixels), ocupando toda a tela do smartphone.'
      },
      {
        question: 'A ferramenta remove barras pretas ao converter para o TikTok?',
        answer: 'Sim, a ferramenta ajusta o vídeo para o enquadramento vertical ideal sem distorcer os elementos da gravação.'
      },
      {
        question: 'O vídeo gerado pode ser postado no TikTok sem reprocessamento?',
        answer: 'Sim, o arquivo é exportado no formato padrão MP4 H.264 aceito instantaneamente pelo app do TikTok.'
      },
      {
        question: 'Posso formatar vídeos gravados na horizontal da câmera?',
        answer: 'Sim! Aceitamos vídeos de qualquer proporção e os formatamos para 9:16 vertical.'
      }
    ]
  },

  'redimensionar-video-para-instagram': {
    slug: 'redimensionar-video-para-instagram',
    targetFormat: 'mp4',
    initialPreset: 'instagram_reels',
    badge: '📸 Reels, Stories & Feed (9:16)',
    h1Prefix: 'Redimensionar Vídeo para',
    h1Highlight: 'Instagram Online',
    h1Suffix: 'Grátis',
    metaTitle: 'Redimensionar Vídeo para Instagram Online — Reels e Stories 9:16',
    metaDescription: 'Redimensione qualquer vídeo para Reels, Stories e Feed do Instagram em 9:16. Sem marcas d’água, sem perda de qualidade e totalmente no navegador.',
    heroSubtitle: 'Adapte seus vídeos para o formato vertical oficial do Instagram com enquadramento perfeito e alta nitidez.',
    dropzoneTitle: 'Arraste o vídeo para redimensionar para o Instagram',
    keywords: ['redimensionar video para instagram', 'redimensionar vídeo para instagram', 'redimensionar vídeo para instagram online grátis', 'ajustar video instagram reels'],
    explainerTitle: 'Como preparar e redimensionar vídeos para Reels e Stories do Instagram?',
    explainerParagraphs: [
      'O Instagram impõe especificações rigorosas de proporção e bitrate para Reels e Stories. Vídeos com resolução inadequada sofrem compressão agressiva pela plataforma, ficando borrados ou pixelados.',
      'Nossa ferramenta ajusta a proporção para 9:16 vertical com bitrate equilibrado (CRF 22), garantindo que seu conteúdo chegue ao feed com máxima nitidez visual e sem cortes acidentais.'
    ],
    sourceDetailsTitle: 'Vídeo Não Formatado para Instagram',
    sourceDetails: [
      'Compressão destrutiva pelo servidor do Instagram',
      'Bordas pretas ou cortes sobre textos e rostos',
      'Aspecto amador que reduz o engajamento'
    ],
    targetDetailsTitle: 'Vídeo Formatado para Reels & Stories',
    targetDetails: [
      'Proporção exata 9:16 Full HD para tela cheia',
      'Nitidez preservada após o upload no Instagram',
      'Sem marcas d’água ou assinaturas cobradas'
    ],
    faqs: [
      {
        question: 'Qual é o tamanho recomendado para vídeos do Instagram Reels?',
        answer: 'O Instagram recomenda a resolução 1080x1920 pixels na proporção vertical 9:16 com taxa de 30 fps.'
      },
      {
        question: 'Por que meus vídeos no Instagram perdem qualidade ao postar?',
        answer: 'Se o vídeo enviado tiver bitrate ou resolução fora dos padrões suportados, o Instagram o recodifica de forma agressiva. Ao pré-formatar com nossa ferramenta, essa perda é minimizada.'
      },
      {
        question: 'Funciona para vídeos de Stories e Feed?',
        answer: 'Sim! O formato 9:16 é ideal para Stories e Reels, e você também pode usar para publicações em tela cheia.'
      },
      {
        question: 'A ferramenta coloca marca d’água no vídeo?',
        answer: 'Não. Todos os vídeos exportados são totalmente limpos e livres de marcas d’água.'
      }
    ]
  },

  // GIF Expansion Cluster
};
