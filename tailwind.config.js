/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "hsl(var(--primary-purple) / <alpha-value>)",
        },
        default: "hsl(var(--text) / <alpha-value>)",
      },

      fontFamily: {
        default: "var(--ff-body)",
        medium: "var(--ff-body-medium)",
        bold: "var(--ff-body-bold)",
      },

      backgroundColor: {
        body: "hsl(var(--body-bg) / <alpha-value>)",
        item: "hsl(var(--item-bg) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
