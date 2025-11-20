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
          className="fixed bottom-0 left-0 right-0 z-[100] bg-black/95 backdrop-blur-md border-t border-primary/20 shadow-lg"
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
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCustomize(true)}
                  className="text-zinc-400 hover:text-white"
                >
                  <Settings className="w-4 h-4 mr-1" />
                  Personnaliser
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRejectAll}
                  className="text-zinc-400 hover:text-white"
                >
                  Refuser
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleAcceptAll}
                  className="bg-primary text-black hover:bg-primary/90"
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
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[102] w-full max-w-lg mx-4"
          >
            <div className="bg-zinc-900 border border-primary/20 rounded-lg shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 border-b border-primary/20">
                <div className="flex items-center gap-3">
                  <Settings className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-semibold text-white">Préférences des cookies</h2>
                </div>
                <p className="text-sm text-zinc-400 mt-2">
                  Gérez vos préférences en matière de cookies et de confidentialité
                </p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Necessary cookies */}
                <div className="flex items-start justify-between p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                  <div className="flex-1">
                    <h3 className="font-medium text-white mb-1">Cookies nécessaires</h3>
                    <p className="text-sm text-zinc-400">
                      Essentiels au fonctionnement du site. Ne peuvent pas être désactivés.
                    </p>
                  </div>
                  <div className="ml-4 flex items-center">
                    <div className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      Toujours actifs
                    </div>
                  </div>
                </div>

                {/* Analytics cookies */}
                <div className="flex items-start justify-between p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                  <div className="flex-1">
                    <h3 className="font-medium text-white mb-1">Cookies analytiques</h3>
                    <p className="text-sm text-zinc-400">
                      Nous aident à comprendre comment vous utilisez notre site.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.analytics ? 'bg-primary' : 'bg-zinc-600'
                      }`}
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
                <div className="flex items-start justify-between p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                  <div className="flex-1">
                    <h3 className="font-medium text-white mb-1">Cookies marketing</h3>
                    <p className="text-sm text-zinc-400">
                      Utilisés pour personnaliser les publicités et le contenu.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.marketing ? 'bg-primary' : 'bg-zinc-600'
                      }`}
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
              <div className="p-6 bg-zinc-800/30 border-t border-zinc-700 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/politique-cookies"
                  className="text-sm text-primary hover:underline"
                >
                  Politique des cookies
                </Link>
                <Link
                  to="/politique-confidentialite"
                  className="text-sm text-primary hover:underline"
                >
                  Politique de confidentialité
                </Link>
                <div className="flex-1" />
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowCustomize(false)}
                    className="text-zinc-400 hover:text-white"
                  >
                    Annuler
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={handleSavePreferences}
                    className="bg-primary text-black hover:bg-primary/90"
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
