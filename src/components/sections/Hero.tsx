"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, FileText } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center pt-16 sm:pt-20 pb-10 sm:pb-14 overflow-hidden"
    >
      {/* Background Dot Matrix with Vignette */}
      <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_85%)] pointer-events-none opacity-70" />

      {/* Ambient Top Glow in Palette Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[520px] hero-ambient-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

          {/* Headline */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
            }}
            className="font-display font-bold leading-[1.2] sm:leading-[1.22] tracking-tight text-4xl sm:text-6xl md:text-7xl text-[#191424] max-w-4xl flex flex-wrap justify-center gap-x-[0.25em] pb-2"
          >
            {["Architecting", "robust", "systems", "and"].map((word, idx) => (
              <motion.span
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
              }}
              className="inline-block text-contrast pb-1 overflow-visible"
            >
              fluid digital experiences.
            </motion.span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 font-sans text-[#4b6272] text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal"
          >
            I build high-performance applications bridging resilient backend infrastructure with thoughtful, pixel-crafted frontend design. Specialized in Next.js, Flutter, and AI integrations.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-3.5 mt-8"
          >
            <Magnetic>
              <a href="#projects" className="btn-primary">
                Explore Featured Work <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={portfolioData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FileText className="w-4 h-4 mr-1 text-[#407899]" /> View Resume
              </a>
            </Magnetic>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
