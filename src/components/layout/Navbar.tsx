"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home",         href: "#hero" },
  { label: "About",        href: "#about" },
  { label: "Skills",       href: "#skills" },
  { label: "Projects",     href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education",    href: "#education" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("hero");
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection observer to highlight active section
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled
            ? "py-3 bg-slate-950/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.8)] transition-shadow">
              <Zap size={16} className="text-white" fill="white" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              KH
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-white/[0.07] border border-white/[0.1]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA & Mobile menu toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl
                bg-gradient-to-r from-blue-600 to-indigo-600 text-white
                shadow-[0_0_15px_rgba(99,102,241,0.3)]
                hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]
                hover:from-blue-500 hover:to-indigo-500
                transition-all duration-300"
            >
              Hire Me
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-30 md:hidden mx-4 mt-2 rounded-2xl
              bg-slate-900/95 backdrop-blur-2xl border border-white/10
              shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >
            <nav className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all",
                    active === link.href.slice(1)
                      ? "bg-blue-500/15 text-blue-300 border border-blue-500/20"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-2 pt-2 border-t border-white/[0.06]">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold
                    shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all"
                >
                  Hire Me
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
