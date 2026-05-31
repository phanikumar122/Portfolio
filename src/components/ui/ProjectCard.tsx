"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import React, { useRef } from "react";

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
  return (
    <div className="w-full h-full flex flex-col p-4 justify-between select-none relative overflow-hidden">
      {/* Header bar of the portal */}
      <div className="flex justify-between items-center bg-[var(--card-bg)] px-3 py-1.5 rounded-lg border border-[var(--color-border)] shadow-xs relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[8px] font-bold">EduConnect Live</span>
        </div>
        <span className="text-[6px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider">Class 10-B</span>
      </div>

      {/* Message / Notification Feed */}
      <div className="flex flex-col gap-2 flex-1 justify-center mt-2 relative z-10">
        {/* Message 1: Teacher */}
        <motion.div
          initial={{ opacity: 0, x: -15, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-1.5 items-start max-w-[85%]"
        >
          <div className="w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-[7px] font-bold text-indigo-400 shrink-0">T</div>
          <div className="bg-[var(--card-bg)] border border-[var(--color-border)] rounded-r-lg rounded-bl-lg p-2 text-[7px] leading-tight">
            <span className="font-extrabold text-indigo-400 block text-[6px] uppercase tracking-wider mb-0.5">Mrs. Sarah (Maths)</span>
            Phani scored <span className="font-bold text-emerald-400">95/100</span> in Calculus!
          </div>
        </motion.div>

        {/* Message 2: Parent */}
        <motion.div
          initial={{ opacity: 0, x: 15, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="flex gap-1.5 items-start max-w-[85%] self-end"
        >
          <div className="bg-indigo-600 rounded-l-lg rounded-br-lg p-2 text-[7px] leading-tight text-white order-1">
            <span className="font-extrabold text-indigo-200 block text-[6px] uppercase tracking-wider mb-0.5">Parent (You)</span>
            Thank you for the update!
          </div>
          <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[7px] font-bold text-white shrink-0 order-2">P</div>
        </motion.div>

        {/* Notification Popup: System verification badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ 
            duration: 0.4, 
            delay: 2.5,
            type: "spring",
            stiffness: 100
          }}
          className="bg-emerald-950/20 border border-emerald-500/30 rounded-lg p-1.5 text-[7px] flex items-center gap-1.5 self-center shadow-sm"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-[6px] font-bold">✓</span>
          <span className="text-[7px] font-medium text-emerald-400">Report Card Signed & Verified</span>
        </motion.div>
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
          whileInView={{ left: ["0%", "100%"] }}
          viewport={{ once: false }}
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
              whileInView={{ scale: task.done ? [1, 1.1, 1] : 1 }}
              viewport={{ once: false }}
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
const SyllabiAIMock = () => {
  return (
    <div className="w-full h-full flex flex-col p-4 justify-between select-none relative overflow-hidden">
      {/* Top Header */}
      <div className="flex justify-between items-center bg-[var(--card-bg)] px-3 py-1.5 rounded-lg border border-[var(--color-border)] shadow-xs relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          <span className="text-[8px] font-bold">Syllabi-AI Parser</span>
        </div>
        <span className="text-[6px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider bg-violet-500/10 text-violet-400 px-1 py-0.5 rounded">v2.0</span>
      </div>

      {/* Progress & Generation Pipeline */}
      <div className="flex-1 flex flex-col justify-center gap-2.5 mt-2 relative z-10">
        
        {/* Step 1: Uploading and Parsing */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-2 flex flex-col gap-1.5">
          <div className="flex justify-between items-center text-[7px]">
            <span className="font-medium text-[var(--color-text-muted)] truncate max-w-[70%]">📄 syllabus_computer_science.pdf</span>
            <span className="font-mono text-violet-400 font-bold">Parsing...</span>
          </div>
          {/* Animated Progress Bar */}
          <div className="w-full h-1 bg-[var(--card-bg)] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-violet-500 to-indigo-500"
            />
          </div>
        </div>

        {/* Step 2: Milestone Output */}
        <div className="flex justify-between gap-1.5">
          {[
            { title: "M1: Core Syntax", weeks: "W1-2", color: "from-violet-500/20 to-violet-500/10" },
            { title: "M2: OOP Theory", weeks: "W3-4", color: "from-indigo-500/20 to-indigo-500/10" },
            { title: "M3: DBMS Setup", weeks: "W5-6", color: "from-emerald-500/20 to-emerald-500/10" }
          ].map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 1.0 + idx * 0.3 }}
              className={`flex-1 bg-gradient-to-b ${milestone.color} border border-[var(--color-border)] rounded-md p-1.5 flex flex-col justify-between h-14`}
            >
              <div className="leading-none">
                <span className="text-[5px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider block">{milestone.weeks}</span>
                <span className="text-[7px] font-bold block mt-0.5 leading-tight truncate">{milestone.title}</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-[5px] text-[var(--color-text-muted)] font-mono">Tasks: 4</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] opacity-40" />
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
      <div className="flex justify-between items-center bg-[var(--card-bg)] px-3 py-1.5 rounded-lg border border-[var(--color-border)] shadow-xs relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[8px] font-bold">TruthLens Scanner</span>
        </div>
        <span className="text-[6px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider bg-rose-500/10 text-rose-400 px-1 py-0.5 rounded">Realtime</span>
      </div>

      {/* Document Scanner Area */}
      <div className="flex-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg mt-2 p-3 relative overflow-hidden flex flex-col justify-between h-28">
        {/* Animated Scan Line */}
        <motion.div
          whileInView={{ top: ["0%", "92%", "0%"] }}
          viewport={{ once: false }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 right-0 h-[1.5px] bg-red-500 shadow-[0_0_8px_#ef4444] z-20 pointer-events-none"
        />

        {/* Article Headline block */}
        <motion.div
          whileInView={{
            backgroundColor: ["rgba(0,0,0,0)", "rgba(16,185,129,0.12)", "rgba(16,185,129,0.12)", "rgba(0,0,0,0)"],
            borderColor: ["var(--color-border)", "rgba(16,185,129,0.3)", "rgba(16,185,129,0.3)", "var(--color-border)"],
          }}
          viewport={{ once: false }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="border rounded-md p-1.5 flex justify-between items-center relative z-10"
        >
          <div className="flex flex-col gap-0.5 w-[70%]">
            <span className="text-[5px] font-mono text-[var(--color-text-muted)]">HEADLINE BLOCK</span>
            <div className="h-1.5 w-full bg-[var(--color-text)] opacity-60 rounded-xs" />
          </div>
          <motion.span
            whileInView={{ opacity: [0, 1, 1, 0] }}
            viewport={{ once: false }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-[6px] font-bold text-emerald-400 border border-emerald-500/20 bg-emerald-950/20 px-1 rounded-sm"
          >
            VERIFIED
          </motion.span>
        </motion.div>

        {/* Article Paragraph Line 1 (Manipulated claims) */}
        <motion.div
          whileInView={{
            backgroundColor: ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(239,68,68,0.12)", "rgba(239,68,68,0.12)", "rgba(0,0,0,0)"],
            borderColor: ["var(--color-border)", "var(--color-border)", "rgba(239,68,68,0.3)", "rgba(239,68,68,0.3)", "var(--color-border)"],
          }}
          viewport={{ once: false }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="border rounded-md p-1.5 flex justify-between items-center relative z-10"
        >
          <div className="flex flex-col gap-0.5 w-[70%]">
            <span className="text-[5px] font-mono text-[var(--color-text-muted)]">CLAIM ANALYSIS</span>
            <div className="h-1.5 w-[85%] bg-[var(--color-text)] opacity-40 rounded-xs" />
          </div>
          <motion.span
            whileInView={{ opacity: [0, 0, 1, 1, 0] }}
            viewport={{ once: false }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-[6px] font-bold text-red-400 border border-red-500/20 bg-red-950/20 px-1 rounded-sm"
          >
            DECEPTIVE
          </motion.span>
        </motion.div>

        {/* Footer Metrics */}
        <div className="flex justify-between items-center text-[5.5px] font-mono text-[var(--color-text-muted)] border-t border-[var(--color-border)] pt-1.5">
          <span>PIPELINE: HYBRID_RoBERTa</span>
          <div className="flex items-center gap-1 text-emerald-400">
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
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
      <div className="w-7 h-7 rounded-full border border-[var(--color-primary)] bg-[var(--card-bg)] z-10 flex items-center justify-center text-[8px] shadow-sm">
        ⛓
      </div>
      {[0, 120, 240].map((deg, i) => (
        <motion.div
          key={i}
          whileInView={{ rotate: 360 }}
          viewport={{ once: false }}
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
              whileInView={{ opacity: [1, 0.3, 1] }}
              viewport={{ once: false }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="text-[7px]"
              style={{ color: "#3b9eff" }}
            >
              ⬡
            </motion.span>
            <span className="text-[6px] font-mono" style={{ color: "#3b9eff" }}>BT</span>
            {/* Vibration LED */}
            <motion.span
              whileInView={{ opacity: [0.3, 1, 0.3] }}
              viewport={{ once: false }}
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
                  whileInView={{ height: `${f.value}%` }}
                  viewport={{ once: false }}
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
            whileInView={{ opacity: [1, 0.6, 1] }}
            viewport={{ once: false }}
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    cardRef.current.style.setProperty('--mouse-x', `${mouseXPos}px`);
    cardRef.current.style.setProperty('--mouse-y', `${mouseYPos}px`);

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
        className="project-card-inner w-full h-full p-0 transition-all duration-300 ease-out bg-[var(--color-surface)] group-hover:bg-[var(--card-bg)] rounded-[1.45rem] overflow-hidden"
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
