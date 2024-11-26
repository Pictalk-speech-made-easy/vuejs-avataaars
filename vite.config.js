import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: './src/entry.js', // Path to your library's entry point
      name: 'Avataaars',
      fileName: (format) => `avataaars.${format}.js`, // Output file format
    },
    rollupOptions: {
      external: ['vue'], // Exclude Vue from the bundle
      output: {
        globals: {
          vue: 'Vue', // Ensure Vue is referenced as a global variable in UMD builds
        },
        generatedCode: {
          variableNames: 'hashed',
        },
      },
    },
  },
  plugins: [vue()],
});