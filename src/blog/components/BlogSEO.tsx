import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BlogPost } from '../data/blogTypes';
import { getLocalizedBlogPost } from '../data/blogPosts';
import { getBlogUrl, getMainSiteUrl } from '../config/blogConfig';
import { getCategoryRoute } from '../utils/routes';

interface BlogSEOProps {
  post: BlogPost;
  language: 'fr' | 'en';
}

const BlogSEO = ({ post, language }: BlogSEOProps) => {
  const location = useLocation();
  const localized = getLocalizedBlogPost(post, language);
  const baseUrl = getMainSiteUrl();
  const postUrl = getBlogUrl(`/${post.slug}`);
  const blogUrl = getBlogUrl('/');

  useEffect(() => {
    // Update document title
    const title = `${localized.title} | Blog Protection de Contenu - ContentRemovalDesk`;
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', localized.excerpt);

    // Update keywords
    const keywords = localized.tags.join(', ') + ', content protection, leak removal, DMCA';
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: localized.title },
      { property: 'og:description', content: localized.excerpt },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: postUrl },
      { property: 'og:image', content: `${baseUrl}/og-image.png` },
      { property: 'og:locale', content: language === 'en' ? 'en_US' : 'fr_FR' },
      { property: 'article:published_time', content: post.publishedAt },
      { property: 'article:author', content: post.author.name },
      { property: 'article:section', content: localized.category },
    ];

    if (post.updatedAt) {
      ogTags.push({ property: 'article:modified_time', content: post.updatedAt });
    }

    localized.tags.forEach(tag => {
      ogTags.push({ property: 'article:tag', content: tag });
    });

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
      { name: 'twitter:title', content: localized.title },
      { name: 'twitter:description', content: localized.excerpt },
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
    canonicalLink.setAttribute('href', postUrl);

    // Hreflang tags for bilingual content
    const hreflangTags = [
      { rel: 'alternate', hreflang: 'fr', href: `${postUrl}?lang=fr` },
      { rel: 'alternate', hreflang: 'en', href: `${postUrl}?lang=en` },
      { rel: 'alternate', hreflang: 'x-default', href: postUrl },
    ];

    hreflangTags.forEach(({ rel, hreflang, href }) => {
      let tag = document.querySelector(`link[rel="${rel}"][hreflang="${hreflang}"]`);
      if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', rel);
        tag.setAttribute('hreflang', hreflang);
        document.head.appendChild(tag);
      }
      tag.setAttribute('href', href);
    });

    // Article Schema (JSON-LD)
    let articleSchema = document.querySelector('script[type="application/ld+json"][data-schema="article"]');
    if (!articleSchema) {
      articleSchema = document.createElement('script');
      articleSchema.setAttribute('type', 'application/ld+json');
      articleSchema.setAttribute('data-schema', 'article');
      document.head.appendChild(articleSchema);
    }

    const articleSchemaData = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: localized.title,
      description: localized.excerpt,
      image: {
        '@type': 'ImageObject',
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
      },
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      author: {
        '@type': 'Organization',
        name: post.author.name,
        url: baseUrl,
      },
      publisher: {
        '@type': 'Organization',
        name: 'ContentRemovalDesk',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`,
          width: 512,
          height: 512,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': postUrl,
      },
      articleSection: localized.category,
      keywords: localized.tags.join(', '),
      inLanguage: language === 'en' ? 'en-US' : 'fr-FR',
      wordCount: localized.content.split(/\s+/).filter(word => word.length > 0).length,
      timeRequired: `PT${post.readTime || 8}M`,
      url: postUrl,
      ...(post.featured && { articleSection: 'Featured' }),
    };

    articleSchema.textContent = JSON.stringify(articleSchemaData);

    // Breadcrumb Schema
    let breadcrumbSchema = document.querySelector('script[type="application/ld+json"][data-schema="breadcrumb"]');
    if (!breadcrumbSchema) {
      breadcrumbSchema = document.createElement('script');
      breadcrumbSchema.setAttribute('type', 'application/ld+json');
      breadcrumbSchema.setAttribute('data-schema', 'breadcrumb');
      document.head.appendChild(breadcrumbSchema);
    }

    const breadcrumbSchemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: language === 'en' ? 'Home' : 'Accueil',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: language === 'en' ? 'Blog' : 'Blog',
          item: blogUrl,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: localized.category,
          item: getBlogUrl(getCategoryRoute(localized.category.toLowerCase().replace(/\s+/g, '-'))),
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: localized.title,
          item: postUrl,
        },
      ],
    };

    breadcrumbSchema.textContent = JSON.stringify(breadcrumbSchemaData);

    // Organization Schema (if not already present)
    let orgSchema = document.querySelector('script[type="application/ld+json"][data-schema="organization"]');
    if (!orgSchema) {
      orgSchema = document.createElement('script');
      orgSchema.setAttribute('type', 'application/ld+json');
      orgSchema.setAttribute('data-schema', 'organization');
      document.head.appendChild(orgSchema);

      const orgSchemaData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ContentRemovalDesk',
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        description: language === 'en'
          ? 'Professional content removal and digital protection service for creators'
          : 'Service professionnel de suppression de contenu et protection digitale pour créateurs',
        sameAs: [
          'https://twitter.com/contentremovaldesk',
          'https://linkedin.com/company/contentremovaldesk',
        ],
      };

      orgSchema.textContent = JSON.stringify(orgSchemaData);
    }

    // FAQ Schema (for posts that answer questions)
    const hasFAQContent = localized.content.toLowerCase().includes('?') || 
                         localized.title.toLowerCase().includes('comment') ||
                         localized.title.toLowerCase().includes('how') ||
                         localized.title.toLowerCase().includes('pourquoi') ||
                         localized.title.toLowerCase().includes('why');
    
    if (hasFAQContent) {
      let faqSchema = document.querySelector('script[type="application/ld+json"][data-schema="faq"]');
      if (!faqSchema) {
        faqSchema = document.createElement('script');
        faqSchema.setAttribute('type', 'application/ld+json');
        faqSchema.setAttribute('data-schema', 'faq');
        document.head.appendChild(faqSchema);
      }

      // Extract questions from content (simple extraction - can be enhanced)
      const questions: { question: string; answer: string }[] = [];
      const h2Matches = localized.content.match(/##\s+(.+)/g) || [];
      const h3Matches = localized.content.match(/###\s+(.+)/g) || [];
      
      // Use title as main question if it's a question
      if (localized.title.includes('?') || localized.title.includes('Comment') || localized.title.includes('How')) {
        questions.push({
          question: localized.title,
          answer: localized.excerpt + ' ' + localized.content.substring(0, 500),
        });
      }

      // Add H2/H3 as questions if they look like questions
      [...h2Matches, ...h3Matches].slice(0, 5).forEach((match) => {
        const questionText = match.replace(/^#+\s+/, '').trim();
        if (questionText.includes('?') || questionText.length < 100) {
          questions.push({
            question: questionText,
            answer: localized.excerpt,
          });
        }
      });

      if (questions.length > 0) {
        const faqSchemaData = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: questions.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: answer.substring(0, 1000),
            },
          })),
        };
        faqSchema.textContent = JSON.stringify(faqSchemaData);
      }
    }

    // HowTo Schema (for guide posts)
    const isGuidePost = localized.category.toLowerCase().includes('guide') ||
                       localized.title.toLowerCase().includes('guide') ||
                       localized.content.toLowerCase().includes('étape') ||
                       localized.content.toLowerCase().includes('step');
    
    if (isGuidePost) {
      let howToSchema = document.querySelector('script[type="application/ld+json"][data-schema="howto"]');
      if (!howToSchema) {
        howToSchema = document.createElement('script');
        howToSchema.setAttribute('type', 'application/ld+json');
        howToSchema.setAttribute('data-schema', 'howto');
        document.head.appendChild(howToSchema);
      }

      // Extract steps from content
      const steps: { name: string; text: string }[] = [];
      const stepMatches = localized.content.match(/(?:###|##)\s+(?:Étape|Step|Étape\s+\d+|Step\s+\d+)[\s\S]*?(?=(?:###|##|$))/gi) || [];
      const numberedSteps = localized.content.match(/\d+\.\s+[^\n]+/g) || [];
      
      if (stepMatches.length > 0 || numberedSteps.length > 0) {
        const allSteps = [...stepMatches, ...numberedSteps].slice(0, 10);
        allSteps.forEach((step, index) => {
          const stepText = step.replace(/^#+\s+/, '').replace(/^\d+\.\s+/, '').trim();
          if (stepText.length > 10 && stepText.length < 200) {
            steps.push({
              name: stepText.substring(0, 100),
              text: stepText,
            });
          }
        });
      }

      // If no structured steps found, create from H2/H3 headings
      if (steps.length === 0) {
        const headings = [...h2Matches, ...h3Matches].slice(0, 8);
        headings.forEach((heading) => {
          const headingText = heading.replace(/^#+\s+/, '').trim();
          if (headingText.length > 5) {
            steps.push({
              name: headingText,
              text: localized.excerpt,
            });
          }
        });
      }

      if (steps.length > 0) {
        const howToSchemaData = {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: localized.title,
          description: localized.excerpt,
          totalTime: `PT${post.readTime || 8}M`,
          step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.name,
            text: step.text.substring(0, 500),
          })),
        };
        howToSchema.textContent = JSON.stringify(howToSchemaData);
      }
    }
  }, [post, language, localized, postUrl, blogUrl, baseUrl]);

  return null;
};

export default BlogSEO;

