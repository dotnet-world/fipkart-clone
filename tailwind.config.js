/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#2874F1',
        plus:'#FFE500'
      }
    },
  },
  plugins: [
    function({addUtilities}){
      const extendedUnderline={
        '.underline':{
          'textDecoration':'underline',
          'text-decoration-color':'white'
        }
      }
      addUtilities(extendedUnderline)
    }
  ],
}
