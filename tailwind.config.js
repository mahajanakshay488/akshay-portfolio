/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: {
          DEFAULT: colors.blue[400],
          light: colors.blue[300],
          dark: colors.blue[500]
        },
        secondary: {
          DEFAULT: colors.orange[400],
          light: colors.orange[300],
          dark: colors.orange[500]
        }
      }
    },
  },
  plugins: [],
}

