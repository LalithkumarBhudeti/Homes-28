import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ❌ DO NOT import '@tailwindcss/vite'

export default defineConfig({
  plugins: [react()],
})
