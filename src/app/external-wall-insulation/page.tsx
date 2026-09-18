import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import SubcategoryModules from "@/components/SubcategoryModules";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "External Wall Insulation | Consolidated Energy",
  description:
    "External wall insulation from Consolidated Energy improves thermal performance through the wall cavity, cutting heat loss and gain year-round.",
};

export default function ExternalWallInsulationPage() {
  return (
    <>
      <ProductHero
        eyebrow="Insulation"
        title="External Wall Insulation"
        tagline="Stop heat and noise moving through your walls"
        description="Homes can lose up to 25% of heat through external walls in winter, with similar heat gain in summer. Wall insulation acts as a barrier to reduce this thermal transfer."
        variant="insulation"
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <p className="text-ink/60 text-[15px] leading-relaxed">
            Walls are an open gate to the outside world, letting heat and
            noise travel through them with ease. Insulating the wall cavity
            improves comfort and reduces energy costs across the year.
          </p>
          <p className="text-ink/60 text-[15px] leading-relaxed">
            We supply Fletcher Insulation products, a leading Australian
            manufacturer focused on innovation in building construction
            insulation and sustainable solutions, alongside stone and
            mineral wool options.
          </p>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="Why It Matters"
        title="Wall insulation benefits"
        items={[
          {
            icon: "thermometer",
            label: "Warmer Winters, Cooler Summers",
            description: "Keeps heat out in summer and in during winter.",
          },
          {
            icon: "bolt",
            label: "Lower Energy Bills",
            description: "Reduces the energy needed to heat and cool the home.",
          },
          {
            icon: "leaf",
            label: "Reduced Emissions",
            description: "Less energy use means a smaller carbon footprint.",
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
        title="Wall insulation products"
        items={[
          {
            icon: "wall",
            title: "Bradford Wall Insulation",
            description:
              "Glasswool wall insulation with R-Values from R2.0 to R2.7.",
            specs: [
              "R2.0–R2.7 range",
              "Up to 65% recycled content",
              "70-year warranty",
              "Non-combustible",
            ],
          },
          {
            icon: "cloud",
            title: "Stone / Mineral Wool Wall Insulation",
            description:
              "Natural stone and mineral wool insulation for the wall cavity.",
            specs: [
              "Fire resilience",
              "Noise reduction",
              "Robust and sustainable",
              "Adaptable for building design",
            ],
          },
        ]}
      />

      <ProductRange exclude="insulation" />
      <ContactSection />
    </>
  );
}
