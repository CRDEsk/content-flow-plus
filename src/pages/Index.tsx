import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
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
      <div className="min-h-screen bg-background antialiased">
        <Header 
          isLoggedIn={isLoggedIn} 
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
        <main>
          <HeroSection isLoggedIn={isLoggedIn} />
          <StatsSection />
          <ServicesSection />
          <FAQSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
