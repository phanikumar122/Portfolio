"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Github, Linkedin, ExternalLink, Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
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
      name: "Direct Email",
      value: portfolioData.email,
      href: `mailto:${portfolioData.email}`,
      description: "Direct line for internship opportunities, project collaborations, and inquiries.",
      actionText: "Send Email",
      icon: <Mail className="w-4 h-4 text-[#791e94]" />,
      bg: "bg-[#791e94]/15 border-[#791e94]/30",
    },
    {
      name: "GitHub Profile",
      value: "github.com/phanikumar122",
      href: portfolioData.github,
      description: "Explore all public repositories, open source contributions, and engineering experiments.",
      actionText: "View Repositories",
      icon: <Github className="w-4 h-4 text-[#407899]" />,
      bg: "bg-[#407899]/15 border-[#407899]/30",
    },
    {
      name: "LinkedIn Network",
      value: "linkedin.com/in/phani-kumar-999022375",
      href: portfolioData.linkedin,
      description: "Connect professionally and view academic history, recommendations, and updates.",
      actionText: "Connect Profile",
      icon: <Linkedin className="w-4 h-4 text-[#167d6e]" />,
      bg: "bg-[#41d3bd]/20 border-[#41d3bd]/40",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 gap-4 border-b border-[#407899]/18">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="section-badge">
                  <MessageSquare className="w-3.5 h-3.5 text-[#791e94]" />
                  Get In Touch
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#191424] tracking-tight">
                Let&apos;s Build Together.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4b6272] max-w-md font-light leading-relaxed">
              Have an engineering opportunity, innovative product idea, or technical question? I&apos;d love to connect.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Contact Channels (5 columns) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {channels.map((chan, idx) => (
                <motion.a
                  key={chan.name}
                  href={chan.href}
                  target={chan.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={chan.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="bento-card p-5 sm:p-6 flex flex-col justify-between group hover:border-[#791e94]/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#407899]/12">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${chan.bg}`}>
                        {chan.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-display font-semibold text-[#191424] group-hover:text-[#791e94] transition-colors">
                          {chan.name}
                        </h3>
                        <span className="text-[11px] font-mono text-[#4b6272] block truncate max-w-[220px]">
                          {chan.value}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#407899] group-hover:text-[#791e94] group-hover:translate-x-0.5 transition-all">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <p className="font-sans text-xs text-[#4b6272] leading-relaxed font-normal">
                    {chan.description}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Right: Functional Contact Form (7 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-7 bento-card p-7 sm:p-9 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#407899]/15">
                  <h3 className="font-display font-bold text-xl text-[#191424] tracking-tight">
                    Send a Message
                  </h3>
                  <span className="text-[11px] font-mono text-[#4b6272]">
                    Response time: &lt; 24h
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-[#4b6272] font-medium">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Alex Morgan"
                        className="w-full bg-[#fffff2] border border-[#407899]/25 rounded-lg px-3.5 py-2.5 text-sm text-[#191424] placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-[#791e94] focus:ring-1 focus:ring-[#791e94] transition-all font-normal"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-[#4b6272] font-medium">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="alex@company.com"
                        className="w-full bg-[#fffff2] border border-[#407899]/25 rounded-lg px-3.5 py-2.5 text-sm text-[#191424] placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-[#791e94] focus:ring-1 focus:ring-[#791e94] transition-all font-normal"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-[#4b6272] font-medium">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Hi Phani, I'd like to discuss an opportunity..."
                      className="w-full bg-[#fffff2] border border-[#407899]/25 rounded-lg px-3.5 py-2.5 text-sm text-[#191424] placeholder-zinc-400 focus:bg-white focus:outline-none focus:border-[#791e94] focus:ring-1 focus:ring-[#791e94] transition-all resize-none font-normal"
                    />
                  </div>

                  {formState !== "error" ? (
                    <button
                      type="submit"
                      disabled={formState === "loading" || formState === "success"}
                      className="btn-primary w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm font-medium py-3"
                    >
                      {formState === "idle" && (
                        <>Send Message <Send className="w-4 h-4 ml-1" /></>
                      )}
                      {formState === "loading" && (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      )}
                      {formState === "success" && (
                        <>Delivered Successfully <CheckCircle2 className="w-4 h-4 text-[#41d3bd]" /></>
                      )}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setFormState("idle")}
                      className="btn-secondary w-full mt-2 flex items-center justify-center gap-2 text-sm"
                    >
                      <AlertCircle className="w-4 h-4 text-[#de6449]" /> Error occurred · Try Again
                    </button>
                  )}

                  {formState === "success" && (
                    <p className="text-xs text-[#1a8575] text-center mt-2 font-mono">
                      ✓ Your message was delivered straight to my inbox.
                    </p>
                  )}
                  {formState === "error" && (
                    <p className="text-xs text-[#de6449] text-center mt-2 font-mono">
                      ✗ Failed to deliver. Please email directly at {portfolioData.email}
                    </p>
                  )}
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
