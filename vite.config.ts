import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// vite-react-ssg prerenders each route to static HTML on build. Tailwind v4 comes in via
// PostCSS (postcss.config.mjs).
export default defineConfig({
  plugins: [react()],
})
