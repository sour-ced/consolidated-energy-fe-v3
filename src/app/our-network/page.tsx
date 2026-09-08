import type { Metadata } from "next";
import AustraliaMap from "@/components/AustraliaMap";
import OfficeLocations from "@/components/OfficeLocations";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Network | Consolidated Energy",
  description:
    "Consolidated Energy's national network of offices and warehouses across Victoria, Western Australia, Queensland and the ACT, servicing builders across Australia.",
};

const STATES = ["VIC", "NSW", "QLD", "SA", "WA", "TAS"];

export default function OurNetworkPage() {
  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-20">
          <div className="flex items-center gap-3 text-brand-green text-[12px] font-semibold tracking-[0.15em] uppercase mb-6">
            <span className="w-6 h-px bg-brand-green" />
            Our Network
          </div>
          <h1 className="font-display text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.1] tracking-tight max-w-2xl">
            A national network of offices and warehouses.
          </h1>
          <p className="mt-6 text-white/60 text-[15px] leading-relaxed max-w-xl">
            We service builder customers from offices and warehouse locations
            across Australia, with local teams who know the products and the
            market they operate in.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
              National Coverage
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-brand-dark max-w-md mb-5">
              Warehousing and installation, state by state
            </h2>
            <p className="text-black/55 text-[15px] leading-relaxed max-w-sm mb-8">
              Every state office carries local stock and coordinates
              installation teams, so builders get one point of contact from
              order through to install.
            </p>
            <div className="flex flex-wrap gap-2">
              {STATES.map((state) => (
                <span
                  key={state}
                  className="px-4 py-2 text-[12px] font-bold rounded-sm border text-brand-dark/70 border-black/15"
                >
                  {state}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <AustraliaMap />
          </Reveal>
        </div>
      </section>

      <OfficeLocations />
      <ContactSection />
    </>
  );
}
