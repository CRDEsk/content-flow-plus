import SEO from "@/components/SEO";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DashboardSection from "@/components/DashboardSection";
import TrustSection from "@/components/TrustSection";
import HelpSection from "@/components/HelpSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { LanguageProvider } from "@/hooks/useLanguage";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    toast({
      title: "Connexion réussie",
      description: "Bienvenue ! Vous avez maintenant accès aux fonctionnalités premium.",
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Déconnecté",
      description: "Vous avez été déconnecté avec succès.",
    });
  };

  return (
    <LanguageProvider>
      <SEO />
      <div className="min-h-screen bg-background antialiased">
        <Header 
          isLoggedIn={isLoggedIn} 
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
        <main>
          <HeroSection isLoggedIn={isLoggedIn} />
          <DashboardSection />
          <TrustSection />
          <HelpSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <FAQSection />
          <CaseStudiesSection />
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </LanguageProvider>
  );
};

export default Index;
