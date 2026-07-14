"use client";

import { motion } from "framer-motion";
import { skills, techStack } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="relative bg-navy-50/60 dark:bg-white/[0.02] py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="What I'm Best At"
          description="Eight years of hands-on infrastructure work, distilled into the tools I use most."
        />

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-navy-800 dark:text-navy-100">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-navy-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-navy-200 dark:bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-azure-600 to-cyan-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {techStack.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className="rounded-2xl border border-navy-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6"
              >
                <p className="eyebrow">{group.category}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-navy-50 dark:bg-white/5 px-3 py-1.5 text-xs font-mono text-navy-700 dark:text-navy-300 border border-navy-100 dark:border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
