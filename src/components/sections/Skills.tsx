"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MaskText } from "@/components/ui/MaskText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Database, 
  Globe, 
  Smartphone, 
  Compass, 
  Shield, 
  Server,
  Network,
  Layers,
  Terminal,
  Cpu,
  Brain,
  Link as LinkIcon,
  Workflow,
  Award
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// CATEGORIES & SKILLS DEFINITIONS
// ─────────────────────────────────────────────────────────────

interface SkillCategory {
  title: string;
  skills: string[];
  bg: string;
  border: string;
  iconColor: string;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Core JS", "Python", "Dart", "Json"],
    bg: "rgba(37, 99, 235, 0.03)",
    border: "rgba(37, 99, 235, 0.1)",
    iconColor: "text-blue-600",
  },
  {
    title: "Frontend",
    skills: ["React", "Flutter", "CSS", "UI/UX"],
    bg: "rgba(99, 102, 241, 0.03)",
    border: "rgba(99, 102, 241, 0.1)",
    iconColor: "text-indigo-600",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "APIs"],
    bg: "rgba(37, 99, 235, 0.03)",
    border: "rgba(37, 99, 235, 0.1)",
    iconColor: "text-blue-600",
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Firebase"],
    bg: "rgba(99, 102, 241, 0.03)",
    border: "rgba(99, 102, 241, 0.1)",
    iconColor: "text-indigo-600",
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Containerization", "Linux", "Automated Pipelines", "Infrastructure as Code"],
    bg: "rgba(71, 85, 105, 0.03)",
    border: "rgba(71, 85, 105, 0.1)",
    iconColor: "text-slate-600",
  },
  {
    title: "Architecture",
    skills: ["Microservices", "3-Tier Architecture", "Real-time Systems", "Security", "JSON Web Token (JWT)"],
    bg: "rgba(71, 85, 105, 0.03)",
    border: "rgba(71, 85, 105, 0.1)",
    iconColor: "text-slate-600",
  },
  {
    title: "Emerging",
    skills: ["AI&ML", "Blockchain", "IoT"],
    bg: "rgba(99, 102, 241, 0.03)",
    border: "rgba(99, 102, 241, 0.1)",
    iconColor: "text-indigo-600",
  },
];

// ─────────────────────────────────────────────────────────────
// SKILL LOGOS & COLORS
// ─────────────────────────────────────────────────────────────

const SKILL_LOGOS: Record<string, string | React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  "Android SDK": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
  "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  "Android Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "Computer Networking": Network,
  "JSON Web Token (JWT)": "https://jwt.io/img/pic_logo.svg",
  "Api Testing": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  "Json": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/json.svg",
  "Core JS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "Operating Systems": Terminal,
  "Virtual Machines": "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/virtualbox.svg",
  "Microservices": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
  "3-Tier Architecture": Layers,
  "Real-time Systems": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
  "Infrastructure as Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
  "Containerization": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "Automated Pipelines": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  "Security": Shield,
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  
  // New Additions
  "Dart": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "UI/UX": Smartphone,
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Express": "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/express.svg",
  "APIs": Network,
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  "AI&ML": Brain,
  "Blockchain": LinkIcon,
  "IoT": Cpu,
};

const SKILL_COLORS: Record<string, string> = {
  "Android SDK": "#3DDC84",
  "Flutter": "#02569B",
  "Android Studio": "#4285F4",
  "Git": "#F05032",
  "Computer Networking": "#9C27B0",
  "JSON Web Token (JWT)": "#D63AFF",
  "Api Testing": "#FF9800",
  "Json": "#F7DF1E",
  "Core JS": "#F7DF1E",
  "Python": "#3776AB",
  "MySQL": "#00758F",
  "MongoDB": "#47A248",
  "Linux": "#FCC624",
  "Operating Systems": "#0078D6",
  "Virtual Machines": "#1880C4",
  "Microservices": "#6366F1",
  "3-Tier Architecture": "#06B6D4",
  "Real-time Systems": "#10B981",
  "Infrastructure as Code": "#F59E0B",
  "Containerization": "#2496ED",
  "Automated Pipelines": "#8B5CF6",
  "Security": "#EF4444",
  "AWS": "#FF9900",
  "React": "#61DAFB",
  "Next": "#000000",
  "Dart": "#00B4AB",
  "CSS": "#1572B6",
  "UI/UX": "#FF6B35",
  "Node.js": "#339933",
  "Express": "#333333",
  "APIs": "#3b82f6",
  "Firebase": "#FFCA28",
  "AI&ML": "#10B981",
  "Blockchain": "#8F44FD",
  "IoT": "#E83E8C",
};

