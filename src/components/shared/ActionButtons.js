import { createElement } from "../../utils/dom.js";

function createActionButton(action, variant = "primary") {
  const className = variant === "primary" ? "button button--primary" : "button button--secondary";

  return createElement("a", {
    className,
    text: action.label,
    attrs: {
      href: action.href
    }
  });
}

export function createActionGroup(primary, secondary) {
  return createElement("div", {
    className: "action-group",
    children: [createActionButton(primary), createActionButton(secondary, "secondary")],
    revealDelay: 150
  });
}
