"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-16",
        isCenter && "text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 mb-4",
            isCenter && "justify-center w-full"
          )}
        >
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500" />
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">
            {eyebrow}
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-500" />
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-bold leading-tight",
          "text-slate-100"
        )}
      >
        {title}{" "}
        {titleHighlight && (
          <span
            className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            {titleHighlight}
          </span>
        )}
      </h2>

      {/* Underline accent */}
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full",
          "bg-gradient-to-r from-blue-500 to-purple-500",
          isCenter && "mx-auto"
        )}
      />

      {description && (
        <p
          className={cn(
            "mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl",
            isCenter && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
