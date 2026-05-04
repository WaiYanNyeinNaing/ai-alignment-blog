import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft && data.locale === 'en');
  posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  function slugFromId(id) {
    return id.replace(/-mm$/, '').replace(/\.mdx?$/, '');
  }

  return rss({
    title: 'AI Alignment Blog',
    description: 'AI safety and alignment — explained clearly, backed by research.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description || '',
      link: `/blog/${slugFromId(post.id)}/`,
    })),
  });
}
