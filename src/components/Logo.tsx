import Image from "next/image";

export default function Logo({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  return (
    <Image
      src={variant === "dark" ? "/images/logo-dark.png" : "/images/logo-white.png"}
      alt="Consolidated Energy"
      width={500}
      height={113}
      className="h-9 w-auto"
      priority
    />
  );
}
