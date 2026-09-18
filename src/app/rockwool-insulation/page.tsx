import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import SubcategoryModules from "@/components/SubcategoryModules";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Stone / Mineral Wool Insulation | Consolidated Energy",
  description:
    "Stone and mineral wool insulation from Consolidated Energy — a high-performance, non-combustible option for roofs, facades and interiors.",
};

export default function RockwoolInsulationPage() {
  return (
    <>
      <ProductHero
        eyebrow="Insulation"
        title="Stone / Mineral Wool Insulation"
        tagline="High-performance rigid insulation for demanding applications"
        description="Stone and mineral fibre wool is an ideal insulating material, from the roof to the facade and from interiors to specific areas."
        variant="insulation"
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <p className="text-ink/60 text-[15px] leading-relaxed">
            We supply a range of brands of stone and mineral fibre wool in
            multiple thicknesses and dimensions, designed to meet
            non-combustion fire safety requirements.
          </p>
          <p className="text-ink/60 text-[15px] leading-relaxed">
            Our local offices can provide guidance on specific applications,
            whether it&apos;s for wall cavities, ceilings or high-performance
            builds with demanding specifications.
          </p>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="Why It Matters"
        title="Stone / mineral wool benefits"
        items={[
          {
            icon: "shield",
            label: "Non-Combustible",
            description: "Fire-resilient by nature, reducing fire risk.",
          },
          {
            icon: "thermometer",
            label: "Temperature Maintenance",
            description: "Retains heat and helps maintain consistent temperatures.",
          },
          {
            icon: "wave",
            label: "Noise Reduction",
            description: "Provides acoustic absorption alongside thermal performance.",
          },
          {
            icon: "badge",
            label: "Robust & Durable",
            description: "Built to hold its shape and performance over time.",
          },
          {
            icon: "leaf",
            label: "Sustainable",
            description: "Made with sustainability in mind, from natural fibres.",
          },
          {
            icon: "droplet",
            label: "Water Resistant",
            description: "Water properties suited to a range of building designs.",
          },
        ]}
      />

      <SubcategoryModules
        eyebrow="Product Range"
        title="Stone / mineral wool applications"
        items={[
          {
            icon: "wall",
            title: "Wall Insulation",
            description:
              "Excellent thermal performance year-round, with slabs offering thermal mass for summer comfort.",
            specs: ["Blocks external heat", "Thermal mass for summer comfort"],
          },
          {
            icon: "home",
            title: "Ceiling Insulation",
            description:
              "Reduces heating and cooling costs while keeping indoor temperatures consistent.",
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
