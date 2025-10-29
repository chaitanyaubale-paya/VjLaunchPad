import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Launchpad/', // 👈 MUST match folder name exactly (case-sensitive)
})
