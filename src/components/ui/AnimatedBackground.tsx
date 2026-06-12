"use client";

import React from "react";

export const AnimatedBackground = () => {
  return (
    <div 
      className="fixed inset-0 w-full h-full -z-50 pointer-events-none select-none overflow-hidden bg-[var(--color-bg)]"
      aria-hidden="true"
    >
      {/* 1. Drift Blob 1 (Cobalt) - Top Left */}
      <div 
        className="absolute w-[clamp(350px,50vw,700px)] h-[clamp(350px,50vw,700px)] rounded-full filter blur-[80px] sm:blur-[100px] animate-blob-drift-1" 
        style={{
          top: "-10%",
          left: "-10%",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)",
        }}
      />

      {/* 2. Drift Blob 2 (Indigo) - Bottom Right */}
      <div 
        className="absolute w-[clamp(300px,45vw,600px)] h-[clamp(300px,45vw,600px)] rounded-full filter blur-[70px] sm:blur-[90px] animate-blob-drift-2" 
        style={{
          bottom: "-10%",
          right: "-10%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, transparent 70%)",
        }}
      />

      {/* 3. Drift Blob 3 (Slate) - Mid-bottom */}
      <div 
        className="absolute w-[clamp(250px,40vw,500px)] h-[clamp(250px,40vw,500px)] rounded-full filter blur-[60px] sm:blur-[80px] animate-blob-drift-3" 
        style={{
          top: "40%",
          left: "25%",
          background: "radial-gradient(circle, rgba(100, 116, 139, 0.03) 0%, transparent 70%)",
        }}
      />

      {/* 4. Fine Digital Grid dot overlay */}
      <div 
        className="absolute inset-0 w-full h-full opacity-65"
        style={{
          backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.016) 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
};
