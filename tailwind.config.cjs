/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    fontFamily: {
      'nun': 'Nunito',
      'pop': 'Poppins',
    },
    extend: {
      colors: {
        primary: "#3CDBBF",
        secondary: 'rgba(60, 219, 191, 0.15)',
        glass: 'rgba(255, 255, 255, 0.2)'
        // primaryFont: "nunito",
        // secondaryFont: "poppins"
      },
      width: {
        '200': '53rem',
        '400': '89rem'
      },
      height: {
        '200': '53rem',
        '400': '89rem'
      }
    },
  },
  plugins: [],
}
