import { createSectionHeader } from "../shared/SectionHeader.js";
import { createTestimonialCard } from "../shared/TestimonialCard.js";
import { createContainer, createElement } from "../../utils/dom.js";

export function createTestimonialsSection(content) {
  const testimonialCards = content.testimonials.map((item, index) => createTestimonialCard(item, index));

  return createElement("section", {
    className: "section section--light",
    attrs: { id: "testimonials" },
    children: [
      createContainer([
        createSectionHeader({
          eyebrow: "Testimonials",
          title: "Trusted By Teams That Need Pipeline Growth",
          description:
            "Proof that strategy, execution speed, and conversion focus can coexist."
        }),
        createElement("div", {
          className: "testimonial-grid",
          children: testimonialCards
        })
      ])
    ]
  });
}
