"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { MaskText } from "@/components/ui/MaskText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { 
  Braces, 
  Network, 
  Database, 
  Layers, 
  Activity, 
  ShieldCheck, 
  KeyRound, 
  TestTube, 
  FileCode, 
  HardDrive, 
  GitFork, 
  Monitor, 
  Boxes, 
  Globe, 
  Smartphone, 
  Compass, 
  Shield, 
  Server 
} from "lucide-react";

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

const LinuxIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
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
    <rect width="24" height="24" rx="3" fill="#F7DF1E" />
    <path d="M7 19.5c.343.6 1.028 1 1.714 1 .943 0 1.543-.514 1.543-1.428V11H8.628v7.286c0 .4-.172.57-.428.57-.343 0-.515-.228-.686-.514L7 19.5zM12.571 19.429c.43.685 1.03 1.071 2.058 1.071 1.114 0 1.8-.6 1.8-1.543 0-.857-.515-1.285-1.458-1.714l-.514-.257c-.514-.257-.686-.43-.686-.77 0-.343.257-.515.6-.515.343 0 .6.17.77.514l.857-.6c-.43-.686-.943-.943-1.629-.943-1.03 0-1.714.6-1.714 1.543 0 .857.515 1.285 1.285 1.629l.515.257c.6.257.857.43.857.857 0 .343-.343.6-.77.6-.515 0-.857-.257-1.115-.685l-.943.514z" fill="#000000" />
  </svg>
);

const PythonIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M12 2C8.5 2 6.5 3.5 6.5 5.5v2H12v1H5C3.3 8.5 2 9.8 2 12s1.3 3.5 3 3.5h1.5v2.5C6.5 20 8.5 22 12 22c3.5 0 5.5-2 5.5-4v-2H12v-1h7c1.7 0 3-1.3 3-3.5S20.7 8.5 19 8.5h-1.5V6c0-2-2-4-5.5-4z" fill="url(#python-gradient)" />
    <circle cx="9.5" cy="5.5" r="1" fill="#FFFFFF" />
    <circle cx="14.5" cy="18.5" r="1" fill="#FFFFFF" />
    <defs>
      <linearGradient id="python-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3776AB" />
        <stop offset="100%" stopColor="#FFD43B" />
      </linearGradient>
    </defs>
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

const JWTIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="2" y="5" width="20" height="14" rx="2" fill="#D63AFF" opacity="0.15" stroke="#D63AFF" strokeWidth="1.5" />
    <path d="M7 9h2v6H7v-6zm3 0h1.5l1 3.5 1-3.5H15v6h-1.5v-3.8l-1.1 3.8h-1l-1.1-3.8V15H10V9zm6.5 0h3v1.5h-1.5v1h1.5V13h-1.5v2h-1.5V9z" fill="#D63AFF" />
  </svg>
);

const ApiTestingIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fill="#FF9800" />
  </svg>
);

const JsonIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M8 3H5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v4H5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h3m8-18h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-1v4h1c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-3" stroke="#F7DF1E" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 10h1v4H9v-4zm3 0h2v4h-2v-4z" fill="#F7DF1E" />
  </svg>
);

const NetworkingIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <circle cx="12" cy="5" r="3" fill="#9C27B0" />
    <circle cx="5" cy="18" r="3" fill="#9C27B0" />
    <circle cx="19" cy="18" r="3" fill="#9C27B0" />
    <path d="M12 8v4M5 15l7-3 7 3" stroke="#9C27B0" strokeWidth="2" />
  </svg>
);

const OSIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="3" y="3" width="18" height="13" rx="2" stroke="#0078D6" strokeWidth="2" />
    <path d="M3 12h18M12 16v4M8 20h8" stroke="#0078D6" strokeWidth="2" />
    <path d="M6 7l2 1.5L6 10" stroke="#0078D6" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const VMIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#E91E63" opacity="0.8" />
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#E91E63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AWSIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M3.2 14.6c4.6 2.6 11 .6 15-2.5.5-.4 1.1-.1.9.5-.9 2.5-4.4 5.3-9.5 5.3-4.5 0-8.2-2.2-8.5-2.8-.2-.3.1-.7.7-.5zm15.7-4c-.2-.7-1.1-.6-1.5.1l-.8 1.4c-.2.4 0 .9.5.8l2.2-.4c.7-.1.8-1 .2-1.3l-.6-.6z" fill="#FF9900" />
    <path d="M4 11.2c0-1 .4-1.6 1.2-1.6.7 0 1 .4 1 1v1H4v-.4zm3.2 1.4V9.8c0-.7-.4-1.2-1.2-1.2-.6 0-1.1.3-1.3.7l.8.5c.2-.2.4-.3.6-.3.3 0 .4.2.4.5v.4H4.5c-1.1 0-1.8.6-1.8 1.4 0 .7.6 1.2 1.4 1.2.7 0 1.2-.3 1.4-.7v.6h1.7zm-.5.1v-1.6" fill="#FFFFFF" />
    <path d="M8.8 8.8h1.6l.8 2.8.8-2.8h1.5l.8 2.8.8-2.8h1.6l-1.5 4.8h-1.5l-.8-2.7-.8 2.7H10.3L8.8 8.8z" fill="#FFFFFF" />
    <path d="M19.4 10c0-1-.8-1.4-1.7-1.4-.8 0-1.4.3-1.6.8l.8.5c.2-.3.4-.4.8-.4.4 0 .6.1.6.3v.1c-.2 0-.6.1-.9.2-.8.2-1.3.6-1.3 1.2 0 .7.6 1.1 1.3 1.1.7 0 1.1-.3 1.3-.7v.6h1.7V10zm-1.7 1.4c-.4 0-.6-.2-.6-.5 0-.3.2-.4.6-.5.2 0 .5 0 .6.1v.6c-.1.2-.3.3-.6.3z" fill="#FFFFFF" />
  </svg>
);

// ─────────────────────────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────────────────────────

