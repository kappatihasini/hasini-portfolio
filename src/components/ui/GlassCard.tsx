"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "cyan" | "none";
  hover?: boolean;
  delay?: number;
}

const glowMap = {
  blue: "hover:shadow-[0_0_30px_rgba(59,130,246,0.3),0_0_60px_rgba(59,130,246,0.1)] hover:border-blue-500/40",
  purple: "hover:shadow-[0_0_30px_rgba(139,92,246,0.3),0_0_60px_rgba(139,92,246,0.1)] hover:border-purple-500/40",
  cyan: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3),0_0_60px_rgba(6,182,212,0.1)] hover:border-cyan-500/40",
  none: "",
};

export default function GlassCard({
  children,
  className,
  glowColor = "blue",
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(
        "relative rounded-2xl border border-white/[0.08] transition-all duration-500",
        "bg-slate-900/50 backdrop-blur-xl",
        hover && glowMap[glowColor],
        hover && "hover:-translate-y-1",
        className
      )}
    >
      {/* Inner highlight edge */}
      <div className="absolute inset-px rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
}
