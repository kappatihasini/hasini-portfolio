"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, User, MessageSquare, Sparkles, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowButton from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";

const SOCIALS = [
  {
    icon: <LinkedinIcon size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/kappatihasini",
    href: "https://linkedin.com",
    accent: "from-blue-600 to-blue-700",
    border: "border-blue-500/25",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    text: "text-blue-400",
  },
  {
    icon: <GithubIcon size={20} />,
    label: "GitHub",
    value: "github.com/kappatihasini",
    href: "https://github.com",
    accent: "from-slate-600 to-slate-700",
    border: "border-slate-500/25",
    glow: "hover:shadow-[0_0_30px_rgba(148,163,184,0.2)]",
    text: "text-slate-300",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "kappatihasini9000@gmail.com",
    href: "mailto:kappatihasini9000@gmail.com",
    accent: "from-purple-600 to-indigo-700",
    border: "border-purple-500/25",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
    text: "text-purple-400",
  },
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  const inputClass = (field: string) =>
    cn(
      "w-full px-4 py-3.5 rounded-xl bg-slate-900/60 backdrop-blur-sm text-sm text-white placeholder-slate-600",
      "border transition-all duration-300 outline-none",
      focused === field
        ? "border-blue-500/60 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
        : "border-white/[0.07] hover:border-white/15"
    );

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full orb orb-blue opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full orb orb-purple opacity-20 pointer-events-none" />
      <div className="absolute inset-0 ai-grid opacity-20 pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Build"
          titleHighlight="Something Amazing"
          description="Open to opportunities, collaborations, and interesting AI projects. Let's connect!"
        />

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left — Social cards */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">Connect With Me</p>

            {SOCIALS.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: 6 }}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 group",
                  "bg-slate-900/40 backdrop-blur-xl",
                  s.border,
                  s.glow
                )}
              >
                <div className={cn("w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shrink-0 shadow-lg", s.accent)}>
                  {s.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{s.label}</p>
                  <p className={cn("text-sm font-medium truncate mt-0.5 transition-colors group-hover:text-white", s.text)}>
                    {s.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-emerald-400" />
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Status</span>
              </div>
              <p className="text-sm text-slate-300 font-medium">
                ✅ Open to internships, projects & collaborations
              </p>
              <p className="text-xs text-slate-500 mt-1">Response time: within 24 hours</p>
            </motion.div>
          </div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="relative p-7 rounded-2xl border border-white/[0.08] bg-slate-900/50 backdrop-blur-xl overflow-hidden">
              {/* Gradient top line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

              {/* Inner highlight */}
              <div className="absolute inset-px rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4"
                >
                  <CheckCircle size={48} className="text-emerald-400" />
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="text-slate-400 text-center text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600" />
                      <input
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        className={cn(inputClass("name"), "pl-10")}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600" />
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        className={cn(inputClass("email"), "pl-10")}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare size={16} className="absolute left-3.5 top-3.5 text-slate-600" />
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell me about the opportunity or project..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        className={cn(inputClass("message"), "pl-10 resize-none")}
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <GlowButton
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    icon={status === "sending" ? undefined : <Send size={16} />}
                    iconPosition="right"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </GlowButton>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
