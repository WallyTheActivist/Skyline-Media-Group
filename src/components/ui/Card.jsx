import { cn } from "../../lib/cn";

const variantClasses = {
  service: "card card-service",
  testimonial: "card card-testimonial",
  caseStudy: "card card-case-study"
};

export default function Card({ as: Tag = "article", variant = "service", className = "", children, ...props }) {
  return (
    <Tag className={cn(variantClasses[variant] ?? variantClasses.service, className)} {...props}>
      {children}
    </Tag>
  );
}
