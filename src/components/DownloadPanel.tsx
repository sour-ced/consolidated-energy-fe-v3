import Link from "next/link";
import Icon from "./Icons";
import Reveal from "./Reveal";

export type DownloadItem = { label: string; href: string };

export default function DownloadPanel({
  eyebrow = "Available Resources",
  title = "Downloads & data sheets",
  items,
  hubHref,
}: {
  eyebrow?: string;
  title?: string;
  items: DownloadItem[];
  hubHref: string;
}) {
  return (
    <section className="bg-brand-cream py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div>
            <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
              {eyebrow}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl leading-[1.1] text-brand-dark">
              {title}
            </h2>
          </div>
          <Link
            href={hubHref}
            className="text-[12px] font-bold uppercase tracking-wide text-brand-dark border-b border-brand-dark pb-1 whitespace-nowrap hover:text-brand-green-dark hover:border-brand-green-dark transition-colors"
          >
            All documents in the Information Hub
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={(i % 3) * 80}>
              <a
                href={item.href}
                className="group flex items-center gap-4 bg-white border border-black/10 px-5 py-4 hover:border-brand-green-dark transition-colors"
              >
                <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-cream text-brand-green-dark group-hover:bg-brand-green group-hover:text-brand-dark transition-colors">
                  <Icon name="clipboard" className="w-5 h-5" />
                </span>
                <span className="flex-1 text-[14px] font-medium text-brand-dark leading-snug">
                  {item.label}
                </span>
                <span className="shrink-0 text-[11px] font-bold uppercase text-brand-green-dark">
                  PDF
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
