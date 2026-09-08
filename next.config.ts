import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows the dev server (HMR, RSC, dev overlay assets) to be reached when
  // testing on a phone over the local network at http://10.19.5.10:3000 —
  // Next.js blocks these cross-origin dev requests from any host that isn't
  // localhost or listed here.
  allowedDevOrigins: ["10.19.5.10"],
};

export default nextConfig;
