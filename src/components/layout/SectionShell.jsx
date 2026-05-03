import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/cn";

const sizeClasses = {
  standard: "section-shell",
  compact: "py-16 md:py-20 lg:py-24"
};

const toneClasses = {
  light: "bg-brand-background",
  soft: "surface-soft",
  dark: "surface-dark"
};

// Extracted so useScroll + useTransform only mount on sections
// that actually request parallax. Keeps other sections scroll-observer-free.
function ParallaxOrbs({ sectionRef }) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orbA = useTransform(
    scrollYProgress, [0, 1],
    prefersReducedMotion ? [0, 0] : [-20, 26]
  );
  const orbB = useTransform(
    scrollYProgress, [0, 1],
    prefersReducedMotion ? [0, 0] : [24, -18]
  );

  return (
    <>
      <motion.span
        aria-hidden="true"
        style={{ y: orbA }}
        className="pointer-events-none absolute -left-16 top-16 h-28 w-28 rounded-full bg-brand-secondary/12 blur-2xl"
      />
      <motion.span
        aria-hidden="true"
        style={{ y: orbB }}
        className="pointer-events-none absolute -right-12 bottom-12 h-24 w-24 rounded-full bg-accent-cyan/12 blur-2xl"
      />
    </>
  );
}

export default function SectionShell({
  id,
  className = "",
  children,
  size = "standard",
  tone = "light",
  parallax = false
}) {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      ref={sectionRef}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.62, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "relative",
        sizeClasses[size] ?? sizeClasses.standard,
        toneClasses[tone] ?? toneClasses.light,
        className
      )}
    >
      {parallax && <ParallaxOrbs sectionRef={sectionRef} />}
      <div className="section-container">{children}</div>
    </motion.section>
  );
}

