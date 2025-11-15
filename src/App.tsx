import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageProvider } from "@/hooks/useLanguage";
import ErrorBoundary from "@/components/ErrorBoundary";
import NetworkStatus from "@/components/NetworkStatus";
import { initAnalytics, trackPageView } from "@/lib/analytics";
import { hasCookieConsent } from "@/lib/cookies";

// Lazy load all pages for code-splitting
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const MonEspace = lazy(() => import("./pages/MonEspace"));
const NotreSolution = lazy(() => import("./pages/NotreSolution"));
const Tarifs = lazy(() => import("./pages/Tarifs"));
const PourCreateurs = lazy(() => import("./pages/PourCreateurs"));
const PourAgences = lazy(() => import("./pages/PourAgences"));
const EscaladesLegal = lazy(() => import("./pages/EscaladesLegal"));
const APropos = lazy(() => import("./pages/APropos"));
const Contact = lazy(() => import("./pages/Contact"));
const CasClients = lazy(() => import("./pages/CasClients"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const PolitiqueConfidentialite = lazy(() => import("./pages/PolitiqueConfidentialite"));
const CGV = lazy(() => import("./pages/CGV"));
const PolitiqueRemboursement = lazy(() => import("./pages/PolitiqueRemboursement"));
const PolitiqueCookies = lazy(() => import("./pages/PolitiqueCookies"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

// Loading component for lazy-loaded pages
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      <div className="text-sm text-zinc-400">Chargement...</div>
    </div>
  </div>
);

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Scroll to top and handle page transitions
const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize analytics on mount only if consent is given
    // This will be called again when user accepts cookies
    if (hasCookieConsent()) {
      initAnalytics();
    }
  }, []);

  useEffect(() => {
    // Instant scroll for better performance
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    });
    trackPageView(location.pathname);
    
    // Define legal pages
    const legalPages = [
      '/escalades-legal',
      '/politique-confidentialite',
      '/cgv',
      '/politique-remboursement',
      '/politique-cookies',
      '/mentions-legales'
    ];
    
    const isLegalPage = legalPages.includes(location.pathname);
    const isAgencyPage = location.pathname === '/pour-agences' || location.pathname.startsWith('/pour-agences');
    
    // Handle theme-color meta tag
    // Note: /pour-agences page manages its own theme-color in PourAgences.tsx
    // We only manage theme-color for other pages here
    if (!isAgencyPage) {
      let themeColorMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
      if (!themeColorMeta) {
        // Create if doesn't exist
        themeColorMeta = document.createElement('meta');
        themeColorMeta.name = 'theme-color';
        document.head.appendChild(themeColorMeta);
      }
      
      // Set theme-color: Gold for non-legal pages, default for legal pages
      if (!isLegalPage) {
        themeColorMeta.content = '#D4AF37'; // Gold
      }
      // Legal pages keep default (already set in index.html as #D4AF37)
    }
    
    if (!isAgencyPage && !isLegalPage) {
      // Restore gold favicon - Safari compatible
      const timestamp = Date.now(); // Cache busting for Safari
      const faviconSizes = [128, 96, 64, 48, 32, 16];
      
      faviconSizes.forEach(size => {
        const link = document.querySelector(`link[rel="icon"][sizes="${size}x${size}"]`) as HTMLLinkElement;
        if (link && link.href.includes('favicon-blue')) {
          // Force update for Safari
          link.href = `/favicon-${size}x${size}.png?v=${timestamp}`;
          // Trigger reload
          const newLink = link.cloneNode(true) as HTMLLinkElement;
          link.parentNode?.replaceChild(newLink, link);
        }
      });
      
      const shortcutIcon = document.querySelector('link[rel="shortcut icon"]') as HTMLLinkElement;
      if (shortcutIcon && shortcutIcon.href.includes('favicon-blue')) {
        shortcutIcon.href = `/favicon-128x128.png?v=${timestamp}`;
        const newShortcut = shortcutIcon.cloneNode(true) as HTMLLinkElement;
        shortcutIcon.parentNode?.replaceChild(newShortcut, shortcutIcon);
      }
      
      const appleIcon = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
      if (appleIcon && appleIcon.href.includes('apple-touch-icon-blue')) {
        appleIcon.href = `/apple-touch-icon.png?v=${timestamp}`;
        const newApple = appleIcon.cloneNode(true) as HTMLLinkElement;
        appleIcon.parentNode?.replaceChild(newApple, appleIcon);
      }
      
      const faviconIco = document.querySelector('link[rel="icon"][type="image/x-icon"]') as HTMLLinkElement;
      if (faviconIco && faviconIco.href.includes('favicon-blue')) {
        faviconIco.href = `/favicon.ico?v=${timestamp}`;
        const newIco = faviconIco.cloneNode(true) as HTMLLinkElement;
        faviconIco.parentNode?.replaceChild(newIco, faviconIco);
      }
      
      // Force Safari to reload favicon - Multiple methods for better compatibility
      const forceFaviconReload = () => {
        // Method 1: Add and remove temporary link
        const tempLink = document.createElement('link');
        tempLink.rel = 'icon';
        tempLink.href = `/favicon-32x32.png?v=${timestamp}`;
        document.head.appendChild(tempLink);
        
        // Method 2: Update existing favicon link href with timestamp
        const existingFavicon = document.querySelector('link[rel="icon"]:not([sizes])') as HTMLLinkElement;
        if (existingFavicon) {
          const originalHref = existingFavicon.href;
          existingFavicon.href = '';
          setTimeout(() => {
            existingFavicon.href = `/favicon-32x32.png?v=${timestamp}`;
          }, 10);
        }
        
        setTimeout(() => {
          tempLink.remove();
        }, 200);
      };
      
      // Force reload immediately and after a delay
      forceFaviconReload();
      setTimeout(forceFaviconReload, 300);
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div 
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/mon-espace" element={<PageTransition><MonEspace /></PageTransition>} />
            <Route path="/notre-solution" element={<PageTransition><NotreSolution /></PageTransition>} />
            <Route path="/cas-clients" element={<PageTransition><CasClients /></PageTransition>} />
            <Route path="/cas-clients/:id" element={<PageTransition><CaseStudyDetail /></PageTransition>} />
            <Route path="/tarifs" element={<PageTransition><Tarifs /></PageTransition>} />
            <Route path="/pour-createurs" element={<PageTransition><PourCreateurs /></PageTransition>} />
            <Route path="/pour-agences" element={<PageTransition><PourAgences /></PageTransition>} />
            <Route path="/escalades-legal" element={<PageTransition><EscaladesLegal /></PageTransition>} />
            <Route path="/a-propos" element={<PageTransition><APropos /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/mentions-legales" element={<PageTransition><MentionsLegales /></PageTransition>} />
            <Route path="/politique-confidentialite" element={<PageTransition><PolitiqueConfidentialite /></PageTransition>} />
            <Route path="/cgv" element={<PageTransition><CGV /></PageTransition>} />
            <Route path="/politique-remboursement" element={<PageTransition><PolitiqueRemboursement /></PageTransition>} />
            <Route path="/politique-cookies" element={<PageTransition><PolitiqueCookies /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <NetworkStatus />
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AppContent />
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;
