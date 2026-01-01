/**
 * Blog Configuration
 * Detects if running on blog subdomain and adjusts URLs accordingly
 */

export const getBlogBaseUrl = (): string => {
  if (typeof window === 'undefined') {
    // Server-side: check environment variable or default
    return process.env.BLOG_BASE_URL || 'https://blog.contentremovaldesk.com';
  }
  
  // Client-side: detect from current hostname
  const hostname = window.location.hostname;
  
  if (hostname === 'blog.contentremovaldesk.com' || hostname === 'localhost') {
    return 'https://blog.contentremovaldesk.com';
  }
  
  // Default to main domain blog path
  return 'https://contentremovaldesk.com';
};

export const getBlogUrl = (path: string = ''): string => {
  const baseUrl = getBlogBaseUrl();
  const isSubdomain = baseUrl.includes('blog.contentremovaldesk.com');
  
  // On subdomain, remove /blog prefix from paths
  if (isSubdomain && path.startsWith('/blog')) {
    path = path.replace(/^\/blog/, '') || '/';
  }
  
  // Ensure path starts with /
  if (!path.startsWith('/')) {
    path = '/' + path;
  }
  
  return `${baseUrl}${path}`;
};

export const getMainSiteUrl = (): string => {
  return 'https://contentremovaldesk.com';
};

export const isBlogSubdomain = (): boolean => {
  if (typeof window === 'undefined') {
    return process.env.BLOG_SUBDOMAIN === 'true';
  }
  return window.location.hostname === 'blog.contentremovaldesk.com';
};

