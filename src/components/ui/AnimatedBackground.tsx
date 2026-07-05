"use client";

import React from "react";

export const AnimatedBackground = () => {
  return (
    <div 
      className="fixed inset-0 w-full h-full -z-50 pointer-events-none select-none overflow-hidden bg-bg"
      aria-hidden="true"
    >
      {/* 1. Drift Blob 1 (Neon Indigo) - Top Left */}
      <div 
        className="absolute w-[clamp(400px,60vw,800px)] h-[clamp(400px,60vw,800px)] rounded-full filter blur-[120px] sm:blur-[150px] animate-blob-drift-1" 
        style={{
          top: "-15%",
          left: "-15%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.045) 0%, transparent 70%)",
        }}
      />

      {/* 2. Drift Blob 2 (Neon Purple) - Bottom Right */}
      <div 
        className="absolute w-[clamp(350px,50vw,700px)] h-[clamp(350px,50vw,700px)] rounded-full filter blur-[110px] sm:blur-[130px] animate-blob-drift-2" 
        style={{
          bottom: "-15%",
          right: "-15%",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.035) 0%, transparent 70%)",
        }}
      />

      {/* 3. Drift Blob 3 (Muted Indigo) - Mid-bottom left */}
      <div 
        className="absolute w-[clamp(300px,45vw,600px)] h-[clamp(300px,45vw,600px)] rounded-full filter blur-[100px] sm:blur-[120px] animate-blob-drift-3" 
        style={{
          top: "35%",
          left: "20%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.02) 0%, transparent 70%)",
        }}
      />

      {/* 4. Fine Digital Grid dot overlay */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.025) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
};
