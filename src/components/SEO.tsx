import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const SEO = ({
  title = "ContentRemovalDesk - Protection Digitale pour Créateurs | Suppression de Fuites",
  description = "Service professionnel de suppression de contenu et protection d'image pour créateurs. 99.2% de réussite, intervention 48h, surveillance 24/7. Protégez votre contenu maintenant.",
  keywords = "suppression contenu, protection digitale, retrait fuite, DMCA, protection créateurs, suppression image, droit auteur, protection vie privée, cyberprotection",
  ogImage = "https://contentremovaldesk.com/og-image.jpg",
  canonical,
}: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", keywords);

    // Update Open Graph tags
    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      { property: "og:url", content: `https://contentremovaldesk.com${location.pathname}` },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
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
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
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
      "description": description,
      "url": "https://contentremovaldesk.com",
      "logo": "https://contentremovaldesk.com/logo.png",
      "image": ogImage,
      "priceRange": "€€€",
      "areaServed": {
        "@type": "Country",
        "name": "France"
      },
      "availableLanguage": ["fr"],
      "serviceType": ["Content Removal", "Digital Protection", "DMCA Takedown"],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "223"
      }
    };

    structuredData.textContent = JSON.stringify(schemaData);
  }, [title, description, keywords, ogImage, canonical, location.pathname]);

  return null;
};

export default SEO;
