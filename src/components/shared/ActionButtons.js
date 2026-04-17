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
  const children = [createActionButton(primary)];

  if (secondary) {
    children.push(createActionButton(secondary, "secondary"));
  }

  return createElement("div", {
    className: "action-group",
    children,
    revealDelay: 150
  });
}
