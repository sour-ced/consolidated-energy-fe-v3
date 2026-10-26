const SYSTEM_SIZES = ["1.5kW", "2kW", "3kW", "4kW", "5kW"];

const ROWS: { label: string; values: (string | number)[] }[] = [
  { label: "Number of 250w panels", values: [6, 8, 12, 16, 20] },
  { label: "Zone 1 - 3 (kWh per day)*", values: [6.6, 8.8, 13.2, 17.6, 22] },
  { label: "Zone 4 (kWh per day)*", values: [5.4, 7.2, 10.8, 14.4, 18] },
];

export default function SolarOutputTable() {
  return (
    <figure className="min-w-0">
      <div
        className="overflow-x-auto border border-ink/10 bg-surface"
        tabIndex={0}
        role="region"
        aria-label="Solar system output table"
      >
        <table className="w-full min-w-[460px] border-collapse text-left text-[13.5px]">
          <caption className="sr-only">
            Solar system size, number of 250w panels and average daily output
            by zone
          </caption>
          <thead>
            <tr className="bg-brand-green text-brand-dark">
              <th
                scope="col"
                className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em]"
              >
                System Size
              </th>
              {SYSTEM_SIZES.map((size) => (
                <th
                  key={size}
                  scope="col"
                  className="px-4 py-3 text-right font-display text-[14px] whitespace-nowrap"
                >
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.label} className="border-t border-ink/10">
                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-ink/80"
                >
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td
                    key={SYSTEM_SIZES[i]}
                    className="px-4 py-3 text-right tabular-nums text-ink"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="mt-3 text-[12px] leading-relaxed text-ink/50">
        *Output based on optimal installation direction averaged on an annual
        basis. Performance varies by location. Refer CEC Solar PV Consumer
        Guide Volume 5. System specification may change without notice.
      </figcaption>
    </figure>
  );
}
