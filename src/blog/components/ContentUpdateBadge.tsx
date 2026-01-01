/**
 * Content Update Badge
 * Shows when content was last updated (Google loves fresh content)
 */

import { RefreshCw } from 'lucide-react';
import { BlogPost } from '../data/blogTypes';

interface ContentUpdateBadgeProps {
  post: BlogPost;
  language: 'fr' | 'en';
}

const ContentUpdateBadge = ({ post, language }: ContentUpdateBadgeProps) => {
  if (!post.updatedAt || post.updatedAt === post.publishedAt) {
    return null;
  }

  const updateDate = new Date(post.updatedAt);
  const now = new Date();
  const daysSinceUpdate = Math.floor((now.getTime() - updateDate.getTime()) / (1000 * 60 * 60 * 24));

  // Only show if updated within last 90 days
  if (daysSinceUpdate > 90) {
    return null;
  }

  const updateText = language === 'fr' 
    ? `Dernière mise à jour : ${updateDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}`
    : `Last updated: ${updateDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;

  return (
    <div className="flex items-center gap-2 text-xs text-zinc-400 mb-4">
      <RefreshCw className="w-3 h-3" />
      <span>{updateText}</span>
      {post.updateCount && post.updateCount > 1 && (
        <span className="text-zinc-500">({post.updateCount}x {language === 'fr' ? 'mises à jour' : 'updates'})</span>
      )}
    </div>
  );
};

export default ContentUpdateBadge;

