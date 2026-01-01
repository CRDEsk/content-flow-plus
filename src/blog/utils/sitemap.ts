import { blogPosts } from '../data/blogPosts';
import { getBlogBaseUrl, isBlogSubdomain } from '../config/blogConfig';

export const generateBlogSitemap = (): string => {
  const baseUrl = getBlogBaseUrl();
  const isSubdomain = isBlogSubdomain();
  
  // On subdomain, paths are at root. On main domain, they have /blog prefix
  const getPostPath = (slug: string) => isSubdomain ? `/${slug}` : `/blog/${slug}`;
  const getBlogListPath = () => isSubdomain ? '/' : '/blog';

  const urls = blogPosts.map(post => {
    const lastmod = post.updatedAt || post.publishedAt;
    return `  <url>
    <loc>${baseUrl}${getPostPath(post.slug)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }).join('\n');

  // Add power pages
  const powerPages = [
    { path: '/remove-onlyfans-leaks', priority: 0.9, changefreq: 'weekly' },
    { path: '/remove-pornhub-content', priority: 0.9, changefreq: 'weekly' },
    { path: '/analyze-pirate-site', priority: 0.8, changefreq: 'monthly' },
  ];

  const powerPagesUrls = powerPages.map(page => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${baseUrl}${getBlogListPath()}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
${powerPagesUrls}
${urls}
</urlset>`;
};

export const generateBlogSitemapXML = (): string => {
  return generateBlogSitemap();
};

