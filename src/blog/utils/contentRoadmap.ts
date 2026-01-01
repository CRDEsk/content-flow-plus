/**
 * CRD Blog Domination Strategy - Content Roadmap
 * 
 * Tracks content gaps and planning for 50-60 article target
 */

import { BlogPost } from '../data/blogTypes';
import { getSiloStats, classifyContentSilo, classifyArticleType } from './contentSilos';
import { getLocalizedBlogPost } from '../data/blogPosts';

export interface ContentGap {
  silo: string;
  articleType: string;
  priority: 'high' | 'medium' | 'low';
  suggestedTitle: string;
  reason: string;
}

/**
 * Analyze current content and identify gaps
 */
export const analyzeContentGaps = (
  posts: BlogPost[],
  language: 'fr' | 'en'
): ContentGap[] => {
  const gaps: ContentGap[] = [];
  const stats = getSiloStats(posts, language);

  // Target: 20 site-specific articles (highest priority)
  const siteSpecificCount = posts.filter(p => 
    classifyArticleType(p, language) === 'site-specific'
  ).length;

  if (siteSpecificCount < 20) {
    const needed = 20 - siteSpecificCount;
    gaps.push({
      silo: 'site-specific',
      articleType: 'site-specific',
      priority: 'high',
      suggestedTitle: language === 'fr' 
        ? '[SITE NAME] : comment fonctionne le site et comment faire retirer vos contenus'
        : '[SITE NAME]: How the Site Works & How to Remove Your Content',
      reason: `Need ${needed} more site-specific articles. These are the highest priority for SEO domination.`,
    });
  }

  // Target: 10 emotional long-tail articles
  const emotionalCount = posts.filter(p =>
    classifyArticleType(p, language) === 'emotional-long-tail'
  ).length;

  if (emotionalCount < 10) {
    gaps.push({
      silo: 'removal',
      articleType: 'emotional-long-tail',
      priority: 'high',
      suggestedTitle: language === 'fr'
        ? 'Quelqu\'un a leak mon [PLATFORM] : que faire (guide clair)'
        : 'Someone Leaked My [PLATFORM]: What to Do (Clear Guide)',
      reason: `Need ${10 - emotionalCount} more emotional articles. These convert extremely well.`,
    });
  }

  // Target: 10 comparison/failure articles
  const comparisonCount = posts.filter(p =>
    classifyArticleType(p, language) === 'comparison-failure'
  ).length;

  if (comparisonCount < 10) {
    gaps.push({
      silo: 'failure-comparison',
      articleType: 'comparison-failure',
      priority: 'medium',
      suggestedTitle: language === 'fr'
        ? 'Pourquoi [METHOD] échoue (et ce qui fonctionne vraiment)'
        : 'Why [METHOD] Fails (And What Actually Works)',
      reason: `Need ${10 - comparisonCount} more comparison articles to establish authority.`,
    });
  }

  // Check silo balance
  stats.forEach(({ silo, count }) => {
    const targetCount = silo === 'site-specific' ? 20 : 10;
    if (count < targetCount) {
      gaps.push({
        silo,
        articleType: 'guide',
        priority: 'medium',
        suggestedTitle: language === 'fr'
          ? `[TOPIC] - Guide complet ${new Date().getFullYear()}`
          : `[TOPIC] - Complete Guide ${new Date().getFullYear()}`,
        reason: `Silo "${silo}" has only ${count} articles. Target is ${targetCount}.`,
      });
    }
  });

  return gaps.sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
};

/**
 * Get content roadmap status
 */
export const getContentRoadmapStatus = (
  posts: BlogPost[],
  language: 'fr' | 'en'
) => {
  const total = posts.length;
  const target = 50;
  const progress = Math.round((total / target) * 100);

  const stats = getSiloStats(posts, language);
  const gaps = analyzeContentGaps(posts, language);

  return {
    total,
    target,
    progress,
    stats,
    gaps,
    nextSteps: gaps.slice(0, 5), // Top 5 priorities
  };
};

/**
 * Get suggested sites for site-specific articles
 */
export const getSuggestedSites = (): string[] => {
  return [
    'Leakimedia',
    'Borntobefuck',
    'Fapello',
    'Faponic',
    'Coomer',
    'Simpcity',
    'Thothub',
    'AnonIB',
    '4chan',
    'Reddit',
    'Discord',
    'Telegram',
    'OnlyFans Leaks',
    'MYM Leaks',
    'Fansly Leaks',
    'Patreon Leaks',
    'JustForFans',
    'ManyVids',
    'Chaturbate',
    'CamSoda',
  ];
};

