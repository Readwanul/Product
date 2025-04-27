import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "admin.refabry.com",
        port: "",
        pathname: "/**",
      },
    ]
  },
};

export default nextConfig;
