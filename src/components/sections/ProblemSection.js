import { createSectionHeader } from "../shared/SectionHeader.js";
import { createInfoCard } from "../shared/InfoCard.js";
import { createContainer, createElement } from "../../utils/dom.js";

export function createProblemSection(content) {
  const painCards = content.problem.painPoints.map((item, index) =>
    createInfoCard(item, "problem", 170 + index * 70)
  );

  return createElement("section", {
    className: "section section--problem",
    attrs: { id: "problem" },
    children: [
      createContainer([
        createSectionHeader({
          eyebrow: "The Problem",
          title: content.problem.title,
          description: content.problem.description
        }),
        createElement("div", {
          className: "card-grid card-grid--three",
          children: painCards
        })
      ])
    ]
  });
}
