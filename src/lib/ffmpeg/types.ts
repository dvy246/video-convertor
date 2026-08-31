export type OutputFormat = 'mp4' | 'mp3' | 'webm' | 'gif' | 'mov' | 'avi' | 'mkv';

export type PresetId = 
  | 'balanced' 
  | 'high_quality' 
  | 'whatsapp' 
  | 'instagram_reels' 
  | 'small_size' 
  | 'compress_balanced'
  | 'compress_extreme'
  | 'audio_mp3' 
  | 'gif_standard';

export interface Preset {
  id: PresetId;
  label: string;
  badge?: string;
  description: string;
  targetFormat: OutputFormat;
  getArgs: (inputName: string, outputName: string) => string[];
}

export type ConversionStatus = 
  | 'idle'
  | 'loading_engine'
  | 'ready'
  | 'converting'
  | 'done'
  | 'error';

export interface ConversionProgress {
  ratio: number; // 0 to 1
  percent: number; // 0 to 100
  currentFrame?: number;
  fps?: number;
  timeString?: string;
  etaSeconds?: number;
  statusMessage: string;
}

export interface ConversionResult {
  blob: Blob;
  downloadUrl: string;
  fileName: string;
  originalSize: number;
  outputSize: number;
  timeTakenMs: number;
  format: OutputFormat;
  reductionPercentage: number;
}
