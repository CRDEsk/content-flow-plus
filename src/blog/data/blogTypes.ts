// Content Silo Types (CRD Blog Domination Strategy)
export type ContentSilo = 'detection' | 'removal' | 'site-specific' | 'failure-comparison' | 'protection';

// Article Type Classification
export type ArticleType = 'site-specific' | 'emotional-long-tail' | 'comparison-failure' | 'guide' | 'update';

export interface BlogPost {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  slug: string;
  excerpt: {
    fr: string;
    en: string;
  };
  content: {
    fr: string;
    en: string;
  };
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  category: {
    fr: string;
    en: string;
  };
  tags: {
    fr: string[];
    en: string[];
  };
  image?: string;
  readTime?: number;
  featured?: boolean;
  // CRD Domination Strategy Fields
  silo?: ContentSilo; // Which content silo this belongs to
  articleType?: ArticleType; // Type of article (site-specific, emotional, etc.)
  strategicLinks?: {
    blogPosts: string[]; // Slugs of 2 related blog posts to link to
    servicePage?: string; // Service page URL to link to
  };
  lastContentUpdate?: string; // Date of last content refresh
  updateCount?: number; // Number of times content has been updated
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  count: number;
}

