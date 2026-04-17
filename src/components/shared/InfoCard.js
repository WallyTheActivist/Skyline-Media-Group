import { createElement } from "../../utils/dom.js";
import { createIcon } from "./Icon.js";

export function createInfoCard({ icon, title, description, supportingText }, variant = "default", revealDelay = 0) {
  const iconNode = createIcon(icon);

  const card = createElement("article", {
    className: `info-card info-card--${variant}`,
    children: [
      iconNode,
      createElement("h3", {
        className: "info-card__title",
        text: title
      }),
      createElement("p", {
        className: "info-card__description",
        text: description
      }),
      supportingText
        ? createElement("p", {
            className: "info-card__supporting",
            text: supportingText
          })
        : null
    ],
    revealDelay
  });

  return card;
}
