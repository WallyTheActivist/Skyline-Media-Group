import { createElement } from "../../utils/dom.js";

export function createTestimonialCard(testimonial, index) {
  return createElement("article", {
    className: "testimonial-card",
    revealDelay: index * 90,
    children: [
      createElement("p", {
        className: "testimonial-card__quote",
        text: `“${testimonial.quote}”`
      }),
      createElement("p", {
        className: "testimonial-card__name",
        text: testimonial.name
      }),
      createElement("p", {
        className: "testimonial-card__role",
        text: testimonial.role
      })
    ]
  });
}
