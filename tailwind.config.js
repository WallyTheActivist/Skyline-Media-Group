/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#0A2540",
        "brand-secondary": "#1E3A8A",
        "brand-background": "#FFFFFF",
        "brand-surface-dark": "#0B0F1A",
        accent: {
          blue: "#1E3A8A",
          cyan: "#22D3EE"
        },
        midnight: "#06192e",
        navy: "#0a2540",
        ink: "#102a43",
        azure: "#1c74d9",
        mist: "#e7f1ff"
      },
      backgroundImage: {
        "accent-glow": "linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(34, 211, 238, 0.78) 100%)",
        "brand-soft": "linear-gradient(180deg, #f7fbff 0%, #ffffff 100%)"
      },
      spacing: {
        "section-sm": "5rem",
        "section-md": "6rem",
        "section-lg": "7.5rem"
      },
      boxShadow: {
        halo: "0 25px 70px rgba(8, 33, 59, 0.28)",
        soft: "0 14px 30px rgba(8, 33, 59, 0.12)",
        glow: "0 16px 48px rgba(30, 58, 138, 0.3)",
        lift: "0 32px 72px rgba(8, 33, 59, 0.18), 0 8px 20px rgba(8, 33, 59, 0.08)"
      },
      fontFamily: {
        display: ["Sora", "Manrope", "sans-serif"],
        body: ["Manrope", "sans-serif"]
      },
      fontSize: {
        "display-1": ["clamp(2.6rem, 6vw, 4.75rem)", { lineHeight: "0.98", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-2": ["clamp(2.2rem, 5vw, 4.1rem)", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-3": ["clamp(1.8rem, 3.5vw, 2.9rem)", { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "700" }],
        body: ["clamp(1rem, 1.15vw, 1.125rem)", { lineHeight: "1.7" }]
      }
    }
  },
  plugins: []
};
