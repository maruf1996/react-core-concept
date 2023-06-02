/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1daf89",
        
"secondary": "#78c12e",
        
"accent": "#edc0a1",
        
"neutral": "#151B1E",
        
"base-100": "#FFFFFF",
        
"info": "#3A99D4",
        
"success": "#0D7358",
        
"warning": "#ECBA04",
        
"error": "#F03365",
        },
      },
    ],
  },
   //...
   plugins: [require("daisyui")],
}