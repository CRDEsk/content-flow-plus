import { blogPosts } from '../data/blogPosts';
import { getLocalizedBlogPost } from '../data/blogPosts';
import { getBlogUrl, getMainSiteUrl } from '../config/blogConfig';

const baseUrl = getMainSiteUrl();

export const generateRSSFeed = (language: 'fr' | 'en' = 'fr'): string => {
  const posts = blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 20); // Latest 20 posts

  const items = posts.map(post => {
    const localized = getLocalizedBlogPost(post, language);
    const postUrl = getBlogUrl(`/${post.slug}`);
    const pubDate = new Date(post.publishedAt).toUTCString();
    const updatedDate = post.updatedAt ? new Date(post.updatedAt).toUTCString() : pubDate;
    
    // Clean HTML from content for description (first 300 chars)
    const description = localized.excerpt || localized.content.substring(0, 300).replace(/\n/g, ' ').trim();
    
    return `    <item>
      <title><![CDATA[${localized.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <dc:date>${updatedDate}</dc:date>
      <category><![CDATA[${localized.category}]]></category>
      ${localized.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('\n      ')}
      <author>${post.author.name}@contentremovaldesk.com (${post.author.name})</author>
    </item>`;
  }).join('\n');

  const title = language === 'en' 
    ? 'ContentRemovalDesk - Content Protection Blog'
    : 'ContentRemovalDesk - Blog Protection de Contenu';
  
  const description = language === 'en'
    ? 'Expert guides on content protection, leak removal, DMCA procedures, and digital security for creators.'
    : 'Guides experts sur la protection de contenu, suppression de fuites, procédures DMCA et sécurité digitale pour créateurs.';

  const blogUrl = getBlogUrl('/');
  const rssUrl = getBlogUrl('/rss.xml');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${title}]]></title>
    <link>${blogUrl}</link>
    <description><![CDATA[${description}]]></description>
    <language>${language === 'en' ? 'en-US' : 'fr-FR'}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <ttl>60</ttl>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title><![CDATA[${title}]]></title>
      <link>${blogUrl}</link>
    </image>
    <atom:link href="${rssUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;
};

export const generateJSONFeed = (language: 'fr' | 'en' = 'fr'): object => {
  const posts = blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 20);

  const items = posts.map(post => {
    const localized = getLocalizedBlogPost(post, language);
    const postUrl = getBlogUrl(`/${post.slug}`);
    
    return {
      id: postUrl,
      url: postUrl,
      title: localized.title,
      content_html: localized.content,
      summary: localized.excerpt,
      date_published: post.publishedAt,
      date_modified: post.updatedAt || post.publishedAt,
      author: {
        name: post.author.name,
      },
      tags: localized.tags,
      language: language === 'en' ? 'en-US' : 'fr-FR',
    };
  });

  const title = language === 'en' 
    ? 'ContentRemovalDesk - Content Protection Blog'
    : 'ContentRemovalDesk - Blog Protection de Contenu';
  
  const description = language === 'en'
    ? 'Expert guides on content protection, leak removal, DMCA procedures, and digital security for creators.'
    : 'Guides experts sur la protection de contenu, suppression de fuites, procédures DMCA et sécurité digitale pour créateurs.';

  const blogUrl = getBlogUrl('/');
  const feedUrl = getBlogUrl('/feed.json');

  return {
    version: 'https://jsonfeed.org/version/1.1',
    title,
    description,
    home_page_url: blogUrl,
    feed_url: feedUrl,
    language: language === 'en' ? 'en-US' : 'fr-FR',
    icon: `${baseUrl}/logo.png`,
    favicon: `${baseUrl}/favicon.ico`,
    authors: [
      {
        name: 'ContentRemovalDesk',
        url: getMainSiteUrl(),
      },
    ],
    items,
  };
};

