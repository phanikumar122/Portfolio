"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Github, Linkedin, ExternalLink, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    object.access_key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
    object.subject = "New Contact Message from Portfolio";
    object.from_name = "Portfolio Contact Form";
    
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await response.json();

      if (data.success) {
        setFormState("success");
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Form Error:", data);
        setFormState("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setFormState("error");
    }
  };

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
      description: "Inspect source repositories, modules, and projects.",
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
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-12 gap-6 border-b border-white/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted block mb-3">Network</span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-text tracking-tight">
                Get in Touch.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left: Contact Channels (Bento layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
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
                  className="bento-card p-6 flex flex-col justify-between group"
                >
                  <div className="bento-glow" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-center text-[10px] font-mono text-text-muted uppercase pb-3 border-b border-white/10 mb-5 font-medium">
                      <span>Gateway Secure</span>
                      <span>{chan.name}</span>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 text-text-muted group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        {chan.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-semibold text-text group-hover:text-white transition-colors">
                          {chan.name}
                        </h3>
                        <span className="text-xs font-mono text-text-muted block mt-1 truncate max-w-[200px]">
                          {chan.value}
                        </span>
                      </div>
                    </div>

                    <p className="font-sans text-sm text-text-muted leading-relaxed font-light mb-6">
                      {chan.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-end pt-4 mt-auto relative z-10">
                    <span className="flex items-center gap-2 text-xs font-mono text-text-muted group-hover:text-white transition-colors uppercase font-medium">
                      {chan.actionText} <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Right: Functional Contact Form (Bento layout) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bento-card p-8 sm:p-10"
            >
              <h3 className="font-display font-bold text-2xl text-text mb-2 tracking-tight">
                Send a Message
              </h3>
              <p className="font-sans text-sm text-text-muted mb-8 font-light">
                Directly drop a message to my inbox. I typically respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono text-text-muted uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono text-text-muted uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-mono text-text-muted uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="How can we collaborate?"
                    className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  />
                </div>

                {formState !== "error" ? (
                  <button
                    type="submit"
                    disabled={formState === "loading" || formState === "success"}
                    className="btn-primary w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formState === "idle" && (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                    {formState === "loading" && (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    )}
                    {formState === "success" && (
                      <>Sent Successfully <CheckCircle2 className="w-4 h-4" /></>
                    )}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setFormState("idle")}
                    className="btn-secondary w-full mt-2 flex items-center justify-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 text-red-400" /> Try Again
                  </button>
                )}

                {/* Form status messages */}
                {formState === "success" && (
                  <p className="text-xs text-green-400 text-center mt-2 font-mono">
                    ✓ Message delivered to inbox successfully.
                  </p>
                )}
                {formState === "error" && (
                  <p className="text-xs text-red-400 text-center mt-2 font-mono">
                    ✗ Sending failed. Please try again or email directly.
                  </p>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
