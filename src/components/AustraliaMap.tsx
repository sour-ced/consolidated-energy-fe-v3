"use client";

import dynamic from "next/dynamic";
import Reveal from "./Reveal";

const OfficeMap = dynamic(() => import("./OfficeMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-brand-dark animate-pulse" />,
});

export default function AustraliaMap() {
  return (
    <div className="relative w-full h-[420px] rounded-sm border border-ink/10 overflow-hidden isolate lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2 lg:rounded-none lg:border-0">
      <Reveal delay={150} className="h-full w-full">
        <OfficeMap />
      </Reveal>
    </div>
  );
}
