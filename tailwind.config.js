/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'noir-black': '#1a1a1a',
        'noir-gray': '#2d2d2d',
        'wellness-glow': '#e2e8f0',
        'spirit-blue': '#a5b4fc',
        'alert-red': '#ef4444',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Montserrat"', '"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
