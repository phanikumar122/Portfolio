"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { MaskText } from "@/components/ui/MaskText";

// ─────────────────────────────────────────────────────────────
// CUSTOM SVG BRAND ICONS (Color Base)
// ─────────────────────────────────────────────────────────────

const AndroidIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M6 18c0 .55.45 1 1 1h10c.55 0 1-.55 1-1V9H6v9Z" fill="#3DDC84" />
    <path d="M12 2.5a6.5 6.5 0 0 0-6.4 5.5h12.8A6.5 6.5 0 0 0 12 2.5Z" fill="#3DDC84" />
    <rect x="3.5" y="9" width="1.5" height="7" rx="0.75" fill="#3DDC84" />
    <rect x="19" y="9" width="1.5" height="7" rx="0.75" fill="#3DDC84" />
    <rect x="8" y="19" width="1.5" height="4" rx="0.75" fill="#3DDC84" />
    <rect x="14.5" y="19" width="1.5" height="4" rx="0.75" fill="#3DDC84" />
    <circle cx="9.25" cy="5.5" r="0.75" fill="#FFFFFF" />
    <circle cx="14.75" cy="5.5" r="0.75" fill="#FFFFFF" />
    <path d="M7 2.5l-1.5-2a0.5 0.5 0 0 0-.8.6l1.5 2a0.5 0.5 0 0 0 .8-.6z" fill="#3DDC84" />
    <path d="M17 2.5l1.5-2a0.5 0.5 0 0 1 .8.6l-1.5 2a0.5 0.5 0 0 1-.8-.6z" fill="#3DDC84" />
  </svg>
);

const GitIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M22.56 11.39L12.61 1.44a1.73 1.73 0 0 0-2.45 0L7.69 3.91l2.84 2.84a1.86 1.86 0 0 1 2.45.09 1.86 1.86 0 0 1 .09 2.45l2.84 2.84a1.85 1.85 0 0 1 2.41 2.41 1.87 1.87 0 0 1-2.5-2.5l-2.84-2.84c.09-.43.03-.89-.18-1.3l-2.58-2.58c-.41.21-.87.27-1.3.18L6.46 9.38c.09.43.03.89-.18 1.3l2.58 2.58a1.85 1.85 0 0 1 2.41 2.41 1.87 1.87 0 0 1-2.5-2.5l-2.58-2.58c-.41-.21-.87-.27-1.3-.18v5.51a1.73 1.73 0 0 0 1.23.51c.44 0 .87-.17 1.22-.51l9.95-9.95a1.72 1.72 0 0 0 .5-1.22c0-.47-.18-.94-.52-1.28z" fill="#F05032" />
    <circle cx="10.5" cy="14.5" r="1.5" fill="#FFFFFF" />
    <circle cx="10.5" cy="7.5" r="1.5" fill="#FFFFFF" />
    <circle cx="16.5" cy="13.5" r="1.5" fill="#FFFFFF" />
  </svg>
);

const FlutterIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M13.55 2L2 13.55l3.82 3.82L17.37 5.82z" fill="#40D0FD" />
    <path d="M13.55 12.09l-4.14 4.14 4.14 4.14h7.64l-4.14-4.14 4.14-4.14z" fill="#02569B" />
    <path d="M13.55 12.09l-4.14 4.14 2.82 2.82 5.46-5.46z" fill="#01579B" />
  </svg>
);

const AndroidStudioIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="2" y="4" width="20" height="16" rx="2" fill="#2F3136" stroke="#4285F4" strokeWidth="1.5" />
    <path d="M2 8h20" stroke="#4285F4" strokeWidth="1.5" />
    <circle cx="5" cy="6" r="0.75" fill="#FF5F56" />
    <circle cx="7.5" cy="6" r="0.75" fill="#FFBD2E" />
    <circle cx="10" cy="6" r="0.75" fill="#27C93F" />
    <path d="M12 12a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3z" fill="#3DDC84" />
    <circle cx="11" cy="14" r="0.25" fill="#FFFFFF" />
    <circle cx="13" cy="14" r="0.25" fill="#FFFFFF" />
    <path d="M10.5 11l-0.75-1" stroke="#3DDC84" strokeLinecap="round" />
    <path d="M13.5 11l0.75-1" stroke="#3DDC84" strokeLinecap="round" />
  </svg>
);

const OSIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="5" y="5" width="14" height="14" rx="2" stroke="#0078D6" strokeWidth="2" />
    <path d="M9 5v14M15 5v14M5 9h14M5 15h14" stroke="#0078D6" strokeWidth="1" strokeDasharray="1 1" />
    <rect x="9" y="9" width="6" height="6" rx="1" fill="#0078D6" />
    <path d="M12 7v10M7 12h10" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const VMIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#E91E63" strokeWidth="1.5" />
    <rect x="6" y="6" width="5" height="5" rx="1" fill="#E91E63" opacity="0.3" stroke="#E91E63" strokeWidth="1" />
    <rect x="13" y="6" width="5" height="5" rx="1" fill="#E91E63" opacity="0.3" stroke="#E91E63" strokeWidth="1" />
    <rect x="6" y="13" width="5" height="5" rx="1" fill="#E91E63" opacity="0.3" stroke="#E91E63" strokeWidth="1" />
    <rect x="13" y="13" width="5" height="5" rx="1" fill="#E91E63" fillOpacity="0.8" stroke="#E91E63" strokeWidth="1" />
  </svg>
);

const NetworkingIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <circle cx="12" cy="6" r="3" stroke="#9C27B0" strokeWidth="2" />
    <circle cx="6" cy="16" r="3" stroke="#9C27B0" strokeWidth="2" />
    <circle cx="18" cy="16" r="3" stroke="#9C27B0" strokeWidth="2" />
    <path d="M12 9v4m0 0L8 14.5M12 13l4 1.5" stroke="#9C27B0" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const JWTIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="3" y="7.5" width="18" height="9" rx="1.5" stroke="#D63AFF" strokeWidth="2" />
    <circle cx="7.5" cy="12" r="1.5" fill="#FB015B" />
    <circle cx="12" cy="12" r="1.5" fill="#D63AFF" />
    <circle cx="16.5" cy="12" r="1.5" fill="#00B9F1" />
  </svg>
);

const APITestIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="3" y="4" width="18" height="10" rx="1.5" stroke="#FF9800" strokeWidth="2" />
    <path d="M7 9h4M7 6h2" stroke="#FF9800" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="17" cy="9" r="1.5" fill="#4CAF50" />
    <path d="M12 15l3 3-3 3" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 18H5" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const JsonIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M8 4c-1.5 0-2 1-2 2.5v3.5c0 1-0.5 1.5-1.5 1.5 1 0 1.5 0.5 1.5 1.5v3.5c0 1.5 0.5 2.5 2 2.5" stroke="#F7DF1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 4c1.5 0 2 1 2 2.5v3.5c0 1 0.5 1.5 1.5 1.5-1 0-1.5 0.5-1.5 1.5v3.5c0 1.5-0.5 2.5-2 2.5" stroke="#F7DF1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="1" fill="#F7DF1E" />
    <circle cx="12" cy="14" r="1" fill="#F7DF1E" />
  </svg>
);

// ── Restored original skills (minus Go) ──────────────────────

const LinuxIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Tux penguin-inspired Linux icon */}
    <ellipse cx="12" cy="8" rx="4.5" ry="5" fill="#FCC624" />
    <ellipse cx="12" cy="8" rx="2.5" ry="3" fill="#1A1A1A" />
    <circle cx="10.5" cy="7" r="0.7" fill="#FFFFFF" />
    <circle cx="13.5" cy="7" r="0.7" fill="#FFFFFF" />
    <ellipse cx="12" cy="16" rx="5" ry="4.5" fill="#1A1A1A" />
    <ellipse cx="12" cy="15.5" rx="3" ry="3" fill="#FFFFFF" />
    <path d="M8 19.5c-1.5 0-2.5 1-2.5 2" stroke="#FCC624" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 19.5c1.5 0 2.5 1 2.5 2" stroke="#FCC624" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CoreJSIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E" />
    <path d="M7 17.5c.4.7 1 1.2 2 1.2 1.1 0 1.8-.6 1.8-1.7V11H9v5.9c0 .5-.2.7-.5.7-.4 0-.6-.3-.8-.6L7 17.5z" fill="#1A1A1A" />
    <path d="M13.5 17.4c.5.8 1.2 1.3 2.4 1.3 1.3 0 2.1-.7 2.1-1.8 0-1-.6-1.5-1.7-2l-.6-.3c-.6-.3-.8-.5-.8-.9 0-.4.3-.6.7-.6.4 0 .7.2.9.6l1-.7c-.5-.8-1.1-1.1-1.9-1.1-1.2 0-2 .7-2 1.8 0 1 .6 1.5 1.5 1.9l.6.3c.7.3 1 .5 1 1 0 .4-.4.7-.9.7-.6 0-1-.3-1.3-.8l-1.1.6z" fill="#1A1A1A" />
  </svg>
);

const PythonIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M12 2C8.5 2 6.5 3.5 6.5 5.5v2H12v1H5C3.3 8.5 2 9.8 2 12s1.3 3.5 3 3.5h1.5v2.5C6.5 20 8.5 22 12 22c3.5 0 5.5-2 5.5-4v-2H12v-1h7c1.7 0 3-1.3 3-3.5S20.7 8.5 19 8.5h-1.5V6c0-2-2-4-5.5-4z" fill="#3776AB" />
    <path d="M12 2C8.5 2 6.5 3.5 6.5 5.5v2H12v1H5C3.3 8.5 2 9.8 2 12" stroke="#FFD43B" strokeWidth="0" />
    <path d="M17.5 6v2.5H12v1h7c1.7 0 3 1.3 3 3.5S20.7 15.5 19 15.5h-1.5V18c0 2-2 4-5.5 4" fill="#FFD43B" />
    <circle cx="9.5" cy="5.5" r="1" fill="#FFFFFF" />
    <circle cx="14.5" cy="18.5" r="1" fill="#3776AB" />
  </svg>
);

const MySQLIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <ellipse cx="12" cy="6" rx="8" ry="3" fill="#00758F" />
    <path d="M4 6v4c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="#00758F" stroke="#F29111" strokeWidth="0.5" />
    <ellipse cx="12" cy="10" rx="8" ry="3" fill="#00758F" />
    <path d="M4 10v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" fill="#00758F" />
    <ellipse cx="12" cy="14" rx="8" ry="3" fill="#00758F" />
    <path d="M4 14v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" fill="#00758F" />
    <ellipse cx="12" cy="18" rx="8" ry="3" fill="#F29111" />
  </svg>
);

const MongoDBIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M12 2C9 6 7 9.5 7 13a5 5 0 0 0 10 0c0-3.5-2-7-5-11z" fill="#47A248" />
    <path d="M12 2v20" stroke="#47A248" strokeWidth="1" />
    <path d="M12 13c0 0-2-1.5-2-4s2-5.5 2-7" stroke="#B8E986" strokeWidth="0.5" />
    <line x1="12" y1="20" x2="12" y2="22" stroke="#47A248" strokeWidth="2" />
  </svg>
);

const MicroservicesIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="2" y="2" width="8" height="6" rx="1.5" fill="#6366F1" />
    <rect x="14" y="2" width="8" height="6" rx="1.5" fill="#6366F1" />
    <rect x="8" y="16" width="8" height="6" rx="1.5" fill="#6366F1" />
    <path d="M6 8v3M18 8v3M6 11h12M12 11v5" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const TierArchIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="4" y="2" width="16" height="5" rx="1.5" fill="#06B6D4" />
    <rect x="4" y="9.5" width="16" height="5" rx="1.5" fill="#0891B2" />
    <rect x="4" y="17" width="16" height="5" rx="1.5" fill="#0E7490" />
    <path d="M12 7v2.5M12 14.5V17" stroke="#67E8F9" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const RealtimeIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <circle cx="12" cy="12" r="9" stroke="#10B981" strokeWidth="2" />
    <path d="M12 7v5l3 3" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 4.5L5 3M17 4.5l2-1.5" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1.5" fill="#10B981" />
  </svg>
);

const IaCIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M3 7l9-5 9 5v10l-9 5-9-5V7z" stroke="#F59E0B" strokeWidth="1.5" />
    <path d="M3 7l9 5 9-5M12 12v10" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 9.5l4 2.5 4-2.5" stroke="#FCD34D" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const ContainerIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="2" y="8" width="20" height="12" rx="2" stroke="#2496ED" strokeWidth="1.5" />
    <path d="M2 12h20" stroke="#2496ED" strokeWidth="1" strokeDasharray="2 2" />
    <rect x="5" y="4" width="14" height="4" rx="1" fill="#2496ED" opacity="0.4" />
    <circle cx="7" cy="15" r="1.5" fill="#2496ED" />
    <circle cx="12" cy="15" r="1.5" fill="#2496ED" />
    <circle cx="17" cy="15" r="1.5" fill="#2496ED" />
  </svg>
);

const PipelinesIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <circle cx="4" cy="12" r="2.5" fill="#8B5CF6" />
    <circle cx="12" cy="12" r="2.5" fill="#8B5CF6" />
    <circle cx="20" cy="12" r="2.5" fill="#8B5CF6" />
    <path d="M6.5 12h3M14.5 12h3" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 6v3.5M12 6v3.5M20 6v3.5" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1 1.5" />
    <path d="M4 14.5V18M12 14.5V18M20 14.5V18" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1 1.5" />
  </svg>
);

const SecurityIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M12 2L4 5.5v6.5c0 4.5 3.4 8.7 8 9.8 4.6-1.1 8-5.3 8-9.8V5.5L12 2z" fill="#EF4444" opacity="0.15" stroke="#EF4444" strokeWidth="1.5" />
    <path d="M9 12l2 2 4-4" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─────────────────────────────────────────────────────────────
// CONFIG & DATA
// ─────────────────────────────────────────────────────────────

const SKILL_ICONS: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  // Mobile & Dev Tools
  "Android SDK": AndroidIcon,
  "Flutter": FlutterIcon,
  "Android Studio": AndroidStudioIcon,
  "Git": GitIcon,
  // Networking & Security
  "Computer Networking": NetworkingIcon,
  "JSON Web Token (JWT)": JWTIcon,
  "Api Testing": APITestIcon,
  // Data & Web
  "Json": JsonIcon,
  "Core JS": CoreJSIcon,
  "Python": PythonIcon,
  "MySQL": MySQLIcon,
  "MongoDB": MongoDBIcon,
  // Systems
  "Linux": LinuxIcon,
  "Operating Systems": OSIcon,
  "Virtual Machines": VMIcon,
  // Architecture
  "Microservices": MicroservicesIcon,
  "3-Tier Architecture": TierArchIcon,
  "Real-time Systems": RealtimeIcon,
  "Infrastructure as Code": IaCIcon,
  "Containerization": ContainerIcon,
  "Automated Pipelines": PipelinesIcon,
  "Security": SecurityIcon,
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
  "MySQL": "#F29111",
  "MongoDB": "#47A248",
  "Linux": "#FCC624",
  "Operating Systems": "#0078D6",
  "Virtual Machines": "#E91E63",
  "Microservices": "#6366F1",
  "3-Tier Architecture": "#06B6D4",
  "Real-time Systems": "#10B981",
  "Infrastructure as Code": "#F59E0B",
  "Containerization": "#2496ED",
  "Automated Pipelines": "#8B5CF6",
  "Security": "#EF4444",
};

const ALL_SKILLS = Object.keys(SKILL_ICONS);

export const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-surface)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}
    >
      {/* Background Subtle Blobs */}
      <div className="absolute left-0 top-1/3 pointer-events-none" style={{ width: "clamp(150px,30vw,350px)", height: "clamp(150px,30vw,350px)", background: "radial-gradient(ellipse, var(--blob-1) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div className="absolute right-0 bottom-1/3 pointer-events-none" style={{ width: "clamp(120px,25vw,300px)", height: "clamp(120px,25vw,300px)", background: "radial-gradient(ellipse, var(--blob-2) 0%, transparent 65%)", filter: "blur(50px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
            <div className="flex flex-col gap-4">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-4">
                <span className="section-line" />
                <p className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: "var(--color-text)" }}>DEVELOPMENT STACK</p>
              </motion.div>
              <motion.h2
                className="font-bold tracking-tighter"
                style={{ color: "var(--color-text)", fontSize: "clamp(2.5rem, 9vw, 5rem)" }}
              >
                <MaskText>Skills.</MaskText>
              </motion.h2>
            </div>
            <p className="max-w-sm text-sm sm:text-base leading-relaxed font-medium" style={{ color: "var(--color-text-muted)" }}>
              A curated stack of key programming languages, data stores, architectural patterns, and system operations.
            </p>
          </div>

          {/* Flat Grid of Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5"
          >
            {ALL_SKILLS.map((skill) => {
              const Icon = SKILL_ICONS[skill];
              const brandColor = SKILL_COLORS[skill] || "var(--color-text)";
              const isHovered = hoveredSkill === skill;

              return (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group/item flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden bg-white dark:bg-neutral-950"
                  style={{
                    borderColor: isHovered ? brandColor : "var(--color-border)",
                    boxShadow: isHovered
                      ? `0 10px 25px -10px ${brandColor}33, 0 0 0 1px ${brandColor}30`
                      : "none",
                    transform: isHovered ? "translateY(-3px)" : "none"
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover/item:scale-105 shrink-0"
                    style={{
                      backgroundColor: `${brandColor}12`,
                      border: `1px solid ${brandColor}20`
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold tracking-wide text-neutral-800 dark:text-neutral-200 uppercase leading-tight">
                    {skill}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
