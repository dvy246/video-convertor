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
      {/* 1. Light Airy Ambient Ceiling Wash */}
      <div
        className="absolute inset-0 h-full w-full transition-all duration-700 ease-out opacity-55 dark:opacity-65"
        style={{
          background: 'radial-gradient(120% 45% at 50% 0%, var(--aurora-primary) 0%, var(--aurora-secondary) 35%, transparent 70%)'
        }}
      />

      {/* 2. Top-Left Peripheral Floating Aura (Away from text center) */}
      <div
        className="absolute -top-20 -left-24 w-[500px] sm:w-[700px] h-[450px] sm:h-[600px] blur-[90px] sm:blur-[130px] rounded-full animate-aurora-float will-change-transform pointer-events-none transition-all duration-700 ease-out opacity-45 dark:opacity-55 dark:mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse at center, var(--orb-1) 0%, var(--orb-2) 50%, transparent 75%)'
        }}
      />

      {/* 3. Top-Right Peripheral Floating Aura (Away from text center) */}
      <div
        className="absolute -top-20 -right-24 w-[500px] sm:w-[700px] h-[450px] sm:h-[600px] blur-[90px] sm:blur-[130px] rounded-full animate-aurora-pulse will-change-transform pointer-events-none transition-all duration-700 ease-out opacity-40 dark:opacity-50 dark:mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse at center, var(--orb-2) 0%, var(--orb-3) 50%, transparent 75%)'
        }}
      />

      {/* 4. Subtle Ambient Floor Glow */}
      <div
        className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[350px] blur-[100px] sm:blur-[140px] rounded-full pointer-events-none transition-all duration-700 ease-out opacity-25 dark:opacity-35 dark:mix-blend-screen"
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
