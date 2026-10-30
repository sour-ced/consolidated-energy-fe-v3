import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import DownloadPanel from "@/components/DownloadPanel";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import type { IconFeature } from "@/components/IconFeatureGrid";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";
import RelatedRangeCard from "@/components/RelatedRangeCard";

export const metadata: Metadata = {
  title: "Split & Multi-Split Air Conditioning | Consolidated Energy",
  description:
    "Flexible comfort where you need it. Split and multi-split air conditioning systems provide an efficient and flexible way to heat and cool individual rooms or selected areas of a home or building.",
};

const SINGLE_SPLIT_BENEFITS: IconFeature[] = [
  {
    icon: "remote",
    label: "Individual Room Control",
    description:
      "Heat or cool the rooms you use without conditioning the entire property.",
  },
  {
    icon: "leaf",
    label: "Energy Efficient",
    description:
      "Conditioning individual spaces can help reduce unnecessary energy use.",
  },
  {
    icon: "thermometer",
    label: "Heating & Cooling",
    description:
      "Reverse cycle models provide both heating and cooling for year-round comfort.",
  },
  {
    icon: "gauge",
    label: "Flexible Sizing",
    description:
      "Available in a range of capacities to suit different room sizes and applications.",
  },
  {
    icon: "shieldCheck",
    label: "Simple Installation",
    description:
      "A practical option for existing homes, renovations and spaces where ductwork isn't suitable.",
  },
  {
    icon: "star",
    label: "Contemporary Design",
    description:
      "Modern indoor units are designed to integrate neatly into a range of interiors.",
  },
];

const MULTI_SPLIT_BENEFITS: IconFeature[] = [
  {
    icon: "grid",
    label: "Multiple Rooms, One Outdoor Unit",
    description:
      "Connect multiple indoor units to a single outdoor system for a more streamlined installation.",
  },
  {
    icon: "remote",
    label: "Individual Room Control",
    description:
      "Control temperature and operation independently across different rooms or zones.",
  },
  {
    icon: "layers",
    label: "Flexible Configuration",
    description:
      "Choose different indoor unit capacities and styles to suit the requirements of each space.",
  },
  {
    icon: "compress",
    label: "Space Efficient",
    description:
      "Well suited to properties where space for multiple outdoor units or ductwork is limited.",
  },
  {
    icon: "thermometer",
    label: "Heating & Cooling",
    description: "Reverse cycle options provide year-round heating and cooling.",
  },
  {
    icon: "leaf",
    label: "Energy Conscious",
    description:
      "Condition only the areas being used rather than heating or cooling the entire property.",
  },
];

const SPLIT_DOWNLOADS = [
  {
    label: "Fujitsu Comfort Range Split System Brochure",
    href: "/downloads/air-conditioning/Fujitsu-Split-ComfortRange_AU_Jan25-72ez.pdf",
  },
  {
    label: "Fujitsu Lifestyle Range Split System Brochure",
    href: "/downloads/air-conditioning/Fujitsu-Split-LifestyleRange_-AC-brochure-f6pt.pdf",
  },
  {
    label: "Haier Flexis Hi-Wall Split System Brochure",
    href: "/downloads/air-conditioning/17577-HAIER-NZ-AU-Flexis-brochure_FA_03022020_LoRes1.pdf",
  },
  {
    label: "Haier Tempo Hi-Wall Split System Brochure",
    href: "/downloads/air-conditioning/101853-haier-nz-au-tempo-hi-wall-aircon-brochure-low-res-1.pdf",
  },
  {
    label: "Samsung Boracay AR4500 Split System Brochure",
    href: "/downloads/air-conditioning/Samsung-Boracay-Series-March-2016.pdf",
  },
];

