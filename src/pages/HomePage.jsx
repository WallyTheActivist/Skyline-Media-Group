import StickyCtaBanner from "../components/layout/StickyCtaBanner";
import HeroSection from "../components/sections/HeroSection";
import TrustStripSection from "../components/sections/TrustStripSection";
import ServicesSection from "../components/sections/ServicesSection";
import CaseStudiesSection from "../components/sections/CaseStudiesSection";
import MidCtaSection from "../components/sections/MidCtaSection";
import ProcessSection from "../components/sections/ProcessSection";
import ContactFormSection from "../components/sections/ContactFormSection";
import FinalCtaSection from "../components/sections/FinalCtaSection";
import { siteContent } from "../data/siteContent";

export default function HomePage() {
  return (
    <>
      <StickyCtaBanner />
      <HeroSection content={siteContent.hero} brand={siteContent.brand} />
      <TrustStripSection content={siteContent.trustStrip} />
      <ServicesSection content={siteContent.services} />
      <CaseStudiesSection content={siteContent.caseStudies} />
      <MidCtaSection content={siteContent.midCta} />
      <ProcessSection content={siteContent.process} />
      <ContactFormSection />
      <FinalCtaSection content={siteContent.finalCta} />
    </>
  );
}
