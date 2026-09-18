"use client";

import { OFFICES } from "@/lib/offices";
import { useOfficeMap } from "./OfficeMapContext";

export default function StateBadges() {
  const { focused, focus } = useOfficeMap();

  return (
    <div className="flex flex-wrap gap-2">
      {OFFICES.map((office) => (
        <button
          key={office.code}
          type="button"
          onClick={() => focus(office)}
          aria-label={`Show the ${office.city} office on the map`}
          className={`px-4 py-2 text-[12px] font-bold rounded-sm border transition-colors ${
            focused?.code === office.code
              ? "bg-brand-dark text-white border-ink"
              : "text-ink/70 border-ink/15 hover:border-brand-green/60 hover:text-ink"
          }`}
        >
          {office.code}
        </button>
      ))}
    </div>
  );
}
