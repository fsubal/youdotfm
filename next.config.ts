import type { NextConfig } from 'next'

export default {
  output: "export",
  images: {
    unoptimized: true,
  },
} satisfies NextConfig;
