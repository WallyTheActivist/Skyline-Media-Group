import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";
import Reveal from "../ui/Reveal";

export default function ProcessSection({ content }) {
  return (
    <SectionShell id="process" className="bg-white">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-azure">Process</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 max-w-[14ch] font-display text-[clamp(2.2rem,5.1vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-navy">
          {content.title}
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-5 text-lg text-ink/70">{content.subtitle}</p>
      </Reveal>

      <div className="relative mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <span className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-azure/30 to-transparent lg:block" />

        {content.steps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            className="relative rounded-3xl border border-ink/10 bg-white p-6 shadow-soft"
          >
            <p className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-azure/30 bg-azure/10 font-display text-sm font-semibold text-azure">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-navy">{step.title}</h3>
            <p className="mt-3 text-ink/70">{step.body}</p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
