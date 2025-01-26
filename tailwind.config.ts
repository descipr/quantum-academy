import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        blue : {
          teal:"#3c579f",
        },

        gray:{
          navlink: "#464646",
          square:"#DAE0F1",
        }
      },

    },
  },
  plugins: [],
};
export default config;
