import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://silver3926.github.io',
  base: '/Sarimbit-web-portofolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
