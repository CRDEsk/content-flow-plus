import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag, User, CheckCircle2, Home, ChevronRight, RefreshCw } from 'lucide-react';
import { getBlogPost, getLocalizedBlogPost, getRelatedPosts } from '../data/blogPosts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import NotFound from '@/pages/NotFound';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import BlogSEO from '../components/BlogSEO';
import BlogCard from '../components/BlogCard';
import SocialShare from '../components/SocialShare';
import { getBlogListRoute, getCategoryRoute, getPostRoute } from '../utils/routes';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  const localized = getLocalizedBlogPost(post, language);
  const relatedPosts = getRelatedPosts(post, 3, language);

  // Helper function to render text with bold formatting
  const renderTextWithBold = (text: string): React.ReactNode => {
    if (!text) return text;
    
    const parts: React.ReactNode[] = [];
    const boldRegex = /\*\*([^*]+?)\*\*/g;
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = boldRegex.exec(text)) !== null) {
      // Add text before the bold
      if (match.index > lastIndex) {
        const beforeText = text.substring(lastIndex, match.index);
        if (beforeText) {
          parts.push(beforeText);
        }
      }
      // Add bold text (without the asterisks)
      parts.push(
        <strong key={`bold-${key++}`} className="font-semibold text-white">
          {match[1]}
        </strong>
      );
      lastIndex = match.index + match[0].length;
    }
    // Add remaining text
    if (lastIndex < text.length) {
      const remainingText = text.substring(lastIndex);
      if (remainingText) {
        parts.push(remainingText);
      }
    }
    return parts.length > 0 ? <>{parts}</> : text;
  };

  // Enhanced markdown renderer with better styling
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let listItems: string[] = [];
    let inList = false;

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      // H1 headers
      if (trimmed.startsWith('# ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-6 text-zinc-300 leading-relaxed text-lg">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h2 key={`h2-${index}`} className="text-3xl font-bold mb-6 mt-12 text-white border-b border-zinc-800 pb-4">
            {trimmed.substring(2)}
          </h2>
        );
        return;
      }

      // H2 headers
      if (trimmed.startsWith('## ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-6 text-zinc-300 leading-relaxed text-lg">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h3 key={`h3-${index}`} className="text-2xl font-bold mb-4 mt-10 text-white flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            {trimmed.substring(3)}
          </h3>
        );
        return;
      }

      // H3 headers
      if (trimmed.startsWith('### ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-6 text-zinc-300 leading-relaxed text-lg">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h4 key={`h4-${index}`} className="text-xl font-semibold mb-3 mt-8 text-zinc-100">
            {trimmed.substring(4)}
          </h4>
        );
        return;
      }

      // List items
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        if (!inList && currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-6 text-zinc-300 leading-relaxed text-lg">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        listItems.push(trimmed.substring(2));
        inList = true;
        return;
      }

      // End list
      if (inList && trimmed === '') {
        if (listItems.length > 0) {
          elements.push(
            <ul key={`ul-${index}`} className="list-none mb-6 space-y-3 ml-0">
              {listItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">{renderTextWithBold(item)}</span>
                </li>
              ))}
            </ul>
          );
          listItems = [];
        }
        inList = false;
        return;
      }

      // Highlight boxes (starts with >)
      if (trimmed.startsWith('> ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-6 text-zinc-300 leading-relaxed text-lg">
              {currentParagraph.join(' ')}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <div key={`highlight-${index}`} className="my-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <p className="text-zinc-200 leading-relaxed text-lg">
              {renderTextWithBold(trimmed.substring(2))}
            </p>
          </div>
        );
        return;
      }

      // Regular paragraph
      if (trimmed) {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`ul-${index}`} className="list-none mb-6 space-y-3 ml-0">
              {listItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">{renderTextWithBold(item)}</span>
                </li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        currentParagraph.push(trimmed);
      } else if (currentParagraph.length > 0) {
        elements.push(
          <p key={`p-${index}`} className="mb-6 text-zinc-300 leading-relaxed text-lg">
            {renderTextWithBold(currentParagraph.join(' '))}
          </p>
        );
        currentParagraph = [];
      }
    });

    // Handle remaining content
    if (listItems.length > 0) {
      elements.push(
        <ul key="ul-final" className="list-none mb-6 space-y-3 ml-0">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-zinc-300 leading-relaxed">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-lg">{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    if (currentParagraph.length > 0) {
      elements.push(
        <p key="p-final" className="mb-6 text-zinc-300 leading-relaxed text-lg">
          {renderTextWithBold(currentParagraph.join(' '))}
        </p>
      );
    }

    return elements;
  };

  return (
    <>
      <BlogSEO post={post} language={language} />
      <Header />
      <article className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb Navigation */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-zinc-400">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    <span>{t('blog.list.breadcrumbHome')}</span>
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li>
                  <Link to={getBlogListRoute()} className="hover:text-primary transition-colors">
                    {t('blog.list.breadcrumbBlog')}
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li>
                  <Link to={getCategoryRoute(localized.category.toLowerCase().replace(/\s+/g, '-'))} className="hover:text-primary transition-colors">
                    {localized.category}
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li className="text-zinc-300 truncate max-w-xs">
                  {localized.title}
                </li>
              </ol>
            </nav>

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

            {/* Hero Section - Case Study Style */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl border border-zinc-800/50 mb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-50" />
              
              <div className="relative z-10 p-8 lg:p-12">
                {/* Category Badge */}
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold uppercase tracking-wide border border-primary/30">
                    {localized.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-100 to-white bg-clip-text text-transparent leading-tight">
                  {localized.title}
                </h1>
                
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-zinc-400 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{t('blog.list.by')} {post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  {post.updatedAt && post.updatedAt !== post.publishedAt && (
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4" />
                      <span>
                        {t('blog.list.lastUpdated')}: {new Date(post.updatedAt).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  )}
                  {post.readTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime} {t('blog.list.minRead')}
                    </div>
                  )}
                </div>

                {/* Tags */}
                {localized.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {localized.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-sm text-zinc-300 flex items-center gap-2 hover:border-primary/50 transition-colors"
                      >
                        <Tag className="w-3.5 h-3.5" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="text-zinc-300 leading-relaxed">
                  {renderContent(localized.content)}
                </div>
              </div>

              {/* Social Share Section */}
              <div className="mt-12">
                <SocialShare 
                  title={localized.title}
                  url={`/blog/${post.slug}`}
                  description={localized.excerpt}
                />
              </div>

              {/* CTA Section */}
              <div className="mt-16 pt-8 border-t border-zinc-800/50">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-8">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {language === 'fr' ? 'Besoin d\'aide pour protéger votre contenu ?' : 'Need Help Protecting Your Content?'}
                    </h3>
                    <p className="text-zinc-300 mb-6 text-lg">
                      {language === 'fr' 
                        ? 'Notre équipe peut vous aider à scanner, détecter et supprimer vos fuites de contenu rapidement et discrètement.'
                        : 'Our team can help you scan, detect, and remove your content leaks quickly and discreetly.'}
                    </p>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-semibold"
                    >
                      <a href="https://scan.contentremovaldesk.com" target="_blank" rel="noopener noreferrer">
                        {language === 'fr' ? 'Scanner mon contenu gratuitement' : 'Scan My Content Free'}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Author Bio Section */}
              <div className="mt-16 pt-8 border-t border-zinc-800/50">
                <div className="flex items-start gap-6 p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-white">{t('blog.list.authorBio')}</h3>
                    <p className="text-zinc-300 mb-2 font-semibold">{post.author.name}</p>
                    <p className="text-zinc-400 leading-relaxed">{t('blog.list.authorBioText')}</p>
                  </div>
                </div>
              </div>

              {/* Related Posts Section */}
              {relatedPosts.length > 0 && (
                <div className="mt-16 pt-8 border-t border-zinc-800/50">
                  <h2 className="text-3xl font-bold mb-8 text-white">
                    {t('blog.list.relatedPosts')}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <BlogCard key={relatedPost.id} post={relatedPost} />
                    ))}
                  </div>
                </div>
              )}

              {/* Footer Navigation */}
              <div className="mt-12 pt-8 border-t border-zinc-800/50 flex items-center justify-between">
                <Button
                  asChild
                  variant="outline"
                  className="border-zinc-800 text-zinc-300 hover:text-white hover:border-primary/50"
                >
                  <Link to={getBlogListRoute()}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t('blog.list.backToAllPosts')}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
      <Footer />
    </>
  );
};

export default BlogPost;

