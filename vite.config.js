// vite.config.(js|ts)
import { defineConfig } from "vite"

import vituum from 'vituum'
import pug from '@vituum/vite-plugin-pug'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    vituum(),
    eslint(),
    pug({
        root: './src'
    })
  ],
  build: {
    modulePreload: {
      polyfill: false
    }
  }
})
