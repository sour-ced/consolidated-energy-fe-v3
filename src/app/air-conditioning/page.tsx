import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ProductHero from "@/components/ProductHero";
import SubcategoryModules from "@/components/SubcategoryModules";
import Reveal from "@/components/Reveal";
import Icon, { type IconName } from "@/components/Icons";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Air Conditioning | Consolidated Energy",
  description:
    "Leading air conditioning brands, backed by service and support. Consolidated Energy supplies and installs split, multi-split, mini-ducted and fully ducted systems for residential and commercial applications.",
};

const RANGE_CARDS: {
  href: string;
  title: string;
  icon: IconName;
  imageClass: string;
}[] = [
  {
    href: "/ducted-air-conditioning",
    title: "Ducted Air Conditioning",
    icon: "wind",
    // Same source photo as the split card (only aircon image supplied);
    // bias the crop right towards the ceiling line and doorway.
    imageClass: "object-[85%_30%]",
  },
  {
    href: "/split-systems",
    title: "Split & Multi-Split Systems",
    icon: "fan",
    // Bias the crop left towards the wall-mounted indoor unit.
    imageClass: "object-[15%_30%]",
  },
];

export default function AirConditioningPage() {
  return (
    <>
      <ProductHero
        eyebrow="Product Range"
        title="Air Conditioning"
        tagline="Leading air conditioning brands, backed by service and support"
        description="The right air conditioning system should deliver the right balance of comfort, performance, energy efficiency and value."
        variant="aircon"
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <Reveal>
            <p className="font-display text-2xl sm:text-3xl leading-snug text-ink">
              Consolidated Energy supplies and installs a wide range of air
              conditioning solutions, from split and multi-split systems
              through to mini-ducted and fully ducted systems for residential
              and commercial applications.
            </p>
          </Reveal>
          <Reveal
            delay={120}
            className="text-ink/60 text-[15px] leading-relaxed flex flex-col gap-4"
          >
            <p>
              Because we&apos;re not aligned with any single manufacturer, our
              team can provide impartial advice across a range of leading
              brands. We consider the size and design of the space, how the
              system will be used, climate, energy efficiency and budget to
              help identify the right solution for each project.
            </p>
            <p>
              Correct system selection and sizing are important to both
              comfort and efficiency. Our experienced team can help compare
              system types, brands and features, with installation carried out
              by appropriately licensed trades and backed by applicable product
              and installation warranties.
            </p>
          </Reveal>
        </div>
      </section>

      <SubcategoryModules
        eyebrow="Product Range"
        title="Air Conditioning Systems"
        columns={2}
        items={[
          {
            icon: "wind",
            title: "Ducted Air Conditioning",
            description: [
              "Ducted air conditioning provides an integrated solution for heating and cooling multiple rooms or an entire home or building from one central system.",
              "With the ability to divide spaces into zones, ducted systems provide greater control over where and when heating or cooling is required, helping balance comfort and energy use.",
            ],
            specsLabel: "Key features and benefits include:",
            specs: [
              "Whole-home or multi-room heating and cooling",
              "Zoned temperature control",
              "Discreet outlets integrated into the ceiling",
              "Systems sized to suit the property and application",
              "Range of leading brands and system options",
              "Professional installation by appropriately licensed trades",
            ],
          },
          {
            icon: "fan",
            title: "Split & Multi-Split Systems",
            description: [
              "Split systems provide an efficient and flexible solution for heating and cooling individual rooms, while multi-split systems can connect multiple indoor units to a single outdoor unit to service several areas.",
              "Available in a range of capacities, styles and features from leading manufacturers, split and multi-split systems can be selected to suit different room sizes, layouts and comfort requirements.",
            ],
            specsLabel: "Key features and benefits include:",
            specs: [
              "Flexible single-room and multi-room options",
              "Individual temperature control",
              "Range of capacities to suit different spaces",
              "Energy-efficient options available",
              "Choice of leading air conditioning brands",
              "Professional installation by appropriately licensed trades",
            ],
          },
        ]}
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
            Air Conditioning
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink mb-12">
            Our Range
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RANGE_CARDS.map((card, i) => (
              <Reveal key={card.href} delay={i * 120} className="h-full">
                <Link
                  href={card.href}
                  className="group relative flex h-full min-h-[340px] sm:min-h-[420px] overflow-hidden bg-brand-dark text-white"
                >
                  <span className="absolute inset-0 overflow-hidden transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none">
                    <Image
                      src="/images/product-aircon.jpg"
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`object-cover ${card.imageClass}`}
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/20"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute top-6 right-6 inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/20 text-brand-green bg-brand-dark/40 backdrop-blur-sm"
                  >
                    <Icon name={card.icon} className="w-6 h-6" />
                  </span>

                  <span className="relative mt-auto flex flex-col items-start gap-6 p-7 sm:p-10">
                    <span className="block w-10 h-px bg-brand-green" />
                    <span className="font-display text-2xl sm:text-3xl uppercase tracking-wide leading-tight">
                      {card.title}
                    </span>
                    <span className="inline-flex items-center justify-center rounded-sm bg-brand-green px-6 py-3.5 text-[12px] font-bold uppercase tracking-wide text-brand-dark group-hover:bg-white transition-colors">
                      View the Range
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProductRange exclude="aircon" />
      <ContactSection />
    </>
  );
}
