import { createContainer, createElement } from "../../utils/dom.js";

export function createFooterSection(content) {
  return createElement("footer", {
    className: "site-footer",
    children: [
      createContainer([
        createElement("div", {
          className: "site-footer__inner",
          children: [
            createElement("p", {
              className: "site-footer__brand",
              text: content.footer.tagline
            }),
            createElement("p", {
              className: "site-footer__copyright",
              text: content.footer.copyright
            })
          ]
        })
      ])
    ]
  });
}
