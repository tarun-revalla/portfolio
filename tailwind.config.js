/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      primary: "var(--font-jetbrains-mono)",
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
      },
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
        bg: "background-color",
        border: "border-color",
        color: "color",
        fill: "fill",
        stroke: "stroke",
      },
      transitionDuration: {
        300: "300ms",
      },
      transitionTimingFunction: {
        "in-out": "ease-in-out",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.1s ease-out",
        "accordion-up": "accordion-up 0.1s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
