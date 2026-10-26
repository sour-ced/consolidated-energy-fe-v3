import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ProductRange from "@/components/ProductRange";
import Partnership from "@/components/Partnership";
import Network from "@/components/Network";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ProductRange
        showTags
        showNumbers={false}
        eyebrow="Our Products & Services"
        heading="Complete solutions for residential and commercial construction"
        intro="From insulation and air conditioning to hot water and solar, Consolidated Energy provides a broad range of products and installation services backed by specialist knowledge and national capability."
      />
      <Partnership />
      <Network />
      <ContactSection />
    </>
  );
}
