"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-azure-600 to-cyan-500 text-white animate-pulse-slow">
              <Terminal className="h-6 w-6" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-navy-400">
              Establishing connection...
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