// ─────────────────────────────────────────────────────────────
// TIMELINE DEFINITION
// ─────────────────────────────────────────────────────────────

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  skills: string[];
  projects: { name: string; desc: string }[];
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2024",
    title: "Foundation & Native Systems",
    description: "Focused on programming algorithms in C, understanding Operating Systems, and creating native Android apps. Integrated Move blockchain smart contracts.",
    skills: ["Core JS", "Json", "Git", "Blockchain"],
    projects: [
      { name: "Decentralized Network", desc: "ST staked oracle pool built in Aptos ecosystem" }
    ]
  },
  {
    year: "2025",
    title: "Full-Stack Development & AI Integration",
    description: "Expanded into back-end frameworks, REST APIs, and database engineering. Built smart NLP factual verification engines and medical IoT gloves.",
    skills: ["Python", "Node.js", "Express", "APIs", "MongoDB", "MySQL", "Flutter", "IoT", "AI&ML", "JSON Web Token (JWT)"],
    projects: [
      { name: "EduConnect", desc: "Parent-teacher portal with secure real-time dashboards" },
      { name: "Skill Tern", desc: "Internship matching app using Express and MongoDB" },
      { name: "TruthLens", desc: "SaaS scanner running hybrid RoBERTa NLP pipeline" },
      { name: "Smart Hand Rehab", desc: "Embedded recovery glove with bluetooth telemetry" }
    ]
  },
  {
    year: "2026",
    title: "Cloud Infrastructure & High-Performance UI",
    description: "Specializing in Next.js development, responsive UI, Docker microservices, automated GitHub actions, and AWS graduation credentials.",
    skills: ["React", "Next", "CSS", "UI/UX", "AWS", "Containerization", "Linux", "Automated Pipelines", "Infrastructure as Code", "Microservices", "3-Tier Architecture", "Real-time Systems", "Security"],
    projects: [
      { name: "AWS Foundations", desc: "Certified AWS cloud solutions architecture" },
      { name: "Red Hat Linux", desc: "System administration and containerized pipelines" }
    ]
  }
];

