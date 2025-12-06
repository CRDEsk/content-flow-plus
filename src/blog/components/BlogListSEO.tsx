import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { getBlogPosts } from '../data/blogPosts';
import { getBlogUrl, getMainSiteUrl } from '../config/blogConfig';

const BlogListSEO = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const baseUrl = getMainSiteUrl();
  const blogUrl = getBlogUrl('/');

  useEffect(() => {
    const allPosts = getBlogPosts(undefined, language);
    const title = language === 'en' 
      ? 'Content Protection Blog | Guides, Tips & Industry Insights - ContentRemovalDesk'
      : 'Blog Protection de Contenu | Guides, Conseils & Insights - ContentRemovalDesk';
    
    const description = language === 'en'
      ? 'Expert guides on content protection, leak removal, DMCA procedures, and digital security for creators. Learn how to protect your content and remove leaks effectively.'
      : 'Guides experts sur la protection de contenu, suppression de fuites, procédures DMCA et sécurité digitale pour créateurs. Apprenez à protéger votre contenu et supprimer les fuites efficacement.';

    // Update document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update keywords
    const keywords = language === 'en'
      ? 'content protection blog, leak removal guide, DMCA guide, creator protection, digital security, content removal tips'
      : 'blog protection contenu, guide suppression fuite, guide DMCA, protection créateurs, sécurité digitale, conseils suppression contenu';
    
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: blogUrl },
      { property: 'og:image', content: `${baseUrl}/og-image.png` },
      { property: 'og:locale', content: language === 'en' ? 'en_US' : 'fr_FR' },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Twitter Card
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${baseUrl}/og-image.png` },
    ];

    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', blogUrl);

    // CollectionPage Schema (Blog Listing)
    let collectionSchema = document.querySelector('script[type="application/ld+json"][data-schema="collection"]');
    if (!collectionSchema) {
      collectionSchema = document.createElement('script');
      collectionSchema.setAttribute('type', 'application/ld+json');
      collectionSchema.setAttribute('data-schema', 'collection');
      document.head.appendChild(collectionSchema);
    }

    const collectionSchemaData = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: language === 'en' ? 'Content Protection Blog' : 'Blog Protection de Contenu',
      description: description,
      url: blogUrl,
      publisher: {
        '@type': 'Organization',
        name: 'ContentRemovalDesk',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`,
        },
      },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: allPosts.length,
        itemListElement: allPosts.slice(0, 10).map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'BlogPosting',
            headline: language === 'en' ? post.title.en : post.title.fr,
            url: `${blogUrl}/${post.slug}`,
          },
        })),
      },
    };

    collectionSchema.textContent = JSON.stringify(collectionSchemaData);

    // WebSite Schema with SearchAction
    let websiteSchema = document.querySelector('script[type="application/ld+json"][data-schema="website"]');
    if (!websiteSchema) {
      websiteSchema = document.createElement('script');
      websiteSchema.setAttribute('type', 'application/ld+json');
      websiteSchema.setAttribute('data-schema', 'website');
      document.head.appendChild(websiteSchema);

      const websiteSchemaData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'ContentRemovalDesk',
        url: baseUrl,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${blogUrl}?search={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      };

      websiteSchema.textContent = JSON.stringify(websiteSchemaData);
    }
  }, [language, blogUrl, baseUrl]);

  return null;
};

export default BlogListSEO;

