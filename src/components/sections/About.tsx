"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Rocket, Target, Sparkles, GraduationCap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

const STATS = [
  { icon: <Code2 size={20} />, value: "2+", label: "Projects Built", color: "text-blue-400", glow: "blue" as const },
  { icon: <Brain size={20} />, value: "5+", label: "AI Skills", color: "text-purple-400", glow: "purple" as const },
  { icon: <Rocket size={20} />, value: "1+", label: "Hackathons", color: "text-cyan-400", glow: "cyan" as const },
  { icon: <Target size={20} />, value: "4+", label: "Certifications", color: "text-pink-400", glow: "blue" as const },
];

const TRAITS = [
  { icon: <Brain size={16} />, label: "AI-First Mindset", desc: "Every problem viewed through the lens of intelligent systems." },
  { icon: <Code2 size={16} />, label: "Daily Builder", desc: "Shipping code, projects and ideas every single day." },
  { icon: <Rocket size={16} />, label: "Innovation Driven", desc: "Hackathons, real-world AI apps and continuous learning." },
  { icon: <Sparkles size={16} />, label: "Growth Oriented", desc: "Actively improving communication, skills and technical depth." },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full orb orb-purple opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full orb orb-blue opacity-20 pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeader
          eyebrow="About Me"
          title="Shaping the Future"
          titleHighlight="with AI"
          description="B.Tech AI student at GNIT and NxtWave CCBP Fellow — building real-world intelligent solutions one project at a time."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Bio */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Education badge */}
              <div className="flex items-center gap-3 mb-6 p-4 rounded-2xl border border-blue-500/20 bg-blue-500/5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                  <GraduationCap size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Guru Nanak Institutions (GNIT)</p>
                  <p className="text-xs text-slate-400">B.Tech in Artificial Intelligence · Currently Pursuing</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-400 text-base leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Kappati Hasini</span> is a <span className="text-blue-300 font-medium">B.Tech Artificial Intelligence student</span> at Guru Nanak Institutions (GNIT) and a fellow at <span className="text-purple-300 font-medium">NxtWave CCBP Academy</span>.
                </p>
                <p>
                  Passionate about <span className="text-cyan-300 font-medium">AI, Full Stack Development</span>, and building innovative projects.
                </p>
                <p>
                  Practicing full stack development daily through projects and assignments while improving <span className="text-blue-300 font-medium">problem-solving</span> and technical skills.
                </p>
              </div>

              {/* Trait pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                {TRAITS.map((t, i) => (
                  <motion.div
                    key={t.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    className="flex items-start gap-3 p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all group"
                  >
                    <span className="text-blue-400 mt-0.5 group-hover:text-blue-300 transition-colors shrink-0">{t.icon}</span>
                    <div>
                      <p className="text-xs font-semibold text-slate-200 mb-0.5">{t.label}</p>
                      <p className="text-[11px] text-slate-500">{t.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Stats */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <GlassCard key={s.label} glowColor={s.glow} delay={i * 0.1} className="p-6 text-center">
                  <span className={`${s.color} flex justify-center mb-3`}>{s.icon}</span>
                  <div className="text-3xl font-extrabold text-white mb-1">{s.value}</div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">{s.label}</div>
                </GlassCard>
              ))}
            </div>

            {/* Journey timeline card */}
            <GlassCard glowColor="purple" className="p-6">
              <h3 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                <Rocket size={14} className="text-purple-400" />
                Learning Journey
              </h3>
              <div className="space-y-3">
                {[
                  { year: "2025", label: "Started B.Tech in Artificial Intelligence at GNIT" },
                  { year: "2025", label: "Joined NxtWave CCBP 4.0 Academy to learn Full Stack Development" },
                  { year: "2025", label: "Started building AI and Full Stack projects" },
                  { year: "Now",  label: "Continuously learning AI, Full Stack Development, and modern technologies" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-[10px] font-bold text-purple-400 w-10 shrink-0">{item.year}</span>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shrink-0 shadow-[0_0_6px_rgba(99,102,241,0.8)]" />
                    <span className="text-sm text-slate-400">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
