import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import SubcategoryModules from "@/components/SubcategoryModules";
import PhotoGallery from "@/components/PhotoGallery";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Insulation | Consolidated Energy",
  description:
    "Consolidated Energy is the largest independent distributor of insulation in Australia, supplying and installing insulation across the residential, commercial, HVAC and industrial markets.",
};

const INSULATION_TYPES = [
  { icon: "home" as const, label: "Ceiling Insulation", description: "Reduces heat loss and gain through the roof space.", href: "/ceiling-insulation" },
  { icon: "wave" as const, label: "Acoustic Insulation", description: "Sound-dampening for walls, floors and ceilings.", href: "/acoustic-insulation" },
  { icon: "wall" as const, label: "External Wall Insulation", description: "Improves thermal performance through the wall cavity.", href: "/external-wall-insulation" },
  { icon: "layers" as const, label: "Wall Wraps", description: "Weather and vapour control layers behind the cladding.", href: "/wall-wraps" },
  { icon: "shield" as const, label: "Roof Sarking", description: "Reflective and protective sarking under the roof covering.", href: "/roof-sarking" },
  { icon: "cloud" as const, label: "Stone / Mineral Wool", description: "High-performance rigid insulation for demanding applications.", href: "/rockwool-insulation" },
];

export default function InsulationPage() {
  return (
    <>
      <ProductHero
        eyebrow="Product Range"
        title="Insulation"
        tagline="Improved comfort all year round"
        description="Insulation is the key to true comfort and lower household running costs. Consolidated Energy is the largest independent distributor of insulation in Australia, and the only private insulation company with a national distribution network across Australia's major capitals."
        variant="insulation"
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <p className="text-ink/60 text-[15px] leading-relaxed">
            Because we&apos;re not tied to one manufacturer, our
            recommendations are based on product merits &ndash; regardless of
            brand. We work closely with Australia&apos;s leading
            manufacturers to secure competitive pricing through our buying
            power, and we supply and install insulation across the
            residential builder market, the commercial sector, the HVAC
            industry and industrial applications.
          </p>
          <p className="text-ink/60 text-[15px] leading-relaxed">
            Our product range spans glasswool, polyester, reflective
            insulation and high-performance rigid options, so whatever the
            application, we can specify and deliver the right solution
            supplied and installed by one account.
          </p>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="Product Range"
        title="Insulation product categories"
        items={INSULATION_TYPES}
      />

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

      <SubcategoryModules
        eyebrow="Applications"
        title="Specified by application"
        items={[
          {
            icon: "home",
            title: "Thermal Insulation",
            description: "Ceiling, wall and roof insulation for year-round comfort.",
          },
          {
            icon: "wave",
            title: "Acoustic Insulation",
            description: "Sound-dampening solutions for walls, floors and ceilings.",
          },
          {
            icon: "cloud",
            title: "Specialty Systems",
            description: "Wall wraps and stone or mineral wool for high-performance builds.",
          },
        ]}
      />

      <ProductRange exclude="insulation" />
      <ContactSection />
    </>
  );
}
