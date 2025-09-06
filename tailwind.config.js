/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#b0c7ff",
          300: "#86a7ff",
          400: "#5d88ff",
          500: "#3369ff",
          600: "#0a56ff",
          700: "#0046cc",
          800: "#003699",
          900: "#002666"
        }
      },
      container: {
        center: true,
        padding: "1rem"
      }
    },
  },
  plugins: [],
}
