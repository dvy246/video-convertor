import React, { useState, useRef } from 'react';
import { UploadCloud, File as FileIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FileUploadProps {
  className?: string;
  onFilesSelected?: (files: File[]) => void;
  accept?: string;
  maxSizeMB?: number;
  multiple?: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  className,
  onFilesSelected,
  accept,
  maxSizeMB = 10,
  multiple = true
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle drag events
  const handleDrag = (e: React.DragEvent<HTMLDivElement | HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle drop event
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...newFiles]);
      onFilesSelected?.(newFiles);
    }
  };

  // Handle file selection via button
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
      onFilesSelected?.(newFiles);
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const removeFile = (indexToRemove: number) => {
    setFiles(files.filter((_, index) => index !== indexToRemove));
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className={cn(
      "w-full max-w-xl p-6 sm:p-8 mx-auto bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-zinc-200/80 dark:border-zinc-800 font-sans transition-all duration-200",
      className
    )}>
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">Upload your files</h2>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1.5">
          {accept || 'Videos, Audio, or Images up to 500MB • Private & Local'}
        </p>
      </div>

      <form 
        onDragEnter={handleDrag} 
        onSubmit={(e) => e.preventDefault()}
        className="relative"
      >
        <input 
          ref={inputRef}
          type="file" 
          multiple={multiple}
          accept={accept}
          onChange={handleChange}
          className="hidden" 
        />
        
        <div 
          className={`flex flex-col items-center justify-center w-full min-h-[220px] rounded-2xl border-2 border-dashed transition-all duration-200 ease-in-out cursor-pointer p-8 text-center
            ${dragActive 
              ? 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 scale-[1.01] shadow-lg shadow-emerald-500/10' 
              : 'border-zinc-300/80 dark:border-zinc-700/80 bg-zinc-50/50 hover:bg-emerald-50/30 dark:bg-zinc-800/30 dark:hover:bg-zinc-800/60 hover:border-emerald-500/70 shadow-xs'
            }`}
          onClick={onButtonClick}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          role="button"
          tabIndex={0}
        >
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-200 ${
            dragActive 
              ? 'bg-emerald-600 text-white scale-110 shadow-lg shadow-emerald-600/30' 
              : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/60 group-hover:scale-105'
          }`}>
            <UploadCloud className="w-7 h-7" />
          </div>

          <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 font-semibold mb-1">
            Drag & drop files or <span className="text-emerald-600 dark:text-emerald-400 underline underline-offset-2 hover:text-emerald-700 dark:hover:text-emerald-300">Browse Device</span>
          </p>

          <span className="text-xs text-zinc-400 dark:text-zinc-500">
            Processed locally in your browser memory
          </span>
        </div>
      </form>

      {files.length > 0 && (
        <div className="mt-6 space-y-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
              Selected Files ({files.length})
            </h3>
          </div>
          <div className="max-h-56 overflow-y-auto space-y-2 pr-1">
            {files.map((file, index) => (
              <div 
                key={`${file.name}-${index}`} 
                className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 rounded-xl group hover:border-emerald-500/50 transition-all shadow-xs"
              >
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="p-2.5 bg-white dark:bg-zinc-900 rounded-lg shadow-xs text-emerald-600 dark:text-emerald-400 shrink-0 border border-zinc-200/80 dark:border-zinc-700/80">
                    <FileIcon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col overflow-hidden text-left">
                    <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white truncate">
                      {file.name}
                    </span>
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                      {formatSize(file.size)}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => removeFile(index)}
                  className="p-1.5 text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors shrink-0 cursor-pointer"
                  aria-label="Remove file"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
