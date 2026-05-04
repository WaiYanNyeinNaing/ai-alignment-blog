import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ai-alignment-blog.vercel.app',
  integrations: [mdx()],
});
