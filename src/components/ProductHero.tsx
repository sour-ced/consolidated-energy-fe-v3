import Link from "next/link";
import ProductImage, { type ProductVariant } from "./ProductImage";
import Reveal from "./Reveal";

export default function ProductHero({
  eyebrow,
  title,
  tagline,
  description,
  variant,
  badge,
}: {
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  variant: ProductVariant;
  badge?: string;
}) {
  return (
    <section className="bg-brand-dark text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 py-14 lg:py-20">
        <Reveal className="flex flex-col justify-center">
          <div className="flex items-center gap-3 text-brand-green text-[12px] font-semibold tracking-[0.15em] uppercase mb-6">
            <span className="w-6 h-px bg-brand-green" />
            {eyebrow}
            {badge && (
              <span className="text-white/50 normal-case tracking-normal">
                &middot; {badge}
              </span>
            )}
          </div>

          <h1 className="font-display text-[38px] sm:text-[46px] lg:text-[52px] leading-[1.05] tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-brand-green text-[16px] sm:text-[18px] font-medium">
            {tagline}
          </p>

          <p className="mt-6 text-white/60 text-[15px] leading-relaxed max-w-md">
            {description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-brand-green px-6 py-3.5 text-[12px] font-bold uppercase tracking-wide text-ink hover:bg-surface transition-colors"
            >
              Send an Enquiry
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-sm border border-white/30 px-6 py-3.5 text-[12px] font-bold uppercase tracking-wide text-white hover:border-white transition-colors"
            >
              View All Products
            </Link>
          </div>
        </Reveal>

        <Reveal delay={150} className="flex flex-col justify-center">
          <div className="border border-white/10">
            <ProductImage variant={variant} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
