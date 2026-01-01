import { Share2, Twitter, Facebook, Linkedin, Link2, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

interface SocialShareProps {
  title: string;
  url: string;
  description?: string;
}

const SocialShare = ({ title, url, description }: SocialShareProps) => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : url;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedDescription = encodeURIComponent(description || '');

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: fullUrl,
        });
      } catch (err) {
        // User cancelled or error
      }
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-zinc-800/50">
      <span className="text-sm text-zinc-400 font-medium">
        {language === 'fr' ? 'Partager :' : 'Share:'}
      </span>
      
      {/* Native Share (Mobile) */}
      {navigator.share && (
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50 text-zinc-300 hover:text-white hover:border-primary/50 transition-all duration-300 hover:bg-zinc-900/80"
          aria-label={language === 'fr' ? 'Partager' : 'Share'}
        >
          <Share2 className="w-4 h-4" />
          <span className="text-sm">{language === 'fr' ? 'Partager' : 'Share'}</span>
        </button>
      )}

      {/* Twitter */}
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50 text-zinc-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4" />
        <span className="text-sm">Twitter</span>
      </a>

      {/* Facebook */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50 text-zinc-300 hover:text-white hover:border-blue-600/50 hover:bg-blue-600/10 transition-all duration-300"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4" />
        <span className="text-sm">Facebook</span>
      </a>

      {/* LinkedIn */}
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50 text-zinc-300 hover:text-white hover:border-blue-700/50 hover:bg-blue-700/10 transition-all duration-300"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
        <span className="text-sm">LinkedIn</span>
      </a>

      {/* Copy Link */}
      <button
        onClick={handleCopy}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
          copied
            ? 'bg-primary/20 border-primary/50 text-primary'
            : 'bg-zinc-900/50 border-zinc-800/50 text-zinc-300 hover:text-white hover:border-primary/50 hover:bg-zinc-900/80'
        }`}
        aria-label={language === 'fr' ? 'Copier le lien' : 'Copy link'}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            <span className="text-sm">{language === 'fr' ? 'Copié !' : 'Copied!'}</span>
          </>
        ) : (
          <>
            <Link2 className="w-4 h-4" />
            <span className="text-sm">{language === 'fr' ? 'Copier' : 'Copy'}</span>
          </>
        )}
      </button>
    </div>
  );
};

export default SocialShare;

