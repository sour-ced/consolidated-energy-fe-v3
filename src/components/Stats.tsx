import Reveal from "./Reveal";

const STATS = [
  {
    value: "500+",
    caption: "Builder and industry customers serviced",
  },
  {
    value: "Six",
    caption: "Product categories",
  },
  {
    value: "National",
    caption: "Warehouse and installation network",
  },
  {
    value: "Supply + Install",
    caption: "End-to-end product and installation capability",
  },
];

export default function Stats() {
  return (
    <section className="bg-brand-green text-brand-dark">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal
            key={stat.caption}
            delay={i * 100}
            className={`flex flex-col py-8 px-3 sm:px-6 lg:px-8 ${
              i % 2 === 1 ? "border-l border-brand-dark/15" : ""
            } ${i === 2 ? "lg:border-l lg:border-brand-dark/15" : ""} ${
              i >= 2 ? "border-t border-brand-dark/15 lg:border-t-0" : ""
            }`}
          >
            <div className="font-display text-[26px] sm:text-3xl 2xl:text-4xl leading-tight text-brand-dark">
              {stat.value}
            </div>
            <p className="mt-auto pt-2 text-[11px] uppercase tracking-wide text-brand-dark/70 font-semibold leading-snug">
              {stat.caption}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
