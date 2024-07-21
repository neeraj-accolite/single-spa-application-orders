import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  resolve: {
    alias: {
      "@acc/api": "http://localhost:5174/src/acc-api.ts"
    }
  },
  build: {
    rollupOptions: {
      input: "src/acc-orders.tsx",
      preserveEntrySignatures: "exports-only",
      output: {
        exports: "auto",
        format: "esm",
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [react()],
  server: {
    host: "localhost",
    port: 5173
  }
});
