// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: '/Launchpad/', // 👈 MUST match folder name exactly (case-sensitive)
// })
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Launchpad/",  // 👈 matches your folder name
  build: {
    assetsDir: "assets",
    cssCodeSplit: true,
  },
});
