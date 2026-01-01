import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { generateRSSFeed, generateJSONFeed } from '../utils/rss';
import { useLanguage } from '@/hooks/useLanguage';

interface RSSFeedProps {
  type?: 'xml' | 'json';
}

const RSSFeed = ({ type = 'xml' }: RSSFeedProps) => {
  const [searchParams] = useSearchParams();
  const { language } = useLanguage();
  const lang = (searchParams.get('lang') || language) as 'fr' | 'en';

  useEffect(() => {
    if (type === 'json') {
      const jsonContent = generateJSONFeed(lang);
      // Completely replace document with JSON
      document.open();
      document.write(JSON.stringify(jsonContent, null, 2));
      document.close();
    } else {
      const rssContent = generateRSSFeed(lang);
      // Completely replace document with raw XML
      document.open();
      document.write(rssContent);
      document.close();
    }
  }, [lang, type]);

  return null;
};

export default RSSFeed;

