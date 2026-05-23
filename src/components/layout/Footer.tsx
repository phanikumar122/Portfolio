"use client";

import { Zap, Cpu, Code2, Shield } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Footer = () => {
  return (
    <footer
      className="py-14 sm:py-20 relative overflow-hidden"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-48 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, var(--blob-1) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3 items-center sm:items-start text-center sm:text-left">
            <div className="flex items-baseline gap-1">
              <span className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: "var(--color-text)" }}>
                Phani
              </span>
              <span
                className="text-xl sm:text-2xl font-bold tracking-tight italic"
                style={{ color: "var(--color-text)" }}
              >
                Kumar.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-3 h-3" style={{ color: "var(--color-text)" }} />
              <p className="text-[10px] uppercase tracking-[0.18em] font-semibold" style={{ color: "var(--color-text-muted)" }}>
                Precision Engineered Digital Artifacts
              </p>
            </div>
          </div>

          {/* Skeuomorphic About Card */}
          <div className="crt-screen brushed-metal rounded-xl p-4 sm:p-5 max-w-xs w-full group/card" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "0 4px 24px var(--color-glow)" }}>
            <div className="crt-phosphor" />
            <div className="crt-sweep" />
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-glow-pulse" />
              <span className="text-[8px] font-mono font-bold uppercase tracking-widest animate-crt-flicker crt-aberration" style={{ color: "var(--color-text-muted)" }}>SYS::PROFILE</span>
              <div className="ml-auto flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              </div>
            </div>
            <p className="text-xs leading-relaxed font-medium" style={{ color: "var(--color-text)" }}>
              {portfolioData.description}
            </p>
            <div className="flex items-center gap-3 mt-3 pt-3" style={{ borderTop: "1px solid var(--color-border)" }}>
              {[Cpu, Code2, Shield].map((Icon, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[9px] font-mono font-bold animate-thermal-pulse" style={{ color: "var(--color-text-muted)", animationDelay: `${i * 0.3}s` }}>
                  <Icon className="w-3 h-3 group-hover/card:scale-110 transition-transform" />
                  <span>{["7+ Projects", "4 Stacks", "6 Certs"][i]}</span>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-px opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, transparent, var(--color-primary), transparent)" }} />
          </div>
        </div>

        <div
          className="w-full h-px"
          style={{ background: "linear-gradient(90deg, transparent, var(--color-border), transparent)" }}
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-text-muted)" }}>
          <p style={{ opacity: 0.6 }}>&copy; {new Date().getFullYear()} Phani Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
