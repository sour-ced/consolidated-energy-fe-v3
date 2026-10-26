"use client";

import Reveal from "./Reveal";
import { useOfficeMap } from "./OfficeMapContext";

const MAP_BASE_URL =
  "https://www.google.com/maps/d/embed?mid=1d7MAYo9PPcLY2HdBWI-6ITpouTSpDy4&ehbc=2E312F&hl=en";

export default function AustraliaMap() {
  const { focused } = useOfficeMap();

  const src = focused
    ? `${MAP_BASE_URL}&ll=${focused.position[0]},${focused.position[1]}&z=12`
    : MAP_BASE_URL;

  return (
    <div className="relative w-full h-[420px] rounded-sm border border-ink/10 overflow-hidden isolate lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1/2 lg:rounded-none lg:border-0">
      <Reveal delay={150} className="h-full w-full">
        <iframe
          src={src}
          title="Consolidated Energy office locations map"
          className="h-full w-full"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Reveal>
    </div>
  );
}
