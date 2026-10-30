export type InsulationType = {
  title: string;
  href: string;
  src: string;
  alt: string;
  description?: string;
};

export const INSULATION_TYPES: InsulationType[] = [
  {
    title: "Ceiling Insulation",
    href: "/ceiling-insulation",
    src: "/images/insulation/category-ceiling.jpg",
    alt: "Ceiling insulation rolls",
    description: "Improve year-round comfort and energy efficiency",
  },
  {
    title: "Acoustic Insulation",
    href: "/acoustic-insulation",
    src: "/images/insulation/category-acoustic.jpg",
    alt: "Acoustic ceiling panels",
    description: "Reduce unwanted noise for quieter, more comfortable spaces",
  },
  {
    title: "Wall Insulation",
    href: "/external-wall-insulation",
    src: "/images/insulation/category-wall.jpg",
    alt: "Wall insulation batts",
    description: "Improve comfort and efficiency from the outside in",
  },
  {
    title: "Roof Sarking",
    href: "/roof-sarking",
    src: "/images/insulation/category-sarking.jpg",
    alt: "Roof sarking under construction",
    description: "A protective second skin for your roof",
  },
  {
    title: "Wall Wraps",
    href: "/wall-wraps",
    src: "/images/insulation/category-wrap.jpg",
    alt: "Wall wrap being installed",
    description: "Protect the frame, manage condensation and improve comfort",
  },
  {
    title: "Stone / Mineral Wool",
    href: "/rockwool-insulation",
    src: "/images/insulation/category-rockwool.jpg",
    alt: "Stone and mineral wool insulation batts",
  },
];

export function insulationType(href: string) {
  const type = INSULATION_TYPES.find((t) => t.href === href);
  if (!type) throw new Error(`Unknown insulation type: ${href}`);
  return type;
}
