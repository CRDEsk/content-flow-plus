import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageProvider } from "@/hooks/useLanguage";
import ErrorBoundary from "@/components/ErrorBoundary";
import NetworkStatus from "@/components/NetworkStatus";
import { initAnalytics, trackPageView } from "@/lib/analytics";
import { hasCookieConsent } from "@/lib/cookies";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MonEspace from "./pages/MonEspace";
import NotreSolution from "./pages/NotreSolution";
import Tarifs from "./pages/Tarifs";
import EscaladesLegal from "./pages/EscaladesLegal";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import CasClients from "./pages/CasClients";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import CGV from "./pages/CGV";
import PolitiqueRemboursement from "./pages/PolitiqueRemboursement";
import PolitiqueCookies from "./pages/PolitiqueCookies";

const queryClient = new QueryClient();

// Enhanced page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.3 },
        scale: { duration: 0.4 }
      }}
      style={{ 
        position: 'relative',
        isolation: 'isolate',
        contain: 'layout style paint'
      }}
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
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Track page view
    trackPageView(location.pathname);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div 
        key={location.pathname}
        style={{ 
          position: 'relative',
          isolation: 'isolate',
          contain: 'layout style paint'
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/mon-espace" element={<PageTransition><MonEspace /></PageTransition>} />
          <Route path="/notre-solution" element={<PageTransition><NotreSolution /></PageTransition>} />
          <Route path="/cas-clients" element={<PageTransition><CasClients /></PageTransition>} />
          <Route path="/cas-clients/:id" element={<PageTransition><CaseStudyDetail /></PageTransition>} />
          <Route path="/tarifs" element={<PageTransition><Tarifs /></PageTransition>} />
          <Route path="/escalades-legal" element={<PageTransition><EscaladesLegal /></PageTransition>} />
          <Route path="/a-propos" element={<PageTransition><APropos /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/mentions-legales" element={<PageTransition><MentionsLegales /></PageTransition>} />
          <Route path="/politique-confidentialite" element={<PageTransition><PolitiqueConfidentialite /></PageTransition>} />
          <Route path="/cgv" element={<PageTransition><CGV /></PageTransition>} />
          <Route path="/politique-remboursement" element={<PageTransition><PolitiqueRemboursement /></PageTransition>} />
          <Route path="/politique-cookies" element={<PageTransition><PolitiqueCookies /></PageTransition>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
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
