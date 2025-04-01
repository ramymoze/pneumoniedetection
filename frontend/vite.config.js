import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: './', // Required for Electron to load assets correctly
  build: {
    outDir: 'dist', // Output directory for the build
    emptyOutDir: true, // Clear the directory before building
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Entry point
      },
    },
  },
  server: {
    port: 3000, // Dev server port
    strictPort: true, // Fail if port is in use
  },
});