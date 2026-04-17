import { createActionGroup } from "../shared/ActionButtons.js";
import { createContainer, createElement } from "../../utils/dom.js";

function createNav(brand, links) {
  const linkNodes = links.map((link) =>
    createElement("a", {
      className: "nav__link",
      text: link.label,
      attrs: { href: link.href }
    })
  );

  return createElement("nav", {
    className: "nav",
    attrs: { "aria-label": "Primary navigation" },
    children: [
      createElement("a", {
        className: "brand-mark",
        text: brand,
        attrs: { href: "#top" }
      }),
      createElement("div", {
        className: "nav__links",
        children: linkNodes
      })
    ]
  });
}

function createMetricList(metrics) {
  const metricItems = metrics.map((metric, index) =>
    createElement("li", {
      className: "hero-metric",
      revealDelay: 220 + index * 70,
      children: [
        createElement("p", {
          className: "hero-metric__value",
          text: metric.value
        }),
        createElement("p", {
          className: "hero-metric__label",
          text: metric.label
        })
      ]
    })
  );

  return createElement("ul", {
    className: "hero-metrics",
    attrs: { role: "list" },
    children: metricItems
  });
}

export function createHeroSection(content) {
  const { brand, navigation, hero } = content;

  return createElement("section", {
    className: "hero-section",
    attrs: { id: "top" },
    children: [
      createElement("div", { className: "hero-shape hero-shape--one", attrs: { "aria-hidden": "true" } }),
      createElement("div", { className: "hero-shape hero-shape--two", attrs: { "aria-hidden": "true" } }),
      createContainer([
        createNav(brand, navigation),
        createElement("div", {
          className: "hero-content",
          children: [
            createElement("div", {
              className: "hero-copy",
              children: [
                createElement("p", {
                  className: "hero-eyebrow",
                  text: hero.eyebrow,
                  revealDelay: 0
                }),
                createElement("h1", {
                  className: "hero-title",
                  text: hero.headline,
                  revealDelay: 80
                }),
                createElement("p", {
                  className: "hero-subtext",
                  text: hero.subtext,
                  revealDelay: 140
                }),
                createActionGroup(hero.primaryCta, hero.secondaryCta)
              ]
            }),
            createMetricList(hero.metrics)
          ]
        })
      ])
    ]
  });
}
