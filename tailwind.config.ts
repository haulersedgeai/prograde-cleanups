import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a2540",
          dark: "#06182b",
          light: "#1e3a5f",
        },
        sky: {
          DEFAULT: "#7dd3fc",
          light: "#bae6fd",
          deep: "#38bdf8",
        },
        sand: "#fdfbf7",
        ink: "#0a2540",
        cta: {
          DEFAULT: "#f59e0b",
          dark: "#d97706",
        },
      },
      fontFamily: {
        sans: ["ui-rounded", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,37,64,0.05), 0 8px 24px -8px rgba(10,37,64,0.12)",
        lift: "0 4px 12px rgba(10,37,64,0.08), 0 18px 36px -12px rgba(10,37,64,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
