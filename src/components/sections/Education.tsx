"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Star, Cpu, Code2, Brain } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const COURSES = [
  { icon: <Brain size={14} />, name: "Artificial Intelligence" },
  { icon: <Cpu size={14} />, name: "Machine Learning Fundamentals" },
  { icon: <Code2 size={14} />, name: "Data Structures & Algorithms" },
  { icon: <BookOpen size={14} />, name: "Full Stack Web Development" },
  { icon: <Brain size={14} />, name: "Python for AI" },
  { icon: <Star size={14} />, name: "Cloud Computing Basics" },
];

const JOURNEY_ITEMS = [
  {
    phase: "Year 1",
    title: "Foundation",
    desc: "Programming fundamentals, C, Java, mathematics for AI",
    color: "from-blue-500 to-cyan-500",
    border: "border-blue-500/25",
  },
  {
    phase: "Year 2",
    title: "Core AI & Web",
    desc: "Machine Learning, Full Stack Development, CCBP Academy",
    color: "from-purple-500 to-violet-500",
    border: "border-purple-500/25",
  },
  {
    phase: "Year 3",
    title: "Applied Projects",
    desc: "Real-world AI apps, hackathons, internship experience",
    color: "from-pink-500 to-rose-500",
    border: "border-pink-500/25",
  },
  {
    phase: "Year 4",
    title: "Industry Ready",
    desc: "Advanced AI systems, deployment, career preparation",
    color: "from-amber-500 to-orange-500",
    border: "border-amber-500/25",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-28 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full orb orb-purple opacity-15 pointer-events-none" />
      <div className="absolute inset-0 ai-grid opacity-15 pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeader
          eyebrow="Education"
          title="Academic"
          titleHighlight="Journey"
          description="Building a strong foundation in AI and computer science to engineer the future."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — Institution card */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-7 rounded-2xl border border-blue-500/20 bg-slate-900/50 backdrop-blur-xl overflow-hidden group
                hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-500"
            >
              {/* Gradient line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

              {/* Inner highlight */}
              <div className="absolute inset-px rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shrink-0 shadow-[0_0_25px_rgba(99,102,241,0.5)]">
                  <GraduationCap size={26} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">B.Tech in Artificial Intelligence</h3>
                  <p className="text-blue-400 font-semibold text-sm mt-0.5">Guru Nanak Institutions (GNIT)</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      Currently Pursuing
                    </span>
                    <span className="text-[10px] text-slate-500">Hyderabad, India</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Pursuing B.Tech in Artificial Intelligence with a strong focus on AI, Machine Learning, Software Development,
                and modern web technologies — blending theoretical depth with practical project experience.
              </p>

              {/* Key subjects */}
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Key Subjects</p>
                <div className="flex flex-wrap gap-2">
                  {COURSES.map((c) => (
                    <span
                      key={c.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                        bg-white/[0.04] border border-white/[0.07] text-slate-300 hover:text-white hover:bg-white/[0.07] transition-all"
                    >
                      <span className="text-blue-400">{c.icon}</span>
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* NxtWave card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 p-5 rounded-2xl border border-purple-500/20 bg-slate-900/40 backdrop-blur-xl
                hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                  <Code2 size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">NxtWave CCBP Academy</h4>
                  <p className="text-xs text-purple-400">Full Stack Development Fellow</p>
                </div>
                <span className="ml-auto text-[10px] font-bold px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  Active
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Intensive daily practice in full-stack development — HTML, CSS, JavaScript, React, Node.js through structured assignments and real-world projects.
              </p>
            </motion.div>
          </div>

          {/* Right — Academic roadmap */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">Academic Roadmap</p>
              <div className="space-y-4">
                {JOURNEY_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.phase}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={cn(
                      "flex gap-4 p-4 rounded-xl border transition-all duration-300 group",
                      "bg-slate-900/30 hover:bg-slate-900/50",
                      item.border
                    )}
                  >
                    <div className={cn("w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center shrink-0 text-[10px] font-black text-white", item.color)}>
                      {i + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.phase}</span>
                        <span className={cn("text-xs font-bold bg-gradient-to-r bg-clip-text text-transparent", item.color)}>{item.title}</span>
                      </div>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
