import { fileURLToPath, URL } from 'node:url'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
    splitVendorChunkPlugin()
  ],
  build: {
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "[name].[hash].js",
        chunkFileNames: "[name].[hash].js",
        assetFileNames: "[name].[hash].[ext]",
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
              if (id.includes("vuestic-ui")) {
                  return "vendor_vuestic-ui";
              }
          
              return "vendor";
          }
          },
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
