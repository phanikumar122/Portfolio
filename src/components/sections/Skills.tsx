"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MaskText } from "@/components/ui/MaskText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { portfolioData } from "@/data/portfolio";
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
    bg: "rgba(var(--color-primary-rgb), 0.025)",
    border: "rgba(var(--color-primary-rgb), 0.08)",
    iconColor: "text-[var(--color-primary)]",
  },
  {
    title: "Frontend",
    skills: ["React", "Flutter", "CSS", "UI/UX"],
    bg: "rgba(var(--color-primary-rgb), 0.025)",
    border: "rgba(var(--color-primary-rgb), 0.08)",
    iconColor: "text-[var(--color-primary)]",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "APIs"],
    bg: "rgba(56, 90, 82, 0.025)",
    border: "rgba(56, 90, 82, 0.1)",
    iconColor: "text-[var(--color-accent)]",
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Firebase"],
    bg: "rgba(56, 90, 82, 0.025)",
    border: "rgba(56, 90, 82, 0.1)",
    iconColor: "text-[var(--color-accent)]",
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Containerization", "Linux", "Automated Pipelines", "Infrastructure as Code"],
    bg: "rgba(140, 138, 133, 0.025)",
    border: "rgba(140, 138, 133, 0.1)",
    iconColor: "text-neutral-500 dark:text-neutral-400",
  },
  {
    title: "Architecture",
    skills: ["Microservices", "3-Tier Architecture", "Real-time Systems", "Security", "JSON Web Token (JWT)"],
    bg: "rgba(140, 138, 133, 0.025)",
    border: "rgba(140, 138, 133, 0.1)",
    iconColor: "text-neutral-500 dark:text-neutral-400",
  },
  {
    title: "Emerging",
    skills: ["AI&ML", "Blockchain", "IoT"],
    bg: "rgba(var(--color-primary-rgb), 0.025)",
    border: "rgba(var(--color-primary-rgb), 0.08)",
    iconColor: "text-[var(--color-primary)]",
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
// SKILL DIAGNOSTIC TELEMETRY
// ─────────────────────────────────────────────────────────────

interface SkillDetail {
  category: string;
  level: number;
  desc: string;
  projects: string[];
}

const SKILL_DETAILS: Record<string, SkillDetail> = {
  "Android SDK": { category: "Development Skills", level: 85, desc: "Building native Android services, custom views, and lifecycle management.", projects: ["ToDo App", "Smart Hand Rehab"] },
  "Flutter": { category: "Development Skills", level: 90, desc: "Developing cross-platform apps with customized UI renders and Bluetooth integrations.", projects: ["ToDo App", "Smart Hand Rehab"] },
  "Android Studio": { category: "Development Skills", level: 88, desc: "IDE workflow optimizations, performance profiling, and Gradle configurations.", projects: [] },
  "Git": { category: "Development Skills", level: 92, desc: "Version control branching strategies, commit cleanliness, and conflict resolution.", projects: [] },
  "Computer Networking": { category: "Development Skills", level: 80, desc: "Designing TCP/IP packets, socket servers, and low-latency network telemetry.", projects: [] },
  "JSON Web Token (JWT)": { category: "Architectural Patterns", level: 90, desc: "Stateless security architectures with refresh rotation and signature signing.", projects: ["EduConnect", "Skill Tern"] },
  "Api Testing": { category: "Development Skills", level: 85, desc: "Validation scripts, automated endpoint assertions, and payload edge-case tests.", projects: ["EduConnect", "Skill Tern"] },
  "Json": { category: "Development Skills", level: 95, desc: "High-density data parsing, structural schemas, and serialization buffers.", projects: [] },
  "Core JS": { category: "Core Stack", level: 90, desc: "Asynchronous concurrency loops, scope bindings, and custom DOM manipulations.", projects: ["EduConnect", "Skill Tern"] },
  "Python": { category: "Core Stack", level: 88, desc: "Scripting automations, data science classification, and NLP pipeline modeling.", projects: ["Syllabi-AI", "TruthLens"] },
  "MySQL": { category: "Core Stack", level: 85, desc: "Relational constraints, indexed query plans, and transaction locking systems.", projects: [] },
  "MongoDB": { category: "Core Stack", level: 88, desc: "Document structuring, aggregated pipeline queries, and replica set scaling.", projects: ["EduConnect", "Skill Tern", "ToDo App"] },
  "Linux": { category: "Core Stack", level: 90, desc: "System administration, daemon configurations, and bash command automations.", projects: [] },
  "Operating Systems": { category: "Development Skills", level: 85, desc: "Thread scheduling, memory allocation mappings, and filesystem interfaces.", projects: [] },
  "Virtual Machines": { category: "Development Skills", level: 80, desc: "Hypervisor virtualization layers, sandboxed environments, and disk setups.", projects: [] },
  "Microservices": { category: "Architectural Patterns", level: 82, desc: "Service discovery, API gateways, and horizontal scaling structures.", projects: [] },
  "3-Tier Architecture": { category: "Architectural Patterns", level: 88, desc: "Decoupling visual interfaces, controller logics, and persistent databases.", projects: ["EduConnect", "Skill Tern"] },
  "Real-time Systems": { category: "Architectural Patterns", level: 85, desc: "Bidirectional WebSockets, event-driven loops, and state sync layers.", projects: ["EduConnect"] },
  "Infrastructure as Code": { category: "System Operations", level: 75, desc: "Declarative infrastructure setups and platform configurations.", projects: [] },
  "Containerization": { category: "System Operations", level: 85, desc: "Dockerizing applications and optimizing multi-stage builds.", projects: [] },
  "Automated Pipelines": { category: "System Operations", level: 82, desc: "CI/CD continuous validation, build runs, and auto deployments.", projects: [] },
  "Security": { category: "System Operations", level: 80, desc: "Encryption hashing algorithms (bcrypt), secure cors, and XSS sanitizations.", projects: ["EduConnect", "Skill Tern"] },
  "AWS": { category: "System Operations", level: 80, desc: "Cloud computing architectures, EC2 compute instances, and S3 data stores.", projects: [] },
  "React": { category: "Frontend Focus", level: 92, desc: "Modern hook abstractions, state management, and reusable modular component designs.", projects: ["EduConnect", "Skill Tern"] },
  "Next": { category: "Frontend Focus", level: 88, desc: "Server-side rendering optimization, dynamic route parsing, and static generation.", projects: [] },
  "Dart": { category: "Languages", level: 85, desc: "Object-oriented structures, asynchronous operations, and type-safe systems.", projects: ["ToDo App", "Smart Hand Rehab"] },
  "CSS": { category: "Frontend Focus", level: 90, desc: "Atomic styles, layout algorithms (Flexbox/Grid), and premium animations.", projects: [] },
  "UI/UX": { category: "Frontend Focus", level: 88, desc: "High-contrast colors, layouts, typography systems, and responsive design.", projects: ["EduConnect", "Skill Tern", "ToDo App"] },
  "Node.js": { category: "Backend Focus", level: 90, desc: "Event loop execution context, filesystem access, and streaming network requests.", projects: ["EduConnect", "Skill Tern", "ToDo App"] },
  "Express": { category: "Backend Focus", level: 90, desc: "Restful routes, request validation middlewares, and error handlers.", projects: ["Skill Tern"] },
  "APIs": { category: "Backend Focus", level: 92, desc: "Designing REST endpoints, CORS configurations, and rate-limiting rules.", projects: ["EduConnect", "Skill Tern"] },
  "Firebase": { category: "Databases", level: 85, desc: "NoSQL databases, firestore rules, and secure user authentications.", projects: ["ToDo App", "Syllabi-AI"] },
  "AI&ML": { category: "Emerging Tech", level: 85, desc: "Supervised classifiers, deep neural nets, and local inference models.", projects: ["Syllabi-AI", "TruthLens"] },
  "Blockchain": { category: "Emerging Tech", level: 80, desc: "Consensus mechanics, smart contract functions, and decentralized staking.", projects: ["Decentralized Network"] },
  "IoT": { category: "Emerging Tech", level: 88, desc: "Hardware registers, serial communication, and physical telemetry readouts.", projects: ["Smart Hand Rehab"] },
};

const getSkillDetail = (name: string): SkillDetail => {
  return SKILL_DETAILS[name] || {
    category: "Technical Stack",
    level: 80,
    desc: `Integrated ${name} tools within technical projects to optimize system flows.`,
    projects: []
  };
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
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);



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
      color: SKILL_COLORS[skill] || "var(--color-primary)",
    };
  });

  const filteredSkills = selectedCategory === "All"
    ? allSkills
    : allSkills.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
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
          <div className="flex justify-center mb-10 skills-tabs-scroll">
            <div className="inline-flex p-1.5 bg-[var(--neutral-100)] border-2 border-[var(--neutral-900)] rounded-2xl shadow-[3px_3px_0px_#18181A] whitespace-nowrap">
              {[
                { id: "grid", label: "Category Grid" },
                { id: "sorter", label: "System Dashboard" },
                { id: "timeline", label: "Mastery Timeline" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "grid" | "sorter" | "timeline")}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-[var(--color-primary)] text-white border-2 border-[var(--neutral-900)] shadow-[2px_2px_0px_#18181A]"
                      : "text-neutral-500 hover:text-neutral-900 border-2 border-transparent"
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
                {SKILL_CATEGORIES.map((cat, catIdx) => {
                  return (
                    <motion.div
                      key={cat.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: catIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="card-elevated w-full relative overflow-hidden flex flex-col cursor-default"
                    >
                      <div className="p-6 flex-1 flex flex-col gap-4 bg-white">
                        {/* Category Header */}
                        <div className="flex items-center border-b border-[var(--color-border)] pb-2.5">
                          <div className="flex items-center gap-2.5">
                            {getCategoryIcon(cat.title)}
                            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-text)]">
                               {cat.title}
                            </span>
                          </div>
                        </div>

                        {/* Skills pills inside Category Grid */}
                        <div className="flex flex-wrap gap-2">
                          {cat.skills.map((skill) => {
                            const logo = SKILL_LOGOS[skill];
                            const isHovered = hoveredSkill === skill;

                            return (
                              <div
                                key={skill}
                                onMouseEnter={() => setHoveredSkill(skill)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                className="flex items-center gap-2 px-3 py-2 rounded-xl border-2 border-[var(--neutral-900)] bg-white shadow-[2px_2px_0px_#18181A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#18181A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#18181A] transition-all duration-150 cursor-pointer"
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
                                        style={{ color: "var(--color-text-muted)" }} 
                                      />
                                    );
                                  })()
                                )}
                                <span 
                                  className="text-[10px] sm:text-xs font-bold uppercase tracking-wide transition-colors duration-250 leading-none"
                                  style={{ color: "var(--color-text-muted)" }}
                                >
                                  {skill}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === "sorter" && (
              <motion.div
                key="sorter"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
              >
                {/* Left Column: Sorter Filters & Node Grid */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  {/* Category Filters */}
                  <div className="flex flex-wrap gap-2">
                    {["All", ...SKILL_CATEGORIES.map((c) => c.title)].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-xl text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest transition-all duration-150 border-2 border-[var(--neutral-900)] ${
                          selectedCategory === cat
                            ? "bg-[var(--color-primary)] text-white shadow-[3px_3px_0px_#18181A] -translate-x-0.5 -translate-y-0.5"
                            : "bg-white text-neutral-500 hover:text-neutral-900 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#18181A] active:translate-y-0.5 active:shadow-[1px_1px_0px_#18181A] shadow-[2px_2px_0px_#18181A]"
                        }`}
                        style={{ minHeight: "34px" }}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Sorter Grid */}
                  <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 gap-3 min-h-[220px]"
                  >
                    <AnimatePresence>
                      {filteredSkills.map((skill) => {
                        const logo = SKILL_LOGOS[skill.name];
                        const isHovered = hoveredSkill === skill.name;
                        const isSelected = selectedSkill === skill.name;

                        return (
                          <motion.div
                            layout
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.25 }}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            onClick={() => setSelectedSkill(skill.name)}
                            className={`flex items-center gap-2.5 p-3 rounded-xl border-2 border-[var(--neutral-900)] transition-all duration-150 cursor-pointer select-none ${
                              isSelected
                                ? "bg-[var(--neutral-200)] shadow-[1px_1px_0px_#18181A] translate-x-0.5 translate-y-0.5"
                                : "bg-white shadow-[2px_2px_0px_#18181A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#18181A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#18181A]"
                            }`}
                          >
                            {typeof logo === "string" ? (
                              /* eslint-disable-next-line @next/next/no-img-element */
                              <img 
                                src={logo} 
                                alt={skill.name} 
                                className="w-4 h-4 shrink-0 object-contain" 
                                style={{ filter: isHovered || isSelected ? "none" : "grayscale(35%) opacity(0.85)" }} 
                              />
                            ) : (
                              (() => {
                                const IconComponent = logo || Compass;
                                return (
                                  <IconComponent 
                                    className="w-4 h-4 shrink-0" 
                                    style={{ color: isSelected ? "var(--color-primary)" : "var(--color-text-muted)" }} 
                                  />
                                );
                              })()
                            )}
                            <div className="flex flex-col gap-0.5 min-w-0">
                              <span 
                                className="text-[10px] font-extrabold uppercase tracking-wide truncate leading-tight"
                                style={{ color: "var(--color-text)" }}
                              >
                                {skill.name}
                              </span>
                              <span className="text-[7px] font-mono font-bold uppercase tracking-wider text-neutral-400 block truncate">
                                {skill.category}
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* Right Column: Retro Diagnostics Monitor */}
                <div className="lg:col-span-5 h-full">
                  <div className="card-elevated bg-[#0A0D10] border-2 border-[var(--neutral-900)] text-[#4EA392] font-mono p-5 rounded-2xl flex flex-col justify-between min-h-[380px] relative overflow-hidden crt-screen">
                    {/* Sweep effect overlay */}
                    <div className="crt-sweep" />
                    
                    {/* Inner content */}
                    <div className="relative z-10 flex flex-col gap-4">
                      {/* Console Header */}
                      <div className="flex justify-between items-center border-b border-emerald-950/60 pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E66E53] animate-pulse" />
                          <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-widest text-[#E66E53]">SYS.DIAGNOSTICS</span>
                        </div>
                        <span className="text-[7px] sm:text-[8px] opacity-65 uppercase font-bold">STATE: ACTIVE</span>
                      </div>

                      {hoveredSkill || selectedSkill ? (
                        <div className="flex flex-col gap-4">
                          {/* Name and Category */}
                          <div className="flex flex-col">
                            <span className="text-[8px] text-[#E66E53] font-black uppercase tracking-wider">ACTIVE NODE:</span>
                            <span className="text-base font-black tracking-wide text-white uppercase">{hoveredSkill || selectedSkill}</span>
                            <span className="text-[7px] sm:text-[8px] opacity-50 uppercase tracking-widest mt-0.5">[{getSkillDetail(hoveredSkill || selectedSkill || "").category}]</span>
                          </div>

                          {/* Progress Bar / Mastery Bar */}
                          <div className="flex flex-col gap-1.5">
                            <div className="flex justify-between text-[8px] sm:text-[9px] font-black tracking-wide">
                              <span className="text-[#E66E53]">COMPETENCY:</span>
                              <span className="text-white">{getSkillDetail(hoveredSkill || selectedSkill || "").level}%</span>
                            </div>
                            {/* Custom retro bar */}
                            <div className="w-full bg-[#07090C] border border-emerald-950/40 rounded p-0.5 h-5 flex items-center overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${getSkillDetail(hoveredSkill || selectedSkill || "").level}%` }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="h-full bg-emerald-500/80 border-r border-[#4EA392] flex items-center justify-end pr-1"
                              >
                                <span className="text-[6px] text-[#0A0D10] font-black font-mono">|||</span>
                              </motion.div>
                            </div>
                          </div>

                          {/* Console logs output */}
                          <div className="flex flex-col gap-1">
                            <span className="text-[8px] text-[#E66E53] font-black uppercase tracking-wider">TELEMETRY:</span>
                            <div className="bg-[#050709] border border-emerald-950/40 p-2.5 rounded text-[9px] sm:text-[10px] leading-relaxed text-emerald-300 min-h-[60px]">
                              <p className="before:content-['>_']">{getSkillDetail(hoveredSkill || selectedSkill || "").desc}</p>
                            </div>
                          </div>

                          {/* Associated projects if any */}
                          {getSkillDetail(hoveredSkill || selectedSkill || "").projects.length > 0 && (
                            <div className="flex flex-col gap-1.5">
                              <span className="text-[8px] text-[#E66E53] font-black uppercase tracking-wider">FLAGSHIP ARTIFACTS:</span>
                              <div className="flex flex-col gap-1">
                                {getSkillDetail(hoveredSkill || selectedSkill || "").projects.map((projName) => {
                                  const projObj = portfolioData.projects.find(p => p.title === projName);
                                  return (
                                    <div
                                      key={projName}
                                      className="flex justify-between items-center bg-[#07090C] border border-emerald-950/40 rounded p-2 text-[9px] text-white hover:border-emerald-500 transition-colors cursor-pointer group"
                                      onClick={() => {
                                        if (projObj?.github) {
                                          window.open(projObj.github, "_blank");
                                        } else {
                                          const el = document.getElementById("projects");
                                          if (el) el.scrollIntoView({ behavior: "smooth" });
                                        }
                                      }}
                                    >
                                      <span className="font-bold flex items-center gap-1.5">
                                        <Award className="w-3 h-3 text-[#E66E53]" /> {projName}
                                      </span>
                                      <span className="text-[7px] text-[#4EA392] uppercase group-hover:underline">VIEW SOURCE ↗</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        /* Placeholder state when no skill is selected */
                        <div className="flex-1 flex flex-col justify-center items-center gap-3 py-10 text-center">
                          <div className="relative w-10 h-10 flex items-center justify-center border-2 border-emerald-950/40 rounded-full bg-[#07090C] text-[#4EA392]/30">
                            <Terminal className="w-5 h-5 animate-pulse" />
                          </div>
                          <div className="max-w-xs flex flex-col gap-1">
                            <span className="text-[9px] text-white uppercase tracking-wider font-extrabold">AWAITING INPUT...</span>
                            <span className="text-[8px] opacity-50 leading-relaxed font-bold">HOVER OR CLICK A TECHNOLOGY NODE IN THE GRID TO EXECUTE MODULE TELEMETRY.</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

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
                        <div className="absolute left-4 md:left-1/2 top-6 w-3.5 h-3.5 rounded-full border-2 border-[var(--neutral-900)] bg-[var(--color-primary)] md:-translate-x-1/2 z-20 shadow-[2px_2px_0px_#18181A]" />

                        {/* Spacer or Card container */}
                        <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                          <motion.div
                            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="card-elevated relative group/timecard cursor-default overflow-hidden flex flex-col"
                          >
                            <div className="p-6 bg-white flex-1 flex flex-col">
                              {/* Year Indicator */}
                              <span className="inline-block px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-[rgba(var(--color-primary-rgb),0.08)] border-2 border-[var(--neutral-900)] text-[var(--color-primary)] mb-3 shadow-[1px_1px_0px_#18181A]">
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
                                    className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-neutral-50 border-2 border-[var(--neutral-900)] text-[var(--color-text-muted)] shadow-[1px_1px_0px_#18181A]"
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
                                    className="flex flex-col p-2 bg-[var(--neutral-100)] border-2 border-[var(--neutral-900)] rounded-xl hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#18181A] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#18181A] cursor-default transition-all duration-150"
                                  >
                                    <span className="text-[10px] font-extrabold text-[var(--color-text)] uppercase tracking-wide flex items-center gap-1.5 flex-row">
                                      <Award className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" /> {proj.name}
                                    </span>
                                    <span className="text-[9px] text-[var(--color-text-muted)] mt-0.5 leading-snug font-medium">
                                      {proj.desc}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div> {/* Close of p-6 wrapper */}
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
