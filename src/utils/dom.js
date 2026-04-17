export function createElement(tag, options = {}) {
  const {
    className = "",
    text = "",
    html = "",
    attrs = {},
    children = [],
    revealDelay = null
  } = options;

  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  if (html) {
    element.innerHTML = html;
  }

  Object.entries(attrs).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      element.setAttribute(key, String(value));
    }
  });

  children.filter(Boolean).forEach((child) => element.appendChild(child));

  if (revealDelay !== null) {
    element.setAttribute("data-reveal", "");
    element.style.setProperty("--reveal-delay", `${revealDelay}ms`);
  }

  return element;
}

export function createContainer(children = [], className = "container") {
  return createElement("div", { className, children });
}
