import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";
import Reveal from "../ui/Reveal";

export default function WhySkylineSection({ content }) {
  return (
    <SectionShell id="why-skyline" className="bg-[linear-gradient(180deg,#edf5ff_0%,#ffffff_100%)]">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-azure">Why skyline</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2.2rem,5.1vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-navy">
              {content.title}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-xl text-ink/72">{content.subtitle}</p>
          </Reveal>
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          {content.bullets.map((bullet, index) => (
            <li
              key={bullet}
              className="rounded-2xl border border-ink/10 bg-white px-5 py-4 text-ink/80 shadow-soft"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {bullet}
            </li>
          ))}
        </motion.ul>
      </div>
    </SectionShell>
  );
}
