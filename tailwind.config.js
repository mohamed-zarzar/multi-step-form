/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      "xs" : "380px",
      'sm' : '485px',
      'md' : '768px',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '300': '58rem',
      }
    },
  },
  plugins: [],
}

