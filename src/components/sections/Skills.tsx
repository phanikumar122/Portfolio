"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
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
  Terminal
} from "lucide-react";

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
    skills: ["React", "Next", "Flutter", "Android SDK"],
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
  "Next": "#FFFFFF",
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
                    const logo = SKILL_LOGOS[skill];
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
                        {typeof logo === "string" ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img 
                            src={logo} 
                            alt={skill} 
                            className="w-4.5 h-4.5 shrink-0 object-contain transition-all duration-250" 
                            style={{ 
                              filter: isHovered ? "none" : "grayscale(30%) opacity(0.85)" 
                            }} 
                          />
                        ) : (
                          (() => {
                            const IconComponent = logo || Compass;
                            return (
                              <IconComponent 
                                className="w-4.5 h-4.5 shrink-0 transition-colors duration-250" 
                                style={{ color: isHovered ? brandColor : "var(--color-text-muted)" }} 
                              />
                            );
                          })()
                        )}
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
