import Icon, { type IconName } from "./Icons";
import Reveal from "./Reveal";

export type IconFeature = {
  icon: IconName;
  label: string;
  description?: string;
};

export default function IconFeatureGrid({
  eyebrow,
  title,
  intro,
  items,
  columns = 3,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: IconFeature[];
  columns?: 2 | 3 | 4 | 5;
}) {
  const colsClass =
    columns === 5
      ? "sm:grid-cols-2 lg:grid-cols-5"
      : columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink max-w-xl mb-4">
          {title}
        </h2>
        {intro && (
          <p className="text-ink/55 text-[15px] leading-relaxed max-w-2xl mb-12">
            {intro}
          </p>
        )}

        <div className={`grid grid-cols-1 ${colsClass} gap-x-8 gap-y-10 ${!intro ? "mt-12" : ""}`}>
          {items.map((item, i) => (
            <Reveal key={item.label} delay={(i % 6) * 60} className="flex items-start gap-4">
              <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full bg-section text-brand-green-dark">
                <Icon name={item.icon} className="w-5 h-5" />
              </span>
              <div>
                <p className="font-display text-[15px] tracking-wide text-ink leading-tight">
                  {item.label}
                </p>
                {item.description && (
                  <p className="mt-1.5 text-[13px] text-ink/55 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
