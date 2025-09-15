import type { NextConfig } from "next";

export default {
  output: "export",
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
} satisfies NextConfig;
