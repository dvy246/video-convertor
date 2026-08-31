import type { OutputFormat, Preset, PresetId } from './types';

export const PRESETS: Record<PresetId, Preset> = {
  balanced: {
    id: 'balanced',
    label: 'Qualidade Equilibrada (CRF 23)',
    badge: 'Recomendado',
    description: 'Equilíbrio ideal entre nitidez visual e tamanho de arquivo reduzido para web e computadores.',
    targetFormat: 'mp4',
    getArgs: (input, output) => [
      '-i', input,
      '-c:v', 'libx264',
      '-crf', '23',
      '-preset', 'ultrafast',
      '-pix_fmt', 'yuv420p',
      '-c:a', 'aac',
      '-b:a', '128k',
      '-movflags', '+faststart',
      output
    ]
  },
  high_quality: {
    id: 'high_quality',
    label: 'Alta Qualidade (CRF 18)',
    badge: 'Máxima Fidelidade',
    description: 'Preserva 99% dos detalhes visuais originais com compressão praticamente sem perdas visuais.',
    targetFormat: 'mp4',
    getArgs: (input, output) => [
      '-i', input,
      '-c:v', 'libx264',
      '-crf', '18',
      '-preset', 'ultrafast',
      '-pix_fmt', 'yuv420p',
      '-c:a', 'aac',
      '-b:a', '192k',
      '-movflags', '+faststart',
      output
    ]
  },
  small_size: {
    id: 'small_size',
    label: 'Tamanho Reduzido (CRF 28)',
    badge: 'Super Leve',
    description: 'Compressão eficiente para anexar em e-mails, salvar espaço e carregar rápido.',
    targetFormat: 'mp4',
    getArgs: (input, output) => [
      '-i', input,
      '-c:v', 'libx264',
      '-crf', '28',
      '-preset', 'ultrafast',
      '-vf', 'scale=-2:\'min(720,ih)\'',
      '-pix_fmt', 'yuv420p',
      '-c:a', 'aac',
      '-b:a', '96k',
      '-movflags', '+faststart',
      output
    ]
  },
  compress_balanced: {
    id: 'compress_balanced',
    label: 'Compressão Média (Redução ~50%)',
    badge: 'Mais Usado',
    description: 'Reduz o peso do arquivo pela metade preservando excelente resolução em 1080p/720p.',
    targetFormat: 'mp4',
    getArgs: (input, output) => [
      '-i', input,
      '-c:v', 'libx264',
      '-crf', '26',
      '-preset', 'ultrafast',
      '-vf', 'scale=-2:\'min(1080,ih)\'',
      '-pix_fmt', 'yuv420p',
      '-c:a', 'aac',
      '-b:a', '96k',
      '-movflags', '+faststart',
      output
    ]
  },
  compress_extreme: {
    id: 'compress_extreme',
    label: 'Compressão Máxima (Redução ~75%)',
    badge: 'Ultracompacto',
    description: 'Máxima economia de espaço para envio instantâneo e limites estritos de anexo.',
    targetFormat: 'mp4',
    getArgs: (input, output) => [
      '-i', input,
      '-c:v', 'libx264',
      '-crf', '30',
      '-preset', 'ultrafast',
      '-vf', 'scale=-2:\'min(720,ih)\'',
      '-pix_fmt', 'yuv420p',
      '-c:a', 'aac',
      '-b:a', '64k',
      '-movflags', '+faststart',
      output
    ]
  },
  whatsapp: {
    id: 'whatsapp',
    label: 'Otimizado para WhatsApp (< 16 MB)',
    badge: 'WhatsApp Target',
    description: 'Garante envio instantâneo sem travar no WhatsApp e sem que o app destrua a qualidade do vídeo.',
    targetFormat: 'mp4',
    getArgs: (input, output) => [
      '-i', input,
      '-c:v', 'libx264',
      '-crf', '28',
      '-preset', 'ultrafast',
      '-vf', 'scale=-2:\'min(720,ih)\'',
      '-pix_fmt', 'yuv420p',
      '-c:a', 'aac',
      '-b:a', '96k',
      '-movflags', '+faststart',
      output
    ]
  },
  instagram_reels: {
    id: 'instagram_reels',
    label: 'Instagram Reels / Stories (9:16)',
    badge: 'Redes Sociais',
    description: 'Formatação recomendada pelo Instagram para vídeos verticais sem perda de nitidez.',
    targetFormat: 'mp4',
    getArgs: (input, output) => [
      '-i', input,
      '-c:v', 'libx264',
      '-crf', '22',
      '-preset', 'ultrafast',
      '-pix_fmt', 'yuv420p',
      '-c:a', 'aac',
      '-b:a', '128k',
      '-movflags', '+faststart',
      output
    ]
  },
  audio_mp3: {
    id: 'audio_mp3',
    label: 'Extrair Áudio (MP3 192 kbps)',
    badge: 'Áudio Estéreo',
    description: 'Descarta a faixa de vídeo e salva apenas a trilha sonora com alta fidelidade estéreo.',
    targetFormat: 'mp3',
    getArgs: (input, output) => [
      '-i', input,
      '-vn',
      '-c:a', 'libmp3lame',
      '-b:a', '192k',
      output
    ]
  },
  gif_standard: {
    id: 'gif_standard',
    label: 'GIF Animado com Paleta Otimizada',
    badge: 'Loop Fluido',
    description: 'Gera uma animação contínua e suave (12 fps) com paleta Bayer otimizada para figurinhas e memes.',
    targetFormat: 'gif',
    getArgs: (input, output) => [
      '-i', input,
      '-t', '15',
      '-vf', 'fps=12,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128[p];[s1][p]paletteuse=dither=bayer',
      output
    ]
  }
};

