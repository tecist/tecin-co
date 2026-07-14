"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { site } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  "8+ years hands-on experience",
  "Enterprise infrastructure background",
  "Clear, jargon-free communication",
  "Fully remote, worldwide",
  "Flexible hourly or project pricing",
  "NDA & secure access on request",
];

export function About() {
  return (
    <section id="about" className="relative bg-white dark:bg-navy-950 py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="About Me"
              title="From Enterprise IT Floors to Your Business, Remotely"
              align="left"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-600 dark:text-navy-300">
              <p>
                I've spent the last 8+ years working as a System Administrator
                and IT Infrastructure Engineer inside enterprise environments —
                managing production servers, cloud platforms, and the systems
                that hundreds of people depend on every day.
              </p>
              <p>
                A few years ago I started taking on freelance projects on the
                side, helping small businesses and startups get the same level
                of care their in-house IT never had time for. Now I do it
                full-time — one client's infrastructure at a time, remotely.
              </p>
              <p>
                No call centers, no ticket queues. When you work with me,
                you're talking directly to the person doing the work.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-sm text-navy-700 dark:text-navy-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-signal-green" />
                  {h}
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-navy-900 hover:bg-navy-800 dark:hover:bg-navy-100 transition-colors"
            >
              Let's Work Together
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative rounded-3xl border border-navy-200 dark:border-white/10 bg-gradient-to-b from-navy-50 to-white dark:from-white/[0.04] dark:to-transparent p-8">
              <div className="flex items-center justify-between font-mono text-xs text-navy-400">
                <span>~/rehan-ali --profile</span>
                <span className="status-dot" />
              </div>
              <div className="mt-6 space-y-4 font-mono text-sm text-navy-700 dark:text-navy-300">
                <p><span className="text-azure-600 dark:text-cyan-400">name:</span> {site.name}</p>
                <p><span className="text-azure-600 dark:text-cyan-400">role:</span> {site.role}</p>
                <p><span className="text-azure-600 dark:text-cyan-400">experience:</span> {site.yearsExperience}+ years</p>
                <p><span className="text-azure-600 dark:text-cyan-400">based_in:</span> {site.location}</p>
                <p><span className="text-azure-600 dark:text-cyan-400">works_with:</span> clients worldwide</p>
                <p><span className="text-azure-600 dark:text-cyan-400">status:</span> <span className="text-signal-green">{site.availability}</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
