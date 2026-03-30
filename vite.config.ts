import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/likabtplocation/', // nécessaire pour GitHub Pages
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // alias pour src
    },
  },
  server: {
    open: '/', // ouvre en local à http://localhost:5173/
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
});