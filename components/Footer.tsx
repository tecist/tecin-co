import { Mail, Briefcase, Zap, Linkedin, Github, type LucideIcon } from "lucide-react";
import { navLinks, site, socialLinks } from "@/lib/data";

const icons: Record<string, LucideIcon> = { Briefcase, Zap, Linkedin, Github };

export function Footer() {
  return (
    <footer className="relative border-t border-navy-200 dark:border-white/10 bg-white dark:bg-navy-950 py-14">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-azure-600 to-cyan-500 font-display text-sm font-semibold text-white">
                RA
              </span>
              <span className="font-display text-sm font-semibold text-navy-900 dark:text-white">
                {site.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-500 dark:text-navy-400">
              Freelance IT Infrastructure Engineer helping small businesses
              with Microsoft 365, Azure, VMware, and remote IT support —
              available worldwide.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-navy-200 dark:border-white/10 text-navy-500 dark:text-navy-400 hover:text-azure-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              {socialLinks.map((link) => {
                const Icon = icons[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-navy-200 dark:border-white/10 text-navy-500 dark:text-navy-400 hover:text-azure-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-navy-400">
              Navigate
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="focus-ring text-sm text-navy-600 dark:text-navy-300 hover:text-azure-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-navy-400">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-600 dark:text-navy-300">
              <li>{site.location}</li>
              <li>{site.email}</li>
              <li>{site.phone}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-200 dark:border-white/10 pt-6 text-xs text-navy-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Available for freelance work, worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
