import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function StickyCtaBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          role="banner"
          aria-label="Sticky call to action"
          initial={{ y: 88, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 88, opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-midnight/96 backdrop-blur-xl"
        >
          <div className="mx-auto flex w-[min(1200px,92vw)] items-center justify-between gap-4 py-3.5">
            {/* Message */}
            <p className="text-sm text-white/65 hidden sm:block leading-snug">
              <span className="font-semibold text-white">Your funnel is leaking revenue.</span>{" "}
              We'll find exactly where — free, in 48 hours.
            </p>
            <p className="text-sm font-semibold text-white sm:hidden">
              Find your revenue leaks — free.
            </p>

            {/* Actions */}
            <div className="flex flex-shrink-0 items-center gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-azure px-5 py-2 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(28,116,217,0.4)] transition hover:bg-azure/85 hover:shadow-[0_6px_24px_rgba(28,116,217,0.5)] active:scale-[0.98]"
              >
                Get Free Audit →
              </Link>
              <button
                onClick={() => setDismissed(true)}
                className="rounded-full p-1.5 text-white/35 transition hover:text-white/70"
                aria-label="Dismiss banner"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
