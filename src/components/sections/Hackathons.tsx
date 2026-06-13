"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Trophy, Cpu, Code, Github, Award } from "lucide-react";
import { MaskText } from "@/components/ui/MaskText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type Hackathon = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  github?: string;
  link?: string;
};

const HackathonCard = ({ hack, tags, idx }: { hack: Hackathon; tags: string[]; idx: number }) => {
  const getIcon = () => {
    switch (hack.id) {
      case 1: return <Code className="w-4.5 h-4.5" />;
      case 2: return <Cpu className="w-4.5 h-4.5" />;
      case 3: return <Trophy className="w-4.5 h-4.5" />;
      case 4: return <Award className="w-4.5 h-4.5" />;
      default: return <Trophy className="w-4.5 h-4.5" />;
    }
  };

  const getIconStyle = () => {
    switch (hack.id) {
      case 1: return "text-blue-600 bg-blue-50 border-2 border-[var(--neutral-900)] shadow-[1px_1px_0px_#18181A]";
      case 2: return "text-indigo-600 bg-indigo-50 border-2 border-[var(--neutral-900)] shadow-[1px_1px_0px_#18181A]";
      case 3: return "text-slate-600 bg-slate-50 border-2 border-[var(--neutral-900)] shadow-[1px_1px_0px_#18181A]";
      case 4: return "text-blue-600 bg-blue-50 border-2 border-[var(--neutral-900)] shadow-[1px_1px_0px_#18181A]";
      default: return "text-blue-600 bg-blue-50 border-2 border-[var(--neutral-900)] shadow-[1px_1px_0px_#18181A]";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="card-elevated w-full h-full relative overflow-hidden"
    >
      <div className="w-full h-full p-6 sm:p-8 bg-[var(--color-surface)] flex flex-col justify-between cursor-default relative overflow-hidden">
        <div>
          {/* Top Accent with Date */}
          <div className="flex justify-end items-center text-[8px] font-mono text-[var(--color-text-muted)] font-extrabold uppercase tracking-widest mb-4 border-b border-[var(--color-border)] pb-2 relative z-10">
            <span>{hack.date}</span>
          </div>

          <div className="flex items-center gap-2.5 mb-3.5 relative z-10">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${getIconStyle()}`}>
              {getIcon()}
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
          <div className="flex flex-wrap gap-1.5 mb-4.5 relative z-10">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[8px] font-mono font-extrabold uppercase tracking-wider px-2 py-0.5 rounded border-2 border-[var(--neutral-900)] bg-[var(--color-bg)] text-[var(--color-text)] shadow-[1px_1px_0px_#18181A]"
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
        <div className="flex items-center gap-2.5 pt-4 border-t border-[var(--color-border)] relative z-10">
          {hack.github && (
            <a
              href={hack.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border-2 border-[var(--neutral-900)] bg-white text-[10px] font-extrabold uppercase tracking-widest text-[var(--color-text)] shadow-[3px_3px_0px_#18181A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#18181A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#18181A] transition-all duration-150 flex items-center gap-1.5"
              style={{ minHeight: "36px" }}
            >
              <Github className="w-3.5 h-3.5" /> Source
            </a>
          )}
          {hack.link && (
            <a
              href={hack.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border-2 border-[var(--neutral-900)] bg-[var(--color-primary)] text-white text-[10px] font-extrabold uppercase tracking-widest shadow-[3px_3px_0px_#18181A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#18181A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#18181A] transition-all duration-150 flex items-center gap-1.5"
              style={{ minHeight: "36px" }}
            >
              Memento <Award className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Hackathons = () => {
  const hackList = (portfolioData.hackathons || []) as Hackathon[];

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
