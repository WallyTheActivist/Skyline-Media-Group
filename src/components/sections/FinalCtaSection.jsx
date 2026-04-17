import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";
import GlowButton from "../ui/GlowButton";

export default function FinalCtaSection({ content }) {
  return (
    <SectionShell id="final-cta" className="bg-white pt-12 md:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-[2.2rem] border border-white/20 bg-[linear-gradient(145deg,#0a2540_0%,#164a79_100%)] px-6 py-12 text-white shadow-halo md:px-12"
      >
        <div className="pointer-events-none absolute -right-14 -top-14 h-52 w-52 rounded-full bg-azure/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-8 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-white/60">Final call to action</p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,5.4vw,4.8rem)] font-semibold leading-[0.97] tracking-[-0.03em]">
            {content.title}
          </h2>
          <p className="mt-5 max-w-[58ch] text-lg text-white/75">{content.body}</p>
          <GlowButton label={content.cta.label} href={content.cta.href} className="mt-9" />
        </div>
      </motion.div>
    </SectionShell>
  );
}
