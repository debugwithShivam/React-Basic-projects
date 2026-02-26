import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      remotes:{
      home: 'http://localhost:4173/assets/remoteEntry.js',
      },
       shared: {
    react: { singleton: true },
    "react-dom": { singleton: true }
  }
    })
  ],
})
