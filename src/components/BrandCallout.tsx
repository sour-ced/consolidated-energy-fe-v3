import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function BrandCallout({
  logoSrc,
  logoAlt,
  logoWidth,
  logoHeight,
  children,
}: {
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  children: ReactNode;
}) {
  return (
    <section className="bg-brand-cream py-20 lg:py-24">
      <Reveal className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-[220px_1fr] gap-10 items-start">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={logoWidth}
          height={logoHeight}
          className="h-14 w-auto"
        />
        <div className="text-black/60 text-[15px] leading-relaxed max-w-2xl flex flex-col gap-4">
          {children}
        </div>
      </Reveal>
    </section>
  );
}
