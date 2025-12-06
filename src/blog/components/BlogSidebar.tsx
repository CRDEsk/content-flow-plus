import { useState } from 'react';
import { Mail, Check, Loader2, FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getCategories } from '../data/blogPosts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/hooks/useLanguage';

interface BlogSidebarProps {
  selectedCategory: string | null;
  selectedTag: string | null;
  onCategoryChange: (category: string | null) => void;
  onTagChange: (tag: string | null) => void;
}

const BlogSidebar = ({
  selectedCategory,
  selectedTag,
  onCategoryChange,
  onTagChange,
}: BlogSidebarProps) => {
  const { language, t } = useLanguage();
  const categories = getCategories(language);
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setNewsletterStatus('success');
        setEmail('');
        setTimeout(() => setNewsletterStatus('idle'), 3000);
      } else {
        setNewsletterStatus('error');
        setTimeout(() => setNewsletterStatus('idle'), 3000);
      }
    }, 1000);
  };

  return (
    <div className="space-y-8">
      {/* Categories */}
      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20">
            <FolderOpen className="w-4 h-4 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-white">{t('blog.list.categories')}</h3>
        </div>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange(null)}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-2 border-primary/40 shadow-lg shadow-primary/10'
                : 'bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800/60 hover:text-white border border-zinc-800/60 hover:border-zinc-700/60'
            }`}
          >
            <span className="font-medium">{t('blog.list.allCategories')}</span>
            {selectedCategory === null && (
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            )}
          </button>
          {categories.map((category) => (
            <Link
              key={category.id}
              to={getCategoryRoute(category.slug)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group block ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-2 border-primary/40 shadow-lg shadow-primary/10'
                  : 'bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800/60 hover:text-white border border-zinc-800/60 hover:border-zinc-700/60'
              }`}
            >
              <span className="font-medium">{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedCategory === category.name
                  ? 'bg-primary/30 text-primary font-semibold'
                  : 'bg-zinc-800/60 text-zinc-400'
              }`}>
                ({category.count})
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border border-primary/20 p-6 shadow-lg shadow-primary/5">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 rounded-lg bg-primary/20 border border-primary/30">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <h4 className="font-bold text-white text-lg">{t('blog.list.newsletterTitle')}</h4>
          </div>
          <p className="text-sm text-zinc-300 mb-4 leading-relaxed">
            {t('blog.list.newsletterDesc')}
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="space-y-3">
            <div className="relative">
              <Input
                type="email"
                placeholder={t('blog.list.newsletterPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-900/60 border-zinc-800/60 text-white placeholder:text-zinc-500 focus:border-primary/50 focus:ring-primary/20"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
              className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-semibold transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 disabled:opacity-70"
            >
              {newsletterStatus === 'loading' && (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              )}
              {newsletterStatus === 'success' && (
                <Check className="w-4 h-4 mr-2" />
              )}
              {newsletterStatus === 'success' 
                ? t('blog.list.newsletterSuccess')
                : newsletterStatus === 'error'
                ? t('blog.list.newsletterError')
                : t('blog.list.newsletterButton')
              }
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
