import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import SubcategoryModules from "@/components/SubcategoryModules";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Roof Sarking | Consolidated Energy",
  description:
    "Roof sarking from Consolidated Energy forms a protective second skin under the roof, improving thermal performance and protecting against rain, dust and embers.",
};

export default function RoofSarkingPage() {
  return (
    <>
      <ProductHero
        eyebrow="Insulation"
        title="Roof Sarking"
        tagline="A protective second skin under your roof"
        description="Roof sarking is a pliable laminated membrane installed during new construction, extensions, renovations or roof restoration."
        variant="insulation"
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <p className="text-ink/60 text-[15px] leading-relaxed">
            Sarking protects the home&apos;s frame during construction, then
            protects the roof cavity afterwards from storm-driven rain and
            dust, while improving thermal performance and resisting bushfire
            embers.
          </p>
          <p className="text-ink/60 text-[15px] leading-relaxed">
            Combined with an air-space, sarking can shield the home from up
            to 97% of radiant heat, contributing to energy efficiency and
            comfort while reducing the risk of harmful condensation.
          </p>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="Why It Matters"
        title="Roof sarking benefits"
        items={[
          {
            icon: "sun",
            label: "Reflects Radiant Heat",
            description: "Shields the home from up to 97% of radiant heat when combined with an air-space.",
          },
          {
            icon: "droplet",
            label: "Storm & Dust Protection",
            description: "Protects the roof cavity from storm-driven rain and dust.",
          },
          {
            icon: "shield",
            label: "Bushfire Ember Resistance",
            description: "Helps resist embers during bushfire conditions.",
          },
          {
            icon: "shieldCheck",
            label: "Reduces Condensation Risk",
            description: "Helps reduce the risk of harmful condensation in the roof space.",
          },
        ]}
        columns={4}
      />

      <SubcategoryModules
        eyebrow="Product Range"
        title="Roof sarking products"
        items={[
          {
            icon: "shieldCheck",
            title: "Bradford Building Foil",
            description: "Reflective foil that meets Australian Standards.",
            specs: ["Meets AS 4200.1 and AS 4859.1", "Suits new builds and re-roofing"],
          },
          {
            icon: "sun",
            title: "Polyair Thermo Reflective",
            description: "Reflective thermal membrane for the roof cavity.",
            specs: ["Reflective thermal membrane", "Improves roof cavity performance"],
          },
          {
            icon: "sun",
            title: "Polyair Performa XHD",
            description: "Extra heavy-duty reflective membrane.",
            specs: ["Reflects up to 95% of radiant heat", "Extra heavy duty"],
          },
          {
            icon: "layers",
            title: "Bradford Thermofoil Medium Duty Foil",
            description: "Medium duty foil for roofing, cladding and duct wrap.",
            specs: ["Suits roofing and cladding", "Suits duct wrap applications"],
          },
        ]}
      />

      <ProductRange exclude="insulation" />
      <ContactSection />
    </>
  );
}
