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
      },
    },
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
    }
  },
  plugins: [],
}