import Link from "next/link";
import Reveal from "./Reveal";

export default function AdviceCallout({ children }: { children: string }) {
  return (
    <section className="bg-surface py-14 lg:py-16 border-t border-ink/5">
      <Reveal className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <p className="font-display text-xl sm:text-2xl leading-snug text-ink max-w-3xl">
          {children}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-sm bg-ink px-6 py-3.5 text-[12px] font-bold uppercase tracking-wide text-surface hover:opacity-90 transition-opacity whitespace-nowrap self-start lg:self-auto"
        >
          Contact the Team
        </Link>
      </Reveal>
    </section>
  );
}
