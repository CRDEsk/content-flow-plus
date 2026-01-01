import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag, User, CheckCircle2, Home, ChevronRight, RefreshCw, Link2 } from 'lucide-react';
import { getBlogPost, getLocalizedBlogPost, getRelatedPosts, getBlogPosts } from '../data/blogPosts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import NotFound from '@/pages/NotFound';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import BlogSEO from '../components/BlogSEO';
import BlogCard from '../components/BlogCard';
import SocialShare from '../components/SocialShare';
import BlogCTA from '../components/BlogCTA';
import { getBlogListRoute, getCategoryRoute, getPostRoute } from '../utils/routes';
import { findRelatedPostsByKeywords, addInternalLinksToText } from '../utils/internalLinks';
import StrategicLinks from '../components/StrategicLinks';
import ContentUpdateBadge from '../components/ContentUpdateBadge';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  // Clean slug in case it has /blog/ prefix
  const cleanSlug = slug?.replace(/^\/blog\//, '') || slug;
  const post = cleanSlug ? getBlogPost(cleanSlug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  const localized = getLocalizedBlogPost(post, language);
  const relatedPosts = getRelatedPosts(post, 3, language);
  const relatedTopics = findRelatedPostsByKeywords(localized.content, post.slug, language, 6);
  
  // Calculate content length for CTA positioning
  const contentLines = localized.content.split('\n');
  const totalLines = contentLines.length;
  const introEnd = Math.min(10, Math.floor(totalLines * 0.15)); // First 15% or 10 lines
  const midPoint = Math.floor(totalLines * 0.5); // Middle of article

  // Helper function to render text with bold formatting and internal links
  const renderTextWithBoldAndLinks = (text: string): React.ReactNode => {
    if (!text) return text;
    
    try {
      // First, handle bold formatting - simpler approach
      const parts: React.ReactNode[] = [];
      const boldRegex = /\*\*([^*]+?)\*\*/g;
      let lastIndex = 0;
      let match;
      let key = 0;

      // Process bold text first
      while ((match = boldRegex.exec(text)) !== null) {
        // Add text before the bold
        if (match.index > lastIndex) {
          const beforeText = text.substring(lastIndex, match.index);
          if (beforeText) {
            // Add internal links to text before bold
            const linkedText = addInternalLinksToText(beforeText, post.slug, language);
            if (typeof linkedText === 'string') {
              parts.push(linkedText);
            } else {
              parts.push(linkedText);
            }
          }
        }
        // Add bold text
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
        const linkedText = addInternalLinksToText(remainingText, post.slug, language);
        if (typeof linkedText === 'string') {
          parts.push(linkedText);
        } else {
          parts.push(linkedText);
        }
      }
      
      if (parts.length === 0) return text;
      
      // Return parts - each part already has a key if it's a React element
      return <>{parts}</>;
    } catch (error) {
      // Fallback to plain text if rendering fails
      console.error('Error rendering text with links:', error);
      return text;
    }
  };

  // Enhanced markdown renderer with better styling and CTAs
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let listItems: string[] = [];
    let inList = false;
    let paragraphCount = 0;
    let hasShownIntroCTA = false;
    let hasShownMidCTA = false;

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      // H1 headers
      if (trimmed.startsWith('# ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-4 sm:mb-6 text-zinc-300 leading-relaxed text-sm sm:text-base md:text-lg">
              {renderTextWithBoldAndLinks(currentParagraph.join(' '))}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h2 key={`h2-${index}`} className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 mt-8 sm:mt-12 text-white border-b border-zinc-800 pb-3 sm:pb-4">
            {trimmed.substring(2)}
          </h2>
        );
        return;
      }

      // H2 headers
      if (trimmed.startsWith('## ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-4 sm:mb-6 text-zinc-300 leading-relaxed text-sm sm:text-base md:text-lg">
              {renderTextWithBoldAndLinks(currentParagraph.join(' '))}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h3 key={`h3-${index}`} className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 mt-6 sm:mt-10 text-white flex items-center gap-2 sm:gap-3">
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
            <p key={`p-${index}`} className="mb-4 sm:mb-6 text-zinc-300 leading-relaxed text-sm sm:text-base md:text-lg">
              {renderTextWithBoldAndLinks(currentParagraph.join(' '))}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h4 key={`h4-${index}`} className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 mt-6 sm:mt-8 text-white">
            {trimmed.substring(4)}
          </h4>
        );
        return;
      }

      // List items
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        if (!inList && currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="mb-4 sm:mb-6 text-zinc-300 leading-relaxed text-sm sm:text-base md:text-lg">
              {renderTextWithBoldAndLinks(currentParagraph.join(' '))}
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
            <ul key={`ul-${index}`} className="list-none mb-4 sm:mb-6 space-y-2 sm:space-y-3 ml-0">
              {listItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3 text-zinc-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg">{renderTextWithBoldAndLinks(item)}</span>
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
            <p key={`p-${index}`} className="mb-4 sm:mb-6 text-zinc-300 leading-relaxed text-sm sm:text-base md:text-lg">
              {renderTextWithBoldAndLinks(currentParagraph.join(' '))}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <div key={`highlight-${index}`} className="my-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <p className="text-zinc-200 leading-relaxed text-sm sm:text-base md:text-lg">
              {renderTextWithBoldAndLinks(trimmed.substring(2))}
            </p>
          </div>
        );
        return;
      }

      // Regular paragraph
      if (trimmed) {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`ul-${index}`} className="list-none mb-4 sm:mb-6 space-y-2 sm:space-y-3 ml-0">
              {listItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3 text-zinc-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg">{renderTextWithBoldAndLinks(item)}</span>
                </li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        currentParagraph.push(trimmed);
      } else if (currentParagraph.length > 0) {
        paragraphCount++;
        const paragraphText = currentParagraph.join(' ');
        
        elements.push(
            <p key={`p-${index}`} className="mb-6 text-zinc-300 leading-relaxed text-lg">
              {renderTextWithBoldAndLinks(paragraphText)}
            </p>
        );
        
        // Add intro CTA after first few paragraphs
        if (!hasShownIntroCTA && paragraphCount >= 2 && index >= introEnd) {
          elements.push(
            <BlogCTA key={`cta-intro-${index}`} variant="scan" position="intro" />
          );
          hasShownIntroCTA = true;
        }
        
        // Add mid CTA around middle of article
        if (!hasShownMidCTA && index >= midPoint && paragraphCount >= 5) {
          elements.push(
            <BlogCTA key={`cta-mid-${index}`} variant="contact" position="mid" />
          );
          hasShownMidCTA = true;
        }
        
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
          {renderTextWithBoldAndLinks(currentParagraph.join(' '))}
        </p>
      );
    }

    return elements;
  };

  return (
    <>
      <BlogSEO post={post} language={language} />
      <div className="min-h-screen bg-black text-white antialiased">
        <Header />
        <main>
          <article className="pt-24 sm:pt-32 pb-8 sm:pb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb Navigation - Mobile Optimized */}
            <nav className="mb-4 sm:mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-zinc-400 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
                <li className="flex-shrink-0">
                  <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                    <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{t('blog.list.breadcrumbHome')}</span>
                    <span className="sm:hidden">Home</span>
                  </Link>
                </li>
                <li className="flex-shrink-0">
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </li>
                <li className="flex-shrink-0">
                  <Link to={getBlogListRoute()} className="hover:text-primary transition-colors">
                    {t('blog.list.breadcrumbBlog')}
                  </Link>
                </li>
                <li className="flex-shrink-0">
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </li>
                <li className="flex-shrink-0 hidden sm:block">
                  <Link to={getCategoryRoute(localized.category.toLowerCase().replace(/\s+/g, '-'))} className="hover:text-primary transition-colors">
                    {localized.category}
                  </Link>
                </li>
                <li className="flex-shrink-0 hidden sm:block">
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </li>
                <li className="text-zinc-300 truncate max-w-[120px] sm:max-w-xs flex-shrink-0">
                  <span className="hidden sm:inline">{localized.title}</span>
                  <span className="sm:hidden">...</span>
                </li>
              </ol>
            </nav>

            <Button
              asChild
              variant="ghost"
              className="mb-6 sm:mb-8 text-zinc-400 hover:text-white text-sm sm:text-base"
            >
              <Link to={getBlogListRoute()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('blog.list.backToBlog')}
              </Link>
            </Button>

            {/* Hero Section - Case Study Style - Mobile Optimized */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl border border-zinc-800/50 mb-8 sm:mb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-50" />
              
              <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12">
                {/* Category Badge */}
                <div className="mb-4 sm:mb-6">
                  <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-semibold uppercase tracking-wide border border-primary/30">
                    {localized.category}
                  </span>
                </div>

                {/* Title - Mobile Optimized */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                  {localized.title}
                </h1>
                
                {/* Meta Info - Mobile Optimized */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-zinc-400 text-xs sm:text-sm mb-4 sm:mb-6">
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

                {/* Tags - Mobile Optimized */}
                {localized.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {localized.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-zinc-600/90 border border-zinc-500/60 text-xs sm:text-sm font-medium text-white flex items-center gap-1.5 sm:gap-2 hover:border-primary/70 hover:bg-primary/40 hover:text-white transition-colors shadow-sm"
                      >
                        <Tag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Content Section - Mobile Optimized */}
            <div className="max-w-4xl 3xl:max-w-5xl 4xl:max-w-6xl mx-auto">
              {/* Content Update Badge */}
              <ContentUpdateBadge post={post} language={language} />
              
              <div className="prose prose-invert prose-sm sm:prose-base md:prose-lg max-w-none">
                <div className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                  {renderContent(localized.content)}
                </div>
              </div>

              {/* End CTA Section */}
              <BlogCTA variant="expert" position="end" />

              {/* Related Topics Section - Mobile Optimized */}
              {relatedTopics.length > 0 && (
                <div className="mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-zinc-800/50">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <Link2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      {language === 'fr' ? 'Articles connexes' : 'Related Topics'}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-3 4xl:grid-cols-4 gap-3 sm:gap-4">
                    {relatedTopics.map(({ post: relatedPost, keyword }) => {
                      const localizedRelated = getLocalizedBlogPost(relatedPost, language);
                      return (
                        <Link
                          key={relatedPost.id}
                          to={getPostRoute(relatedPost.slug)}
                          className="group p-4 rounded-xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <div className="text-xs text-primary mb-2 font-semibold uppercase">
                                {keyword}
                              </div>
                              <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors mb-2 line-clamp-2">
                                {localizedRelated.title}
                              </h3>
                              <p className="text-sm text-zinc-400 line-clamp-2">
                                {localizedRelated.excerpt}
                              </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Social Share Section */}
              <div className="mt-12">
                <SocialShare 
                  title={localized.title}
                  url={getPostRoute(post.slug)}
                  description={localized.excerpt}
                />
              </div>

              {/* Strategic Internal Links (2 posts + 1 service page) */}
              <StrategicLinks 
                currentPost={post}
                allPosts={getBlogPosts(undefined, language)}
                language={language}
              />

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
                  <div className="grid grid-cols-1 md:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 gap-6">
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
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;

