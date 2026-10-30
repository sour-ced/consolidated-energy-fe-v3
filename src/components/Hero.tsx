import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative bg-brand-dark text-white overflow-hidden">
      <Image
        src="/images/home-hero-elevation.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-dark/20 lg:via-brand-dark/70 lg:to-transparent" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-28">
        <Reveal className="flex flex-col justify-center max-w-3xl">
          <div className="flex items-center gap-3 text-brand-green text-[12px] font-semibold tracking-[0.15em] uppercase mb-6">
            <span className="w-6 h-px bg-brand-green" />
            Complete Residential Solutions
          </div>

          <h1 className="font-display text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.08] tracking-tight">
            Products, installation and service for Australia&apos;s building
            industry
          </h1>

          <div className="mt-6 flex flex-col gap-4 text-white/70 text-[15px] leading-relaxed max-w-2xl">
            <p>
              Consolidated Energy is one of Australia&apos;s leading suppliers
              of energy-efficient products and services to the residential
              building and construction industry.
            </p>
            <p>
              Working with more than 500 customers across Australia, we supply
              and install insulation, air conditioning, hot water and solar
              solutions through our national network of offices, warehouses
              and installation teams.
            </p>
            <p>
              By combining quality products from leading manufacturers with
              experienced people, reliable installation and responsive
              service, we make it easier for builders and customers to manage
              multiple building solutions through one trusted supplier.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-sm bg-brand-green px-6 py-3.5 text-[12px] font-bold uppercase tracking-wide text-brand-dark hover:bg-white transition-colors"
            >
              View Our Product Range
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
