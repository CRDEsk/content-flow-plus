import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, TrendingUp, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getBlogPosts, getLocalizedBlogPost } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';
import BlogHeader from '../components/BlogHeader';
import BlogSidebar from '../components/BlogSidebar';
import BlogListSEO from '../components/BlogListSEO';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const BlogList = () => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  
  // Get all posts
  const allPosts = getBlogPosts(undefined, language);
  
  // Get featured posts
  const featuredPosts = getBlogPosts({ featured: true }, language);
  const featuredPost = featuredPosts[0]; // Most recent featured
  
  // Get newest posts (excluding featured)
  const newestPosts = allPosts
    .filter(post => post.id !== featuredPost?.id)
    .slice(0, 3);
  
  // Get popular posts (by read time - longer = more popular, excluding featured and newest)
  const popularPosts = allPosts
    .filter(post => 
      post.id !== featuredPost?.id && 
      !newestPosts.some(np => np.id === post.id)
    )
    .sort((a, b) => (b.readTime || 0) - (a.readTime || 0))
    .slice(0, 3);
  
  // Filtered posts for search/filter
  const filteredPosts = allPosts.filter(post => {
    const localized = getLocalizedBlogPost(post, language);
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = searchQuery === '' || (
      localized.title.toLowerCase().includes(searchLower) ||
      localized.excerpt.toLowerCase().includes(searchLower) ||
      localized.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
    const matchesCategory = !selectedCategory || 
      localized.category === selectedCategory;
    const matchesTag = !selectedTag || 
      localized.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const showSections = !searchQuery && !selectedCategory && !selectedTag && !showAll;

  return (
    <>
      <BlogListSEO />
      <Header />
      <div className="min-h-screen bg-black text-white">
        <BlogHeader />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <Input
                    type="text"
                    placeholder={t('blog.list.searchPlaceholder')}
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowAll(false);
                    }}
                    className="pl-10 bg-zinc-900/50 border-zinc-800/50 text-white placeholder:text-zinc-500 focus:border-primary/50"
                  />
                </div>
              </div>

              {showSections ? (
                <>
                  {/* Featured Section */}
                  {featuredPost && (
                    <section className="mb-20">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-4 mb-8"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                            <Star className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
                          </div>
                          <h2 className="text-3xl font-bold text-white">
                            {t('blog.list.featuredSection')}
                          </h2>
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <Link to={`/blog/${featuredPost.slug}`}>
                          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/95 via-zinc-950/95 to-zinc-900/95 backdrop-blur-2xl border border-zinc-800/60 hover:border-primary/60 transition-all duration-500 shadow-2xl shadow-black/50 hover:shadow-primary/20">
                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                            
                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                            
                            <div className="relative p-10 lg:p-14">
                              <div className="flex flex-col">
                                {/* Category Badge */}
                                <div className="mb-6">
                                  <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-sm font-bold uppercase tracking-wider border border-primary/40 shadow-lg shadow-primary/10">
                                    {getLocalizedBlogPost(featuredPost, language).category}
                                  </span>
                                </div>
                                
                                {/* Title */}
                                <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                                  {getLocalizedBlogPost(featuredPost, language).title}
                                </h3>
                                
                                {/* Excerpt */}
                                <p className="text-xl text-zinc-300 mb-8 leading-relaxed max-w-4xl group-hover:text-zinc-200 transition-colors">
                                  {getLocalizedBlogPost(featuredPost, language).excerpt}
                                </p>
                                
                                {/* Meta Info */}
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
                                
                                {/* Read More Indicator */}
                                <div className="mt-8 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <span className="font-semibold">Lire l'article</span>
                                  <span className="text-xl">→</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    </section>
                  )}

                  {/* Newest Section */}
                  {newestPosts.length > 0 && (
                    <section className="mb-20">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center justify-between mb-8"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                            <Clock className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
                          </div>
                          <h2 className="text-3xl font-bold text-white">
                            {t('blog.list.newestSection')}
                          </h2>
                        </div>
                        <button
                          onClick={() => setShowAll(true)}
                          className="px-4 py-2 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/50 border border-zinc-800/50 hover:border-primary/50 text-primary hover:text-primary/90 transition-all duration-300 flex items-center gap-2 text-sm font-semibold"
                        >
                          {t('blog.list.viewAll')}
                          <span className="text-lg">→</span>
                        </button>
                      </motion.div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {newestPosts.map((post, index) => (
                          <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <BlogCard post={post} />
                          </motion.div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Popular Section */}
                  {popularPosts.length > 0 && (
                    <section className="mb-20">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center justify-between mb-8"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                            <TrendingUp className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
                          </div>
                          <h2 className="text-3xl font-bold text-white">
                            {t('blog.list.popularSection')}
                          </h2>
                        </div>
                        <button
                          onClick={() => setShowAll(true)}
                          className="px-4 py-2 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/50 border border-zinc-800/50 hover:border-primary/50 text-primary hover:text-primary/90 transition-all duration-300 flex items-center gap-2 text-sm font-semibold"
                        >
                          {t('blog.list.viewAll')}
                          <span className="text-lg">→</span>
                        </button>
                      </motion.div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {popularPosts.map((post, index) => (
                          <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <BlogCard post={post} />
                          </motion.div>
                        ))}
                      </div>
                    </section>
                  )}
                </>
              ) : (
                <>
                  {/* Results count */}
                  {filteredPosts.length > 0 && (
                    <div className="mb-6 text-zinc-400 text-sm">
                      {filteredPosts.length} {filteredPosts.length === 1 ? t('blog.list.resultsFound') : t('blog.list.resultsFoundPlural')}
                      {selectedCategory && ` ${t('blog.list.inCategory')} ${selectedCategory}`}
                      {selectedTag && ` ${t('blog.list.taggedWith')} ${selectedTag}`}
                    </div>
                  )}

                  {/* Blog Posts Grid */}
                  {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredPosts.map((post, index) => (
                        <motion.div
                          key={post.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <BlogCard post={post} />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900/50 mb-4">
                        <Search className="w-8 h-8 text-zinc-500" />
                      </div>
                      <p className="text-zinc-400 text-lg mb-2">{t('blog.list.noPosts')}</p>
                      <p className="text-zinc-500 text-sm">
                        {t('blog.list.tryAdjusting')}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BlogSidebar
                  selectedCategory={selectedCategory}
                  selectedTag={selectedTag}
                  onCategoryChange={(cat) => {
                    setSelectedCategory(cat);
                    setShowAll(false);
                  }}
                  onTagChange={(tag) => {
                    setSelectedTag(tag);
                    setShowAll(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogList;
