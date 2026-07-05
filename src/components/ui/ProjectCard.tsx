"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

interface ProjectCardProps {
  project: Project;
  idx: number;
  layoutSize?: "featured" | "major" | "minor";
}

// ── SkillTern Micro-UI ──
const SkillTernMock = () => (
  <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden select-none">
    <div className="flex items-center justify-between w-full max-w-[220px] z-10">
      {/* Student Node */}
      <div className="flex flex-col items-center gap-1 p-2 rounded-xl border border-[var(--color-border)] bg-[var(--card-bg)] shadow-sm w-16 text-center">
        <span className="text-xs">🎓</span>
        <div className="text-[7px] font-bold truncate w-full text-[var(--color-text)]">Student</div>
      </div>
      
      {/* Connecting Vector */}
      <div className="flex-1 h-[1px] bg-[var(--color-border)] relative mx-2">
        <motion.div
          whileInView={{ left: ["0%", "100%"] }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[3.5px] w-2 h-2 rounded-full bg-[var(--color-primary)] border border-[var(--color-border)] shadow-sm"
        />
      </div>

      {/* Corporate Node */}
      <div className="flex flex-col items-center gap-1 p-2 rounded-xl border border-[var(--color-border)] bg-[var(--card-bg)] shadow-sm w-16 text-center">
        <span className="text-xs">🏢</span>
        <div className="text-[7px] font-bold truncate w-full text-[var(--color-text)]">Internship</div>
      </div>
    </div>
    <div className="absolute text-[8px] font-mono bottom-2 text-[var(--color-accent)] font-black px-2.5 py-1 rounded border border-[var(--color-border)] bg-[var(--card-bg-glass)] backdrop-blur-md shadow-sm">
      Match Rate: <span className="font-extrabold text-[var(--color-primary)]">98.5%</span>
    </div>
  </div>
);

// ── ToDo App Micro-UI ──
const ToDoMock = () => (
  <div className="w-full h-full flex flex-col justify-center items-center p-4 select-none">
    <div className="w-[135px] rounded-xl border border-[var(--color-border)] bg-[var(--card-bg)] shadow-md overflow-hidden p-2.5 flex flex-col gap-1.5 h-[125px]">
      <div className="h-1 w-8 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto mb-0.5" />
      <div className="text-[9px] font-extrabold border-b border-[var(--color-border)] pb-1 mb-0.5 text-[var(--color-text)]">Focus List</div>
      <div className="flex flex-col gap-1 overflow-hidden">
        {[
          { text: "Finish core API", done: true },
          { text: "Test responsive UI", done: false },
          { text: "Release candidate", done: false },
        ].map((task, idx) => (
          <div key={idx} className="flex items-center gap-1.5">
            <motion.div
              whileInView={{ scale: task.done ? [1, 1.1, 1] : 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2.5 }}
              className={`w-3.5 h-3.5 rounded flex items-center justify-center border border-[var(--color-border)] text-[7px] font-bold shadow-sm ${
                task.done
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                  : "bg-white dark:bg-slate-900"
              }`}
            >
              {task.done ? "✓" : ""}
            </motion.div>
            <span className={`text-[7px] font-bold truncate ${task.done ? "line-through text-neutral-400 dark:text-neutral-500" : "text-[var(--color-text-muted)]"}`}>{task.text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── Syllabi-AI Micro-UI ──
const SyllabiAIMock = () => {
  return (
    <div className="w-full h-full flex flex-col p-4 justify-between select-none relative overflow-hidden">
      {/* Top Header */}
      <div className="flex justify-between items-center bg-[var(--card-bg)] px-3 py-1.5 rounded-lg border border-[var(--color-border)] shadow-sm relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
          <span className="text-[8px] font-bold text-[var(--color-text)]">Syllabi-AI Parser</span>
        </div>
        <span className="text-[6px] font-mono bg-[var(--color-primary)] text-white border border-[var(--color-primary)] px-1 py-0.5 rounded font-extrabold">v2.0</span>
      </div>

      {/* Progress & Generation Pipeline */}
      <div className="flex-1 flex flex-col justify-center gap-2.5 mt-2 relative z-10">
        
        {/* Step 1: Uploading and Parsing */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-2.5 flex flex-col gap-1.5 shadow-sm">
          <div className="flex justify-between items-center text-[7px] font-bold">
            <span className="text-[var(--color-text-muted)] truncate max-w-[70%]">📄 syllabus_computer_science.pdf</span>
            <span className="font-mono text-[var(--color-primary)]">Parsing...</span>
          </div>
          {/* Animated Progress Bar */}
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 border border-[var(--color-border)] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-[var(--color-primary)]"
            />
          </div>
        </div>

        {/* Step 2: Milestone Output */}
        <div className="flex justify-between gap-1.5">
          {[
            { title: "M1: Syntax", weeks: "W1-2", color: "bg-[var(--card-bg)] text-[var(--color-primary)]" },
            { title: "M2: OOP", weeks: "W3-4", color: "bg-[var(--card-bg)] text-[var(--color-accent)]" },
            { title: "M3: DBMS", weeks: "W5-6", color: "bg-[var(--card-bg)] text-[var(--color-accent)]" }
          ].map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.0 + idx * 0.3 }}
              className={`flex-1 ${milestone.color} border border-[var(--color-border)] rounded-md p-1.5 flex flex-col justify-between h-14 shadow-sm`}
            >
              <div className="leading-none">
                <span className="text-[5px] font-mono font-extrabold uppercase tracking-wider block text-neutral-400 dark:text-neutral-500">{milestone.weeks}</span>
                <span className="text-[7px] font-extrabold block mt-0.5 leading-tight truncate">{milestone.title}</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-[5px] font-mono text-neutral-400 dark:text-neutral-500 font-bold">Tasks: 4</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

// ── TruthLens Micro-UI ──
const TruthLensMock = () => {
  return (
    <div className="w-full h-full flex flex-col p-4 justify-between select-none relative overflow-hidden">
      {/* Header bar */}
      <div className="flex justify-between items-center bg-[var(--card-bg)] px-3 py-1.5 rounded-lg border border-[var(--color-border)] shadow-sm relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
          <span className="text-[8px] font-bold text-[var(--color-text)]">TruthLens Analyzer</span>
        </div>
        <span className="text-[6px] font-mono bg-[var(--color-primary)] text-white border border-[var(--color-primary)] px-1 py-0.5 rounded font-extrabold">Realtime</span>
      </div>

      {/* Document Scanner Area */}
      <div className="flex-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg mt-2 p-3 relative overflow-hidden flex flex-col justify-between h-28 shadow-sm">
        {/* Animated Scan Line */}
        <motion.div
          whileInView={{ top: ["0%", "92%", "0%"] }}
          viewport={{ once: true }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 right-0 h-[2px] bg-[var(--color-primary)] z-20 pointer-events-none"
        />

        {/* Article Headline block */}
        <motion.div
          whileInView={{
            backgroundColor: ["rgba(0,0,0,0)", "rgba(var(--color-primary-rgb),0.04)", "rgba(var(--color-primary-rgb),0.04)", "rgba(0,0,0,0)"],
            borderColor: ["var(--color-border)", "var(--color-border)", "var(--color-border)", "var(--color-border)"],
          }}
          viewport={{ once: true }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="border border-[var(--color-border)] bg-[var(--card-bg)] rounded-md p-1.5 flex justify-between items-center relative z-10 shadow-sm"
        >
          <div className="flex flex-col gap-0.5 w-[70%]">
            <span className="text-[5px] font-mono text-neutral-400 dark:text-neutral-500 font-extrabold uppercase">HEADLINE BLOCK</span>
            <div className="h-1.5 w-full bg-neutral-200 dark:bg-neutral-700 rounded-xs" />
          </div>
          <motion.span
            whileInView={{ opacity: [0, 1, 1, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-[6px] font-bold text-[var(--color-accent)] border border-[var(--color-accent)] bg-[var(--color-surface)] px-1 rounded-sm shadow-sm"
          >
            VERIFIED
          </motion.span>
        </motion.div>

        {/* Article Paragraph Line 1 (Manipulated claims) */}
        <motion.div
          whileInView={{
            backgroundColor: ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(239,68,68,0.04)", "rgba(239,68,68,0.04)", "rgba(0,0,0,0)"],
            borderColor: ["var(--color-border)", "var(--color-border)", "var(--color-border)", "var(--color-border)"],
          }}
          viewport={{ once: true }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="border border-[var(--color-border)] bg-[var(--card-bg)] rounded-md p-1.5 flex justify-between items-center relative z-10 shadow-sm"
        >
          <div className="flex flex-col gap-0.5 w-[70%]">
            <span className="text-[5px] font-mono text-neutral-400 dark:text-neutral-500 font-extrabold uppercase">CLAIM ANALYSIS</span>
            <div className="h-1.5 w-[85%] bg-neutral-200 dark:bg-neutral-700 rounded-xs" />
          </div>
          <motion.span
            whileInView={{ opacity: [0, 0, 1, 1, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-[6px] font-bold text-rose-500 border border-rose-500 bg-[var(--color-surface)] px-1 rounded-sm shadow-sm"
          >
            DECEPTIVE
          </motion.span>
        </motion.div>

        {/* Footer Metrics */}
        <div className="flex justify-between items-center text-[5.5px] font-mono text-neutral-400 dark:text-neutral-500 border-t border-[var(--color-border)] pt-1.5">
          <span>PIPELINE: HYBRID_RoBERTa</span>
          <div className="flex items-center gap-1 text-[var(--color-accent)] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span>Fact-Check: Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Decentralized Network Micro-UI ──
const DecentralizedNetworkMock = () => (
  <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden select-none">
    <div className="relative w-16 h-16 flex items-center justify-center">
      <div className="w-7 h-7 rounded-full border border-[var(--color-border)] bg-[var(--card-bg)] z-10 flex items-center justify-center text-[8px] shadow-md text-[var(--color-primary)] font-extrabold">
        ⛓
      </div>
      {[0, 120, 240].map((deg, i) => (
        <motion.div
          key={i}
          whileInView={{ rotate: 360 }}
          viewport={{ once: true }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div
            className="w-3.5 h-3.5 rounded-full border border-[var(--color-border)] bg-[var(--card-bg)] flex items-center justify-center text-[6px] absolute shadow-sm text-neutral-500 font-bold"
            style={{
              top: "50%",
              left: "100%",
              transform: `translate(-50%, -50%) rotate(-${deg}deg)`,
              transformOrigin: "center",
            }}
          >
            ●
          </div>
        </motion.div>
      ))}
      <div className="absolute w-16 h-16 rounded-full border border-dashed border-[var(--color-border)] pointer-events-none" />
    </div>
    <div className="absolute bottom-2 text-[6px] font-mono text-[var(--color-text-muted)] font-bold px-2 py-0.5 rounded border border-[var(--color-border)] bg-[var(--card-bg)] shadow-sm">
      Staked Pool: <span className="font-extrabold text-[var(--color-primary)]">42,500 APT</span>
    </div>
  </div>
);

// ── Smart Hand Rehab Micro-UI (Skeuomorphic OLED Panel) ──
const SmartHandRehabMock = () => {
  const fingers = [
    { label: "T", value: 72 },
    { label: "I", value: 85 },
    { label: "M", value: 60 },
    { label: "R", value: 90 },
    { label: "P", value: 45 },
  ];
  return (
    <div className="w-full h-full flex items-center justify-center p-3 select-none">
      {/* OLED bezel */}
      <div
        className="w-full max-w-[210px] rounded-xl overflow-hidden shadow-lg border border-[var(--color-border)] relative"
        style={{ background: "#060a0f" }}
      >
        {/* OLED scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-20 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(78,163,146,0.08) 2px, rgba(78,163,146,0.08) 4px)",
          }}
        />
        {/* Status bar */}
        <div className="flex justify-between items-center px-3 pt-2 pb-1 border-b border-emerald-900/40">
          <span className="text-[7px] font-mono font-black tracking-widest" style={{ color: "#4EA392" }}>REHAB.SYS</span>
          <div className="flex items-center gap-1.5">
            {/* Bluetooth LED */}
            <motion.span
              whileInView={{ opacity: [1, 0.3, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="text-[7px]"
              style={{ color: "#E66E53" }}
            >
              ⬡
            </motion.span>
            <span className="text-[6px] font-mono" style={{ color: "#E66E53" }}>BT</span>
            {/* Vibration LED */}
            <motion.span
              whileInView={{ opacity: [0.3, 1, 0.3] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="w-1.5 h-1.5 rounded-full border border-slate-700"
              style={{ background: "#E66E53", display: "inline-block" }}
            />
            <span className="text-[6px] font-mono" style={{ color: "#E66E53" }}>VIB</span>
          </div>
        </div>

        {/* Finger flex sensors */}
        <div className="px-3 py-2">
          <div className="text-[6px] font-mono mb-2 tracking-widest" style={{ color: "#4EA39255" }}>FLEX SENSOR MATRIX</div>
          <div className="flex items-end gap-2 h-12">
            {fingers.map((f, i) => (
              <div key={i} className="flex flex-col items-center justify-end gap-0.5 flex-1 h-full">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${f.value}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2 + i * 0.15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="w-full rounded-sm"
                  style={{ background: "linear-gradient(to top, var(--color-accent), #385A52)", minHeight: 2 }}
                />
                <span className="text-[6px] font-mono font-black" style={{ color: "#4EA39288" }}>{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live readout */}
        <div className="px-3 pb-2 pt-0.5 border-t border-emerald-900/30 flex justify-between items-center">
          <span className="text-[6px] font-mono" style={{ color: "#4EA39266" }}>ROM AVG</span>
          <motion.span
            whileInView={{ opacity: [1, 0.6, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[9px] font-mono font-black"
            style={{ color: "#4EA392" }}
          >
            70.4°
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export const ProjectCard = ({ project, idx, layoutSize = "major" }: ProjectCardProps) => {

  const renderMicroUI = () => {
    switch (project.id) {
      case 2:
        return <SkillTernMock />;
      case 3:
        return <ToDoMock />;
      case 4:
        return <SyllabiAIMock />;
      case 5:
        return <TruthLensMock />;
      case 6:
        return <DecentralizedNetworkMock />;
      case 7:
        return <SmartHandRehabMock />;
      default:
        return null;
    }
  };

  const getBadgeText = () => {
    if (project.id === 1) return "Featured Flagship";
    if ([2, 4].includes(project.id)) return "Live Production";
    if ([5, 6, 7].includes(project.id)) return "Hackathon Project";
    return "Portfolio Piece";
  };

  const getBadgeStyle = () => {
    if (project.id === 1) return "bg-indigo-500/10 text-indigo-500 border border-indigo-500/20";
    if ([2, 4].includes(project.id)) return "bg-cyan-500/10 text-cyan-500 border border-cyan-500/20";
    if ([5, 6, 7].includes(project.id)) return "bg-indigo-500/10 text-indigo-500 border border-indigo-500/20";
    return "bg-slate-500/10 text-slate-500 border border-slate-500/20";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="card-elevated w-full h-full relative overflow-hidden flex flex-col cursor-default"
    >
      <div
        className={`w-full flex-1 flex bg-[var(--color-surface)] ${
          layoutSize === "featured" ? "flex-col lg:flex-row items-stretch" : "flex-col"
        }`}
      >
        {/* Visual Mockup Container */}
        <div
          className={`relative flex flex-col justify-start items-stretch overflow-hidden shrink-0 w-full ${
            layoutSize === "featured" ? "lg:w-3/5 min-h-[240px] lg:min-h-auto border-b lg:border-b-0 lg:border-r border-[var(--color-border)]" : "h-[180px] border-b border-[var(--color-border)]"
          }`}
          style={{
            background: "linear-gradient(135deg, var(--color-surface) 0%, var(--color-bg) 50%, var(--color-surface) 100%)",
          }}
        >
          {/* Dynamic Micro UI */}
          <div className="flex-1 relative z-0">
            {renderMicroUI()}
          </div>
        </div>

        {/* Card Content & Text */}
        <div 
          className={`p-6 sm:p-8 flex flex-col justify-between flex-1 ${
            layoutSize === "featured" ? "lg:w-2/5" : "w-full"
          }`} 
        >
          <div>
            {/* Meta Category Indicator Badge */}
            <div className="flex justify-end items-center mb-4">
              <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${getBadgeStyle()}`}>
                {getBadgeText()}
              </span>
            </div>

            <h3 
              className={`font-bold tracking-tight mb-3 text-[var(--color-text)] uppercase ${
                layoutSize === "featured" ? "text-xl sm:text-2xl lg:text-3xl" : "text-base sm:text-lg"
              }`}
            >
              {project.title}
            </h3>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((tag: string) => (
                <span
                  key={tag}
                  className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--neutral-100)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p 
              className={`text-xs sm:text-sm leading-relaxed mb-6 text-[var(--color-text-muted)] font-medium ${
                layoutSize === "featured" ? "line-clamp-4 lg:line-clamp-none mb-8" : "line-clamp-3"
              }`}
              style={layoutSize !== "featured" ? { minHeight: "54px" } : {}}
            >
              {project.description}
            </p>
          </div>

          {/* Actions Footer */}
          <div className="flex items-center gap-2.5 pt-4 border-t border-[var(--color-border)] mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--card-bg-glass)] text-[10px] font-bold uppercase tracking-widest text-[var(--color-text)] hover:bg-slate-100 dark:hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-250 flex items-center gap-1.5 cursor-pointer"
              style={{ minHeight: "36px" }}
            >
              <Github className="w-3.5 h-3.5" /> Source
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[var(--color-primary-mid)] hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-250 flex items-center gap-1.5 cursor-pointer"
                style={{ minHeight: "36px" }}
              >
                Live <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
