"use client";

import { motion } from "framer-motion";
import { ExternalLink, Shield, MessageCircle, Zap, Database, Globe, Brain } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowButton from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  stack: { name: string; icon: React.ReactNode }[];
  accent: { from: string; to: string; border: string; glow: string; text: string };
  icon: React.ReactNode;
  badge: string;
  demoUrl: string;
  repoUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: "deepfake-detector",
    title: "Deepfake Detector Pro",
    subtitle: "AI-Based Media Verification System",
    description:
      "AI-powered deepfake detection web app.",
    features: [
      "Real-time deepfake detection engine",
      "Multi-modal: images, video & audio",
      "Confidence score analysis",
      "Fast & responsive cybersecurity UI",
      "Drag-and-drop upload interface",
    ],
    stack: [
      { name: "HTML", icon: <Globe size={12} /> },
      { name: "CSS", icon: <Zap size={12} /> },
      { name: "JavaScript", icon: <Zap size={12} /> },
      { name: "GitHub", icon: <GithubIcon size={12} /> },
      { name: "Vercel", icon: <Globe size={12} /> },
    ],
    accent: {
      from: "from-blue-600",
      to: "to-cyan-600",
      border: "border-blue-500/25",
      glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]",
      text: "text-blue-400",
    },
    icon: <Shield size={22} />,
    badge: "AI · Security",
    demoUrl: "#",
    repoUrl: "https://github.com",
  },
  {
    id: "ai-support-agent",
    title: "AI Customer Support Agent",
    subtitle: "Memory-Powered Conversational AI",
    description:
      "AI chatbot with memory system.",
    features: [
      "Memory-based conversation handling",
      "Personalised AI responses",
      "Real-time WebSocket chat UI",
      "Full-stack React + Node architecture",
      "Context-aware intent detection",
    ],
    stack: [
      { name: "React", icon: <Zap size={12} /> },
      { name: "Node.js", icon: <Database size={12} /> },
      { name: "AI APIs", icon: <Brain size={12} /> },
      { name: "Memory System", icon: <Database size={12} /> },
    ],
    accent: {
      from: "from-purple-600",
      to: "to-pink-600",
      border: "border-purple-500/25",
      glow: "hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]",
      text: "text-purple-400",
    },
    icon: <MessageCircle size={22} />,
    badge: "Hackathon · AI",
    demoUrl: "#",
    repoUrl: "https://github.com",
  },
];

/* Animated feature list item */
function FeatureItem({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.35 }}
      className="flex items-start gap-2 text-sm text-slate-400"
    >
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shrink-0" />
      {text}
    </motion.li>
  );
}

/* Animated mockup for project card */
function ProjectMockup({ project }: { project: Project }) {
  if (project.id === "deepfake-detector") {
    return (
      <div className="relative w-full h-48 rounded-xl overflow-hidden border border-white/[0.06] bg-slate-950/80">
        {/* Grid */}
        <div className="absolute inset-0 ai-grid opacity-40" />
        {/* Scan animation */}
        <motion.div
          animate={{ y: ["-100%", "400%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-80"
        />
        {/* Center UI */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <Shield size={24} className="text-blue-400" />
          </div>
          <div className="text-center">
            <p className="text-xs font-bold text-blue-300">ANALYSIS IN PROGRESS</p>
            <div className="mt-1.5 flex gap-1 justify-center">
              {[40, 65, 55, 80, 45, 70, 60].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ scaleY: [1, 1.5 + Math.random(), 1] }}
                  transition={{ duration: 0.8 + i * 0.1, repeat: Infinity }}
                  className="w-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-full"
                  style={{ height: h * 0.3 + "px", originY: 1 }}
                />
              ))}
            </div>
          </div>
          {/* Confidence meter */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-bold text-emerald-400">Confidence: 94.2%</span>
          </div>
        </div>
      </div>
    );
  }

  // AI Support Agent mockup
  return (
    <div className="relative w-full h-48 rounded-xl overflow-hidden border border-white/[0.06] bg-slate-950/80 p-3">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
          <Brain size={12} className="text-white" />
        </div>
        <span className="text-[10px] font-bold text-purple-300">AI Support Agent</span>
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      </div>
      <div className="space-y-2">
        {/* Chat bubbles */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-2"
        >
          <div className="max-w-[75%] px-2.5 py-1.5 rounded-xl rounded-tl-none bg-slate-800/80 border border-white/[0.06]">
            <p className="text-[10px] text-slate-300">Hi! How can I help you today?</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-end"
        >
          <div className="max-w-[75%] px-2.5 py-1.5 rounded-xl rounded-tr-none bg-purple-600/30 border border-purple-500/20">
            <p className="text-[10px] text-purple-200">I need help with my order #1234</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="flex gap-2"
        >
          <div className="max-w-[80%] px-2.5 py-1.5 rounded-xl rounded-tl-none bg-slate-800/80 border border-white/[0.06]">
            <p className="text-[10px] text-slate-300">I remember you placed order #1234 last week — let me pull up the details...</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative rounded-2xl border p-6 transition-all duration-500 group",
        "bg-slate-900/40 backdrop-blur-xl",
        project.accent.border,
        project.accent.glow,
        "hover:-translate-y-2"
      )}
    >
      {/* Top gradient line */}
      <div className={cn("absolute top-0 left-8 right-8 h-px rounded-full bg-gradient-to-r opacity-70", project.accent.from, project.accent.to)} />

      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className={cn("w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shrink-0 shadow-lg", project.accent.from, project.accent.to)}>
            {project.icon}
          </div>
          <div>
            <h3 className="font-bold text-white leading-tight text-base">{project.title}</h3>
            <p className={cn("text-xs mt-0.5", project.accent.text)}>{project.subtitle}</p>
          </div>
        </div>
        <span className={cn("shrink-0 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border", project.accent.text, project.accent.border, "bg-white/[0.03]")}>
          {project.badge}
        </span>
      </div>

      {/* Mockup visual */}
      <div className="mb-4">
        <ProjectMockup project={project} />
      </div>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>

      {/* Features */}
      <ul className="space-y-1.5 mb-5">
        {project.features.map((f, i) => (
          <FeatureItem key={f} text={f} delay={index * 0.1 + i * 0.05} />
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.stack.map((t) => (
          <span
            key={t.name}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium
              bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:text-white hover:border-white/15 transition-all"
          >
            {t.icon}
            {t.name}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <GlowButton href={project.demoUrl} variant="primary" size="sm" icon={<ExternalLink size={14} />} iconPosition="right" className="flex-1">
          Live Demo
        </GlowButton>
        <GlowButton href={project.repoUrl} variant="secondary" size="sm" icon={<GithubIcon size={14} />} iconPosition="left" className="flex-1">
          GitHub
        </GlowButton>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full orb orb-purple opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full orb orb-cyan opacity-15 pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeader
          eyebrow="Featured Work"
          title="Projects &"
          titleHighlight="Builds"
          description="Real-world AI and full-stack projects built with passion, precision, and a bias for action."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
