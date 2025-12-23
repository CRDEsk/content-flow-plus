import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { trackButtonClick } from "@/lib/analytics";
import { getBrandTheme } from "@/utils/brandTheme";

interface HeaderProps {
  isLoggedIn?: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
  hideLogo?: boolean;
  hideMenu?: boolean;
  showLanguageCurrency?: boolean;
  language?: string;
  currency?: string;
  hideStartButton?: boolean;
  languageCurrencySwitcher?: React.ReactNode;
  subtitleText?: string;
  usePurpleTheme?: boolean;
}

const Header = ({ isLoggedIn = false, hideLogo = false, hideMenu = false, showLanguageCurrency = false, language = 'English', currency = 'EUR', hideStartButton = false, languageCurrencySwitcher, subtitleText, usePurpleTheme = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAnnouncementBanner, setShowAnnouncementBanner] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, language: currentLanguage } = useLanguage();

  // Get brand theme based on current route
  const brandTheme = getBrandTheme(location.pathname, { usePurpleTheme });
  const brandGradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${brandTheme.from}, ${brandTheme.via}, ${brandTheme.to})`
  };

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

  // Prevent body scroll when desktop menu is open (mobile only) - improved version
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
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
      
      // Prevent touch scrolling on iOS
      body.style.touchAction = 'none';
      html.style.touchAction = 'none';
      body.style.overscrollBehavior = 'none';
      html.style.overscrollBehavior = 'none';
      
      // Prevent scroll with touch events
      const preventScroll = (e: TouchEvent) => {
        if (e.touches.length > 1) return; // Allow pinch zoom
        e.preventDefault();
      };
      
      const preventWheel = (e: WheelEvent) => {
        e.preventDefault();
      };
      
      // Handle escape key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      };
      
      // Add event listeners with passive: false to allow preventDefault
      document.addEventListener('touchmove', preventScroll, { passive: false });
      document.addEventListener('wheel', preventWheel, { passive: false });
      window.addEventListener('keydown', handleEscape);
      
      return () => {
        // Restore scroll
        body.style.overflow = '';
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        body.style.height = '';
        html.style.overflow = '';
        body.style.touchAction = '';
        html.style.touchAction = '';
        body.style.overscrollBehavior = '';
        html.style.overscrollBehavior = '';
        
        // Restore scroll position
        window.scrollTo(0, scrollY);
        
        // Remove event listeners
        document.removeEventListener('touchmove', preventScroll);
        document.removeEventListener('wheel', preventWheel);
        window.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isMobileMenuOpen]);

  // Menu items organized in groups with dividers
  const navItems = [
    // Group 1: Main navigation
    { label: t("header.ourSolution"), href: "/notre-solution" },
    { label: t("header.forCreators"), href: "/pour-createurs" },
    { label: t("header.caseStudies"), href: "/cas-clients" },
    { label: t("header.pricing"), href: "/tarifs" },
    // Divider 1
    { type: 'divider' },
    // Group 2: Advanced/Secondary
    { label: t("header.escalades"), href: "/escalades-legal" },
    { label: "International", href: "/international-protection" },
    { label: t("header.forAgencies"), href: "/pour-agences" },
    // Divider 2
    { type: 'divider' },
    // Group 3: About & Contact
    { label: t("header.about"), href: "/a-propos" },
    { label: t("header.blog"), href: "https://blog.contentremovaldesk.com", external: true },
    { label: t("header.contact"), href: "/contact" },
    { label: t("header.mySpace"), href: "https://espace.contentremovaldesk.com", external: true },
  ];

  const isAgencyPage = location.pathname === "/pour-agences";
  const subtitleColorClass = usePurpleTheme
    ? "text-purple-300"
    : isAgencyPage
    ? "text-blue-200"
    : "text-primary";

  // Check if announcement banner should be shown
  const showAnnouncement = showAnnouncementBanner;
  const announcementHeight = showAnnouncement ? 'top-[36px] sm:top-[40px]' : 'top-0';

  return (
    <>
      {/* Announcement Banner - Swipe to dismiss on mobile */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div 
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -36 }}
            transition={{ duration: 0.2 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.x) > 100) {
                setShowAnnouncementBanner(false);
              }
            }}
            className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary/8 via-transparent to-primary/8 backdrop-blur-xl border-b border-primary/5 cursor-grab active:cursor-grabbing"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center gap-2 py-2 sm:py-2.5 relative">
                <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse" />
                <p className="text-[10px] sm:text-xs text-foreground/70 text-center font-medium tracking-wide pr-6">
                  Pause de fin d'année – Nos services seront en pause du 25 décembre au 5 janvier. Merci pour votre confiance et très belles fêtes !
                </p>
                <button
                  onClick={() => setShowAnnouncementBanner(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors duration-200"
                  aria-label="Fermer l'annonce"
                >
                  <X className="w-3.5 h-3.5 text-foreground/50 hover:text-foreground/80" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header 
        className={`fixed ${announcementHeight} left-0 right-0 w-full z-50 ${
          scrolled 
            ? `bg-black/98 backdrop-blur-3xl border-b shadow-2xl py-3 ${
                isAgencyPage 
                  ? 'border-blue-500/10 shadow-blue-500/5' 
                  : 'border-transparent sm:border-primary/10 shadow-primary/5'
              }`
            : "bg-gradient-to-b from-black/50 via-black/30 to-transparent backdrop-blur-sm py-5"
        }`}
        style={{ 
          position: 'fixed',
          transition: 'background-color 0.3s ease-out, padding 0.3s ease-out, border-color 0.3s ease-out, top 0.3s ease-out',
          willChange: scrolled ? 'auto' : 'background-color, padding',
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          borderTop: 'none',
          boxShadow: 'none'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-16 5xl:px-20 max-w-[2600px]">
          <div className="flex items-center justify-between gap-4 3xl:gap-6 4xl:gap-8 relative">
            
            {/* Logo - Safari Optimized */}
            {!hideLogo && (
            <Link to="/" className="group relative z-10 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div 
                  className={`relative overflow-hidden rounded-xl ${scrolled ? 'w-9 h-9' : 'w-11 h-11'}`}
                  style={{
                    transition: 'width 0.3s ease-out, height 0.3s ease-out',
                    willChange: scrolled ? 'auto' : 'width, height',
                    WebkitTransform: 'translateZ(0)',
                    transform: 'translateZ(0)'
                  }}
                >
                  <div 
                    className={`absolute inset-0 blur-md opacity-60 group-hover:opacity-90 ${
                      isAgencyPage 
                        ? 'bg-gradient-to-br from-blue-500 via-blue-500/70 to-blue-500/50' 
                        : usePurpleTheme
                        ? 'bg-gradient-to-br from-purple-500 via-purple-500/70 to-purple-500/50'
                        : 'bg-gradient-to-br from-primary via-primary/70 to-primary/50'
                    }`}
                    style={{ 
                      transition: 'opacity 0.2s ease-out',
                      willChange: 'opacity',
                      WebkitTransform: 'translateZ(0)',
                      transform: 'translateZ(0)'
                    }}
                  ></div>
                  <div 
                    className={`relative w-full h-full flex items-center justify-center group-hover:scale-105 ${
                      isAgencyPage
                        ? 'bg-gradient-to-br from-blue-500 to-blue-500/80 shadow-xl shadow-blue-500/20'
                        : usePurpleTheme
                        ? 'bg-gradient-to-br from-purple-500 to-purple-500/80 shadow-xl shadow-purple-500/20'
                        : 'bg-gradient-to-br from-primary to-primary/80 shadow-xl shadow-primary/20'
                    }`}
                    style={{ 
                      isolation: 'isolate',
                      transition: 'transform 0.2s ease-out',
                      willChange: 'transform',
                      WebkitTransform: 'translateZ(0)',
                      transform: 'translateZ(0)'
                    }}
                  >
                    <Shield 
                      className={`text-black ${scrolled ? 'w-4 h-4' : 'w-5 h-5'}`} 
                      strokeWidth={2.5}
                      style={{
                        transition: 'width 0.3s ease-out, height 0.3s ease-out',
                        willChange: scrolled ? 'auto' : 'width, height'
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div 
                    className={`font-display font-bold tracking-tight text-foreground ${scrolled ? 'text-[11px]' : 'text-xs'} leading-tight`}
                    style={{
                      transition: 'font-size 0.3s ease-out',
                      willChange: scrolled ? 'auto' : 'font-size'
                    }}
                  >
                    ContentRemovalDesk
                  </div>
                  <div 
                    className={`text-[7px] uppercase tracking-[0.2em] leading-none font-semibold ${
                      scrolled ? 'opacity-70' : 'opacity-100'
                    } ${subtitleColorClass}`}
                    style={{
                      transition: 'opacity 0.3s ease-out',
                      willChange: scrolled ? 'auto' : 'opacity'
                    }}
                  >
                    {subtitleText || (showLanguageCurrency ? `${language} • ${currency}` : 'Protection Numérique')}
                  </div>
                </div>
              </div>
            </Link>
            )}

            {/* Desktop CTA & Menu */}
            <div className="hidden lg:flex items-center gap-3 ml-auto">
              {!isAgencyPage && !hideStartButton && (
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-semibold rounded-full px-6 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  asChild
                >
                  <a 
                    href="https://espace.contentremovaldesk.com/auth?mode=signup" 
                    onClick={() => trackButtonClick("Start Button", "Header")}
                  >
                    <span className="relative z-10">{t("common.start")}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </Button>
              )}
              {languageCurrencySwitcher && (
                <div className="hidden lg:flex items-center gap-2 relative z-50">
                  {languageCurrencySwitcher}
                </div>
              )}
              
              {/* Premium Burger Menu Button - Exact Logo Style - Desktop Only */}
              {!hideMenu && (
              <button
                className="hidden lg:block group relative transition-all duration-300 overflow-hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
                aria-expanded={isMenuOpen}
                aria-controls="desktop-menu"
              >
                <div className="relative w-10 h-10 transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  {/* Main button container - matches logo structure */}
                  <div className={`relative w-full h-full bg-gradient-to-br rounded-xl flex items-center justify-center transition-all duration-300 shadow-xl ${
                    isMenuOpen
                      ? isAgencyPage
                        ? 'from-blue-500 to-blue-500/80 shadow-blue-500/20'
                        : 'from-primary to-primary/80 shadow-primary/20'
                      : 'from-zinc-900/80 to-zinc-800/80 backdrop-blur-sm border border-zinc-800/50 group-hover:border-primary/30'
                  } ${isAgencyPage && !isMenuOpen ? 'group-hover:border-blue-500/30' : ''}`} style={{ isolation: 'isolate' }}>
                    {/* Animated burger icon */}
                    <div className="relative w-5 h-5">
                      <span className={`absolute left-0 w-full h-0.5 rounded-full transition-all duration-500 ease-out ${
                        isMenuOpen 
                          ? 'top-2 rotate-45 bg-black' 
                          : `top-0.5 bg-foreground ${isAgencyPage ? 'group-hover:bg-blue-500' : 'group-hover:bg-primary'}`
                      }`}></span>
                      <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 rounded-full transition-all duration-300 ${
                        isMenuOpen 
                          ? 'opacity-0 scale-0 bg-black' 
                          : `opacity-100 scale-100 bg-foreground ${isAgencyPage ? 'group-hover:bg-blue-500' : 'group-hover:bg-primary'}`
                      }`}></span>
                      <span className={`absolute left-0 w-full h-0.5 rounded-full transition-all duration-500 ease-out ${
                        isMenuOpen 
                          ? 'top-2 -rotate-45 bg-black' 
                          : `bottom-0.5 bg-foreground ${isAgencyPage ? 'group-hover:bg-blue-500' : 'group-hover:bg-primary'}`
                      }`}></span>
                    </div>
                  </div>
                </div>
              </button>
              )}
            </div>

            {/* Mobile Language/Currency Switcher & Burger Menu */}
            <div className="lg:hidden flex items-center gap-2 ml-auto">
              {languageCurrencySwitcher && (
                <div className="flex items-center gap-2">
                  {languageCurrencySwitcher}
                </div>
              )}
              {!hideMenu && (
              <button
                className={`relative p-2.5 rounded-xl text-foreground group overflow-hidden ${
                isMobileMenuOpen 
                  ? isAgencyPage
                    ? 'bg-blue-500 border-blue-500 shadow-lg shadow-blue-500/30'
                    : 'bg-primary border-primary shadow-lg shadow-primary/30'
                  : `bg-zinc-900/50 border-zinc-800/50 hover:bg-zinc-900/80 ${
                      isAgencyPage ? 'hover:border-blue-500/30' : 'hover:border-primary/30'
                    }`
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              style={{ 
                borderWidth: '1px',
                transform: isMobileMenuOpen ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.2s ease-out, background-color 0.2s ease-out, border-color 0.2s ease-out',
                willChange: 'transform'
              }}
            >
              <div className="relative w-6 h-6" style={{ willChange: 'transform' }}>
                <span 
                  className={`absolute left-0 h-0.5 rounded-full ${
                  isMobileMenuOpen 
                    ? 'top-3 rotate-45 bg-black w-5 left-0.5' 
                      : 'top-1 rotate-0 bg-current w-full'
                  }`}
                  style={{
                    transition: 'transform 0.2s ease-out, top 0.2s ease-out, width 0.2s ease-out, left 0.2s ease-out',
                    willChange: 'transform, top, width, left'
                  }}
                ></span>
                <span 
                  className={`absolute left-0 top-1/2 -translate-y-1/2 h-0.5 rounded-full w-full bg-current ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{
                    transition: 'opacity 0.15s ease-out',
                    willChange: 'opacity'
                  }}
                ></span>
                <span 
                  className={`absolute left-0 h-0.5 rounded-full ${
                  isMobileMenuOpen 
                    ? 'top-3 -rotate-45 bg-black w-5 left-0.5' 
                      : 'bottom-1 rotate-0 bg-current w-full'
                  }`}
                  style={{
                    transition: 'transform 0.2s ease-out, top 0.2s ease-out, width 0.2s ease-out, left 0.2s ease-out',
                    willChange: 'transform, top, width, left'
                  }}
                ></span>
              </div>
            </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Dropdown Menu - positioned correctly below header */}
      <AnimatePresence>
        {!hideMenu && isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="hidden lg:block fixed inset-0 bg-transparent z-40"
              onClick={() => setIsMenuOpen(false)}
              style={{ 
                touchAction: 'none',
                WebkitTransform: 'translateZ(0)',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
            />
            {/* Menu container positioned within page container */}
            <div 
              className="hidden lg:block fixed left-0 right-0 z-50 pointer-events-none"
              style={{ 
                top: showAnnouncement ? 'calc(36px + 4rem)' : '4rem'
              }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-16 5xl:px-20 max-w-[2600px] relative">
                <motion.nav
                  id="desktop-menu"
                  initial={{ opacity: 0, scaleY: 0, scaleX: 0.9, y: -10 }}
                  animate={{ opacity: 1, scaleY: 1, scaleX: 1, y: 0 }}
                  exit={{ opacity: 0, scaleY: 0, scaleX: 0.9, y: -10 }}
                  transition={{ duration: 0.15, ease: [0.25, 0.8, 0.25, 1] }}
                  className="absolute right-0 top-0 mt-2 z-50 pointer-events-auto"
                  style={{ 
                    transformOrigin: "top right",
                    WebkitTransform: 'translateZ(0)',
                    transform: 'translateZ(0)'
                  }}
                  role="navigation"
                  aria-label="Menu principal"
                >
                  <div className={`relative bg-zinc-900/98 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/50 overflow-hidden border min-w-[300px] ${
                    isAgencyPage ? 'border-blue-500/20' : 'border-primary/20'
                  }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-50 pointer-events-none ${
                    isAgencyPage ? 'from-blue-500/5 via-transparent to-blue-500/5' : 'from-primary/5 via-transparent to-primary/5'
                  }`} />
                  <div className="relative py-3">
                    {navItems.map((item, index) => {
                      // Handle dividers
                      if (item.type === 'divider') {
                        return (
                          <motion.div
                            key={`divider-${index}`}
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ delay: index * 0.03, duration: 0.2 }}
                            className="relative my-2.5 mx-5"
                          >
                            <div className={`h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent ${
                              isAgencyPage ? 'via-blue-500/20' : 'via-primary/20'
                            }`} />
                          </motion.div>
                        );
                      }

                      const isActive = !item.external && (item.href === location.pathname);
                      return (
                        <motion.div
                          key={item.label || `item-${index}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03, duration: 0.3 }}
                          className="relative"
                        >
                          {item.external ? (
                            <a
                              href={item.href}
                              className={`group/item relative block px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 border-l-2 border-transparent hover:translate-x-1 isolate ${
                                isAgencyPage ? 'hover:text-blue-400 hover:border-blue-500' : 'hover:text-primary hover:border-primary'
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                              style={{ color: '#ffffff !important', isolation: 'isolate' }}
                            >
                              <div className={`absolute inset-0 bg-gradient-to-r to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none ${
                                isAgencyPage ? 'from-blue-500/10' : 'from-primary/10'
                              }`} />
                              <span className="relative z-10 flex items-center gap-2">
                                {item.label}
                                <span className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-xs">→</span>
                              </span>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-500 pointer-events-none" />
                            </a>
                          ) : (
                            <Link
                              to={item.href}
                              className={`group/item relative block px-5 py-2.5 text-sm font-medium transition-all duration-300 border-l-2 hover:translate-x-1 isolate ${
                                isActive 
                                  ? isAgencyPage
                                    ? 'text-blue-400 border-blue-500'
                                    : 'text-primary border-primary'
                                  : `text-white border-transparent ${
                                      isAgencyPage 
                                        ? 'hover:text-blue-400 hover:border-blue-500' 
                                        : 'hover:text-primary hover:border-primary'
                                    }`
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                              style={{ color: isActive ? undefined : '#ffffff !important', isolation: 'isolate' }}
                            >
                              {isActive ? (
                                <div className={`absolute inset-0 bg-gradient-to-r to-transparent pointer-events-none ${
                                  isAgencyPage ? 'from-blue-500/15' : 'from-primary/15'
                                }`} />
                              ) : (
                                <div className={`absolute inset-0 bg-gradient-to-r to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none ${
                                  isAgencyPage ? 'from-blue-500/10' : 'from-primary/10'
                                }`} />
                              )}
                              <span className="relative z-10 flex items-center gap-2">
                                {item.label}
                                {isActive && (
                                  <span className={`w-1.5 h-1.5 rounded-full ${
                                    isAgencyPage ? 'bg-blue-500' : 'bg-primary'
                                  }`} />
                                )}
                              </span>
                              {!isActive && (
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-500 pointer-events-none" />
                            )}
                          </Link>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                </div>
              </motion.nav>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>

      {/* Mobile Menu - Only shows on mobile */}
      <AnimatePresence>
          {!hideMenu && isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="lg:hidden fixed inset-0 bg-black/70 z-40"
                style={{
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  touchAction: 'none',
                  WebkitTransform: 'translateZ(0)',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  overflow: 'hidden',
                  overscrollBehavior: 'none'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                onTouchMove={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onTouchStart={(e) => {
                  e.stopPropagation();
                }}
              />
              <motion.nav
                id="mobile-menu"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ 
                  type: "spring",
                  damping: 30,
                  stiffness: 300,
                  mass: 0.8,
                }}
                className="lg:hidden fixed top-0 left-0 bottom-0 z-50 w-80 max-w-[85vw] bg-zinc-950/85 border-r border-zinc-900/40 shadow-2xl"
                style={{ 
                  touchAction: 'pan-y',
                  WebkitTransform: 'translateZ(0)',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  height: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
                role="navigation"
                aria-label="Menu mobile"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                />
                
                <div 
                  className="flex flex-col h-full relative z-10"
                  style={{ 
                    WebkitOverflowScrolling: 'touch',
                    overscrollBehavior: 'contain',
                    height: '100%',
                    minHeight: 0
                  }}
                >
                  {/* Header */}
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex items-center p-5 border-b border-zinc-900/40 bg-gradient-to-b from-zinc-950/70 to-zinc-950/50 flex-shrink-0"
                    style={{ flexShrink: 0 }}
                  >
                    <div className="flex items-center gap-2.5">
                      <motion.div 
                        className="relative w-9 h-9"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div
                          className="absolute inset-0 rounded-xl blur-md opacity-60"
                          style={{ backgroundImage: brandGradientStyle.backgroundImage }}
                        ></div>
                        <div
                          className="relative w-full h-full rounded-xl flex items-center justify-center shadow-lg"
                          style={{
                            backgroundImage: brandGradientStyle.backgroundImage,
                            boxShadow: `0 10px 25px ${brandTheme.accent}33`
                          }}
                        >
                          <Shield className="w-4 h-4 text-black" strokeWidth={2.5} />
                        </div>
                      </motion.div>
                      <div className="flex flex-col">
                        <div
                          className="font-display font-bold text-xs text-transparent bg-clip-text"
                          style={brandGradientStyle}
                        >
                          ContentRemovalDesk
                        </div>
                        <div
                          className="text-[7px] uppercase tracking-[0.2em] font-semibold"
                          style={{ color: brandTheme.accent }}
                        >
                          Protection Numérique
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Navigation Items - Scrollable */}
                  <div 
                    className="flex-1 overflow-y-auto overflow-x-hidden p-5 scrollbar-hide"
                    style={{ 
                      minHeight: 0,
                      flex: '1 1 auto',
                      WebkitOverflowScrolling: 'touch',
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none'
                    }}
                  >
                    <div className="space-y-1.5">
                      {navItems.map((item, index) => {
                        // Handle dividers in mobile menu
                        if (item.type === 'divider') {
                          return (
                            <motion.div
                              key={`divider-${index}`}
                              initial={{ opacity: 0, scaleX: 0 }}
                              animate={{ opacity: 1, scaleX: 1 }}
                              transition={{ delay: 0.15 + (index * 0.03), duration: 0.2 }}
                              className="relative my-3 mx-2"
                            >
                              <div className="h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
                            </motion.div>
                          );
                        }

                        const isActive = !item.external && (item.href === location.pathname);
                        return (
                          <motion.div
                            key={item.label || `item-${index}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 + (index * 0.03), duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="relative mb-1.5 last:mb-0"
                          >
                            {item.external ? (
                              <a
                                href={item.href}
                                className="group relative flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-300 text-zinc-300 hover:text-foreground hover:bg-zinc-900/60 active:scale-[0.98] overflow-hidden"
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ isolation: 'isolate' }}
                              >
                                <span className="relative z-10 flex-1 min-w-0 truncate">{item.label}</span>
                                <motion.span 
                                  className="opacity-0 group-hover:opacity-100 ml-2 flex-shrink-0 relative z-10"
                                  whileHover={{ x: 2 }}
                                  transition={{ duration: 0.2 }}
                                >→</motion.span>
                              </a>
                            ) : (
                              <Link
                                to={item.href}
                                className={`group relative flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-300 active:scale-[0.98] overflow-hidden ${
                                  isActive 
                                    ? 'bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/50 shadow-lg shadow-primary/20' 
                                    : 'text-zinc-300 hover:text-foreground hover:bg-zinc-900/60'
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ 
                                  isolation: 'isolate',
                                  color: isActive ? 'hsl(var(--primary))' : undefined
                                }}
                              >
                                <span className={`relative z-10 flex-1 min-w-0 truncate ${isActive ? 'font-semibold' : ''}`} style={{ color: isActive ? 'hsl(var(--primary))' : undefined }}>{item.label}</span>
                                {isActive && (
                                  <motion.span 
                                    className="w-2.5 h-2.5 rounded-full bg-primary ml-2 flex-shrink-0 relative z-10 shadow-lg shadow-primary/50"
                                    animate={{
                                      scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      ease: "easeInOut"
                                    }}
                                  />
                                )}
                              </Link>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Bottom Button - Fixed */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="p-4 border-t border-zinc-900/40 bg-zinc-950/90 flex-shrink-0"
                    style={{ 
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 20,
                      minHeight: 'auto'
                    }}
                  >
                    <a
                      href="https://espace.contentremovaldesk.com/auth?mode=signup"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        
                        // Smooth transition animation
                        const button = e.currentTarget;
                        button.style.transition = 'all 0.2s ease-out';
                        button.style.transform = 'scale(0.98)';
                        
                        // Navigate after animation
                        setTimeout(() => {
                          window.location.href = 'https://espace.contentremovaldesk.com/auth?mode=signup';
                        }, 100);
                      }}
                      className="block w-full text-center py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary to-primary/90 font-bold text-sm shadow-lg shadow-primary/30 active:scale-[0.98] active:shadow-primary/40 transition-all duration-200 !text-black"
                      style={{
                        textDecoration: 'none',
                        fontWeight: 700,
                        WebkitTapHighlightColor: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                      ref={(el) => {
                        if (el) {
                          el.style.setProperty('color', '#000000', 'important');
                          const spans = el.querySelectorAll('span');
                          spans.forEach(span => {
                            span.style.setProperty('color', '#000000', 'important');
                          });
                        }
                      }}
                    >
                      <span className="!text-black" style={{ fontWeight: 700 }}>
                        {t("common.getStarted")}
                      </span>
                      <span className="!text-black" style={{ fontSize: '1.125rem' }}>→</span>
                    </a>
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
