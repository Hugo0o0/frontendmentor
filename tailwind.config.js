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

        "light-purple": "hsl(var(--primary-purple-light) / <alpha-value>)",

        "steel-blue": "hsl(var(--steel-blue) / <alpha-value>)",

        "danger-red": "hsl(var(--danger-red) / <alpha-value>)",
        "danger-red-light": "hsl(var(--danger-red-light) / <alpha-value>)",
      },

      fontFamily: {
        default: "var(--ff-body)",
      },

      fontWeight: {
        bold: "var(--fw-bold)",
        medium: "var(--fw-medium)",
      },

      fontSize: {
        xl: "var(--fs-xl)",
        lg: "var(--fs-lg)",
        md: "var(--fs-md)",
        sm: "var(--fs-sm)",
      },

      lineHeight: {
        xl: "var(--lh-xl)",
        lg: "var(--lh-lg)",
        md: "var(--lh-md)",
        sm: "var(--lh-sm)",
      },

      backgroundColor: {
        body: "hsl(var(--body-bg) / <alpha-value>)",
        item: "hsl(var(--item-bg) / <alpha-value>)",
      },
      borderColor: {
        "item-border": "hsl(var(--border) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
