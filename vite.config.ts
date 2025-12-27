import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/everything.ts'),
      name: 'HyperMD',
      fileName: (format) => `hypermd.${format}.js`,
    },
    rollupOptions: {
      external: ['codemirror'],
      output: {
        globals: {
          codemirror: 'CodeMirror',
        },
      },
    },
    outDir: 'dist',
    sourcemap: true,
  },
  plugins: [dts({ rollupTypes: false })],
});
