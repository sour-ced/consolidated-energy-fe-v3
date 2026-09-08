import type { Metadata } from "next";
import Link from "next/link";
import Icon, { type IconName } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Information Hub | Consolidated Energy",
  description:
    "Warranty documents, brochures, spec sheets and user manuals for every Consolidated Energy product category, in one place.",
};

type Doc = { label: string; type: "Warranty" | "Brochure" | "Manual" | "Spec Sheet" };

const CATEGORIES: {
  id: string;
  icon: IconName;
  title: string;
  productHref: string;
  docs: Doc[];
}[] = [
  {
    id: "insulation",
    icon: "home",
    title: "Insulation",
    productHref: "/insulation",
    docs: [
      { label: "Insulation product range spec sheet", type: "Spec Sheet" },
      { label: "Insulation warranty terms", type: "Warranty" },
    ],
  },
  {
    id: "heat-pumps",
    icon: "leaf",
    title: "Heat Pumps — enviroheat+",
    productHref: "/heat-pumps",
    docs: [
      { label: "Enviroheat product brochure", type: "Brochure" },
      { label: "M3 user manual", type: "Manual" },
      { label: "M9 user manual", type: "Manual" },
      { label: "Enviroheat warranty terms", type: "Warranty" },
    ],
  },
  {
    id: "gas-hot-water",
    icon: "bolt",
    title: "Continuous Gas Hot Water — Takagi",
    productHref: "/gas-hot-water",
    docs: [
      { label: "Takagi product brochure", type: "Brochure" },
      { label: "GS-20W / GS-26W (AU56) user manual", type: "Manual" },
      { label: "Takagi warranty documentation", type: "Warranty" },
    ],
  },
  {
    id: "air-conditioning",
    icon: "fan",
    title: "Air Conditioning",
    productHref: "/air-conditioning",
    docs: [
      { label: "Ducted systems spec sheet", type: "Spec Sheet" },
      { label: "Split systems spec sheet", type: "Spec Sheet" },
      { label: "Air conditioning warranty terms", type: "Warranty" },
    ],
  },
  {
    id: "solar-power",
    icon: "sun",
    title: "Solar Power",
    productHref: "/solar-power",
    docs: [
      { label: "Solar panel & inverter spec sheet", type: "Spec Sheet" },
      { label: "Battery storage spec sheet", type: "Spec Sheet" },
      { label: "Solar power warranty terms", type: "Warranty" },
    ],
  },
  {
    id: "ceilings",
    icon: "layers",
    title: "Ceilings — Precision Ceilings (WA)",
    productHref: "/ceilings",
    docs: [
      { label: "Precision Ceilings capability statement", type: "Brochure" },
      { label: "Residential ceilings brochure", type: "Brochure" },
      { label: "Ceilings warranty terms", type: "Warranty" },
    ],
  },
];

export default function InformationHubPage() {
  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-20">
          <div className="flex items-center gap-3 text-brand-green text-[12px] font-semibold tracking-[0.15em] uppercase mb-6">
            <span className="w-6 h-px bg-brand-green" />
            Information Hub
          </div>
          <h1 className="font-display text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.1] tracking-tight max-w-2xl">
            Every data sheet, manual and warranty, in one place.
          </h1>
          <p className="mt-6 text-white/60 text-[15px] leading-relaxed max-w-xl">
            The same documents referenced on each product page, backed up
            here so sales consultants, builders and subcontractors can find
            everything from a single hub.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-10">
          {CATEGORIES.map((category, i) => (
            <Reveal
              key={category.id}
              id={category.id}
              delay={(i % 3) * 60}
              className="scroll-mt-24 bg-brand-cream border border-black/5 p-7 lg:p-9"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                <div className="flex items-center gap-4 lg:w-64 shrink-0">
                  <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-brand-green-dark">
                    <Icon name={category.icon} className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="font-display text-xl text-brand-dark leading-tight">
                      {category.title}
                    </h2>
                    <Link
                      href={category.productHref}
                      className="text-[12px] font-bold uppercase tracking-wide text-brand-green-dark hover:text-brand-dark transition-colors"
                    >
                      View product page →
                    </Link>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.docs.map((doc) => (
                    <a
                      key={doc.label}
                      href="#"
                      className="group flex items-center gap-4 bg-white border border-black/10 px-5 py-4 hover:border-brand-green-dark transition-colors"
                    >
                      <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-cream text-brand-green-dark group-hover:bg-brand-green group-hover:text-brand-dark transition-colors">
                        <Icon name="clipboard" className="w-4 h-4" />
                      </span>
                      <span className="flex-1 text-[13.5px] font-medium text-brand-dark leading-snug">
                        {doc.label}
                      </span>
                      <span className="shrink-0 text-[10px] font-bold uppercase text-brand-green-dark whitespace-nowrap">
                        {doc.type}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream py-16 lg:py-20 border-t border-black/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
              Company Documents
            </p>
            <h2 className="font-display text-2xl sm:text-3xl leading-[1.1] text-brand-dark max-w-lg">
              Opening a trade account?
            </h2>
            <p className="mt-3 text-black/55 text-[15px] leading-relaxed max-w-lg">
              Complete the Customer Credit Application to set up a trade
              account with Consolidated Energy.
            </p>
          </div>
          <Link
            href="/credit-application"
            className="inline-flex items-center justify-center rounded-sm bg-brand-dark px-6 py-3.5 text-[12px] font-bold uppercase tracking-wide text-white hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Customer Credit Application
          </Link>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
