// vite.config.js
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/VueJsBarcode.js'),
      name: 'VueJsBarcode',
      fileName: (format) => `vue-jsbarcode.${format}.js`,
    },
    rollupOptions: {
      // Exclude dependencies you don't want to bundle
      external: ['vue', 'jsbarcode'],
      output: {
        globals: {
          vue: 'Vue',
          jsbarcode: 'JsBarcode',
        },
      },
    },
  },
  plugins: [vue()],
});
