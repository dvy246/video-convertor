import React from 'react';
import { FileUpload } from '@/components/ui/file-upload';
import { Component as GradientBackground } from '@/components/ui/gradient-background-4';

export default function DemoOne() {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center p-8">
      <GradientBackground />
      <FileUpload />
    </div>
  );
}
