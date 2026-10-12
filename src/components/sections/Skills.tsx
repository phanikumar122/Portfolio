"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Database, Cloud, Cpu, Sparkles, Layers } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  iconBg: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code2 className="w-4 h-4 text-[#407899]" />,
    iconBg: "bg-[#407899]/15 border-[#407899]/35",
    skills: ["Core JS", "Python", "C++", "Java", "JSON", "SQL"],
  },
  {
    title: "Frontend & Mobile",
    icon: <Smartphone className="w-4 h-4 text-[#167d6e]" />,
    iconBg: "bg-[#41d3bd]/20 border-[#41d3bd]/40",
    skills: ["React", "Next.js", "Flutter", "Android SDK", "Tailwind CSS", "UI/UX"],
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-4 h-4 text-[#791e94]" />,
    iconBg: "bg-[#791e94]/15 border-[#791e94]/35",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-4 h-4 text-[#407899]" />,
    iconBg: "bg-[#407899]/15 border-[#407899]/35",
    skills: ["AWS", "Docker", "Linux", "CI/CD Pipelines", "Git"],
  },
  {
    title: "Architecture & Systems",
    icon: <Cpu className="w-4 h-4 text-[#de6449]" />,
    iconBg: "bg-[#de6449]/15 border-[#de6449]/35",
    skills: ["Microservices", "System Design", "Event-Driven", "Real-time", "Security"],
  },
  {
    title: "AI & Emerging Tech",
    icon: <Sparkles className="w-4 h-4 text-[#791e94]" />,
    iconBg: "bg-[#791e94]/15 border-[#791e94]/35",
    skills: ["LLM Agents", "Agentic RAG", "Tool Use", "Prompt Eng", "Autonomous Loops"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 gap-4 border-b border-[#407899]/18">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="section-badge">
                  <Layers className="w-3.5 h-3.5 text-[#407899]" />
                  Capabilities
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#191424] tracking-tight">
                Technical Arsenal.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4b6272] max-w-md font-light leading-relaxed">
              Curated technologies and architectural patterns I leverage to engineer resilient, high-speed applications.
            </p>
          </div>

          {/* Categories Grid Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="bento-card p-6 flex flex-col justify-between group hover:border-[#791e94]/30 transition-all duration-300"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#407899]/12">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${category.iconBg}`}>
                        {category.icon}
                      </div>
                      <h3 className="font-display font-semibold text-base text-[#191424]">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono font-medium text-[#4b6272] bg-[#fffff2] px-2 py-0.5 rounded-full border border-[#407899]/20">
                      {category.skills.length} skills
                    </span>
                  </div>

                  {/* Badges Container */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#fffff2] border border-[#407899]/20 text-[#191424] hover:text-[#791e94] hover:bg-white hover:border-[#791e94]/40 transition-all duration-150 cursor-default select-none font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#407899]/12 flex items-center justify-between text-[11px] font-mono text-[#4b6272]">
                  <span>Stack 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#407899]/30 group-hover:bg-[#791e94] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
