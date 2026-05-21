"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import React, { useRef, useState } from "react";

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
}

// ── EduConnect Micro-UI ──
const EduConnectMock = () => (
  <div className="w-full h-full flex flex-col gap-3 p-4 justify-center select-none">
    <div className="flex justify-between items-center bg-[var(--card-bg)] p-2.5 rounded-xl border border-[var(--color-border)] shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-[var(--color-primary)] opacity-10 flex items-center justify-center font-bold text-[8px] text-[var(--color-primary)]">T</div>
        <div className="leading-none">
          <div className="text-[9px] font-bold">Teacher Portal</div>
          <div className="text-[6px] text-[var(--color-text-muted)]">Grade 10B</div>
        </div>
      </div>
      <div className="text-[10px] font-mono font-bold text-emerald-500">92.4% Avg</div>
    </div>
    <div className="grid grid-cols-5 gap-2 items-end h-16 px-2">
      {[65, 85, 95, 75, 90].map((h, i) => (
        <div key={i} className="flex flex-col items-center gap-1 w-full">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 + i * 0.2, ease: "easeInOut" }}
            className="w-full bg-[var(--color-primary)] rounded-t-sm opacity-20 group-hover:opacity-60 transition-opacity"
          />
          <span className="text-[6px] font-mono opacity-50">M{i+1}</span>
        </div>
      ))}
    </div>
  </div>
);

// ── SkillTern Micro-UI ──
const SkillTernMock = () => (
  <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden select-none">
    <div className="flex items-center justify-between w-full max-w-[220px] z-10">
      {/* Student Node */}
      <div className="flex flex-col items-center gap-1 p-2 rounded-xl border border-[var(--color-border)] bg-[var(--card-bg)] shadow-sm w-16 text-center">
        <span className="text-xs">🎓</span>
        <div className="text-[7px] font-bold truncate w-full">Student</div>
      </div>
      
      {/* Connecting Vector */}
      <div className="flex-1 h-[1px] bg-neutral-300 dark:bg-neutral-800 relative mx-2">
        <motion.div
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[3px] w-2 h-2 rounded-full bg-[var(--color-primary)]"
        />
      </div>

      {/* Corporate Node */}
      <div className="flex flex-col items-center gap-1 p-2 rounded-xl border border-[var(--color-border)] bg-[var(--card-bg)] shadow-sm w-16 text-center">
        <span className="text-xs">🏢</span>
        <div className="text-[7px] font-bold truncate w-full">Internship</div>
      </div>
    </div>
    <div className="absolute text-[7px] font-mono bottom-2 opacity-50 px-2 py-0.5 rounded border border-[var(--color-border)] bg-[var(--card-bg)]">
      Match Rate: <span className="font-bold text-emerald-500">98.5%</span>
    </div>
  </div>
);

