import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: nombre del repositorio para que funcione en GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/clima-react-app/',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
})
