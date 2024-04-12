/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts}",
    './src/*.{html,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FDC401',
        secondary: '#DF6206'
      }
    },
  },
  plugins: [],
}

