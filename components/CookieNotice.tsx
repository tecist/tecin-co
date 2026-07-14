"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = window.localStorage.getItem("cookie-consent");
    if (!accepted) {
      const timer = window.setTimeout(() => setVisible(true), 1200);
      return () => window.clearTimeout(timer);
    }
  }, []);

  function accept() {
    window.localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="glass-card fixed bottom-6 left-1/2 z-50 flex w-[92%] max-w-md -translate-x-1/2 items-start gap-3 rounded-2xl p-4 sm:left-auto sm:right-6 sm:translate-x-0"
        >
          <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-azure-600 dark:text-cyan-400" />
          <div className="flex-1">
            <p className="text-sm text-navy-700 dark:text-navy-200">
              This site uses cookies to improve your browsing experience.
            </p>
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={accept}
                className="focus-ring rounded-full bg-azure-600 px-4 py-1.5 text-xs font-medium text-white"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => setVisible(false)}
                className="focus-ring rounded-full border border-navy-200 dark:border-white/10 px-4 py-1.5 text-xs font-medium text-navy-600 dark:text-navy-300"
              >
                Dismiss
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
