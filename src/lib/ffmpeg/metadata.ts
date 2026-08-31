export interface VideoMetadata {
  duration: number; // in seconds
  durationFormatted: string;
  width: number;
  height: number;
  resolution: string;
  aspectRatio: string;
  size: number;
  sizeFormatted: string;
  mimeType: string;
  fps?: number;
  hasAudio?: boolean;
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function formatDuration(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const hrs = Math.floor(mins / 60);
  const remMins = mins % 60;

  if (hrs > 0) {
    return `${hrs}:${remMins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export async function extractVideoMetadata(file: File): Promise<{
  metadata: VideoMetadata;
  posterBlob?: Blob;
  posterUrl?: string;
}> {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    const objectUrl = URL.createObjectURL(file);
    video.preload = 'metadata';
    video.src = objectUrl;
    video.muted = true;
    video.playsInline = true;

    // Timeout after 8 seconds
    const timer = setTimeout(() => {
      URL.revokeObjectURL(objectUrl);
      resolve({
        metadata: {
          duration: 0,
          durationFormatted: '--:--',
          width: 0,
          height: 0,
          resolution: 'Desconhecida',
          aspectRatio: '--',
          size: file.size,
          sizeFormatted: formatBytes(file.size),
          mimeType: file.type || 'video/unknown'
        }
      });
    }, 8000);

    video.onloadedmetadata = () => {
      const width = video.videoWidth || 0;
      const height = video.videoHeight || 0;
      const duration = video.duration || 0;
      
      // Calculate aspect ratio
      let aspectRatio = '--';
      if (width > 0 && height > 0) {
        const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
        const divisor = gcd(width, height);
        aspectRatio = `${width / divisor}:${height / divisor}`;
      }

      // Seek to 1 second (or 0.5 if shorter) to capture poster thumbnail
      video.currentTime = Math.min(1.0, duration > 1 ? 1.0 : duration / 2);
    };

    video.onseeked = () => {
      clearTimeout(timer);
      const width = video.videoWidth || 0;
      const height = video.videoHeight || 0;
      const duration = video.duration || 0;

      let posterBlob: Blob | undefined;
      let posterUrl: string | undefined;

      try {
        if (width > 0 && height > 0) {
          const canvas = document.createElement('canvas');
          canvas.width = Math.min(1280, width);
          canvas.height = Math.round((canvas.width / width) * height);
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            canvas.toBlob(
              (blob) => {
                if (blob) {
                  posterBlob = blob;
                  posterUrl = URL.createObjectURL(blob);
                }
                URL.revokeObjectURL(objectUrl);
                resolve({
                  metadata: {
                    duration,
                    durationFormatted: formatDuration(duration),
                    width,
                    height,
                    resolution: width > 0 ? `${width}×${height}` : 'Áudio / Desconhecido',
                    aspectRatio: width > 0 && height > 0 ? `${width}×${height}` : '--',
                    size: file.size,
                    sizeFormatted: formatBytes(file.size),
                    mimeType: file.type || 'video/unknown'
                  },
                  posterBlob,
                  posterUrl
                });
              },
              'image/jpeg',
              0.85
            );
            return;
          }
        }
      } catch (err) {
        console.warn('Poster frame capture skipped:', err);
      }

      URL.revokeObjectURL(objectUrl);
      resolve({
        metadata: {
          duration,
          durationFormatted: formatDuration(duration),
          width,
          height,
          resolution: width > 0 ? `${width}×${height}` : 'Áudio',
          aspectRatio: width > 0 && height > 0 ? `${width}×${height}` : '--',
          size: file.size,
          sizeFormatted: formatBytes(file.size),
          mimeType: file.type || 'video/unknown'
        }
      });
    };

    video.onerror = () => {
      clearTimeout(timer);
      URL.revokeObjectURL(objectUrl);
      resolve({
        metadata: {
          duration: 0,
          durationFormatted: '--:--',
          width: 0,
          height: 0,
          resolution: 'Áudio / Desconhecido',
          aspectRatio: '--',
          size: file.size,
          sizeFormatted: formatBytes(file.size),
          mimeType: file.type || 'video/unknown'
        }
      });
    };
  });
}
