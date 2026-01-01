/**
 * CRD Blog Domination Strategy - Content Silo Classification
 * 
 * Every article MUST belong to one of these 5 silos
 */

import { ContentSilo, ArticleType, BlogPost } from '../data/blogTypes';

/**
 * Classify content into silos based on keywords and content
 */
export const classifyContentSilo = (post: BlogPost, language: 'fr' | 'en'): ContentSilo => {
  const title = post.title[language].toLowerCase();
  const excerpt = post.excerpt[language].toLowerCase();
  const content = post.content[language].toLowerCase();
  const combined = `${title} ${excerpt} ${content}`;

  // Silo A - DETECTION
  const detectionKeywords = [
    'comment savoir si', 'how to check if', 'verify', 'vérifier', 'scanner', 
    'scan', 'détecter', 'detect', 'search leaks', 'rechercher', 'trouver'
  ];
  if (detectionKeywords.some(kw => combined.includes(kw))) {
    return 'detection';
  }

  // Silo B - REMOVAL
  const removalKeywords = [
    'supprimer', 'remove', 'retirer', 'dmca', 'google removal', 
    'faire retirer', 'get removed', 'delete', 'effacer'
  ];
  if (removalKeywords.some(kw => combined.includes(kw))) {
    return 'removal';
  }

  // Silo C - SITE-SPECIFIC (Most Important)
  const siteSpecificKeywords = [
    'leakimedia', 'borntobefuck', 'telegram', 'pornhub', 'xvideos',
    'alexhost', 'fapello', 'faponic', 'site pirate', 'pirate site',
    'comment fonctionne le site', 'how the site works'
  ];
  if (siteSpecificKeywords.some(kw => combined.includes(kw))) {
    return 'site-specific';
  }

  // Silo D - FAILURE & COMPARISON
  const failureKeywords = [
    'pourquoi', 'why', 'échoue', 'fail', 'ne fonctionne pas', "doesn't work",
    'vs', 'comparison', 'comparaison', 'gratuit', 'free', 'professionnel', 'professional'
  ];
  if (failureKeywords.some(kw => combined.includes(kw))) {
    return 'failure-comparison';
  }

  // Silo E - PROTECTION / PREVENTION
  const protectionKeywords = [
    'protéger', 'protect', 'protection', 'prévention', 'prevention',
    'sécurité', 'security', 'avant', 'before', 'après', 'after', 'guide complet'
  ];
  if (protectionKeywords.some(kw => combined.includes(kw))) {
    return 'protection';
  }

  // Default to removal if unclear
  return 'removal';
};

/**
 * Classify article type
 */
export const classifyArticleType = (post: BlogPost, language: 'fr' | 'en'): ArticleType => {
  const title = post.title[language].toLowerCase();
  const slug = post.slug.toLowerCase();

  // Site-specific articles
  if (title.includes('comment fonctionne') || title.includes('how the site works') || 
      slug.includes('fonctionnement') || slug.includes('site')) {
    return 'site-specific';
  }

  // Emotional long-tail
  if (title.includes('que faire') || title.includes('what to do') ||
      title.includes('quelqu\'un a') || title.includes('someone has')) {
    return 'emotional-long-tail';
  }

  // Comparison/Failure
  if (title.includes('pourquoi') || title.includes('why') ||
      title.includes('vs') || title.includes('échoue') || title.includes('fail')) {
    return 'comparison-failure';
  }

  // Guide
  if (title.includes('guide') || title.includes('guide') || 
      post.category[language].toLowerCase().includes('guide')) {
    return 'guide';
  }

  return 'guide';
};

/**
 * Get strategic internal links (2 blog posts + 1 service page)
 */
export const getStrategicLinks = (
  post: BlogPost,
  allPosts: BlogPost[],
  language: 'fr' | 'en'
): { blogPosts: BlogPost[]; servicePage?: string } => {
  try {
    const silo = classifyContentSilo(post, language);
    const articleType = classifyArticleType(post, language);

    // Find related posts from different silos (cross-linking strategy)
    const relatedPosts: BlogPost[] = [];
    const usedSlugs = new Set([post.slug]);

  // Strategy: Link to posts from complementary silos
  const siloLinkMap: Record<ContentSilo, ContentSilo[]> = {
    'detection': ['removal', 'protection'],
    'removal': ['detection', 'site-specific'],
    'site-specific': ['removal', 'failure-comparison'],
    'failure-comparison': ['removal', 'protection'],
    'protection': ['detection', 'removal'],
  };

  const targetSilos = siloLinkMap[silo] || ['removal', 'detection'];

  // Find 2 posts from target silos
  for (const targetSilo of targetSilos) {
    if (relatedPosts.length >= 2) break;

    const candidates = allPosts
      .filter(p => 
        p.id !== post.id && 
        !usedSlugs.has(p.slug) &&
        classifyContentSilo(p, language) === targetSilo
      )
      .sort((a, b) => {
        // Prefer featured posts, then recent posts
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      });

    if (candidates.length > 0) {
      relatedPosts.push(candidates[0]);
      usedSlugs.add(candidates[0].slug);
    }
  }

  // If we don't have 2 yet, fill with any related posts
  if (relatedPosts.length < 2) {
    const remaining = allPosts
      .filter(p => p.id !== post.id && !usedSlugs.has(p.slug))
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 2 - relatedPosts.length);
    
    relatedPosts.push(...remaining);
  }

  // Determine service page based on silo
  const servicePageMap: Record<ContentSilo, string> = {
    'detection': 'https://contentremovaldesk.com/scanner',
    'removal': 'https://contentremovaldesk.com/suppression',
    'site-specific': 'https://contentremovaldesk.com/suppression',
    'failure-comparison': 'https://contentremovaldesk.com/notre-solution',
    'protection': 'https://contentremovaldesk.com/protection',
  };

    return {
      blogPosts: relatedPosts.slice(0, 2),
      servicePage: servicePageMap[silo],
    };
  } catch (error) {
    console.error('Error in getStrategicLinks:', error);
    // Fallback: return recent posts
    const recentPosts = allPosts
      .filter(p => p.id !== post.id)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 2);
    
    return {
      blogPosts: recentPosts,
      servicePage: 'https://contentremovaldesk.com/suppression',
    };
  }
};

/**
 * Get all posts in a specific silo
 */
export const getPostsBySilo = (
  posts: BlogPost[],
  silo: ContentSilo,
  language: 'fr' | 'en'
): BlogPost[] => {
  return posts.filter(post => {
    const postSilo = post.silo || classifyContentSilo(post, language);
    return postSilo === silo;
  });
};

/**
 * Get silo statistics
 */
export const getSiloStats = (posts: BlogPost[], language: 'fr' | 'en') => {
  const silos: ContentSilo[] = ['detection', 'removal', 'site-specific', 'failure-comparison', 'protection'];
  
  return silos.map(silo => ({
    silo,
    count: getPostsBySilo(posts, silo, language).length,
    posts: getPostsBySilo(posts, silo, language),
  }));
};

