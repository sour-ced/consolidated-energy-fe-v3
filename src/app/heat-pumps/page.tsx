import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import SubcategoryModules from "@/components/SubcategoryModules";
import DownloadPanel from "@/components/DownloadPanel";
import BrandCallout from "@/components/BrandCallout";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Heat Pumps | Consolidated Energy",
  description:
    "enviroheat air-source heat pump hot water systems from Consolidated Energy, harvesting the heat from the air to heat your water efficiently.",
};

const ENVIROHEAT_ICON_FEATURES = [
  { icon: "leaf" as const, label: "Eco Power", description: "Energy-efficient operation that cuts running costs." },
  { icon: "snowflake" as const, label: "Frost Proof", description: "Reliable performance in cold Australian winters." },
  { icon: "suitcase" as const, label: "Smart Vacation Mode", description: "Away-mode keeps costs down when the house is empty." },
  { icon: "shield" as const, label: "Anti Freeze Protection", description: "Built-in protection against freezing conditions." },
  { icon: "boltArrow" as const, label: "Smart Boost", description: "Early-morning heating enhancement for peak demand." },
  { icon: "shieldCheck" as const, label: "Overheat Proof", description: "Automatic temperature regulation for safety." },
  { icon: "speakerMute" as const, label: "Low Noise", description: "Quiet operation suited to residential settings." },
  { icon: "droplet" as const, label: "Legionella Proof", description: "Periodic heat cycling prevents bacterial contamination." },
  { icon: "gauge" as const, label: "High Efficiency", description: "Optimised performance across all operating modes." },
  { icon: "grid" as const, label: "Micro Channel", description: "Advanced condenser technology for faster heat transfer." },
];

export default function HeatPumpsPage() {
  return (
    <>
      <ProductHero
        eyebrow="Product Range"
        title="Heat Pumps"
        tagline="Harvesting the heat from the air to heat your water."
        description="Our enviroheat+ air-source heat pump systems extract thermal energy from the surrounding air to provide hot water efficiently, cutting household energy costs while delivering a consistent hot water supply regardless of the weather."
        variant="heatpumps"
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div className="text-ink/60 text-[15px] leading-relaxed flex flex-col gap-4">
            <p>
              A heat pump takes the heat from surrounding air and transfers
              it to water, working in the opposite way to a refrigerator. A
              fan draws in heated air, an evaporator converts refrigerant to
              gas, a compressor pressurises it, a condenser heats the tank
              water, and the refrigerant liquefies and recycles through the
              system.
            </p>
            <p>
              It&apos;s a great replacement for outdated electric water
              heaters, a strong option where gas lines aren&apos;t available,
              and an alternative when roof-mounted solar collectors
              aren&apos;t feasible.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-section p-6">
              <p className="font-display text-3xl text-ink">4kW+</p>
              <p className="mt-1 text-[13px] text-ink/55 leading-relaxed">
                Every 1kW of electricity is converted into over 4kW of heat
                output.
              </p>
            </div>
            <div className="bg-section p-6">
              <p className="font-display text-3xl text-ink">18kW</p>
              <p className="mt-1 text-[13px] text-ink/55 leading-relaxed">
                Store up to 18kW of heat in a single Enviroheat tank for
                nighttime use, complementing rooftop solar installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="enviroheat+"
        title="Enviroheat pump features"
        items={ENVIROHEAT_ICON_FEATURES}
        columns={5}
      />

      <SubcategoryModules
        eyebrow="The Range"
        title="M3 and M9 models"
        intro="Both models plug into a standard power point with no fixed wiring required, and include dual anode corrosion protection as standard."
        items={[
          {
            icon: "battery",
            title: "Enviroheat M3",
            description:
              "The compact option for standard households, with the full Enviroheat feature set in a smaller footprint.",
            specs: ["Plug-in power point install", "Dual anode corrosion protection", "Micro-channel condenser"],
            download: {
              label: "M3 brochure",
              href: "/downloads/heat-pumps/EnviroheatBrochure2020M3.pdf",
            },
          },
          {
            icon: "gauge",
            title: "Enviroheat M9",
            description:
              "Higher-capacity model for larger households, pairing with rooftop solar to maximise daytime generation.",
            specs: ["Plug-in power point install", "18kW thermal battery capacity", "Timer control for solar offset"],
            download: {
              label: "M9 brochure",
              href: "/downloads/heat-pumps/Brochure_M9__ENVIROHEAT-CONSOLIDATED-mk3b.pdf",
            },
          },
        ]}
      />

      <DownloadPanel
        eyebrow="Product Downloads"
        items={[
          {
            label: "M3 brochure",
            href: "/downloads/heat-pumps/EnviroheatBrochure2020M3.pdf",
          },
          {
            label: "M9 brochure",
            href: "/downloads/heat-pumps/Brochure_M9__ENVIROHEAT-CONSOLIDATED-mk3b.pdf",
          },
          {
            label: "M3 user manual",
            href: "/downloads/heat-pumps/UserManual_Enviroheat_CONSOLIDATED_rev500WEB_M3.pdf",
          },
          {
            label: "M9 manual",
            href: "/downloads/heat-pumps/User-Manual_HPPLUS_M9__ENVIROHEAT-CONSOLIDATED_rev102PRINT.pdf",
          },
        ]}
        hubHref="/information-hub#heat-pumps"
      />

      <BrandCallout
        logoSrc="/images/brand-enviroheat.png"
        logoAlt="enviroheat"
        logoWidth={600}
        logoHeight={197}
      >
        <p>
          enviroheat is brought to you by Consolidated Energy &ndash; a
          dedicated air-source heat pump range engineered for Australian
          conditions, with brochures and user manuals available for the M3
          and M9 models.
        </p>
      </BrandCallout>

      <ProductRange exclude="heatpumps" />
      <ContactSection />
    </>
  );
}
