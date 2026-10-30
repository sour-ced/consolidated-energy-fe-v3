import Link from "next/link";
import { INSULATION_TYPES } from "@/lib/insulation";

export default function InsulationTypeNav({ current }: { current: string }) {
  return (
    <nav aria-label="Insulation types" className="bg-section border-b border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-4 flex items-center gap-x-6 gap-y-2 overflow-x-auto">
        <Link
          href="/insulation"
          className="shrink-0 text-[11px] font-bold uppercase tracking-[0.12em] text-ink/40 hover:text-ink transition-colors"
        >
          All Insulation
        </Link>
        <span aria-hidden className="shrink-0 w-px h-4 bg-ink/15" />
        {INSULATION_TYPES.map((type) => {
          const active = type.href === current;
          return (
            <Link
              key={type.href}
              href={type.href}
              aria-current={active ? "page" : undefined}
              className={`shrink-0 whitespace-nowrap pb-1 border-b text-[13px] font-medium transition-colors ${
                active
                  ? "text-ink border-brand-green"
                  : "text-ink/60 border-transparent hover:text-ink"
              }`}
            >
              {type.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
