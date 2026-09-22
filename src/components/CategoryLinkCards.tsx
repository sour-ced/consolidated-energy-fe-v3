import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

export type CategoryLinkItem = {
  href: string;
  src: string;
  alt: string;
  title: string;
  description?: string;
};

export default function CategoryLinkCards({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: CategoryLinkItem[];
}) {
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink max-w-xl mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Reveal key={item.href} delay={(i % 3) * 100} className="h-full">
              <Link
                href={item.href}
                className="group bg-surface border border-ink/5 flex flex-col h-full hover:border-brand-green/50 hover:shadow-lg transition-[box-shadow,border-color]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg text-ink group-hover:text-brand-green-dark transition-colors">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mt-2 text-[13px] text-ink/55 leading-relaxed">
                      {item.description}
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
