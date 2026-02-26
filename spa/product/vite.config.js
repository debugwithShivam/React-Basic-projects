import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'main',
      filename: 'remoteEntry.js',
      exposes: {
        './Layout': './src/Layout.jsx',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true }
      }

    })
  ],
  build: {
    minify: false,
    target: 'esnext',
    cssCodeSplit: false
  }
})
