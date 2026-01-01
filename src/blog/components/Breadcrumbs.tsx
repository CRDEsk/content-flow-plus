import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import { getBlogListRoute, getCategoryRoute, getPostRoute } from '../utils/routes';
import { useLanguage } from '@/hooks/useLanguage';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const { language } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 text-zinc-400 hover:text-primary transition-colors"
            aria-label={language === 'fr' ? 'Accueil' : 'Home'}
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-zinc-600" />
            {index === items.length - 1 ? (
              <span className="text-white font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="text-zinc-400 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export const getBlogPostBreadcrumbs = (
  postTitle: string,
  category: string,
  language: 'fr' | 'en'
): BreadcrumbItem[] => {
  return [
    {
      label: language === 'fr' ? 'Blog' : 'Blog',
      href: getBlogListRoute(),
    },
    {
      label: category,
      href: getCategoryRoute(category.toLowerCase().replace(/\s+/g, '-')),
    },
    {
      label: postTitle,
      href: '#',
    },
  ];
};

export const getBlogListBreadcrumbs = (): BreadcrumbItem[] => {
  return [
    {
      label: 'Blog',
      href: '#',
    },
  ];
};

export const getCategoryBreadcrumbs = (
  category: string,
  language: 'fr' | 'en'
): BreadcrumbItem[] => {
  return [
    {
      label: language === 'fr' ? 'Blog' : 'Blog',
      href: getBlogListRoute(),
    },
    {
      label: category,
      href: '#',
    },
  ];
};

export default Breadcrumbs;

