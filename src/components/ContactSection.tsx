import EnquiryForm from "./EnquiryForm";

export default function ContactSection() {
  return (
    <section id="enquiry" className="bg-brand-cream py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-brand-dark max-w-md">
            Open a trade account or ask us a question.
          </h2>
          <p className="mt-5 text-black/55 text-[15px] leading-relaxed max-w-sm">
            Speak to one of our home energy specialists and they will be able
            to advise you on the best solution for your needs.
          </p>

          <div className="mt-8 bg-white border border-black/10 divide-y divide-black/10 max-w-sm">
            <div className="p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-black/40 mb-1.5">
                Head Office
              </p>
              <p className="text-[14px] text-brand-dark">
                102 Indian Drive, Keysborough, VIC, 3173
              </p>
            </div>
            <div className="p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-black/40 mb-1.5">
                Email
              </p>
              <a
                href="mailto:info@consolidatedenergy.com.au"
                className="text-[14px] text-brand-green-dark hover:underline"
              >
                info@consolidatedenergy.com.au
              </a>
            </div>
            <div className="p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-black/40 mb-1.5">
                Hours
              </p>
              <p className="text-[14px] text-brand-dark">
                Mon&ndash;Fri 9am&ndash;4pm &middot; Sat &amp; Sun closed
              </p>
            </div>
          </div>
        </div>

        <EnquiryForm />
      </div>
    </section>
  );
}
