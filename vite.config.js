import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import * as dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $components: '/src/lib/components',
      $functions: '/src/lib/functions'
    }
  },
  server: {
    port: 5173,
    strictPort: false
  }
})
