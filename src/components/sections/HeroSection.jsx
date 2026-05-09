import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Button from "../ui/Button";

const defaultHero = {
  headline: "We Build Growth Systems. Not Just Websites.",
  subtext: "Websites, Ads, and Social Media designed to convert traffic into revenue.",
  ctaPrimary: { label: "Start Your Growth", href: "/contact" },
  ctaSecondary: { label: "View Work", href: "/work" }
};

const floatingCards = [
  {
    title: "Analytics Dashboard",
    value: "+42%",
    detail: "Conversion lift in 30 days",
    metrics: [72, 88, 67, 94, 82]
  },
  {
    title: "Ads Metrics",
    value: "3.4x",
    detail: "Blended ROAS",
    metrics: [41, 57, 79, 73, 91]
  },
  {
    title: "Website Preview",
    value: "1.8s",
    detail: "Avg. load time",
    metrics: [65, 78, 82, 90, 96]
  }
];

export default function HeroSection({ content }) {
  const hero = {
    ...defaultHero,
    ...content,
    ctaPrimary: {
      ...defaultHero.ctaPrimary,
      ...(content?.ctaPrimary || (content?.cta ? { label: content.cta.label, href: content.cta.href } : {}))
    },
    ctaSecondary: {
      ...defaultHero.ctaSecondary,
      ...content?.ctaSecondary
    }
  };

  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const springX = useSpring(parallaxX, { stiffness: 80, damping: 22, mass: 0.4 });
  const springY = useSpring(parallaxY, { stiffness: 80, damping: 22, mass: 0.4 });

  const card1X = useTransform(springX, (v) => v * 1.0);
  const card1Y = useTransform(springY, (v) => v * 0.8);
  const card2X = useTransform(springX, (v) => v * -0.6);
  const card2Y = useTransform(springY, (v) => v * 1.1);
  const card3X = useTransform(springX, (v) => v * 0.7);
  const card3Y = useTransform(springY, (v) => v * -0.7);

  const cardTransforms = [
    { x: card1X, y: card1Y },
    { x: card2X, y: card2Y },
    { x: card3X, y: card3Y }
  ];

  function handleParallaxMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    parallaxX.set(x * 18);
    parallaxY.set(y * 18);
  }

  function handleParallaxLeave() {
    parallaxX.set(0);
    parallaxY.set(0);
  }

  const textContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.14 }
    }
  };

  const textItem = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: "easeOut" } }
  };

  return (
    <header className="relative min-h-[100svh] overflow-hidden bg-[radial-gradient(circle_at_8%_14%,rgba(34,211,238,0.24),transparent_34%),radial-gradient(circle_at_88%_16%,rgba(30,58,138,0.38),transparent_44%),linear-gradient(135deg,#06192e_0%,#0a2540_52%,#102a43_100%)] text-white">
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#060f1d]/45" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-[min(1200px,92vw)] items-center pt-28 pb-16 lg:py-24">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div variants={textContainer} initial="hidden" animate="show">
            <motion.p variants={textItem} className="mb-7 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
              <span className="h-px w-5 flex-shrink-0 bg-current" aria-hidden="true" />
              Growth Systems Agency
            </motion.p>

            <motion.h1 variants={textItem} className="max-w-[14ch] text-display-1 font-display font-bold leading-[1.02] tracking-[-0.03em]">
              {hero.headline}
            </motion.h1>

            <motion.p variants={textItem} className="mt-7 max-w-[56ch] text-[clamp(1rem,1.42vw,1.22rem)] text-white/78">
              {hero.subtext}
            </motion.p>

            <motion.div variants={textItem} className="mt-10 flex flex-wrap items-center gap-3.5">
              <Button href={hero.ctaPrimary.href} variant="primary" className="min-w-[170px]">
                {hero.ctaPrimary.label}
              </Button>
              <Button href={hero.ctaSecondary.href} variant="secondary" className="min-w-[150px]">
                {hero.ctaSecondary.label}
              </Button>
            </motion.div>

            <motion.div variants={textItem} className="mt-9 grid max-w-xl grid-cols-3 gap-2 sm:gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 sm:px-4 sm:py-3.5 backdrop-blur-sm">
                <p className="font-display text-[clamp(1.25rem,2.2vw,1.75rem)] font-bold leading-none tracking-tight">+120%</p>
                <p className="mt-1.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.14em] text-white/45">Conversion lift</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 sm:px-4 sm:py-3.5 backdrop-blur-sm">
                <p className="font-display text-[clamp(1.25rem,2.2vw,1.75rem)] font-bold leading-none tracking-tight">3.4×</p>
                <p className="mt-1.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.14em] text-white/45">Average ROAS</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 sm:px-4 sm:py-3.5 backdrop-blur-sm">
                <p className="font-display text-[clamp(1.25rem,2.2vw,1.75rem)] font-bold leading-none tracking-tight">−31%</p>
                <p className="mt-1.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.14em] text-white/45">Wasted spend</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            onMouseMove={handleParallaxMove}
            onMouseLeave={handleParallaxLeave}
            className="relative mx-auto hidden w-full max-w-[560px] lg:block"
          >
            <div className="pointer-events-none absolute -left-10 top-10 h-36 w-36 rounded-full bg-accent-cyan/22 blur-3xl" />
            <div className="pointer-events-none absolute -right-8 bottom-8 h-44 w-44 rounded-full bg-brand-secondary/24 blur-3xl" />

            <div className="grid gap-4 sm:grid-cols-2 lg:block">
              {floatingCards.map((card, index) => {
                const cardPositions = [
                  "lg:w-[72%] lg:ml-0",
                  "lg:w-[64%] lg:ml-auto lg:-mt-3",
                  "lg:w-[70%] lg:ml-8 lg:-mt-2"
                ];

                return (
                  <motion.div
                    key={card.title}
                    style={cardTransforms[index]}
                    className={cardPositions[index]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.56, delay: 0.35 + index * 0.12 }}
                  >
                    <motion.article
                      animate={{ y: [0, -7, 0] }}
                      transition={{ duration: 5.8 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.35 }}
                      className="rounded-2xl border border-white/20 bg-white/[0.08] p-4 shadow-halo backdrop-blur-md"
                    >
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.18em] text-white/62">{card.title}</p>
                          <p className="mt-2 font-display text-[clamp(1.35rem,2.2vw,1.8rem)] font-semibold tracking-tight">{card.value}</p>
                        </div>
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.08]">
                          <span className="h-2.5 w-2.5 rounded-full bg-accent-cyan" />
                        </div>
                      </div>

                      <div className="mt-3 flex items-end gap-1.5">
                        {card.metrics.map((bar) => (
                          <span key={`${card.title}-${bar}`} className="w-1.5 rounded-full bg-white/70" style={{ height: `${bar / 2.1}px` }} />
                        ))}
                      </div>

                      <p className="mt-3 text-xs text-white/68">{card.detail}</p>
                    </motion.article>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
