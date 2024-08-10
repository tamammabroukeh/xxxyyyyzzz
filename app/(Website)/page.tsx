import {
  AIFeaturesSection,
  CustomerServicesSection,
  FAQSection,
  FeatureSection,
  Header,
  PricingSection,
  SocialMediaSection,
  ThemesSection,
} from "@/components";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <div className="container space-y-20">
        <FeatureSection />
        <ThemesSection />
        <AIFeaturesSection />
        <SocialMediaSection />
        <CustomerServicesSection />
        <PricingSection />
        <FAQSection />
      </div>
    </main>
  );
}
// api
// http://api.scripts-ocean.com/
// doc
// http://api.scripts-ocean.com/api/documentation
