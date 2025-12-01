import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Cookie, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { setCookie, getCookie } from "@/lib/cookies";
import { initAnalytics } from "@/lib/analytics";
import { motion, AnimatePresence } from "framer-motion";

type ConsentType = "accepted" | "declined" | "customized" | null;

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const isMounted = useRef(true);

  // Create portal container on mount
  useEffect(() => {
    const container = document.createElement('div');
    container.id = 'cookie-consent-portal';
    
    // Add explicit styles to ensure fixed positioning works
    container.style.cssText = `
      position: fixed !important;
      bottom: 0 !important;
      left: 0 !important;
      right: 0 !important;
      z-index: 9999 !important;
      pointer-events: none;
      transform: none !important;
    `;
    
    document.body.appendChild(container);
    setPortalContainer(container);
    
    return () => {
      isMounted.current = false;
      // Cleanup: remove container on unmount
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  }, []);

  useEffect(() => {
    const consent = getCookie("cookie-consent");
    const storedPreferences = localStorage.getItem("cookie-preferences");
    
    if (!consent) {
      // Show banner after 1 second on first visit
      const timer = setTimeout(() => {
        if (isMounted.current) {
          setIsVisible(true);
        }
      }, 1000);
      return () => clearTimeout(timer);
    } else if (storedPreferences) {
      // Load saved preferences and initialize analytics if accepted
      const prefs = JSON.parse(storedPreferences);
      setPreferences(prefs);
      
      // Initialize analytics if user previously accepted
      if (prefs.analytics && (consent === "accepted" || consent === "customized")) {
        initAnalytics();
      }
    }
  }, []);

  const saveConsent = (type: ConsentType, prefs: CookiePreferences) => {
    setCookie("cookie-consent", type || "declined", 365);
    localStorage.setItem("cookie-preferences", JSON.stringify(prefs));
    
    // Initialize analytics only if analytics are accepted
    if (prefs.analytics) {
      initAnalytics();
    }
    
    // Delay hiding to show the closing animation
    setTimeout(() => {
      if (isMounted.current) {
        setIsVisible(false);
        setShowCustomize(false);
      }
    }, 400);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveConsent("accepted", allAccepted);
  };

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    saveConsent("declined", allRejected);
  };

  const handleSavePreferences = () => {
    saveConsent("customized", preferences);
  };

  // Auto-reject after 30 seconds if user doesn't interact (GDPR compliance)
  useEffect(() => {
    if (isVisible && !showCustomize) {
      const timeout = setTimeout(() => {
        handleRejectAll();
      }, 30000);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, showCustomize]);

  // Keyboard escape handler for customize modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showCustomize) {
        setShowCustomize(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [showCustomize]);

  if (!isVisible || !portalContainer) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {isVisible && !showCustomize ? (
        // Minimal bottom banner
        <motion.div
          key="banner"
          initial={{ y: 100, opacity: 0, scale: 0.95 }}
          animate={{ 
            y: 0, 
            opacity: 1, 
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 25
            }
          }}
          exit={{ 
            y: 100, 
            opacity: 0, 
            scale: 0.95,
            transition: {
              duration: 0.3,
              ease: "easeInOut"
            }
          }}
          className="relative w-full bg-black/95 backdrop-blur-md border-t border-primary/20 shadow-lg pointer-events-auto"
          style={{ transform: 'none' }}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Cookie className="w-5 h-5 text-primary" />
                </motion.div>
                <p>
                  Nous utilisons des cookies pour améliorer votre expérience.{" "}
                  <Link to="/politique-cookies" className="text-primary hover:underline">
                    En savoir plus
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0 pointer-events-auto">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCustomize(true)}
                  className="text-zinc-400 hover:text-white pointer-events-auto"
                >
                  <Settings className="w-4 h-4 mr-1" />
                  Personnaliser
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRejectAll}
                  className="text-zinc-400 hover:text-white pointer-events-auto"
                >
                  Refuser
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleAcceptAll}
                  className="bg-primary text-black hover:bg-primary/90 pointer-events-auto"
                >
                  Tout accepter
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : showCustomize ? (
        // Customize modal
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101]"
            onClick={() => setShowCustomize(false)}
          />
          <motion.div
            key="modal"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              y: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
              }
            }}
            exit={{ 
              scale: 0.9, 
              opacity: 0, 
              y: 20,
              transition: {
                duration: 0.3,
                ease: "easeInOut"
              }
            }}
            className="fixed inset-x-4 top-[5vh] bottom-[5vh] z-[102] max-w-lg mx-auto flex flex-col pointer-events-auto"
          >
            <div className="bg-zinc-900 border border-primary/20 rounded-lg shadow-2xl overflow-hidden flex flex-col h-full pointer-events-auto">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/10 to-transparent p-4 sm:p-6 border-b border-primary/20">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  <h2 className="text-base sm:text-xl font-semibold text-white leading-tight">Préférences des cookies</h2>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                  Gérez vos préférences en matière de cookies
                </p>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 space-y-3 overflow-y-auto flex-1">
                {/* Necessary cookies */}
                <div className="flex flex-col sm:flex-row items-start justify-between gap-2 p-3 sm:p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white text-sm sm:text-base mb-1">Cookies nécessaires</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Essentiels au fonctionnement du site
                    </p>
                  </div>
                  <div className="flex items-center self-start flex-shrink-0">
                    <div className="px-2 sm:px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full whitespace-nowrap">
                      Toujours actifs
                    </div>
                  </div>
                </div>

                {/* Analytics cookies */}
                <div className="flex flex-col sm:flex-row items-start justify-between gap-2 p-3 sm:p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white text-sm sm:text-base mb-1">Cookies analytiques</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Pour comprendre votre usage
                    </p>
                  </div>
                  <div className="flex items-center self-start flex-shrink-0">
                    <button
                      onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.analytics ? 'bg-primary' : 'bg-zinc-600'
                      }`}
                      aria-label="Toggle analytics cookies"
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Marketing cookies */}
                <div className="flex flex-col sm:flex-row items-start justify-between gap-2 p-3 sm:p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white text-sm sm:text-base mb-1">Cookies marketing</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Pour personnaliser le contenu
                    </p>
                  </div>
                  <div className="flex items-center self-start flex-shrink-0">
                    <button
                      onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.marketing ? 'bg-primary' : 'bg-zinc-600'
                      }`}
                      aria-label="Toggle marketing cookies"
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-3 sm:p-4 bg-zinc-800/30 border-t border-zinc-700 flex flex-col gap-2 flex-shrink-0">
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    to="/politique-cookies"
                    className="text-primary hover:underline"
                  >
                    Cookies
                  </Link>
                  <Link
                    to="/politique-confidentialite"
                    className="text-primary hover:underline"
                  >
                    Confidentialité
                  </Link>
                </div>
                <div className="flex gap-2 justify-end pointer-events-auto">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowCustomize(false)}
                    className="text-zinc-400 hover:text-white text-xs h-8 pointer-events-auto cursor-pointer"
                  >
                    Annuler
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={handleSavePreferences}
                    className="bg-primary text-black hover:bg-primary/90 text-xs h-8 pointer-events-auto cursor-pointer"
                  >
                    Enregistrer
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>,
    portalContainer
  );
};

export default CookieConsent;
