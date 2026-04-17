import { createElement } from "../../utils/dom.js";

export function createSectionHeader({ eyebrow, title, description, centered = false }) {
  return createElement("header", {
    className: `section-header${centered ? " section-header--centered" : ""}`,
    children: [
      eyebrow
        ? createElement("p", {
            className: "section-eyebrow",
            text: eyebrow,
            revealDelay: 0
          })
        : null,
      createElement("h2", {
        className: "section-title",
        text: title,
        revealDelay: 60
      }),
      description
        ? createElement("p", {
            className: "section-description",
            text: description,
            revealDelay: 120
          })
        : null
    ]
  });
}
