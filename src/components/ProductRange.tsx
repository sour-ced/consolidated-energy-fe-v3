import Link from "next/link";
import ProductImage from "./ProductImage";
import Reveal from "./Reveal";

export const PRODUCTS = [
  {
    number: "01",
    title: "Insulation",
    description:
      "Thermal and acoustic insulation solutions for residential construction, including ceiling and wall insulation, wall wraps and roof sarking.",
    variant: "insulation" as const,
    tag: "National",
    href: "/insulation",
  },
  {
    number: "02",
    title: "Heat Pump Hot Water",
    description:
      "Enviroheat heat pump hot water systems providing an energy-efficient alternative to conventional electric water heating.",
    variant: "heatpumps" as const,
    tag: "Enviroheat",
    href: "/heat-pumps",
  },
  {
    number: "03",
    title: "Continuous Gas Hot Water",
    description:
      "Takagi continuous flow gas hot water systems providing efficient, on-demand hot water for residential applications.",
    variant: "gas" as const,
    tag: "Takagi",
    href: "/gas-hot-water",
  },
  {
    number: "04",
    title: "Air Conditioning",
    description:
      "Ducted, split and multi-split air conditioning systems from leading manufacturers.",
    variant: "aircon" as const,
    tag: "Ducted & Split",
    href: "/air-conditioning",
  },
  {
    number: "05",
    title: "Solar Power",
    description:
      "Solar power solutions designed around the energy requirements of new and existing homes and commercial properties.",
    variant: "solar" as const,
    tag: "Residential & Commercial",
    href: "/solar-power",
  },
  {
    number: "06",
    title: "Ceilings",
    description:
      "Ceiling services from project tendering and take-offs through to installation and completion for our Western Australian customers.",
    variant: "ceilings" as const,
    tag: "WA Only",
    tagAccent: true,
    badge: "WA only",
    href: "/ceilings",
  },
];

export default function ProductRange({
  exclude,
  showAllLink = true,
  eyebrow = "Product Range",
  heading,
  intro,
  compact = false,
  showNumbers = true,
  showTags = false,
}: {
  exclude?: (typeof PRODUCTS)[number]["variant"];
  showAllLink?: boolean;
  eyebrow?: string;
  heading?: string;
  intro?: string;
  compact?: boolean;
  showNumbers?: boolean;
  showTags?: boolean;
}) {
  const products = exclude
    ? PRODUCTS.filter((p) => p.variant !== exclude)
    : PRODUCTS;

  return (
    <section id="products" className="bg-section py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
              {eyebrow}
            </p>
            {heading && (
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-ink max-w-2xl">
                {heading}
              </h2>
            )}
            {intro && (
              <p className="mt-5 text-ink/60 text-[15px] leading-relaxed max-w-2xl">
                {intro}
              </p>
            )}
          </div>
          {showAllLink && (
            <Link
              href="/products"
              className="text-[12px] font-bold uppercase tracking-wide text-ink border-b border-ink pb-1 whitespace-nowrap hover:text-brand-green-dark hover:border-brand-green-dark transition-colors"
            >
              All Products
            </Link>
          )}
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <Reveal key={product.title} delay={(i % 3) * 100} className="h-full">
              <Link
                href={product.href}
                className="group bg-surface border border-ink/5 flex flex-col h-full hover:shadow-lg transition-shadow"
              >
                <ProductImage
                  variant={product.variant}
                  number={showNumbers ? (product.badge ?? product.number) : undefined}
                  tag={showTags ? product.tag : undefined}
                  tagAccent={showTags ? product.tagAccent : undefined}
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg text-ink">
                    {product.title}
                  </h3>
                  {!compact && (
                    <p className="mt-2 text-[13px] text-ink/55 leading-relaxed">
                      {product.description}
                    </p>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
