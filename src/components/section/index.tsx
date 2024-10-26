import {
  CTASection,
  FAQSection,
  HeroSection,
  NicheFeatures,
  Portfolio,
  ProcessOverview,
  ServicesOverview,
  Testimonials,
} from "./content";

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <NicheFeatures />
      <Portfolio />
      <Testimonials />
      <ProcessOverview />
      <FAQSection />
      <CTASection />
    </>
  );
}
