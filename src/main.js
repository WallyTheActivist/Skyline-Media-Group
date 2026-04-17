import { siteContent } from "./content/siteContent.js";
import { createHeroSection } from "./components/sections/HeroSection.js";
import { createServicesSection } from "./components/sections/ServicesSection.js";
import { createWhySection } from "./components/sections/WhySection.js";
import { createPortfolioSection } from "./components/sections/PortfolioSection.js";
import { createProcessSection } from "./components/sections/ProcessSection.js";
import { createTestimonialsSection } from "./components/sections/TestimonialsSection.js";
import { createFinalCtaSection } from "./components/sections/FinalCtaSection.js";
import { createContactSection } from "./components/sections/ContactSection.js";
import { createFooterSection } from "./components/sections/FooterSection.js";
import { createElement } from "./utils/dom.js";

function initRevealObserver() {
  const revealElements = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function initContactForm() {
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");

  if (!form || !status) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "Thanks for reaching out. We will contact you within one business day.";
    form.reset();
  });
}

function buildPage() {
  const app = document.querySelector("#app");

  if (!app) {
    return;
  }

  const main = createElement("main", {
    className: "page-shell",
    attrs: { id: "main-content" },
    children: [
      createHeroSection(siteContent),
      createServicesSection(siteContent),
      createWhySection(siteContent),
      createPortfolioSection(siteContent),
      createProcessSection(siteContent),
      createTestimonialsSection(siteContent),
      createFinalCtaSection(siteContent),
      createContactSection(siteContent)
    ]
  });

  app.replaceChildren(main, createFooterSection(siteContent));

  initRevealObserver();
  initContactForm();

  window.__skylineAppLoaded = true;
}

buildPage();
