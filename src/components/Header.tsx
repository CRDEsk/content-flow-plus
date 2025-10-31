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
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const navItems = [
    { label: "Mon espace", href: "https://espace.contentremovaldesk.com", external: true },
    { label: "Notre solution", href: "/notre-solution" },
    { label: "Cas Clients", href: "/cas-clients" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "Escalades & Légal", href: "/escalades-legal" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-700 ${
          scrolled 
            ? "bg-black/98 backdrop-blur-3xl border-b border-primary/10 shadow-2xl shadow-primary/5 py-3" 
            : "bg-gradient-to-b from-black/50 via-black/30 to-transparent backdrop-blur-sm py-5"
        }`}
        style={{ position: 'fixed' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <Link to="/" className="group relative z-10 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className={`relative transition-all duration-700 ${scrolled ? 'w-9 h-9' : 'w-11 h-11'}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-primary/50 rounded-xl blur-md group-hover:blur-lg transition-all duration-300 opacity-60 group-hover:opacity-90"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary/20">
                    <Shield className={`text-black transition-all duration-700 ${scrolled ? 'w-4 h-4' : 'w-5 h-5'}`} strokeWidth={2.5} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className={`font-display font-bold tracking-tight text-foreground transition-all duration-700 ${scrolled ? 'text-[11px]' : 'text-xs'} leading-tight`}>
                    ContentRemovalDesk
                  </div>
                  <div className={`text-[7px] text-primary/90 uppercase tracking-[0.2em] leading-none font-semibold transition-all duration-700 ${scrolled ? 'opacity-70' : 'opacity-100'}`}>
                    Protection Numérique
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop CTA & Menu */}
            <div className="hidden lg:flex items-center gap-3 ml-auto">
              <Button 
                size="sm"
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-semibold rounded-full px-6 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                asChild
              >
                <a href="https://espace.contentremovaldesk.com/auth?mode=signup" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Commencer</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </Button>
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
              className={`lg:hidden relative p-2.5 rounded-xl text-foreground transition-all duration-500 group ml-auto overflow-hidden ${
                isMenuOpen 
                  ? 'bg-primary border-primary scale-110 shadow-lg shadow-primary/30' 
                  : 'bg-zinc-900/50 border-zinc-800/50 hover:border-primary/30 hover:bg-zinc-900/80'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              style={{ borderWidth: '1px' }}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 w-full h-0.5 rounded-full transition-all duration-500 ease-out ${
                  isMenuOpen 
                    ? 'top-3 rotate-45 bg-black w-5 left-0.5' 
                    : 'top-1 rotate-0 bg-current'
                }`}></span>
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 rounded-full transition-all duration-300 ${
                  isMenuOpen 
                    ? 'opacity-0 scale-0 bg-black' 
                    : 'opacity-100 scale-100 bg-current'
                }`}></span>
                <span className={`absolute left-0 w-full h-0.5 rounded-full transition-all duration-500 ease-out ${
                  isMenuOpen 
                    ? 'top-3 -rotate-45 bg-black w-5 left-0.5' 
                    : 'bottom-1 rotate-0 bg-current'
                }`}></span>
              </div>
              
              {/* Ripple effect */}
              <div className={`absolute inset-0 bg-primary/20 rounded-xl transition-all duration-300 ${
                isMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`} />
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:bg-transparent lg:backdrop-blur-none"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Desktop Menu - Sleek dropdown */}
            <motion.nav
              initial={{ opacity: 0, scaleY: 0, scaleX: 0.9 }}
              animate={{ opacity: 1, scaleY: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleY: 0, scaleX: 0.9 }}
              transition={{ 
                duration: 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="hidden lg:block fixed top-[4.5rem] right-6 z-50"
              style={{ transformOrigin: "top right" }}
            >
              <div className="bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/50 overflow-hidden border border-primary/20 min-w-[240px]">
                <div className="py-2">
                  {navItems.map((item, index) => {
                    const isActive = !item.external && (item.href === location.pathname);
                    
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 border-l-2 border-transparent hover:border-primary"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            to={item.href}
                            className={`block px-4 py-2.5 text-sm font-medium transition-all duration-200 border-l-2 ${
                              isActive 
                                ? 'text-primary bg-primary/10 border-primary' 
                                : 'text-foreground border-transparent hover:bg-primary/10 hover:text-primary hover:border-primary'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.nav>

            {/* Mobile Menu - Slide from left */}
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 left-0 bottom-0 z-50 w-80 max-w-[85vw] bg-zinc-950/98 backdrop-blur-xl border-r border-zinc-800/50 shadow-2xl"
            >
              <div className="flex flex-col h-full overflow-y-auto">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-zinc-800/50 bg-zinc-950/50">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-9 h-9">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-primary/50 rounded-xl blur-md"></div>
                      <div className="relative w-full h-full bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-xl shadow-primary/20">
                        <Shield className="w-4 h-4 text-black" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-display font-bold text-foreground text-xs">ContentRemovalDesk</div>
                      <div className="text-[7px] text-primary/90 uppercase tracking-[0.2em] font-semibold">Protection Numérique</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-zinc-900/80 transition-all duration-200 border border-zinc-800/50 hover:border-primary/30"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-zinc-400 hover:text-foreground transition-colors" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 p-6 space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = !item.external && (item.href === location.pathname);
                    
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 text-zinc-300 hover:text-foreground hover:bg-zinc-900/50"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span>{item.label}</span>
                          </a>
                        ) : (
                          <Link
                            to={item.href}
                            className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 group ${
                              isActive 
                                ? 'text-primary bg-primary/10 border border-primary/30' 
                                : 'text-zinc-300 hover:text-foreground hover:bg-zinc-900/50'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span>{item.label}</span>
                            {isActive && (
                              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            )}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA Buttons at Bottom */}
                <div className="p-6 border-t border-zinc-800/50 space-y-3 bg-gradient-to-b from-zinc-950/50 to-zinc-950">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full border-zinc-800 hover:border-primary/50 text-foreground hover:bg-zinc-900/80 transition-all duration-300 font-medium"
                    asChild
                  >
                    <a href="https://espace.contentremovaldesk.com/auth?mode=login" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                      Connexion
                    </a>
                  </Button>
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-bold rounded-full shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] transition-all duration-300"
                    asChild
                  >
                    <a href="https://espace.contentremovaldesk.com/auth?mode=signup" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                      Commencer maintenant
                    </a>
                  </Button>
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
