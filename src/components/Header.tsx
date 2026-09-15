"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { useDarkMode } from "./useDarkMode";

const PRODUCT_LINKS = [
  { label: "Full Product Range", href: "/products" },
  { label: "Air Conditioning", href: "/air-conditioning" },
  { label: "Continuous Gas Hot Water", href: "/gas-hot-water" },
  { label: "Heat Pumps", href: "/heat-pumps" },
  { label: "Insulation", href: "/insulation" },
  { label: "Ceilings", href: "/ceilings" },
  { label: "Solar Power", href: "/solar-power" },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products & Services", href: "/products", dropdown: PRODUCT_LINKS },
  { label: "Our Network", href: "/our-network" },
  { label: "Information Hub", href: "/information-hub" },
  { label: "Careers", href: "https://ambrosiumgroup.careers.hibob.com/jobs", target: "_blank" },
  { label: "Contact", href: "/contact" },
];

const PRODUCT_PATHS = PRODUCT_LINKS.map((l) => l.href);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const isDark = useDarkMode();

  function isActive(href: string) {
    return href === "/products"
      ? PRODUCT_PATHS.includes(pathname)
      : pathname === href;
  }

  return (
    <header className="sticky top-0 z-50 bg-section text-ink">
      <div className="hidden sm:block border-b border-ink/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-9 flex items-center justify-between text-[11px] tracking-wide text-ink/55">
          <span>ABN 89 064 338 076</span>
          <nav className="flex items-center gap-6">
            <Link href="/information-hub" className="hover:text-ink transition-colors">
              Downloads
            </Link>
            <Link href="/credit-application" className="hover:text-ink transition-colors">
              Customer Credit Application
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-20 flex items-center justify-between gap-8">
        <Link href="/" aria-label="Consolidated Energy home">
          <Logo variant={isDark ? "light" : "dark"} />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="group relative">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 pb-1 border-b transition-colors ${
                    isActive(link.href)
                      ? "text-ink border-brand-green"
                      : "text-ink/60 border-transparent group-hover:text-ink"
                  }`}
                >
                  {link.label}
                  <svg viewBox="0 0 12 8" className="w-2.5 h-2.5 mt-px" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M1 1.5L6 6.5L11 1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                  <div className="w-64 bg-surface border border-ink/10 shadow-xl py-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-5 py-2.5 text-[13px] text-ink/75 hover:text-ink hover:bg-section transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                className={`pb-1 border-b transition-colors ${
                  isActive(link.href)
                    ? "text-ink border-brand-green"
                    : "text-ink/60 border-transparent hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-sm bg-brand-dark px-5 py-3 text-[12px] font-bold uppercase tracking-wide text-white hover:opacity-90 transition-opacity"
          >
            Send an Enquiry
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 text-ink"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className={`w-6 h-6 transition-transform duration-300 ${
                open ? "rotate-90" : "rotate-0"
              }`}
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden grid bg-section overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            className={`border-t border-ink/10 mx-auto max-w-[1400px] px-6 py-5 flex flex-col gap-1 text-[13px] font-medium tracking-wide transition-all duration-300 ease-in-out ${
              open ? "opacity-100 translate-y-0" : "-translate-y-2 opacity-0"
            }`}
          >
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="flex flex-col">
                  <div className="flex items-center justify-between py-2.5">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={isActive(link.href) ? "text-brand-green-dark" : "text-ink/70"}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle products submenu"
                      onClick={() => setMobileProductsOpen((v) => !v)}
                      className="p-1 text-ink/50"
                    >
                      <svg
                        viewBox="0 0 12 8"
                        className={`w-3 h-3 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <path d="M1 1.5L6 6.5L11 1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ${
                      mobileProductsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden flex flex-col pl-4 border-l border-ink/10 ml-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="py-2 text-[13px] text-ink/60"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.target}
                  rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className={`py-2.5 ${isActive(link.href) ? "text-brand-green-dark" : "text-ink/70"}`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="flex items-center justify-between py-2.5 border-t border-ink/10 mt-1">
              <span className="text-ink/50">Theme</span>
              <ThemeToggle />
            </div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 sm:hidden inline-flex items-center justify-center rounded-sm bg-brand-dark px-5 py-3 text-[12px] font-bold uppercase tracking-wide text-white"
            >
              Send an Enquiry
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
