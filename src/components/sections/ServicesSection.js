import { createSectionHeader } from "../shared/SectionHeader.js";
import { createInfoCard } from "../shared/InfoCard.js";
import { createContainer, createElement } from "../../utils/dom.js";

export function createServicesSection(content) {
  const cards = content.services.map((service, index) =>
    createInfoCard(service, "service", 180 + index * 80)
  );

  return createElement("section", {
    className: "section section--light",
    attrs: { id: "services" },
    children: [
      createContainer([
        createSectionHeader({
          eyebrow: "Services",
          title: "Growth Services Built for Results",
          description:
            "Every engagement is structured to improve your visibility, lead quality, and conversion performance."
        }),
        createElement("div", {
          className: "card-grid card-grid--three",
          children: cards
        })
      ])
    ]
  });
}