export function calculateWhatsAppBitrateArgs(durationSeconds: number, input: string, output: string): string[] {
  if (!durationSeconds || durationSeconds <= 0) {
    return PRESETS.whatsapp.getArgs(input, output);
  }

  // Target: 14.5 MB to be safely under 16 MB limit
  const targetKiloBytes = 14.5 * 1024;
  const targetKiloBits = targetKiloBytes * 8;
  const audioBitrateKbps = 96;
  const totalBitrateKbps = Math.floor(targetKiloBits / durationSeconds);
  const videoBitrateKbps = Math.max(150, Math.min(2500, totalBitrateKbps - audioBitrateKbps));

  return [
    '-i', input,
    '-c:v', 'libx264',
    '-b:v', `${videoBitrateKbps}k`,
    '-maxrate', `${Math.round(videoBitrateKbps * 1.3)}k`,
    '-bufsize', `${Math.round(videoBitrateKbps * 2)}k`,
    '-preset', 'ultrafast',
    '-vf', 'scale=-2:\'min(720,ih)\'',
    '-pix_fmt', 'yuv420p',
    '-c:a', 'aac',
    '-b:a', `${audioBitrateKbps}k`,
    '-movflags', '+faststart',
    output
  ];
}

export const FORMAT_DETAILS: Record<OutputFormat, {
  name: string;
  mime: string;
  ext: string;
  description: string;
  popularPresets: PresetId[];
}> = {
  mp4: {
    name: 'MP4 (H.264 Universal)',
    mime: 'video/mp4',
    ext: 'mp4',
    description: 'O formato padrão mais compatível do mundo. Roda em 100% dos celulares, TVs, PCs e navegadores.',
    popularPresets: ['balanced', 'compress_balanced', 'compress_extreme', 'whatsapp', 'high_quality', 'small_size', 'instagram_reels']
  },
  webm: {
    name: 'WebM (HTML5 Web)',
    mime: 'video/webm',
    ext: 'webm',
    description: 'Vídeo moderno e ultraleve desenvolvido pelo Google para páginas web e carregamento veloz.',
    popularPresets: ['balanced', 'compress_balanced', 'high_quality', 'small_size']
  },
  mp3: {
    name: 'MP3 (Áudio Estéreo)',
    mime: 'audio/mpeg',
    ext: 'mp3',
    description: 'Extrai a trilha de som em arquivo de áudio leve de alta fidelidade (192 kbps).',
    popularPresets: ['audio_mp3']
  },
  gif: {
    name: 'GIF Animado',
    mime: 'image/gif',
    ext: 'gif',
    description: 'Animação em loop sem áudio para figurinhas, chats e memes.',
    popularPresets: ['gif_standard']
  },
  mov: {
    name: 'MOV (QuickTime)',
    mime: 'video/quicktime',
    ext: 'mov',
    description: 'Padrão nativo do ecossistema Apple e softwares de edição profissional.',
    popularPresets: ['high_quality', 'balanced']
  },
  avi: {
    name: 'AVI (Windows)',
    mime: 'video/x-msvideo',
    ext: 'avi',
    description: 'Formato clássico compatível com computadores e players legados.',
    popularPresets: ['balanced']
  },
  mkv: {
    name: 'MKV (Matroska)',
    mime: 'video/x-matroska',
    ext: 'mkv',
    description: 'Contêiner multimídia avançado com suporte a múltiplos canais.',
    popularPresets: ['high_quality', 'balanced']
  }
};
