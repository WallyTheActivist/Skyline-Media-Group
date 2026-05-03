import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";
import Reveal from "../ui/Reveal";

function CaseCard({ project, index }) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-[2rem] cursor-pointer"
      style={{ aspectRatio: "3 / 4" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Image layer (gradient as photo stand-in) ── */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        style={{ background: project.gradient }}
        aria-hidden="true"
      />

      {/* Noise grain overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      {/* Persistent bottom vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(4,8,20,0.92) 0%, rgba(4,8,20,0.35) 42%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Hover overlay — slides up */}
      <div
        className="absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
        style={{
          background:
            "linear-gradient(to top, rgba(4,8,20,0.97) 0%, rgba(4,8,20,0.82) 55%, rgba(4,8,20,0.35) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Domain tag — always visible top-left */}
      <div className="absolute left-6 top-6 z-10">
        <span
          className="inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{
            background: `${project.accentColor}18`,
            color: project.accentColor,
            border: `1px solid ${project.accentColor}30`,
          }}
        >
          {project.domain}
        </span>
      </div>

      {/* Card footer — base state (title + tag) */}
      <div className="absolute inset-x-6 bottom-6 z-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0 group-hover:translate-y-3">
        <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">{project.tag}</p>
        <h3 className="mt-1 font-display text-2xl font-semibold leading-tight text-white">
          {project.title}
        </h3>
      </div>

      {/* Hover reveal — metrics */}
      <div className="absolute inset-x-6 bottom-6 z-20 translate-y-6 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
        {/* thin accent rule */}
        <div
          className="mb-5 h-px w-10"
          style={{ background: project.accentColor }}
          aria-hidden="true"
        />

        {/* Metrics row */}
        <div className="flex gap-7">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p
                className="font-display text-[2.1rem] font-bold leading-none tracking-tight"
                style={{ color: project.accentColor }}
              >
                {m.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/55">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Project name in hover state */}
        <p className="mt-5 font-display text-xl font-semibold text-white">{project.title}</p>
        <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-white/40">{project.tag}</p>
      </div>
    </motion.article>
  );
}

export default function CaseStudiesSection({ content }) {
  return (
    <SectionShell id="case-studies" tone="dark" className="bg-midnight">
      {/* Header */}
      <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-white/50">Case studies</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="section-title mt-3 max-w-[18ch] text-white">{content.title}</h2>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <p className="max-w-[38ch] pb-1 text-sm leading-relaxed text-white/50 lg:text-right">
            {content.subtitle}
          </p>
        </Reveal>
      </div>

      {/* Cards grid */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.projects.map((project, index) => (
          <CaseCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* Footer hint */}
      <Reveal delay={0.3}>
        <p className="mt-8 text-center text-xs uppercase tracking-[0.22em] text-white/25">
          Hover each card to reveal results
        </p>
      </Reveal>
    </SectionShell>
  );
}
