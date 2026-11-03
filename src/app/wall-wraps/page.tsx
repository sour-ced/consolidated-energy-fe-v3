import type { Metadata } from "next";
import Image from "next/image";
import ProductHero from "@/components/ProductHero";
import InsulationTypeNav from "@/components/InsulationTypeNav";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import SubcategoryModules from "@/components/SubcategoryModules";
import AdviceCallout from "@/components/AdviceCallout";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";
import { insulationType } from "@/lib/insulation";

export const metadata: Metadata = {
  title: "Wall Wraps | Consolidated Energy",
  description:
    "Wall wraps are pliable building membranes installed to the outside of the building frame, providing an additional layer of protection during construction and once the home is complete.",
};

const TYPE = insulationType("/wall-wraps");

export default function WallWrapsPage() {
  return (
    <>
      <ProductHero
        eyebrow="Insulation"
        title="Wall Wraps"
        tagline="Protect the frame, manage condensation and improve comfort"
        description="Wall wraps are pliable building membranes installed to the outside of the building frame, providing an additional layer of protection during construction and once the home is complete."
        variant="insulation"
        imageSrc={TYPE.src}
        imageAlt={TYPE.alt}
      />
      <InsulationTypeNav current={TYPE.href} />

      <section className="bg-surface py-20 lg:py-24 border-b border-ink/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <p className="text-ink/60 text-[15px] leading-relaxed">
              By helping protect the frame, insulation and building structure
              from wind-driven rain and dust, wall wraps can contribute to a
              more comfortable and energy-efficient home. They can also reduce
              air movement through the building cavity, helping insulation
              perform more effectively.
            </p>
            <p className="text-ink/60 text-[15px] leading-relaxed">
              Choosing the right wall wrap is important. Permeable and
              non-permeable membranes manage moisture differently, so the
              appropriate solution should consider the local climate, building
              design and condensation risk.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-section">
            <Image
              src="/images/insulation/wall-wrap-product.jpg"
              alt="Wall wrap fitted to a timber building frame"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="Why It Matters"
        title="Wall Wrap Benefits"
        items={[
          {
            icon: "shield",
            label: "Protects the Building",
            description:
              "Helps protect the frame, insulation and building structure from wind-driven rain and dust.",
          },
          {
            icon: "wind",
            label: "Improves Insulation Performance",
            description:
              "Reduces air movement through the building cavity, helping insulation work more effectively.",
          },
          {
            icon: "bolt",
            label: "Supports Energy Efficiency",
            description:
              "Improved building envelope performance can help reduce heating and cooling requirements.",
          },
          {
            icon: "droplet",
            label: "Manages Condensation",
            description:
              "The right membrane can help manage moisture and reduce the risk of condensation within the building structure.",
          },
          {
            icon: "home",
            label: "Improves Indoor Comfort",
            description:
              "Helps create a better-performing building envelope for a more comfortable indoor environment.",
          },
        ]}
      />

      <SubcategoryModules
        eyebrow="Product Range"
        title="Wall Wrap Products"
        columns={2}
        items={[
          {
            icon: "droplet",
            title: "Bradford Thermoseal Wall Wrap",
            image: {
              src: "/images/insulation/products/bradford-thermoseal.jpg",
              alt: "Bradford Thermoseal reflective wall wrap roll",
              fit: "contain",
            },
            description: [
              "Bradford Thermoseal is a non-permeable reflective wall wrap designed to act as a vapour barrier and reduce the transmission of moisture through the building structure.",
              "When installed adjacent to an appropriate air cavity, its reflective surface can also contribute to the thermal performance of the wall system. Thermoseal is suited to applications where a non-permeable membrane is appropriate for the climate and building design.",
            ],
            specsLabel: "Key features include:",
            specs: [
              "Acts as a non-permeable vapour barrier",
              "Helps reduce water vapour transmission",
              "Can contribute a reflective air-gap R-value",
              "Reduces draughts to help insulation perform more effectively",
              "Helps protect the building frame from wind-driven rain and dust",
            ],
            download: {
              label: "Bradford Wall Wrap Brochure",
              href: "/downloads/insulation/wall-wrap-comparison-brochure-z5fx.pdf",
            },
          },
          {
            icon: "wind",
            title: "Enviroseal ProctorWrap",
            image: {
              src: "/images/insulation/products/enviroseal-proctorwrap.jpg",
              alt: "Water beading on Enviroseal ProctorWrap vapour-permeable membrane",
              fit: "cover",
            },
            description: [
              "Enviroseal ProctorWrap is a vapour-permeable wall wrap that allows water vapour to pass through the membrane while helping prevent liquid water and dust from entering from outside.",
              "Its vapour-permeable construction can assist with condensation management by allowing moisture within the building envelope to escape, making it particularly suited to applications where moisture management is important.",
            ],
            specsLabel: "Key features include:",
            specs: [
              "Vapour-permeable construction",
              "Allows water vapour to pass through the membrane",
              "Helps prevent the entry of liquid water and dust",
              "Assists with condensation management",
              "Reduces draughts to help insulation perform more effectively",
              "Helps protect the building frame from wind-driven rain",
            ],
          },
          {
            icon: "shield",
            title: "Ametalin SilverWrap™",
            image: {
              src: "/images/insulation/products/ametalin-silverwrap.jpg",
              alt: "Roll of Ametalin SilverWrap reflective wall wrap",
              fit: "cover",
            },
            description:
              "Ametalin SilverWrap™ is a reflective wall wrap designed for residential and commercial construction, combining moisture and weather protection with reflective thermal performance.",
            specsLabel: "Key features include:",
            specs: [
              "Medium vapour barrier and high water barrier",
              "Suitable for a range of residential and commercial wall systems",
              "Highly reflective surface contributes to thermal performance",
              "Durable and tear-resistant",
              "Helps protect against wind, rain and dust",
              "Lightweight and high strength",
              "Suitable for use in bushfire-prone areas when installed in accordance with applicable requirements",
            ],
          },
          {
            icon: "layers",
            title: "Ametalin SilverSark®",
            image: {
              src: "/images/insulation/products/ametalin-silversark.jpg",
              alt: "Ametalin SilverSark double-sided reflective foil roll",
              fit: "contain",
            },
            description: [
              "Ametalin SilverSark® is an extra heavy-duty, double-sided reflective foil insulation and radiant barrier suitable for roof and wall applications.",
              "Its double-sided reflective construction can contribute to the overall thermal performance of the building system while also providing condensation and moisture management benefits.",
            ],
            specsLabel: "Key features include:",
            specs: [
              "Double-sided reflective foil construction",
              "Can contribute to increased system R-value",
              "Suitable for a range of roof and wall applications",
              "Provides condensation and moisture control",
              "High strength, lightweight and flexible",
              "Anti-glare coating on one side for easier installation",
              "Suitable for use in bushfire-prone areas when installed in accordance with applicable requirements",
            ],
          },
        ]}
      />

      <AdviceCallout>
        {"For advice on selecting the right wall wrap for your climate, building design and application, contact the Consolidated Energy team."}
      </AdviceCallout>

      <ProductRange exclude="insulation" />
      <ContactSection />
    </>
  );
}
