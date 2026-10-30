import Image from "next/image";
import Icon, { type IconName } from "./Icons";
import Reveal from "./Reveal";

export type Subcategory = {
  icon?: IconName;
  title: string;
  description: string | string[];
  specsLabel?: string;
  specs?: string[];
  download?: { label: string; href: string };
  downloads?: { label: string; href: string }[];
  /** Product shot or application photo. `fit: "contain"` for pack shots on white. */
  image?: { src: string; alt: string; fit?: "cover" | "contain" };
};

export default function SubcategoryModules({
  eyebrow,
  title,
  intro,
  items,
  columns,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: Subcategory[];
  columns?: 2 | 3;
}) {
  const cols = columns ?? (items.length >= 3 ? 3 : 2);
  // With product images, each item becomes a full-width row: image beside copy.
  const rows = items.some((item) => item.image);

  return (
    <section className="bg-section py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink max-w-2xl mb-4">
          {title}
        </h2>
        {intro && (
          <p className="text-ink/55 text-[15px] leading-relaxed max-w-2xl mb-12">
            {intro}
          </p>
        )}

        <div
          className={`grid grid-cols-1 gap-6 ${
            rows ? "" : `sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : ""}`
          } ${!intro ? "mt-12" : ""}`}
        >
          {items.map((item, i) => {
            const paragraphs = Array.isArray(item.description)
              ? item.description
              : [item.description];
            const downloads = [
              ...(item.download ? [item.download] : []),
              ...(item.downloads ?? []),
            ];

            return (
              <Reveal
                key={item.title}
                delay={rows ? 0 : (i % 3) * 100}
                className={`bg-surface border border-ink/5 h-full ${
                  rows ? "grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]" : "flex flex-col"
                }`}
              >
                {rows && (
                  <div
                    className={`relative aspect-[4/3] md:aspect-auto md:min-h-[320px] overflow-hidden ${
                      item.image?.fit === "contain" ? "bg-white" : "bg-section"
                    }`}
                  >
                    {item.image && (
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className={
                          item.image.fit === "contain" ? "object-contain p-8" : "object-cover"
                        }
                      />
                    )}
                  </div>
                )}
                <div className="p-7 lg:p-9 flex flex-col">
                  {item.icon && !rows && (
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-section text-brand-green-dark mb-4">
                      <Icon name={item.icon} className="w-5 h-5" />
                    </span>
                  )}
                  <h3 className="font-display text-lg text-ink">
                    {item.title}
                  </h3>
                  <div className="mt-2 text-[14px] text-ink/55 leading-relaxed flex flex-col gap-3">
                    {paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>

                  {item.specs && item.specs.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-ink/10">
                      {item.specsLabel && (
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink/40 mb-2.5">
                          {item.specsLabel}
                        </p>
                      )}
                      <ul className="flex flex-col gap-1.5">
                        {item.specs.map((spec) => (
                          <li key={spec} className="text-[12.5px] text-ink/70 flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-brand-green-dark shrink-0 mt-[7px]" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {downloads.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                      {downloads.map((d) => (
                        <a
                          key={d.href + d.label}
                          href={d.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-brand-green-dark border-b border-brand-green-dark pb-1 self-start hover:text-ink hover:border-ink transition-colors"
                        >
                          <Icon name="clipboard" className="w-3.5 h-3.5" />
                          {d.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
