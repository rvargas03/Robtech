/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        triangle: 'polygon(50% 0%, 0% 100%, 100% 100%)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.clip-triangle': {
          'clip-path': 'polygon(50% 0%, 0% 100%, 100% 100%)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}