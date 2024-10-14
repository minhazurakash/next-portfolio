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
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          paddingLeft: "1rem",
          paddingRight: "1rem",
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
          "@screen md": {
            maxWidth: "768px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
          "@screen lg": {
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
          "@screen xl": {
            maxWidth: "1150px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen 2xl": {
            maxWidth: "1350px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
        },
      });
    },
  ],
};
export default config;
