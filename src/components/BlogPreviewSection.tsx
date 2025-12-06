import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, TrendingUp, Sparkles } from 'lucide-react';
import { getBlogPosts, getLocalizedBlogPost } from '@/blog/data/blogPosts';
import { useLanguage } from '@/hooks/useLanguage';
import BlogCard from '@/blog/components/BlogCard';
import { getBlogListRoute, getPostRoute } from '@/blog/utils/routes';

const BlogPreviewSection = () => {
  const { language, t } = useLanguage();
  
  // Get featured post
  const featuredPosts = getBlogPosts({ featured: true }, language);
  const featuredPost = featuredPosts[0];
  
  // Get newest posts (excluding featured)
  const allPosts = getBlogPosts(undefined, language);
  const newestPosts = allPosts
    .filter(post => post.id !== featuredPost?.id)
    .slice(0, 3);
  
  // Get popular posts (by read time, excluding featured and newest)
  const popularPosts = allPosts
    .filter(post => 
      post.id !== featuredPost?.id && 
      !newestPosts.some(np => np.id === post.id)
    )
    .sort((a, b) => (b.readTime || 0) - (a.readTime || 0))
    .slice(0, 3);

  return (
    <section className="relative py-20 md:py-28 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 mb-6 shadow-lg shadow-primary/30">
            <Sparkles className="w-8 h-8 text-black" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            <span className="block">Blog Protection</span>
            <span className="block bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
              de Contenu
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            {t('blog.header.subtitle')}
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Link to={getPostRoute(featuredPost.slug)}>
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/95 via-zinc-950/95 to-zinc-900/95 backdrop-blur-2xl border border-zinc-800/60 hover:border-primary/60 transition-all duration-500 shadow-2xl shadow-black/50 hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                
                <div className="relative p-10 lg:p-14">
                  <div className="mb-6">
                    <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-sm font-bold uppercase tracking-wider border border-primary/40 shadow-lg shadow-primary/10">
                      {getLocalizedBlogPost(featuredPost, language).category}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                    {getLocalizedBlogPost(featuredPost, language).title}
                  </h3>
                  
                  <p className="text-xl text-zinc-300 mb-8 leading-relaxed max-w-4xl group-hover:text-zinc-200 transition-colors">
                    {getLocalizedBlogPost(featuredPost, language).excerpt}
                  </p>
                  
                  <div className="flex items-center gap-8 text-base">
                    <div className="flex items-center gap-2.5 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">{featuredPost.readTime} {t('blog.list.minRead')}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-primary">
                      <Sparkles className="w-5 h-5 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
                      <span className="font-semibold">{t('blog.list.featured')}</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-semibold">Lire l'article</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Newest & Popular Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Newest Posts */}
          {newestPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('blog.list.newestSection')}</h3>
              </div>
              <div className="space-y-4">
                {newestPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Popular Posts */}
          {popularPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('blog.list.popularSection')}</h3>
              </div>
              <div className="space-y-4">
                {popularPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link to={getBlogListRoute()}>
            <button className="group relative px-12 py-5 rounded-2xl bg-gradient-to-r from-primary via-primary/95 to-primary hover:from-primary/95 hover:via-primary hover:to-primary/95 text-black font-bold text-lg transition-all duration-300 shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative flex items-center gap-3">
                {t('blog.list.allArticles')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;

