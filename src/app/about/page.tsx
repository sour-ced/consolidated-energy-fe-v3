import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "About Us | Consolidated Energy",
  description:
    "Consolidated Energy is one of Australia's leading suppliers of residential and commercial building home energy products, working with builders nationally.",
};

const VALUES = [
  {
    title: "Our Mission",
    description:
      "To be all builders' supplier of choice by consistently providing outstanding service, the best products, and reliable, on-time installations.",
  },
  {
    title: "Our Vision",
    description:
      "A mutually beneficial partnership with every builder we work with, helping us all achieve our goals through one national account.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-20">
          <div className="flex items-center gap-3 text-brand-green text-[12px] font-semibold tracking-[0.15em] uppercase mb-6">
            <span className="w-6 h-px bg-brand-green" />
            About Us
          </div>
          <h1 className="font-display text-[34px] sm:text-[48px] leading-[1.1] tracking-tight max-w-2xl">
            One of Australia&apos;s leading suppliers of home energy products.
          </h1>
          <p className="mt-6 text-white/60 text-[15px] leading-relaxed max-w-xl">
            Consolidated Energy supplies and installs residential and
            commercial building home energy products for builders across
            Australia, from six warehouse and office locations nationally.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <Reveal className="text-black/60 text-[15px] leading-relaxed flex flex-col gap-4">
            <p>
              We currently service over 500 builder customers from office and
              warehouse locations around Australia. Our product supply and
              installation services cover all types of insulation products,
              hot water solutions to cover all market conditions including
              solar and heat pump, leading brand air conditioning products
              both ducted and split systems, solar power systems for new and
              existing homes along with battery storage solutions.
            </p>
            <p>
              Our business works closely with many of Australia&apos;s
              leading residential builders, delivering and installing
              premium products and services through our national network,
              and by partnering with major local and overseas manufacturers.
            </p>
          </Reveal>

          <div className="grid gap-6">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 100} className="bg-brand-cream p-7">
                <h2 className="font-display text-xl text-brand-dark">{value.title}</h2>
                <p className="mt-2 text-[14px] text-black/55 leading-relaxed">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
