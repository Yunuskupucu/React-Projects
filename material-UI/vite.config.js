import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@theme-toggles/react': '/node_modules/@theme-toggles/react',
    },
  },
});
