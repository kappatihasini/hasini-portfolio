"use client";

import { motion } from "framer-motion";
import { Mail, Zap, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const NAV_LINKS = ["About", "Skills", "Projects", "Achievements", "Education", "Contact"];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-16 overflow-hidden border-t border-white/[0.05]">
      {/* Subtle grid */}
      <div className="absolute inset-0 ai-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-blue-500/40 to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.5)]">
              <Zap size={18} className="text-white" fill="white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Kappati Hasini
            </span>
          </motion.div>

          {/* Nav links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </motion.nav>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: <GithubIcon size={18} />, href: "https://github.com", label: "GitHub" },
            { icon: <LinkedinIcon />, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: <Mail size={18} />, href: "mailto:kappatihasini9000@gmail.com", label: "Email" },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

          {/* Bottom row */}
          <div className="flex items-center justify-between w-full">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-slate-600"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                Kappati Hasini
              </span>
              {" "}—{" "}
              <span className="italic">Building the Future with AI & Innovation.</span>
            </motion.p>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
              className="w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-slate-500 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
