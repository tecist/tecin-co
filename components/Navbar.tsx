"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "glass border-b border-navy-200/60 dark:border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container-px mx-auto flex max-w-7xl items-center justify-between">
        <a href="#home" className="focus-ring flex items-center gap-2.5 rounded-md">
          
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full">
           <img src="/logo1.png" alt={site.name} className="h-full w-full object-cover" />
          </span>

          <span
            className={cn(
              "font-display text-sm font-semibold tracking-tight transition-colors",
              scrolled ? "text-navy-900 dark:text-white" : "text-white"
            )}
          >
            {site.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "focus-ring rounded-md px-3 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "text-navy-600 dark:text-navy-300 hover:text-azure-600 dark:hover:text-cyan-400"
                  : "text-white/80 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle light={!scrolled} />
          <a
            href="#contact"
            className="focus-ring inline-flex items-center rounded-full bg-azure-600 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-azure-600/30 hover:bg-azure-700 transition-colors"
          >
            Let's Talk
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle light={!scrolled} />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
              scrolled
                ? "border-navy-200 dark:border-white/10 text-navy-700 dark:text-navy-200"
                : "border-white/20 text-white"
            )}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden glass border-t border-navy-200/60 dark:border-white/10 mt-4 rounded-b-2xl"
          >
            <div className="container-px mx-auto flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-md px-3 py-2.5 text-sm font-medium text-navy-700 dark:text-navy-200 hover:bg-navy-100 dark:hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="focus-ring mt-2 inline-flex items-center justify-center rounded-full bg-azure-600 px-4 py-2.5 text-sm font-medium text-white"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
