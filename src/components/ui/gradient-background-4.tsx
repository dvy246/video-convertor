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
        className="absolute inset-0 h-full w-full transition-all duration-700 ease-out opacity-90 dark:opacity-100"
        style={{
          background: 'radial-gradient(135% 75% at 50% -12%, var(--aurora-primary) 0%, var(--aurora-secondary) 42%, transparent 82%)'
        }}
      />

      {/* 2. Hero Center Radiant Glow (Directly behind headline & converter card) */}
      <div
        className="absolute top-2 sm:top-8 left-1/2 -translate-x-1/2 w-[750px] sm:w-[1050px] h-[500px] sm:h-[650px] blur-[80px] sm:blur-[115px] rounded-full pointer-events-none transition-all duration-700 ease-out opacity-85 dark:opacity-95 dark:mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse at center, var(--aurora-primary) 0%, var(--orb-1) 32%, var(--orb-2) 65%, transparent 82%)'
        }}
      />

      {/* 3. Top-Left Floating Strawberry & Mint Glow */}
      <div
        className="absolute -top-16 left-[-8%] sm:left-[3%] w-[520px] sm:w-[720px] h-[480px] sm:h-[620px] blur-[75px] sm:blur-[105px] rounded-full animate-aurora-float will-change-transform pointer-events-none transition-all duration-700 ease-out opacity-85 dark:opacity-95 dark:mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse at center, var(--orb-1) 0%, var(--orb-2) 52%, transparent 78%)'
        }}
      />

      {/* 4. Top-Right Floating Glacier & Mint Glow */}
      <div
        className="absolute -top-16 right-[-8%] sm:right-[3%] w-[520px] sm:w-[720px] h-[480px] sm:h-[620px] blur-[75px] sm:blur-[105px] rounded-full animate-aurora-pulse will-change-transform pointer-events-none transition-all duration-700 ease-out opacity-80 dark:opacity-90 dark:mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse at center, var(--orb-2) 0%, var(--orb-3) 52%, transparent 78%)'
        }}
      />

      {/* 5. Mid-Page Subtle Floating Aurora Wash */}
      <div
        className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[420px] sm:h-[540px] blur-[90px] sm:blur-[125px] rounded-full pointer-events-none transition-all duration-700 ease-out opacity-60 dark:opacity-75 dark:mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse at center, var(--orb-3) 0%, var(--orb-1) 48%, transparent 80%)'
        }}
      />

      {/* 6. Bottom-Edge Ambient Floor Glow */}
      <div
        className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[900px] sm:w-[1200px] h-[420px] blur-[95px] sm:blur-[135px] rounded-full pointer-events-none transition-all duration-700 ease-out opacity-50 dark:opacity-70 dark:mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse at center, var(--orb-2) 0%, var(--orb-3) 50%, transparent 80%)'
        }}
      />

      {children}
    </div>
  );
};

export const GradientBackground = Component;
export default Component;
