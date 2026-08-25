"use client";

import React from "react";

export const BackgroundBlur = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full relative bg-white dark:bg-zinc-900 overflow-hidden">
      <div
        className="absolute inset-0 z-0 animate-pulse"
        style={{
          background: "#ffffff",
          backgroundImage: `
                    radial-gradient(
                    circle at top center,
                    rgba(56, 193, 182, 0.3),
                    transparent 80%
                    )
                `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10 w-full h-full px-40 py-20">
        {children}
      </div>
    </div>
  );
};

