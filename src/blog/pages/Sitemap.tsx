import { useEffect } from 'react';
import { generateBlogSitemapXML } from '../utils/sitemap';

const Sitemap = () => {
  useEffect(() => {
    const sitemapContent = generateBlogSitemapXML();
    
    // Completely replace the entire document with raw XML
    // This is the only way to serve pure XML without HTML wrapper in a React SPA
    document.open();
    document.write(sitemapContent);
    document.close();
  }, []);

  return null;
};

export default Sitemap;

