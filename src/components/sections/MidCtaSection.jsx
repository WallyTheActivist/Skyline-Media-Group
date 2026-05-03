import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";
import Button from "../ui/Button";

const checkIcon = (
  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8l3.5 3.5L13 4" />
  </svg>
);

const TRUST_POINTS = [
  "No commitment required",
  "Results within 48 hours",
  "100% free, no strings",
];

export default function MidCtaSection({ content }) {
  return (
    <SectionShell id="mid-cta" className="bg-mist/50">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2rem] border border-azure/15 bg-white px-7 py-10 shadow-soft md:px-12 md:py-12"
      >
        {/* Subtle corner glow */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
          style={{ background: "rgba(28,116,217,0.10)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Copy */}
          <div className="max-w-[48ch]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-azure">
              {content.kicker}
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.55rem,3.2vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-navy">
              {content.headline}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink/60">{content.subtext}</p>

            {/* Trust micro-list */}
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {TRUST_POINTS.map((pt) => (
                <li key={pt} className="flex items-center gap-1.5 text-sm text-ink/55">
                  <span className="text-azure">{checkIcon}</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-shrink-0 flex-col items-start gap-3 lg:items-end">
            <Button href={content.cta.href} variant="primary">
              {content.cta.label}
            </Button>
            <p className="text-[11px] text-ink/40">Takes less than 60 seconds</p>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}
