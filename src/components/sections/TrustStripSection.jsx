import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";
import Reveal from "../ui/Reveal";

export default function TrustStripSection({ content }) {
  return (
    <SectionShell className="bg-white py-10 md:py-12">
      <Reveal className="text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-ink/55">{content.title}</p>
      </Reveal>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ delay: 0.15, duration: 0.65 }}
        className="mt-8 grid grid-cols-2 gap-3 text-center sm:grid-cols-3 lg:grid-cols-6"
      >
        {content.logos.map((logo) => (
          <p
            key={logo}
            className="rounded-2xl border border-ink/10 bg-mist/40 px-4 py-3 font-display text-sm tracking-[0.08em] text-ink/65"
          >
            {logo}
          </p>
        ))}
      </motion.div>
    </SectionShell>
  );
}
