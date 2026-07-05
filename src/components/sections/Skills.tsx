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
    skills: ["Core JS", "Python", "Dart", "C", "JSON"],
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
    skills: ["AWS", "Containerization (Docker)", "Linux (Red Hat)", "Automated Pipelines", "Infrastructure as Code"],
  },
  {
    title: "System Architecture",
    skills: ["Microservices", "3-Tier Architecture", "Real-time Systems", "Security", "JSON Web Token (JWT)", "API Testing"],
  },
  {
    title: "Emerging Tech",
    skills: ["AI & ML (RoBERTa, NLP)", "Blockchain (Aptos, Move)", "IoT (Sensors, Bluetooth telemetry)"],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-bg relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-12 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-2">Expertises</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-text">
                Technical Toolkit.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-text-muted leading-relaxed">
              Consolidated competencies grouped by operational domains—incorporating full-stack development, cloud pipelines, and emerging Web3/AI networks.
            </p>
          </div>

          {/* Categories Grid (Glass panels layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass p-6 border border-white/5 bg-white/[0.01] hover:border-primary/20 hover:bg-white/[0.02] flex flex-col gap-4"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                  <div className="w-1.5 h-3 bg-gradient-to-b from-accent to-primary rounded-full" />
                  <h3 className="font-display font-semibold text-sm text-text uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-sans text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-text-muted hover:text-white hover:border-accent/40 hover:bg-accent/10 transition-all duration-200 cursor-default select-none"
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
