import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import global from 'global';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
    global: 'globalThis',
  },
});
