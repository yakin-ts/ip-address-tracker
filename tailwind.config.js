/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-grey': "hsl(0, 0%, 17%)",
        'dark-grey': "hsl(0, 0%, 59%)",
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
      backgroundImage: theme => ({
        'desktop': "url('./images/pattern-bg-desktop.png')",
        'mobile': "url('./images/pattern-bg-mobile.png')",
      }),
      plugins: [],
    }

  }
}