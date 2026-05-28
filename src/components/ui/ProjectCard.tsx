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
const EduConnectMock = () => {
  const subjects = [
    { name: "Maths", score: 85 },
    { name: "Physics", score: 95 },
    { name: "Chemistry", score: 75 },
    { name: "Social", score: 90 },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-3 p-4 justify-center select-none">
      <div className="flex justify-between items-center bg-[var(--card-bg)] p-2.5 rounded-xl border border-[var(--color-border)] shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[var(--color-primary)] opacity-10 flex items-center justify-center font-bold text-[8px] text-[var(--color-primary)]">T</div>
          <div className="leading-none">
            <div className="text-[9px] font-bold">Teacher Portal</div>
            <div className="text-[6px] text-[var(--color-text-muted)]">Grade 10B</div>
          </div>
        </div>
        <div className="text-[10px] font-mono font-bold text-emerald-500">86.2% Avg</div>
      </div>
      <div className="grid grid-cols-4 gap-3 items-end h-16 px-2">
        {subjects.map((sub, i) => (
          <div key={sub.name} className="flex flex-col items-center justify-end gap-1 w-full h-full">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${sub.score}%` }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 + i * 0.2, ease: "easeInOut" }}
              className="w-full bg-[var(--color-primary)] rounded-t-sm opacity-20 group-hover:opacity-60 transition-opacity"
            />
            <span className="text-[6px] font-mono font-extrabold opacity-60 uppercase tracking-tighter truncate max-w-full text-center">{sub.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

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
const TruthLensMock = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-3 select-none">
      {/* Skeuomorphic Gauge Case */}
      <div 
        className="w-full max-w-[210px] rounded-xl border border-neutral-800 p-3 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05),0_10px_20px_rgba(0,0,0,0.5)] relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #181818 0%, #0d0d0d 100%)",
        }}
      >
        {/* CRT Scanline and Glass Glare */}
        <div className="absolute inset-0 pointer-events-none z-30 opacity-15"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 pointer-events-none z-20 opacity-5 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#fff_2px,#fff_4px)]" />

        {/* Top Status Bar */}
        <div className="flex justify-between items-center text-[5px] font-mono mb-2 tracking-widest text-neutral-500">
          <span>MODULE::LENS_V1.2</span>
          <div className="flex items-center gap-1">
            <span className="text-[5px]">SYS_LOCK</span>
            <motion.span 
              animate={{ opacity: [0.3, 1, 0.3] }} 
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_4px_#10b981]"
            />
          </div>
        </div>

        {/* Gauge Background Face */}
        <div 
          className="relative h-20 rounded-lg border border-neutral-900 bg-[#070707] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Dial Arc Line */}
          <svg className="w-32 h-16 absolute top-2" viewBox="0 0 100 50">
            {/* Background Arc */}
            <path 
              d="M 10 45 A 40 40 0 0 1 90 45" 
              fill="none" 
              stroke="#222" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
            {/* Status Zones */}
            {/* Red zone (Fake) */}
            <path 
              d="M 10 45 A 40 40 0 0 1 35 22" 
              fill="none" 
              stroke="#ef4444" 
              strokeWidth="2.5" 
              opacity="0.6"
            />
            {/* Yellow zone (Suspect) */}
            <path 
              d="M 35 22 A 40 40 0 0 1 65 22" 
              fill="none" 
              stroke="#f59e0b" 
              strokeWidth="2.5" 
              opacity="0.6"
            />
            {/* Green zone (Authentic) */}
            <path 
              d="M 65 22 A 40 40 0 0 1 90 45" 
              fill="none" 
              stroke="#10b981" 
              strokeWidth="2.5" 
              opacity="0.8"
            />
          </svg>

          {/* Scale Labels */}
          <div className="absolute top-8 left-4 text-[5px] font-mono text-red-500 font-bold">FAKE</div>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[5px] font-mono text-amber-500 font-bold">SCANNING</div>
          <div className="absolute top-8 right-3 text-[5px] font-mono text-emerald-500 font-bold">REAL</div>

          {/* Needle Base (Pivot Point) */}
          <div className="absolute bottom-0 w-4 h-4 rounded-full bg-neutral-800 border border-neutral-700 z-10 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
          </div>

          {/* Animating Needle */}
          <motion.div 
            animate={{ 
              rotate: [-60, 45, -20, 60, 56, 62, 59, 60, 60] 
            }}
            transition={{ 
              duration: 4.5, 
              repeat: Infinity, 
              repeatDelay: 2,
              ease: "easeInOut"
            }}
            className="absolute bottom-2 w-0.5 h-14 bg-red-500 origin-bottom rounded-full shadow-[0_0_3px_rgba(239,68,68,0.5)]"
            style={{
              transformOrigin: "bottom center",
            }}
          />

          {/* Digital Output Overlay */}
          <div className="absolute bottom-1 w-full px-3 flex justify-between items-center z-10">
            <span className="text-[6px] font-mono text-neutral-600">ROBERTa::CLASSIFIER</span>
            <motion.div 
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-[8px] font-mono font-bold text-emerald-400 bg-emerald-950/30 px-1 py-0.5 rounded border border-emerald-900/30"
            >
              99.2% AUTH
            </motion.div>
          </div>
        </div>

        {/* Bottom hardware detail panel */}
        <div className="mt-2 flex justify-between items-center text-[5px] font-mono text-neutral-500 px-1">
          <div className="flex gap-1">
            <span className="w-1 h-1 bg-neutral-800 rounded-full" />
            <span className="w-1 h-1 bg-neutral-800 rounded-full" />
          </div>
          <span>ANALYSIS_MATRIX_VERIFIED</span>
          <div className="flex gap-1">
            <span className="w-1 h-1 bg-neutral-800 rounded-full" />
            <span className="w-1 h-1 bg-neutral-800 rounded-full" />
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
              <div key={i} className="flex flex-col items-center justify-end gap-0.5 flex-1 h-full">
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

    const x = mouseXPos / rect.width - 0.5;
    const y = mouseYPos / rect.height - 0.5;
    const el = cardRef.current.querySelector(".project-card-inner") as HTMLElement;
    if (el) {
      el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${y * -8}deg)`;
    }
  };

  const handleMouseLeave = () => {
    const el = cardRef.current?.querySelector(".project-card-inner") as HTMLElement;
    if (el) {
      el.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
    }
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
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-visible rounded-[1.5rem]"
    >
      <div
        className="project-card-inner w-full h-full p-0 transition-all duration-300 ease-out bg-[var(--color-surface)] border border-[var(--color-border)] group-hover:bg-[var(--card-bg)] group-hover:border-[var(--color-primary)] group-hover:shadow-[0_16px_48px_rgba(var(--color-primary-rgb),0.06)] rounded-[1.5rem] overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
        }}
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
            height: "clamp(180px, 50vw, 220px)",
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

          {/* Grid pattern overlay - removed */}

          {/* Dynamic Micro UI */}
          <div className="flex-1 relative z-0">
            {renderMicroUI()}
          </div>
        </div>

        {/* Card Content & Text */}
        <div className="p-5 sm:p-8 lg:p-10" style={{ transform: "translateZ(30px)" }}>
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
