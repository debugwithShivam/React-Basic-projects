import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
import federation from '@originjs/vite-plugin-federation'
export default defineConfig({
  plugins: [react(),
    federation({
      name:'About',
      filename:'remoteEntry.js',
      exposes:{
        './About':'./src/About.jsx'
      },
      shared:{
        react:{
          singleton:true
        },
        'react-dom':{singleton:true}
      }
    })
  ],
  build:{
    minify:false,
    target:'esnext',
    cssCodeSplit:false
  }
})
