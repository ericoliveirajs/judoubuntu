/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'torii-black': '#121212',
        'ubuntu-gold': '#C8A145',
        'kimono-white': '#F9F8F4',
        'pure-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};