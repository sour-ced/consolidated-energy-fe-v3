import Image from "next/image";

export default function AustraliaMap() {
  return (
    <div className="relative w-full">
      <Image
        src="/images/map-offices.png"
        alt="Map of Australia showing Consolidated Energy office and warehouse locations across VIC, NSW, QLD, SA, WA and TAS"
        width={504}
        height={487}
        className="w-full h-auto"
      />
    </div>
  );
}
