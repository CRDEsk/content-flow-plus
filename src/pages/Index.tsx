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
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("[Index] Component rendering");

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
    <>
      <SEO />
      <div className="min-h-screen bg-background antialiased">
        {console.log("[Index] Main div rendering")}
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>
        {console.log("[Index] Before Header")}
        <Header
          isLoggedIn={isLoggedIn} 
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
        {console.log("[Index] After Header, before main")}
        <main id="main-content">
          {console.log("[Index] Inside main")}
          <HeroSection isLoggedIn={isLoggedIn} />
          {console.log("[Index] After HeroSection")}
          <DashboardSection />
          <TrustSection />
          <HelpSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <FAQSection />
          <CaseStudiesSection />
        </main>
        {console.log("[Index] After main, before Footer")}
        <Footer />
        {console.log("[Index] Before CookieConsent")}
        <CookieConsent />
        {console.log("[Index] After CookieConsent")}
      </div>
    </>
  );
};

export default Index;
