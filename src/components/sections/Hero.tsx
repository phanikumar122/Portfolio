"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, FileText } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-6">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-mono text-xs uppercase tracking-widest text-primary font-semibold"
          >
            Technical Engineer
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display font-bold leading-[1.1] tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-text max-w-4xl"
          >
            Engineering scalable backends and <span className="glow-text">seamless interactive interfaces.</span>
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-text-muted text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            I am a Technical Engineer and Creative Developer passionate about creating responsive frontend experiences and solid backends. Specializing in Next.js, Flutter, Node.js, and Move smart contracts on Aptos, I merge system reliability with state-of-the-art visuals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-2"
          >
            <a href="#projects" className="btn-primary">
              Explore Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FileText className="w-4 h-4" /> Download Resume
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
