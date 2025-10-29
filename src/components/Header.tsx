import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  isLoggedIn?: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
}

const Header = ({ isLoggedIn = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Mon espace", href: "/mon-espace" },
    { label: "Notre solution", href: "/notre-solution" },
    { label: "Cas Clients", href: "/#cases" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "Escalades & Légal", href: "/escalades-legal" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled 
            ? "bg-black/98 backdrop-blur-3xl border-b border-primary/10 shadow-2xl shadow-primary/5 py-3" 
            : "bg-gradient-to-b from-black/50 via-black/30 to-transparent backdrop-blur-sm py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <Link to="/" className="group relative z-10 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className={`relative transition-all duration-700 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60 rounded-xl blur-sm group-hover:blur-md transition-all duration-300 opacity-70 group-hover:opacity-100"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary to-primary/90 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                    <Shield className={`text-black transition-all duration-700 ${scrolled ? 'w-5 h-5' : 'w-6 h-6'}`} strokeWidth={2.5} />
                  </div>
                </div>
                <div className={`transition-all duration-700 ${scrolled ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'}`}>
                  <div className="font-display font-bold tracking-tight text-foreground text-lg whitespace-nowrap">
                    CRD
                  </div>
                  <div className="text-[9px] text-primary uppercase tracking-[0.2em] leading-none font-medium">
                    Protection
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation & CTA */}
            <div className="hidden lg:flex items-center gap-3 ml-auto">
              <Button 
                size="sm"
                variant="ghost"
                className="text-zinc-400 hover:text-foreground font-medium transition-all duration-300 hover:bg-zinc-900/50"
              >
                Connexion
              </Button>
              <Button 
                size="sm"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-semibold rounded-full px-6 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Commencer</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <div className="w-px h-8 bg-zinc-800/50 mx-2"></div>
              <button
                className="relative p-2 rounded-xl text-foreground hover:bg-zinc-900/80 transition-all duration-300 border border-zinc-800/50 hover:border-primary/30"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Burger Menu Button */}
            <button
              className="lg:hidden relative p-2.5 rounded-xl text-foreground hover:bg-zinc-900/80 transition-all duration-300 group border border-zinc-800/50 hover:border-primary/30 ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'top-3 rotate-45' : 'top-1'}`}></span>
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}></span>
                <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'top-3 -rotate-45' : 'bottom-1'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-20 left-0 right-0 z-40 px-4 sm:px-6 max-h-[calc(100vh-6rem)] overflow-y-auto"
            >
              <div className="container mx-auto max-w-2xl">
                <div className="glass-card rounded-2xl p-6 sm:p-8 border-primary/20 shadow-2xl shadow-primary/10">
                  <div className="space-y-2">
                    {navItems.map((item, index) => {
                      const isActive = item.href.startsWith('/#') 
                        ? location.pathname === '/' && location.hash === item.href.slice(1)
                        : location.pathname === item.href;
                      
                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          {item.href.startsWith('/#') ? (
                            <a
                              href={item.href}
                              className={`block px-6 py-4 text-lg font-medium rounded-xl transition-all duration-300 group relative overflow-hidden ${
                                isActive 
                                  ? 'text-primary bg-primary/10 border border-primary/30' 
                                  : 'text-zinc-300 hover:text-foreground hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800'
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className="relative z-10 flex items-center justify-between">
                                {item.label}
                                {isActive && (
                                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                )}
                              </span>
                              <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            </a>
                          ) : (
                            <Link
                              to={item.href}
                              className={`block px-6 py-4 text-lg font-medium rounded-xl transition-all duration-300 group relative overflow-hidden ${
                                isActive 
                                  ? 'text-primary bg-primary/10 border border-primary/30' 
                                  : 'text-zinc-300 hover:text-foreground hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800'
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span className="relative z-10 flex items-center justify-between">
                                {item.label}
                                {isActive && (
                                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                )}
                              </span>
                              <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            </Link>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Mobile CTA Buttons */}
                  <div className="mt-6 pt-6 border-t border-zinc-800/50 space-y-3 lg:hidden">
                    <Button 
                      size="lg"
                      variant="outline"
                      className="w-full border-zinc-800 hover:border-primary/50 text-foreground hover:bg-zinc-900/50 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Connexion
                    </Button>
                    <Button 
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-semibold rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Commencer maintenant
                    </Button>
                  </div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
