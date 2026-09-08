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
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] leading-[1.15] max-w-lg">
            Our goal is to be all builders supplier of choice by consistently
            providing outstanding service, the best products, reliable and
            on-time installations and most of all a mutually beneficial
            partnership to help us all achieve our goals.
          </h2>
        </Reveal>

        <Reveal delay={150} className="flex flex-col justify-center gap-6">
          <p className="text-white/60 text-[15px] leading-relaxed">
            We currently service over 500 customers from office and warehouse
            locations around Australia. Our product supply and installation
            services cover all types of insulation products, hot water
            solutions to cover all market conditions including solar and heat
            pump, leading brand air conditioning products both ducted and
            split systems, solar power systems for new and existing homes
            along with battery storage solutions.
          </p>
          <p className="text-white/60 text-[15px] leading-relaxed">
            Our business works closely with many of Australia&apos;s leading
            residential builders delivering and installing premium products
            and services through our national network, and by partnering
            with major local and overseas manufacturers.
          </p>

          <div className="pt-6 mt-2 border-t border-white/10">
            <p className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-semibold mb-5">
              Our Key Brands
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              <Image
                src="/images/brand-enviroheat.png"
                alt="enviroheat"
                width={600}
                height={197}
                className="h-9 w-auto"
              />
              <Image
                src="/images/brand-takagi.png"
                alt="Takagi"
                width={546}
                height={197}
                className="h-8 w-auto"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
