"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Icon from "./Icons";
import { useDarkMode } from "./useDarkMode";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const isDark = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggle(e: MouseEvent<HTMLButtonElement>) {
    const next = !isDark;
    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {}
    };

    const root = document.documentElement;
    const supportsViewTransition =
      typeof document.startViewTransition === "function" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!supportsViewTransition) {
      applyTheme();
      return;
    }

    const { clientX: x, clientY: y } = e;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    root.style.setProperty("--theme-toggle-x", `${x}px`);
    root.style.setProperty("--theme-toggle-y", `${y}px`);
    root.style.setProperty("--theme-toggle-r", `${endRadius}px`);

    document.startViewTransition(applyTheme);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-surface px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-ink/70 hover:text-ink hover:border-brand-green/60 active:scale-95 transition-all duration-200 ${className}`}
    >
      <span className="relative flex h-3.5 w-3.5 items-center justify-center overflow-hidden">
        {mounted && (
          <Icon
            name={isDark ? "sun" : "moon"}
            className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-active:rotate-180 group-active:scale-75"
          />
        )}
      </span>
      <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
}
