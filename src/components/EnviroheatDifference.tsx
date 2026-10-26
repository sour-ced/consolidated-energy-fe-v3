import Reveal from "./Reveal";

const CONDENSER_DESIGN = [
  {
    title: "Micro-Channel Condenser",
    text: "Larger contact surface for better heat transfer and less refrigerant consumption.",
  },
  {
    title: "Heat Pump Compressor",
    text: "Specially designed for heat pumps to maximise the efficiency.",
  },
  {
    title: "Bottom Coil",
    text: "Design enlarges the total heat exchange area to deliver more hot water.",
  },
  {
    title: "No Fixed Wiring",
    text: "Simply plug the unit into a 15 Amp power point, no fixed wiring required.",
  },
  {
    title: "Dual Anodes",
    text: "Twice the corrosion protection with dual full length anodes. Reduces costly maintenance.",
  },
];

type Measure = { value: string; amount: number };

type Comparison = {
  title: string;
  text: string;
  standard?: Measure;
  micro?: Measure;
};

const COMPARISONS: Comparison[] = [
  {
    title: "Multiple Channel Design",
    text: "The multi-channel condenser design divides flow into 11 galleries with greatly improved heat transfer over a single pipe.",
  },
  {
    title: "Titanium-Aluminum Alloy for Better Corrosion & Heat Resistance",
    text: "The multi-channel condenser withstands corrosion for 7.5 times longer than copper pipe condenser.",
    standard: { value: "200h", amount: 200 },
    micro: { value: "1500h", amount: 1500 },
  },
  {
    title: "Reduced Pressure Drop Improves Compressor Efficiency by 6%",
    text: "Micro-channel: pressure drop 0.03MPa; Coil pipe: pressure drop 0.15MPa.",
    standard: { value: "0.15MPa", amount: 0.15 },
    micro: { value: "0.03MPa", amount: 0.03 },
  },
  {
    title: "Larger Contact Surface to Improve Heat Transfer Efficiency by 30%",
    text: "Improved heat transfer means improved efficiency. Up to 71% cheaper to run than conventional hot water systems.",
    standard: { value: "0.236m²", amount: 0.236 },
    micro: { value: "0.708m²", amount: 0.708 },
  },
];

/* Numbered marker used in the tank schematic and the matching list. */
function Marker({ x, y, n }: { x: number; y: number; n: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={9} className="fill-brand-green" />
      <text
        x={x}
        y={y + 3.5}
        textAnchor="middle"
        className="fill-brand-dark font-display"
        fontSize={10}
        fontWeight={700}
      >
        {n}
      </text>
    </g>
  );
}

function TankSchematic() {
  return (
    <svg
      viewBox="0 0 170 300"
      role="img"
      aria-label="Schematic of an Enviroheat heat pump showing the micro-channel condenser (1), heat pump compressor (2), bottom coil (3), plug-in power connection (4) and dual anodes (5)"
      className="w-full max-w-[180px] h-auto text-ink"
    >
      {/* Top unit housing */}
      <rect x={22} y={8} width={116} height={58} rx={8} className="fill-section stroke-current" strokeOpacity={0.35} strokeWidth={1.5} />
      {/* Fan */}
      <circle cx={52} cy={37} r={17} className="fill-none stroke-current" strokeOpacity={0.35} strokeWidth={1.5} />
      <path
        d="M52 37 L52 23 M52 37 L64 44 M52 37 L40 44"
        className="stroke-current"
        strokeOpacity={0.45}
        strokeWidth={3}
        strokeLinecap="round"
      />
      {/* Compressor */}
      <rect x={88} y={22} width={30} height={32} rx={9} className="fill-surface stroke-current" strokeOpacity={0.45} strokeWidth={1.5} />

      {/* Tank */}
      <rect x={32} y={72} width={96} height={208} rx={16} className="fill-surface stroke-current" strokeOpacity={0.35} strokeWidth={1.5} />
      {/* Micro-channel condenser wrap */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line
          key={i}
          x1={32}
          x2={128}
          y1={98 + i * 9}
          y2={98 + i * 9}
          stroke="var(--color-brand-green-dark)"
          strokeOpacity={0.55}
          strokeWidth={2.5}
        />
      ))}
      {/* Dual anodes */}
      <line x1={64} x2={64} y1={72} y2={238} className="stroke-current" strokeOpacity={0.4} strokeWidth={4} strokeLinecap="round" />
      <line x1={96} x2={96} y1={72} y2={238} className="stroke-current" strokeOpacity={0.4} strokeWidth={4} strokeLinecap="round" />
      {/* Bottom coil */}
      <path
        d="M42 252 Q52 242 62 252 T82 252 T102 252 T122 252 M42 264 Q52 254 62 264 T82 264 T102 264 T122 264"
        fill="none"
        stroke="var(--color-brand-green-dark)"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      {/* Power lead + plug */}
      <path d="M138 44 C152 44 156 54 156 66 L156 80" fill="none" className="stroke-current" strokeOpacity={0.45} strokeWidth={2} />
      <rect x={149} y={80} width={14} height={16} rx={3} className="fill-current" fillOpacity={0.55} />
      <line x1={153} x2={153} y1={96} y2={102} className="stroke-current" strokeOpacity={0.55} strokeWidth={2} />
      <line x1={159} x2={159} y1={96} y2={102} className="stroke-current" strokeOpacity={0.55} strokeWidth={2} />

      <Marker x={22} y={120} n={1} />
      <Marker x={103} y={16} n={2} />
      <Marker x={22} y={258} n={3} />
      <Marker x={156} y={118} n={4} />
      <Marker x={80} y={200} n={5} />
    </svg>
  );
}

