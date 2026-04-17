import { createSectionHeader } from "../shared/SectionHeader.js";
import { createContainer, createElement } from "../../utils/dom.js";

function createInputField({ id, label, type = "text", placeholder = "", required = false, isTextArea = false }) {
  const field = isTextArea
    ? createElement("textarea", {
        className: "contact-field__input contact-field__input--textarea",
        attrs: {
          id,
          name: id,
          placeholder,
          required: required ? "required" : null,
          rows: 5
        }
      })
    : createElement("input", {
        className: "contact-field__input",
        attrs: {
          id,
          name: id,
          type,
          placeholder,
          required: required ? "required" : null
        }
      });

  return createElement("label", {
    className: "contact-field",
    attrs: { for: id },
    children: [
      createElement("span", {
        className: "contact-field__label",
        text: label
      }),
      field
    ]
  });
}

export function createContactSection(content) {
  const form = createElement("form", {
    className: "contact-form",
    attrs: { id: "contact-form", novalidate: "novalidate" },
    children: [
      createInputField({ id: "name", label: "Name", placeholder: "Your full name", required: true }),
      createInputField({
        id: "email",
        label: "Email",
        type: "email",
        placeholder: "you@company.com",
        required: true
      }),
      createInputField({
        id: "message",
        label: "Message",
        placeholder: "Tell us about your goals",
        required: true,
        isTextArea: true
      }),
      createElement("button", {
        className: "button button--primary button--submit",
        text: content.contact.submitText,
        attrs: { type: "submit" }
      }),
      createElement("p", {
        className: "form-status",
        attrs: { id: "form-status", role: "status", "aria-live": "polite" }
      })
    ],
    revealDelay: 180
  });

  return createElement("section", {
    className: "section section--contact",
    attrs: { id: "contact" },
    children: [
      createContainer([
        createElement("div", {
          className: "contact-grid",
          children: [
            createSectionHeader({
              eyebrow: "Contact",
              title: content.contact.title,
              description: content.contact.description
            }),
            form
          ]
        })
      ])
    ]
  });
}
