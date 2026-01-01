import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, FileText } from 'lucide-react';
import { getBlogPosts, getCategories, getLocalizedBlogPost } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { useEffect } from 'react';
import NotFound from '@/pages/NotFound';
import BlogCTA from '../components/BlogCTA';
import { getBlogListRoute } from '../utils/routes';

// Category descriptions
const getCategoryDescription = (categoryName: string): string => {
  const descriptions: Record<string, string> = {
    'Guides': 'Step-by-step guides to protect your content, remove leaks, and secure your digital presence. Learn the best practices from industry experts.',
    'Sites de Leaks': 'Comprehensive guides on removing content from specific leak sites. Learn how to deal with Leakimedia, Borntobefuck, Telegram, and more.',
    'Protection': 'Essential information about content protection, DMCA processes, and legal escalation strategies to safeguard your digital assets.',
    'Sécurité': 'Security best practices, monitoring tools, and prevention strategies to keep your content safe from unauthorized distribution.',
  };
  return descriptions[categoryName] || `Explore all articles about ${categoryName.toLowerCase()}.`;
};

const getCategoryDescriptionFR = (categoryName: string): string => {
  const descriptions: Record<string, string> = {
    'Guides': 'Guides étape par étape pour protéger votre contenu, supprimer les fuites et sécuriser votre présence digitale. Apprenez les meilleures pratiques des experts.',
    'Sites de Leaks': 'Guides complets sur la suppression de contenu depuis des sites de leaks spécifiques. Apprenez à gérer Leakimedia, Borntobefuck, Telegram, et plus encore.',
    'Protection': 'Informations essentielles sur la protection de contenu, les processus DMCA, et les stratégies d\'escalade juridique pour protéger vos actifs digitaux.',
    'Sécurité': 'Meilleures pratiques de sécurité, outils de monitoring, et stratégies de prévention pour garder votre contenu à l\'abri de la distribution non autorisée.',
  };
  return descriptions[categoryName] || `Explorez tous les articles sur ${categoryName.toLowerCase()}.`;
};

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
      <div className="min-h-screen bg-black text-white antialiased">
        <Header />
        <main>
          <div className="pt-24 sm:pt-32 pb-12 sm:pb-16">
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
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {categoryData.name}
                </h1>
              </div>
              
              {/* Category Description */}
              <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50">
                <p className="text-zinc-300 text-lg leading-relaxed">
                  {language === 'en' 
                    ? getCategoryDescription(categoryData.name)
                    : getCategoryDescriptionFR(categoryData.name)}
                </p>
                <p className="text-zinc-400 text-sm mt-4">
                  {language === 'en' 
                    ? `${posts.length} article${posts.length !== 1 ? 's' : ''} in this category`
                    : `${posts.length} article${posts.length > 1 ? 's' : ''} dans cette catégorie`}
                </p>
              </div>
              
              {/* Category CTA */}
              <BlogCTA variant="scan" position="intro" />
            </div>

            {posts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 gap-6">
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
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogCategory;

