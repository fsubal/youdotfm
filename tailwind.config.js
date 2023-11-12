// @ts-check
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const defaultColors = require("tailwindcss/colors");

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
      colors: {
        white: {
          DEFAULT: defaultColors.white,
          hover: defaultColors.slate[100],
          active: defaultColors.slate[200],
        },
        primary: defaultColors.green[500],
        link: defaultColors.green[600],
      },
      borderColor: {
        DEFAULT: defaultColors.slate[200],
      },
      fontFamily: {
        sans: ["Trebuchet MS", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),

    /**
     * `fadein-[...]`みたいなクラスを書けるようにする（ページ開いたときにフェードインしてくる用）
     */
    plugin(function fadeInPlugin({ matchUtilities }) {
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
    }),
  ],
};
