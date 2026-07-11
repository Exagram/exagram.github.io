import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: 'Exagram.github.io',
    description: '',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}