import PageHeader from "../components/layout/PageHeader";
import CaseStudiesSection from "../components/sections/CaseStudiesSection";
import TrustStripSection from "../components/sections/TrustStripSection";
import FinalCtaSection from "../components/sections/FinalCtaSection";
import { siteContent } from "../data/siteContent";

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Portfolio"
        title="Our Work"
        subtitle="Real results from real partnerships. Every project tells a growth story."
      />
      <CaseStudiesSection content={siteContent.caseStudies} />
      <TrustStripSection content={siteContent.trustStrip} />
      <FinalCtaSection content={siteContent.finalCta} />
    </>
  );
}
