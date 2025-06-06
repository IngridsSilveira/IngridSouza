/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundColor: {
        'palete-red': '#af2000',
        'palete-green': '#3ca84e',
        'palete-orange': '#dd5602',
        'palete-blue': '#07a0d3',
        'palete-pink': '#ca217e',
      },
      backgroundImage: {
        'black-background': "url('https://imgur.com/8XC5b5f.jpg')",
        'white-background': "url('https://imgur.com/62EU1bV.jpg')",
       },
      colors: {
        'dark-bg': '#121212',
        'dark-text': '#e0e0e0',
        'light-bg': '#ffffff',
        'light-text': '#000000',
        'primary-color': '#2cadad',
        'linkedin-color':'#3385ff',
        'whatsapp-color':'#18d64e',
        'palete-red': '#af2000',
        'palete-green': '#3ca84e',
        'palete-orange': '#dd5602',
        'palete-blue': '#07a0d3',
        'palete-pink': '#ca217e',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'sono': ['Sono', 'sans-serif'],
        'protest': ['Protest Strike', 'sans-serif'],
      },
  },
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
  },
},
  plugins: [],
}

