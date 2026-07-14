"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 eyebrow mb-4",
          light && "text-cyan-400"
        )}
      >
        <span className="h-px w-6 bg-current" />
        {eyebrow}
      </div>
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-tight leading-[1.1]",
          light ? "text-white" : "text-navy-900 dark:text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            light ? "text-navy-300" : "text-navy-600 dark:text-navy-300"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
