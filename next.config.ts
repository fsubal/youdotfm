import type { NextConfig } from "next";
import { OUTBOUND_LINKS } from "./src/domains/OutboundLink/model";

export default {
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.yml": {
        loaders: ["yaml-loader"],
        as: "*.js",
      },
    },
  },
  async redirects() {
    return OUTBOUND_LINKS.map(({ source, destination }) => ({
      source,
      destination,
      permanent: true,
    }));
  },
} satisfies NextConfig;
