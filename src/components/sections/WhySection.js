import { createSectionHeader } from "../shared/SectionHeader.js";
import { createInfoCard } from "../shared/InfoCard.js";
import { createContainer, createElement } from "../../utils/dom.js";

export function createWhySection(content) {
  const reasons = content.whySkyline.map((item, index) =>
    createInfoCard(item, "outcome", 180 + index * 80)
  );

  return createElement("section", {
    className: "section section--tint",
    attrs: { id: "why-skyline" },
    children: [
      createContainer([
        createSectionHeader({
          eyebrow: "Why Choose Skyline",
          title: "Why Teams Choose Skyline Over Generic Agencies",
          description:
            "No fluff, no vanity metrics, and no long delays between strategy and execution."
        }),
        createElement("div", {
          className: "card-grid card-grid--three",
          children: reasons
        })
      ])
    ]
  });
}
