import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, ArrowLeft, Search, AlertCircle } from "lucide-react";
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
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    trackEvent("404", "error", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Header />
      <main className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* 404 Number */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-primary/50 rounded-3xl blur-2xl opacity-30"></div>
              <h1 className="relative text-8xl sm:text-9xl font-display font-bold text-primary">
                404
              </h1>
            </div>

            {/* Error Icon */}
            <div className="flex justify-center">
              <div className="relative w-20 h-20 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 flex items-center justify-center">
                <AlertCircle className="w-10 h-10 text-primary" />
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
                Page introuvable
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
                Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
              </p>
              <p className="text-sm text-zinc-500">
                URL demandée : <code className="px-2 py-1 rounded bg-zinc-900/50 text-zinc-400">{location.pathname}</code>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-semibold rounded-full px-8 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  Retour à l'accueil
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-zinc-800 hover:border-primary/50 bg-zinc-900/50 backdrop-blur-xl text-foreground font-semibold rounded-full px-8 hover:bg-zinc-900/80 transition-all duration-300"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Page précédente
              </Button>
            </div>

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
              transition={{ delay: 0.4 }}
              className="pt-12"
            >
              <p className="text-sm text-zinc-500 mb-4">Pages populaires :</p>
              <div className="flex flex-wrap justify-center gap-3">
                {popularPages.map((page) => (
                  <Link
                    key={page.href}
                    to={page.href}
                    className="px-4 py-2 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 text-sm text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
