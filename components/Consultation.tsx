"use client";

import { motion } from "framer-motion";
import { CalendarCheck, ArrowRight } from "lucide-react";

export function Consultation() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-azure-700 via-azure-600 to-cyan-600" />
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="container-px relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
            <CalendarCheck className="h-6 w-6 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Got an IT Problem You Need Solved?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-azure-50/90">
            Let's talk about it — free 20-minute call, no pressure, no sales pitch.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              data-calendly-placeholder="https://calendly.com/rehan-ali-it/free-call"
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-azure-700 shadow-xl transition-transform hover:scale-[1.02]"
            >
              Book a Free Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          <p className="mt-4 text-xs text-azure-100/70">
            I typically reply within 24 hours, often much sooner.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
