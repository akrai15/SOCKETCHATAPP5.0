import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
    visualizer({
      filename: './dist/stats.html',
      open: true,
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true, // Ensure correct Host header is set
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'], // Core React libraries
          'router': ['react-router-dom'], // Separating routing library
          'zustand': ['zustand'], // Separating zustand library
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust this limit based on your requirements
    minify: 'terser', // Use 'terser' for more aggressive minification
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'zustand'],
    exclude: ['socketchatapp5.0'], // Exclude local dependencies
  },
  cacheDir: './node_modules/.vite', // Enable caching
});
