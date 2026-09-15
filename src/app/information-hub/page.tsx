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

type Doc = { label: string; type: string; href: string };
type DocGroup = { label: string; docs: Doc[] };

const CATEGORIES: {
  id: string;
  icon: IconName;
  title: string;
  productHref: string;
  docs?: Doc[];
  groups?: DocGroup[];
}[] = [
  {
    id: "insulation",
    icon: "home",
    title: "Insulation",
    productHref: "/insulation",
    groups: [
      {
        label: "Consolidated Energy",
        docs: [
          {
            label: "Insulation Technical Data Sheet",
            type: "Spec Sheet",
            href: "/downloads/insulation/Consolidated-Energy-TDS-v3.pdf",
          },
          {
            label: "Insulation Safety Data Sheet",
            type: "Safety Data Sheet",
            href: "/downloads/insulation/Consolidated-Energy-SDS.pdf",
          },
          {
            label: "50 Year Glasswool Warranty",
            type: "Warranty",
            href: "/downloads/insulation/Consolidated_Energy_50_Year_Glasswool_Warranty.pdf",
          },
          {
            label: "Insulation Installation Instructions",
            type: "Manual",
            href: "/downloads/insulation/Consolidated-Energy-Insulation-Instructions.pdf",
          },
          {
            label: "Importer Due Diligence Statement",
            type: "Statement",
            href: "/downloads/insulation/CE-Importer-Due-Diligence-Statement.pdf",
          },
          {
            label: "Glasswool Installation SWMS",
            type: "SWMS",
            href: "/downloads/insulation/CE-Glasswool-Installation-SWMS.pdf",
          },
          {
            label: "Classification Justification Statement — Glass Wool Fibres",
            type: "Statement",
            href: "/downloads/insulation/CE-Classification-Justification-Statement-Glass-Wool-Fibres-t32k.pdf",
          },
        ],
      },
      {
        label: "Fletcher Insulation",
        docs: [
          {
            label: "supaBATT: Wall",
            type: "Spec Sheet",
            href: "/downloads/insulation/FI_TDS_supaBATT_Revision_5_07112024_LR.pdf",
          },
          {
            label: "Perimeter Thermal Glasswool Batt",
            type: "Spec Sheet",
            href: "/downloads/insulation/TDS__PerimeterBatts_Revision_0_Issue-date-16092024.pdf",
          },
          {
            label: "FirmaSoft Batt: Ceiling Thermal Glasswool",
            type: "Spec Sheet",
            href: "/downloads/insulation/TDS-FirmaSoft-Batts-Ceiling-Rev5-070824-1.pdf",
          },
          {
            label: "FirmaSoft Batt: Wall Thermal Glasswool",
            type: "Spec Sheet",
            href: "/downloads/insulation/TDS-FirmaSoft-Batts-Wall-Rev4-15042024.pdf",
          },
          {
            label: "Pink Batt: Ceiling Thermal Glasswool",
            type: "Spec Sheet",
            href: "/downloads/insulation/TDS-Pink-Batts-Ceiling-Rev7-170225.pdf",
          },
          {
            label: "Pink Batt: Floor Thermal Glasswool",
            type: "Spec Sheet",
            href: "/downloads/insulation/TDS-Pink-Batts-Floor-Rev2-15042024-2-dgbx.pdf",
          },
          {
            label: "Pink Batt: Wall Thermal Glasswool",
            type: "Spec Sheet",
            href: "/downloads/insulation/TDS-Pink-Batts-Wall-Rev12-010225-lpkh.pdf",
          },
          {
            label: "Soundbreak Batt: Acoustic Thermal Glasswool",
            type: "Spec Sheet",
            href: "/downloads/insulation/TDS-Soundbreak-Rev7-091024.pdf",
          },
        ],
      },
      {
        label: "Kingspan",
        docs: [
          {
            label: "7+ Star Residential Solution — Roof",
            type: "Brochure",
            href: "/downloads/insulation/kingspan-campaign-page-residential-flyer-roof-floor-en-au.pdf",
          },
          {
            label: "Kooltherm K10G2 Product Datasheet",
            type: "Spec Sheet",
            href: "/downloads/insulation/kingspan-kooltherm-k10g2-product-datasheet-en-au.pdf",
          },
          {
            label: "Kooltherm K10G2w Product Datasheet",
            type: "Spec Sheet",
            href: "/downloads/insulation/kingspan-kooltherm-k10g2w-product-datasheet-en-au.pdf",
          },
          {
            label: "Victoria / NSW 7 Star Guide",
            type: "Guide",
            href: "/downloads/insulation/kingspan-vic-nsw-7-star-guide-en-au.pdf",
          },
        ],
      },
      {
        label: "CSR Bradford",
        docs: [
          {
            label: "Anticon Blanket Datasheet",
            type: "Spec Sheet",
            href: "/downloads/insulation/anticon-blanket-datasheet.pdf",
          },
          {
            label: "Enviroseal Product Comparison",
            type: "Brochure",
            href: "/downloads/insulation/enviroseal-product-comparison.pdf",
          },
          {
            label: "Residential Metal Roof",
            type: "Spec Sheet",
            href: "/downloads/insulation/residential-metal-roof-ref-b0098.pdf",
          },
          {
            label: "Thermoseal Sarking Brochure",
            type: "Brochure",
            href: "/downloads/insulation/thermoseal-sarking-brochure.pdf",
          },
          {
            label: "Wall Wrap Comparison Brochure",
            type: "Brochure",
            href: "/downloads/insulation/wall-wrap-comparison-brochure-z5fx.pdf",
          },
          {
            label: "Gold Ceiling Batt Datasheet",
            type: "Spec Sheet",
            href: "/downloads/insulation/gold-ceiling-datasheet-ma79.pdf",
          },
          {
            label: "Gold Wall Datasheet",
            type: "Spec Sheet",
            href: "/downloads/insulation/gold-wall-datasheet-kb4d.pdf",
          },
          {
            label: "Soundscreen Datasheet",
            type: "Spec Sheet",
            href: "/downloads/insulation/soundscreen-datasheet-bftk.pdf",
          },
        ],
      },
      {
        label: "SCG",
        docs: [
          {
            label: "Green Batt Datasheet",
            type: "Spec Sheet",
            href: "/downloads/insulation/69_02_01-DATASHEET-GREEN-BATT.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "heat-pumps",
    icon: "leaf",
    title: "Heat Pumps — enviroheat+",
    productHref: "/heat-pumps",
    docs: [
      {
        label: "Enviroheat Heat Pump Brochure",
        type: "Brochure",
        href: "/downloads/heat-pumps/Enviroheat-Brochure-2022-DIGITAL.pdf",
      },
      {
        label: "Enviroheat Heat Pump User Manual",
        type: "Manual",
        href: "/downloads/heat-pumps/UserManual_Enviroheat_CONSOLIDATED_rev400WEB-km2m.pdf",
      },
      {
        label: "Enviroheat Heat Pump M3 Brochure",
        type: "Brochure",
        href: "/downloads/heat-pumps/Enviroheat-Brochure-2022-DIGITAL.pdf",
      },
      {
        label: "Enviroheat Heat Pump M3 User Manual",
        type: "Manual",
        href: "/downloads/heat-pumps/UserManual_Enviroheat_CONSOLIDATED_rev500WEB_M3.pdf",
      },
      {
        label: "Enviroheat Heat Pump M9 Brochure",
        type: "Brochure",
        href: "/downloads/heat-pumps/Brochure_M9__ENVIROHEAT-CONSOLIDATED-mk3b.pdf",
      },
      {
        label: "Enviroheat Heat Pump M9 User Manual",
        type: "Manual",
        href: "/downloads/heat-pumps/User-Manual_HPPLUS_M9__ENVIROHEAT-CONSOLIDATED_rev102PRINT.pdf",
      },
    ],
  },
  {
    id: "gas-hot-water",
    icon: "bolt",
    title: "Continuous Gas Hot Water — Takagi",
    productHref: "/gas-hot-water",
    docs: [
      {
        label: "Takagi Continuous Gas Brochure",
        type: "Brochure",
        href: "/downloads/gas-hot-water/Takagi-Brochure.pdf",
      },
      {
        label: "GS-20W / GS-26W (AU56) User Manual",
        type: "Manual",
        href: "/downloads/gas-hot-water/Takagi-manual-GS-20W-AU56-GS-26W-AU56-06272019-R-k488.pdf",
      },
      {
        label: "Takagi Hot Water Warranty",
        type: "Warranty",
        href: "/downloads/gas-hot-water/Takagi-Continuous-Flow-Water-Heating-Products-Warranty-V1-131013.pdf",
      },
    ],
  },
  {
    id: "air-conditioning",
    icon: "fan",
    title: "Air Conditioning",
    productHref: "/air-conditioning",
    groups: [
      {
        label: "Haier",
        docs: [
          {
            label: "Flexis Hi-Wall Split Systems Brochure",
            type: "Brochure",
            href: "/downloads/air-conditioning/17577-HAIER-NZ-AU-Flexis-brochure_FA_03022020_LoRes1.pdf",
          },
          {
            label: "Tempo Hi-Wall Split Systems Brochure",
            type: "Brochure",
            href: "/downloads/air-conditioning/101853-haier-nz-au-tempo-hi-wall-aircon-brochure-low-res-1.pdf",
          },
          {
            label: "AC Smart Power Brochure",
            type: "Brochure",
            href: "/downloads/air-conditioning/Haier-AC-Smart-Power-Brochure-2019_V2Web.pdf",
          },
        ],
      },
      {
        label: "Samsung",
        docs: [
          {
            label: "Duct S2 System Brochure",
            type: "Brochure",
            href: "/downloads/air-conditioning/Samsung_Duct_S2_Brochure.pdf",
          },
          {
            label: "Boracay AR4500 Brochure",
            type: "Brochure",
            href: "/downloads/air-conditioning/Samsung-Boracay-Series-March-2016.pdf",
          },
        ],
      },
      {
        label: "Fujitsu",
        docs: [
          {
            label: "Split System Comfort Range Brochure",
            type: "Brochure",
            href: "/downloads/air-conditioning/Fujitsu-Split-ComfortRange_AU_Jan25-72ez.pdf",
          },
          {
            label: "Split System Lifestyle Range Brochure",
            type: "Brochure",
            href: "/downloads/air-conditioning/Fujitsu-Split-LifestyleRange_-AC-brochure-f6pt.pdf",
          },
          {
            label: "Ducted Builders Brochure",
            type: "Brochure",
            href: "/downloads/air-conditioning/Fujitsu-Split-ComfortRange_AU_Jan25-hrx3.pdf",
          },
        ],
      },
    ],
  },
  {
    id: "solar-power",
    icon: "sun",
    title: "Solar Power",
    productHref: "/solar-power",
    docs: [
      { label: "Solar panel & inverter spec sheet", type: "Spec Sheet", href: "#" },
      { label: "Battery storage spec sheet", type: "Spec Sheet", href: "#" },
      { label: "Solar power warranty terms", type: "Warranty", href: "#" },
    ],
  },
  {
    id: "ceilings",
    icon: "layers",
    title: "Ceilings — Precision Ceilings (WA)",
    productHref: "/ceilings",
    docs: [
      { label: "Precision Ceilings capability statement", type: "Brochure", href: "#" },
      { label: "Residential ceilings brochure", type: "Brochure", href: "#" },
      { label: "Ceilings warranty terms", type: "Warranty", href: "#" },
    ],
  },
];

function DocLink({ doc }: { doc: Doc }) {
  const available = doc.href !== "#";
  return (
    <a
      href={doc.href}
      target={available ? "_blank" : undefined}
      rel={available ? "noopener noreferrer" : undefined}
      aria-disabled={!available}
      className={`group flex items-center gap-4 bg-surface border border-ink/10 px-5 py-4 transition-colors ${
        available
          ? "hover:border-brand-green-dark"
          : "opacity-50 pointer-events-none"
      }`}
    >
      <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-section text-brand-green-dark group-hover:bg-brand-green group-hover:text-ink transition-colors">
        <Icon name="clipboard" className="w-4 h-4" />
      </span>
      <span className="flex-1 text-[13.5px] font-medium text-ink leading-snug">
        {doc.label}
      </span>
      <span className="shrink-0 text-[10px] font-bold uppercase text-brand-green-dark whitespace-nowrap">
        {available ? doc.type : "Coming soon"}
      </span>
    </a>
  );
}

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

      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid gap-10">
          {CATEGORIES.map((category, i) => (
            <Reveal
              key={category.id}
              id={category.id}
              delay={(i % 3) * 60}
              className="scroll-mt-24 bg-section border border-ink/5 p-7 lg:p-9"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                <div className="flex items-center gap-4 lg:w-64 shrink-0">
                  <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full bg-surface text-brand-green-dark">
                    <Icon name={category.icon} className="w-5 h-5" />
                  </span>
                  <div>
                    <h2 className="font-display text-xl text-ink leading-tight">
                      {category.title}
                    </h2>
                    <Link
                      href={category.productHref}
                      className="text-[12px] font-bold uppercase tracking-wide text-brand-green-dark hover:text-ink transition-colors"
                    >
                      View product page →
                    </Link>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-6">
                  {category.groups
                    ? category.groups.map((group) => (
                        <div key={group.label}>
                          <p className="text-[11px] font-bold uppercase tracking-wide text-ink/40 mb-3">
                            {group.label}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {group.docs.map((doc) => (
                              <DocLink key={doc.label} doc={doc} />
                            ))}
                          </div>
                        </div>
                      ))
                    : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {category.docs?.map((doc) => (
                            <DocLink key={doc.label} doc={doc} />
                          ))}
                        </div>
                      )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-section py-16 lg:py-20 border-t border-ink/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
              Company Documents
            </p>
            <h2 className="font-display text-2xl sm:text-3xl leading-[1.1] text-ink max-w-lg">
              Opening a trade account?
            </h2>
            <p className="mt-3 text-ink/55 text-[15px] leading-relaxed max-w-lg">
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
