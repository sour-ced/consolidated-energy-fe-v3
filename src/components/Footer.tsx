import Link from "next/link";
import Logo from "./Logo";

const COLUMNS = [
  {
    heading: "Products & Services",
    links: [
      { label: "Full Product Range", href: "/products" },
      { label: "Air Conditioning", href: "/air-conditioning" },
      { label: "Continuous Gas Hot Water", href: "/gas-hot-water" },
      { label: "Heat Pumps", href: "/heat-pumps" },
      { label: "Insulation", href: "/insulation" },
      { label: "Ceilings", href: "/ceilings" },
      { label: "Solar Power", href: "/solar-power" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Network", href: "/our-network" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Information Hub",
    links: [
      { label: "Downloads & Data Sheets", href: "/information-hub" },
      { label: "Customer Credit Application", href: "/credit-application" },
      { label: "Trade Login", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 text-[14px] text-white/50 leading-relaxed max-w-[220px]">
            102 Indian Drive,
            <br />
            Keysborough, VIC, 3173,
            <br />
            Australia
          </p>
          <a
            href="mailto:info@consolidatedenergy.com.au"
            className="mt-3 inline-block text-[14px] text-brand-green hover:underline"
          >
            info@consolidatedenergy.com.au
          </a>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/40 mb-4">
              {col.heading}
            </h3>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between text-[12px] text-white/40">
          <span>ABN: 89 064 338 076</span>
          <span>&copy; Consolidated Energy {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
