/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-login': "url('../assets/img/bg.jpg')",
        'logo': "url('../assets/img/anava.png')",
      },

      colors: {
        'blue': '#3CC8C9',
        'yellow': '#ecd8ab',
        'abu': '#F4F7F9',
        'font': '#666666'
      },


    },
  },
  plugins: [],
}
