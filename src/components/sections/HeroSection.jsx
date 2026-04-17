import { motion, useScroll, useTransform } from "framer-motion";
import GlowButton from "../ui/GlowButton";
import Reveal from "../ui/Reveal";

export default function HeroSection({ content, brand, navLinks }) {
  const { scrollY } = useScroll();
  const shapeY = useTransform(scrollY, [0, 600], [0, 180]);
  const shapeOpacity = useTransform(scrollY, [0, 500], [0.55, 0.15]);

  return (
    <header className="relative min-h-screen overflow-hidden bg-midnight text-white">
      <motion.div style={{ y: shapeY, opacity: shapeOpacity }} className="hero-ambient" aria-hidden="true" />
      <div className="hero-grid-overlay" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-screen w-[min(1200px,92vw)] flex-col py-8">
        <nav className="flex items-center justify-between">
          <p className="font-display text-lg font-semibold tracking-tight">{brand}</p>
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/70 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-14 pb-16 pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:pt-10">
          <div>
            <Reveal>
              <p className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.22em] text-white/75">
                Growth Systems Agency
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-[clamp(3.4rem,8.6vw,7rem)] font-display font-semibold leading-[0.96] tracking-[-0.04em]">
                {content.headline}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-[56ch] text-[clamp(1rem,1.45vw,1.26rem)] text-white/75">{content.subtext}</p>
            </Reveal>

            <Reveal delay={0.28}>
              <GlowButton href={content.cta.href} label={content.cta.label} className="mt-10" />
            </Reveal>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="rounded-3xl border border-white/20 bg-white/[0.08] p-6 shadow-halo backdrop-blur-md"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-white/60">Performance Snapshot</p>
              <div className="mt-4 space-y-4">
                {content.stats.map((item) => (
                  <div key={item.label} className="flex items-end justify-between border-b border-white/10 pb-3">
                    <p className="font-display text-3xl font-semibold tracking-tight">{item.value}</p>
                    <p className="text-sm text-white/70">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="pointer-events-none absolute -left-3 top-full mt-5 hidden space-y-2 lg:block">
              {content.floatingSignals.map((signal, index) => (
                <motion.p
                  key={signal}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.65 + index * 0.12, duration: 0.5 }}
                  className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs text-white/80"
                >
                  {signal}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
