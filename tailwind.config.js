/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      
    },
    colors:{
      btnColor:'#F97C5F',
      
      lightBg:{
        n:'#FFF8F3',
        h:"#FFE8E0",
        b:'#FFDAC5'
      },
      normalbg:"#FFFFFF",
      dark:'#000000',
      whatsappBg:"rgba(57, 25, 117, 0.8)"


    },
    
  },
  plugins: [],
}
