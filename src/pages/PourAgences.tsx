import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Users, 
  BarChart3, 
  Headphones, 
  FileText, 
  Code, 
  ArrowRight,
  Zap,
  Shield,
  TrendingDown,
  Clock,
  Target,
  Lock,
  Sparkles,
  Star,
  Calendar,
  Flame,
  Scale
} from "lucide-react";
import { Link } from "react-router-dom";

const PourAgences = () => {
  useEffect(() => {
    document.title = "Solutions pour Agences | ContentRemovalDesk - Protection Digitale Multi-Comptes";
    
    let forceInterval: ReturnType<typeof setInterval> | null = null;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Solution n°1 en France pour agences. Gérez 10, 20, 50 créateurs sans charge mentale. Tableau de bord centralisé, escalades prioritaires, support dédié 24/7.");
    }

    // Change favicon to blue version - Safari compatible
    const faviconSizes = [128, 96, 64, 48, 32, 16];
    const faviconLinks: HTMLLinkElement[] = [];
    const timestamp = Date.now(); // Cache busting for Safari
    
    // Remove existing favicon links and create new ones for Safari compatibility
    faviconSizes.forEach(size => {
      const existingLink = document.querySelector(`link[rel="icon"][sizes="${size}x${size}"]`) as HTMLLinkElement;
      if (existingLink) {
        const originalHref = existingLink.href;
        existingLink.remove();
        
        // Create new link element for Safari
        const newLink = document.createElement('link');
        newLink.rel = 'icon';
        newLink.type = 'image/png';
        newLink.sizes = `${size}x${size}`;
        newLink.href = `/favicon-blue-${size}x${size}.png?v=${timestamp}`;
        document.head.appendChild(newLink);
        faviconLinks.push(newLink);
        (newLink as any).__originalHref = originalHref;
        (newLink as any).__originalElement = existingLink;
      }
    });

    // Change shortcut icon
    const shortcutIcon = document.querySelector('link[rel="shortcut icon"]') as HTMLLinkElement;
    if (shortcutIcon) {
      const originalHref = shortcutIcon.href;
      shortcutIcon.href = `/favicon-blue-128x128.png?v=${timestamp}`;
      (shortcutIcon as any).__originalHref = originalHref;
    }

    // Change apple touch icon - Critical for Safari
    const appleIcon = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
    if (appleIcon) {
      const originalHref = appleIcon.href;
      appleIcon.href = `/apple-touch-icon-blue.png?v=${timestamp}`;
      (appleIcon as any).__originalHref = originalHref;
    } else {
      // Create if doesn't exist (Safari requirement)
      const newAppleIcon = document.createElement('link');
      newAppleIcon.rel = 'apple-touch-icon';
      newAppleIcon.sizes = '180x180';
      newAppleIcon.href = `/apple-touch-icon-blue.png?v=${timestamp}`;
      document.head.appendChild(newAppleIcon);
      (newAppleIcon as any).__originalHref = '/apple-touch-icon.png?v=5';
    }

    // Change favicon.ico - Important for Safari
    const faviconIco = document.querySelector('link[rel="icon"][type="image/x-icon"]') as HTMLLinkElement;
    if (faviconIco) {
      const originalHref = faviconIco.href;
      faviconIco.href = `/favicon-blue.ico?v=${timestamp}`;
      (faviconIco as any).__originalHref = originalHref;
    } else {
      // Create if doesn't exist (Safari fallback)
      const newFaviconIco = document.createElement('link');
      newFaviconIco.rel = 'icon';
      newFaviconIco.type = 'image/x-icon';
      newFaviconIco.href = `/favicon-blue.ico?v=${timestamp}`;
      document.head.appendChild(newFaviconIco);
      (newFaviconIco as any).__originalHref = '/favicon.ico?v=5';
    }
    
    // Add a default favicon link without sizes for Safari compatibility
    const defaultFavicon = document.querySelector('link[rel="icon"]:not([sizes]):not([type="image/x-icon"])') as HTMLLinkElement;
    if (!defaultFavicon || defaultFavicon.href.includes('favicon-')) {
      const newDefaultFavicon = document.createElement('link');
      newDefaultFavicon.rel = 'icon';
      newDefaultFavicon.href = `/favicon-blue-32x32.png?v=${timestamp}`;
      document.head.appendChild(newDefaultFavicon);
      (newDefaultFavicon as any).__isNew = true;
    } else if (defaultFavicon) {
      const originalHref = defaultFavicon.href;
      defaultFavicon.href = `/favicon-blue-32x32.png?v=${timestamp}`;
      (defaultFavicon as any).__originalHref = originalHref;
    }

    // Change theme color to blue
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute('content', '#3B82F6');
    }
    
    // Force Safari to reload favicon - Multiple methods for better compatibility
    const forceFaviconReload = () => {
      // Method 1: Add and remove temporary link
      const tempLink = document.createElement('link');
      tempLink.rel = 'icon';
      tempLink.href = `/favicon-blue-32x32.png?v=${timestamp}`;
      document.head.appendChild(tempLink);
      
      // Method 2: Update existing favicon link href with timestamp
      const existingFavicon = document.querySelector('link[rel="icon"]:not([sizes])') as HTMLLinkElement;
      if (existingFavicon) {
        const originalHref = existingFavicon.href;
        existingFavicon.href = '';
        setTimeout(() => {
          existingFavicon.href = `/favicon-blue-32x32.png?v=${timestamp}`;
        }, 10);
      }
      
      setTimeout(() => {
        tempLink.remove();
      }, 200);
    };
    
    // Force reload immediately and after a delay
    forceFaviconReload();
    setTimeout(forceFaviconReload, 300);

    // Cleanup function to restore original favicons
    return () => {
      faviconLinks.forEach(link => {
        if ((link as any).__originalElement) {
          // Restore original element
          const original = (link as any).__originalElement;
          link.remove();
          document.head.appendChild(original);
        } else if ((link as any).__originalHref) {
          link.href = (link as any).__originalHref;
        } else {
          link.remove();
        }
      });

      if (shortcutIcon && (shortcutIcon as any).__originalHref) {
        shortcutIcon.href = (shortcutIcon as any).__originalHref;
      }

      if (appleIcon && (appleIcon as any).__originalHref) {
        appleIcon.href = (appleIcon as any).__originalHref;
      }

      if (faviconIco && (faviconIco as any).__originalHref) {
        faviconIco.href = (faviconIco as any).__originalHref;
      }
      
      // Remove default favicon if we created it
      const defaultFavicon = document.querySelector('link[rel="icon"]:not([sizes]):not([type="image/x-icon"])') as HTMLLinkElement;
      if (defaultFavicon && (defaultFavicon as any).__isNew) {
        defaultFavicon.remove();
      } else if (defaultFavicon && (defaultFavicon as any).__originalHref) {
        defaultFavicon.href = (defaultFavicon as any).__originalHref;
      }

      if (themeColor) {
        themeColor.setAttribute('content', '#D4AF37');
      }
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const initCal = async () => {
      try {
        const cal = await getCalApi({ namespace: "agence" });
        if (!isMounted) return;

        cal("ui", {
          cssVarsPerTheme: {
            light: { 
              "cal-brand": "#3B82F6",
              "cal-brand-emphasis": "#2563EB",
              "cal-brand-text": "#3B82F6"
            },
            dark: { 
              "cal-brand": "#3B82F6",
              "cal-brand-emphasis": "#2563EB",
              "cal-brand-text": "#3B82F6"
            }
          },
          hideEventTypeDetails: false,
          layout: "month_view"
        });

        // Inject custom CSS to override yellow colors with blue
        const styleId = 'cal-blue-override';
        if (!document.getElementById(styleId)) {
          const style = document.createElement('style');
          style.id = styleId;
          style.textContent = `
            [data-cal-namespace="agence"] [data-cal-selected],
            [data-cal-namespace="agence"] .cal-selected,
            [data-cal-namespace="agence"] button[data-cal-selected],
            [data-cal-namespace="agence"] .cal-day-selected,
            [data-cal-namespace="agence"] [aria-selected="true"],
            [data-cal-namespace="agence"] .cal-day-selected button {
              background-color: #3B82F6 !important;
              border-color: #3B82F6 !important;
              color: white !important;
            }
            [data-cal-namespace="agence"] button:hover,
            [data-cal-namespace="agence"] .cal-day:hover {
              background-color: rgba(59, 130, 246, 0.2) !important;
              border-color: #3B82F6 !important;
            }
            [data-cal-namespace="agence"] .cal-day-selected button::before {
              background-color: #3B82F6 !important;
            }
          `;
          document.head.appendChild(style);
        }
      } catch (error) {
        console.error("Failed to initialize Cal.com for agence namespace", error);
      }
    };

    initCal();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Header />

      {/* SECTION 1 - Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-20">
        {/* Ultra-optimized background for Safari - minimal animations */}
        <div className="absolute inset-0 overflow-hidden" style={{ 
          transform: 'translateZ(0)', 
          WebkitTransform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden'
        } as React.CSSProperties}>
          {/* Liquid glass animated orbs */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-[800px] h-[800px] rounded-full blur-[100px]"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(37, 99, 235, 0.15) 50%, transparent 80%)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] rounded-full blur-[90px]"
            animate={{
              opacity: [0.15, 0.35, 0.15],
              scale: [1, 1.25, 1],
              x: [0, -25, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            style={{
              background: 'radial-gradient(circle, rgba(96, 165, 250, 0.25) 0%, rgba(59, 130, 246, 0.12) 50%, transparent 80%)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[120px]"
            animate={{
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            style={{
              background: 'radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties}
          />
          {/* Static grid overlay - no animation */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
              style={{
              backgroundImage: 'linear-gradient(rgba(96, 165, 250, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(96, 165, 250, 1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              transform: 'translateZ(0)',
            } as React.CSSProperties}
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8 rounded-3xl p-8 sm:p-12 lg:p-16"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              boxShadow: '0 20px 60px 0 rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(59, 130, 246, 0.1), inset 0 0 100px rgba(59, 130, 246, 0.05)',
              transform: 'translateY(-20px)',
            }}
          >
            {/* Badge - Liquid Glass */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: 0
              }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full"
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                boxShadow: '0 4px 20px 0 rgba(59, 130, 246, 0.2), inset 0 0 40px rgba(59, 130, 246, 0.1)',
              }}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.6)';
                e.currentTarget.style.boxShadow = '0 6px 30px 0 rgba(59, 130, 246, 0.3), inset 0 0 60px rgba(59, 130, 246, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                e.currentTarget.style.boxShadow = '0 4px 20px 0 rgba(59, 130, 246, 0.2), inset 0 0 40px rgba(59, 130, 246, 0.1)';
              }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span className="text-xs sm:text-sm font-semibold text-blue-300">
                Solution agence n°1 en France
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display font-bold leading-[1.1] tracking-tight"
            >
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-4">
                La protection de 10, 20, 50 créateurs.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-xl sm:text-2xl lg:text-3xl text-zinc-200 max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Sans charge mentale. Sans chaos. Tout dans un seul tableau de bord.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed"
            >
              Pour les studios, managers, agents et agences créatives.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                {/* Removed glow for Safari performance */}
                <button
                  type="button"
                  data-cal-namespace="agence"
                  data-cal-link="contentremovaldesk/agence"
                  data-cal-config='{"layout":"month_view"}'
                  className="group relative text-white font-semibold rounded-full px-5 sm:px-6 lg:px-7 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base lg:text-base transition-all duration-300 w-full sm:w-auto cursor-pointer overflow-hidden"
                  style={{
                    background: 'linear-gradient(to right, rgba(59, 130, 246, 1), rgba(37, 99, 235, 1))',
                    border: '1px solid rgba(59, 130, 246, 0.4)',
                    boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.4), inset 0 0 60px rgba(59, 130, 246, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(59, 130, 246, 0.6), inset 0 0 80px rgba(59, 130, 246, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(59, 130, 246, 0.4), inset 0 0 60px rgba(59, 130, 246, 0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Removed shimmer and glow effects for Safari performance */}
                  <span className="relative z-10 flex items-center gap-3 justify-center">
                    <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />
                    Demander une démonstration
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-2 text-foreground font-semibold rounded-full px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 text-base sm:text-lg lg:text-xl transition-all duration-300 w-full sm:w-auto"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '2px solid rgba(59, 130, 246, 0.3)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(59, 130, 246, 0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                    e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(59, 130, 246, 0.2), inset 0 0 80px rgba(59, 130, 246, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                    e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(59, 130, 246, 0.05)';
                  }}
                  asChild
                >
                  <a href="mailto:support@contentremovaldesk.com">
                    <span className="flex items-center gap-3 justify-center">
                      <Headphones className="h-5 w-5 sm:h-6 sm:w-6" />
                      Parler à un expert
                    </span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* SECTION 2 - Positioning */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 sm:mb-8">
              Gérez vos créateurs. Nous gérons leurs crises.
            </h2>
            <p className="text-xl sm:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              CRD devient votre <span className="text-blue-400 font-semibold">"équipe de protection intégrée"</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Flame,
                title: "Suppression prioritaire",
                description: "Vos créateurs passent en première ligne. Retraits accélérés, traitement immédiat."
              },
              {
                icon: Scale,
                title: "Escalades juridiques",
                description: "Pour les cas critiques. Nos équipes juridiques gèrent les registrars, hosts offshore, et plateformes complexes."
              },
              {
                icon: BarChart3,
                title: "Reporting clair",
                description: "Preuves, statistiques, rapports consolidés. Vous voyez tout, vos créateurs aussi."
              },
              {
                icon: Headphones,
                title: "Support dédié",
                description: "Pour votre équipe. Un contact unique, des réponses immédiates, escalades prioritaires."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.08, 
                    duration: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(30px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(59, 130, 246, 0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                    e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(59, 130, 246, 0.2), inset 0 0 80px rgba(59, 130, 246, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                    e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(59, 130, 246, 0.05)';
                  }}
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:w-7 text-blue-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 - Agency Features */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Une solution pensée pour scaler
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Users,
                title: "Gestion multi-créateurs sans friction",
                description: "Un seul tableau. Tous vos créateurs. Scan, suivi, retraits, preuves. Tout centralisé."
              },
              {
                icon: FileText,
                title: "Rapports consolidés pour votre agence",
                description: "D'un coup d'œil : ce qui a été supprimé, ce qui reste, les priorités."
              },
              {
                icon: Headphones,
                title: "Support agence dédié (24/7)",
                description: "Un contact unique. Des réponses immédiates. Escalades prioritaires."
              },
              {
                icon: Code,
                title: "API complète & intégrations",
                description: "Plug-and-play avec vos systèmes internes, CRM, ou dashboards."
              },
              {
                icon: TrendingDown,
                title: "Tarification dégressive pensée pour scaler",
                description: "Plus vous protégez, plus vous économisez."
              },
              {
                icon: Shield,
                title: "Accès prioritaire aux escalades",
                description: "Vos créateurs passent en première ligne dans nos traitements juridiques & techniques."
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.08, 
                    duration: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(30px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(59, 130, 246, 0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                    e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(59, 130, 246, 0.2), inset 0 0 80px rgba(59, 130, 246, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                    e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(59, 130, 246, 0.05)';
                  }}
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:w-7 text-blue-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Pourquoi CRD */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Pourquoi une solution agence CRD ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Clock,
                title: "Gagnez du temps. Beaucoup de temps.",
                description: "Plus besoin de jongler entre 30 emails, DMCA, hébergeurs, forums."
              },
              {
                icon: Target,
                title: "Donnez de la valeur à vos créateurs.",
                description: "Vous leur offrez une vraie protection + des preuves + une équipe derrière eux."
              },
              {
                icon: Lock,
                title: "Réduisez vos risques.",
                description: "Les escalades juridiques deviennent notre responsabilité, pas la vôtre."
              }
            ].map((block, index) => {
              const Icon = block.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0.96 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.7, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl p-8 sm:p-10 transition-all duration-300"
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(30px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.3), inset 0 0 80px rgba(59, 130, 246, 0.15)',
                    transform: 'translate3d(0, 0, 0)',
                    WebkitTransform: 'translate3d(0, 0, 0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    isolation: 'isolate',
                    opacity: 1,
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                    e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(59, 130, 246, 0.25), inset 0 0 100px rgba(59, 130, 246, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                    e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(59, 130, 246, 0.3), inset 0 0 80px rgba(59, 130, 246, 0.15)';
                  }}
                >
                  <div className="relative z-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                      {block.title}
                    </h3>
                    <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 - Tarification */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Tarification pensée pour scaler
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {[
              {
                range: "1 – 5 créateurs",
                description: "Tarif réduit, idéal pour les petites agences et studios.",
                highlight: false
              },
              {
                range: "6 – 15 créateurs",
                description: "Tarification optimisée, support dédié inclus.",
                highlight: false
              },
              {
                range: "15+ créateurs",
                description: "Conditions sur mesure + escalades prioritaires + SLA contractuels.",
                highlight: true
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.7, 
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl p-8 sm:p-10 transition-all duration-300"
                style={tier.highlight ? {
                  background: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(30px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  border: '1px solid rgba(59, 130, 246, 0.4)',
                  boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.3), inset 0 0 80px rgba(59, 130, 246, 0.15)',
                } : {
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(30px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(59, 130, 246, 0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tier.highlight ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 0.4)';
                  e.currentTarget.style.boxShadow = tier.highlight 
                    ? '0 12px 40px 0 rgba(59, 130, 246, 0.25), inset 0 0 100px rgba(59, 130, 246, 0.2)'
                    : '0 12px 40px 0 rgba(59, 130, 246, 0.2), inset 0 0 80px rgba(59, 130, 246, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = tier.highlight ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.2)';
                  e.currentTarget.style.boxShadow = tier.highlight
                    ? '0 8px 32px 0 rgba(59, 130, 246, 0.3), inset 0 0 80px rgba(59, 130, 246, 0.15)'
                    : '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(59, 130, 246, 0.05)';
                }}
              >
                <div className="relative z-10">
                  {tier.highlight && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 mb-4">
                      <Star className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-semibold text-blue-400">Recommandé</span>
                    </div>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                    {tier.range}
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                    {tier.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                type="button"
                data-cal-namespace="agence"
                data-cal-link="contentremovaldesk/agence"
                data-cal-config='{"layout":"month_view"}'
                className="group relative text-white font-semibold rounded-full px-5 sm:px-6 lg:px-7 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base lg:text-base transition-all duration-300 cursor-pointer overflow-hidden"
                style={{
                  background: 'linear-gradient(to right, rgba(59, 130, 246, 1), rgba(37, 99, 235, 1))',
                  border: '1px solid rgba(59, 130, 246, 0.4)',
                  boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.4), inset 0 0 60px rgba(59, 130, 246, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(59, 130, 246, 0.6), inset 0 0 80px rgba(59, 130, 246, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(59, 130, 246, 0.4), inset 0 0 60px rgba(59, 130, 246, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut"
                  }}
                />
                <span className="relative z-10 flex items-center gap-3 justify-center">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                  Obtenir un devis agence
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
                </span>
                  </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PourAgences;
