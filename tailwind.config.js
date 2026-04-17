/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#06192e",
        navy: "#0a2540",
        ink: "#102a43",
        azure: "#1c74d9",
        mist: "#e7f1ff"
      },
      boxShadow: {
        halo: "0 25px 70px rgba(8, 33, 59, 0.28)",
        soft: "0 14px 30px rgba(8, 33, 59, 0.12)"
      },
      fontFamily: {
        display: ["Sora", "Manrope", "sans-serif"],
        body: ["Manrope", "sans-serif"]
      }
    }
  },
  plugins: []
};
