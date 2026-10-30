import type { Metadata } from "next";
import Image from "next/image";
import ProductHero from "@/components/ProductHero";
import InsulationTypeNav from "@/components/InsulationTypeNav";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import SubcategoryModules from "@/components/SubcategoryModules";
import Reveal from "@/components/Reveal";
import AdviceCallout from "@/components/AdviceCallout";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";
import { insulationType } from "@/lib/insulation";

export const metadata: Metadata = {
  title: "Acoustic Insulation | Consolidated Energy",
  description:
    "Acoustic insulation helps reduce sound transfer between rooms, floors and adjoining spaces, creating quieter and more comfortable indoor environments.",
};

const TYPE = insulationType("/acoustic-insulation");

export default function AcousticInsulationPage() {
  return (
    <>
      <ProductHero
        eyebrow="Insulation"
        title="Acoustic Insulation"
        tagline="Reduce unwanted noise for quieter, more comfortable spaces"
        description="Noise from traffic, neighbours and everyday household activity can affect the comfort and enjoyment of a home. Acoustic insulation helps reduce sound transfer between rooms, floors and adjoining spaces, creating quieter and more comfortable indoor environments."
        variant="insulation"
        imageSrc={TYPE.src}
        imageAlt={TYPE.alt}
      />
      <InsulationTypeNav current={TYPE.href} />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-8 lg:gap-12">
          <p className="text-ink/60 text-[15px] leading-relaxed">
            Consolidated Energy offers its own range of high-density glasswool
            acoustic batts, alongside acoustic insulation solutions from
            leading manufacturers for residential and commercial construction.
            Our range includes products designed for internal walls, floors,
            ceilings and other applications where reducing noise transfer and
            improving acoustic comfort are important.
          </p>
          <p className="text-ink/60 text-[15px] leading-relaxed">
            We also offer specialist acoustic products for spaces where hard
            surfaces and high noise levels can affect sound quality, including
            offices, cafés, restaurants, auditoriums and other residential and
            commercial environments.
          </p>
        </div>
      </section>

      <section className="bg-section py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
            On the Job
          </p>
          <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink max-w-xl mb-12">
            Acoustic batts in Australian homes
          </h2>
          <Reveal className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2/1] lg:max-w-[1024px] overflow-hidden bg-ink/5">
            <Image
              src="/images/insulation/acoustic-install-ceiling.jpg"
              alt="Installer fitting acoustic batts into a ceiling frame"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-[50%_30%]"
            />
          </Reveal>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="Why It Matters"
        title="Acoustic Insulation Benefits"
        items={[
          {
            icon: "speakerMute",
            label: "Reduced Noise Transfer",
            description:
              "Helps limit unwanted sound travelling between rooms, floors and adjoining spaces.",
          },
          {
            icon: "home",
            label: "Improved Acoustic Comfort",
            description:
              "Helps manage everyday noise from household activity, entertainment, traffic and neighbouring properties.",
          },
          {
            icon: "shieldCheck",
            label: "Greater Privacy",
            description:
              "Helps reduce sound transmission between bedrooms, bathrooms, living areas, home offices and other internal spaces.",
          },
          {
            icon: "suitcase",
            label: "Versatile Applications",
            description:
              "Solutions are available for homes, offices, hospitality venues and other commercial environments.",
          },
          {
            icon: "wave",
            label: "Improved Sound Quality",
            description:
              "Specialist acoustic products can help absorb reflected sound and reduce echo in spaces with hard surfaces.",
          },
          {
            icon: "wall",
            label: "New Builds and Existing Spaces",
            description:
              "Options are available for installation during construction as well as specialist acoustic treatments for existing environments.",
          },
        ]}
      />

      <SubcategoryModules
        eyebrow="Product Range"
        title="Acoustic Insulation Products"
        columns={3}
        items={[
          {
            icon: "layers",
            title: "Consolidated Energy Acoustic Insulation",
            image: {
              src: "/images/insulation/acoustic-batts-bag.jpg",
              alt: "Consolidated Energy high density acoustic batts bag",
              fit: "contain",
            },
            description: [
              "Consolidated Energy Acoustic Insulation is high-density glasswool designed to reduce sound transmission while also providing effective thermal performance.",
              "Suitable for internal walls, partition systems, ceiling voids and mid-floor applications, the batts help create quieter, more comfortable indoor environments by reducing airborne noise between adjoining spaces. They can also be used in selected external wall, roof space and mechanical plant room applications where both acoustic and thermal performance are required.",
              "Lightweight and flexible, Consolidated Energy Acoustic Insulation is suitable for a range of residential and commercial applications, including new construction and refurbishment projects.",
            ],
            specsLabel: "Key features and benefits include:",
            specs: [
              "High-density glasswool construction for effective acoustic performance",
              "Helps reduce airborne noise transmission between adjoining spaces",
              "Provides both acoustic and thermal insulation performance",
              "Suitable for internal walls, partitions, ceiling voids and mid-floor applications",
              "Available in sizes and thicknesses to suit common wall framing systems",
              "Lightweight and flexible for practical installation",
              "Suitable for residential and commercial new builds and refurbishment projects",
            ],
          },
          {
            icon: "wave",
            title: "Polymax Absorb",
            image: {
              src: "/images/insulation/products/polymax-absorb-application.jpg",
              alt: "Commercial ceiling lined with polyester acoustic insulation above pendant lighting",
              fit: "cover",
            },
            description: [
              "Polymax Absorb is a thermally bonded polyester fibre insulation designed to provide high-performance acoustic absorption across a broad range of frequencies.",
              "Available in a range of densities and thicknesses, it is suitable for residential, commercial, community and industrial applications where managing noise, echo and sound quality is important.",
            ],
            specsLabel: "Key benefits include:",
            specs: [
              "Available in low (LD), medium (MD), high (HD) and extra-high (XHD) densities",
              "Range of thicknesses to suit different acoustic requirements",
              "Helps reduce echo and improve sound quality",
              "Provides effective sound absorption across a broad range of frequencies",
              "Suitable for use behind perforated wall and ceiling panels",
              "Ideal for auditoriums, cinemas, studios, sports halls and other noise-sensitive spaces",
            ],
          },
          {
            icon: "speakerMute",
            title: "Bradford SoundScreen",
            image: {
              src: "/images/insulation/products/bradford-soundscreen.jpg",
              alt: "Bradford SoundScreen high density acoustic insulation pack",
              fit: "contain",
            },
            description: [
              "Bradford SoundScreen acoustic insulation is designed to reduce noise transfer through internal walls and between floors, helping create quieter and more comfortable living spaces.",
              "Suitable for use throughout the home, SoundScreen is particularly useful around bedrooms, home theatres, bathrooms, laundries and other areas where controlling noise transfer and improving privacy are important.",
            ],
            specsLabel: "Key benefits include:",
            specs: [
              "Reduces noise transfer through internal walls and mid-floors",
              "Helps improve privacy between rooms",
              "Suitable for a wide range of residential applications",
              "Ideal for bedrooms, home theatres, bathrooms and laundries",
            ],
            download: {
              label: "Bradford SoundScreen Data Sheet",
              href: "/downloads/insulation/soundscreen-datasheet-bftk.pdf",
            },
          },
        ]}
      />

      <AdviceCallout>
        {"For advice on the right acoustic insulation solution for your project, contact the Consolidated Energy team."}
      </AdviceCallout>

      <ProductRange exclude="insulation" />
      <ContactSection />
    </>
  );
}
