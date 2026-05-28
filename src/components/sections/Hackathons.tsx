"use client";

import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Trophy, Cpu, Code, Terminal } from "lucide-react";
import { MaskText } from "@/components/ui/MaskText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useRef } from "react";

type Hackathon = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  github?: string;
  link?: string;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const HackathonCard = ({ hack, tags }: { hack: Hackathon; tags: string[] }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const x = mouseX / rect.width - 0.5;
    const y = mouseY / rect.height - 0.5;
    const el = cardRef.current.querySelector(".hackathon-card-inner") as HTMLElement;
    if (el) {
      el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${y * -8}deg)`;
    }
  };

  const handleMouseLeave = () => {
    const el = cardRef.current?.querySelector(".hackathon-card-inner") as HTMLElement;
    if (el) {
      el.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={cardVariants}
      className="group relative overflow-visible rounded-2xl"
    >
      <div
        className="hackathon-card-inner w-full h-full p-5 sm:p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-250 dark:border-neutral-800 rounded-2xl shadow-sm hover:border-neutral-450 dark:hover:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-transparent dark:hover:brushed-metal-dark transition-all duration-300 ease-out flex flex-col justify-between cursor-default"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div style={{ transform: "translateZ(20px)" }}>
          {/* Top Accent with status LED */}
          <div className="flex justify-between items-center text-[8px] font-mono text-neutral-400 dark:text-neutral-500 font-extrabold uppercase tracking-widest mb-4 border-b border-neutral-200 dark:border-neutral-850 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_#10b981] animate-pulse" />
              <span>MODULE REC_0{hack.id}</span>
            </div>
            <span>{hack.date}</span>
          </div>

          <div className="flex items-center gap-2.5 mb-3.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500">
              {hack.id === 1 ? <Code className="w-4.5 h-4.5" /> : hack.id === 2 ? <Cpu className="w-4.5 h-4.5" /> : <Trophy className="w-4.5 h-4.5" />}
            </div>
            <div className="leading-tight">
              <h3 className="text-sm font-bold text-neutral-850 dark:text-neutral-100 uppercase tracking-wide">
                {hack.title}
              </h3>
              <span className="text-[10px] text-neutral-450 dark:text-neutral-400 font-mono font-bold block mt-0.5">
                {hack.subtitle || "Algorithmic Bootcamp"}
              </span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1 mb-4.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[8px] font-mono font-extrabold uppercase tracking-wider px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-500 dark:text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400 line-clamp-4 font-medium mb-6">
            {hack.description}
          </p>
        </div>

        {/* Actions Area */}
        <div 
          className="flex items-center gap-2.5 pt-2 border-t border-neutral-200 dark:border-neutral-850"
          style={{ transform: "translateZ(30px)" }}
        >
          {hack.github && (
            <a
              href={hack.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow flex items-center justify-center gap-1.5 px-3 py-2 text-[9px] font-mono font-black uppercase tracking-wider border border-neutral-300 dark:border-neutral-750 text-neutral-650 dark:text-neutral-350 hover:text-neutral-950 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-950 rounded-lg transition-colors cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5" /> Code
            </a>
          )}
          {hack.link && (
            <a
              href={hack.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow flex items-center justify-center gap-1.5 px-3 py-2 text-[9px] font-mono font-black uppercase tracking-wider bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100 rounded-lg transition-all shadow-sm cursor-pointer"
            >
              Verify Cert
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Hackathons = () => {
  const hackList = (portfolioData.hackathons || []) as Hackathon[];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const getTechTags = (id: number): string[] => {
    if (id === 1) return ["C", "Algorithms", "Optimization", "Structures"];
    if (id === 2) return ["Flutter", "Dart", "IoT", "Hardware", "Sensors"];
    if (id === 3) return ["NLP", "Python", "RoBERTa", "NewsAPI", "AI"];
    if (id === 4) return ["Blockchain", "Move", "Aptos", "Oracle", "Web3"];
    return ["Hackathon", "Engineering"];
  };

  return (
    <section
      id="hackathons"
      className="py-10 sm:py-16 md:py-20 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}
    >
      {/* Background Subtle Blobs */}
      <div className="absolute top-1/3 left-0 pointer-events-none" style={{ width: "clamp(150px,30vw,350px)", height: "clamp(150px,30vw,350px)", background: "radial-gradient(ellipse, var(--blob-1) 0%, transparent 65%)", filter: "blur(70px)" }} />
      <div className="absolute bottom-1/3 right-0 pointer-events-none" style={{ width: "clamp(120px,25vw,300px)", height: "clamp(120px,25vw,300px)", background: "radial-gradient(ellipse, var(--blob-2) 0%, transparent 65%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <ScrollReveal className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="section-line" />
                <p className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: "var(--color-primary)" }}>ACHIEVEMENTS</p>
              </div>
              <h2
                className="font-bold tracking-tighter text-neutral-900 dark:text-neutral-100"
                style={{ fontSize: "clamp(2rem, 7vw, 5.5rem)" }}
              >
                <MaskText>Hackathon Portal.</MaskText>
              </h2>
            </div>
            <p className="max-w-xs text-sm sm:text-base font-medium leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Showcasing competitive building experiences, IoT prototypes, NLP models, and credentials verified in code challenges.
            </p>
          </ScrollReveal>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
          >
            {hackList.map((hack) => (
              <HackathonCard
                key={hack.id}
                hack={hack}
                tags={getTechTags(hack.id)}
              />
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  );
};
