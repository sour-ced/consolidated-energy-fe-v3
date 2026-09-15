import Link from "next/link";
import AustraliaMap from "./AustraliaMap";
import Reveal from "./Reveal";

const STATES = ["VIC", "NSW", "QLD", "SA", "WA", "TAS"];

export default function Network() {
  return (
    <section id="network" className="bg-section py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
            Our Network
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink max-w-md mb-5">
            Offices and warehouses around Australia
          </h2>
          <p className="text-ink/55 text-[15px] leading-relaxed max-w-sm mb-8">
            Speak to one of our home energy specialists and they will be able
            to advise you on the best solution for your needs.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {STATES.map((state, i) => (
              <span
                key={state}
                className={`px-4 py-2 text-[12px] font-bold rounded-sm border ${
                  i === 0
                    ? "bg-brand-dark text-white border-ink"
                    : "text-ink/70 border-ink/15"
                }`}
              >
                {state}
              </span>
            ))}
          </div>
          <Link
            href="/our-network"
            className="text-[12px] font-bold uppercase tracking-wide text-ink border-b border-ink pb-1 whitespace-nowrap hover:text-brand-green-dark hover:border-brand-green-dark transition-colors"
          >
            View All Locations
          </Link>
        </Reveal>

        <Reveal delay={150}>
          <AustraliaMap />
        </Reveal>
      </div>
    </section>
  );
}
