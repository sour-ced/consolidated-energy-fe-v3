import type { Metadata } from "next";
import Image from "next/image";
import ProductHero from "@/components/ProductHero";
import InsulationTypeNav from "@/components/InsulationTypeNav";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import SubcategoryModules from "@/components/SubcategoryModules";
import Reveal from "@/components/Reveal";
import AdviceCallout from "@/components/AdviceCallout";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";
import { insulationType } from "@/lib/insulation";

export const metadata: Metadata = {
  title: "Ceiling Insulation | Consolidated Energy",
  description:
    "Ceiling insulation helps reduce heat transfer through the roof space, keeping homes warmer in winter and cooler in summer.",
};

const TYPE = insulationType("/ceiling-insulation");

export default function CeilingInsulationPage() {
  return (
    <>
      <ProductHero
        eyebrow="Insulation"
        title="Ceiling Insulation"
        tagline="Improve year-round comfort and energy efficiency"
        description="Ceiling insulation helps reduce heat transfer through the roof space, keeping homes warmer in winter and cooler in summer."
        variant="insulation"
        imageSrc={TYPE.src}
        imageAlt={TYPE.alt}
      />
      <InsulationTypeNav current={TYPE.href} />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <p className="text-ink/60 text-[15px] leading-relaxed">
            By helping maintain a more consistent indoor temperature,
            effective ceiling insulation can reduce reliance on heating and
            air conditioning, lowering household energy use and running costs
            while creating a more comfortable home throughout the year.
          </p>
          <p className="text-ink/60 text-[15px] leading-relaxed">
            Consolidated Energy offers its own range of glasswool ceiling
            batts, alongside insulation solutions from leading manufacturers
            including Fletcher Insulation and Bradford, as well as stone and
            mineral fibre products for applications requiring enhanced
            thermal, acoustic or fire performance.
          </p>
          <p className="text-ink/60 text-[15px] leading-relaxed">
            With a range of products and R-values available, our team can
            help identify the right insulation solution for your project,
            supported by supply and installation across our national network.
          </p>
        </div>
      </section>

      <section className="bg-section py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
            On the Job
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink max-w-xl mb-12">
            Ceiling insulation in Australian homes
          </h2>
          <Reveal className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2/1] overflow-hidden bg-ink/5">
            <Image
              src="/images/insulation/ceiling-install-roof-truss.jpg"
              alt="Installer fitting glasswool batts between roof trusses"
              fill
              sizes="(max-width: 1400px) 100vw, 1320px"
              className="object-cover object-[50%_70%]"
            />
          </Reveal>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="Why It Matters"
        title="Benefits of Ceiling Insulation"
        items={[
          {
            icon: "thermometer",
            label: "Warmer in Winter, Cooler in Summer",
            description:
              "Helps reduce heat transfer through the ceiling for greater year-round comfort.",
          },
          {
            icon: "bolt",
            label: "Lower Energy Costs",
            description:
              "Reduces reliance on heating and cooling, helping lower household energy costs.",
          },
          {
            icon: "leaf",
            label: "Reduced Environmental Impact",
            description:
              "Lower household energy consumption can help reduce associated greenhouse gas emissions.",
          },
          {
            icon: "wind",
            label: "Low-Allergen Options",
            description:
              "Selected insulation products are designed with low-allergen properties, supporting a healthier and more comfortable home environment.",
          },
          {
            icon: "badge",
            label: "Australian Standards",
            description:
              "Products are selected to meet relevant Australian Standards for insulation performance and quality.",
          },
          {
            icon: "speakerMute",
            label: "Improved Acoustic Comfort",
            description:
              "Selected products can also help reduce sound transfer, creating a quieter indoor environment.",
          },
        ]}
      />

      <SubcategoryModules
        eyebrow="Product Range"
        title="Ceiling Insulation Products"
        columns={2}
        items={[
          {
            icon: "home",
            title: "Consolidated Energy Ceiling Insulation",
            image: {
              src: "/images/insulation/ceiling-insulation-bags-range.jpg",
              alt: "Consolidated Energy ceiling insulation bags in R5.0, R4.1 and R3.0",
              fit: "cover",
            },
            description: [
              "Consolidated Energy Ceiling Batts are glasswool insulation designed to reduce heat transfer through the ceiling, helping create more comfortable and energy-efficient homes and buildings throughout the year.",
              "Available in a range of R-values and thicknesses, our ceiling batts provide a practical and versatile insulation solution for residential and commercial construction. Different thermal ratings allow the appropriate product to be selected to suit climate zones, building designs and project energy-efficiency requirements.",
              "Lightweight and easy to handle, Consolidated Energy Ceiling Batts are designed for efficient installation across a wide range of building applications.",
            ],
            specsLabel: "Key features and benefits include:",
            specs: [
              "High thermal performance to help reduce heat gain in summer and heat loss in winter",
              "Range of R-values and thicknesses to suit different project requirements",
              "Helps maintain more comfortable and consistent indoor temperatures",
              "Can reduce reliance on heating and cooling",
              "Lightweight and practical to handle and install",
              "Suitable for residential and commercial construction",
            ],
            download: {
              label: "Consolidated Energy Ceiling Insulation Ceiling Data Sheet",
              href: "/downloads/insulation/Consolidated-Energy-TDS-v3.pdf",
            },
          },
          {
            icon: "layers",
            title: "Fletcher Insulation",
            image: {
              src: "/images/insulation/products/fletcher-pink-batts-ceiling.jpg",
              alt: "Fletcher Insulation Pink Batts ceiling insulation pack",
              fit: "contain",
            },
            description: [
              "Fletcher Insulation is a leading Australian insulation manufacturer providing thermal and acoustic solutions for residential and commercial construction.",
              "Consolidated Energy supplies a range of Fletcher Insulation products to suit different building requirements and applications.",
            ],
            download: {
              label: "Fletcher Insulation Ceiling Batts Data Sheet",
              href: "/downloads/insulation/TDS-Pink-Batts-Ceiling-Rev7-170225.pdf",
            },
          },
          {
            icon: "star",
            title: "Bradford Gold",
            image: {
              src: "/images/insulation/products/bradford-gold-ceiling.jpg",
              alt: "Bradford Gold Hi-Performance R6.0 ceiling batts pack in front of insulated wall framing",
              fit: "cover",
            },
            description: [
              "Bradford Gold ceiling insulation is manufactured from glasswool and is available in a range of R-values to suit different residential applications.",
              "Designed to improve the thermal performance of the home, Bradford Gold helps maintain more comfortable indoor temperatures while reducing reliance on heating and cooling.",
            ],
            specsLabel: "Features and benefits include:",
            specs: [
              "Helps keep homes warmer in winter and cooler in summer",
              "Improves household energy efficiency",
              "Made from up to 65% recycled content",
              "Non-combustible",
              "Low allergen",
              "70-year warranty",
            ],
            download: {
              label: "Bradford Gold Ceiling Batts Data Sheet",
              href: "/downloads/insulation/gold-ceiling-datasheet-ma79.pdf",
            },
          },
          {
            icon: "shield",
            title: "Stone / Mineral Fibre Ceiling Insulation",
            image: {
              src: "/images/insulation/products/stone-mineral-wool-batts.jpg",
              alt: "Stack of stone and mineral fibre insulation batts",
              fit: "contain",
            },
            description: [
              "Stone and mineral fibre insulation provides high-performance thermal and acoustic insulation for applications where additional performance may be required.",
              "Available in a range of thicknesses and dimensions, these products can help reduce heat transfer, improve acoustic performance and provide enhanced fire resistance.",
            ],
            specsLabel: "Key benefits include:",
            specs: [
              "Thermal performance",
              "Heat retention",
              "Acoustic absorption",
              "Fire-resistant properties",
              "Range of thicknesses and specifications available",
            ],
          },
        ]}
      />

      <AdviceCallout>
        {"For advice on the most appropriate ceiling insulation product, R-value or application for your project, contact the Consolidated Energy team."}
      </AdviceCallout>

      <ProductRange exclude="insulation" />
      <ContactSection />
    </>
  );
}
