import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../data/blogTypes';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { getLocalizedBlogPost } from '../data/blogPosts';
import { getPostRoute, getTagRoute } from '../utils/routes';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const { language, t } = useLanguage();
  const localized = getLocalizedBlogPost(post, language);
  const navigate = useNavigate();

  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(getTagRoute(tag));
  };

  return (
    <Link to={getPostRoute(post.slug)} className="block text-inherit no-underline">
      <motion.div
        whileHover={{ y: -4 }}
        className="group h-full p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 text-white"
      >
        {/* Featured Badge - Mobile Optimized */}
        {post.featured && (
          <div className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gradient-to-r from-primary to-primary/80 text-black text-xs font-semibold mb-3 sm:mb-4">
            {t('blog.list.featured')}
          </div>
        )}

        {/* Category - Mobile Optimized */}
        <div className="mb-2 sm:mb-3">
          <span className="text-xs font-medium text-primary uppercase tracking-wide">
            {localized.category}
          </span>
        </div>

        {/* Title - Mobile Optimized */}
        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {localized.title}
        </h3>

        {/* Excerpt - Mobile Optimized */}
        <p className="text-zinc-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
          {localized.excerpt}
        </p>

        {/* Tags - Mobile Optimized */}
        {localized.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4" onClick={(e) => e.stopPropagation()}>
            {localized.tags.slice(0, 3).map((tag) => (
              <button
                key={tag}
                onClick={(e) => handleTagClick(e, tag)}
                className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md bg-zinc-600/90 border border-zinc-500/60 text-xs font-medium text-white hover:bg-primary/40 hover:text-white hover:border-primary/70 transition-colors cursor-pointer shadow-sm"
              >
                {tag}
              </button>
            ))}
            {localized.tags.length > 3 && (
              <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md bg-zinc-600/90 border border-zinc-500/60 text-xs font-medium text-white shadow-sm">
                +{localized.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Footer - Mobile Optimized */}
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-zinc-800/50">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-zinc-500 text-xs">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="hidden sm:inline">
                {new Date(post.publishedAt).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="sm:hidden">
                {new Date(post.publishedAt).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-1 sm:gap-1.5">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>{post.readTime} {t('blog.list.minRead')}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-primary opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
            <span className="text-xs sm:text-sm font-medium hidden sm:inline">{t('blog.list.read')}</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogCard;

