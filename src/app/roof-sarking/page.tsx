import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import SubcategoryModules from "@/components/SubcategoryModules";
import AdviceCallout from "@/components/AdviceCallout";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Roof Sarking | Consolidated Energy",
  description:
    "Roof sarking is a pliable membrane installed beneath the roof covering to provide an additional layer of protection for the home.",
};

export default function RoofSarkingPage() {
  return (
    <>
      <ProductHero
        eyebrow="Insulation"
        title="Roof Sarking"
        tagline="A protective second skin for your roof"
        description="Roof sarking is a pliable membrane installed beneath the roof covering to provide an additional layer of protection for the home."
        variant="insulation"
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <p className="text-ink/60 text-[15px] leading-relaxed">
            Suitable for new construction, extensions, renovations and roof
            restoration, sarking helps protect the building frame during
            construction and, once the roof is complete, provides an important
            barrier against storm-driven rain and dust. It can also improve
            thermal performance, help manage condensation and provide
            additional protection against bushfire ember entry.
          </p>
          <p className="text-ink/60 text-[15px] leading-relaxed">
            When combined with an appropriate air space, reflective roof
            sarking can significantly reduce radiant heat entering the roof
            cavity, contributing to a more comfortable and energy-efficient
            home.
          </p>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="Why It Matters"
        title="Roof Sarking Benefits"
        items={[
          {
            icon: "sun",
            label: "Improved Thermal Performance",
            description:
              "Reflective sarking helps reduce radiant heat entering the roof cavity, supporting greater indoor comfort and energy efficiency.",
          },
          {
            icon: "cloud",
            label: "Storm & Dust Protection",
            description:
              "Provides an additional barrier against storm-driven rain, wind and dust entering the roof cavity.",
          },
          {
            icon: "shield",
            label: "Bushfire Ember Protection",
            description:
              "Selected products can help protect against ember entry in bushfire-prone areas when installed as part of a compliant roofing system.",
          },
          {
            icon: "droplet",
            label: "Condensation Management",
            description:
              "Helps manage moisture and reduce the risk of condensation forming within the roof space.",
          },
          {
            icon: "layers",
            label: "Added Roof Protection",
            description:
              "Provides an additional protective layer beneath the roof covering during construction and throughout the life of the building.",
          },
        ]}
      />

      <SubcategoryModules
        eyebrow="Product Range"
        title="Roof Sarking Products"
        columns={3}
        items={[
          {
            icon: "layers",
            title: "Bradford Thermofoil",
            description: [
              "Bradford Thermofoil Medium Duty Foil is a strong, reflective building membrane designed for use in residential and commercial roofing applications.",
              "Its woven construction combines strength and durability with a reflective surface to support the thermal performance of the roof system.",
            ],
            specsLabel: "Key features include:",
            specs: [
              "Reflective surface to help reduce radiant heat",
              "Strong woven construction",
              "Suitable for new construction and re-roofing applications",
              "Designed for residential and commercial roofing",
              "Suitable as an external facing for air conditioning duct wrap",
              "Tested to relevant Australian Standards",
            ],
          },
          {
            icon: "sun",
            title: "Polyair Thermo Reflective",
            description:
              "Polyair Thermo Reflective is a reflective thermal membrane designed to help improve the thermal performance of the roof cavity.",
            specsLabel: "Key features include:",
            specs: [
              "Reflective thermal performance",
              "Helps reduce radiant heat transfer",
              "Suitable for a range of roofing applications",
              "Supports improved roof cavity performance",
            ],
          },
          {
            icon: "shieldCheck",
            title: "Polyair Performa XHD",
            description:
              "Polyair Performa XHD is an extra heavy-duty reflective membrane designed for applications requiring increased strength and durability.",
            specsLabel: "Key features include:",
            specs: [
              "Extra heavy-duty construction",
              "High reflective performance",
              "Helps reduce radiant heat transfer",
              "Suitable for demanding roofing applications",
            ],
          },
        ]}
      />

      <AdviceCallout>
        {"For advice on the right roof sarking product for your project or application, contact the Consolidated Energy team."}
      </AdviceCallout>

      <ProductRange exclude="insulation" />
      <ContactSection />
    </>
  );
}
