import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import SubcategoryModules from "@/components/SubcategoryModules";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Air Conditioning | Consolidated Energy",
  description:
    "The world's best air conditioning brands backed by service and support, from ducted whole-house systems to split and multi-split units. All the best brands, under one roof.",
};

export default function AirConditioningPage() {
  return (
    <>
      <ProductHero
        eyebrow="Product Range"
        title="Air Conditioning"
        tagline="The world's best air conditioning brands backed by service and support."
        description="We help customers select air conditioning systems that balance budget, comfort, climate control and energy efficiency &ndash; from single-room split systems to multi-split, mini-ducted and fully-ducted whole-house solutions."
        variant="aircon"
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
            All the best brands, under one roof
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-brand-dark max-w-2xl mb-10">
            Manufacturer-independent advice, so you get the system that
            actually suits your home.
          </h2>
          <p className="text-black/60 text-[15px] leading-relaxed max-w-2xl">
            Choosing a system with the right power output matters &ndash; an
            undersized unit struggles to keep up, while an oversized one
            costs more to run than it needs to. Every installation is backed
            by full warranty on components and installation, carried out by
            licensed electricians and refrigeration mechanics.
          </p>
        </div>
      </section>

      <SubcategoryModules
        eyebrow="Product Range"
        title="Ducted and split systems"
        items={[
          {
            icon: "wind",
            title: "Ducted Air Conditioning",
            description:
              "Whole-house climate control, sized to the home for efficient, even heating and cooling.",
            specs: ["Zoned whole-house control", "Sized to the home", "Fully warranted"],
          },
          {
            icon: "fan",
            title: "Split & Multi Split Systems",
            description:
              "Single-room and multi-zone systems from leading manufacturers, installed and fully warranted.",
            specs: ["Single-room & multi-zone", "Leading brand units", "Licensed installation"],
          },
        ]}
      />

      <ProductRange exclude="aircon" />
      <ContactSection />
    </>
  );
}
