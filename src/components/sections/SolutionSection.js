import { createSectionHeader } from "../shared/SectionHeader.js";
import { createInfoCard } from "../shared/InfoCard.js";
import { createContainer, createElement } from "../../utils/dom.js";

export function createSolutionSection(content) {
  const pillars = content.solution.pillars.map((item, index) =>
    createInfoCard(item, "solution", 170 + index * 70)
  );

  return createElement("section", {
    className: "section section--light",
    attrs: { id: "solution" },
    children: [
      createContainer([
        createSectionHeader({
          eyebrow: "The Skyline Solution",
          title: content.solution.title,
          description: content.solution.description
        }),
        createElement("div", {
          className: "card-grid card-grid--three",
          children: pillars
        })
      ])
    ]
  });
}
