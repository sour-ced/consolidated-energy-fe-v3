import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import DownloadPanel from "@/components/DownloadPanel";
import BrandCallout from "@/components/BrandCallout";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Continuous Gas Hot Water | Consolidated Energy",
  description:
    "Takagi continuous flow gas hot water units, exclusively distributed in Australia by Consolidated Energy. 6 Star efficiency with world class quality and reliability.",
};

const TAKAGI_ICON_FEATURES = [
  {
    icon: "star" as const,
    label: "6-Star Efficiency",
    description: "High-efficiency 6-star energy ratings across the range.",
  },
  {
    icon: "bolt" as const,
    label: "Instant, On-Demand Heat",
    description: "Heats water on demand only, with no standing storage losses.",
  },
  {
    icon: "compress" as const,
    label: "Compact & Space-Saving",
    description: "Tankless and wall-mountable, with recess boxes for a flush fit.",
  },
  {
    icon: "remote" as const,
    label: "Remote Control Ready",
    description: "Optional remote temperature controllers, no manual tap adjustment.",
  },
  {
    icon: "thermometer" as const,
    label: "Perfect Temperature",
    description: "50°C pre-set models available for consistent delivery.",
  },
  {
    icon: "sun" as const,
    label: "Solar Compatible",
    description: "100% compatible with solar hot water systems.",
  },
];

const WARRANTY_HREF =
  "/downloads/gas-hot-water/Takagi-Continuous-Flow-Water-Heating-Products-Warranty-V1-131013.pdf";
const USER_MANUAL_HREF =
  "/downloads/gas-hot-water/Takagi-manual-GS-20W-AU56-GS-26W-AU56-06272019-R-k488.pdf";

const TAKAGI_MODELS = [
  {
    title: "GS-20W — 20L/min",
    description:
      "Suits smaller households and single-bathroom homes with moderate simultaneous hot water demand.",
    specs: [
      "20 litres per minute flow rate",
      "Natural Gas or LPG",
      "Wall-mounted or recess-box install",
    ],
  },
  {
    title: "GS-26W — 26L/min",
    description:
      "Higher flow rate for larger households and multi-bathroom homes running several outlets at once.",
    specs: [
      "26 litres per minute flow rate",
      "Natural Gas or LPG",
      "Optional remote controller",
    ],
  },
];

export default function GasHotWaterPage() {
  return (
    <>
      <ProductHero
        eyebrow="Product Range"
        title="Continuous Gas Hot Water"
        tagline="6 Star Efficiency, with world class quality & reliability"
        description="Takagi is a leading continuous gas hot water heater manufacturer with over 60 years of experience. Products are fully manufactured in Japan and distributed exclusively in Australia through Consolidated Energy."
        variant="gas"
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-2 gap-4 md:gap-12 text-ink/60 text-[15px] leading-relaxed">
          <p>
            Takagi systems heat water on demand only, eliminating the
            standing losses of a storage tank. Compact, tankless and
            wall-mountable, they deliver instant heating and are 100%
            compatible with solar systems.
          </p>
          <p>
            Because hot water represents around 25% of household energy
            use, an on-demand system produces 25&ndash;33% fewer greenhouse
            gases than an electric storage system &ndash; and optional
            remote controls mean no more manual tap adjustment.
          </p>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="Takagi"
        title="Continuous flow features"
        items={TAKAGI_ICON_FEATURES}
      />

      <section className="bg-section py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
            The Range
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink max-w-2xl">
            Choose the right flow rate
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal className="sm:col-span-2 lg:col-span-1 bg-brand-dark text-white border border-white/10 p-7 flex flex-col h-full">
              <h3 className="font-display text-lg text-brand-green">
                Choosing the Right Model
              </h3>
              <div className="mt-3 text-[14px] text-white/70 leading-relaxed flex-1 flex flex-col gap-3">
                <p>
                  Choosing the right hot water system depends on household
                  size, expected hot water demand, local climate and how the
                  system will be installed.
                </p>
                <p>
                  Available in Natural Gas and LPG, with a range of flow rates
                  and installation options including wall-mounted and internal
                  recess-box configurations, systems can be selected to suit
                  different homes and project requirements.
                </p>
                <p>
                  Our team can help identify the appropriate flow rate, fuel
                  type and configuration for your build.
                </p>
              </div>
            </Reveal>

            {TAKAGI_MODELS.map((model, i) => (
              <Reveal
                key={model.title}
                delay={(i + 1) * 100}
                className="bg-surface border border-ink/5 p-7 flex flex-col h-full"
              >
                <h3 className="font-display text-lg text-ink">{model.title}</h3>
                <p className="mt-2 text-[14px] text-ink/55 leading-relaxed flex-1">
                  {model.description}
                </p>
                <ul className="mt-4 pt-4 border-t border-ink/10 flex flex-col gap-1.5">
                  {model.specs.map((spec) => (
                    <li
                      key={spec}
                      className="text-[12.5px] text-ink/70 flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-green-dark shrink-0 mt-[7px]" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DownloadPanel
        eyebrow="Product Downloads"
        items={[
          { label: "Warranty", href: WARRANTY_HREF },
          {
            label: "User Manual — GS-20W / GS-26W (AU56)",
            href: USER_MANUAL_HREF,
          },
          {
            label: "Product brochure",
            href: "/downloads/gas-hot-water/Takagi-Brochure.pdf",
          },
        ]}
        hubHref="/information-hub#gas-hot-water"
      />

      <BrandCallout
        logoSrc="/images/brand-takagi.png"
        logoAlt="Takagi"
        logoWidth={546}
        logoHeight={197}
      >
        <p>
          Takagi has manufactured continuous flow gas hot water heaters in
          Japan for over 60 years. Consolidated Energy is the exclusive
          Australian distributor, supplying and installing Takagi units
          nationally.
        </p>
      </BrandCallout>

      <ProductRange exclude="gas" />
      <ContactSection />
    </>
  );
}
