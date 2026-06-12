import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: "iankim0.github.io",
  plugins: [react(), tailwindcss()],
});
