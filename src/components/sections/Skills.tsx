"use client";

import { motion } from "framer-motion";
import {
  Code2, Palette, Server, Terminal, Brain,
  Wrench, Users, Globe, Database, GitBranch,
  Cpu, Lightbulb, MessageSquare, Layers, Zap
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number; // 1–100
  color: string;
  glow: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  accent: string;
  borderColor: string;
  skills: Skill[];
}

const CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Palette size={16} />,
    accent: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/20",
    skills: [
      { name: "HTML", icon: <Globe size={14} />, level: 85, color: "text-orange-400", glow: "rgba(251,146,60,0.4)" },
      { name: "CSS", icon: <Palette size={14} />, level: 80, color: "text-blue-400", glow: "rgba(96,165,250,0.4)" },
    ],
  },
  {
    title: "Programming",
    icon: <Terminal size={16} />,
    accent: "from-cyan-500 to-teal-500",
    borderColor: "border-cyan-500/20",
    skills: [
      { name: "Python", icon: <Terminal size={14} />, level: 80, color: "text-yellow-300", glow: "rgba(253,224,71,0.4)" },
      { name: "C", icon: <Code2 size={14} />, level: 65, color: "text-blue-300", glow: "rgba(147,197,253,0.4)" },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain size={16} />,
    accent: "from-pink-500 to-rose-500",
    borderColor: "border-pink-500/20",
    skills: [
      { name: "Artificial Intelligence", icon: <Brain size={14} />, level: 70, color: "text-pink-400", glow: "rgba(244,114,182,0.4)" },
      { name: "ML Basics", icon: <Cpu size={14} />, level: 60, color: "text-purple-400", glow: "rgba(192,132,252,0.4)" },
      { name: "Prompt Engineering", icon: <Lightbulb size={14} />, level: 75, color: "text-amber-400", glow: "rgba(251,191,36,0.4)" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench size={16} />,
    accent: "from-violet-500 to-indigo-500",
    borderColor: "border-violet-500/20",
    skills: [
      { name: "GitHub", icon: <GitBranch size={14} />, level: 80, color: "text-slate-300", glow: "rgba(203,213,225,0.4)" },
      { name: "Vercel", icon: <Zap size={14} />, level: 70, color: "text-slate-200", glow: "rgba(226,232,240,0.4)" },
    ],
  },
  {
    title: "Soft Skills",
    icon: <Users size={16} />,
    accent: "from-emerald-500 to-green-500",
    borderColor: "border-emerald-500/20",
    skills: [
      { name: "Problem Solving", icon: <Lightbulb size={14} />, level: 90, color: "text-emerald-400", glow: "rgba(52,211,153,0.4)" },
      { name: "Critical Thinking", icon: <Brain size={14} />, level: 85, color: "text-teal-400", glow: "rgba(45,212,191,0.4)" },
      { name: "Communication", icon: <MessageSquare size={14} />, level: 80, color: "text-blue-400", glow: "rgba(96,165,250,0.4)" },
      { name: "Teamwork", icon: <Users size={14} />, level: 85, color: "text-purple-400", glow: "rgba(192,132,252,0.4)" },
    ],
  },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className={cn("transition-all duration-300 group-hover:scale-125", skill.color)}>
            {skill.icon}
          </span>
          <span className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-xs text-slate-600 font-mono">{skill.level}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${skill.glow.replace("0.4", "1")}, ${skill.glow.replace("0.4", "0.6")})`,
            boxShadow: `0 0 8px ${skill.glow}`,
          }}
        >
          {/* Shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function CategoryCard({ cat, index }: { cat: SkillCategory; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative p-5 rounded-2xl border transition-all duration-500 group",
        "bg-slate-900/40 backdrop-blur-xl",
        cat.borderColor,
        "hover:bg-slate-900/60 hover:-translate-y-1"
      )}
    >
      {/* Top gradient bar */}
      <div className={cn("absolute top-0 left-6 right-6 h-px rounded-full bg-gradient-to-r", cat.accent, "opacity-60")} />

      {/* Header */}
      <div className="flex items-center gap-2.5 mb-5">
        <div className={cn("w-7 h-7 rounded-lg bg-gradient-to-br flex items-center justify-center text-white shadow-lg", cat.accent)}>
          {cat.icon}
        </div>
        <h3 className="text-sm font-bold text-slate-200">{cat.title}</h3>
      </div>

      {/* Skills */}
      <div className="space-y-3.5">
        {cat.skills.map((skill, i) => (
          <SkillBar key={skill.name} skill={skill} delay={index * 0.08 + i * 0.06} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 ai-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full orb orb-blue opacity-10 pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeader
          eyebrow="Technical Arsenal"
          title="Skills &"
          titleHighlight="Expertise"
          description="A curated stack of technologies I use daily to build intelligent, full-stack digital products."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
