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
      // Load saved preferences
      setPreferences(JSON.parse(storedPreferences));
    }
  }, []);

  const saveConsent = (type: ConsentType, prefs: CookiePreferences) => {
    setCookie("cookie-consent", type || "declined", 365);
    localStorage.setItem("cookie-preferences", JSON.stringify(prefs));
    
    // Initialize analytics only if analytics are accepted
    if (prefs.analytics) {
      initAnalytics();
    }
    
    setIsVisible(false);
    setShowCustomize(false);
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

  // Auto-hide after 30 seconds if user doesn't interact (GDPR compliance - default to reject)
  useEffect(() => {
    if (isVisible && !showCustomize) {
      const timeout = setTimeout(() => {
        handleRejectAll();
      }, 30000);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, showCustomize]);

  if (!isVisible) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {!showCustomize ? (
        // Minimal bottom banner
        <motion.div
          key="banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-[9999]"
        >
          <div className="bg-black/95 backdrop-blur-lg border border-primary/20 rounded-xl p-4 shadow-2xl shadow-primary/10">
            <div className="flex items-start gap-3 mb-3">
              <Cookie className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre{" "}
                  <Link to="/politique-cookies" className="text-primary hover:underline">
                    politique cookies
                  </Link>
                  .
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={handleAcceptAll}
                size="sm"
                className="bg-primary text-black hover:bg-primary/90 font-medium flex-1 min-w-[100px] h-11"
              >
                Accepter tout
              </Button>
              <Button
                onClick={handleRejectAll}
                size="sm"
                variant="outline"
                className="border-border hover:bg-muted flex-1 min-w-[100px] h-11"
              >
                Refuser tout
              </Button>
              <Button
                onClick={() => setShowCustomize(true)}
                size="sm"
                variant="ghost"
                className="text-muted-foreground hover:text-foreground w-full sm:w-auto h-11"
              >
                <Settings className="w-4 h-4 mr-2" />
                Personnaliser
              </Button>
            </div>
          </div>
        </motion.div>
      ) : (
        // Customize preferences modal
        <motion.div
          key="customize"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="bg-zinc-900 border-2 border-primary/30 rounded-2xl p-6 w-full max-w-md shadow-2xl shadow-primary/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">Préférences des cookies</h2>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necessary cookies */}
              <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-muted/50">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1">Cookies nécessaires</h3>
                  <p className="text-sm text-muted-foreground">
                    Requis pour le fonctionnement du site
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Toujours actifs</span>
                </div>
              </div>

              {/* Analytics cookies */}
              <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-background border border-border">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1">Cookies analytiques</h3>
                  <p className="text-sm text-muted-foreground">
                    Pour comprendre comment vous utilisez notre site
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>

              {/* Marketing cookies */}
              <div className="flex items-start justify-between gap-4 p-3 rounded-lg bg-background border border-border">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1">Cookies marketing</h3>
                  <p className="text-sm text-muted-foreground">
                    Pour personnaliser les publicités
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setShowCustomize(false)}
                variant="outline"
                className="flex-1 h-11"
              >
                Retour
              </Button>
              <Button
                onClick={handleSavePreferences}
                className="flex-1 bg-primary text-black hover:bg-primary/90 h-11"
              >
                Enregistrer
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default CookieConsent;
