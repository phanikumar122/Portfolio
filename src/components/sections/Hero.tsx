"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden"
    >
      <div id="about" className="absolute top-0 left-0 w-full h-0 pointer-events-none" aria-hidden="true" />

      {/* Cinematic glow layers */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute" style={{ top: "-5%", left: "-5%", width: "65%", height: "65%", background: "radial-gradient(ellipse, var(--blob-1) 0%, transparent 65%)", filter: "blur(70px)" }} />
        <div className="absolute" style={{ bottom: "-5%", right: "-5%", width: "55%", height: "55%", background: "radial-gradient(ellipse, var(--blob-2) 0%, transparent 65%)", filter: "blur(60px)" }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center gap-8">

        {/* ── Name Header ── */}
        <div className="text-center flex flex-col items-center max-w-2xl">
          {/* Location status badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[var(--neutral-100)] border-2 border-[var(--neutral-900)] text-[var(--color-primary)] shadow-[2px_2px_0px_#18181A] mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Location: India · Available for Remote</span>
          </motion.div>

          {/* Main Title Name */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold tracking-tighter leading-[1.04] mb-2 uppercase text-[var(--color-text)]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)" }}
          >
            Phani Kumar
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm font-mono text-[var(--color-primary)] font-black uppercase tracking-widest"
          >
            &gt; Technical Engineer &amp; Creative Developer
          </motion.p>
        </div>

      </div>
    </section>
  );
};
