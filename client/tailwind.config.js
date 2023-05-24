/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#00433F',
        'custom-blue': '#8ECAE6',
      },
    },
  },
  plugins: [],
}

