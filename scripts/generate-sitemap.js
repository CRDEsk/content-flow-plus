/**
 * Script to generate sitemap.xml with all blog posts
 * Run with: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// Import blog posts data (we'll need to read the TypeScript file)
// For now, we'll manually list the blog posts or use a JSON export

const baseUrl = 'https://contentremovaldesk.com';
const today = new Date().toISOString().split('T')[0];

// Blog posts slugs (from blogPosts.ts)
const blogPosts = [
  'comment-verifier-contenu-leaks-guide-2025',
  '15-sites-leaks-dangereux-creatrices-protection',
  'telegram-nouvel-endroit-contenus-prives-circulent',
  'comment-fonctionne-dmca-explications-simples',
  'leakimedia-fonctionnement-site-retirer-contenus',
  'borntobefuck-guide-complet-supprimer-photos-videos',
  'anciens-posts-instagram-sites-pirates',
  'comment-savoir-contenu-leake-guide-verification',
  '20-sites-leaks-volent-contenus-2025',
  'abonnes-premiere-source-fuites-creatrices',
  'telegram-marche-noir-contenus-voles',
  'sites-pirates-heberges-alexhost-fonctionnement',
  'supprimer-contenu-google-search-images-cache',
  'modele-gratuit-dmca-createurs-copier-coller',
  'retirer-contenu-pornhub-xvideos-guide-multi-plateformes',
  'reperer-site-pirate-fiable-dangereux-checklist-createur',
  'guide-complet-2025-proteger-contenus-avant-apres-leak',
];

// Read existing sitemap
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Generate blog posts URLs
const blogUrls = blogPosts.map(slug => {
  return `  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
}).join('\n');

// Insert blog posts before closing </urlset>
if (sitemapContent.includes('<!-- Blog -->')) {
  // Replace existing blog section
  const blogSectionRegex = /<!-- Blog -->[\s\S]*?<\/url>/;
  sitemapContent = sitemapContent.replace(
    blogSectionRegex,
    `<!-- Blog -->\n  <url>\n    <loc>${baseUrl}/blog</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n${blogUrls}`
  );
} else {
  // Add blog section before closing tag
  sitemapContent = sitemapContent.replace(
    '</urlset>',
    `  <!-- Blog -->\n  <url>\n    <loc>${baseUrl}/blog</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n${blogUrls}\n</urlset>`
  );
}

// Write updated sitemap
fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
console.log('✅ Sitemap updated with blog posts!');
console.log(`   Added ${blogPosts.length} blog post URLs`);

