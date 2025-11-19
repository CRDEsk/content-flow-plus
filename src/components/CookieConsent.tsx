import { useState, useEffect } from "react";
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

  useEffect(() => {
    const consent = getCookie("cookie-consent");
    const storedPreferences = localStorage.getItem("cookie-preferences");
    
    if (!consent) {
      // Show banner after 1 second on first visit
      const timer = setTimeout(() => setIsVisible(true), 1000);
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
      setIsVisible(false);
      setShowCustomize(false);
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
      necessary: true, // Necessary cookies can't be rejected
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

  if (!isVisible) return null;

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
          className="fixed bottom-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-lg border-t border-border shadow-2xl"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-foreground">
                    Nous utilisons des cookies
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Nous utilisons des cookies pour améliorer votre expérience.{" "}
                    <Link to="/politique-cookies" className="underline hover:text-foreground transition-colors">
                      En savoir plus
                    </Link>
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCustomize(true)}
                  className="text-xs hover:bg-accent"
                >
                  <Settings className="w-3.5 h-3.5 mr-1.5" />
                  Personnaliser
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectAll}
                  className="text-xs"
                >
                  Tout refuser
                </Button>
                <Button
                  size="sm"
                  onClick={handleAcceptAll}
                  className="text-xs"
                >
                  Tout accepter
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : showCustomize ? (
        // Customize preferences modal
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCustomize(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101]"
          />
          
          {/* Modal */}
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
                duration: 0.2
              }
            }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[102] w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background rounded-xl shadow-2xl border border-border"
          >
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Préférences de cookies
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  Gérez vos préférences de cookies. Vous pouvez activer ou désactiver différents types de cookies ci-dessous.
                </p>
              </div>

              {/* Cookie Preferences */}
              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="p-4 bg-accent/50 rounded-lg border border-border">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <h3 className="font-semibold text-foreground">Cookies nécessaires</h3>
                      <p className="text-xs text-muted-foreground">
                        Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs font-medium text-muted-foreground">Toujours actif</span>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <h3 className="font-semibold text-foreground">Cookies analytiques</h3>
                      <p className="text-xs text-muted-foreground">
                        Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site.
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                        preferences.analytics ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.analytics ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <h3 className="font-semibold text-foreground">Cookies marketing</h3>
                      <p className="text-xs text-muted-foreground">
                        Ces cookies sont utilisés pour vous proposer des publicités pertinentes.
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                        preferences.marketing ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.marketing ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  onClick={() => setShowCustomize(false)}
                  className="flex-1"
                >
                  Annuler
                </Button>
                <Button
                  onClick={handleSavePreferences}
                  className="flex-1"
                >
                  Enregistrer les préférences
                </Button>
              </div>

              {/* Privacy Policy Link */}
              <p className="text-xs text-center text-muted-foreground">
                Pour en savoir plus, consultez notre{" "}
                <Link to="/politique-cookies" className="underline hover:text-foreground transition-colors">
                  politique de cookies
                </Link>
                {" "}et notre{" "}
                <Link to="/politique-confidentialite" className="underline hover:text-foreground transition-colors">
                  politique de confidentialité
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>,
    document.body
  );
};

export default CookieConsent;