/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
    },
    extend: {
      colors: {
        main: "#C30D1C",
        ash: {
          900: "#A4A4A4",
          200: "#011014",
        },
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      padding: {
        section: "mx-[100px]",
      },
    },
  },
  plugins: [],
};
