/**
 * Blog Route Utilities
 * Handles route paths for both main domain and subdomain
 */

import { isBlogSubdomain } from '../config/blogConfig';

/**
 * Get the blog route path
 * On subdomain: removes /blog prefix
 * On main domain: keeps /blog prefix
 */
export const getBlogRoute = (path: string): string => {
  if (isBlogSubdomain()) {
    // On subdomain, remove /blog prefix
    return path.replace(/^\/blog/, '') || '/';
  }
  // On main domain, ensure /blog prefix
  if (!path.startsWith('/blog')) {
    return `/blog${path}`;
  }
  return path;
};

/**
 * Get route for blog post
 */
export const getPostRoute = (slug: string): string => {
  return getBlogRoute(`/${slug}`);
};

/**
 * Get route for category
 */
export const getCategoryRoute = (categorySlug: string): string => {
  return getBlogRoute(`/category/${categorySlug}`);
};

/**
 * Get route for tag
 */
export const getTagRoute = (tag: string): string => {
  return getBlogRoute(`/tag/${encodeURIComponent(tag)}`);
};

/**
 * Get route for blog list
 */
export const getBlogListRoute = (): string => {
  return getBlogRoute('/');
};

