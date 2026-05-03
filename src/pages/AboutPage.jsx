import PageHeader from "../components/layout/PageHeader";
import WhySkylineSection from "../components/sections/WhySkylineSection";
import ProcessSection from "../components/sections/ProcessSection";
import TrustStripSection from "../components/sections/TrustStripSection";
import FinalCtaSection from "../components/sections/FinalCtaSection";
import { siteContent } from "../data/siteContent";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About us"
        title="About Skyline"
        subtitle="We're a growth-focused digital agency that builds systems, not just websites."
      />
      <WhySkylineSection content={siteContent.whySkyline} />
      <ProcessSection content={siteContent.process} />
      <TrustStripSection content={siteContent.trustStrip} />
      <FinalCtaSection content={siteContent.finalCta} />
    </>
  );
}
