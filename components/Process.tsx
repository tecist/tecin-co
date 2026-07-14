"use client";

import { motion } from "framer-motion";
import { PhoneCall, FileText, Terminal, CheckCircle2, type LucideIcon } from "lucide-react";
import { process } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  PhoneCall,
  FileText,
  Terminal,
  CheckCircle2,
};

export function Process() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How We'll Work Together"
          title="A Simple, Transparent Process"
          light
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl border border-white/10 bg-navy-900/60 backdrop-blur-xl p-6"
              >
                <span className="font-mono text-3xl font-semibold text-white/10">
                  {item.step}
                </span>
                <div className="mt-2 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
