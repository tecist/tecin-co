"use client";

import { motion } from "framer-motion";
import { Clock, CalendarClock, FileCheck2, ArrowRight, Check, type LucideIcon } from "lucide-react";
import { pricingPlans } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = { Clock, CalendarClock, FileCheck2 };

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-white dark:bg-navy-950 py-16 sm:py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Straightforward Rates, No Surprises"
          description="Every engagement starts with a free call so we agree on scope and price before any work begins."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pricingPlans.map((plan, i) => {
            const Icon = icons[plan.icon];
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn(
                  "relative flex flex-col rounded-2xl p-7",
                  plan.featured
                    ? "border-2 border-azure-500 bg-gradient-to-b from-azure-50 to-white dark:from-azure-500/10 dark:to-transparent"
                    : "border border-navy-200 dark:border-white/10"
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-azure-600 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-white">
                    Most Popular
                  </span>
                )}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-azure-600 to-cyan-500 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-300">
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-2xl font-semibold text-navy-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.unit && (
                    <span className="text-sm text-navy-400">{plan.unit}</span>
                  )}
                </p>
                <ul className="mt-5 flex-1 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-navy-600 dark:text-navy-400">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-azure-500 dark:text-cyan-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="focus-ring mt-6 inline-flex items-center justify-center gap-1.5 rounded-full border border-navy-200 dark:border-white/15 px-4 py-2.5 text-sm font-medium text-navy-800 dark:text-white hover:border-azure-400 hover:text-azure-600 dark:hover:text-cyan-400 transition-colors"
                >
                  Get Started
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
