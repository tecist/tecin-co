"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section id="reviews" className="relative bg-navy-50/60 dark:bg-white/[0.02] py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Client Reviews"
          title="What Clients Say About Working With Me"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-navy-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-7"
            >
              <Quote className="h-6 w-6 text-azure-500/40 dark:text-cyan-400/40" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy-700 dark:text-navy-200">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-100 dark:border-white/10 pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-azure-600 to-cyan-500 text-xs font-semibold text-white">
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
                <div>
                  <p className="text-sm font-medium text-navy-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-navy-500 dark:text-navy-400">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
