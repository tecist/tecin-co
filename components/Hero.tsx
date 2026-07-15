"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, MessageCircle } from "lucide-react";
import { heroStats, heroTech, site } from "@/lib/data";
import { AnimatedCounter } from "./AnimatedCounter";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-950 pt-32 pb-24 sm:pt-40 sm:pb-28"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-azure-600/10 blur-3xl" />

      <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-cyan-400"
          >
            <span className="status-dot" />
            {site.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.2rem]"
          >
            Hi, I'm {site.name.split(" ")[0]} — a freelance{" "}
            <span className="text-gradient">IT Infrastructure Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-navy-300 sm:text-lg"
          >
            {site.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 flex items-center gap-2 text-sm text-navy-400"
          >
            <MapPin className="h-4 w-4 text-cyan-400" />
            Based in {site.location} · Working with clients worldwide
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-azure-600 to-cyan-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-azure-600/25 transition-transform hover:scale-[1.02]"
            >
              Book a Free Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Message on WhatsApp
            </a>
            <a
              href="/Rehan-Ali-CV.pdf"
              download
              className="focus-ring inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-navy-300 hover:text-white transition-colors"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <p className="eyebrow mb-4 text-navy-500">Tools I work with daily</p>
            <div className="flex flex-wrap gap-2">
              {heroTech.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono text-navy-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto lg:mx-0"
        >
          <div className="relative flex h-56 w-56 items-center justify-center rounded-[2rem] border border-white/10 bg-navy-900/60 backdrop-blur-xl sm:h-64 sm:w-64">
            
           <img
          src="/Reh.png"
          alt={site.name}
          className="h-full w-full object-cover"
        />
            
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-navy-900 px-3 py-1 text-[11px] font-mono text-signal-green whitespace-nowrap">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-signal-green align-middle" />
              Online now
            </span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-navy-900/60 backdrop-blur-xl p-5">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-semibold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-xs leading-snug text-navy-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-gradient-to-br from-azure-600/30 to-cyan-500/30 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
