// @ts-check
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

const fadeInPlugin = plugin(({ matchUtilities }) => {
  matchUtilities(
    {
      fadein: (value) => ({
        opacity: "0",
        animation: `fadein ${value} linear var(--fadein-delay, 0)`,
        "animation-fill-mode": "forwards",
      }),
      "fadein-delay": (value) => ({
        "--fadein-delay": value,
      }),
    },
    {
      values: {
        0.5: "0.5s",
        1: "1s",
        2: "2s",
      },
    }
  );
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      normal: defaultTheme.fontWeight.normal,
      bold: defaultTheme.fontWeight.bold,
    },
    screens: {
      tablet: defaultTheme.screens.md,
      desktop: defaultTheme.screens.xl,
    },
    extend: {
      fontFamily: {
        sans: ["Trebuchet MS", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), fadeInPlugin],
};
