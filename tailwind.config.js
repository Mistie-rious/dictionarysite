/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      
      colors:{
        background: '#4788C7' ,
        lightblue: '#DFF0FE'
      },
    },
  },
  plugins: [],
}