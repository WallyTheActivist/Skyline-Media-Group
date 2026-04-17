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
          title: "Built Around Outcomes, Not Activity",
          description:
            "We focus on what moves the business: better conversion paths, disciplined testing, and high-speed execution."
        }),
        createElement("div", {
          className: "card-grid card-grid--three",
          children: reasons
        })
      ])
    ]
  });
}
