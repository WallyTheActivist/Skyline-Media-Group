import { createElement } from "../../utils/dom.js";

export function createProcessStep(step, index) {
  return createElement("article", {
    className: "process-step",
    revealDelay: index * 90,
    children: [
      createElement("p", {
        className: "process-step__eyebrow",
        text: step.step
      }),
      createElement("h3", {
        className: "process-step__title",
        text: step.title
      }),
      createElement("p", {
        className: "process-step__description",
        text: step.description
      })
    ]
  });
}
