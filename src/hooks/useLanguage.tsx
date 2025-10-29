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
    'nav.scan': 'Scan en cours',
    'nav.settings': 'Paramètres',
    'nav.support': 'Assistance',
    'nav.removed': 'Contenus supprimés',
    'nav.login': 'Connexion',
    'nav.logout': 'Déconnexion',

    // Hero Section
    'hero.title': 'Protégez votre image,',
    'hero.titleHighlight': 'effacez vos fuites.',
    'hero.subtitle': 'Ton nom circule sur des sites chelous ? Tu sais pas quoi faire ?',
    'hero.cta': 'Je découvre mon risque',

    // Dashboard Section
    'dashboard.stats': 'Statistiques',
    'dashboard.clients': 'Clients protégés',
    'dashboard.platforms': 'Plateformes scannées',
    'dashboard.content': 'Contenus détectés',
    'dashboard.removal': 'Délai moyen de suppression',
    'dashboard.thisMonth': 'Ce mois',
    'dashboard.allTime': 'Tout temps',
    'dashboard.topClients': 'Top clients récemment protégés',
    'dashboard.viewAll': 'Voir tous les profils',

    // Trust Section
    'trust.title': 'Pourquoi nous faire confiance ?',
    'trust.subtitle': 'Les résultats parlent d\'eux-mêmes.',
    'trust.description': 'Chaque scan, chaque retrait, chaque victoire est comptée. Voici ce qu\'on a accompli jusqu\'ici :',
    'trust.linksRemoved': 'Liens supprimés',
    'trust.creatorsProtected': 'Créateurs protégés',
    'trust.contentRemoved': 'Contenus supprimés',
    'trust.avgTime': 'Délai moyen de retrait',
    'trust.successRate': 'Taux de réussite',
    'trust.platformsScanned': 'Plateformes scannées',
    'trust.googleBadge': 'Agence reconnue par Google',
    'trust.guaranteeTitle': 'Garantie & confidentialité',
    'trust.guaranteeDesc': 'Protection 100% confidentielle. Aucune info partagée. Chaque demande est traitée manuellement, sans bots, dans un environnement sécurisé.',

    // Help Section
    'help.badge': 'On peut t\'aider',
    'help.title': 'On protège ton contenu, ton image, et ta tranquillité.',
    'help.subtitle': 'Chaque jour, on te rend ce qui t\'appartient.',
    'help.revenue.title': 'Récupère tes revenus',
    'help.revenue.desc': 'Le piratage te fait perdre de l\'argent. On te permet de récupérer ce qui t\'appartient.',
    'help.serenity.title': 'Sérénité garantie',
    'help.serenity.desc': 'Les fuites de contenu sont stressantes. On gère pour que tu restes concentré sur ta création.',
    'help.reputation.title': 'Protège ta réputation',
    'help.reputation.desc': 'On défend ton image et ton nom contre les imposteurs et le contenu volé.',
    'help.control.title': 'Tu décides, pas eux',
    'help.control.desc': 'On t\'aide à contrôler l\'usage de ton contenu et à faire respecter ton consentement.',

    // How It Works
    'howItWorks.title': 'Comment ça marche',
    'howItWorks.subtitle': 'Détection, retrait et protection,',
    'howItWorks.subtitleEnd': 'Sans stress, sans délai.',
    'howItWorks.step1': 'Scan complet',
    'howItWorks.step2': 'Signalement',
    'howItWorks.step3': 'Suivi & tableau',
    'howItWorks.detectionTitle': 'Détection intelligente, scan global & audit manuel',
    'howItWorks.protectTitle': 'Protéger ton nom.',
    'howItWorks.protectSubtitle': 'Défendre ton image.',
    'howItWorks.description': 'Nous lançons une détection intelligente sur l\'ensemble du web : sites de leaks, forums, moteurs de recherche, hébergeurs, etc. Chaque lien est identifié, analysé et classé par niveau de gravité. Nos agents vérifient manuellement pour s\'assurer qu\'aucune fuite ne passe entre les mailles du filet.',
    'howItWorks.feature1': 'Agent propriétaire de détection intelligente',
    'howItWorks.feature2': 'Analyse complète par nom, pseudo, contenu privé',
    'howItWorks.feature3': 'Classement automatique par priorité',

    // Testimonials
    'testimonials.title': 'Avis de créateurs',
    'testimonials.subtitle': 'qui nous font confiance',

    // FAQ
    'faq.title': 'Des questions ? On est là pour toi.',
    'faq.contact': 'Écris-nous à support@contentremovaldesk.com ou sur Insta @mercytotheguilty on répond vite (souvent en moins d\'1h).',

    // Case Studies
    'cases.title': 'Histoires',
    'cases.titleHighlight': 'vraies',
    'cases.case1': "Tout a disparu. Même les pires. En moins d'un mois.",
    'cases.case2': 'Dossier confidentiel – Leakimedia supprimé. Dossier clos.',
    'cases.case3': 'Dossier Ava21 / Petitabricot',
    'cases.testimonial': "\"Leur système de scan et suppression m'a bluffée. Ils ont identifié tous les leaks, supprimé plus de 50 liens, et me tiennent informée chaque semaine. Sérieux, efficaces et discrets – je recommande à 100%\"",

    // Final CTA
    'finalCta.title': 'Prête à savoir si ton contenu est leaké ?',
    'finalCta.button': 'Je découvre mon risque',

    // Footer
    'footer.tagline': 'Tu crées. On protège.',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': "Conditions d'utilisation",
    'footer.copyright': '© 2025 Content Removal Desk. Tous droits réservés.',
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