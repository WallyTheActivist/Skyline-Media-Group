import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    // Each vendor chunk caches independently — only framer-motion invalidates
    // when animations change, not every React or router update.
    reportCompressedSize: false, // faster builds; enable when auditing bundle
    chunkSizeWarningLimit: 650,
    assetsInlineLimit: 4096, // inline assets <4 KB as base64 (saves round-trips)
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-router": ["react-router-dom"],
          "vendor-motion": ["framer-motion"],
        },
      },
    },
  },
});

