"use client";

import { motion } from "framer-motion";
import { Layers, Mail, ShieldCheck, ArrowUpRight, type LucideIcon } from "lucide-react";
import { portfolio } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

const icons: Record<string, LucideIcon> = { Layers, Mail, ShieldCheck };

export function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-white dark:bg-navy-950 py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Recent Projects"
          description="A few examples of the kind of work I take on for clients — real problems, remote solutions."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {portfolio.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col rounded-2xl border border-navy-200 dark:border-white/10 bg-navy-50/50 dark:bg-white/[0.03] p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-azure-600 to-cyan-500 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-navy-400">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-mono text-navy-400">{item.client}</p>

                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-widest text-navy-400">Challenge</dt>
                    <dd className="mt-1 text-navy-600 dark:text-navy-300">{item.challenge}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-widest text-navy-400">What I did</dt>
                    <dd className="mt-1 text-navy-600 dark:text-navy-300">{item.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] uppercase tracking-widest text-signal-green">Result</dt>
                    <dd className="mt-1 font-medium text-navy-800 dark:text-white">{item.result}</dd>
                  </div>
                </dl>

                <a
                  href="#contact"
                  className="focus-ring mt-6 inline-flex items-center gap-1 text-sm font-medium text-azure-600 dark:text-cyan-400 group-hover:gap-2 transition-all"
                >
                  Have a similar problem?
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
