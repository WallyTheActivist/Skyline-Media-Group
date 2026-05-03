import TiltCard from "./TiltCard";
import IconBadge from "./IconBadge";

export default function ServiceCard({ icon, title, description }) {
  return (
    <TiltCard>
      <IconBadge icon={icon} />
      <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-brand-primary">{title}</h3>
      <p className="mt-4 text-ink/72">{description}</p>
    </TiltCard>
  );
}
