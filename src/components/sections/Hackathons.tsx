"use client";

import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Trophy, Cpu, Code, Github, Award } from "lucide-react";
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

// cardVariants removed

const HackathonCard = ({ hack, tags, idx }: { hack: Hackathon; tags: string[]; idx: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    cardRef.current.style.setProperty('--mouse-x', `${mouseXPos}px`);
    cardRef.current.style.setProperty('--mouse-y', `${mouseYPos}px`);

    const x = mouseXPos / rect.width - 0.5;
    const y = mouseYPos / rect.height - 0.5;
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-[1.5rem] bg-[var(--color-border)] p-[1px] transition-all duration-300 hover:shadow-[0_16px_48px_rgba(var(--color-primary-rgb),0.06)]"
    >
      {/* Spotlight Border Glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(var(--color-primary-rgb), 0.15), transparent 80%)`
        }}
      />

      <div
        className="hackathon-card-inner w-full h-full p-6 sm:p-8 bg-[var(--color-surface)] group-hover:bg-[var(--card-bg)] rounded-[1.45rem] transition-all duration-300 ease-out flex flex-col justify-between cursor-default relative overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Spotlight Background Glow */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(var(--color-primary-rgb), 0.04), transparent 40%)`
          }}
        />

        <div style={{ transform: "translateZ(20px)" }}>

          {/* Top Accent with Date */}
          <div className="flex justify-between items-center text-[8px] font-mono text-[var(--color-text-muted)] font-extrabold uppercase tracking-widest mb-4 border-b border-[var(--color-border)] pb-2 relative z-10">
            <span>Hackathon</span>
            <span>{hack.date}</span>
          </div>

          <div className="flex items-center gap-2.5 mb-3.5 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500">
              {hack.id === 1 ? <Code className="w-4.5 h-4.5" /> : hack.id === 2 ? <Cpu className="w-4.5 h-4.5" /> : <Trophy className="w-4.5 h-4.5" />}
            </div>
            <div className="leading-tight">
              <h3 className="text-sm font-bold text-[var(--color-text)] uppercase tracking-wide">
                {hack.title}
              </h3>
              <span className="text-[10px] text-[var(--color-text-muted)] font-mono font-bold block mt-0.5">
                {hack.subtitle || "Algorithmic Bootcamp"}
              </span>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1 mb-4.5 relative z-10">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[8px] font-mono font-extrabold uppercase tracking-wider px-2 py-0.5 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xs leading-relaxed text-[var(--color-text-muted)] line-clamp-4 font-medium mb-6 relative z-10">
            {hack.description}
          </p>
        </div>

        {/* Actions Area */}
        <div 
          className="flex items-center gap-2.5 pt-4 border-t border-[var(--color-border)] relative z-10"
          style={{ transform: "translateZ(30px)" }}
        >
          {hack.github && (
            <a
              href={hack.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-[var(--color-border)] text-[10px] font-bold uppercase tracking-widest transition-all duration-250 hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" /> Github
            </a>
          )}
          {hack.link && (
            <a
              href={hack.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[var(--color-primary)] text-[var(--color-bg)] text-[10px] font-bold uppercase tracking-widest transition-all duration-250 hover:bg-[var(--color-primary-mid)] flex items-center gap-1.5 shadow-sm"
            >
              Momento <Award className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Hackathons = () => {
  const hackList = (portfolioData.hackathons || []) as Hackathon[];

  // containerVariants removed

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
      style={{ borderTop: "1px solid var(--color-border)" }}
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
                className="font-bold tracking-tighter"
                style={{ color: "var(--color-text)", fontSize: "clamp(2rem, 7vw, 5.5rem)" }}
              >
                <MaskText>Hackathon Portal.</MaskText>
              </h2>
            </div>
            <p className="max-w-xs text-sm sm:text-base font-medium leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Showcasing competitive building experiences, IoT prototypes, NLP models, and credentials verified in code challenges.
            </p>
          </ScrollReveal>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {hackList.map((hack, idx) => (
              <HackathonCard
                key={hack.id}
                hack={hack}
                tags={getTechTags(hack.id)}
                idx={idx}
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};
