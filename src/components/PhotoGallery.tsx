import Image from "next/image";
import Reveal from "./Reveal";

export type GalleryPhoto = {
  src: string;
  alt: string;
  wide?: boolean;
};

export default function PhotoGallery({
  eyebrow,
  title,
  intro,
  photos,
  columns = 3,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  photos: GalleryPhoto[];
  columns?: 2 | 3;
}) {
  const colsClass = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="bg-section py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <p className="text-brand-green-dark text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl leading-[1.1] text-ink max-w-xl mb-4">
          {title}
        </h2>
        {intro && (
          <p className="text-ink/55 text-[15px] leading-relaxed max-w-2xl mb-12">
            {intro}
          </p>
        )}

        <div className={`grid grid-cols-1 ${colsClass} gap-4 ${!intro ? "mt-12" : ""}`}>
          {photos.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={(i % 6) * 60}
              className={`relative aspect-[4/3] overflow-hidden bg-neutral-200 ${photo.wide ? "sm:col-span-2" : ""}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
