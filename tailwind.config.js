/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     fontFamily: {
        title: ["Poppins", "sans-serif"],
      },
      height:{
        h10: '70px' 
      } 
    },
  },
  plugins: [],
}

