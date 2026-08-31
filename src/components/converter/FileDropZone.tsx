import React, { useState, useRef, useCallback } from 'react';
import { tClient } from '../../i18n/client';

interface FileDropZoneProps {
  onFileSelected: (file: File) => void;
  acceptedFormats?: string;
  disabled?: boolean;
}

export const FileDropZone: React.FC<FileDropZoneProps> = ({
  onFileSelected,
  acceptedFormats = 'video/*,audio/*,.mov,.mp4,.webm,.mkv,.avi,.wmv,.flv,.m4v,.3gp,.ts,.m2ts,.mts,.vob,.mxf',
  disabled = false
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [warningMessage, setWarningMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback((file: File) => {
    setWarningMessage(null);
    
    // Check file size warning (> 350 MB)
    if (file.size > 350 * 1024 * 1024) {
      setWarningMessage(
        `Aviso: O arquivo selecionado tem ${(file.size / (1024 * 1024)).toFixed(0)} MB. Arquivos muito grandes podem demorar mais para processar no navegador dependendo da memória do seu dispositivo.`
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
        className={`relative group cursor-pointer rounded-2xl p-8 sm:p-12 text-center transition-all duration-200 border-2 border-dashed ${
          isDragOver
            ? 'border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 scale-[1.01]'
            : 'border-zinc-300 dark:border-zinc-700 hover:border-emerald-500/80 dark:hover:border-emerald-500 bg-white dark:bg-zinc-900/60 hover:bg-zinc-50/70 dark:hover:bg-zinc-800/60 shadow-xs'
        } ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedFormats}
          onChange={handleFileInputChange}
          className="hidden"
          disabled={disabled}
          id="video-file-input"
        />

        <div className="flex flex-col items-center justify-center gap-4">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110 ${
            isDragOver 
              ? 'bg-emerald-600 text-white shadow-md' 
              : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/60'
          }`}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>

          <div className="space-y-1.5 max-w-md">
            <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white tracking-tight">
              {tClient('dropzone.title')}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {tClient('dropzone.subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs text-zinc-600 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md font-medium text-zinc-700 dark:text-zinc-300">
              ⚡ WebAssembly
            </span>
            <span className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md font-medium text-zinc-700 dark:text-zinc-300">
              🔒 {tClient('header.badge')}
            </span>
            <span className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md font-medium text-zinc-700 dark:text-zinc-300">
              ✨ 100% Free
            </span>
          </div>
        </div>
      </div>

      {warningMessage && (
        <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-xl text-amber-800 dark:text-amber-300 text-xs sm:text-sm flex items-start gap-2.5">
          <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div className="flex-1">{warningMessage}</div>
        </div>
      )}
    </div>
  );
};
