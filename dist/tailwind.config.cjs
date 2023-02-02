/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '600': '600px'
      },
      height: {
        '450': '450px'
      },
      letterSpacing: {
        'widest': '0.35em'
      }
    },
  },
  plugins: [],
}
