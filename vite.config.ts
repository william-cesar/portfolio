import { fileURLToPath, URL } from 'node:url';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { dependencies } from './package.json';

type Chunks = {
  [key: string]: string[];
};

function renderChunks(deps: Record<string, string>) {
  const chunks: Chunks = {};
  Object.keys(deps).forEach((key) => {
    if (['vue', 'vue-router'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

export default defineConfig({
  base: '/portfolio/',
  plugins: [vue(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/assets/scss/index.scss";
        @import '/node_modules/vue3-toastify/dist/index.css';
        `
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'chunk-[name].[hash].js',
        entryFileNames: 'entry-[name].[hash].js',
        minifyInternalExports: true,
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          ...renderChunks(dependencies)
        },
        sourcemap: true
      }
    }
  }
});
