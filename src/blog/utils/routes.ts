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
const getBlogRoute = (path: string): string => {
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
export function getPostRoute(slug: string): string {
  return getBlogRoute(`/${slug}`);
}

/**
 * Get route for category
 */
export function getCategoryRoute(categorySlug: string): string {
  return getBlogRoute(`/category/${categorySlug}`);
}

/**
 * Get route for tag
 */
export function getTagRoute(tag: string): string {
  return getBlogRoute(`/tag/${encodeURIComponent(tag)}`);
}

/**
 * Get route for blog list
 */
export function getBlogListRoute(): string {
  return getBlogRoute('/');
}

