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
      <ProductRange showTags showNumbers={false} />
      <Partnership />
      <Network />
      <ContactSection />
    </>
  );
}
