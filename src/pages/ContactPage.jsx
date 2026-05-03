import PageHeader from "../components/layout/PageHeader";
import ContactFormSection from "../components/sections/ContactFormSection";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Get in Touch"
        subtitle="Ready to build your growth machine? Let's talk."
      />
      <ContactFormSection />
    </>
  );
}
