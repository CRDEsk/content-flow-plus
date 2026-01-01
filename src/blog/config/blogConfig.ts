/**
 * Blog Configuration
 * Blog is now on main domain at /blog path
 */

export const getBlogBaseUrl = (): string => {
  return 'https://contentremovaldesk.com';
};

export const getBlogUrl = (path: string = ''): string => {
  const baseUrl = getBlogBaseUrl();
  
  // Ensure path starts with /blog
  if (!path.startsWith('/blog')) {
    if (path === '/' || path === '') {
      path = '/blog';
    } else {
      path = `/blog${path.startsWith('/') ? path : '/' + path}`;
    }
  }
  
  return `${baseUrl}${path}`;
};

export const getMainSiteUrl = (): string => {
  return 'https://contentremovaldesk.com';
};

export const isBlogSubdomain = (): boolean => {
  // Blog is no longer on subdomain, always return false
  return false;
};

