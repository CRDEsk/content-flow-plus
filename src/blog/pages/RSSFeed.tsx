import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { generateRSSFeed } from '../utils/rss';
import { useLanguage } from '@/hooks/useLanguage';

const RSSFeed = () => {
  const [searchParams] = useSearchParams();
  const { language } = useLanguage();
  const lang = (searchParams.get('lang') || language) as 'fr' | 'en';

  useEffect(() => {
    const rssContent = generateRSSFeed(lang);
    const blob = new Blob([rssContent], { type: 'application/rss+xml; charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    // Set content type header
    document.contentType = 'application/rss+xml';
    
    // For server-side, you'd return the XML directly
    // For client-side, we'll redirect or show content
    window.location.href = `data:application/rss+xml;charset=utf-8,${encodeURIComponent(rssContent)}`;
  }, [lang]);

  return null;
};

export default RSSFeed;

