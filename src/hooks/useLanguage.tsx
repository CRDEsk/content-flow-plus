import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.howItWorks': 'Comment ça marche',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.login': 'Connexion',
    'nav.logout': 'Déconnexion',
    'nav.getStarted': 'Commencer',
    'nav.welcomeBack': 'Bon retour !',

    // Hero Section
    'hero.title': 'Supprimez votre',
    'hero.titleAccent': 'empreinte numérique',
    'hero.subtitle': 'Prenez le contrôle de votre présence en ligne. Nous aidons les particuliers et les entreprises à supprimer le contenu indésirable, protéger leur réputation et maintenir leur confidentialité dans le paysage numérique.',
    'hero.ctaPrimary': 'Consultation gratuite',
    'hero.ctaSecondary': 'En savoir plus',
    'hero.ctaLoggedIn': 'Accéder au tableau de bord',
    'hero.ctaViewCases': 'Voir mes dossiers',
    'hero.trustConfidential': '100% Confidentiel',
    'hero.trustSupport': 'Support 24/7',
    'hero.trustExpert': 'Équipe experte',

    // Stats Section
    'stats.title': 'Fait confiance par',
    'stats.titleAccent': 'des milliers',
    'stats.titleEnd': 'dans le monde',
    'stats.subtitle': 'Notre historique prouvé parle de lui-même. Nous avons aidé d\'innombrables particuliers et entreprises à prendre le contrôle de leur présence numérique.',
    'stats.contentRemoved': 'CONTENUS SUPPRIMÉS',
    'stats.contentRemovedDesc': 'Contenu indésirable supprimé avec succès sur le web',
    'stats.websites': 'SITES WEB ET PLATEFORMES',
    'stats.websitesDesc': 'Connecté aux principaux moteurs de recherche et plateformes sociales',
    'stats.experience': 'ANNÉES D\'EXPÉRIENCE',
    'stats.experienceDesc': 'Expertise leader de l\'industrie dans la suppression de contenu',
    'stats.clients': 'CLIENTS SATISFAITS',
    'stats.clientsDesc': 'Aidant les particuliers et entreprises à protéger leur réputation',

    // Services Section
    'services.title': 'Nos',
    'services.titleAccent': 'Services',
    'services.subtitle': 'Solutions complètes de gestion de l\'empreinte numérique adaptées pour protéger votre confidentialité et réputation sur toutes les plateformes en ligne.',
    
    'services.privacy.title': 'Protection de la Vie Privée',
    'services.privacy.desc': 'Services complets de protection de la vie privée pour sauvegarder vos informations personnelles sur toutes les plateformes numériques et moteurs de recherche.',
    
    'services.personal.title': 'Protection Personnelle',
    'services.personal.desc': 'Services dédiés de protection personnelle conçus pour supprimer le contenu nuisible et protéger votre réputation individuelle en ligne.',
    
    'services.reputation.title': 'Gestion de Réputation',
    'services.reputation.desc': 'Gestion professionnelle de réputation pour maintenir et améliorer votre présence numérique sur toutes les plateformes et résultats de recherche majeurs.',
    
    'services.rapid.title': 'Réponse Rapide',
    'services.rapid.desc': 'Services de suppression de contenu d\'urgence avec des temps de réponse rapides garantis pour les préoccupations urgentes de réputation et de confidentialité.',

    // FAQ
    'faq.title': 'Questions',
    'faq.titleAccent': 'Fréquemment Posées',
    'faq.subtitle': 'Obtenez des réponses aux questions les plus courantes sur nos services de suppression de contenu',

    // Footer
    'footer.description': 'Gestion professionnelle de l\'empreinte numérique et services de suppression de contenu. Protéger votre confidentialité et réputation dans le paysage numérique.',
    'footer.services': 'Services',
    'footer.company': 'Entreprise',
    'footer.contact': 'Contact',
    'footer.emergency': 'Suppression de Contenu d\'Urgence',
    'footer.emergencyDesc': 'Les situations de crise nécessitent une action immédiate',
    'footer.emergencyButton': 'Ligne d\'urgence: 1-800-REMOVAL',
    
    // Common
    'common.getConsultation': 'Obtenir une consultation gratuite',
    'common.learnMore': 'En savoir plus',
    'common.confidential': 'Confidentiel',
    'common.secure': 'Sécurisé',
    'common.professional': 'Professionnel',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.howItWorks': 'How it works',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.logout': 'Logout',
    'nav.getStarted': 'Get started',
    'nav.welcomeBack': 'Welcome back!',

    // Hero Section
    'hero.title': 'Remove your digital',
    'hero.titleAccent': 'footprint',
    'hero.subtitle': 'Take control of your online presence. We help individuals and businesses remove unwanted content, protect their reputation, and maintain their privacy across the digital landscape.',
    'hero.ctaPrimary': 'Start Free Consultation',
    'hero.ctaSecondary': 'Learn More',
    'hero.ctaLoggedIn': 'Access Dashboard',
    'hero.ctaViewCases': 'View My Cases',
    'hero.trustConfidential': '100% Confidential',
    'hero.trustSupport': '24/7 Support',
    'hero.trustExpert': 'Expert Team',

    // Continue with English translations...
    'stats.title': 'Trusted by',
    'stats.titleAccent': 'thousands',
    'stats.titleEnd': 'worldwide',
    // Add all other English translations...
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.howItWorks': 'Cómo funciona',
    'nav.faq': 'Preguntas frecuentes',
    'nav.contact': 'Contacto',
    'nav.login': 'Iniciar sesión',
    'nav.logout': 'Cerrar sesión',
    'nav.getStarted': 'Comenzar',
    'nav.welcomeBack': '¡Bienvenido de nuevo!',

    // Hero Section
    'hero.title': 'Elimina tu huella',
    'hero.titleAccent': 'digital',
    'hero.subtitle': 'Toma el control de tu presencia en línea. Ayudamos a individuos y empresas a eliminar contenido no deseado, proteger su reputación y mantener su privacidad en el panorama digital.',
    'hero.ctaPrimary': 'Consulta Gratuita',
    'hero.ctaSecondary': 'Saber Más',
    'hero.ctaLoggedIn': 'Acceder al Panel',
    'hero.ctaViewCases': 'Ver Mis Casos',
    'hero.trustConfidential': '100% Confidencial',
    'hero.trustSupport': 'Soporte 24/7',
    'hero.trustExpert': 'Equipo Experto',

    // Continue with Spanish translations...
    'stats.title': 'Confiado por',
    'stats.titleAccent': 'miles',
    'stats.titleEnd': 'en todo el mundo',
    // Add all other Spanish translations...
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default useLanguage;