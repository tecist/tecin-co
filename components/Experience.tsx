"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative bg-navy-50/60 dark:bg-white/[0.02] py-24 sm:py-32">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Career Timeline"
          title="A Track Record of Keeping Systems Online"
          description="Eight years of progressively senior infrastructure roles, from frontline helpdesk support to full production environment ownership."
        />

        <div className="relative mt-16">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-navy-200 dark:bg-white/10 sm:left-1/2" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col sm:flex-row ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                } gap-6 sm:gap-10`}
              >
                <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white dark:border-navy-950 bg-gradient-to-br from-azure-600 to-cyan-500 text-white sm:left-1/2 sm:-translate-x-1/2 z-10">
                  <Briefcase className="h-4 w-4" />
                </div>

                <div className="ml-14 sm:ml-0 sm:w-1/2" />

                <div
                  className={`ml-14 sm:ml-0 sm:w-1/2 ${
                    i % 2 === 1 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                  }`}
                >
                  <div className="rounded-2xl border border-navy-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-navy-500 dark:text-navy-400">
                      <span>{job.period}</span>
                      {job.current && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-signal-green/10 px-2 py-0.5 text-signal-green">
                          <span className="h-1.5 w-1.5 rounded-full bg-signal-green" />
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold text-navy-900 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="text-sm font-medium text-azure-600 dark:text-cyan-400">
                      {job.company}
                    </p>
                    <ul
                      className={`mt-4 space-y-2 text-sm leading-relaxed text-navy-600 dark:text-navy-300 ${
                        i % 2 === 1 ? "sm:text-right" : ""
                      }`}
                    >
                      {job.achievements.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
