import { createActionGroup } from "../shared/ActionButtons.js";
import { createContainer, createElement } from "../../utils/dom.js";

export function createFinalCtaSection(content) {
  return createElement("section", {
    className: "section section--cta",
    attrs: { id: "grow" },
    children: [
      createContainer([
        createElement("div", {
          className: "cta-panel",
          children: [
            createElement("h2", {
              className: "cta-panel__title",
              text: content.cta.headline,
              revealDelay: 0
            }),
            createElement("p", {
              className: "cta-panel__description",
              text: content.cta.subtext,
              revealDelay: 90
            }),
            createActionGroup(content.cta.primary, content.cta.secondary)
          ]
        })
      ])
    ]
  });
}
