"use client";

import { useState } from "react";

const PRODUCTS_OF_INTEREST = [
  "Insulation",
  "Heat pumps",
  "Gas hot water",
  "Air con",
  "Solar",
  "Ceilings",
];

export default function EnquiryForm() {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(product: string) {
    setSelected((prev) =>
      prev.includes(product)
        ? prev.filter((p) => p !== product)
        : [...prev, product]
    );
  }

  return (
    <div className="bg-surface p-7 sm:p-9 border border-ink/10">
      <p className="text-brand-green-dark text-[11px] font-bold uppercase tracking-[0.15em] mb-6">
        Send an Enquiry
      </p>

      <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="company"
            className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink/40"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="border border-ink/15 px-3.5 py-2.5 text-[14px] text-ink focus:outline-none focus:border-brand-green-dark"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink/40"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="border border-ink/15 px-3.5 py-2.5 text-[14px] text-ink focus:outline-none focus:border-brand-green-dark"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="state"
              className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink/40"
            >
              State
            </label>
            <input
              id="state"
              name="state"
              type="text"
              className="border border-ink/15 px-3.5 py-2.5 text-[14px] text-ink focus:outline-none focus:border-brand-green-dark"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink/40">
            Products of Interest
          </span>
          <div className="flex flex-wrap gap-2">
            {PRODUCTS_OF_INTEREST.map((product) => {
              const active = selected.includes(product);
              return (
                <button
                  key={product}
                  type="button"
                  onClick={() => toggle(product)}
                  aria-pressed={active}
                  className={`px-3.5 py-1.5 text-[12px] rounded-sm border transition-colors ${
                    active
                      ? "border-brand-green-dark text-brand-green-dark bg-brand-green/10"
                      : "border-ink/15 text-ink/55 hover:border-ink/30"
                  }`}
                >
                  {product}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink/40"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="border border-ink/15 px-3.5 py-2.5 text-[14px] text-ink resize-none focus:outline-none focus:border-brand-green-dark"
          />
        </div>

        <button
          type="submit"
          className="mt-1 bg-brand-dark text-white text-[12px] font-bold uppercase tracking-wide py-3.5 hover:bg-black transition-colors"
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
}
