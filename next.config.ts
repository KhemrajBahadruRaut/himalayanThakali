import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/himalayanthakali_backend/**",
      },

      // PRODUCTION (COMMENTED AS REQUESTED)
      // Uncomment these for production domain images and set
      // dangerouslyAllowLocalIP to false.
      // {
      //   protocol: "https",
      //   hostname: "himalayanthakali.com",
      //   pathname: "/himalayanthakali_backend/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "www.himalayanthakali.com",
      //   pathname: "/himalayanthakali_backend/**",
      // },
    ],

    // PRODUCTION VALUE (COMMENTED AS REQUESTED)
    // dangerouslyAllowLocalIP: false,
  },
};

export default nextConfig;
