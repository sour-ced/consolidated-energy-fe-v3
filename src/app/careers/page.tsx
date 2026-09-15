import type { Metadata } from "next";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Careers | Consolidated Energy",
  description:
    "Join Consolidated Energy — a national team supplying and installing home energy products for builders across Australia since 1963.",
};

const REASONS = [
  { icon: "home" as const, label: "National Team", description: "Offices and warehouses across every mainland state." },
  { icon: "leaf" as const, label: "Growing Categories", description: "Solar, batteries and heat pumps are growing fast." },
  { icon: "shieldCheck" as const, label: "Established Business", description: "Supplying Australian builders for decades." },
  { icon: "gauge" as const, label: "Room to Grow", description: "From warehouse and install teams through to sales." },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-20">
          <div className="flex items-center gap-3 text-brand-green text-[12px] font-semibold tracking-[0.15em] uppercase mb-6">
            <span className="w-6 h-px bg-brand-green" />
            Careers
          </div>
          <h1 className="font-display text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.1] tracking-tight max-w-2xl">
            Build your career with Australia&apos;s home energy specialists.
          </h1>
          <p className="mt-6 text-white/60 text-[15px] leading-relaxed max-w-xl">
            We&apos;re a national team across sales, warehousing and
            installation, working with builders on every kind of home
            energy product.
          </p>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="Why Consolidated Energy"
        title="A national business, built to grow"
        items={REASONS}
        columns={4}
      />

      <section className="bg-section py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
              Current Openings
            </p>
            <h2 className="font-display text-2xl sm:text-3xl leading-[1.1] text-ink max-w-lg">
              No open roles right now — we&apos;d still like to hear from you.
            </h2>
            <p className="mt-3 text-ink/55 text-[15px] leading-relaxed max-w-lg">
              Send us your resume and we&apos;ll keep it on file for our next
              round of hiring across sales, warehouse and installation roles.
            </p>
          </div>
          <a
            href="mailto:careers@consolidatedenergy.com.au"
            className="inline-flex items-center justify-center rounded-sm bg-brand-dark px-6 py-3.5 text-[12px] font-bold uppercase tracking-wide text-white hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Email Your Resume
          </a>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
