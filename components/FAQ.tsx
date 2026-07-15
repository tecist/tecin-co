"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-navy-50/60 dark:bg-white/[0.02] py-16 sm:py-24">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Answers Before You Reach Out"
        />

        <div className="mt-14 divide-y divide-navy-200 dark:divide-white/10 rounded-2xl border border-navy-200 dark:border-white/10 bg-white dark:bg-white/[0.03]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="px-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="focus-ring flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-base font-medium text-navy-900 dark:text-white">
                    {faq.question}
                  </span>
                  <Plus
                    className={cn(
                      "h-4 w-4 shrink-0 text-azure-600 dark:text-cyan-400 transition-transform duration-300",
                      isOpen && "rotate-45"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-navy-600 dark:text-navy-300">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
