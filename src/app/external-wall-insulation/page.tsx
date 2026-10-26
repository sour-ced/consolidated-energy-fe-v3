import type { Metadata } from "next";
import Image from "next/image";
import ProductHero from "@/components/ProductHero";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import SubcategoryModules from "@/components/SubcategoryModules";
import AdviceCallout from "@/components/AdviceCallout";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Wall Insulation | Consolidated Energy",
  description:
    "Wall insulation creates a thermal barrier that helps slow heat transfer through external walls, maintaining a more comfortable and consistent indoor temperature throughout the year.",
};

export default function ExternalWallInsulationPage() {
  return (
    <>
      <ProductHero
        eyebrow="Insulation"
        title="Wall Insulation"
        tagline="Improve comfort and efficiency from the outside in"
        description="External walls can be a significant source of heat gain in summer and heat loss in winter. Wall insulation creates a thermal barrier that helps slow this heat transfer, maintaining a more comfortable and consistent indoor temperature throughout the year."
        variant="insulation"
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <p className="text-ink/60 text-[15px] leading-relaxed">
              Effective wall insulation can also reduce reliance on heating and
              cooling, helping lower household energy consumption and running
              costs.
            </p>
            <p className="text-ink/60 text-[15px] leading-relaxed">
              Consolidated Energy offers its own range of glasswool wall batts,
              alongside insulation solutions from leading manufacturers
              including Fletcher Insulation and Bradford, as well as stone and
              mineral wool products for applications requiring enhanced
              thermal, acoustic or fire performance.
            </p>
            <p className="text-ink/60 text-[15px] leading-relaxed">
              With a range of products and R-values available, our team can
              help identify the right wall insulation solution for your
              project, supported by supply and installation across our
              national network.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-section">
            <Image
              src="/images/insulation/wall-insulation-install.jpg"
              alt="Installer fitting glasswool batts between external wall studs"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="Why It Matters"
        title="Wall Insulation Benefits"
        items={[
          {
            icon: "thermometer",
            label: "Warmer in Winter, Cooler in Summer",
            description:
              "Helps reduce heat transfer through external walls for greater year-round comfort.",
          },
          {
            icon: "bolt",
            label: "Lower Energy Costs",
            description:
              "Reduces reliance on heating and cooling, helping lower household energy costs.",
          },
          {
            icon: "speakerMute",
            label: "Improved Acoustic Comfort",
            description:
              "Selected products can help reduce sound transfer through walls and between internal spaces.",
          },
          {
            icon: "leaf",
            label: "Low-Allergen Options",
            description:
              "Selected insulation products offer low-allergen properties for a healthier, more comfortable indoor environment.",
          },
          {
            icon: "badge",
            label: "Australian Standards",
            description:
              "Products are selected to meet relevant Australian Standards and building requirements.",
          },
          {
            icon: "shield",
            label: "Fire-Resistant Options",
            description:
              "Selected wall insulation products offer enhanced fire performance for applications with specific building and safety requirements.",
          },
        ]}
      />

      <SubcategoryModules
        eyebrow="Product Range"
        title="Wall Insulation Products"
        columns={2}
        items={[
          {
            icon: "wall",
            title: "Consolidated Energy Wall Insulation",
            description: [
              "Consolidated Energy Wall Insulation is glasswool and is designed to reduce heat transfer through wall cavities, helping create more comfortable and energy-efficient homes and buildings throughout the year.",
              "Available in a range of R-values, thicknesses and widths, our wall batts provide a practical and versatile insulation solution for residential and commercial construction. Different thermal ratings allow the appropriate product to be selected to suit building designs, climate conditions and project energy-efficiency requirements.",
              "Lightweight and easy to handle, Consolidated Energy Wall Insulation is designed for efficient installation within common wall framing systems across new construction and renovation projects.",
            ],
            specsLabel: "Key features and benefits include:",
            specs: [
              "Effective thermal performance to help reduce heat gain in summer and heat loss in winter",
              "Range of R-values, thicknesses and widths to suit different project requirements",
              "Helps maintain more comfortable and consistent indoor temperatures",
              "Can reduce reliance on heating and cooling",
              "Designed to suit common wall framing systems",
              "Lightweight and practical to handle and install",
              "Suitable for residential and commercial new builds and renovations",
            ],
          },
          {
            icon: "layers",
            title: "Fletcher Insulation",
            description: [
              "Fletcher Insulation is a leading Australian manufacturer of thermal and acoustic insulation solutions for residential and commercial construction.",
              "Consolidated Energy supplies a range of Fletcher Insulation wall insulation products to suit different building designs, performance requirements and applications.",
            ],
            download: {
              label: "Fletcher Insulation Wall Insulation Data Sheet",
              href: "/downloads/insulation/TDS-Pink-Batts-Wall-Rev12-010225-lpkh.pdf",
            },
          },
          {
            icon: "grid",
            title: "Bradford Wall Insulation",
            description: [
              "Bradford wall batts are glasswool insulation designed to improve the thermal performance of external walls and help create a more comfortable, energy-efficient home.",
              "Available in a range of R-values, Bradford wall insulation is designed for installation within wall cavities and provides thermal performance together with additional product benefits.",
            ],
            specsLabel: "Key benefits include:",
            specs: [
              "Helps keep homes warmer in winter and cooler in summer",
              "Reduces reliance on heating and cooling",
              "Available in a range of R-values to suit different requirements",
              "Moisture-resistant properties",
              "Low-allergen",
              "Made from up to 65% recycled content",
              "Non-combustible",
              "70-year warranty",
            ],
            downloads: [
              {
                label: "Bradford Gold Wall Insulation Datasheet",
                href: "/downloads/insulation/gold-wall-datasheet-kb4d.pdf",
              },
              {
                label: "Bradford Soundscreen Datasheet",
                href: "/downloads/insulation/soundscreen-datasheet-bftk.pdf",
              },
            ],
          },
          {
            icon: "cloud",
            title: "Stone / Mineral Wool Wall Insulation",
            description: [
              "Stone and mineral wool insulation provides high-performance thermal, acoustic and fire-resistant properties for residential and commercial wall applications.",
              "Available in a range of thicknesses and dimensions, these products can be specified to suit different building designs and performance requirements.",
            ],
            specsLabel: "Key benefits include:",
            specs: [
              "Excellent thermal performance",
              "Enhanced fire resistance",
              "Helps reduce noise transfer",
              "Durable and robust",
              "Water-resistant options",
              "Range of thicknesses and dimensions",
              "Suitable for a variety of building designs and applications",
            ],
          },
        ]}
      />

      <AdviceCallout>
        {"For advice on the right wall insulation solution, R-value or product for your project, contact the Consolidated Energy team."}
      </AdviceCallout>

      <ProductRange exclude="insulation" />
      <ContactSection />
    </>
  );
}
