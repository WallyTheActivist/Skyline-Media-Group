import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionShell from "../layout/SectionShell";
import Reveal from "../ui/Reveal";

// ── Icons ─────────────────────────────────────────────────────────────────────
const ICONS = {
  Strategy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M2 20h20" />
      <path d="M6 20V10l6-6 6 6v10" />
      <path d="M10 20v-5h4v5" />
    </svg>
  ),
  Build: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M7 8h10M7 12h6" />
    </svg>
  ),
  Launch: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  Scale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
};

const STEP_COLORS = [
  { node: "#1c74d9", glow: "rgba(28,116,217,0.22)", text: "#1c74d9" },
  { node: "#0ea5e9", glow: "rgba(14,165,233,0.22)", text: "#0ea5e9" },
  { node: "#22d3ee", glow: "rgba(34,211,238,0.22)", text: "#22d3ee" },
  { node: "#a78bfa", glow: "rgba(167,139,250,0.22)", text: "#a78bfa" },
];

// ── Animated connector line ────────────────────────────────────────────────────
function ConnectorLine({ axis = "x", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const isHorizontal = axis === "x";
  return (
    <div
      ref={ref}
      className={
        isHorizontal
          ? "absolute top-[2.25rem] h-px w-full overflow-hidden"
          : "absolute left-[1.125rem] top-full h-full w-px overflow-hidden"
      }
      aria-hidden="true"
    >
      {/* Track */}
      <div
        className="h-full w-full"
        style={{ background: "rgba(28,116,217,0.12)" }}
      />
      {/* Animated fill */}
      <motion.div
        className="absolute inset-0 origin-left"
        style={{
          background: isHorizontal
            ? "linear-gradient(90deg,#1c74d9,#22d3ee)"
            : "linear-gradient(180deg,#1c74d9,#22d3ee)",
          transformOrigin: isHorizontal ? "left center" : "top center",
        }}
        initial={{ scaleX: isHorizontal ? 0 : 1, scaleY: isHorizontal ? 1 : 0 }}
        animate={inView ? { scaleX: 1, scaleY: 1 } : {}}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

// ── Single step ────────────────────────────────────────────────────────────────
function Step({ step, index, total }) {
  const color = STEP_COLORS[index] ?? STEP_COLORS[0];
  const isLast = index === total - 1;

  return (
    <>
      {/* ── DESKTOP layout (lg+): column inside grid ── */}
      <motion.div
        className="hidden lg:flex lg:flex-col lg:items-center lg:text-center"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Node */}
        <div className="relative z-10 flex-shrink-0">
          <motion.div
            className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-white"
            style={{
              background: `radial-gradient(circle at 35% 35%, ${color.glow}, rgba(255,255,255,0.95) 70%)`,
              borderColor: `${color.node}30`,
              boxShadow: `0 0 0 6px ${color.glow}`,
              color: color.node,
            }}
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: index * 0.15 + 0.1, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {ICONS[step.title]}
            {/* Step number badge */}
            <span
              className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold text-white"
              style={{ background: color.node }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="mt-6 px-2">
          <h3
            className="font-display text-lg font-semibold tracking-tight text-brand-primary"
            style={{ color: "inherit" }}
          >
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/60">{step.body}</p>
        </div>
      </motion.div>

      {/* ── MOBILE layout (<lg): row ── */}
      <motion.div
        className="relative flex gap-5 lg:hidden"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Left — node + vertical line */}
        <div className="relative flex flex-col items-center">
          <motion.div
            className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border"
            style={{
              background: `${color.glow}`,
              borderColor: `${color.node}40`,
              color: color.node,
              boxShadow: `0 0 0 4px ${color.glow}`,
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.13 + 0.08, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {ICONS[step.title]}
          </motion.div>

          {/* Vertical connector (not after last item) */}
          {!isLast && (
            <div className="relative mt-2 w-px flex-1 overflow-hidden" style={{ minHeight: "3rem" }} aria-hidden="true">
              <div className="h-full w-full" style={{ background: "rgba(28,116,217,0.12)" }} />
              <motion.div
                className="absolute inset-0 origin-top"
                style={{ background: "linear-gradient(180deg,#1c74d9,#22d3ee)" }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: index * 0.13 + 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          )}
        </div>

        {/* Right — text */}
        <div className="pb-8">
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ color: color.node }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl font-semibold tracking-tight text-brand-primary">
              {step.title}
            </h3>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{step.body}</p>
        </div>
      </motion.div>
    </>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────
export default function ProcessSection({ content }) {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, amount: 0.5 });

  return (
    <SectionShell id="process" tone="light">
      {/* Header */}
      <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Reveal>
            <p className="section-kicker">Process</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="section-title max-w-[16ch]">{content.title}</h2>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <p className="max-w-[36ch] pb-1 text-sm leading-relaxed text-ink/50 lg:text-right">
            {content.subtitle}
          </p>
        </Reveal>
      </div>

      {/* ── Desktop timeline ───────────────────────────────────── */}
      <div className="relative mt-16 hidden lg:block" ref={lineRef}>
        {/* Background track */}
        <div
          className="absolute left-[calc(100%/8)] right-[calc(100%/8)] top-[2.25rem] h-px"
          style={{ background: "rgba(28,116,217,0.10)" }}
          aria-hidden="true"
        />
        {/* Animated fill line */}
        <motion.div
          className="absolute left-[calc(100%/8)] right-[calc(100%/8)] top-[2.25rem] h-px origin-left"
          style={{ background: "linear-gradient(90deg,#1c74d9 0%,#22d3ee 100%)" }}
          initial={{ scaleX: 0 }}
          animate={lineInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        />

        {/* Steps */}
        <div className="grid grid-cols-4 gap-6">
          {content.steps.map((step, index) => (
            <Step key={step.title} step={step} index={index} total={content.steps.length} />
          ))}
        </div>
      </div>

      {/* ── Mobile timeline ────────────────────────────────────── */}
      <div className="mt-12 flex flex-col lg:hidden">
        {content.steps.map((step, index) => (
          <Step key={step.title} step={step} index={index} total={content.steps.length} />
        ))}
      </div>
    </SectionShell>
  );
}
