import SectionShell from "../layout/SectionShell";
import Reveal from "../ui/Reveal";
import ServiceCard from "../ui/ServiceCard";

const defaultServices = [
  {
    icon: "website",
    title: "Website Development",
    description: "Build fast, conversion-focused websites that turn visitors into qualified leads."
  },
  {
    icon: "ads",
    title: "Paid Advertising",
    description: "Launch targeted paid campaigns that lower CAC and scale revenue with measurable ROAS."
  },
  {
    icon: "social",
    title: "Social Media Management",
    description: "Grow authority and demand with consistent social content that drives intent and action."
  }
];

export default function ServicesSection({ content }) {
  const services = content?.items?.length ? content.items : defaultServices;

  return (
    <SectionShell id="services" tone="soft" parallax>
      <Reveal>
        <p className="section-kicker">Services</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="section-title">
          {content?.title ?? "Services built for growth"}
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="section-copy">{content?.subtitle ?? "Website, ads, and social systems that work together to convert traffic into revenue."}</p>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {services.map((item, index) => (
          <Reveal key={item.title} delay={0.1 + index * 0.1}>
            <ServiceCard icon={item.icon} title={item.title} description={item.description} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
