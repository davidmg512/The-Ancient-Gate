/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#ff0000"
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}

