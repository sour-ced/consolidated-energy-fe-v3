import Image from "next/image";

export type ProductVariant =
  | "insulation"
  | "heatpumps"
  | "gas"
  | "aircon"
  | "solar"
  | "ceilings";

const IMAGES: Record<ProductVariant, string> = {
  insulation: "/images/product-insulation.jpg",
  heatpumps: "/images/product-heatpumps.jpg",
  gas: "/images/product-gas.jpg",
  aircon: "/images/product-aircon.jpg",
  solar: "/images/product-solar.jpg",
  ceilings: "/images/product-ceilings.jpg",
};

export default function ProductImage({
  variant,
  number,
  tag,
  tagAccent,
}: {
  variant: ProductVariant;
  number?: string;
  tag?: string;
  tagAccent?: boolean;
}) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
      <Image
        src={IMAGES[variant]}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
      />
      {number && (
        <span className="absolute bottom-3 left-3 text-[13px] font-semibold text-white/90 drop-shadow">
          {number}
        </span>
      )}
      {tag && (
        <span
          className={`absolute top-3 right-3 rounded-sm px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
            tagAccent
              ? "bg-brand-green text-brand-dark"
              : "bg-black/60 text-white backdrop-blur-sm"
          }`}
        >
          {tag}
        </span>
      )}
    </div>
  );
}
