import type { Metadata } from "next";
import CareersInterestForm from "@/components/CareersInterestForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Careers | Consolidated Energy",
  description:
    "Find your next opportunity with Consolidated Energy, a national provider of energy-efficient products and services to Australia's residential and commercial construction industries.",
};

// Current openings, each linking to its SEEK listing (description + apply).
// Update this list as roles open and close.
const VACANCIES = [
  {
    title: "Operations Coordinator",
    location: "Meadowbrook, Brisbane QLD",
    workType: "Full time",
    summary:
      "Support our Queensland team with scheduling, invoicing, orders and customer queries.",
    href: "https://au.seek.com/job/95486755",
  },
  {
    title: "Business Development Manager",
    location: "Meadowbrook, Brisbane QLD",
    workType: "Full time",
    summary:
      "Win new clients and build long-term partnerships with homebuilders across Queensland.",
    href: "https://au.seek.com/job/95406086",
  },
  {
    title: "Delivery Driver (MR)",
    location: "Meadowbrook, Brisbane QLD",
    workType: "Full time",
    summary:
      "Deliver orders to customers across Brisbane and surrounds, and help the warehouse team with picking, packing and stock.",
    href: "https://au.seek.com/job/95086825",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 text-brand-green text-[12px] font-semibold tracking-[0.15em] uppercase mb-6">
              <span className="w-6 h-px bg-brand-green" />
              Careers
            </div>
            <h1 className="font-display text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.1] tracking-tight max-w-2xl">
              Find Your Next Opportunity
            </h1>
          </div>

          <div className="flex flex-col gap-5 text-white/60 text-[15px] leading-relaxed max-w-xl lg:pt-12">
            <p>
              Consolidated Energy is a national provider of energy-efficient
              products and services to Australia&apos;s residential and
              commercial construction industries.
            </p>
            <p>
              Our teams work across insulation, air conditioning, solar, hot
              water and other specialist building services, supporting
              builders, developers and customers from product supply and
              project coordination through to installation and delivery.
            </p>
            <p>
              As our business continues to grow, we&apos;re always interested
              in meeting talented people who want to build their careers in the
              construction, energy and technical services industries.
            </p>
            <p>
              Explore our current opportunities and find out more about joining
              Consolidated Energy.
            </p>
            <div className="mt-3">
              <a
                href="#current-opportunities"
                className="inline-flex items-center justify-center rounded-sm bg-brand-green px-6 py-3.5 text-[12px] font-bold uppercase tracking-wide text-brand-dark hover:bg-white transition-colors"
              >
                View Current Vacancies
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="current-opportunities"
        className="bg-surface py-20 lg:py-24 scroll-mt-24"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="mb-10">
            <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
              Join Our Team
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink">
              Current Opportunities
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VACANCIES.map((job, i) => (
              <Reveal key={job.href} delay={(i % 3) * 80} className="h-full">
                <a
                  href={job.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col bg-section border border-ink/10 p-6 lg:p-7 hover:border-brand-green-dark transition-colors"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink/45">
                    {job.workType} · {job.location}
                  </p>
                  <h3 className="mt-3 font-display text-xl leading-snug text-ink">
                    {job.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink/55">
                    {job.summary}
                  </p>
                  <span className="mt-6 self-start text-[12px] font-bold uppercase tracking-wide text-ink border-b border-ink pb-1 group-hover:text-brand-green-dark group-hover:border-brand-green-dark transition-colors">
                    View &amp; Apply on SEEK
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="register-interest" className="bg-section py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <Reveal className="flex flex-col justify-center">
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink max-w-md">
              Don&apos;t See the Right Role?
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-ink/55 text-[15px] leading-relaxed max-w-md">
              <p>
                We&apos;re always interested in hearing from experienced people
                who could bring valuable skills and capability to our business.
              </p>
              <p>
                Whether your experience is in trades and installation,
                operations, project coordination, sales, customer service or
                technical services, we&apos;d be happy to hear from you.
              </p>
              <p>
                Submit an expression of interest and tell us a little about
                yourself, your experience and what you could bring to
                Consolidated Energy.
              </p>
            </div>
          </Reveal>

          <CareersInterestForm />
        </div>
      </section>
    </>
  );
}
