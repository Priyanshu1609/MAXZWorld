module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#FFCF40",
        },
        dark: {
          DEFAULT: "#363A41",
          500: "#5E6167",
          300:'#86898d',
        },
        bgblue : {
          DEFAULT: "#09164C",
        },
        blackblue : {
          DEFAULT : '#0c1014',
        }

      },
      fontFamily: {
        'galvji': ['Galvji', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],

      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
