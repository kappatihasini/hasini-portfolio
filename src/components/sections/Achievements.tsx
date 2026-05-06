"use client";

import { motion } from "framer-motion";
import { Trophy, Brain, Award, BookOpen, Rocket } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  type: "hackathon" | "internship" | "course" | "certification";
  accent: string;
  border: string;
  glow: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    icon: <Rocket size={20} />,
    title: "IGNITE AI & ML Hackathon",
    subtitle: "24-Hour Innovation Challenge",
    description:
      "Participated in an intense 24-hour IGNITE Hackathon focused on Artificial Intelligence and Machine Learning, building an AI customer support agent with memory capabilities under real competition pressure.",
    date: "2025",
    type: "hackathon",
    accent: "from-orange-500 to-amber-500",
    border: "border-orange-500/25",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.15)]",
  },
  {
    icon: <Brain size={20} />,
    title: "AI Internship",
    subtitle: "Artificial Intelligence Program",
    description:
      "Successfully completed an Artificial Intelligence internship, gaining hands-on experience with AI tools, workflows, and real-world application development in an industry context.",
    date: "2024",
    type: "internship",
    accent: "from-blue-500 to-cyan-500",
    border: "border-blue-500/25",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.15)]",
  },
  {
    icon: <BookOpen size={20} />,
    title: "Artificial Intelligence Course",
    subtitle: "Comprehensive AI Certification",
    description:
      "Completed an in-depth Artificial Intelligence course covering machine learning foundations, neural networks, AI ethics, and practical AI project development with hands-on assignments.",
    date: "2024",
    type: "course",
    accent: "from-purple-500 to-violet-500",
    border: "border-purple-500/25",
    glow: "shadow-[0_0_30px_rgba(139,92,246,0.15)]",
  },
  {
    icon: <Award size={20} />,
    title: "Programming Certification",
    subtitle: "NxtWave CCBP Academy",
    description:
      "Earned a programming certification through NxtWave's CCBP Academy, demonstrating proficiency in full-stack development concepts, programming fundamentals, and modern web technologies.",
    date: "2024",
    type: "certification",
    accent: "from-emerald-500 to-teal-500",
    border: "border-emerald-500/25",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
];

const TYPE_LABELS = {
  hackathon: { label: "Hackathon", color: "text-orange-400 bg-orange-500/10 border-orange-500/20" },
  internship: { label: "Internship", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  course: { label: "Course", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
  certification: { label: "Certification", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
};

function AchievementCard({ item, index }: { item: Achievement; index: number }) {
  const typeInfo = TYPE_LABELS[item.type];
  const isLeft = index % 2 === 0;

  return (
    <div className={cn("relative flex items-start gap-6", !isLeft && "flex-row-reverse")}>
      {/* Timeline connector */}
      <div className="hidden md:flex flex-col items-center gap-0 shrink-0" style={{ width: 40 }}>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12, type: "spring", stiffness: 300 }}
          className={cn(
            "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shrink-0 z-10",
            `shadow-[0_0_20px_rgba(99,102,241,0.4)]`,
            item.accent
          )}
        >
          {item.icon}
        </motion.div>
        {index < ACHIEVEMENTS.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent mt-2" style={{ minHeight: 40 }} />
        )}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex-1 p-5 rounded-2xl border transition-all duration-500 group cursor-default",
          "bg-slate-900/40 backdrop-blur-xl hover:bg-slate-900/60 hover:-translate-y-1",
          item.border,
          item.glow
        )}
      >
        {/* Mobile icon */}
        <div className={cn("md:hidden w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center text-white mb-3", item.accent)}>
          {item.icon}
        </div>

        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-bold text-white text-base leading-snug">{item.title}</h3>
            <p className={cn("text-xs mt-0.5 font-medium", `bg-gradient-to-r ${item.accent} bg-clip-text text-transparent`)}>{item.subtitle}</p>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <span className={cn("text-[10px] font-bold px-2.5 py-1 rounded-full border", typeInfo.color)}>
              {typeInfo.label}
            </span>
            <span className="text-[10px] text-slate-600 font-mono">{item.date}</span>
          </div>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>

        {/* Trophy dot */}
        <div className="mt-4 flex items-center gap-2">
          <Trophy size={12} className="text-amber-400" />
          <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full orb orb-blue opacity-10 pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeader
          eyebrow="Milestones"
          title="Achievements &"
          titleHighlight="Highlights"
          description="Milestones that shaped my growth as an AI engineer and full-stack developer."
        />

        <div className="max-w-3xl mx-auto space-y-8">
          {ACHIEVEMENTS.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
