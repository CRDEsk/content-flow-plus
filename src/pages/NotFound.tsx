import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, ArrowLeft, Search, Shield, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const popularPages = [
    { label: "Accueil", href: "/" },
    { label: "Notre Solution", href: "/notre-solution" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "Contact", href: "/contact" },
    { label: "Cas Clients", href: "/cas-clients" },
    { label: "À Propos", href: "/a-propos" },
  ];

  const suggestedPages = popularPages.filter((page) =>
    page.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestedPages.length > 0) {
      navigate(suggestedPages[0].href);
    }
  };

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
    trackEvent("404", "error", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white antialiased relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px] opacity-20"></div>
      </div>

      <Header />
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-200px)] px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            {/* Branded Logo Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-primary/50 rounded-2xl blur-xl opacity-40"></div>
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-xl shadow-primary/30">
                  <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-black" strokeWidth={2.5} />
                </div>
              </div>
            </motion.div>

            {/* 404 Number with Branding */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-primary/50 rounded-3xl blur-3xl opacity-40 animate-pulse"></div>
              <h1 className="relative text-7xl sm:text-8xl lg:text-9xl font-display font-bold bg-gradient-to-br from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                404
              </h1>
            </motion.div>

            {/* Error Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-900/80 backdrop-blur-xl border-2 border-primary/30 flex items-center justify-center shadow-lg">
                <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
                Contenu introuvable
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
                La page que vous recherchez a peut-être été supprimée ou déplacée. 
                <br className="hidden sm:block" />
                Notre équipe surveille 24/7 pour protéger votre contenu, mais cette page n'existe pas.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 mt-4">
                <span className="text-xs text-zinc-500">URL :</span>
                <code className="text-sm text-zinc-400 font-mono">{location.pathname}</code>
            </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-bold rounded-full px-8 py-6 shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all duration-300"
                asChild
              >
                <Link to="/" className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Retour à l'accueil
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-zinc-800 hover:border-primary/50 bg-zinc-900/60 backdrop-blur-xl text-foreground font-semibold rounded-full px-8 py-6 hover:bg-zinc-900/80 hover:scale-105 active:scale-95 transition-all duration-300"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Page précédente
              </Button>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-8 max-w-md mx-auto"
            >
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                <Input
                  type="text"
                  placeholder="Rechercher une page..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 bg-zinc-900/50 border-zinc-800/50 text-foreground placeholder:text-zinc-500 focus:border-primary rounded-full"
                />
                {suggestedPages.length > 0 && searchQuery && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/50 rounded-xl overflow-hidden shadow-xl"
                  >
                    {suggestedPages.map((page) => (
                      <Link
                        key={page.href}
                        to={page.href}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-zinc-800/50 hover:text-primary transition-colors"
                      >
                        {page.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="pt-12"
            >
              <p className="text-sm text-zinc-500 mb-6 font-medium">Pages populaires :</p>
              <div className="flex flex-wrap justify-center gap-3">
                {popularPages.map((page, index) => (
                  <motion.div
                    key={page.href}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Link
                      to={page.href}
                      className="inline-block px-5 py-2.5 rounded-full bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/50 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary hover:bg-zinc-900/80 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    {page.label}
                  </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Brand Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-12 border-t border-zinc-800/50 mt-12"
            >
              <p className="text-sm text-zinc-500 max-w-md mx-auto">
                Besoin d'aide ? <Link to="/contact" className="text-primary hover:text-primary/80 underline">Contactez notre équipe</Link> pour une protection 24/7 de votre contenu.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
