import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import SubcategoryModules from "@/components/SubcategoryModules";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Ceiling Insulation | Consolidated Energy",
  description:
    "Ceiling insulation from Consolidated Energy reduces heat transfer through the roof space, cutting heating and cooling costs by up to 45%.",
};

export default function CeilingInsulationPage() {
  return (
    <>
      <ProductHero
        eyebrow="Insulation"
        title="Ceiling Insulation"
        tagline="Reduce heat transfer through the roof space"
        description="Ceiling insulation keeps homes warmer in winter and cooler in summer, reducing energy bills for heating and cooling by up to 45%."
        variant="insulation"
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <p className="text-ink/60 text-[15px] leading-relaxed">
            Heat moves through the roof space more than almost anywhere else
            in the home, so ceiling insulation is the single most effective
            place to start. It reduces heat transfer year-round, improving
            comfort and lowering household running costs.
          </p>
          <p className="text-ink/60 text-[15px] leading-relaxed">
            We supply Fletcher Insulation products, a leading Australian
            manufacturer focused on innovation in building construction
            insulation and sustainable solutions, alongside stone and
            mineral fibre options for demanding applications.
          </p>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="Why It Matters"
        title="Ceiling insulation benefits"
        items={[
          {
            icon: "thermometer",
            label: "Warmer Winters, Cooler Summers",
            description: "Keeps heat out in summer and in during winter.",
          },
          {
            icon: "bolt",
            label: "Lower Energy Bills",
            description: "Can reduce heating and cooling costs by up to 45%.",
          },
          {
            icon: "leaf",
            label: "Reduced Emissions",
            description: "Less energy use means a smaller carbon footprint.",
          },
          {
            icon: "droplet",
            label: "Low Allergen",
            description: "Formulated to minimise allergens for a healthier home.",
          },
          {
            icon: "badge",
            label: "Australian Standards",
            description: "Meets the highest Australian insulation standards.",
          },
          {
            icon: "shield",
            label: "Non-Combustible",
            description: "Backed by a 70-year warranty, made from up to 65% recycled content.",
          },
        ]}
      />

      <SubcategoryModules
        eyebrow="Product Range"
        title="Ceiling insulation products"
        items={[
          {
            icon: "home",
            title: "Bradford Gold",
            description:
              "Australia's most trusted ceiling insulation, made from up to 65% recycled glasswool.",
            specs: [
              "Warmer in winter, cooler in summer",
              "Up to 65% recycled content",
              "70-year warranty",
              "Non-combustible",
            ],
          },
          {
            icon: "cloud",
            title: "Stone / Mineral Fibre",
            description:
              "Natural stone and mineral fibre insulation for heat retention and acoustic absorption.",
            specs: [
              "Heat retention",
              "Acoustic absorption",
              "Resists the spread of fire",
            ],
          },
        ]}
      />

      <ProductRange exclude="insulation" />
      <ContactSection />
    </>
  );
}
