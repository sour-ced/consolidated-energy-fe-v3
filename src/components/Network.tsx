import Link from "next/link";
import AustraliaMap from "./AustraliaMap";
import Reveal from "./Reveal";
import StateBadges from "./StateBadges";
import { OfficeMapProvider } from "./OfficeMapContext";

export default function Network() {
  return (
    <section id="network" className="relative bg-section py-20 lg:py-24 border-b border-ink/10">
      <OfficeMapProvider>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="lg:w-1/2 lg:pr-12">
            <Reveal>
              <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
                Our Network
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink max-w-md mb-5">
                National capability, local service
              </h2>
              <div className="flex flex-col gap-4 text-ink/60 text-[15px] leading-relaxed max-w-md mb-8">
                <p>
                  With offices, warehouses and installation teams across
                  Australia, Consolidated Energy combines national capability
                  with local knowledge and service.
                </p>
                <p>
                  Our teams can help with product selection, project
                  requirements, supply, installation and ongoing support.
                </p>
              </div>
              <div className="mb-8">
                <StateBadges />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/our-network"
                  className="inline-flex items-center justify-center rounded-sm bg-brand-green px-6 py-3.5 text-[12px] font-bold uppercase tracking-wide text-brand-dark hover:bg-brand-green-dark transition-colors"
                >
                  Find Your Local Office
                </Link>
                <Link
                  href="#enquiry"
                  className="inline-flex items-center justify-center rounded-sm border border-ink/30 px-6 py-3.5 text-[12px] font-bold uppercase tracking-wide text-ink hover:border-ink transition-colors"
                >
                  Send an Enquiry
                </Link>
                <Link
                  href="/credit-application"
                  className="text-[12px] font-bold uppercase tracking-wide text-ink border-b border-ink pb-1 whitespace-nowrap hover:text-brand-green-dark hover:border-brand-green-dark transition-colors"
                >
                  Open a Trade Account
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
        <AustraliaMap />
      </OfficeMapProvider>
    </section>
  );
}
