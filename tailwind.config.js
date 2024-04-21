/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darker-gray': '#121212',
        'cor-fundo-login': '#222'
      },
      gridTemplateColumns: {
        '52221': '5fr repeat(3, minmax(0, 2fr)) 0.5fr'
      }
    },
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
    }
  },
  plugins: [],
}