import PageHeader from "../components/layout/PageHeader";
import ServicesSection from "../components/sections/ServicesSection";
import ProcessSection from "../components/sections/ProcessSection";
import FinalCtaSection from "../components/sections/FinalCtaSection";
import { siteContent } from "../data/siteContent";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="What we do"
        title="Our Services"
        subtitle="Each service plugs into one growth engine so your website, ads, and social work together."
      />
      <ServicesSection content={siteContent.services} />
      <ProcessSection content={siteContent.process} />
      <FinalCtaSection content={siteContent.finalCta} />
    </>
  );
}
