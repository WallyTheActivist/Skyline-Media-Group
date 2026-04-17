import { createSectionHeader } from "../shared/SectionHeader.js";
import { createProcessStep } from "../shared/ProcessStep.js";
import { createContainer, createElement } from "../../utils/dom.js";

export function createProcessSection(content) {
  const steps = content.process.map((step, index) => createProcessStep(step, index));

  return createElement("section", {
    className: "section section--deep",
    attrs: { id: "process" },
    children: [
      createContainer([
        createSectionHeader({
          eyebrow: "Process",
          title: "Tracer Bullet Execution Model",
          description:
            "We start with a focused, working path to value, then refine with data and customer feedback.",
          centered: true
        }),
        createElement("div", {
          className: "process-grid",
          children: steps
        })
      ])
    ]
  });
}
