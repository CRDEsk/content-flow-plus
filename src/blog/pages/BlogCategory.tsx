import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { getBlogPosts, getCategories, getLocalizedBlogPost } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';
import BlogHeader from '../components/BlogHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { useEffect } from 'react';
import NotFound from '@/pages/NotFound';
import { getBlogListRoute } from '../utils/routes';

const BlogCategory = () => {
  const { category } = useParams<{ category: string }>();
  const { language, t } = useLanguage();
  
  const categories = getCategories(language);
  const categoryData = categories.find(cat => cat.slug === category);
  
  useEffect(() => {
    if (categoryData) {
      const title = `${categoryData.name} | Blog - ContentRemovalDesk`;
      document.title = title;
      
      const description = language === 'en'
        ? `Browse all ${categoryData.name.toLowerCase()} articles on content protection, leak removal, and digital security.`
        : `Parcourez tous les articles ${categoryData.name.toLowerCase()} sur la protection de contenu, suppression de fuites et sécurité digitale.`;
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }
  }, [categoryData, language]);

  if (!categoryData) {
    return <NotFound />;
  }

  const posts = getBlogPosts({ category: categoryData.name }, language);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              asChild
              variant="ghost"
              className="mb-8 text-zinc-400 hover:text-white"
            >
              <Link to={getBlogListRoute()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('blog.list.backToBlog')}
              </Link>
            </Button>

            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-zinc-100 to-white bg-clip-text text-transparent">
                {categoryData.name}
              </h1>
              <p className="text-zinc-400 text-lg">
                {language === 'en' 
                  ? `${posts.length} article${posts.length !== 1 ? 's' : ''} in this category`
                  : `${posts.length} article${posts.length > 1 ? 's' : ''} dans cette catégorie`}
              </p>
            </div>

            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-zinc-400 text-lg">
                  {language === 'en' ? 'No articles found in this category.' : 'Aucun article trouvé dans cette catégorie.'}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogCategory;

