import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import DownloadPanel from "@/components/DownloadPanel";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";
import RelatedRangeCard from "@/components/RelatedRangeCard";

export const metadata: Metadata = {
  title: "Ducted Air Conditioning | Consolidated Energy",
  description:
    "Whole-home comfort tailored to your space. Ducted reverse cycle air conditioning provides an integrated solution for heating and cooling multiple rooms or an entire home or building from one central system.",
};

const DUCTED_BENEFITS = [
  {
    icon: "home" as const,
    label: "Whole-Home Comfort",
    description:
      "Heat or cool multiple rooms or the entire property from one central system.",
  },
  {
    icon: "grid" as const,
    label: "Zoned Control",
    description:
      "Divide the property into separate zones and control which areas are conditioned at different times.",
  },
  {
    icon: "leaf" as const,
    label: "Energy Efficiency",
    description:
      "Zoning allows unused areas to be switched off, helping reduce unnecessary energy consumption.",
  },
  {
    icon: "layers" as const,
    label: "Discreet Design",
    description:
      "With the main equipment and ductwork concealed, only the grilles and outlets are visible within the living space.",
  },
  {
    icon: "thermometer" as const,
    label: "Heating & Cooling",
    description:
      "Reverse cycle technology provides both heating and cooling from the same system for year-round comfort.",
  },
  {
    icon: "clipboard" as const,
    label: "Designed for Your Property",
    description:
      "Systems can be designed and sized to suit the layout, application and performance requirements of the property.",
  },
];

const DUCTED_DOWNLOADS = [
  {
    label: "Samsung Duct S2 Ducted System Brochure",
    href: "/downloads/air-conditioning/Samsung_Duct_S2_Brochure.pdf",
  },
  {
    label: "Haier Ducted & Cassette Systems Brochure",
    href: "/downloads/air-conditioning/Haier-AC-Smart-Power-Brochure-2019_V2Web.pdf",
  },
];

export default function DuctedAirConditioningPage() {
  return (
    <>
      <ProductHero
        eyebrow="Air Conditioning"
        title="Ducted Air Conditioning"
        tagline="Whole-home comfort tailored to your space"
        description="Ducted reverse cycle air conditioning provides an integrated solution for heating and cooling multiple rooms or an entire home or building from one central system."
        variant="aircon"
        imageSrc="/images/aircon/ducted-hero.jpg"
        imageAlt="Living room heated and cooled by a ducted air conditioning system"
      />

      <section className="bg-surface pt-20 lg:pt-24">
        <Reveal className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-6 lg:gap-16 text-ink/65 text-[15px] leading-relaxed">
          <p>
            Conditioned air is distributed through concealed ductwork to
            discreet ceiling or wall outlets throughout the property. The
            system can be divided into zones, allowing different areas to be
            controlled independently and air conditioning to be directed where
            it is needed.
          </p>
          <p>
            This combination of whole-home comfort, individual zone control and
            discreet design makes ducted air conditioning a popular choice for
            both residential and commercial applications.
          </p>
        </Reveal>
      </section>

      <IconFeatureGrid
        eyebrow="Benefits"
        title="Benefits of Ducted Air Conditioning"
        items={DUCTED_BENEFITS}
        columns={3}
      />

      <section className="bg-section py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal className="bg-surface border border-ink/5 p-7 sm:p-10">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-section text-brand-green-dark mb-5">
              <Icon name="compress" className="w-5 h-5" />
            </span>
            <h2 className="font-display text-2xl sm:text-3xl leading-[1.1] text-ink mb-5">
              Slim Line Ducted Systems
            </h2>
            <div className="text-ink/60 text-[15px] leading-relaxed flex flex-col gap-4">
              <p>
                Slim line or bulkhead ducted systems provide many of the
                benefits of traditional ducted air conditioning in applications
                where space is limited or a more tailored installation is
                required.
              </p>
              <p>
                The indoor unit can be concealed above a built-in wardrobe or
                within a bulkhead, with a discreet custom grille providing
                conditioned air to the room.
              </p>
              <p>
                Slim line systems are particularly suited to apartments,
                renovations and architecturally designed homes where ceiling
                space or visual impact needs to be carefully considered.
              </p>
              <p>
                Depending on the application, they can be configured as
                individual systems or incorporated into multi-split or VRV/VRF
                systems.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="bg-surface border border-ink/5 p-7 sm:p-10">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-section text-brand-green-dark mb-5">
              <Icon name="gauge" className="w-5 h-5" />
            </span>
            <h2 className="font-display text-2xl sm:text-3xl leading-[1.1] text-ink mb-5">
              One Size Doesn&apos;t Fit All
            </h2>
            <div className="text-ink/60 text-[15px] leading-relaxed flex flex-col gap-4">
              <p>
                The performance of a ducted air conditioning system depends on
                more than simply selecting a unit. The size and layout of the
                property, number and use of rooms, orientation, insulation,
                glazing and individual comfort requirements can all influence
                system design and capacity.
              </p>
              <p>
                Consolidated Energy considers these factors to design and
                install a ducted solution suited to the requirements of each
                project.
              </p>
              <p>
                Our team works across a range of leading air conditioning
                brands, allowing us to recommend the system and configuration
                best suited to the property rather than being limited to a
                single manufacturer.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <Reveal className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
              Product Range
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink">
              Our Ducted Range
            </h2>
          </div>
          <div className="text-ink/60 text-[15px] leading-relaxed flex flex-col gap-4">
            <p>
              Consolidated Energy offers ducted air conditioning systems from
              leading manufacturers for residential and commercial
              applications, supported by professional design, installation and
              ongoing service.
            </p>
            <p>
              Our team can help compare brands, system capacities, zoning
              options and features to identify the right solution for your
              project.
            </p>
          </div>
        </Reveal>
      </section>

      <DownloadPanel
        eyebrow="Downloads"
        title="Ducted Air Conditioning Information & Tech Specs"
        items={DUCTED_DOWNLOADS}
        hubHref="/information-hub#air-conditioning"
      />

      <RelatedRangeCard
        backHref="/air-conditioning"
        backLabel="Back to Air Conditioning"
        href="/split-systems"
        title="Split & Multi-Split Systems"
        imageClass="object-[15%_30%]"
      />

      <ProductRange exclude="aircon" />
      <ContactSection />
    </>
  );
}
