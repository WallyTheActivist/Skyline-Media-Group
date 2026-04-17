import { createSectionHeader } from "../shared/SectionHeader.js";
import { createInfoCard } from "../shared/InfoCard.js";
import { createContainer, createElement } from "../../utils/dom.js";

export function createPortfolioSection(content) {
  const projects = content.portfolio.map((project, index) =>
    createInfoCard(
      {
        icon: project.icon,
        title: project.title,
        description: project.description,
        supportingText: project.result
      },
      "portfolio",
      180 + index * 80
    )
  );

  return createElement("section", {
    className: "section section--light",
    attrs: { id: "portfolio" },
    children: [
      createContainer([
        createSectionHeader({
          eyebrow: "Portfolio Preview",
          title: "Selected Growth Projects",
          description:
            "A scalable case-study structure ready for future expansion as your body of work grows."
        }),
        createElement("div", {
          className: "card-grid card-grid--three",
          children: projects
        })
      ])
    ]
  });
}
