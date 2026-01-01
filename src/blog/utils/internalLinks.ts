import React from 'react';
import { blogPosts, getLocalizedBlogPost } from '../data/blogPosts';
import { getPostRoute } from './routes';

// Keywords that should trigger internal links - Updated with actual slugs
const linkKeywords: Record<string, string[]> = {
  // DMCA related
  'dmca': ['comment-fonctionne-dmca-explications-simples', 'modele-gratuit-dmca-createurs-copier-coller'],
  'demande dmca': ['comment-fonctionne-dmca-explications-simples'],
  'dmca request': ['comment-fonctionne-dmca-explications-simples'],
  'modèle dmca': ['modele-gratuit-dmca-createurs-copier-coller'],
  'dmca template': ['modele-gratuit-dmca-createurs-copier-coller'],
  
  // Scanner related
  'scanner': ['comment-verifier-contenu-leaks-guide-2025', 'comment-savoir-contenu-leake-guide-verification'],
  'scan': ['comment-verifier-contenu-leaks-guide-2025'],
  'vérifier': ['comment-verifier-contenu-leaks-guide-2025'],
  'détecter': ['comment-verifier-contenu-leaks-guide-2025'],
  'vérifier si': ['comment-verifier-contenu-leaks-guide-2025'],
  'check if': ['comment-verifier-contenu-leaks-guide-2025'],
  
  // Site-specific
  'leakimedia': ['leakimedia-fonctionnement-site-retirer-contenus'],
  'borntobefuck': ['borntobefuck-guide-complet-supprimer-photos-videos'],
  'alexhost': ['sites-pirates-heberges-alexhost-fonctionnement'],
  'telegram': ['telegram-nouvel-endroit-contenus-prives-circulent', 'telegram-marche-noir-contenus-voles'],
  'pornhub': ['retirer-contenu-pornhub-xvideos-guide-multi-plateformes'],
  'xvideos': ['retirer-contenu-pornhub-xvideos-guide-multi-plateformes'],
  'redtube': ['retirer-contenu-pornhub-xvideos-guide-multi-plateformes'],
  
  // Content types
  'onlyfans': ['comment-verifier-contenu-leaks-guide-2025'],
  'mym': ['comment-verifier-contenu-leaks-guide-2025'],
  'fuite': ['comment-verifier-contenu-leaks-guide-2025', 'comment-savoir-contenu-leake-guide-verification'],
  'leak': ['comment-verifier-contenu-leaks-guide-2025', 'comment-savoir-contenu-leake-guide-verification'],
  'leaks': ['20-sites-leaks-volent-contenus-2025', '15-sites-leaks-dangereux-creatrices-protection'],
  'sites de leaks': ['20-sites-leaks-volent-contenus-2025', '15-sites-leaks-dangereux-creatrices-protection'],
  'leak sites': ['20-sites-leaks-volent-contenus-2025'],
  
  // Protection
  'protéger': ['guide-complet-2025-proteger-contenus-avant-apres-leak'],
  'protection': ['guide-complet-2025-proteger-contenus-avant-apres-leak'],
  'protect': ['guide-complet-2025-proteger-contenus-avant-apres-leak'],
  
  // Google removal
  'google': ['supprimer-contenu-google-search-images-cache'],
  'google search': ['supprimer-contenu-google-search-images-cache'],
  'google images': ['supprimer-contenu-google-search-images-cache'],
  
  // Subscribers
  'abonnés': ['abonnes-premiere-source-fuites-creatrices'],
  'subscribers': ['abonnes-premiere-source-fuites-creatrices'],
  
  // Instagram
  'instagram': ['anciens-posts-instagram-sites-pirates'],
  
  // Site evaluation
  'site pirate': ['reperer-site-pirate-fiable-dangereux-checklist-createur'],
  'pirate site': ['reperer-site-pirate-fiable-dangereux-checklist-createur'],
};

/**
 * Find related posts based on keywords in text
 */
export const findRelatedPostsByKeywords = (
  text: string,
  currentPostSlug: string,
  language: 'fr' | 'en',
  limit: number = 5
): Array<{ post: typeof blogPosts[0]; keyword: string }> => {
  const textLower = text.toLowerCase();
  const foundPosts = new Map<string, { post: typeof blogPosts[0]; keyword: string }>();
  
  // Check each keyword
  Object.entries(linkKeywords).forEach(([keyword, slugs]) => {
    if (textLower.includes(keyword.toLowerCase())) {
      slugs.forEach(slug => {
        if (slug !== currentPostSlug && !foundPosts.has(slug)) {
          const post = blogPosts.find(p => p.slug === slug);
          if (post) {
            foundPosts.set(slug, { post, keyword });
          }
        }
      });
    }
  });
  
  return Array.from(foundPosts.values()).slice(0, limit);
};

