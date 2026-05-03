import Button from "./Button";

export default function GlowButton({ label, href, className = "" }) {
  return (
    <Button href={href} variant="primary" className={className}>
      {label}
    </Button>
  );
}
