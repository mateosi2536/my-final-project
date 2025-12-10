import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        plans: resolve(__dirname, 'plans.html'),
        network: resolve(__dirname, 'network-info.html')
      }
    }
  }
});
