import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: "#DF6951",
        secondary: "#F1A501",
        lightBlue: "#181E4B",
        lightGray: "#5E6282",
        lightGrayAlt: "#686D77",
        lightGrayAlt2: "#84829A",
        white: "#fff",
        title: "#14183E",
        subtitle: "#1E1D4C",
        lightBlack: "#080809",
        lightPink: "#8A79DF",
        navText: "#212832"
      },
    },
  },
  plugins: [],
};
export default config;
