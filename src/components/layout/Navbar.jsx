import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "../../data/siteContent";

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-midnight/90 backdrop-blur-lg">
      <div className="mx-auto flex w-[min(1200px,92vw)] items-center justify-between py-4">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-white">
          {siteContent.brand}
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-7 md:flex">
          {siteContent.navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`link-hover text-sm transition-colors duration-200 hover:text-white ${
                pathname === link.href ? "text-white" : "text-white/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="group flex items-center gap-1.5 rounded-full border border-white/20 bg-azure/20 px-5 py-1.5 text-sm font-medium text-white transition-all duration-[260ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:border-white/35 hover:bg-azure/35 hover:shadow-[0_4px_20px_rgba(28,116,217,0.35)]"
          >
            Get Started
            <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-midnight/95 backdrop-blur-lg md:hidden"
          >
            <div className="mx-auto flex w-[min(1200px,92vw)] flex-col gap-4 py-6">
              {siteContent.navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-white/80 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 w-fit rounded-full border border-white/20 bg-azure/20 px-5 py-2 text-sm font-medium text-white"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
