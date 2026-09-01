import { cn } from "@/lib/utils";
import React from "react";

interface GradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const Component = ({ className, children }: GradientBackgroundProps) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden select-none",
        className
      )}
    >
      {/* 1. Seamless Full-Width Soft Ambient Ceiling Wash */}
      <div
        className="absolute inset-0 h-full w-full transition-all duration-700 ease-out"
        style={{
          background: 'radial-gradient(130% 60% at 50% -15%, var(--aurora-primary) 0%, var(--aurora-secondary) 40%, transparent 80%)'
        }}
      />

      {/* 2. Top-Left Distant Atmospheric Glow (Spreads smoothly to the edge) */}
      <div
        className="absolute -top-44 -left-32 w-[650px] sm:w-[850px] h-[550px] blur-[130px] sm:blur-[160px] rounded-full animate-aurora-float will-change-transform pointer-events-none transition-all duration-700 ease-out opacity-75 dark:opacity-85 dark:mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse at center, var(--orb-1) 0%, var(--orb-2) 55%, transparent 80%)'
        }}
      />

      {/* 3. Top-Right Distant Atmospheric Glow (Balanced on right edge) */}
      <div
        className="absolute -top-44 -right-32 w-[650px] sm:w-[850px] h-[550px] blur-[130px] sm:blur-[160px] rounded-full animate-aurora-pulse will-change-transform pointer-events-none transition-all duration-700 ease-out opacity-70 dark:opacity-80 dark:mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse at center, var(--orb-2) 0%, var(--orb-3) 55%, transparent 80%)'
        }}
      />

      {/* 4. Bottom-Edge Subtle Ambient Floor Glow */}
      <div
        className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[900px] sm:w-[1200px] h-[400px] blur-[150px] sm:blur-[190px] rounded-full pointer-events-none transition-all duration-700 ease-out opacity-40 dark:opacity-60 dark:mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse at center, var(--orb-3) 0%, var(--orb-1) 50%, transparent 80%)'
        }}
      />

      {children}
    </div>
  );
};

export const GradientBackground = Component;
export default Component;
