import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface GradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "emerald" | "subtle" | "original";
}

export const Component = ({ className, children, variant = "emerald" }: GradientBackgroundProps) => {
  const [count, setCount] = useState(0);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 h-full w-full overflow-hidden transition-opacity duration-700 select-none",
        className
      )}
    >
      {/* Primary Top Ambient Radial Glow - Color Matched to ConversordeVídeo Emerald/Teal Theme */}
      <div className="absolute inset-0 h-full w-full [background:radial-gradient(125%_125%_at_50%_-20%,rgba(16,185,129,0.14)_0%,rgba(20,184,166,0.06)_40%,transparent_100%)] dark:[background:radial-gradient(125%_125%_at_50%_-20%,rgba(16,185,129,0.12)_0%,rgba(5,150,105,0.05)_45%,transparent_100%)]" />

      {/* Secondary Soft Horizon Ambient Highlights (Ultra-smooth GPU-accelerated) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-b from-emerald-400/10 via-teal-400/5 to-transparent dark:from-emerald-500/10 dark:via-teal-500/5 dark:to-transparent blur-3xl opacity-70 rounded-full will-change-transform" />

      {children}
    </div>
  );
};

export const GradientBackground = Component;
export default Component;
