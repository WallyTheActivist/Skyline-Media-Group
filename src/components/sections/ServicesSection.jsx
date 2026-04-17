import SectionShell from "../layout/SectionShell";
import Reveal from "../ui/Reveal";
import TiltCard from "../ui/TiltCard";
import IconBadge from "../ui/IconBadge";

export default function ServicesSection({ content }) {
  return (
    <SectionShell id="services" className="bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_100%)]">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-azure">Services</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(2.2rem,5.1vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-navy">
          {content.title}
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-5 max-w-3xl text-lg text-ink/70">{content.subtitle}</p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {content.items.map((item, index) => (
          <Reveal key={item.title} delay={0.1 + index * 0.1}>
            <TiltCard className="service-card">
              <IconBadge icon={item.icon} />
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-navy">{item.title}</h3>
              <p className="mt-4 text-ink/70">{item.description}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
