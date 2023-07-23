/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green-1':'#f4f9f7',
        'green-2':'#dcebe4',
        'green-3':'#335449',
        'black-1':'#232223',
      },
      fontFamily:{
        'primary':['Outfit', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}