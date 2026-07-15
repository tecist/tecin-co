"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  CalendarCheck,
  Send,
  CheckCircle2,
  Briefcase,
  Zap,
  Linkedin,
  Github,
  type LucideIcon,
} from "lucide-react";
import { serviceOptions, site, socialLinks } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

const icons: Record<string, LucideIcon> = { Briefcase, Zap, Linkedin, Github };

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <section id="contact" className="relative bg-navy-50/60 dark:bg-white/[0.02] py-16 sm:py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Talk About Your Project"
          description="Tell me a bit about what you need and I'll get back to you within a day — usually much sooner."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="rounded-2xl border border-navy-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6">
              <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white">
                {site.name}
              </h3>
              <p className="mt-1 flex items-center gap-2 text-sm text-navy-500 dark:text-navy-400">
                <MapPin className="h-4 w-4 text-azure-600 dark:text-cyan-400" />
                {site.location} · Remote worldwide
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${site.email}`}
                  className="focus-ring flex items-center gap-3 rounded-xl border border-navy-200 dark:border-white/10 p-3 text-sm text-navy-700 dark:text-navy-200 hover:border-azure-300 dark:hover:border-cyan-400/30 transition-colors"
                >
                  <Mail className="h-4 w-4 text-azure-600 dark:text-cyan-400" />
                  {site.email}
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="focus-ring flex items-center gap-3 rounded-xl border border-navy-200 dark:border-white/10 p-3 text-sm text-navy-700 dark:text-navy-200 hover:border-azure-300 dark:hover:border-cyan-400/30 transition-colors"
                >
                  <Phone className="h-4 w-4 text-azure-600 dark:text-cyan-400" />
                  {site.phone}
                </a>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <a
                  href={`mailto:${site.email}`}
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 dark:bg-white px-4 py-2.5 text-sm font-medium text-white dark:text-navy-900"
                >
                  <Mail className="h-4 w-4" />
                  Email Me
                </a>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-signal-green px-4 py-2.5 text-sm font-medium text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href="#contact"
                  data-calendly-placeholder="https://calendly.com/rehan-ali-it/free-call"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-azure-600 px-4 py-2.5 text-sm font-medium text-white"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book Call
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-navy-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6">
              <h4 className="font-display text-sm font-semibold text-navy-900 dark:text-white">
                Find me on
              </h4>
              <p className="mt-1 text-sm text-navy-500 dark:text-navy-400">
                Check reviews, past work, or connect professionally.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {socialLinks.map((link) => {
                  const Icon = icons[link.icon];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring flex items-center gap-2 rounded-xl border border-navy-200 dark:border-white/10 p-3 text-sm text-navy-700 dark:text-navy-200 hover:border-azure-300 dark:hover:border-cyan-400/30 transition-colors"
                    >
                      <Icon className="h-4 w-4 text-azure-600 dark:text-cyan-400" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-navy-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-7 sm:p-8"
          >
            {status === "sent" ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-signal-green" />
                <h3 className="mt-4 font-display text-xl font-semibold text-navy-900 dark:text-white">
                  Message sent
                </h3>
                <p className="mt-2 max-w-sm text-sm text-navy-500 dark:text-navy-400">
                  Thanks for reaching out — I'll get back to you within a day,
                  usually sooner.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="text-sm font-medium text-navy-700 dark:text-navy-200">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    className="focus-ring mt-1.5 w-full rounded-lg border border-navy-200 dark:border-white/10 bg-transparent px-4 py-2.5 text-sm text-navy-900 dark:text-white"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="text-sm font-medium text-navy-700 dark:text-navy-200">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="focus-ring mt-1.5 w-full rounded-lg border border-navy-200 dark:border-white/10 bg-transparent px-4 py-2.5 text-sm text-navy-900 dark:text-white"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="company" className="text-sm font-medium text-navy-700 dark:text-navy-200">
                    Company (optional)
                  </label>
                  <input
                    id="company"
                    className="focus-ring mt-1.5 w-full rounded-lg border border-navy-200 dark:border-white/10 bg-transparent px-4 py-2.5 text-sm text-navy-900 dark:text-white"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="text-sm font-medium text-navy-700 dark:text-navy-200">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="focus-ring mt-1.5 w-full rounded-lg border border-navy-200 dark:border-white/10 bg-transparent px-4 py-2.5 text-sm text-navy-900 dark:text-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="service" className="text-sm font-medium text-navy-700 dark:text-navy-200">
                    What do you need help with?
                  </label>
                  <select
                    id="service"
                    defaultValue=""
                    required
                    className="focus-ring mt-1.5 w-full rounded-lg border border-navy-200 dark:border-white/10 bg-transparent px-4 py-2.5 text-sm text-navy-900 dark:text-white"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-white dark:bg-navy-900">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-navy-700 dark:text-navy-200">
                    Tell me about your project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="focus-ring mt-1.5 w-full rounded-lg border border-navy-200 dark:border-white/10 bg-transparent px-4 py-2.5 text-sm text-navy-900 dark:text-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-azure-600 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-azure-600/20 disabled:opacity-70 sm:w-auto"
                  >
                    {status === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
