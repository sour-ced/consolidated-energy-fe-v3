import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import SolarOutputTable from "@/components/SolarOutputTable";
import Reveal from "@/components/Reveal";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Solar Power | Consolidated Energy",
  description:
    "Solar power provides a practical way to generate clean, renewable electricity for your home or business, helping reduce reliance on grid-supplied energy and lower electricity costs.",
};

const SOLAR_FEATURES = [
  {
    icon: "panel" as const,
    label: "Quality Components",
    description:
      "Solar panels and inverters from leading, established manufacturers.",
  },
  {
    icon: "shieldCheck" as const,
    label: "Professional Installation",
    description:
      "Systems installed by appropriately accredited and licensed professionals.",
  },
  {
    icon: "gauge" as const,
    label: "Designed for Your Needs",
    description:
      "System size and configuration selected to suit the property, energy usage and project requirements.",
  },
  {
    icon: "home" as const,
    label: "Residential & Commercial Solutions",
    description:
      "Solar solutions available for homes, businesses and building projects.",
  },
  {
    icon: "mapPin" as const,
    label: "National Capability",
    description:
      "Backed by Consolidated Energy's experience supplying energy-efficiency solutions across Australia.",
  },
];

const eyebrowClass =
  "text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3";
const headingClass =
  "font-display text-3xl sm:text-4xl leading-[1.1] text-ink max-w-2xl mb-6";
const bodyClass = "text-ink/60 text-[15px] leading-relaxed";

export default function SolarPowerPage() {
  return (
    <>
      <ProductHero
        eyebrow="Product Range"
        title="Solar Power"
        tagline="Make the sun work for you"
        description="Solar power provides a practical way to generate clean, renewable electricity for your home or business, helping reduce reliance on grid-supplied energy and lower electricity costs."
        variant="solar"
      />

      <section className="bg-surface py-20 lg:py-24">
        <Reveal className={`mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-2 gap-4 md:gap-12 ${bodyClass}`}>
          <p>
            The right solar system should be designed around how and when
            electricity is used. System size, location, roof orientation,
            available space and future energy requirements can all influence
            the amount of solar energy generated and the potential savings.
          </p>
          <p>
            Consolidated Energy can help identify a solar solution that
            balances energy generation, consumption and budget, with quality
            panels and inverters from leading manufacturers and professional
            installation.
          </p>
        </Reveal>
      </section>

      <section className="bg-section py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-start">
          <Reveal>
            <h2 className={headingClass}>Clean, Sustainable Energy</h2>
            <div className={`${bodyClass} flex flex-col gap-4`}>
              <p>
                Solar photovoltaic (PV) panels convert energy from the sun into
                electricity that can be used throughout your home or business.
                Generating and using your own solar energy can reduce the
                amount of electricity drawn from the grid, helping lower energy
                costs and reduce your environmental impact.
              </p>
              <p>
                Any excess solar electricity generated may also be exported to
                the grid, subject to your electricity provider, applicable
                tariffs and local requirements.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="min-w-0">
            <SolarOutputTable />
          </Reveal>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="Why Choose Us"
        title="Why Choose Consolidated Energy?"
        items={SOLAR_FEATURES}
      />

      <section className="bg-section py-20 lg:py-24">
        <Reveal className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className={eyebrowClass}>System Selection</p>
          <h2 className={headingClass}>Choosing the Right Solar System</h2>
          <div className={`${bodyClass} grid md:grid-cols-3 gap-4 md:gap-10`}>
            <p>
              There is no one-size-fits-all approach to solar. The right system
              will depend on factors including electricity consumption, when
              energy is used, available roof space, orientation, location and
              budget.
            </p>
            <p>
              Future requirements should also be considered, particularly where
              household or business energy consumption may change over time.
            </p>
            <p>
              Our team can help assess these requirements and identify the
              appropriate system size, panel and inverter combination for your
              project.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <Reveal className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className={eyebrowClass}>Consolidated Energy</p>
          <h2 className={headingClass}>
            Solar Power from a Company You Can Trust
          </h2>
          <div className={`${bodyClass} grid md:grid-cols-2 gap-4 md:gap-12`}>
            <p>
              Consolidated Energy has extensive experience providing energy and
              energy-efficiency solutions to the Australian residential and
              commercial construction markets.
            </p>
            <p>
              We work with leading solar technology providers and experienced
              installation professionals to deliver quality solar solutions
              supported by reliable service, from system selection through to
              installation.
            </p>
          </div>
        </Reveal>
      </section>

      <ProductRange exclude="solar" />
      <ContactSection />
    </>
  );
}
