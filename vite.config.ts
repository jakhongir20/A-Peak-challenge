import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact(), eslint()],
  resolve: {
    // alias: {
    //   '@': path.resolve(__dirname, './src'),
    // },
  },
  server: {
    port: 3000,
  },
});
