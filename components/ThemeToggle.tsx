"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ light = false }: { light?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle color theme"
      className={cn(
        "focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
        light
          ? "border-white/20 text-white hover:border-white/40"
          : "border-navy-200 dark:border-white/10 text-navy-600 dark:text-navy-300 hover:text-azure-600 dark:hover:text-cyan-400 hover:border-azure-300 dark:hover:border-cyan-400/40"
      )}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
