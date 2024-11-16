/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    
    extend: {
      screens: {
        '2xl': '1600px',      // Custom breakpoint for 2xl screens (1600px)
        '3xl': '1920px',      // Custom breakpoint for 3xl screens (1920px)
        'tablet': '640px',    // Custom breakpoint for tablet devices (640px)
        'desktop': '1024px',  // Custom breakpoint for desktop devices (1024px)
        'sm1':'400px',
  },
},
  plugins: [],
}
}
