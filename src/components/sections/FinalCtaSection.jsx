import { motion } from "framer-motion";
import SectionShell from "../layout/SectionShell";
import GlowButton from "../ui/GlowButton";

export default function FinalCtaSection({ content }) {
  return (
    <SectionShell id="final-cta" className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="has-noise relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(145deg,#061528_0%,#0a2540_45%,#0e3a6e_100%)] px-8 py-14 text-white shadow-lift md:px-14 md:py-16"
      >
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-azure/22 blur-[90px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-28 left-6 h-72 w-72 rounded-full bg-accent-cyan/12 blur-[80px]" aria-hidden="true" />

        {/* Subtle interior grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 75% 25%, black 25%, transparent 72%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* Copy */}
          <div className="max-w-2xl">
            <p className="section-kicker text-white/40">30-minute strategy session</p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,5.4vw,4.6rem)] font-semibold leading-[0.97] tracking-[-0.035em]">
              {content.title}
            </h2>
            <p className="mt-5 max-w-[54ch] text-lg leading-relaxed text-white/60">{content.body}</p>
          </div>

          {/* CTA block */}
          <div className="flex flex-shrink-0 flex-col items-start gap-2.5 lg:items-end">
            <GlowButton label={content.cta.label} href={content.cta.href} />
            <p className="text-[11px] text-white/30">No charge. No obligation.</p>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}

