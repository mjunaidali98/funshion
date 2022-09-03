/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        "14.52px": "14.52px"
      },
      boxShadow: {
        header: "0px 4px 4px rgba(0, 0, 0, 0.15)"
      },
      colors: {
        brand: "#F09522"
      }

    },
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
