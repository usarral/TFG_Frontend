import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  plugins: [sveltekit(), mkcert()],
  resolve: {
    alias: {
      $components: '/src/lib/components',
      $functions: '/src/lib/functions'
    }
  },
  server: {
    port: 443,
    strictPort: false,
    https: true
  }
})
