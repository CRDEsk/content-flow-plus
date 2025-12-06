import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../data/blogTypes';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { getLocalizedBlogPost } from '../data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const { language, t } = useLanguage();
  const localized = getLocalizedBlogPost(post, language);

  return (
    <Link to={getPostRoute(post.slug)}>
      <motion.div
        whileHover={{ y: -4 }}
        className="group h-full p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
      >
        {/* Featured Badge */}
        {post.featured && (
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary to-primary/80 text-black text-xs font-semibold mb-4">
            {t('blog.list.featured')}
          </div>
        )}

        {/* Category */}
        <div className="mb-3">
          <span className="text-xs font-medium text-primary uppercase tracking-wide">
            {localized.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {localized.title}
        </h3>

        {/* Excerpt */}
        <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
          {localized.excerpt}
        </p>

        {/* Tags */}
        {localized.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {localized.tags.slice(0, 3).map((tag) => (
              <Link
                key={tag}
                to={getTagRoute(tag)}
                onClick={(e) => e.stopPropagation()}
                className="px-2 py-1 rounded-md bg-zinc-800/50 text-xs text-zinc-300 hover:bg-primary/20 hover:text-primary transition-colors"
              >
                {tag}
              </Link>
            ))}
            {localized.tags.length > 3 && (
              <span className="px-2 py-1 rounded-md bg-zinc-800/50 text-xs text-zinc-300">
                +{localized.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
          <div className="flex items-center gap-4 text-zinc-500 text-xs">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.publishedAt).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
            {post.readTime && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime} {t('blog.list.minRead')}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
            <span className="text-sm font-medium">{t('blog.list.read')}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogCard;

