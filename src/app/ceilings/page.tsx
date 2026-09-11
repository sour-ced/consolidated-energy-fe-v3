import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import SubcategoryModules from "@/components/SubcategoryModules";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Ceilings | Consolidated Energy",
  description:
    "Precision Ceilings by Consolidated Energy — wall and ceiling residential construction contracting for Western Australia, from project tendering through to residential installation.",
};

export default function CeilingsPage() {
  return (
    <>
      <ProductHero
        eyebrow="Product Range"
        title="Ceilings"
        tagline="The wall and ceilings residential construction contractors"
        description="Precision Ceilings brings varied expertise in multi-residential and industrial projects, handling everything from initial proposals through to final delivery for Western Australian customers."
        variant="ceilings"
        badge="WA only"
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
            Service Areas
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-brand-dark max-w-2xl">
            Concept to completion, under one roof.
          </h2>
        </div>
      </section>

      <SubcategoryModules
        eyebrow="Services"
        title="What we look after"
        items={[
          {
            icon: "clipboard",
            title: "Project Tendering & Take Off",
            description: "From concept to completion, we can look after the whole process.",
          },
          {
            icon: "home",
            title: "Residential Ceilings",
            description:
              "No matter the size of your home, we have a solution that will fit your needs. We can help design and install.",
          },
        ]}
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="border border-black/10 p-7 max-w-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-black/40 mb-2">
              Western Australia Office
            </p>
            <p className="text-[14px] text-brand-dark">
              11 Cressall Road, Balcatta WA 6021
            </p>
            <a
              href="mailto:precisionceilings@consolidatedenergy.com.au"
              className="mt-2 inline-block text-[14px] text-brand-green-dark hover:underline"
            >
              precisionceilings@consolidatedenergy.com.au
            </a>
          </div>
        </div>
      </section>

      <ProductRange exclude="ceilings" />
      <ContactSection />
    </>
  );
}
