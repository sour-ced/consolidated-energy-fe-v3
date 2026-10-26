import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import SubcategoryModules from "@/components/SubcategoryModules";
import Reveal from "@/components/Reveal";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Ceilings | Consolidated Energy",
  description:
    "Available to our Western Australian customers, Consolidated Energy provides ceiling services supported by an experienced team with capability across residential, multi-residential and industrial construction.",
};

export default function CeilingsPage() {
  return (
    <>
      <ProductHero
        eyebrow="Product Range"
        title="Ceilings"
        tagline="Ceiling solutions from tender through to installation"
        description="Available to our Western Australian customers, Consolidated Energy provides ceiling services supported by an experienced team with capability across residential, multi-residential and industrial construction."
        variant="ceilings"
        badge="WA only"
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-10 lg:gap-16 items-start">
          <Reveal>
            <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
              Western Australia
            </p>
            <p className="font-display text-xl sm:text-2xl leading-snug text-ink">
              From project tendering and take-offs through to installation and
              completion, our team works with builders and project teams to
              deliver practical ceiling solutions that meet the requirements of
              each project.
            </p>
          </Reveal>
          <Reveal delay={100} className="border border-ink/10 p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink/40 mb-2">
              Western Australia Office
            </p>
            <p className="text-[14px] text-ink">
              11 Cressall Road, Balcatta WA 6021
            </p>
            <a
              href="mailto:precisionceilings@consolidatedenergy.com.au"
              className="mt-2 inline-block text-[14px] text-brand-green-dark hover:underline break-all"
            >
              precisionceilings@consolidatedenergy.com.au
            </a>
          </Reveal>
        </div>
      </section>

      <SubcategoryModules
        eyebrow="Services"
        title="Our Ceiling Services"
        columns={2}
        items={[
          {
            icon: "clipboard",
            title: "Project Tendering & Take-Offs",
            description: [
              "Accurate planning from the outset helps support efficient project delivery.",
              "Our team can assist with project tendering and take-offs, reviewing project requirements and documentation to help determine quantities, scope and installation requirements before construction begins.",
              "From tender through to completion, we work with our customers to provide continuity across the process.",
            ],
          },
          {
            icon: "home",
            title: "Residential Ceilings",
            description: [
              "From individual homes to larger residential developments, Consolidated Energy provides ceiling solutions tailored to the requirements of each project.",
              "Our team can assist with planning, product selection and installation, providing a coordinated service from initial requirements through to completed construction.",
            ],
          },
        ]}
      />

      <section className="bg-surface py-20 lg:py-24">
        <Reveal className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
            Our Experience
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink max-w-2xl mb-6">
            Experience from Tender to Completion
          </h2>
          <div className="text-ink/60 text-[15px] leading-relaxed grid md:grid-cols-2 gap-4 md:gap-12">
            <p>
              With experience across residential, multi-residential and
              industrial construction, our team understands the importance of
              accurate estimating, reliable scheduling and quality installation.
            </p>
            <p>
              By supporting projects from the early tender stages through to
              installation, Consolidated Energy provides customers with a
              streamlined ceiling service backed by broader construction
              industry experience.
            </p>
          </div>
        </Reveal>
      </section>

      <ProductRange exclude="ceilings" />
      <ContactSection />
    </>
  );
}
