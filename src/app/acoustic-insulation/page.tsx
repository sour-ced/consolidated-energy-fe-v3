import type { Metadata } from "next";
import ProductHero from "@/components/ProductHero";
import IconFeatureGrid from "@/components/IconFeatureGrid";
import SubcategoryModules from "@/components/SubcategoryModules";
import PhotoGallery from "@/components/PhotoGallery";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Acoustic Insulation | Consolidated Energy",
  description:
    "Acoustic insulation products from Consolidated Energy help soundproof homes and commercial spaces from traffic, neighbours and everyday noise.",
};

export default function AcousticInsulationPage() {
  return (
    <>
      <ProductHero
        eyebrow="Insulation"
        title="Acoustic Insulation"
        tagline="Soundproof your home from noise, indoors and out"
        description="Traffic, neighbours and even your own family can cause noise-related stress and discomfort. Our acoustic insulation products help soundproof the home."
        variant="insulation"
      />

      <section className="bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <p className="text-ink/60 text-[15px] leading-relaxed">
            We supply acoustic batts designed for residential and commercial
            buildings during construction, dampening noise transfer through
            walls, floors and ceilings before the linings go up.
          </p>
          <p className="text-ink/60 text-[15px] leading-relaxed">
            For existing spaces, we also supply specialist commercial
            products such as sound-absorbing panels for offices, cafes,
            restaurants and residential spaces where hard surfaces cause
            acoustic issues.
          </p>
        </div>
      </section>

      <IconFeatureGrid
        eyebrow="Why It Matters"
        title="Acoustic insulation benefits"
        items={[
          {
            icon: "speakerMute",
            label: "Reduces Noise Transfer",
            description: "Cuts down on unwanted sound moving through walls and floors.",
          },
          {
            icon: "wave",
            label: "Sound Absorption",
            description: "Dampens noise from traffic, neighbours and everyday household life.",
          },
          {
            icon: "home",
            label: "Better Rest",
            description: "Ideal for bedrooms, home theatres and ensuites.",
          },
          {
            icon: "suitcase",
            label: "Commercial Ready",
            description: "Suited to offices, cafes and restaurants with hard, noisy surfaces.",
          },
        ]}
        columns={4}
      />

      <PhotoGallery
        eyebrow="On the Job"
        title="Acoustic batts in Australian homes"
        photos={[
          {
            src: "/images/insulation/acoustic-install-ceiling.jpg",
            alt: "Installer fitting acoustic batts into a ceiling frame",
          },
          {
            src: "/images/insulation/acoustic-install-window-view.jpg",
            alt: "Installer fitting acoustic batts near a window",
          },
          {
            src: "/images/insulation/acoustic-install-between-windows.jpg",
            alt: "Installer fitting acoustic batts between two windows",
          },
          {
            src: "/images/insulation/acoustic-install-r27.jpg",
            alt: "Installer fitting R2.7 acoustic batts overhead",
          },
          {
            src: "/images/insulation/acoustic-batts-bag.jpg",
            alt: "Consolidated Energy high density acoustic batts bag",
          },
          {
            src: "/images/insulation/acoustic-batts-group.jpg",
            alt: "A row of Consolidated Energy high density acoustic batts bags",
          },
        ]}
      />

      <SubcategoryModules
        eyebrow="Product Range"
        title="Acoustic insulation products"
        items={[
          {
            icon: "wave",
            title: "Polymax Absorb",
            description:
              "Thermally bonded polyester fibre insulation available in multiple densities and thicknesses.",
            specs: [
              "LD, MD, HD and XHD densities",
              "Suits perforated panelling and ceilings",
              "Ideal for auditoriums, cinemas, studios and sports halls",
            ],
          },
          {
            icon: "speakerMute",
            title: "Bradford Soundscreen",
            description:
              "Reduces noise transfer through internal walls and mid-floors by up to 75%.",
            specs: [
              "Up to 75% noise reduction",
              "Suits home theatres and bedrooms",
              "Ideal for ensuites and laundries",
            ],
          },
        ]}
      />

      <ProductRange exclude="insulation" />
      <ContactSection />
    </>
  );
}
