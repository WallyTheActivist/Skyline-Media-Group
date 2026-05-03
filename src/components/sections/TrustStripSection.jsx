import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";
import Reveal from "../ui/Reveal";

export default function TrustStripSection({ content }) {
  return (
    <SectionShell className="bg-white py-10 md:py-14">
      <Reveal className="text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/30">{content.title}</p>
      </Reveal>

      {/* Pill grid with fade-out edges on both sides */}
      <div className="relative mt-7">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-white to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-white to-transparent" aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="grid grid-cols-3 gap-2.5 lg:grid-cols-6"
        >
          {content.logos.map((logo) => (
            <motion.div
              key={logo}
              whileHover={{ y: -2, borderColor: "rgba(28,116,217,0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="flex items-center justify-center rounded-xl border border-ink/[0.07] bg-white px-4 py-3.5 shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
            >
              <p className="font-display text-[12px] font-semibold tracking-[0.1em] text-ink/38">{logo}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}

