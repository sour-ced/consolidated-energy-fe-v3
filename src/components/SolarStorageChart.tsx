/*
 * Illustrative daily energy profile: solar production across the middle of
 * the day, the share of it used to heat water, and the stored hot water used
 * in the early morning and evening. Shapes are indicative only (no data axis).
 */

const T_START = 4; // 4am
const T_END = 24; // midnight
const W = 600;
const H = 238;
const PAD_X = 12;
const BASE = 228;

const x = (t: number) => PAD_X + ((t - T_START) / (T_END - T_START)) * (W - PAD_X * 2);
const y = (v: number) => BASE - v;

const gauss = (t: number, mu: number, sigma: number, h: number) =>
  h * Math.exp(-((t - mu) ** 2) / (2 * sigma ** 2));

const solarProduction = (t: number) => gauss(t, 12, 2.6, 185);
const solarConsumption = (t: number) =>
  Math.min(solarProduction(t), gauss(t, 12, 2, 112));
const storedConsumption = (t: number) =>
  gauss(t, 6.3, 0.42, 52) +
  gauss(t, 7.3, 0.38, 38) +
  gauss(t, 19.4, 0.85, 150) +
  gauss(t, 21.4, 0.6, 58);

function samples(fn: (t: number) => number) {
  const pts: string[] = [];
  for (let t = T_START; t <= T_END + 1e-9; t += 0.1) {
    pts.push(`${x(t).toFixed(1)},${y(fn(t)).toFixed(1)}`);
  }
  return pts;
}

const areaPath = (fn: (t: number) => number) =>
  `M${x(T_START)},${BASE} L${samples(fn).join(" L")} L${x(T_END)},${BASE} Z`;
const linePath = (fn: (t: number) => number) => `M${samples(fn).join(" L")}`;

const TICKS = [
  { t: 8, label: "8am" },
  { t: 20, label: "8pm" },
];

const LEGEND = [
  { label: "Consumption of stored energy", swatch: "bg-ink/85" },
  { label: "Consumption of solar energy", swatch: "bg-brand-green-dark" },
  { label: "Solar energy production", swatch: "bg-amber-400" },
];

export default function SolarStorageChart() {
  return (
    <figure className="bg-surface border border-ink/10 p-5 sm:p-7">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-labelledby="solar-storage-title solar-storage-desc"
        className="w-full h-auto text-ink"
      >
        <title id="solar-storage-title">Store solar energy as hot water</title>
        <desc id="solar-storage-desc">
          Daily energy chart from early morning to midnight. Solar energy
          production rises through the morning, peaks around midday and falls
          away before 8pm. Part of that production is used to heat water during the
          day (consumption of solar energy). The stored hot water is then used
          in the early morning before 8am and in a larger peak in the evening
          around 8pm (consumption of stored energy).
        </desc>

        {/* Gridline guides at the ticks */}
        {TICKS.map((tick) => (
          <line
            key={tick.label}
            x1={x(tick.t)}
            x2={x(tick.t)}
            y1={16}
            y2={BASE}
            className="stroke-current"
            strokeOpacity={0.12}
            strokeDasharray="3 4"
          />
        ))}

        {/* Solar energy production */}
        <path d={areaPath(solarProduction)} className="fill-amber-400" fillOpacity={0.28} />
        <path
          d={linePath(solarProduction)}
          fill="none"
          className="stroke-amber-500"
          strokeWidth={2.5}
          strokeLinejoin="round"
        />

        {/* Consumption of solar energy */}
        <path d={areaPath(solarConsumption)} fill="var(--color-brand-green-dark)" fillOpacity={0.9} />

        {/* Consumption of stored energy */}
        <path d={areaPath(storedConsumption)} className="fill-current" fillOpacity={0.85} />

        {/* Axis */}
        <line
          x1={PAD_X}
          x2={W - PAD_X}
          y1={BASE}
          y2={BASE}
          className="stroke-current"
          strokeOpacity={0.4}
          strokeWidth={1.5}
        />
        {TICKS.map((tick) => (
          <line
            key={tick.label}
            x1={x(tick.t)}
            x2={x(tick.t)}
            y1={BASE}
            y2={BASE + 7}
            className="stroke-current"
            strokeOpacity={0.4}
            strokeWidth={1.5}
          />
        ))}
      </svg>

      {/* Tick labels as HTML so they stay legible at any chart width */}
      <div className="relative h-5 mt-1.5" aria-hidden="true">
        {TICKS.map((tick) => (
          <span
            key={tick.label}
            className="absolute top-0 -translate-x-1/2 text-[12px] sm:text-[13px] font-semibold text-ink/60"
            style={{ left: `${(x(tick.t) / W) * 100}%` }}
          >
            {tick.label}
          </span>
        ))}
      </div>

      <figcaption>
        <ul className="mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2.5">
          {LEGEND.map((item) => (
            <li key={item.label} className="flex items-center gap-2.5 text-[13px] text-ink/70">
              <span className={`w-3.5 h-3.5 rounded-sm shrink-0 ${item.swatch}`} aria-hidden="true" />
              {item.label}
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}
