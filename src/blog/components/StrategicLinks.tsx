/**
 * Strategic Internal Links Component
 * Implements CRD Blog Domination Strategy: 2 blog posts + 1 service page
 */

import { Link } from 'react-router-dom';
import { BlogPost } from '../data/blogTypes';
import { getPostRoute } from '../utils/routes';
import { getStrategicLinks } from '../utils/contentSilos';
import { getLocalizedBlogPost } from '../data/blogPosts';
import { ArrowRight } from 'lucide-react';

interface StrategicLinksProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
  language: 'fr' | 'en';
}

const StrategicLinks = ({ currentPost, allPosts, language }: StrategicLinksProps) => {
  try {
    const strategicLinks = getStrategicLinks(currentPost, allPosts, language);
    const localized = getLocalizedBlogPost(currentPost, language);

    if (strategicLinks.blogPosts.length === 0 && !strategicLinks.servicePage) {
      return null;
    }

  return (
    <div className="mt-12 pt-8 border-t border-zinc-800/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Strategic Blog Post Links (2 posts) */}
        {strategicLinks.blogPosts.map((post) => {
          const postLocalized = getLocalizedBlogPost(post, language);
          return (
            <Link
              key={post.id}
              to={getPostRoute(post.slug)}
              className="group p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="text-xs text-primary mb-2 font-semibold uppercase">
                    {language === 'fr' ? 'Article connexe' : 'Related Article'}
                  </div>
                  <h3 className="text-base font-semibold text-white group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {postLocalized.title}
                  </h3>
                  <p className="text-sm text-zinc-400 line-clamp-2">
                    {postLocalized.excerpt}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </Link>
          );
        })}

        {/* Service Page CTA */}
        {strategicLinks.servicePage && (
          <a
            href={strategicLinks.servicePage}
            className="group p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/50 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <div className="flex flex-col h-full">
              <div className="text-xs text-primary mb-2 font-semibold uppercase">
                {language === 'fr' ? 'Solution professionnelle' : 'Professional Solution'}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {language === 'fr' 
                  ? 'Besoin d\'aide immédiate ?'
                  : 'Need Immediate Help?'}
              </h3>
              <p className="text-sm text-zinc-300 mb-4 flex-1">
                {language === 'fr'
                  ? 'Notre équipe peut vérifier gratuitement si d\'autres copies de votre contenu circulent.'
                  : 'Our team can check for free if other copies of your content are circulating.'}
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                <span>{language === 'fr' ? 'Découvrir' : 'Discover'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        )}
      </div>
    </div>
  );
  } catch (error) {
    console.error('Error rendering StrategicLinks:', error);
    return null;
  }
};

export default StrategicLinks;

