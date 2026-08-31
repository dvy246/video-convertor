import React, { useState, useRef, useCallback } from 'react';
import { UploadCloud, ShieldCheck, Zap, Sparkles, AlertCircle } from 'lucide-react';
import { tClient } from '../../i18n/client';
import type { SupportedLanguage } from '../../i18n/languages';

interface FileDropZoneProps {
  onFileSelected: (file: File) => void;
  acceptedFormats?: string;
  disabled?: boolean;
  lang?: SupportedLanguage;
  defaultTitle?: string;
}

export const FileDropZone: React.FC<FileDropZoneProps> = ({
  onFileSelected,
  acceptedFormats = 'video/*,audio/*,.mov,.mp4,.webm,.mkv,.avi,.wmv,.flv,.m4v,.3gp,.ts,.m2ts,.mts,.vob,.mxf',
  disabled = false,
  lang,
  defaultTitle
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [warningMessage, setWarningMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback((file: File) => {
    setWarningMessage(null);
    
    // Check file size warning (> 350 MB)
    if (file.size > 350 * 1024 * 1024) {
      setWarningMessage(
        `Warning: Selected file is ${(file.size / (1024 * 1024)).toFixed(0)} MB. Very large files may take longer to transcode in browser memory.`
      );
    }

    onFileSelected(file);
  }, [onFileSelected]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (disabled) return;
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (disabled) return;

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      processFile(file);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      processFile(file);
    }
  };

  const titleText = defaultTitle || tClient('dropzone.title', lang);
  const buttonText = tClient('dropzone.button', lang);

  return (
    <div className="w-full">
      <div
        onClick={() => !disabled && fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
            e.preventDefault();
            fileInputRef.current?.click();
          }
        }}
        aria-label="Upload Dropzone"
        className={`group relative cursor-pointer rounded-3xl p-8 sm:p-14 text-center transition-all duration-300 border-2 border-dashed overflow-hidden ${
          isDragOver
            ? 'border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/50 scale-[1.01] shadow-2xl shadow-emerald-500/20 ring-4 ring-emerald-500/20'
            : 'border-zinc-300/90 dark:border-zinc-700/80 bg-gradient-to-b from-white/90 via-zinc-50/40 to-white/90 dark:from-zinc-900/90 dark:via-zinc-900/60 dark:to-zinc-900/90 hover:border-emerald-500/80 dark:hover:border-emerald-500 shadow-lg shadow-zinc-950/5 hover:shadow-2xl hover:shadow-emerald-500/10'
        } ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
      >
        {/* Subtle Ambient Hover Glow */}
        <div className="absolute inset-0 bg-radial from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedFormats}
          onChange={handleFileInputChange}
          className="hidden"
          disabled={disabled}
          id="video-file-input"
        />

        <div className="relative flex flex-col items-center justify-center gap-5 z-10">
          
          {/* High-End Icon Container with Multi-Layer Glow */}
          <div className={`relative w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 shadow-lg ${
            isDragOver 
              ? 'bg-emerald-600 text-white shadow-emerald-600/40 ring-8 ring-emerald-500/20' 
              : 'bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/80 dark:to-teal-950/80 text-emerald-600 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-800/60 shadow-emerald-500/5 ring-8 ring-emerald-500/5 dark:ring-emerald-500/10'
          }`}>
            <UploadCloud className="w-9 h-9 stroke-[2.2] transition-transform duration-300 group-hover:scale-105" />
          </div>

          {/* Titles & Copy */}
          <div className="space-y-2 max-w-lg">
            <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {titleText}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
              {tClient('dropzone.subtitle', lang)}
            </p>
          </div>

          {/* Premium Interactive Action Button */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-2.5 px-7 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/30 group-hover:shadow-emerald-600/50 group-hover:scale-105 transition-all duration-200 cursor-pointer">
              <UploadCloud className="w-4 h-4 stroke-[2.5]" />
              <span>{buttonText}</span>
            </span>
          </div>

          {/* Feature Badge Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-[11px] font-bold text-zinc-600 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1.5 bg-zinc-100/90 dark:bg-zinc-800/90 px-3 py-1 rounded-lg border border-zinc-200/60 dark:border-zinc-700/60 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>WebAssembly</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-zinc-100/90 dark:bg-zinc-800/90 px-3 py-1 rounded-lg border border-zinc-200/60 dark:border-zinc-700/60 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Processamento Local • Sem Upload</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-zinc-100/90 dark:bg-zinc-800/90 px-3 py-1 rounded-lg border border-zinc-200/60 dark:border-zinc-700/60 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-teal-500" />
              <span>Free & Unlimited</span>
            </span>
          </div>
        </div>
      </div>

      {warningMessage && (
        <div className="mt-4 p-3.5 bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-2xl text-amber-800 dark:text-amber-300 text-xs sm:text-sm flex items-start gap-3 shadow-xs">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="flex-1 font-medium">{warningMessage}</div>
        </div>
      )}
    </div>
  );
};

export default FileDropZone;
