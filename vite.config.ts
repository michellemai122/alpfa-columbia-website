import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Builds are served from the repo subfolder on GitHub Pages.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/alpfa-columbia-website/' : '/',
  plugins: [react()],
}))
