import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

/**
 * "Back to <category>" link plus a card linking to a sibling range page.
 * The photo sits in its own side panel (never stretched full-bleed) so
 * portrait source images are not upscaled.
 */
export default function RelatedRangeCard({
  backHref,
  backLabel,
  eyebrow = "Also in Air Conditioning",
  href,
  title,
  image = "/images/product-aircon.jpg",
  imageClass = "object-center",
}: {
  backHref: string;
  backLabel: string;
  eyebrow?: string;
  href: string;
  title: string;
  image?: string;
  imageClass?: string;
}) {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-ink border-b border-ink pb-1 mb-8 hover:text-brand-green-dark hover:border-brand-green-dark transition-colors"
        >
          <span aria-hidden="true">&larr;</span> {backLabel}
        </Link>

        <Reveal>
          <Link
            href={href}
            className="group flex flex-col sm:flex-row overflow-hidden bg-brand-dark text-white"
          >
            <span className="relative block overflow-hidden min-h-[200px] sm:w-2/5 sm:min-h-[240px] sm:max-w-[520px]">
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className={`object-cover ${imageClass} transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none`}
              />
            </span>
            <span className="flex flex-1 flex-col lg:flex-row lg:items-end lg:justify-between gap-6 p-7 sm:p-10">
              <span className="flex flex-col gap-3">
                <span className="text-brand-green text-[12px] font-bold uppercase tracking-[0.15em]">
                  {eyebrow}
                </span>
                <span className="font-display text-2xl sm:text-3xl uppercase tracking-wide leading-tight">
                  {title}
                </span>
              </span>
              <span className="inline-flex items-center justify-center self-start lg:self-auto rounded-sm bg-brand-green px-6 py-3.5 text-[12px] font-bold uppercase tracking-wide text-brand-dark group-hover:bg-white transition-colors whitespace-nowrap">
                View the Range
              </span>
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
