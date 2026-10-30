import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import PhotoGallery from "@/components/PhotoGallery";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";
import CategoryLinkCards from "@/components/CategoryLinkCards";
import { INSULATION_TYPES } from "@/lib/insulation";

export const metadata: Metadata = {
  title: "Insulation | Consolidated Energy",
  description:
    "Consolidated Energy is one of Australia's largest independent distributors of insulation, with a national distribution network supporting residential, commercial, HVAC and industrial projects across Australia.",
};

export default function InsulationPage() {
  return (
    <>
      <ProductHero
        eyebrow="Product Range"
        title="Insulation"
        tagline="Comfort starts with the right insulation"
        description="The right insulation plays an important role in creating more comfortable, energy-efficient homes and buildings while helping to reduce ongoing heating and cooling costs."
        variant="insulation"
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <p className="font-display text-xl sm:text-2xl leading-snug text-ink">
            Consolidated Energy is one of Australia&apos;s largest independent
            distributors of insulation, with a national distribution network
            supporting residential, commercial, HVAC and industrial projects
            across Australia.
          </p>
          <div className="flex flex-col gap-5">
            <p className="text-ink/60 text-[15px] leading-relaxed">
              Our independence means we&apos;re not tied to any one
              manufacturer. Instead, we can recommend insulation solutions
              based on the requirements of each project, drawing from an
              extensive range of quality products from leading Australian and
              international manufacturers.
            </p>
            <p className="text-ink/60 text-[15px] leading-relaxed">
              We supply and install insulation for residential builders and
              provide a comprehensive range of glasswool, polyester,
              reflective and high-performance rigid insulation for commercial,
              HVAC and industrial applications.
            </p>
            <p className="text-ink/60 text-[15px] leading-relaxed">
              With extensive experience across the Australian construction
              industry, we understand the importance of quality installation,
              reliable supply and keeping projects moving. Our national reach,
              strong manufacturer relationships and buying power enable us to
              provide competitive solutions backed by dependable service from
              specification and supply through to installation.
            </p>
          </div>
        </div>
      </section>

      <PhotoGallery
        eyebrow="National Network"
        title="Warehousing and distribution, ready to supply"
        intro="Stock is held and dispatched from warehouses across the country, backed by a fleet ready to get product to site."
        photos={[
          {
            src: "/images/insulation/warehouse-distribution-truck.jpg",
            alt: "Consolidated Energy delivery vehicle in front of stacked insulation bales",
          },
          {
            src: "/images/insulation/warehouse-truck-acoustic.jpg",
            alt: "Consolidated Energy delivery vehicle loaded with acoustic batts",
          },
          {
            src: "/images/insulation/warehouse-truck-act-branch.jpg",
            alt: "Consolidated Energy ACT branch delivery vehicle in the warehouse",
          },
        ]}
      />

      <CategoryLinkCards
        eyebrow="Product Range"
        title="Our Insulation Range"
        intro="Whatever the application, Consolidated Energy can help identify and deliver the right insulation solution, supported by quality products, experienced installation teams and reliable service."
        items={INSULATION_TYPES}
      />

      <ProductRange exclude="insulation" />
      <ContactSection />
    </>
  );
}