function ChannelGraphic() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col items-start gap-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink/45">
          Standard
        </span>
        <svg viewBox="0 0 120 32" className="h-8 w-auto max-w-full text-ink" aria-hidden="true">
          <circle cx={16} cy={16} r={13} className="fill-none stroke-current" strokeOpacity={0.4} strokeWidth={3} />
        </svg>
        <span className="text-[13px] font-display text-ink/70">Single pipe</span>
      </div>
      <div className="flex flex-col items-start gap-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-green-dark">
          Micro-Channel
        </span>
        <svg viewBox="0 0 120 32" className="h-8 w-auto max-w-full" aria-hidden="true">
          <rect x={1.5} y={7} width={117} height={18} rx={5} fill="none" stroke="var(--color-brand-green-dark)" strokeWidth={2} />
          {Array.from({ length: 11 }, (_, i) => (
            <rect
              key={i}
              x={5 + i * 10.2}
              y={10.5}
              width={7.6}
              height={11}
              rx={1.5}
              fill="var(--color-brand-green-dark)"
              fillOpacity={0.55}
            />
          ))}
        </svg>
        <span className="text-[13px] font-display text-ink">11 galleries</span>
      </div>
    </div>
  );
}

function MeasureBars({ standard, micro }: { standard: Measure; micro: Measure }) {
  const max = Math.max(standard.amount, micro.amount);
  const rows = [
    { label: "Standard", m: standard, bar: "bg-ink/35", text: "text-ink/60" },
    { label: "Micro-Channel", m: micro, bar: "bg-brand-green-dark", text: "text-ink" },
  ];

  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-2.5">
      {rows.map((r) => (
        <div key={r.label} className="contents">
          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink/45 whitespace-nowrap">
            {r.label}
          </span>
          <div className="h-2 rounded-full bg-ink/10 overflow-hidden" aria-hidden="true">
            <div
              className={`h-full rounded-full ${r.bar}`}
              style={{ width: `${Math.max((r.m.amount / max) * 100, 4)}%` }}
            />
          </div>
          <span className={`font-display text-[14px] tabular-nums text-right ${r.text}`}>
            {r.m.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function EnviroheatDifference() {
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="border border-ink/10">
          <div className="bg-brand-dark px-6 py-5 sm:px-8 flex items-center gap-3">
            <span className="w-6 h-px bg-brand-green" />
            <h2 className="font-display text-xl sm:text-2xl text-white">
              The Enviroheat Difference
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-ink/10">
            {/* Left: the condenser design */}
            <div className="p-6 sm:p-8">
              <h3 className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-6">
                The Condenser Design
              </h3>
              <div className="grid sm:grid-cols-[180px_1fr] gap-8 items-start">
                <div className="flex justify-center">
                  <TankSchematic />
                </div>
                <ol className="flex flex-col gap-5">
                  {CONDENSER_DESIGN.map((item, i) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <span className="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-green text-brand-dark text-[11px] font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-display text-[14px] uppercase tracking-wide text-ink leading-tight">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[13px] text-ink/60 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right: standard vs micro-channel */}
            <div className="p-6 sm:p-8">
              <h3 className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-6">
                Standard Heat Pump vs Micro-Channel
              </h3>
              <div className="flex flex-col divide-y divide-ink/10">
                {COMPARISONS.map((c) => (
                  <div key={c.title} className="py-5 first:pt-0 last:pb-0">
                    <p className="font-display text-[14px] uppercase tracking-wide text-ink leading-tight">
                      {c.title}
                    </p>
                    <p className="mt-1.5 mb-4 text-[13px] text-ink/60 leading-relaxed">
                      {c.text}
                    </p>
                    {c.standard && c.micro ? (
                      <MeasureBars standard={c.standard} micro={c.micro} />
                    ) : (
                      <ChannelGraphic />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
