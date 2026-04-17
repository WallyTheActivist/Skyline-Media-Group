import { createSectionHeader } from "../shared/SectionHeader.js";
import { createInfoCard } from "../shared/InfoCard.js";
import { createContainer, createElement } from "../../utils/dom.js";

function createResultsMetrics(metrics) {
  const items = metrics.map((metric, index) =>
    createElement("article", {
      className: "results-metric",
      revealDelay: 120 + index * 70,
      children: [
        createElement("p", {
          className: "results-metric__value",
          text: metric.value
        }),
        createElement("p", {
          className: "results-metric__label",
          text: metric.label
        }),
        createElement("p", {
          className: "results-metric__detail",
          text: metric.detail
        })
      ]
    })
  );

  return createElement("div", {
    className: "results-metric-grid",
    children: items
  });
}

export function createResultsSection(content) {
  const caseCards = content.results.caseStudies.map((study, index) =>
    createInfoCard(
      {
        icon: study.icon,
        title: study.title,
        description: study.description,
        supportingText: study.result
      },
      "results",
      200 + index * 80
    )
  );

  return createElement("section", {
    className: "section section--results",
    attrs: { id: "results" },
    children: [
      createContainer([
        createSectionHeader({
          eyebrow: "Results And Proof",
          title: content.results.title,
          description: content.results.description
        }),
        createResultsMetrics(content.results.metrics),
        createElement("div", {
          className: "card-grid card-grid--three results-cases",
          children: caseCards
        })
      ])
    ]
  });
}
