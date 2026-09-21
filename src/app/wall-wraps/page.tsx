import type { Metadata } from "next";
import Image from "next/image";
import ProductHero from "@/components/ProductHero";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import SubcategoryModules from "@/components/SubcategoryModules";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Wall Wraps | Consolidated Energy",
  description:
    "Wall wrap products from Consolidated Energy protect the building frame, manage condensation and improve insulation performance.",
};

export default function WallWrapsPage() {
  return (
    <>
      <ProductHero
        eyebrow="Insulation"
        title="Wall Wraps"
        tagline="Protect the frame, manage condensation, improve comfort"
        description="Our wall wrap range makes homes more comfortable to live in and reduces the risk of condensation forming, which can lead to mould."
        variant="insulation"
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <p className="text-ink/60 text-[15px] leading-relaxed">
              Wall wraps are flexible building membranes applied to the
              exterior of the frame. They protect the frame, insulation and
              structure during and after construction, and reduce air-flow
              through the cavity to improve insulation efficiency.
            </p>
            <p className="text-ink/60 text-[15px] leading-relaxed">
              The right wrap depends on climate and building design &ndash;
              speak to our team about managing condensation risk for your
              specific location and construction type.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
            <Image
              src="/images/insulation/wall-wrap-product.jpg"
              alt="Consolidated Energy TradeSelect wall wrap fitted to a building frame"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="Why It Matters"
        title="Wall wrap benefits"
        items={[
          {
            icon: "shield",
            label: "Protects the Frame",
            description: "Safeguards the frame, insulation and structure during and after construction.",
          },
          {
            icon: "wind",
            label: "Reduces Air-Flow",
            description: "Cuts air-flow through cavities to improve insulation efficiency.",
          },
          {
            icon: "droplet",
            label: "Manages Condensation",
            description: "Selected to suit your climate and reduce condensation risk.",
          },
          {
            icon: "shieldCheck",
            label: "Reduces Mould Risk",
            description: "Helps prevent the build-up of moisture that can lead to mould.",
          },
        ]}
        columns={4}
      />

      <SubcategoryModules
        eyebrow="Product Range"
        title="Wall wrap products"
        items={[
          {
            icon: "droplet",
            title: "Bradford Thermoseal",
            description: "Non-permeable vapour barrier suited to warmer climates.",
            specs: [
              "Contributes reflective air-gap R-Value",
              "Reduces moisture transmission",
              "Reduces drafts",
            ],
          },
          {
            icon: "wind",
            title: "Enviroseal ProctorWrap",
            description: "Vapour-permeable wrap suited to colder climates.",
            specs: [
              "Allows moisture vapour to pass through",
              "Blocks liquid water and dust",
            ],
          },
          {
            icon: "shield",
            title: "Ametalin SilverWrap",
            description: "Medium vapour barrier with 97% reflectivity.",
            specs: [
              "97% reflectivity",
              "Suits residential and commercial buildings",
              "Bushfire resistant",
            ],
          },
          {
            icon: "layers",
            title: "Ametalin SilverSark",
            description: "Double-sided reflective foil for roofs and walls.",
            specs: [
              "Increases system R-Value",
              "Multi-purpose roof and wall use",
              "Bushfire suitable",
            ],
          },
        ]}
      />

      <ProductRange exclude="insulation" />
      <ContactSection />
    </>
  );
}
