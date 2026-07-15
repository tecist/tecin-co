"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogCategories, blogPosts } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function Blog() {
  const [active, setActive] = useState<string>("All");
  const categories = ["All", ...blogCategories];
  const filtered =
    active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <section id="blog" className="relative bg-white dark:bg-navy-950 py-16 sm:py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Insights"
          title="IT Notes From The Field"
          description="Practical guidance on Microsoft 365, Azure, VMware, Windows Server, and the everyday realities of running enterprise infrastructure."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "focus-ring rounded-full border px-3.5 py-1.5 text-xs font-mono transition-colors",
                active === cat
                  ? "border-azure-600 bg-azure-600 text-white"
                  : "border-navy-200 dark:border-white/10 text-navy-600 dark:text-navy-300 hover:border-azure-300 dark:hover:border-cyan-400/40"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group flex flex-col rounded-2xl border border-navy-200 dark:border-white/10 p-6 hover:border-azure-300 dark:hover:border-cyan-400/30 transition-colors"
            >
              <span className="eyebrow w-fit">{post.category}</span>
              <h3 className="mt-4 font-display text-base font-semibold leading-snug text-navy-900 dark:text-white">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600 dark:text-navy-300">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-navy-100 dark:border-white/10 pt-4">
                <span className="flex items-center gap-1.5 text-xs text-navy-400">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
                <a
                  href="#contact"
                  className="focus-ring flex items-center gap-1 text-xs font-medium text-azure-600 dark:text-cyan-400"
                >
                  Read
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
