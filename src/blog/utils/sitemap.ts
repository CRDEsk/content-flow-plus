import { blogPosts } from '../data/blogPosts';

const baseUrl = 'https://contentremovaldesk.com';

export const generateBlogSitemap = (): string => {
  const urls = blogPosts.map(post => {
    const lastmod = post.updatedAt || post.publishedAt;
    return `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
${urls}
</urlset>`;
};

export const generateBlogSitemapXML = (): string => {
  return generateBlogSitemap();
};

