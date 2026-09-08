import Link from "next/link";
import ProductImage from "./ProductImage";
import Reveal from "./Reveal";

export const PRODUCTS = [
  {
    number: "01",
    title: "Insulation",
    description:
      "All types of insulation products for residential and commercial builds.",
    variant: "insulation" as const,
    tag: "National",
    href: "/insulation",
  },
  {
    number: "02",
    title: "Heat Pumps",
    description: "Enviroheat hot water solutions for all market conditions.",
    variant: "heatpumps" as const,
    tag: "Enviroheat",
    href: "/heat-pumps",
  },
  {
    number: "03",
    title: "Continuous Gas Hot Water",
    description: "Takagi continuous flow units, wall mounted and internal.",
    variant: "gas" as const,
    tag: "Takagi",
    href: "/gas-hot-water",
  },
  {
    number: "04",
    title: "Air Conditioning",
    description: "Leading brand ducted and split systems.",
    variant: "aircon" as const,
    tag: "Ducted & Split",
    href: "/air-conditioning",
  },
  {
    number: "05",
    title: "Solar Power",
    description: "Systems for new and existing homes, plus battery storage.",
    variant: "solar" as const,
    tag: "+ Battery Storage",
    href: "/solar-power",
  },
  {
    number: "06",
    title: "Ceilings",
    description: "Precision Ceilings — Western Australia only.",
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
  compact = false,
  showNumbers = true,
  showTags = false,
}: {
  exclude?: (typeof PRODUCTS)[number]["variant"];
  showAllLink?: boolean;
  eyebrow?: string;
  heading?: string;
  compact?: boolean;
  showNumbers?: boolean;
  showTags?: boolean;
}) {
  const products = exclude
    ? PRODUCTS.filter((p) => p.variant !== exclude)
    : PRODUCTS;

  return (
    <section id="products" className="bg-brand-cream py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
              {eyebrow}
            </p>
            {heading && (
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-brand-dark max-w-xl">
                {heading}
              </h2>
            )}
          </div>
          {showAllLink && (
            <Link
              href="/products"
              className="text-[12px] font-bold uppercase tracking-wide text-brand-dark border-b border-brand-dark pb-1 whitespace-nowrap hover:text-brand-green-dark hover:border-brand-green-dark transition-colors"
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
                className="group bg-white border border-black/5 flex flex-col h-full hover:shadow-lg transition-shadow"
              >
                <ProductImage
                  variant={product.variant}
                  number={showNumbers ? (product.badge ?? product.number) : undefined}
                  tag={showTags ? product.tag : undefined}
                  tagAccent={showTags ? product.tagAccent : undefined}
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg text-brand-dark">
                    {product.title}
                  </h3>
                  {!compact && (
                    <p className="mt-2 text-[13px] text-black/55 leading-relaxed">
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
