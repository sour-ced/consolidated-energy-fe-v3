import type { Metadata } from "next";
import ProductRange from "@/components/ProductRange";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Products & Services | Consolidated Energy",
  description:
    "Consolidated Energy's full product range: insulation, heat pump hot water, continuous gas hot water, air conditioning, solar power and ceilings, supplied and installed by one account.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-20">
          <div className="flex items-center gap-3 text-brand-green text-[12px] font-semibold tracking-[0.15em] uppercase mb-6">
            <span className="w-6 h-px bg-brand-green" />
            Products &amp; Services
          </div>
          <h1 className="font-display text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.1] tracking-tight max-w-3xl">
            Complete solutions for residential and commercial construction
          </h1>
          <p className="mt-6 text-white/60 text-[15px] leading-relaxed max-w-xl">
            From insulation and air conditioning to hot water and solar,
            Consolidated Energy provides a broad range of products and
            installation services backed by specialist knowledge and national
            capability.
          </p>
        </div>
      </section>

      <ProductRange showAllLink={false} />
      <ContactSection />
    </>
  );
}
