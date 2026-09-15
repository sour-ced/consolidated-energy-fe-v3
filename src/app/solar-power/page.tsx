import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import SubcategoryModules from "@/components/SubcategoryModules";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Solar Power | Consolidated Energy",
  description:
    "Solar power systems for new and existing homes, plus battery storage. Australian owned and operated, CEC accredited design and installation.",
};

const SOLAR_FEATURES = [
  { icon: "shieldCheck" as const, label: "Fully Warranted", description: "Components and installation backed end to end." },
  { icon: "panel" as const, label: "Leading Brand Panels", description: "Leading brand panels and inverters." },
  { icon: "badge" as const, label: "CEC Accredited", description: "Accredited electricians and installers." },
  { icon: "home" as const, label: "Australian Owned", description: "Australian owned and operated." },
  { icon: "mapPin" as const, label: "National Coverage", description: "Servicing NSW, ACT, QLD, VIC and WA." },
  { icon: "leaf" as const, label: "Clean Energy Council", description: "Clean Energy Council associate member." },
];

export default function SolarPowerPage() {
  return (
    <>
      <ProductHero
        eyebrow="Product Range"
        title="Solar Power"
        tagline="Putting the power of the sun to work for you"
        description="Solar power reduces both your electricity bills and your carbon footprint. Every kilowatt of solar power added to your home or business can produce up to 4kWh* of free electricity, with most Australian homes suited to a 3.0kW to 5.0kW system depending on usage and location."
        variant="solar"
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
            Clean, sustainable energy
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink max-w-2xl mb-6">
            Make the sun work for you.
          </h2>
          <p className="text-ink/60 text-[15px] leading-relaxed max-w-2xl">
            Consolidated Energy is a major supplier to the building industry
            and an associate member of the Clean Energy Council, employing
            accredited CEC designers and installers across residential,
            commercial and wholesale solar systems.
          </p>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="Solar Power"
        title="Why Consolidated Energy solar"
        items={SOLAR_FEATURES}
      />

      <SubcategoryModules
        eyebrow="The Range"
        title="Generation, storage and hot water"
        items={[
          {
            icon: "panel",
            title: "Solar Panels & Inverters",
            description: "Leading brand panels and inverters sized to the home or business.",
          },
          {
            icon: "battery",
            title: "Battery Storage",
            description: "Tesla, Enphase, LG Chem and sonnen battery storage options.",
            specs: ["Tesla Powerwall", "Enphase", "LG Chem ESS", "sonnen"],
          },
          {
            icon: "sun",
            title: "Solar Hot Water",
            description: "Rooftop solar hot water systems for new and existing homes.",
          },
        ]}
      />

      <ProductRange exclude="solar" />
      <ContactSection />
    </>
  );
}
