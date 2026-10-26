import Image from "next/image";
import Reveal from "./Reveal";

export default function Partnership() {
  return (
    <section className="relative bg-brand-dark text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(53,230,164,0.15) 0px, rgba(53,230,164,0.15) 2px, transparent 2px, transparent 26px)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 py-20 lg:py-24 grid lg:grid-cols-2 gap-12">
        <Reveal>
          <p className="text-brand-green text-[12px] font-bold uppercase tracking-[0.15em] mb-5">
            The Partnership
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] max-w-lg">
            More than product supply
          </h2>
          <p className="mt-6 font-display text-xl sm:text-2xl leading-snug text-white/90 max-w-lg">
            Our goal is to build long-term partnerships with our customers by
            consistently delivering quality products, responsive service and
            reliable installation.
          </p>
        </Reveal>

        <Reveal delay={150} className="flex flex-col justify-center gap-6">
          <p className="text-white/60 text-[15px] leading-relaxed">
            Consolidated Energy works closely with many of Australia&apos;s
            leading residential builders, supporting projects through our
            national network and strong relationships with leading local and
            international manufacturers.
          </p>
          <p className="text-white/60 text-[15px] leading-relaxed">
            Our broad product and service capability means customers can
            access multiple building solutions through one supplier, supported
            by teams who understand the requirements, timelines and demands of
            the construction industry.
          </p>
          <p className="text-white/60 text-[15px] leading-relaxed">
            Whether we&apos;re supplying insulation, installing air
            conditioning, providing a hot water solution or supporting a
            broader building program, our focus remains the same: making it
            easier for our customers to get the right products, service and
            support when they need them.
          </p>

          <div className="pt-6 mt-2 border-t border-white/10">
            <p className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-semibold mb-5">
              Our Key Brands
            </p>
            <p className="text-white/60 text-[15px] leading-relaxed mb-7">
              We work with leading manufacturers and technology providers to
              offer products selected for quality, performance and reliability.
            </p>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
              <Image
                src="/images/brand-enviroheat.png"
                alt="Enviroheat"
                width={600}
                height={197}
                className="h-12 sm:h-14 lg:h-16 w-auto"
              />
              <Image
                src="/images/brand-takagi.png"
                alt="Takagi"
                width={546}
                height={197}
                className="h-11 sm:h-[52px] lg:h-[60px] w-auto"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
