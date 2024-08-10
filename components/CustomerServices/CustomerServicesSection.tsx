import { SectionLayout, SubSectionLayout } from "..";

export default function CustomerServicesSection() {
  return (
    <SectionLayout id="services">
      <SubSectionLayout
        description="Our premium 24/7 customer support ensures that help is always available whenever you need it. Benefit from personalized assistance from our team of dedicated experts, ready to guide you through any technical challenges or customization needs."
        exception={true}
        header={`Exceptional Customer Service`}
        title="Customer Service"
      />
    </SectionLayout>
  );
}
