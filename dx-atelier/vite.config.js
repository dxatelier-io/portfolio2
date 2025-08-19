import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ganti "dx-atelier" sesuai nama repo GitHub-mu
export default defineConfig({
  base: "/dx-atelier/",
  plugins: [react()],
})
