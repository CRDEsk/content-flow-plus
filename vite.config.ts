import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
    port: 8080,
    strictPort: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core libraries
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
            return 'react-vendor';
          }
          // 3D libraries (heavy) - only load when needed
          if (id.includes('three') || id.includes('cobe') || id.includes('react-globe')) {
            return 'three-vendor';
          }
          // Animation libraries
          if (id.includes('framer-motion')) {
            return 'animation-vendor';
          }
          // Chart libraries
          if (id.includes('recharts')) {
            return 'chart-vendor';
          }
          // Form handling
          if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) {
            return 'form-vendor';
          }
          // UI component libraries (Radix UI)
          if (id.includes('@radix-ui')) {
            return 'ui-vendor';
          }
          // Embla carousel
          if (id.includes('embla-carousel')) {
            return 'carousel-vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 500, // Reduced limit for better optimization
    target: 'esnext',
    minify: 'esbuild',
  },
});
