import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./package/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E0228C",
        darkPrimary: "#871992"
      },
      maxWidth: {
        desktop: "1192px",
      },
      fontFamily: {
        oswald : ["var(--font-oswald)"],
      }
    },
  },
  plugins: [],
};
export default config;
