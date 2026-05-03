import { motion } from "framer-motion";

export default function PageHeader({ label, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-midnight pb-20 pt-36 text-white md:pb-24 md:pt-44">
      {/* Dot-grid texture fading in from top */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black 25%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Right ambient glow */}
      <div
        className="pointer-events-none absolute -right-28 top-0 h-80 w-80 rounded-full blur-[110px]"
        style={{ background: "rgba(28,116,217,0.16)" }}
        aria-hidden="true"
      />
      {/* Bottom gradient fade into page content */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-midnight/60"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-[min(1200px,92vw)]">
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="section-kicker text-white/40"
          >
            {label}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-[16ch] font-display text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[0.96] tracking-[-0.035em]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-5 max-w-[52ch] text-lg leading-relaxed text-white/55"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