// ── ToDo App Micro-UI ──
const ToDoMock = () => (
  <div className="w-full h-full flex flex-col justify-center items-center p-4 select-none">
    <div className="w-[125px] rounded-xl border-[3px] border-neutral-300 dark:border-neutral-800 bg-[var(--card-bg)] shadow-md overflow-hidden p-2 flex flex-col gap-1.5 h-[120px]">
      <div className="h-1 w-8 bg-neutral-300 dark:bg-neutral-800 rounded-full mx-auto mb-0.5" />
      <div className="text-[8px] font-bold border-b border-[var(--color-border)] pb-1 mb-0.5">Focus List</div>
      <div className="flex flex-col gap-1 overflow-hidden">
        {[
          { text: "Finish core API", done: true },
          { text: "Test responsive UI", done: false },
          { text: "Release candidate", done: false },
        ].map((task, idx) => (
          <div key={idx} className="flex items-center gap-1.5">
            <motion.div
              animate={{ scale: task.done ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2.5 }}
              className={`w-3 h-3 rounded flex items-center justify-center border text-[5px] ${
                task.done
                  ? "bg-neutral-900 border-neutral-900 text-white dark:bg-white dark:border-white dark:text-black"
                  : "border-neutral-300 dark:border-neutral-700"
              }`}
            >
              {task.done ? "✓" : ""}
            </motion.div>
            <span className={`text-[7px] truncate ${task.done ? "line-through text-neutral-400" : ""}`}>{task.text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── Syllabi-AI Micro-UI ──
const SyllabiAIMock = () => (
  <div className="w-full h-full flex flex-col gap-2 p-4 justify-center select-none">
    <div className="flex flex-col gap-1.5 bg-[var(--card-bg)] p-2.5 rounded-xl border border-[var(--color-border)] shadow-sm">
      <div className="flex items-center gap-1">
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 dark:bg-neutral-100 flex items-center justify-center text-[5px] text-white dark:text-black font-bold">AI</span>
        <span className="text-[8px] font-bold">Syllabus Parser</span>
      </div>
      <div className="text-[7px] font-mono leading-relaxed bg-[var(--color-surface)] p-2 rounded-lg border border-[var(--color-border)]">
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="font-bold"
        >
          &gt; Analyzing curriculum...
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-emerald-500 font-bold"
        >
          Study Plan: 6 milestones set.
        </motion.span>
      </div>
    </div>
  </div>
);

// ── TruthLens Micro-UI ──
const TruthLensMock = () => (
  <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden select-none">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent pointer-events-none animate-pulse" />
    <div className="flex flex-col items-center gap-1.5 z-10 w-full max-w-[170px]">
      <div className="flex justify-between w-full text-[6px] font-mono opacity-50">
        <span>DETECTING: IP_STREAM</span>
        <span className="text-red-500 font-bold">ANALYZING</span>
      </div>
      
      <div className="relative w-full bg-[var(--card-bg)] border border-[var(--color-border)] rounded-xl p-2.5 shadow-sm flex items-center justify-between">
        <div className="space-y-0.5">
          <div className="text-[8px] font-bold">Truth Check</div>
          <div className="text-[5px] font-mono text-[var(--color-text-muted)]">Classifier: RoBERTa</div>
        </div>
        
        <div className="flex flex-col items-end">
          <motion.span
            animate={{ color: ["#ef4444", "#22c55e", "#ef4444"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-[10px] font-mono font-bold"
          >
            99.2%
          </motion.span>
          <span className="text-[5px] font-bold tracking-widest uppercase opacity-75">AUTHENTIC</span>
        </div>
      </div>
    </div>
  </div>
);

// ── Decentralized Network Micro-UI ──
const DecentralizedNetworkMock = () => (
  <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden select-none">
    <div className="relative w-16 h-16 flex items-center justify-center">
      <div className="w-7 h-7 rounded-full border border-[var(--color-primary)] bg-[var(--card-bg)] z-10 flex items-center justify-center text-[8px] shadow-sm">
        ⛓
      </div>
      {[0, 120, 240].map((deg, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div
            className="w-3.5 h-3.5 rounded-full border border-[var(--color-border)] bg-[var(--card-bg)] flex items-center justify-center text-[6px] absolute shadow-sm"
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
      <div className="absolute w-16 h-16 rounded-full border border-dashed border-neutral-300 dark:border-neutral-700 pointer-events-none" />
    </div>
    <div className="absolute bottom-2 text-[6px] font-mono opacity-50 px-2 py-0.5 rounded border border-[var(--color-border)] bg-[var(--card-bg)]">
      Staked Pool: <span className="font-bold">42,500 APT</span>
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
        className="w-full max-w-[210px] rounded-xl overflow-hidden shadow-[0_0_0_3px_#1a1a1a,0_0_0_5px_#333,0_4px_24px_rgba(0,0,0,0.6)] relative"
        style={{ background: "#060a0f" }}
      >
        {/* OLED scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-20 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,100,0.08) 2px, rgba(0,255,100,0.08) 4px)",
          }}
        />
        {/* Status bar */}
        <div className="flex justify-between items-center px-3 pt-2 pb-1 border-b border-emerald-900/40">
          <span className="text-[7px] font-mono font-black tracking-widest" style={{ color: "#00ff88" }}>REHAB.SYS</span>
          <div className="flex items-center gap-1.5">
            {/* Bluetooth LED */}
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="text-[7px]"
              style={{ color: "#3b9eff" }}
            >
              ⬡
            </motion.span>
            <span className="text-[6px] font-mono" style={{ color: "#3b9eff" }}>BT</span>
            {/* Vibration LED */}
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#ff6b35", display: "inline-block" }}
            />
            <span className="text-[6px] font-mono" style={{ color: "#ff6b35" }}>VIB</span>
          </div>
        </div>

        {/* Finger flex sensors */}
        <div className="px-3 py-2">
          <div className="text-[6px] font-mono mb-2 tracking-widest" style={{ color: "#00ff8855" }}>FLEX SENSOR MATRIX</div>
          <div className="flex items-end gap-2 h-12">
            {fingers.map((f, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5 flex-1">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${f.value}%` }}
                  transition={{
                    duration: 1.2 + i * 0.15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="w-full rounded-sm"
                  style={{ background: "linear-gradient(to top, #00ff88, #00cc66)", minHeight: 2 }}
                />
                <span className="text-[6px] font-mono font-black" style={{ color: "#00ff8888" }}>{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live readout */}
        <div className="px-3 pb-2 pt-0.5 border-t border-emerald-900/30 flex justify-between items-center">
          <span className="text-[6px] font-mono" style={{ color: "#00ff8866" }}>ROM AVG</span>
          <motion.span
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[9px] font-mono font-black"
            style={{ color: "#00ff88" }}
          >
            70.4°
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export const ProjectCard = ({ project, idx }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    setMouseX(mouseXPos);
    setMouseY(mouseYPos);
  };

  const renderMicroUI = () => {
    switch (project.id) {
      case 1:
        return <EduConnectMock />;
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

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-[1.5rem] transition-all duration-500"
    >
      <div
        className="w-full h-full p-0 transition-all duration-500 bg-[var(--color-surface)] border border-[var(--color-border)] group-hover:bg-[var(--card-bg)] group-hover:border-[var(--color-primary)] group-hover:shadow-[0_16px_48px_rgba(var(--color-primary-rgb),0.06)] rounded-[1.5rem]"
      >
        {/* Spotlight Overlay */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(var(--color-primary-rgb), 0.08), transparent 40%)`
          }}
        />

        {/* Visual Mockup Container (Skeuomorphic Browser) */}
        <div
          className="relative flex flex-col justify-start items-stretch overflow-hidden"
          style={{
            height: "220px",
            background: "linear-gradient(135deg, var(--color-surface) 0%, var(--color-bg) 50%, var(--color-surface) 100%)",
            borderBottom: "1px solid var(--color-border)",
            transform: "translateZ(20px)",
          }}
        >
          {/* Top Browser Bar */}
          <div className="h-9 px-4 flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-surface)] z-10 shrink-0 select-none">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-800" />
              <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-800" />
              <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-800" />
            </div>
            <div className="flex-1 bg-[var(--card-bg)] border border-[var(--color-border)] rounded-md text-[8px] px-2.5 py-0.5 font-mono text-[var(--color-text-muted)] truncate select-none text-center">
              {project.title.toLowerCase()}.dev
            </div>
          </div>

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 top-9 opacity-40 pointer-events-none"
            style={{ backgroundImage: "linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
          />

          {/* Dynamic Micro UI */}
          <div className="flex-1 relative z-0">
            {renderMicroUI()}
          </div>
        </div>

        {/* Card Content & Text */}
        <div className="p-8 lg:p-10" style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3" style={{ color: "var(--color-text)" }}>
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((tag: string) => (
              <span
                key={tag}
                className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-primary-mid)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-xs sm:text-sm leading-relaxed mb-6 text-[var(--color-text-muted)] h-[64px] overflow-hidden line-clamp-3">
            {project.description}
          </p>

          {/* Actions Footer - Always visible & touch-safe */}
          <div className="flex items-center gap-2.5 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl border border-[var(--color-border)] text-[10px] font-bold uppercase tracking-widest transition-all duration-250 hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" /> Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[var(--color-primary)] text-[var(--color-bg)] text-[10px] font-bold uppercase tracking-widest transition-all duration-250 hover:bg-[var(--color-primary-mid)] flex items-center gap-1.5 shadow-sm"
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
