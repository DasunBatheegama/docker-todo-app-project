import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    allowedHosts: [
      'todo-app-v1-o3d9.onrender.com'
    ]
  }
})