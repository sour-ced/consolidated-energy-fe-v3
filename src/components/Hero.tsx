import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative bg-brand-dark text-white overflow-hidden">
      <Image
        src="/images/product-solar.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/60" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28">
        <Reveal className="flex flex-col justify-center max-w-2xl">
          <div className="flex items-center gap-3 text-brand-green text-[12px] font-semibold tracking-[0.15em] uppercase mb-6">
            <span className="w-6 h-px bg-brand-green" />
            Supplier to Australia&apos;s Residential Builders
          </div>

          <h1 className="font-display text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight">
            We are Australia&apos;s leading provider of residential &amp;
            commercial building home energy products.
          </h1>

          <p className="mt-6 text-white/60 text-[15px] leading-relaxed max-w-md">
            Consolidated Energy is one of Australia&apos;s leading suppliers
            of products and services to builders across Australia.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-sm bg-brand-green px-6 py-3.5 text-[12px] font-bold uppercase tracking-wide text-ink hover:bg-surface transition-colors"
            >
              View the Full Product Range
            </Link>
            <Link
              href="/our-network"
              className="inline-flex items-center justify-center rounded-sm border border-white/30 px-6 py-3.5 text-[12px] font-bold uppercase tracking-wide text-white hover:border-white transition-colors"
            >
              Find Your Local Office
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
