import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import SubcategoryModules from "@/components/SubcategoryModules";
import DownloadPanel from "@/components/DownloadPanel";
import BrandCallout from "@/components/BrandCallout";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

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

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div className="text-black/60 text-[15px] leading-relaxed flex flex-col gap-4">
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
          <div className="bg-brand-cream p-6 flex flex-col justify-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-black/40 mb-2">
              Selecting the right model
            </p>
            <p className="text-[14px] text-brand-dark leading-relaxed">
              Model choice comes down to household size, expected simultaneous
              hot water demand and local climate &ndash; speak to our team and
              we&apos;ll help you specify the right flow rate and fuel type
              for the build.
            </p>
          </div>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="Takagi"
        title="Continuous flow features"
        items={TAKAGI_ICON_FEATURES}
      />

      <SubcategoryModules
        eyebrow="The Range"
        title="Choose the right flow rate"
        intro="Available in Natural Gas and LPG, with wall-mounted and internal recess-box options for a flush finish."
        items={[
          {
            title: "GS-20W — 20L/min",
            description:
              "Suits smaller households and single-bathroom homes with moderate simultaneous hot water demand.",
            specs: [
              "20 litres per minute flow rate",
              "Natural Gas or LPG",
              "Wall-mounted or recess-box install",
            ],
            download: {
              label: "GS-20W user manual",
              href: "/downloads/gas-hot-water/Takagi-manual-GS-20W-AU56-GS-26W-AU56-06272019-R-k488.pdf",
            },
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
            download: {
              label: "GS-26W user manual",
              href: "/downloads/gas-hot-water/Takagi-manual-GS-20W-AU56-GS-26W-AU56-06272019-R-k488.pdf",
            },
          },
        ]}
      />

      <DownloadPanel
        eyebrow="Product Downloads"
        items={[
          {
            label: "Warranty documentation",
            href: "/downloads/gas-hot-water/Takagi-Continuous-Flow-Water-Heating-Products-Warranty-V1-131013.pdf",
          },
          {
            label: "Product brochure",
            href: "/downloads/gas-hot-water/Takagi-Brochure.pdf",
          },
          {
            label: "GS-20W / GS-26W (AU56) user manual",
            href: "/downloads/gas-hot-water/Takagi-manual-GS-20W-AU56-GS-26W-AU56-06272019-R-k488.pdf",
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
