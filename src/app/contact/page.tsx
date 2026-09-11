import type { Metadata } from "next";
import AustraliaMap from "@/components/AustraliaMap";
import OfficeLocations from "@/components/OfficeLocations";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us | Consolidated Energy",
  description:
    "Get in touch with Consolidated Energy. National head office in Keysborough VIC, plus offices in Perth, Brisbane and Canberra. Open a trade account or send an enquiry.",
};

const STATES = ["VIC", "NSW", "QLD", "SA", "WA", "TAS"];

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-20">
          <div className="flex items-center gap-3 text-brand-green text-[12px] font-semibold tracking-[0.15em] uppercase mb-6">
            <span className="w-6 h-px bg-brand-green" />
            Contact
          </div>
          <h1 className="font-display text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.1] tracking-tight max-w-2xl">
            Get in touch with your local team.
          </h1>
          <p className="mt-6 text-white/60 text-[15px] leading-relaxed max-w-xl">
            Speak to one of our home energy specialists and they will be able
            to advise you on the best solution for your needs.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
              Find Your Local Office
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-brand-dark max-w-md mb-5">
              Our national network, state by state.
            </h2>
            <p className="text-black/55 text-[15px] leading-relaxed max-w-sm mb-8">
              Wherever you are building, there&apos;s a local Consolidated
              Energy team ready to help, backed by offices and warehouses
              across the country.
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

      <section id="enquiry" className="bg-brand-cream py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
              Send an Enquiry
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-brand-dark max-w-md">
              Open a trade account or ask us a question.
            </h2>
            <p className="mt-5 text-black/55 text-[15px] leading-relaxed max-w-sm">
              Fill in the form and a member of our team will get back to you,
              or email us directly at{" "}
              <a
                href="mailto:info@consolidatedenergy.com.au"
                className="text-brand-green-dark hover:underline"
              >
                info@consolidatedenergy.com.au
              </a>
              .
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
