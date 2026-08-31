import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface GradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const Component = ({ className, children }: GradientBackgroundProps) => {
  const [count, setCount] = useState(0);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden select-none",
        className
      )}
    >
      {/* 1. Primary Radial Aurora Background - Vibrant & Vivid in both Dark/Black mode and Light mode */}
      <div className="absolute inset-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_-25%,rgba(16,185,129,0.22)_0%,rgba(20,184,166,0.12)_35%,rgba(5,150,105,0.04)_65%,transparent_100%)] dark:[background:radial-gradient(125%_125%_at_50%_-25%,rgba(16,185,129,0.32)_0%,rgba(5,150,105,0.20)_35%,rgba(13,148,136,0.10)_65%,transparent_100%)]" />

      {/* 2. Top-Center Animated Floating Ambient Orb (Emerald Glow) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-b from-emerald-500/25 via-teal-500/15 to-transparent dark:from-emerald-400/35 dark:via-teal-500/20 dark:to-transparent blur-[90px] sm:blur-[120px] rounded-full animate-aurora-float will-change-transform pointer-events-none" />

      {/* 3. Top-Right Ambient Pulse Orb (Teal Radiance) */}
      <div className="absolute -top-20 right-[5%] sm:right-[15%] w-[400px] sm:w-[600px] h-[350px] bg-gradient-to-br from-teal-400/20 via-emerald-600/10 to-transparent dark:from-teal-400/30 dark:via-emerald-500/15 dark:to-transparent blur-[80px] sm:blur-[100px] rounded-full animate-aurora-pulse will-change-transform pointer-events-none" />

      {/* 4. Top-Left Ambient Accent (Soft Mint Light) */}
      <div className="absolute -top-28 left-[5%] sm:left-[10%] w-[350px] sm:w-[500px] h-[300px] bg-gradient-to-tr from-emerald-400/15 via-teal-300/10 to-transparent dark:from-emerald-500/25 dark:via-teal-400/15 dark:to-transparent blur-[70px] sm:blur-[90px] rounded-full animate-aurora-float will-change-transform pointer-events-none" style={{ animationDelay: '-4s' }} />

      {children}
    </div>
  );
};

export const GradientBackground = Component;
export default Component;
