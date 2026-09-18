import Link from "next/link";
import AustraliaMap from "./AustraliaMap";
import Reveal from "./Reveal";
import StateBadges from "./StateBadges";
import { OfficeMapProvider } from "./OfficeMapContext";

export default function Network() {
  return (
    <section id="network" className="relative bg-section py-20 lg:py-24">
      <OfficeMapProvider>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="lg:w-1/2 lg:pr-12">
            <Reveal>
              <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
                Our Network
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink max-w-md mb-5">
                Offices and warehouses around Australia
              </h2>
              <p className="text-ink/55 text-[15px] leading-relaxed max-w-sm mb-8">
                Speak to one of our home energy specialists and they will be
                able to advise you on the best solution for your needs.
              </p>
              <div className="mb-8">
                <StateBadges />
              </div>
              <Link
                href="/our-network"
                className="text-[12px] font-bold uppercase tracking-wide text-ink border-b border-ink pb-1 whitespace-nowrap hover:text-brand-green-dark hover:border-brand-green-dark transition-colors"
              >
                View All Locations
              </Link>
            </Reveal>
          </div>
        </div>
        <AustraliaMap />
      </OfficeMapProvider>
    </section>
  );
}
