import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name:'Product',
      filename:'remoteEntry.js',
      exposes:{
        './Products':'./src/Products.jsx'
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
