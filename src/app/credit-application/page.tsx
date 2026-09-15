import type { Metadata } from "next";
import Icon from "@/components/Icons";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Customer Credit Application | Consolidated Energy",
  description:
    "Open a trade account with Consolidated Energy. Complete the Customer Credit Application to start ordering products and services on account.",
};

const STEPS = [
  {
    title: "Complete the application",
    description: "Download and complete the Customer Credit Application form with your business and trading details.",
  },
  {
    title: "Send it to your local office",
    description: "Email the completed form to your local Consolidated Energy office, or hand it to your account manager.",
  },
  {
    title: "Start ordering on account",
    description: "Once approved, order across the full product range on account through your local team.",
  },
];

export default function CreditApplicationPage() {
  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-20">
          <div className="flex items-center gap-3 text-brand-green text-[12px] font-semibold tracking-[0.15em] uppercase mb-6">
            <span className="w-6 h-px bg-brand-green" />
            Customer Credit Application
          </div>
          <h1 className="font-display text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.1] tracking-tight max-w-2xl">
            Open a trade account with Consolidated Energy.
          </h1>
          <p className="mt-6 text-white/60 text-[15px] leading-relaxed max-w-xl">
            Builders and subcontractors can order across our full product
            range on account. Complete the credit application to get set up.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-[1fr_360px] gap-12">
          <div>
            <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
              How it works
            </p>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink max-w-xl mb-10">
              Three steps to a trade account.
            </h2>

            <div className="grid gap-6">
              {STEPS.map((step, i) => (
                <div key={step.title} className="flex items-start gap-5">
                  <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-section font-display text-lg text-brand-green-dark">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-ink">{step.title}</h3>
                    <p className="mt-1 text-[14px] text-ink/55 leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-section border border-ink/10 p-7 h-fit">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink/40 mb-4">
              Download the form
            </p>
            <a
              href="/information-hub"
              className="group flex items-center gap-4 bg-surface border border-ink/10 px-5 py-4 hover:border-brand-green-dark transition-colors"
            >
              <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-section text-brand-green-dark group-hover:bg-brand-green group-hover:text-ink transition-colors">
                <Icon name="clipboard" className="w-5 h-5" />
              </span>
              <span className="flex-1 text-[14px] font-medium text-ink leading-snug">
                Customer Credit Application form
              </span>
              <span className="shrink-0 text-[11px] font-bold uppercase text-brand-green-dark">PDF</span>
            </a>
            <p className="mt-5 text-[13px] text-ink/50 leading-relaxed">
              Questions about your application? Email{" "}
              <a href="mailto:info@consolidatedenergy.com.au" className="text-brand-green-dark hover:underline">
                info@consolidatedenergy.com.au
              </a>{" "}
              or contact your local office.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
