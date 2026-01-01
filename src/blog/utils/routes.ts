/**
 * Blog Route Utilities
 * Blog routes are on main domain at /blog path
 */

/**
 * Get the blog route path
 * Always uses /blog prefix since blog is on main domain
 */
const getBlogRoute = (path: string): string => {
  // Ensure /blog prefix
  if (!path.startsWith('/blog')) {
    if (path === '/' || path === '') {
      return '/blog';
    }
    return `/blog${path.startsWith('/') ? path : '/' + path}`;
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

