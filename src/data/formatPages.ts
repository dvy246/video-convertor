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
    metaDescription: 'Converta qualquer arquivo de vídeo (MOV, MKV, AVI, WebM, WMV, FLV) para MP4 no navegador. 100% gratuito, sem limites e sem upload para a nuvem.',
    heroSubtitle: 'Transforme vídeos de qualquer formato no padrão universal MP4 com alta fidelidade visual. 100% no seu navegador e sem filas de espera.',
    dropzoneTitle: 'Arraste seu arquivo de vídeo aqui para converter para MP4',
    keywords: ['conversor de video para mp4', 'conversor de video mp4', 'converter video para mp4', 'conversor de vídeo para mp4'],
    explainerTitle: 'Por que o formato MP4 é o padrão universal?',
    explainerParagraphs: [
      'O contêiner MP4 (MPEG-4 Part 14) com codec H.264 e áudio AAC é o formato multimídia mais aceito no mundo. Ele roda perfeitamente em 100% dos smartphones (Android e iPhone), computadores (Windows, Mac e Linux), Smart TVs e consoles de videogame.',
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
      '100% compatível com qualquer aparelho',
      'Compressão H.264 de alta eficiência',
      'Envio rápido por e-mail e mensageiros'
    ],
    faqs: [
      {
        question: 'Quais formatos de vídeo posso converter para MP4?',
        answer: 'Nossa ferramenta aceita MOV, MKV, AVI, WebM, WMV, FLV, 3GP, M2TS, MTS, VOB, TS, MXF e dezenas de outros formatos.'
      },
      {
        question: 'Preciso pagar ou me cadastrar para converter vídeos em MP4?',
        answer: 'Não! O ConversordeVideo.com é 100% gratuito, sem cadastro, sem assinaturas e sem marcas d’água.'
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
    metaDescription: 'Converta e formate vídeos baixados do YouTube e YouTube Shorts para MP4 ou MP3 no navegador. Rápido, 100% seguro e sem upload de arquivos.',
    heroSubtitle: 'Converta e formate clipes e gravações para o formato padrão do YouTube (16:9 HD ou Shorts 9:16 vertical). 100% privado no seu aparelho.',
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
    metaDescription: 'Descubra por que o ConversordeVideo.com é o melhor conversor de vídeo gratuito: sem upload, sem limites de tamanho, sem cadastro e 100% privado.',
    heroSubtitle: 'A ferramenta definitiva para converter MP4, MOV, MP3, WebM e GIF. Zero espera, sem anúncios invasivos e 100% no seu navegador.',
    dropzoneTitle: 'Arraste qualquer arquivo de vídeo para começar',
    keywords: ['melhor conversor de vídeo gratuito', 'melhor conversor de video gratis', 'melhor conversor de vídeo online', 'conversor de video confiavel'],
    explainerTitle: 'Por que somos o melhor conversor de vídeo do Brasil?',
    explainerParagraphs: [
      'Enquanto os concorrentes tradicionais (CloudConvert, Convertio, FreeConvert) cobram assinaturas mensais, impõem filas de espera e obrigam você a fazer upload dos seus vídeos para servidores estrangeiros, o ConversordeVideo.com funciona 100% no seu computador ou celular.',
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
      'Zero upload — 100% processamento local',
      'Sem filas e sem limite de conversões diárias',
      'Arquivos de celular convertidos instantaneamente',
      'Totalmente gratuito e sem cadastro'
    ],
    faqs: [
      {
        question: 'O conversor é realmente gratuito sem pegadinhas?',
        answer: 'Sim, 100% gratuito. Não exigimos cartão de crédito, cadastro nem limitamos o número de arquivos que você pode converter por dia.'
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
    metaDescription: 'Converta arquivos de vídeo MOV do iPhone e Mac para MP4 no navegador. Rápido, gratuito, sem upload de arquivos e 100% privado no seu dispositivo.',
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
      '100% compatível com qualquer celular, TV e PC',
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
    metaDescription: 'Extraia o áudio de qualquer vídeo em formato MP3 de alta qualidade (192 kbps) diretamente no navegador. 100% gratuito, sem cadastro e sem upload.',
    heroSubtitle: 'Extraia a trilha de áudio de qualquer gravação ou clipe e salve como MP3 estéreo leve. 100% no navegador e sem upload para servidores.',
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
    metaDescription: 'Transforme trechos de vídeo em GIFs animados de alta qualidade no navegador. 100% gratuito, sem marca d’água e sem upload de arquivos.',
    heroSubtitle: 'Transforme clipes de vídeo em GIFs animados leves e fluidos no navegador. Perfeito para figurinhas do WhatsApp, memes e reações.',
    dropzoneTitle: 'Arraste o vídeo para gerar a animação em GIF',
    keywords: ['video para gif', 'converter video para gif', 'criar gif animado', 'transformar video em gif', 'convertidor de video a gif'],
    explainerTitle: 'Por que criar GIFs animados a partir de vídeos?',
    explainerParagraphs: [
      'GIFs animados são a linguagem universal da internet para memes, demonstrações rápidas de produtos, reações em bate-papo e figurinhas.',
      'Nossa ferramenta aplica otimização de paleta de cores (Bayer Dithering) com 12 quadros por segundo, garantindo animações contínuas, sem ruídos e com tamanho de arquivo reduzido.'
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
        answer: 'Basta arrastar seu clipe de vídeo para nossa ferramenta, selecionar a opção GIF e clicar em converter. O GIF gerado é 100% livre de marcas d’água.'
      },
      {
        question: 'Qual a duração recomendada para o GIF?',
        answer: 'Recomendamos clipes de 3 a 15 segundos para manter o arquivo leve e fácil de carregar em conexões móveis.'
      }
    ]
  },

  'comprimir-video': {
    slug: 'comprimir-video',
    targetFormat: 'mp4',
    initialPreset: 'whatsapp',
    badge: '📦 Redução Inteligente de até 70% do Tamanho',
    h1Prefix: 'Comprimir Vídeo',
    h1Highlight: 'sem Perder Qualidade',
    h1Suffix: 'Online',
    metaTitle: 'Comprimir Vídeo Online Grátis — Reduzir Tamanho sem Perder Qualidade',
    metaDescription: 'Diminua o tamanho de vídeos pesados (MP4, MOV) para enviar no WhatsApp e e-mail. 100% gratuito no navegador, sem upload e sem marcas d’água.',
    heroSubtitle: 'Reduza os megabytes dos seus vídeos para enviar por e-mail, WhatsApp e economizar espaço de armazenamento. 100% no navegador e sem upload.',
    dropzoneTitle: 'Arraste o vídeo que deseja comprimir',
    keywords: ['comprimir video sem perder qualidade', 'diminuir tamanho de video', 'reduzir tamanho de video online', 'comprimir video whatsapp'],
    explainerTitle: 'Como comprimir vídeos sem deixá-los embaçados?',
    explainerParagraphs: [
      'Vídeos gravados em celulares modernos gravam em taxas de bits muito altas (bitrates inflados) que geram arquivos pesados desnecessariamente.',
      'Ao aplicar compressão inteligente com fator de taxa constante (CRF), eliminamos dados redundantes mantendo a nitidez dos rostos, textos e detalhes visuais importantes.'
    ],
    sourceDetailsTitle: 'Vídeo Pesado Original',
    sourceDetails: [
      'Taxa de bits desnecessariamente alta',
      'Ultrapassa o limite de 16 MB do WhatsApp',
      'Demora para carregar e enviar no 4G/5G'
    ],
    targetDetailsTitle: 'Vídeo Otimizado e Leve',
    targetDetails: [
      'Tamanho até 70% menor',
      'Resolução nítida em 720p HD ou 1080p',
      'Envio instantâneo sem travar o WhatsApp'
    ],
    faqs: [
      {
        question: 'Qual a melhor predefinição para comprimir para o WhatsApp?',
        answer: 'Escolha a predefinição "Otimizado para WhatsApp". Ela ajusta a resolução e o áudio para garantir que o arquivo fique abaixo de 16MB com excelente nitidez.'
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
    metaDescription: 'Converta arquivos MP4 para o formato leve e moderno WebM para sites e HTML5. 100% gratuito no navegador, sem upload e sem cadastro.',
    heroSubtitle: 'Transforme vídeos MP4 no padrão aberto e ultraleve WebM para carregamento instantâneo em páginas web. 100% no seu navegador.',
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
        answer: 'Sim, praticamente 100% dos navegadores modernos (Chrome, Firefox, Safari, Edge) reproduzem WebM nativamente.'
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
    metaDescription: 'Converta e formate vídeos para o Instagram (Reels, Stories e Feed) nos formatos recomendados MP4 e H.264. 100% gratuito e privado no navegador.',
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
    metaDescription: 'Converta vídeos no formato AVI para MP4 universal no navegador. Sem necessidade de upload, sem cadastro e 100% privado.',
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
    metaDescription: 'Converta vídeos MKV para MP4 universal no navegador sem enviar arquivos para a nuvem. Rápido, seguro e 100% gratuito.',
    heroSubtitle: 'Transforme vídeos MKV no padrão universal MP4 com alta fidelidade visual. 100% no navegador e sem upload para a nuvem.',
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
    metaDescription: 'Transforme vídeos WebM da internet em MP4 amplamente compatível. 100% gratuito, sem cadastro, sem marcas d’água e com processamento local.',
    heroSubtitle: 'Transforme vídeos baixados em WebM no padrão universal MP4 com alta fidelidade visual. 100% no navegador.',
    dropzoneTitle: 'Arraste seu arquivo .WebM aqui para converter para MP4',
    keywords: ['converter webm para mp4', 'webm para mp4 online gratis', 'transformar webm em mp4'],
    explainerTitle: 'Por que converter WebM para MP4?',
    explainerParagraphs: [
      'Muitos editores de vídeo no Windows e Mac não importam vídeos em formato WebM. Converter para MP4 torna o arquivo compatível com qualquer software de edição e aparelho celular.'
    ],
    sourceDetailsTitle: 'Vídeo WebM',
    sourceDetails: ['Pode não abrir em editores de vídeo', 'Incompatível com alguns players de TV'],
    targetDetailsTitle: 'Vídeo MP4',
    targetDetails: ['Compatível com Premiere, Final Cut, CapCut', 'Reprodução em 100% dos dispositivos'],
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
    metaDescription: 'Converta vídeos no formato Windows Media Video (WMV) para MP4 universal no navegador. Rápido, sem upload de arquivos e 100% gratuito.',
    heroSubtitle: 'Modernize vídeos antigos do Windows Media para o padrão universal MP4. Rápido, seguro e 100% local.',
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
    metaDescription: 'Converta gravações de filmadoras M2TS (AVCHD Blu-ray) para MP4 no navegador. Rápido, sem upload de arquivos e 100% privado.',
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
    targetDetails: ['Compatível com 100% dos dispositivos', 'Reprodução imediata na web', 'Fácil de compartilhar no WhatsApp'],
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
    metaDescription: 'Converta arquivos MTS de filmadoras Sony, Canon e Panasonic para MP4 universal no navegador. 100% gratuito e privado.',
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
    metaDescription: 'Converta gravações de TV Digital e transmissões TS para MP4 no navegador. Rápido, sem upload de arquivos e 100% seguro.',
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
    targetDetails: ['Roda em 100% dos celulares e Smart TVs', 'Redução de até 70% do tamanho', 'Fácil de guardar na nuvem ou pen drive'],
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
    metaDescription: 'Transforme vídeos antigos em formato Flash (.flv) para MP4 universal no navegador. 100% gratuito, sem upload e sem cadastro.',
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
    metaDescription: 'Converta vídeos 3GP e 3GPP de celulares antigos para MP4 moderno no navegador. Rápido, seguro e 100% gratuito.',
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
    metaDescription: 'Converta vídeos no formato M4V para MP4 universal no navegador sem upload. Rápido, seguro e 100% gratuito.',
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
    targetDetails: ['100% universal em qualquer aparelho', 'Fácil reprodução web'],
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
    metaDescription: 'Converta vídeos RMVB e RM antigos para MP4 universal no navegador. 100% gratuito, sem upload e sem marcas d’água.',
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
    targetDetails: ['Compatível com 100% dos aparelhos atuais', 'Reprodução nítida em qualquer tela'],
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
    metaDescription: 'Converta vídeos no formato DivX para MP4 universal no navegador. Sem cadastro, sem upload de arquivos e 100% gratuito.',
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
    metaDescription: 'Transforme vídeos no formato XviD em MP4 universal no navegador. 100% gratuito, sem upload de arquivos e sem filas.',
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
    targetDetails: ['Compatibilidade absoluta em 100% dos aparelhos'],
    faqs: [
      { question: 'Preciso instalar programas para converter XviD?', answer: 'Não! Todo o processo roda 100% no seu navegador sem instalar nada.' }
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
    metaDescription: 'Converta qualquer vídeo para o formato compatível com iPhone e iPad (MP4 H.264 + AAC). 100% no navegador, sem upload e seguro.',
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
    metaDescription: 'Converta qualquer arquivo de vídeo para o formato ideal para celulares Android (Samsung, Motorola, Xiaomi). Rápido, sem cadastro e 100% privado.',
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
      { question: 'Qual o melhor formato para celulares Android?', answer: 'O formato padrão MP4 com codec H.264 é o mais leve e compatível com 100% dos modelos Android.' }
    ]
  },

  'conversor-de-audio': {
    slug: 'conversor-de-audio',
    targetFormat: 'mp3',
    initialPreset: 'audio_mp3',
    badge: '🎧 Conversor de Áudio Universal',
    h1Prefix: 'Conversor de',
    h1Highlight: 'Áudio Online',
    h1Suffix: 'Grátis',
    metaTitle: 'Conversor de Áudio Online Grátis — Extrair e Converter Áudio',
    metaDescription: 'Converta arquivos de áudio e extraia trilhas sonoras de vídeos para MP3 de alta fidelidade (192 kbps) no navegador. 100% gratuito e privado.',
    heroSubtitle: 'Converta formatos de som e extraia faixas musicais de vídeos sem enviar arquivos para a internet.',
    dropzoneTitle: 'Arraste seu arquivo de áudio ou vídeo aqui',
    keywords: ['conversor de audio', 'conversor de audio online', 'converter audio para mp3', 'audio converter'],
    explainerTitle: 'Como funciona o conversor de áudio universal?',
    explainerParagraphs: [
      'Nossa ferramenta permite converter faixas de áudio e arquivos de vídeo em arquivos MP3 estéreo leves com codificação LAME constante de 192 kbps, garantindo clareza e compatibilidade total com qualquer player de música.'
    ],
    sourceDetailsTitle: 'Arquivo Original',
    sourceDetails: ['Qualquer formato de vídeo ou áudio', 'Tamanho volumoso'],
    targetDetailsTitle: 'Arquivo MP3 Estéreo',
    targetDetails: ['Qualidade estéreo 192 kbps', 'Tamanho super reduzido'],
    faqs: [
      { question: 'Posso converter gravações de voz?', answer: 'Sim! Aceitamos arquivos de gravação de voz (M4A, OGG, WAV, AAC) e convertemos para MP3 padrão.' }
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
    heroSubtitle: 'Reduza o peso dos seus vídeos em segundos para enviar por WhatsApp, e-mail e economizar espaço. Processamento 100% local no seu aparelho.',
    dropzoneTitle: 'Arraste o vídeo que você deseja comprimir',
    keywords: ['compressor de video', 'compressor de video online', 'compressor de video gratis', 'comprimir video online'],
    explainerTitle: 'Como funciona a compressão de vídeo inteligente no navegador?',
    explainerParagraphs: [
      'Celulares e câmeras gravam vídeos com taxas de bits elevadas que geram arquivos pesados sem ganho visível de nitidez na maioria das telas.',
      'Nosso compressor utiliza a tecnologia FFmpeg WebAssembly para reescalar e reencodificar o vídeo com fator de taxa constante (CRF), eliminando megabytes redundantes sem criar artefatos ou desfoque na imagem.',
      'Ao contrário de ferramentas convencionais que exigem o upload do arquivo para servidores remotos, todo o cálculo é executado na memória RAM do seu próprio dispositivo, garantindo velocidade instantânea e privacidade total.'
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
        answer: 'Não. Todo o processamento ocorre 100% no seu próprio navegador via WebAssembly. Nenhum byte do seu arquivo sai do seu celular ou computador.'
      },
      {
        question: 'Qual é o limite máximo de tamanho de arquivo aceito?',
        answer: 'Não há limite imposto pelo servidor. Como a compressão utiliza a memória RAM do seu aparelho, vídeos de até 300MB a 500MB são processados com facilidade na maioria dos dispositivos modernos.'
      },
      {
        question: 'Posso comprimir vídeos diretamente do celular?',
        answer: 'Sim! A ferramenta é totalmente compatível com navegadores móveis no Android (Chrome) e iPhone/iPad (Safari).'
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
    heroSubtitle: 'Diminua o tamanho de qualquer vídeo MP4 sem comprometer a qualidade da imagem. Rápido, 100% privado e sem marcas d’água.',
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
        answer: 'Sim. O formato resultante é um MP4 universal padrão H.264 com áudio AAC, compatível com 100% dos aparelhos e sistemas operacionais.'
      }
    ]
  },

  'compressor-de-video-gratuito': {
    slug: 'compressor-de-video-gratuito',
    targetFormat: 'mp4',
    initialPreset: 'compress_balanced',
    badge: '🏆 100% Grátis • Sem Limites Diários • Sem Cadastro',
    h1Prefix: 'Melhor Compressor de Vídeo',
    h1Highlight: 'Gratuito Online',
    h1Suffix: '',
    metaTitle: 'Melhor Compressor de Vídeo Gratuito Online — Sem Filas e Sem Limites',
    metaDescription: 'Comprima vídeos de graça sem pagar mensalidades, sem criar contas e sem marcas d’água. Conheça o compressor de vídeo gratuito mais rápido e privado da internet.',
    heroSubtitle: 'Uma ferramenta de compressão verdadeiramente livre: sem planos pagos, sem limites de minutos e sem anúncios abusivos.',
    dropzoneTitle: 'Arraste seu vídeo para comprimir gratuitamente',
    keywords: ['compressor de vídeo gratuito', 'compressor de video gratis', 'compressor de vídeo online grátis', 'compressor de video gratuito'],
    explainerTitle: 'O que torna o nosso compressor de vídeo gratuito superior aos concorrentes?',
    explainerParagraphs: [
      'Enquanto a maioria dos compressores da internet impõe limites de 100MB, filas de espera demoradas e marcas d’água forçadas para exigir planos mensais pagos, o ConversordeVideo.com é 100% gratuito e ilimitado.',
      'Ao utilizar a capacidade de processamento do seu próprio navegador via WebAssembly, não temos os custos astronômicos de servidores que outros serviços repassam aos usuários. O resultado é um compressor veloz, limpo e acessível a todos.'
    ],
    sourceDetailsTitle: 'Conversores Tradicionais',
    sourceDetails: [
      'Limites rígidos de tamanho (100 MB)',
      'Cobrança de assinaturas caras',
      'Filas de espera lentas na nuvem'
    ],
    targetDetailsTitle: 'ConversordeVideo.com',
    targetDetails: [
      '100% Gratuito sem limites diários',
      'Zero cadastro ou inserção de dados',
      'Processamento veloz no próprio dispositivo'
    ],
    faqs: [
      {
        question: 'Existe alguma versão paga ou recurso bloqueado?',
        answer: 'Não! Todas as resoluções, formatos e predefinições de compressão são 100% gratuitas e abertas a todos os usuários.'
      },
      {
        question: 'O compressor adiciona marca d’água no vídeo?',
        answer: 'Nunca. Seus vídeos são exportados totalmente limpos, exatamente como você os gravou.'
      }
    ]
  }
};
