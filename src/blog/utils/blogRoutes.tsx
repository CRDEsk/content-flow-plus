/**
 * Blog Routes Component
 * Blog routes are on main domain at /blog path
 */

import { lazy } from 'react';

const BlogList = lazy(() => import('../pages/BlogList'));
const BlogPost = lazy(() => import('../pages/BlogPost'));
const BlogCategory = lazy(() => import('../pages/BlogCategory'));
const BlogTag = lazy(() => import('../pages/BlogTag'));

export const getBlogRoutes = () => {
  // Blog is on main domain with /blog prefix
  return [
    { path: '/blog', element: BlogList },
    { path: '/blog/category/:category', element: BlogCategory },
    { path: '/blog/tag/:tag', element: BlogTag },
    { path: '/blog/:slug', element: BlogPost },
  ];
};