/**
 * Replace keywords in text with internal links (returns React elements)
 * Simplified version that processes text more efficiently
 */
export const addInternalLinksToText = (
  text: string,
  currentPostSlug: string,
  language: 'fr' | 'en'
): React.ReactNode => {
  if (!text) return text;
  
  const usedLinks = new Set<string>();
  const linkMatches: Array<{ index: number; length: number; keyword: string; postRoute: string; title: string; matchText: string }> = [];
  
  // Sort keywords by length (longest first) to avoid partial matches
  const sortedKeywords = Object.keys(linkKeywords).sort((a, b) => b.length - a.length);
  
  // Find all matches first
  sortedKeywords.forEach(keyword => {
    if (usedLinks.has(keyword)) return;
    
    const slugs = linkKeywords[keyword];
    if (!slugs || slugs.length === 0) return;
    
    // Find the post
    const targetSlug = slugs.find(s => s !== currentPostSlug) || slugs[0];
    const post = blogPosts.find(p => p.slug === targetSlug);
    
    if (!post) return;
    
    const localized = getLocalizedBlogPost(post, language);
    const postRoute = getPostRoute(post.slug);
    
    // Create regex to match keyword (case insensitive, whole word)
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'gi');
    
    // Find first match only
    const match = text.match(regex);
    if (match && !usedLinks.has(keyword)) {
      const matchIndex = text.search(regex);
      if (matchIndex !== -1) {
        linkMatches.push({
          index: matchIndex,
          length: match[0].length,
          keyword,
          postRoute,
          title: localized.title,
          matchText: match[0],
        });
        usedLinks.add(keyword);
      }
    }
  });
  
  // Sort matches by index
  linkMatches.sort((a, b) => a.index - b.index);
  
  // If no matches, return text as is
  if (linkMatches.length === 0) {
    return text;
  }
  
  // Build React elements
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  
  linkMatches.forEach((match, idx) => {
    // Add text before match
    if (match.index > lastIndex) {
      const beforeText = text.substring(lastIndex, match.index);
      if (beforeText) {
        parts.push(beforeText);
      }
    }
    
    // Add link
    parts.push(
      React.createElement(
        'a',
        {
          key: `link-${idx}`,
          href: match.postRoute,
          className: 'text-primary hover:text-primary/80 underline font-semibold transition-colors',
          title: match.title,
        },
        match.matchText
      )
    );
    
    lastIndex = match.index + match.length;
  });
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return React.createElement(React.Fragment, null, ...parts);
};

/**
 * Replace keywords in text with internal links (returns HTML string - legacy)
 */
export const addInternalLinks = (
  text: string,
  currentPostSlug: string,
  language: 'fr' | 'en'
): string => {
  let linkedText = text;
  const usedLinks = new Set<string>();
  
  // Sort keywords by length (longest first) to avoid partial matches
  const sortedKeywords = Object.keys(linkKeywords).sort((a, b) => b.length - a.length);
  
  sortedKeywords.forEach(keyword => {
    if (usedLinks.has(keyword)) return;
    
    const slugs = linkKeywords[keyword];
    if (!slugs || slugs.length === 0) return;
    
    // Find the post
    const targetSlug = slugs.find(s => s !== currentPostSlug) || slugs[0];
    const post = blogPosts.find(p => p.slug === targetSlug);
    
    if (!post) return;
    
    const localized = getLocalizedBlogPost(post, language);
    const postRoute = getPostRoute(post.slug);
    
    // Create regex to match keyword (case insensitive, whole word)
    const regex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    
    // Check if keyword exists in text
    if (regex.test(linkedText)) {
      // Replace first occurrence only
      linkedText = linkedText.replace(
        regex,
        (match) => {
          if (usedLinks.has(keyword)) return match;
          usedLinks.add(keyword);
          return `<a href="${postRoute}" class="text-primary hover:text-primary/80 underline font-semibold transition-colors" title="${localized.title}">${match}</a>`;
        }
      );
    }
  });
  
  return linkedText;
};

