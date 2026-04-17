import HeroSection from "./components/sections/HeroSection";
import TrustStripSection from "./components/sections/TrustStripSection";
import ServicesSection from "./components/sections/ServicesSection";
import CaseStudiesSection from "./components/sections/CaseStudiesSection";
import ProcessSection from "./components/sections/ProcessSection";
import WhySkylineSection from "./components/sections/WhySkylineSection";
import FinalCtaSection from "./components/sections/FinalCtaSection";
import { siteContent } from "./data/siteContent";

export default function App() {
  return (
    <div className="bg-white text-ink">
      <HeroSection content={siteContent.hero} brand={siteContent.brand} navLinks={siteContent.navLinks} />
      <TrustStripSection content={siteContent.trustStrip} />
      <ServicesSection content={siteContent.services} />
      <CaseStudiesSection content={siteContent.caseStudies} />
      <ProcessSection content={siteContent.process} />
      <WhySkylineSection content={siteContent.whySkyline} />
      <FinalCtaSection content={siteContent.finalCta} />
    </div>
  );
}
