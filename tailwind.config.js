/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
                'night' : '#111111',
                'raisinBlack' : '#202020',
              },
      fontFamily: {
                'JetBrain': ['JetBrains Mono', 'sans-serif'], 
                'Chewy': ['Chewy', 'sans-serif'], 
                'Grace': ['Covered By Your Grace', 'sans-serif'],
              },
    },
  },
  plugins: [],
}

