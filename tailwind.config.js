// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: "#1FB6FF",   
        darkBg: "#0F172A",    
        lightBg: "#F8FAFC",    
        accent: "#6366F1",     
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],   
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        spinPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.6" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 1s ease-out forwards",
        fadeInUp: "fadeInUp 1s ease-out forwards",
        spinPulse: "spinPulse 1.5s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
