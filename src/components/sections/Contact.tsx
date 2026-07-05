"use client";

import { portfolioData } from "@/data/portfolio";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  const channels = [
    {
      name: "Gmail",
      value: portfolioData.email,
      href: `mailto:${portfolioData.email}`,
      description: "Send a direct message payload to my official inbox.",
      actionText: "Send Email",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      value: "phanikumar122",
      href: portfolioData.github,
      description: "Inspect source repositories, Move/Flutter modules, and projects.",
      actionText: "Explore Repos",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      value: "Phani Kumar",
      href: portfolioData.linkedin,
      description: "Establish professional connection on global networks.",
      actionText: "Connect Profile",
      icon: <Linkedin className="w-5 h-5" />,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-bg relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-12 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent block mb-2">Network</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-text">
                Connect.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-text-muted leading-relaxed">
              Available for software engineering roles, cloud operational consultations, and Web3/AI remote integrations.
            </p>
          </div>

          {/* Grid Layout (Translucent Glass panels) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {channels.map((chan, idx) => (
              <motion.a
                key={chan.name}
                href={chan.href}
                target={chan.href.startsWith("mailto") ? undefined : "_blank"}
                rel={chan.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group glass-secondary glass-secondary-hover p-6 flex flex-col justify-between h-full relative overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  {/* Card Header */}
                  <div className="flex justify-between items-center text-[10px] font-mono text-text-muted uppercase pb-2.5 border-b border-white/10 mb-4 font-semibold">
                    <span>Gateway Secure</span>
                    <span>{chan.name}</span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-accent group-hover:text-primary flex items-center justify-center shrink-0 transition-colors">
                      {chan.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-display font-semibold text-text">
                        {chan.name}
                      </h3>
                      <span className="text-[11px] font-mono text-text-muted block mt-0.5 truncate max-w-[155px] sm:max-w-[125px] md:max-w-[145px] lg:max-w-[170px]">
                        {chan.value}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                    {chan.description}
                  </p>
                </div>

                {/* Footer action */}
                <div className="flex items-center justify-end border-t border-white/10 pt-4 mt-auto relative z-10">
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-text-muted group-hover:text-accent transition-colors uppercase font-semibold">
                    {chan.actionText} <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
