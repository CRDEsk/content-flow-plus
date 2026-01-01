/**
 * Blog Routes Component
 * Conditionally renders routes based on whether we're on subdomain or main domain
 */

import { lazy } from 'react';
import { isBlogSubdomain } from '../config/blogConfig';

const BlogList = lazy(() => import('../pages/BlogList'));
const BlogPost = lazy(() => import('../pages/BlogPost'));
const BlogCategory = lazy(() => import('../pages/BlogCategory'));
const BlogTag = lazy(() => import('../pages/BlogTag'));

export const getBlogRoutes = () => {
  const isSubdomain = isBlogSubdomain();
  
  if (isSubdomain) {
    // On subdomain: routes are at root
    return [
      { path: '/', element: BlogList },
      { path: '/category/:category', element: BlogCategory },
      { path: '/tag/:tag', element: BlogTag },
      { path: '/:slug', element: BlogPost },
    ];
  }
  
  // On main domain: routes have /blog prefix
  return [
    { path: '/blog', element: BlogList },
    { path: '/blog/category/:category', element: BlogCategory },
    { path: '/blog/tag/:tag', element: BlogTag },
    { path: '/blog/:slug', element: BlogPost },
  ];
};

