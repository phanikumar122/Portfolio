"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, FileText } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center pt-32 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-8">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-mono text-xs uppercase tracking-widest text-text-muted font-semibold flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Technical Engineer & Developer
          </motion.div>

          {/* Headline - Staggered Text Reveal */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
              },
            }}
            className="font-display font-bold leading-[1.1] tracking-tight text-4xl sm:text-5xl md:text-6xl text-text max-w-4xl flex flex-wrap justify-center gap-x-[0.25em]"
          >
            {["Architecting", "robust", "systems", "and"].map((word, idx) => (
              <motion.span
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, rotateX: -30 },
                  visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 30, rotateX: -30 },
                visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
              }}
              className="inline-block text-contrast"
            >
              fluid digital experiences.
            </motion.span>
          </motion.div>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light"
          >
            I build high-performance applications that bridge reliable backend infrastructure with pixel-perfect frontend design. Specialized in Next.js, Flutter, and Web3 ecosystems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-4"
          >
            <Magnetic>
              <a href="#projects" className="btn-primary">
                Explore Projects <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={portfolioData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FileText className="w-4 h-4 mr-1" /> View Resume
              </a>
            </Magnetic>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
