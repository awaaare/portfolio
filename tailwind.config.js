/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        'telegram': '#0088cc',
        'github': '#333333',
        'discord': '#7289da',
      },
    },
  },
  plugins: [],
}