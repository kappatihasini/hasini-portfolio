"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Mail, ArrowRight, Download,
  Sparkles, Code2, Brain, Cpu
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import ParticlesBackground from "@/components/effects/ParticlesBackground";
import GlowButton from "@/components/ui/GlowButton";

/* ───────────────────────────────────────────────────────── */
/*  Typing effect hook                                        */
/* ───────────────────────────────────────────────────────── */
const ROLES = [
  "AI Developer",
  "Full Stack Learner",
  "Hackathon Builder",
  "Future Software Engineer",
  "Problem Solver",
];

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 45, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, wordIdx, isDeleting, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

/* ───────────────────────────────────────────────────────── */
/*  AI Grid background overlay                               */
/* ───────────────────────────────────────────────────────── */
function AIGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base grid */}
      <div className="absolute inset-0 ai-grid opacity-60" />

      {/* Radial fade mask */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #030712 100%)",
        }}
      />

      {/* Glowing horizontal scan line */}
      <motion.div
        animate={{ y: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(139,92,246,0.4), transparent)",
          boxShadow: "0 0 20px rgba(59,130,246,0.3)",
        }}
      />
    </div>
  );
}

/* ───────────────────────────────────────────────────────── */
/*  Floating Orbs                                            */
/* ───────────────────────────────────────────────────────── */
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large blue orb — top-left */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full orb orb-blue"
      />
      {/* Purple orb — top-right */}
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full orb orb-purple"
      />
      {/* Cyan orb — bottom-center */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full orb orb-cyan"
      />
    </div>
  );
}

/* ───────────────────────────────────────────────────────── */
/*  3-D tilt Profile Card                                    */
/* ───────────────────────────────────────────────────────── */
function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const stats = [
    { icon: <Code2 size={14} />, label: "Projects", value: "2+" },
    { icon: <Brain size={14} />, label: "AI Skills", value: "5+" },
    { icon: <Cpu size={14} />, label: "Hackathons", value: "1+" },
    { icon: <Sparkles size={14} />, label: "Certs", value: "4+" },
  ];

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.85, x: 60 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[340px] mx-auto lg:mx-0"
    >
      {/* Outer glow ring */}
      <div
        className="absolute -inset-3 rounded-3xl opacity-60"
        style={{
          background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)",
          filter: "blur(20px)",
          animation: "rotateHalo 6s linear infinite",
        }}
      />

      {/* Card body */}
      <div
        className="relative rounded-2xl border border-white/10 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,27,75,0.95))",
          backdropFilter: "blur(24px)",
          boxShadow: "0 25px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Top gradient band */}
        <div
          className="h-24 w-full relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3), rgba(6,182,212,0.2))",
          }}
        >
          {/* Grid on the band */}
          <div className="absolute inset-0 ai-grid opacity-50" />
          {/* Sparkle decorations */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
              transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.5 }}
              className="absolute w-1 h-1 rounded-full bg-white/80"
              style={{
                top: `${20 + Math.sin(i * 1.2) * 30}%`,
                left: `${15 + i * 14}%`,
              }}
            />
          ))}
        </div>

        {/* Avatar */}
        <div className="relative flex justify-center -mt-12">
          <div className="relative">
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping scale-125" />
            <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping scale-110" style={{ animationDelay: "0.5s" }} />

            {/* Avatar circle */}
            <div
              className="relative w-24 h-24 rounded-full flex items-center justify-center
                border-2 border-white/20 shadow-[0_0_30px_rgba(99,102,241,0.6)]"
              style={{
                background: "linear-gradient(135deg, #1e1b4b, #312e81, #1e3a5f)",
              }}
            >
              <span className="text-3xl font-bold bg-gradient-to-br from-blue-300 to-purple-300 bg-clip-text text-transparent">
                KH
              </span>
            </div>

            {/* Online status dot */}
            <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-900
              shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          </div>
        </div>

        {/* Name & role */}
        <div className="px-5 pt-3 pb-2 text-center">
          <h3 className="text-lg font-bold text-white">Kappati Hasini</h3>
          <p className="text-xs text-slate-400 mt-0.5">B.Tech AI Student · GNIT</p>
          <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium
            bg-blue-500/10 border border-blue-500/20 text-blue-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Available for Opportunities
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-4 gap-px mx-4 mb-4 mt-2 rounded-xl overflow-hidden border border-white/[0.06]">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center py-3 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
              <span className="text-blue-400 mb-1">{s.icon}</span>
              <span className="text-sm font-bold text-white">{s.value}</span>
              <span className="text-[9px] text-slate-500">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-1.5 px-4 pb-5">
          {["Python", "React", "Node.js", "AI/ML", "JS"].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-[10px] font-semibold tracking-wide
                bg-slate-800/80 border border-white/[0.07] text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ───────────────────────────────────────────────────────── */
/*  HERO SECTION                                             */
/* ───────────────────────────────────────────────────────── */
export default function Hero() {
  const typedRole = useTypingEffect(ROLES);

  const socialLinks = [
    {
      icon: <GithubIcon size={20} />,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:border-slate-400/60 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    },
    {
      icon: <LinkedinIcon />,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:border-blue-400/60 hover:text-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:kappatihasini9000@gmail.com",
      label: "Email",
      color: "hover:border-purple-400/60 hover:text-purple-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10"
    >
      {/* Background layers */}
      <FloatingOrbs />
      <AIGrid />
      <ParticlesBackground />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #030712)" }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* ── Left: Text ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full
                bg-blue-500/10 border border-blue-500/20
                text-blue-300 text-xs font-semibold tracking-widest uppercase"
            >
              <Sparkles size={12} className="animate-pulse" />
              AI & Full Stack Developer
              <Sparkles size={12} className="animate-pulse" />
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-2"
            >
              <span className="gradient-text-hero">
                Kappati
              </span>
              <br />
              <span className="gradient-text-hero">
                Hasini
              </span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 mt-4 mb-6 justify-center lg:justify-start"
            >
              <span className="text-slate-500 text-lg sm:text-xl font-light">I am a</span>
              <span
                className="text-lg sm:text-xl font-bold text-cyan-400 min-w-[220px] text-left"
                style={{ textShadow: "0 0 20px rgba(6,182,212,0.6)" }}
              >
                {typedRole}
                <span
                  className="inline-block w-0.5 h-5 ml-0.5 align-middle bg-cyan-400 rounded"
                  style={{ animation: "typewriterBlink 1s step-end infinite" }}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0"
            >
              Building{" "}
              <span className="text-blue-300 font-medium">intelligent digital experiences</span>{" "}
              through AI, full stack development, and{" "}
              <span className="text-purple-300 font-medium">innovation-driven projects</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-10"
            >
              <GlowButton
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                View Projects
              </GlowButton>

              <GlowButton
                href="#contact"
                variant="secondary"
                size="lg"
                icon={<Mail size={18} />}
                iconPosition="left"
              >
                Contact Me
              </GlowButton>

              <GlowButton
                href="/Hasini_Kappati_Updated_Resume.pdf"
                variant="ghost"
                size="lg"
                icon={<Download size={16} />}
                iconPosition="left"
                target="_blank"
              >
                Resume
              </GlowButton>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-xs text-slate-600 uppercase tracking-widest font-medium">Find me on</span>
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-slate-700 to-transparent" />
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center
                      border border-white/10 text-slate-500
                      bg-white/[0.03] backdrop-blur-sm
                      transition-all duration-300 ${s.color}`}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Profile Card ── */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <ProfileCard />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-9 rounded-full border border-white/10 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-blue-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
