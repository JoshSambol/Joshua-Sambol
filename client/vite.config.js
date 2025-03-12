import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This enables network access
    port: 5173, // Default Vite port
    open: true // Opens browser automatically
  }
})
