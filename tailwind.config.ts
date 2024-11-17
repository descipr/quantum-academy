import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-custom": "linear-gradient(180deg, #02122b 6.32%, #000 100%)",
      },
      backgroundAttachment: {
        fixed: "fixed",
      },
      fontFamily: {
        "Plus-jakarta": "var(--font--plus-jakarta)",
      },
      colors: {
        blue: {
          Textprimary: "#ACC2FA",
          button: "#ACC2FA",
          bl2: "#DBE5FF",
          b2d: "#2154DA",
        },
        gray: {
          line: "#B7B0B0",
          footer: "#CBDADA",
        },
        black: {
          Textsecondary: "#262629",
          primary: "#000000",
        },
        green: {
          button: "#4CAF50",
          secondary: "#00916E",
          primary:"#10b300",
          accent:"#208817"
        },
      },
    },
  },
  plugins: [],
};
export default config;
