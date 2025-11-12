import { Button } from "@/components/ui/button";
import { Menu, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { trackButtonClick } from "@/lib/analytics";

interface HeaderProps {
  isLoggedIn?: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
}

const Header = ({ isLoggedIn = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  // Handle scroll for header state (don't close menu on scroll)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open (mobile only) - improved version
  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    
    if (isMenuOpen && isMobile) {
      // Store current scroll position
      const scrollY = window.scrollY;
      const body = document.body;
      const html = document.documentElement;
      
      // Lock scroll
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
      body.style.height = '100%';
      
      // Also prevent scroll on html element
      html.style.overflow = 'hidden';
      
      // Handle window resize
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setIsMenuOpen(false);
        }
      };
      
      // Handle escape key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isMenuOpen) {
          setIsMenuOpen(false);
        }
      };
      
      window.addEventListener('resize', handleResize);
      window.addEventListener('keydown', handleEscape);
      
      return () => {
        // Restore scroll
        body.style.overflow = '';
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        body.style.height = '';
        html.style.overflow = '';
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
        
        // Remove event listeners
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isMenuOpen]);

  const navItems = [
    { label: t("header.mySpace"), href: "https://espace.contentremovaldesk.com", external: true },
    { label: t("header.ourSolution"), href: "/notre-solution" },
    { label: t("header.caseStudies"), href: "/cas-clients" },
    { label: t("header.pricing"), href: "/tarifs" },
    { label: t("header.escalades"), href: "/escalades-legal" },
    { label: t("header.about"), href: "/a-propos" },
    { label: t("header.contact"), href: "/contact" },
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
                <div className={`relative transition-all duration-700 overflow-hidden ${scrolled ? 'w-9 h-9' : 'w-11 h-11'}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-primary/50 rounded-xl blur-md group-hover:blur-lg transition-all duration-300 opacity-60 group-hover:opacity-90" style={{ willChange: 'opacity, filter' }}></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary/20" style={{ isolation: 'isolate' }}>
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
                <a 
                  href="https://espace.contentremovaldesk.com/auth?mode=signup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackButtonClick("Start Button", "Header")}
                >
                  <span className="relative z-10">{t("common.start")}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </Button>
              
              {/* Premium Burger Menu Button - Exact Logo Style */}
              <button
                className="group relative transition-all duration-300 overflow-hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
                aria-expanded={isMenuOpen}
                aria-controls="desktop-menu"
              >
                <div className="relative w-10 h-10 transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  {/* Main button container - matches logo structure */}
                  <div className={`relative w-full h-full bg-gradient-to-br rounded-xl flex items-center justify-center transition-all duration-300 shadow-xl ${
                    isMenuOpen
                      ? 'from-primary to-primary/80 shadow-primary/20'
                      : 'from-zinc-900/80 to-zinc-800/80 backdrop-blur-sm border border-zinc-800/50 group-hover:border-primary/30'
                  }`} style={{ isolation: 'isolate' }}>
                    {/* Animated burger icon */}
                    <div className="relative w-5 h-5">
                      <span className={`absolute left-0 w-full h-0.5 rounded-full transition-all duration-500 ease-out ${
                        isMenuOpen 
                          ? 'top-2 rotate-45 bg-black' 
                          : 'top-0.5 bg-foreground group-hover:bg-primary'
                      }`}></span>
                      <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 rounded-full transition-all duration-300 ${
                        isMenuOpen 
                          ? 'opacity-0 scale-0 bg-black' 
                          : 'opacity-100 scale-100 bg-foreground group-hover:bg-primary'
                      }`}></span>
                      <span className={`absolute left-0 w-full h-0.5 rounded-full transition-all duration-500 ease-out ${
                        isMenuOpen 
                          ? 'top-2 -rotate-45 bg-black' 
                          : 'bottom-0.5 bg-foreground group-hover:bg-primary'
                      }`}></span>
                    </div>
                  </div>
                </div>
              </button>
            </div>

            {/* Mobile Burger Menu Button */}
            <button
              className={`lg:hidden relative p-2.5 rounded-xl text-foreground transition-all duration-500 group ml-auto overflow-hidden ${
                isMenuOpen 
                  ? 'bg-primary border-primary scale-110 shadow-lg shadow-primary/30' 
                  : 'bg-zinc-900/50 border-zinc-800/50 hover:border-primary/30 hover:bg-zinc-900/80'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:bg-transparent lg:backdrop-blur-none overflow-hidden"
              onClick={() => setIsMenuOpen(false)}
              onTouchStart={(e) => {
                // Prevent backdrop touch from scrolling
                if (window.innerWidth < 1024) {
                  e.preventDefault();
                }
              }}
              style={{ touchAction: 'none' }}
            />
            
            {/* Desktop Menu - Premium dropdown */}
            <motion.nav
              id="desktop-menu"
              initial={{ opacity: 0, scaleY: 0, scaleX: 0.9, y: -10 }}
              animate={{ opacity: 1, scaleY: 1, scaleX: 1, y: 0 }}
              exit={{ opacity: 0, scaleY: 0, scaleX: 0.9, y: -10 }}
              transition={{ duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
              className="hidden lg:block fixed top-[4.5rem] right-6 z-50"
              style={{ transformOrigin: "top right" }}
              role="navigation"
              aria-label="Menu principal"
            >
              <div className="relative bg-zinc-900/98 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/50 overflow-hidden border border-primary/20 min-w-[260px]">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50 pointer-events-none" />
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                
                <div className="relative py-2">
                  {navItems.map((item, index) => {
                    const isActive = !item.external && (item.href === location.pathname);
                    
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03, duration: 0.2 }}
                        className="group/item"
                      >
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block px-4 py-3 text-sm font-medium text-white hover:text-primary transition-all duration-300 border-l-2 border-transparent hover:border-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent group-hover/item:translate-x-1"
                            onClick={() => setIsMenuOpen(false)}
                            style={{ color: '#ffffff !important' }}
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              {item.label}
                              <motion.span 
                                className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                                initial={{ x: -5 }}
                                whileHover={{ x: 0 }}
                              >
                                →
                              </motion.span>
                            </span>
                            {/* Hover shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-500" />
                          </a>
                        ) : (
                          <Link
                            to={item.href}
                            className={`relative block px-4 py-3 text-sm font-medium transition-all duration-300 border-l-2 group-hover/item:translate-x-1 ${
                              isActive 
                                ? 'text-primary bg-gradient-to-r from-primary/15 to-transparent border-primary' 
                                : 'text-white border-transparent hover:text-primary hover:border-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-transparent'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                            style={{ color: isActive ? undefined : '#ffffff !important' }}
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              {item.label}
                              {isActive && (
                                <motion.span 
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-1.5 h-1.5 rounded-full bg-primary"
                                />
                              )}
                            </span>
                            {/* Hover shine effect */}
                            {!isActive && (
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-500" />
                            )}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              </div>
            </motion.nav>

            {/* Mobile Menu - Premium slide animation */}
            <motion.nav
              id="mobile-menu"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-102%", opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed top-0 left-0 bottom-0 z-50 w-80 max-w-[85vw] bg-zinc-950/95 backdrop-blur-lg border-r border-zinc-900/60 shadow-xl overflow-hidden"
              style={{ touchAction: 'pan-y' }}
              role="navigation"
              aria-label="Menu mobile"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="flex flex-col h-full overflow-y-auto overflow-x-hidden"
                style={{ 
                  WebkitOverflowScrolling: 'touch',
                  overscrollBehavior: 'contain'
                }}
                onTouchStart={(e) => {
                  // Allow scrolling within menu
                  e.stopPropagation();
                }}
              >
                {/* Menu Header */}
                <motion.div 
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.24, ease: [0.25, 0.8, 0.25, 1] }}
                  className="flex items-center p-5 border-b border-zinc-900/60 bg-gradient-to-b from-zinc-950/85 to-zinc-950/55"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-9 h-9">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-primary/50 rounded-xl blur"></div>
                      <div className="relative w-full h-full bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                        <Shield className="w-4 h-4 text-black" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-display font-bold text-foreground text-xs">ContentRemovalDesk</div>
                      <div className="text-[7px] text-primary/90 uppercase tracking-[0.2em] font-semibold">Protection Numérique</div>
                    </div>
                  </div>
                </motion.div>

                {/* Navigation Items */}
                <div className="flex-1 p-5 overflow-x-hidden">
                  <div className="space-y-1.5">
                    {navItems.map((item, index) => {
                      const isActive = !item.external && (item.href === location.pathname);
                      
                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 0.12 + (index * 0.04),
                            duration: 0.26,
                            ease: [0.25, 0.8, 0.25, 1]
                          }}
                          className="relative mb-1.5 last:mb-0"
                        >
                          {item.external ? (
                            <a
                              href={item.href}
                              className="group relative flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl transition-colors duration-200 text-zinc-300 hover:text-foreground hover:bg-zinc-900/60 active:scale-[0.98] overflow-hidden"
                              onClick={() => setIsMenuOpen(false)}
                              style={{ isolation: 'isolate' }}
                            >
                              <span className="relative z-10 flex-1 min-w-0 truncate">{item.label}</span>
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2 flex-shrink-0 relative z-10">
                                →
                              </span>
                            </a>
                          ) : (
                          <Link
                            to={item.href}
                            className={`group relative flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl transition-colors duration-200 active:scale-[0.98] overflow-hidden ${
                              isActive 
                                ? 'bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/50 shadow-lg shadow-primary/20' 
                                : 'text-zinc-300 hover:text-foreground hover:bg-zinc-900/60'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                            style={{ 
                              isolation: 'isolate',
                              color: isActive ? 'hsl(var(--primary))' : undefined
                            }}
                          >
                            <span className={`relative z-10 flex-1 min-w-0 truncate ${isActive ? 'font-semibold' : ''}`} style={{ color: isActive ? 'hsl(var(--primary))' : undefined }}>{item.label}</span>
                            {isActive && (
                              <motion.span 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2.5 h-2.5 rounded-full bg-primary ml-2 flex-shrink-0 relative z-10 shadow-lg shadow-primary/50"
                              />
                            )}
                          </Link>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA Button at Bottom */}
                <motion.div 
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.28, ease: [0.25, 0.8, 0.25, 1] }}
                  className="p-5 border-t border-zinc-900/60 bg-gradient-to-b from-zinc-950/60 to-zinc-950/70"
                >
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-bold rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/45 hover:scale-[1.015] active:scale-95 transition-all duration-250"
                    asChild
                  >
                    <a href="https://espace.contentremovaldesk.com/auth?mode=signup" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                      {t("common.getStarted")}
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
