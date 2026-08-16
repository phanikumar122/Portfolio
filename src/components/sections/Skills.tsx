"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Core JS", "Python", "C++", "Java", "JSON"],
  },
  {
    title: "Frontend & Mobile",
    skills: ["React", "Next.js", "Flutter", "Android SDK", "CSS", "UI/UX"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express", "APIs", "MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Linux", "Pipelines", "IaC"],
  },
  {
    title: "Architecture",
    skills: ["Microservices", "System Design", "Event-Driven", "Real-time", "Security"],
  },
  {
    title: "Emerging Tech",
    skills: ["LLM Agents", "Agentic RAG", "Tool Use", "Autonomous Loops"],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-12 gap-6 border-b border-white/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted block mb-3">Expertises</span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-text tracking-tight">
                Technical Toolkit.
              </h2>
            </div>
          </div>

          {/* Categories Grid (Minimalist list style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex flex-col gap-5"
              >
                {/* Category Header */}
                <h3 className="font-display font-medium text-lg text-white border-b border-white/10 pb-3">
                  {category.title}
                </h3>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-sans text-xs px-3 py-1.5 rounded-md bg-surface border border-white/5 text-text-muted hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200 cursor-default select-none font-medium tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
