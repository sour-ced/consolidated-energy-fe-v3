export type IconName =
  | "star"
  | "bolt"
  | "compress"
  | "remote"
  | "thermometer"
  | "sun"
  | "leaf"
  | "snowflake"
  | "suitcase"
  | "shield"
  | "boltArrow"
  | "shieldCheck"
  | "speakerMute"
  | "droplet"
  | "gauge"
  | "grid"
  | "wave"
  | "wall"
  | "layers"
  | "cloud"
  | "panel"
  | "battery"
  | "badge"
  | "mapPin"
  | "fan"
  | "wind"
  | "clipboard"
  | "home"
  | "moon";

const paths: Record<IconName, React.ReactNode> = {
  star: (
    <path d="M12 3.5l2.47 5.13 5.53.7-4.02 3.9.98 5.62L12 16.1l-4.96 2.75.98-5.62-4.02-3.9 5.53-.7L12 3.5z" strokeLinejoin="round" />
  ),
  bolt: <path d="M12.5 3L5 13.5h5.5L11 21l7.5-10.5H13L12.5 3z" strokeLinejoin="round" />,
  compress: (
    <>
      <path d="M9 4v4a1 1 0 01-1 1H4M20 9h-4a1 1 0 01-1-1V4M4 15h4a1 1 0 011 1v4M15 20v-4a1 1 0 011-1h4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  remote: (
    <>
      <rect x="8" y="2.5" width="8" height="19" rx="2.5" />
      <circle cx="12" cy="7" r="1.4" fill="currentColor" stroke="none" />
      <path d="M9.5 12h5M9.5 15.5h5M9.5 19h5" strokeLinecap="round" />
    </>
  ),
  thermometer: (
    <>
      <path d="M12 14.5V5a2 2 0 10-4 0v9.5a4 4 0 104 0z" strokeLinejoin="round" />
      <path d="M10 8h1" strokeLinecap="round" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8L6 18M18 6l1.8-1.8" strokeLinecap="round" />
    </>
  ),
  leaf: (
    <path d="M20 4C10 4 4 10 4 18c0 .5.02 1 .06 1.5C9 15 14 10 19 6c.6-.5 1-1.2 1-2z" strokeLinejoin="round" />
  ),
  snowflake: (
    <path d="M12 2.5v19M4.5 7l15 10M19.5 7l-15 10M8 4l4 3 4-3M8 20l4-3 4 3M4 9.5l4 1.5-1.5 4M20 9.5l-4 1.5 1.5 4M4 14.5l4-1.5-1.5-4M20 14.5l-4-1.5 1.5-4" strokeLinecap="round" strokeLinejoin="round" />
  ),
  suitcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 012-2h3a2 2 0 012 2v1.5M3 13h18" strokeLinecap="round" />
    </>
  ),
  shield: (
    <path d="M12 3l7 3v5.5c0 4.8-3 7.9-7 9.5-4-1.6-7-4.7-7-9.5V6l7-3z" strokeLinejoin="round" />
  ),
  boltArrow: (
    <>
      <path d="M12 21l-4-4.5h3V4h2v12.5h3L12 21z" strokeLinejoin="round" />
    </>
  ),
  shieldCheck: (
    <>
      <path d="M12 3l7 3v5.5c0 4.8-3 7.9-7 9.5-4-1.6-7-4.7-7-9.5V6l7-3z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  speakerMute: (
    <>
      <path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4v-5z" strokeLinejoin="round" />
      <path d="M16 9l4.5 6M20.5 9L16 15" strokeLinecap="round" />
    </>
  ),
  droplet: (
    <path d="M12 3s6 6.5 6 11a6 6 0 11-12 0c0-4.5 6-11 6-11z" strokeLinejoin="round" />
  ),
  gauge: (
    <>
      <path d="M4 15a8 8 0 1116 0" strokeLinecap="round" />
      <path d="M12 15l3.5-4.5" strokeLinecap="round" />
      <path d="M4 15h1M19 15h1M12 5.5v1" strokeLinecap="round" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
    </>
  ),
  wave: (
    <path d="M2.5 9.5c2 0 2 3 4 3s2-3 4-3 2 3 4 3 2-3 4-3 2 3 4 3M2.5 15.5c2 0 2 3 4 3s2-3 4-3 2 3 4 3 2-3 4-3 2 3 4 3" strokeLinecap="round" strokeLinejoin="round" />
  ),
  wall: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 9.5h18M3 15h18M9 4v5.5M15 9.5V15M9 15v5M15 4v5.5" />
    </>
  ),
  layers: (
    <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 8l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  cloud: (
    <path d="M7 18h10a4 4 0 000-8 5.5 5.5 0 00-10.7-1.6A4.5 4.5 0 007 18z" strokeLinejoin="round" />
  ),
  panel: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="1" />
      <path d="M3 9h18M3 13h18M9 5v12M15 5v12" />
    </>
  ),
  battery: (
    <>
      <rect x="3" y="7" width="16" height="10" rx="2" />
      <path d="M21 10.5v3" strokeLinecap="round" />
      <path d="M8 9.5l-2 3.5h3l-2 3.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14l-2 7 5.5-3 5.5 3-2-7" strokeLinejoin="round" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-6.6 7-11.5A7 7 0 105 9.5C5 14.4 12 21 12 21z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.3" />
    </>
  ),
  fan: (
    <>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <path d="M12 12c0-3.5 2-6 5-6s3 3-1 4.5M12 12c-3.5 0-6-2-6-5s3-3 4.5 1M12 12c0 3.5-2 6-5 6s-3-3 1-4.5M12 12c3.5 0 6 2 6 5s-3 3-4.5-1" strokeLinecap="round" />
    </>
  ),
  wind: (
    <path d="M3 8h11a2.5 2.5 0 10-2.5-2.5M3 12h15a2.5 2.5 0 11-2.5 2.5M3 16h8a2 2 0 102-2" strokeLinecap="round" />
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <rect x="9" y="2.5" width="6" height="3.5" rx="1" />
      <path d="M8.5 11h7M8.5 14.5h7M8.5 18h4.5" strokeLinecap="round" />
    </>
  ),
  home: (
    <path d="M4 11l8-7 8 7M6 9.5V20h12V9.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  moon: (
    <path d="M20 14.5A8.5 8.5 0 119.5 4 6.8 6.8 0 0020 14.5z" strokeLinejoin="round" />
  ),
};

export default function Icon({ name, className = "w-6 h-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