export const Skills = () => {
  const [activeTab, setActiveTab] = useState<"grid" | "sorter" | "timeline">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);



  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Languages":
        return <Globe className="w-4 h-4 shrink-0 text-blue-600" />;
      case "Frontend":
        return <Smartphone className="w-4 h-4 shrink-0 text-indigo-600" />;
      case "Backend":
        return <Server className="w-4 h-4 shrink-0 text-blue-600" />;
      case "Databases":
        return <Database className="w-4 h-4 shrink-0 text-indigo-600" />;
      case "Cloud & DevOps":
        return <Workflow className="w-4 h-4 shrink-0 text-slate-600" />;
      case "Architecture":
        return <Layers className="w-4 h-4 shrink-0 text-slate-600" />;
      case "Emerging":
        return <Cpu className="w-4 h-4 shrink-0 text-indigo-600" />;
      default:
        return <Compass className="w-4 h-4 shrink-0 text-neutral-500" />;
    }
  };

  // Get list of all unique skills for filter/sorter
  const allSkills = Array.from(
    new Set(SKILL_CATEGORIES.flatMap((c) => c.skills))
  ).map((skill) => {
    const parentCat = SKILL_CATEGORIES.find((c) => c.skills.includes(skill));
    return {
      name: skill,
      category: parentCat ? parentCat.title : "Other",
      color: SKILL_COLORS[skill] || "#2563EB",
    };
  });

  const filteredSkills = selectedCategory === "All"
    ? allSkills
    : allSkills.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
      style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}
    >
      {/* Background Blobs */}
      <div className="absolute left-0 top-1/3 pointer-events-none" style={{ width: "clamp(150px,30vw,350px)", height: "clamp(150px,30vw,350px)", background: "radial-gradient(ellipse, var(--blob-1) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div className="absolute right-0 bottom-1/3 pointer-events-none" style={{ width: "clamp(120px,25vw,300px)", height: "clamp(120px,25vw,300px)", background: "radial-gradient(ellipse, var(--blob-2) 0%, transparent 65%)", filter: "blur(50px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <ScrollReveal className="flex flex-col gap-4 mb-10 sm:mb-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="section-line" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: "var(--color-primary)" }}>DEVELOPMENT STACK</p>
                </div>
                <h2
                  className="font-bold tracking-tighter"
                  style={{ color: "var(--color-text)", fontSize: "clamp(2rem, 9vw, 5rem)" }}
                >
                  <MaskText>Skills & Mastery.</MaskText>
                </h2>
              </div>
              <p className="max-w-sm text-sm sm:text-base leading-relaxed font-medium" style={{ color: "var(--color-text-muted)" }}>
                A structured layout of my languages, core tools, database systems, architecture blueprints, and emerging technologies.
              </p>
            </div>
          </ScrollReveal>

          {/* Signature Interaction Tabs Switcher */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 bg-[var(--neutral-100)] border border-[var(--color-border)] rounded-2xl shadow-xs">
              {[
                { id: "grid", label: "Category Grid" },
                { id: "sorter", label: "Interactive Sorter" },
                { id: "timeline", label: "Mastery Timeline" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "grid" | "sorter" | "timeline")}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-white text-[var(--color-primary)] shadow-xs border border-[var(--color-border)]"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                  style={{ minHeight: "38px" }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Switchable Inner Layout */}
          <AnimatePresence mode="wait">
            {activeTab === "grid" && (
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {SKILL_CATEGORIES.map((cat, catIdx) => (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: catIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="p-6 rounded-2xl border transition-all duration-300 flex flex-col gap-5 shadow-xs hover:shadow-md hover:scale-[1.01]"
                    style={{
                      backgroundColor: cat.bg,
                      borderColor: cat.border
                    }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center border-b border-[var(--color-border)] pb-3">
                      <div className="flex items-center gap-3">
                        {getCategoryIcon(cat.title)}
                        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--color-text)]">
                           {cat.title}
                        </span>
                      </div>
                    </div>

                    {/* Skills pills inside Category Grid */}
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => {
                        const logo = SKILL_LOGOS[skill];
                        const brandColor = SKILL_COLORS[skill] || "var(--color-text)";
                        const isHovered = hoveredSkill === skill;

                        return (
                          <div
                            key={skill}
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className="flex items-center gap-2 px-3 py-2 rounded-xl border bg-white transition-all duration-250 cursor-pointer shadow-xs"
                            style={{
                              borderColor: isHovered ? brandColor : "var(--color-border)",
                              transform: isHovered ? "translateY(-2px)" : "none",
                              boxShadow: isHovered ? `0 6px 16px -6px ${brandColor}50` : "none",
                            }}
                          >
                            {typeof logo === "string" ? (
                              /* eslint-disable-next-line @next/next/no-img-element */
                              <img 
                                src={logo} 
                                alt={skill} 
                                className="w-4 h-4 shrink-0 object-contain transition-all duration-250" 
                                style={{ filter: isHovered ? "none" : "grayscale(30%) opacity(0.85)" }} 
                              />
                            ) : (
                              (() => {
                                const IconComponent = logo || Compass;
                                return (
                                  <IconComponent 
                                    className="w-4 h-4 shrink-0 transition-colors duration-250" 
                                    style={{ color: isHovered ? brandColor : "var(--color-text-muted)" }} 
                                  />
                                );
                              })()
                            )}
                            <span 
                              className="text-[10px] sm:text-xs font-bold uppercase tracking-wide transition-colors duration-250 leading-none"
                              style={{ color: isHovered ? "var(--color-text)" : "var(--color-text-muted)" }}
                            >
                              {skill}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "sorter" && (
              <motion.div
                key="sorter"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45 }}
                className="flex flex-col gap-8"
              >
                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2">
                  {["All", ...SKILL_CATEGORIES.map((c) => c.title)].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest transition-all duration-300 border ${
                        selectedCategory === cat
                          ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white shadow-xs"
                          : "bg-white border-[var(--color-border)] text-neutral-500 hover:text-neutral-900"
                      }`}
                      style={{ minHeight: "36px" }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Sorter Grid */}
                <motion.div
                  layout
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 min-h-[220px]"
                >
                  <AnimatePresence>
                    {filteredSkills.map((skill) => {
                      const logo = SKILL_LOGOS[skill.name];
                      const isHovered = hoveredSkill === skill.name;
                      const brandColor = skill.color;

                      return (
                        <motion.div
                          layout
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className="flex items-center gap-3 p-3.5 rounded-2xl border bg-white shadow-xs cursor-pointer select-none"
                          style={{
                            borderColor: isHovered ? brandColor : "var(--color-border)",
                            boxShadow: isHovered ? `0 8px 20px -8px ${brandColor}60` : "none",
                            transform: isHovered ? "translateY(-3px)" : "none",
                          }}
                        >
                          {typeof logo === "string" ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img 
                              src={logo} 
                              alt={skill.name} 
                              className="w-5 h-5 shrink-0 object-contain" 
                              style={{ filter: isHovered ? "none" : "grayscale(35%) opacity(0.85)" }} 
                            />
                          ) : (
                            (() => {
                              const IconComponent = logo || Compass;
                              return (
                                <IconComponent 
                                  className="w-5 h-5 shrink-0" 
                                  style={{ color: isHovered ? brandColor : "var(--color-text-muted)" }} 
                                />
                              );
                            })()
                          )}
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <span 
                              className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wide truncate leading-tight"
                              style={{ color: "var(--color-text)" }}
                            >
                              {skill.name}
                            </span>
                            <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-neutral-400 block truncate">
                              {skill.category}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}

            {activeTab === "timeline" && (
              <motion.div
                key="timeline"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45 }}
                className="relative flex flex-col items-center justify-start mt-4 max-w-4xl mx-auto"
              >
                {/* Connecting center line */}
                <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-[var(--color-border)] md:-translate-x-1/2 pointer-events-none" />

                {/* Timeline Nodes */}
                <div className="w-full flex flex-col gap-12">
                  {TIMELINE_DATA.map((item, idx) => {
                    const isEven = idx % 2 === 0;

                    return (
                      <div
                        key={item.year}
                        className={`flex flex-col md:flex-row items-stretch w-full relative ${
                          isEven ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        {/* Dot on the center line */}
                        <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full border border-white bg-[var(--color-primary)] md:-translate-x-1/2 z-20 shadow-xs ring-4 ring-[var(--color-primary)]/10 animate-pulse" />

                        {/* Spacer or Card container */}
                        <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                          <motion.div
                            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white border border-[var(--color-border)] rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 relative group/timecard"
                          >
                            {/* Year Indicator */}
                            <span className="inline-block px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-[var(--color-glow-strong)] text-[var(--color-primary)] mb-3">
                              {item.year} Academic Year
                            </span>

                            <h3 className="text-base font-extrabold text-[var(--color-text)] uppercase tracking-wider mb-2">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                              {item.description}
                            </p>

                            {/* Skills badges acquired */}
                            <div className="border-t border-[var(--color-border)] pt-4 mb-4">
                              <span className="text-[8px] font-mono font-extrabold uppercase tracking-widest text-neutral-400 block mb-2">Technological Core</span>
                              <div className="flex flex-wrap gap-1.5">
                                {item.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-neutral-50 border border-[var(--color-border)] text-[var(--color-text-muted)]"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Accompanying Projects */}
                            <div className="border-t border-[var(--color-border)] pt-4">
                              <span className="text-[8px] font-mono font-extrabold uppercase tracking-widest text-neutral-400 block mb-2">Flagship Artifacts</span>
                              <div className="flex flex-col gap-2">
                                {item.projects.map((proj) => (
                                  <div
                                    key={proj.name}
                                    className="flex flex-col p-2 bg-[var(--neutral-100)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)]/30 cursor-default transition-colors duration-250"
                                  >
                                    <span className="text-[10px] font-extrabold text-[var(--color-text)] uppercase tracking-wide flex items-center gap-1.5">
                                      <Award className="w-3.5 h-3.5 text-[var(--color-primary)]" /> {proj.name}
                                    </span>
                                    <span className="text-[9px] text-[var(--color-text-muted)] mt-0.5 leading-snug font-medium">
                                      {proj.desc}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        </div>

                        {/* Stagger dummy empty side on desktop */}
                        <div className="hidden md:block w-1/2" />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