function SystemSection({
  tone,
  eyebrow,
  title,
  paragraphs,
  benefitsTitle,
  benefits,
}: {
  tone: "surface" | "section";
  eyebrow: string;
  title: string;
  paragraphs: string[];
  benefitsTitle: string;
  benefits: IconFeature[];
}) {
  return (
    <section className={`${tone === "surface" ? "bg-surface" : "bg-section"} py-20 lg:py-24`}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-16">
        <Reveal>
          <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink mb-6">
            {title}
          </h2>
          <div className="text-ink/60 text-[15px] leading-relaxed flex flex-col gap-4">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <div>
          <h3 className="font-display text-xl text-ink mb-8">{benefitsTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {benefits.map((item, i) => (
              <Reveal
                key={item.label}
                delay={(i % 6) * 60}
                className="flex items-start gap-4"
              >
                <span
                  className={`shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full text-brand-green-dark ${
                    tone === "surface" ? "bg-section" : "bg-surface"
                  }`}
                >
                  <Icon name={item.icon} className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-display text-[15px] tracking-wide text-ink leading-tight">
                    {item.label}
                  </p>
                  {item.description && (
                    <p className="mt-1.5 text-[13px] text-ink/55 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SplitSystemsPage() {
  return (
    <>
      <ProductHero
        eyebrow="Air Conditioning"
        title="Split & Multi-Split Air Conditioning"
        tagline="Flexible comfort where you need it"
        description="Split and multi-split air conditioning systems provide an efficient and flexible way to heat and cool individual rooms or selected areas of a home or building."
        variant="aircon"
      />

      <section className="bg-surface py-20 lg:py-24">
        <Reveal className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-6 lg:gap-16 text-ink/65 text-[15px] leading-relaxed">
          <p>
            From a single bedroom or home office through to multiple living
            areas, systems can be selected and sized to suit the space, how it
            is used and individual comfort requirements. With reverse cycle
            options providing both heating and cooling, split systems offer
            year-round climate control without the need for a fully ducted
            system.
          </p>
          <p>
            Consolidated Energy offers a range of split and multi-split systems
            from leading manufacturers, with our team helping identify the
            right system, capacity and configuration for each application.
          </p>
        </Reveal>
      </section>

      <SystemSection
        tone="section"
        eyebrow="Split Systems"
        title="Single Split Systems"
        paragraphs={[
          "A single split system consists of one indoor unit connected to one outdoor unit, providing dedicated heating and cooling to an individual room or space.",
          "Available in a wide range of capacities and designs, split systems can be sized to suit everything from smaller bedrooms and home offices to larger living areas and commercial spaces.",
        ]}
        benefitsTitle="Benefits of Single Split Systems"
        benefits={SINGLE_SPLIT_BENEFITS}
      />

      <SystemSection
        tone="surface"
        eyebrow="Multi-Split"
        title="Multi-Split Systems"
        paragraphs={[
          "A multi-split system connects multiple indoor units to a single outdoor unit, providing independent climate control across several rooms or areas.",
          "Each indoor unit can be selected to suit the room it serves, allowing different spaces to be controlled independently while reducing the number of outdoor units required.",
          "Multi-split systems can be particularly useful for homes, apartments and commercial spaces where several rooms require air conditioning but installing a ducted system may not be practical.",
        ]}
        benefitsTitle="Benefits of Multi-Split Systems"
        benefits={MULTI_SPLIT_BENEFITS}
      />

      <section className="bg-brand-dark text-white py-20 lg:py-24 border-b border-white/10">
        <Reveal className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 text-brand-green text-[12px] font-semibold tracking-[0.15em] uppercase mb-4">
              <span className="w-6 h-px bg-brand-green" />
              System Selection
            </div>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1]">
              Choosing the Right System
            </h2>
          </div>
          <div className="text-white/65 text-[15px] leading-relaxed flex flex-col gap-4">
            <p>
              The right split or multi-split system depends on more than room
              size alone. Layout, orientation, insulation, glazing, how the
              space is used and the number of areas requiring air conditioning
              can all influence system selection and capacity.
            </p>
            <p>
              Consolidated Energy can assess these requirements and compare
              systems from a range of leading manufacturers to identify the
              right solution for your home, business or project.
            </p>
          </div>
        </Reveal>
      </section>

      <DownloadPanel
        eyebrow="Downloads"
        title="Split & Multi-Split Information & Tech Specs"
        items={SPLIT_DOWNLOADS}
        hubHref="/information-hub#air-conditioning"
      />

      <RelatedRangeCard
        backHref="/air-conditioning"
        backLabel="Back to Air Conditioning"
        href="/ducted-air-conditioning"
        title="Ducted Air Conditioning"
        image="/images/aircon/ducted.jpg"
        imageClass="object-[20%_30%]"
      />

      <ProductRange exclude="aircon" />
      <ContactSection />
    </>
  );
}
