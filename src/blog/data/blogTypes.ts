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
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  count: number;
}

