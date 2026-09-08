import Icon, { type IconName } from "./Icons";
import Reveal from "./Reveal";

export type Subcategory = {
  icon?: IconName;
  title: string;
  description: string;
  specs?: string[];
  download?: { label: string; href: string };
};

export default function SubcategoryModules({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: Subcategory[];
}) {
  return (
    <section className="bg-brand-cream py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-brand-dark max-w-2xl mb-4">
          {title}
        </h2>
        {intro && (
          <p className="text-black/55 text-[15px] leading-relaxed max-w-2xl mb-12">
            {intro}
          </p>
        )}

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${items.length >= 3 ? "lg:grid-cols-3" : ""} gap-6 ${!intro ? "mt-12" : ""}`}>
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 100}
              className="bg-white border border-black/5 p-7 flex flex-col h-full"
            >
              {item.icon && (
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-cream text-brand-green-dark mb-4">
                  <Icon name={item.icon} className="w-5 h-5" />
                </span>
              )}
              <h3 className="font-display text-lg text-brand-dark">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] text-black/55 leading-relaxed flex-1">
                {item.description}
              </p>

              {item.specs && item.specs.length > 0 && (
                <ul className="mt-4 pt-4 border-t border-black/10 flex flex-col gap-1.5">
                  {item.specs.map((spec) => (
                    <li key={spec} className="text-[12.5px] text-brand-dark/70 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand-green-dark shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              )}

              {item.download && (
                <a
                  href={item.download.href}
                  className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-brand-green-dark border-b border-brand-green-dark pb-1 self-start hover:text-brand-dark hover:border-brand-dark transition-colors"
                >
                  <Icon name="clipboard" className="w-3.5 h-3.5" />
                  {item.download.label}
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
