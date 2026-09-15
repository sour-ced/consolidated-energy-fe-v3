import Reveal from "./Reveal";

const STATS = [
  {
    value: "500+",
    caption: "Builder customers serviced",
  },
  {
    value: "Six",
    caption: "Product categories",
  },
  {
    value: "National",
    caption: "Warehouse & install network",
  },
  {
    value: "In-house",
    caption: "Supply and installation",
  },
];

export default function Stats() {
  return (
    <section className="bg-brand-olive text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal
            key={stat.caption}
            delay={i * 100}
            className={`py-8 px-2 sm:px-6 lg:px-8 ${
              i !== 0 ? "border-l border-ink/10" : ""
            }`}
          >
            <div className="font-display text-3xl sm:text-4xl text-white">
              {stat.value}
            </div>
            <p className="mt-2 text-[11px] uppercase tracking-wide text-ink/60 font-semibold leading-snug">
              {stat.caption}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
