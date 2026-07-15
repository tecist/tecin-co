"use client";

import { motion } from "framer-motion";
import {
  Headset,
  Mail,
  Cloud,
  Server,
  Layers,
  ShieldCheck,
  Check,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  Headset,
  Mail,
  Cloud,
  Server,
  Layers,
  ShieldCheck,
};

export function Services() {
  return (
    <section id="services" className="relative bg-white dark:bg-navy-950 py-16 sm:py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="How I Can Help Your Business"
          description="Hire me for a single fix, a defined project, or ongoing support — whatever your infrastructure needs right now."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative rounded-2xl border border-navy-200 dark:border-white/10 bg-navy-50/50 dark:bg-white/[0.03] p-7 transition-colors hover:border-azure-300 dark:hover:border-cyan-400/30 hover:bg-white dark:hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-azure-600 to-cyan-500 text-white shadow-md shadow-azure-600/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] text-azure-600 dark:text-cyan-400">
                    {service.startingAt}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-300">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-navy-600 dark:text-navy-400"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-azure-500 dark:text-cyan-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