const SKILL_CATEGORIES: { title: string; skills: string[] }[] = [
  {
    title: "Languages",
    skills: ["Core JS", "Python", "Json"],
  },
  {
    title: "Frameworks & Mobile",
    skills: ["Flutter", "Android SDK"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Android Studio", "Linux", "Operating Systems", "Virtual Machines", "Computer Networking"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Architecture & Security",
    skills: ["Microservices", "3-Tier Architecture", "Real-time Systems", "Security", "JSON Web Token (JWT)", "Api Testing"],
  },
  {
    title: "Deployment & DevOps",
    skills: ["AWS", "Infrastructure as Code", "Containerization", "Automated Pipelines"],
  },
];

// ─────────────────────────────────────────────────────────────
// CONFIG & DATA
// ─────────────────────────────────────────────────────────────

const SKILL_ICONS: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  "Android SDK": AndroidIcon,
  "Flutter": FlutterIcon,
  "Android Studio": AndroidStudioIcon,
  "Git": GitIcon,
  "Computer Networking": NetworkingIcon,
  "JSON Web Token (JWT)": JWTIcon,
  "Api Testing": ApiTestingIcon,
  "Json": JsonIcon,
  "Core JS": CoreJSIcon,
  "Python": PythonIcon,
  "MySQL": MySQLIcon,
  "MongoDB": MongoDBIcon,
  "Linux": LinuxIcon,
  "Operating Systems": OSIcon,
  "Virtual Machines": VMIcon,
  "Microservices": MicroservicesIcon,
  "3-Tier Architecture": TierArchIcon,
  "Real-time Systems": RealtimeIcon,
  "Infrastructure as Code": IaCIcon,
  "Containerization": ContainerIcon,
  "Automated Pipelines": PipelinesIcon,
  "Security": SecurityIcon,
  "AWS": AWSIcon,
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
  "Virtual Machines": "#E91E63",
  "Microservices": "#6366F1",
  "3-Tier Architecture": "#06B6D4",
  "Real-time Systems": "#10B981",
  "Infrastructure as Code": "#F59E0B",
  "Containerization": "#2496ED",
  "Automated Pipelines": "#8B5CF6",
  "Security": "#EF4444",
  "AWS": "#FF9900",
};

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
    hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Languages":
        return <Globe className="w-4 h-4 shrink-0 text-emerald-500" />;
      case "Frameworks & Mobile":
        return <Smartphone className="w-4 h-4 shrink-0 text-sky-500" />;
      case "Tools & Platforms":
        return <Compass className="w-4 h-4 shrink-0 text-amber-500" />;
      case "Databases":
        return <Database className="w-4 h-4 shrink-0 text-orange-500" />;
      case "Architecture & Security":
        return <Shield className="w-4 h-4 shrink-0 text-red-500" />;
      case "Deployment & DevOps":
        return <Server className="w-4 h-4 shrink-0 text-purple-500" />;
      default:
        return <Compass className="w-4 h-4 shrink-0 text-neutral-500" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-10 sm:py-16 md:py-20 relative overflow-hidden"
      style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}
    >
      <div className="absolute left-0 top-1/3 pointer-events-none" style={{ width: "clamp(150px,30vw,350px)", height: "clamp(150px,30vw,350px)", background: "radial-gradient(ellipse, var(--blob-1) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div className="absolute right-0 bottom-1/3 pointer-events-none" style={{ width: "clamp(120px,25vw,300px)", height: "clamp(120px,25vw,300px)", background: "radial-gradient(ellipse, var(--blob-2) 0%, transparent 65%)", filter: "blur(50px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <ScrollReveal className="flex flex-col gap-4 mb-10 sm:mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="section-line" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: "var(--color-text)" }}>DEVELOPMENT STACK</p>
                </div>
                <h2
                  className="font-bold tracking-tighter"
                  style={{ color: "var(--color-text)", fontSize: "clamp(2rem, 9vw, 5rem)" }}
                >
                  <MaskText>Skills.</MaskText>
                </h2>
              </div>
              <p className="max-w-sm text-sm sm:text-base leading-relaxed font-medium" style={{ color: "var(--color-text-muted)" }}>
                A curated stack of key programming languages, data stores, architectural patterns, and system operations.
              </p>
            </div>
          </ScrollReveal>

          {/* Categorized Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: catIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-7 rounded-2xl border border-[var(--color-border)] bg-neutral-50/50 dark:bg-[#121212]/30 backdrop-blur-md hover:border-neutral-500 dark:hover:border-neutral-800 transition-all duration-300 flex flex-col gap-5 shadow-sm"
              >
                {/* Category Header */}
                <div className="flex items-center border-b border-[var(--color-border)] pb-4">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(cat.title)}
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--color-text)]">
                       {cat.title}
                    </span>
                  </div>
                </div>

                {/* Skills Grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
                >
                  {cat.skills.map((skill) => {
                    const Icon = SKILL_ICONS[skill] || Compass;
                    const brandColor = SKILL_COLORS[skill] || "var(--color-text)";
                    const isHovered = hoveredSkill === skill;

                    return (
                      <motion.div
                        key={skill}
                        variants={itemVariants}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border transition-all duration-250 cursor-pointer bg-white dark:bg-neutral-900/50 w-full"
                        style={{
                          borderColor: isHovered ? brandColor : "var(--color-border)",
                          boxShadow: isHovered
                            ? `0 8px 20px -8px ${brandColor}40, 0 0 0 1px ${brandColor}20`
                            : "none",
                          transform: isHovered ? "translateY(-2px)" : "none"
                        }}
                      >
                        <Icon 
                          className="w-4 h-4 shrink-0 transition-colors duration-250" 
                          style={{ color: isHovered ? brandColor : "var(--color-text-muted)" }} 
                        />
                        <span 
                          className="text-[10px] sm:text-xs font-bold uppercase tracking-wide transition-colors duration-250 leading-tight"
                          style={{ color: isHovered ? "var(--color-text)" : "var(--color-text-muted)" }}
                        >
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
