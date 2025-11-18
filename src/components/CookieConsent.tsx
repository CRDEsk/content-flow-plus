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

  // Add keyboard escape handler
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
      {!showCustomize ? (
        // Minimal bottom banner
        <motion.div
          key="banner"
          initial={{ y: 100, opacity: 0, scale: 0.95, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ y: 100, opacity: 0, scale: 0.95, filter: "blur(4px)" }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8
          }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-lg z-[9999]"
        >
          <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-black backdrop-blur-xl border-2 border-primary/30 rounded-2xl p-5 shadow-2xl shadow-primary/20">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg border border-primary/20">
                  <Cookie className="w-5 h-5 text-primary animate-pulse" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground mb-1">Cookies & Confidentialité</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre{" "}
                    <Link to="/politique-cookies" className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors">
                      politique cookies
                    </Link>
                    .
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                <Button
                  onClick={handleAcceptAll}
                  size="sm"
                  className="bg-primary text-black hover:bg-primary/90 hover:scale-105 font-semibold flex-1 min-w-[120px] h-11 shadow-lg shadow-primary/20 transition-all duration-300"
                >
                  Accepter tout
                </Button>
                <Button
                  onClick={handleRejectAll}
                  size="sm"
                  variant="outline"
                  className="border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 flex-1 min-w-[120px] h-11 transition-all duration-300"
                >
                  Refuser tout
                </Button>
                <Button
                  onClick={() => setShowCustomize(true)}
                  size="sm"
                  variant="ghost"
                  className="text-zinc-400 hover:text-foreground hover:bg-zinc-800/50 w-full sm:w-auto h-11 transition-all duration-300"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Personnaliser
                </Button>
              </div>
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
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowCustomize(false);
            }
          }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-black border-2 border-primary/30 rounded-2xl p-6 w-full max-w-md shadow-2xl shadow-primary/20 z-[10001]"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Préférences des cookies</h2>
              </div>

              <div className="space-y-3 mb-6">
                {/* Necessary cookies */}
                <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                      Cookies nécessaires
                      <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full border border-primary/30">Requis</span>
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Requis pour le fonctionnement du site
                    </p>
                  </div>
                </div>

                {/* Analytics cookies */}
                <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/50 hover:border-zinc-600/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1">Cookies analytiques</h3>
                    <p className="text-sm text-zinc-400">
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
                    <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2 peer-focus:ring-offset-zinc-900 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary shadow-inner"></div>
                  </label>
                </div>

                {/* Marketing cookies */}
                <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/50 hover:border-zinc-600/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1">Cookies marketing</h3>
                    <p className="text-sm text-zinc-400">
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
                    <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2 peer-focus:ring-offset-zinc-900 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary shadow-inner"></div>
                  </label>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setShowCustomize(false)}
                  variant="outline"
                  className="flex-1 h-11 border-zinc-700 hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300"
                >
                  Retour
                </Button>
                <Button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-primary text-black hover:bg-primary/90 hover:scale-105 font-semibold h-11 shadow-lg shadow-primary/20 transition-all duration-300"
                >
                  Enregistrer
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default CookieConsent;
