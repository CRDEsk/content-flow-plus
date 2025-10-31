import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MonEspace from "./pages/MonEspace";
import NotreSolution from "./pages/NotreSolution";
import Tarifs from "./pages/Tarifs";
import EscaladesLegal from "./pages/EscaladesLegal";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import CasClients from "./pages/CasClients";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import CGV from "./pages/CGV";
import PolitiqueRemboursement from "./pages/PolitiqueRemboursement";
import PolitiqueCookies from "./pages/PolitiqueCookies";

const queryClient = new QueryClient();

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll for better UX
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/mon-espace" element={<PageTransition><MonEspace /></PageTransition>} />
          <Route path="/notre-solution" element={<PageTransition><NotreSolution /></PageTransition>} />
          <Route path="/cas-clients" element={<PageTransition><CasClients /></PageTransition>} />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
