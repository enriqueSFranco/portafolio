/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        say: "say 2.5s infinite",
      },
      keyframes: {
        say: {
          "0%": {
            transform: "rotate(0deg)",
          },

          "10%": {
            transform: "rotate(14deg)",
          },

          "20%": {
            transform: "rotate(-8deg)",
          },

          "30%": {
            transform: "rotate(14deg)",
          },

          "40%": {
            transform: "rotate(-4deg)",
          },

          "50%": {
            transform: "rotate(10deg)",
          },

          "60%": {
            transform: "rotate(0deg)",
          },

          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  plugins: [],
};
