/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        main: '#F13030',
        gray: '#BABBCA',
        carbon: "#22272D"
      },
      fontFamily: {
        sans: ['Poppins', 'serif']
      },
      gridTemplateColumns: {
        'auto-fit-18rem': 'repeat(auto-fit, minmax(18rem, 1fr))'
      }
    },
  },
  plugins: [],
}