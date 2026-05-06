"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  download?: boolean | string;
  target?: string;
}

const variantStyles = {
  primary: `
    bg-gradient-to-r from-blue-600 to-indigo-600
    border border-blue-500/40
    text-white
    shadow-[0_0_20px_rgba(99,102,241,0.3)]
    hover:shadow-[0_0_40px_rgba(99,102,241,0.6),0_0_80px_rgba(99,102,241,0.2)]
    hover:from-blue-500 hover:to-indigo-500
  `,
  secondary: `
    bg-transparent
    border border-blue-400/30
    text-blue-300
    hover:bg-blue-500/10
    hover:border-blue-400/60
    hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
    hover:text-white
  `,
  ghost: `
    bg-transparent
    border border-white/10
    text-slate-400
    hover:bg-white/5
    hover:border-white/20
    hover:text-white
  `,
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm rounded-xl gap-1.5",
  md: "px-6 py-3 text-sm rounded-xl gap-2",
  lg: "px-8 py-4 text-base rounded-2xl gap-2.5",
};

export default function GlowButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
  icon,
  iconPosition = "left",
  disabled = false,
  download,
  target,
}: GlowButtonProps) {
  const base = cn(
    "relative inline-flex items-center justify-center font-semibold tracking-wide",
    "transition-all duration-300 ease-out cursor-pointer select-none",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  const inner = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={base}
        target={target || (href.startsWith("http") ? "_blank" : undefined)}
        rel={target === "_blank" || href.startsWith("http") ? "noopener noreferrer" : undefined}
        download={download}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={base}
      disabled={disabled}
    >
      {inner}
    </motion.button>
  );
}
