import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";
import Reveal from "../ui/Reveal";

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8l3.5 3.5L13 4" />
  </svg>
);

export default function WhySkylineSection({ content }) {
  return (
    <SectionShell id="why-skyline" className="bg-[linear-gradient(180deg,#edf5ff_0%,#ffffff_100%)]">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">

        {/* Left column */}
        <div>
          <Reveal>
            <p className="section-kicker text-azure">Why Skyline</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2.2rem,5.1vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-navy">
              {content.title}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-[38ch] text-lg leading-relaxed text-ink/60">{content.subtitle}</p>
          </Reveal>

          {/* Pull-quote stat */}
          <Reveal delay={0.26}>
            <div className="mt-10 border-l-2 border-azure/35 pl-5">
              <p className="font-display text-[3rem] font-bold leading-none tracking-[-0.03em] text-navy">4.2×</p>
              <p className="mt-1.5 text-sm text-ink/45">average ROAS delivered to clients</p>
            </div>
          </Reveal>
        </div>

        {/* Bullet list — stagger reveal */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          className="space-y-3 pt-2"
        >
          {content.bullets.map((bullet) => (
            <motion.li
              key={bullet}
              variants={{
                hidden: { opacity: 0, x: 20 },
                show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="flex items-center gap-4 rounded-2xl border border-ink/[0.07] bg-white px-5 py-4 shadow-soft"
            >
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-azure/10 text-azure">
                <CheckIcon />
              </span>
              <span className="text-sm font-medium leading-snug text-ink/75">{bullet}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </SectionShell>
  );
}

