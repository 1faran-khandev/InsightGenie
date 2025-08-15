/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // <- ensure all JS/JSX/TSX files are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
