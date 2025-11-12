import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const SEO = ({
  title,
  description,
  keywords,
  ogImage = "https://contentremovaldesk.com/og-image.png",
  canonical,
}: SEOProps) => {
  const location = useLocation();
  const { language, t } = useLanguage();

  // Default SEO content based on language
  const defaultTitle = language === 'en' 
    ? "ContentRemovalDesk - Digital Protection for Creators | Content Removal Service"
    : "ContentRemovalDesk - Protection Digitale pour Créateurs | Suppression de Fuites";
  
  const defaultDescription = language === 'en'
    ? "Professional content removal and image protection service for creators. 99.2% success rate, 48h intervention, 24/7 monitoring. Protect your content now."
    : "Service professionnel de suppression de contenu et protection d'image pour créateurs. 99.2% de réussite, intervention 48h, surveillance 24/7. Protégez votre contenu maintenant.";
  
  const defaultKeywords = language === 'en'
    ? "content removal, digital protection, leak removal, DMCA, creator protection, image removal, copyright, privacy protection, cyber protection"
    : "suppression contenu, protection digitale, retrait fuite, DMCA, protection créateurs, suppression image, droit auteur, protection vie privée, cyberprotection";

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", finalDescription);

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", finalKeywords);

    // Update Open Graph tags
    const ogTags = [
      { property: "og:title", content: finalTitle },
      { property: "og:description", content: finalDescription },
      { property: "og:image", content: ogImage },
      { property: "og:url", content: `https://contentremovaldesk.com${location.pathname}` },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: language === 'en' ? "en_US" : "fr_FR" },
      { property: "og:locale:alternate", content: language === 'en' ? "fr_FR" : "en_US" },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Update Twitter Card tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: finalTitle },
      { name: "twitter:description", content: finalDescription },
      { name: "twitter:image", content: ogImage },
    ];

    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute(
      "href",
      canonical || `https://contentremovaldesk.com${location.pathname}`
    );

    // Add structured data (JSON-LD)
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.setAttribute("type", "application/ld+json");
      document.head.appendChild(structuredData);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "ContentRemovalDesk",
      "description": finalDescription,
      "url": "https://contentremovaldesk.com",
      "logo": "https://contentremovaldesk.com/logo.png",
      "image": ogImage,
      "priceRange": "€€€",
      "areaServed": {
        "@type": "Country",
        "name": "France"
      },
      "availableLanguage": language === 'en' ? ["en", "fr"] : ["fr", "en"],
      "serviceType": ["Content Removal", "Digital Protection", "DMCA Takedown"],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500"
      }
    };

    structuredData.textContent = JSON.stringify(schemaData);

    // Add hreflang tags for multilingual support
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach(link => link.remove());

    const hreflangs = [
      { lang: 'fr', url: `https://contentremovaldesk.com${location.pathname}` },
      { lang: 'en', url: `https://contentremovaldesk.com/en${location.pathname}` },
      { lang: 'x-default', url: `https://contentremovaldesk.com${location.pathname}` },
    ];

    hreflangs.forEach(({ lang, url }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      link.setAttribute('href', url);
      document.head.appendChild(link);
    });
  }, [finalTitle, finalDescription, finalKeywords, ogImage, canonical, location.pathname, language]);

  return null;
};

export default SEO;
