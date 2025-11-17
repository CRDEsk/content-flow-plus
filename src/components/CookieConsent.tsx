import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
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
  const { t } = useLanguage();
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
      // Show modal after 1 second on first visit
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

  const handleCustomize = () => {
    setShowCustomize(true);
  };

  if (!isVisible) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
        onClick={() => {}} // Prevent closing on backdrop click for GDPR compliance
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
          }}
          className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary" />
          
          {/* Content */}
          <div className="p-6 sm:p-8">
            {!showCustomize ? (
              // Main consent view
              <>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                      {t("cookies.title") || "Nous respectons votre vie privée"}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                      {t("cookies.description") || "Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. En cliquant sur 'Accepter tout', vous consentez à notre utilisation des cookies."}
                    </p>
                  </div>
                </div>

                {/* GDPR Info */}
                <div className="mb-6 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-zinc-400">
                      <p className="mb-2">
                        Conformément au RGPD, vous avez le contrôle total sur vos données. Vous pouvez :
                      </p>
                      <ul className="space-y-1 text-xs">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-primary" />
                          Accepter ou refuser les cookies non essentiels
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-primary" />
                          Personnaliser vos préférences à tout moment
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-primary" />
                          Consulter notre <Link to="/politique-cookies" className="text-primary hover:underline">politique de cookies</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-primary hover:bg-primary/90 text-black font-semibold h-12 rounded-xl"
                  >
                    Accepter tout
                  </Button>
                  <Button
                    onClick={handleRejectAll}
                    variant="outline"
                    className="flex-1 h-12 rounded-xl border-zinc-700 hover:bg-zinc-800"
                  >
                    Refuser tout
                  </Button>
                  <Button
                    onClick={handleCustomize}
                    variant="ghost"
                    className="flex-1 h-12 rounded-xl hover:bg-zinc-800"
                  >
                    Personnaliser
                  </Button>
                </div>

                <p className="text-xs text-zinc-500 text-center mt-4">
                  En continuant, vous acceptez notre{" "}
                  <Link to="/politique-confidentialite" className="text-primary hover:underline">
                    politique de confidentialité
                  </Link>
                </p>
              </>
            ) : (
              // Customize view
              <>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground">
                    Personnaliser les cookies
                  </h3>
                  <button
                    onClick={() => setShowCustomize(false)}
                    className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary cookies */}
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                          <Shield className="w-5 h-5 text-green-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Cookies nécessaires</h4>
                          <p className="text-xs text-zinc-500">Toujours actifs</p>
                        </div>
                      </div>
                      <div className="w-12 h-6 bg-green-500/20 rounded-full flex items-center px-1">
                        <div className="w-4 h-4 bg-green-500 rounded-full ml-auto" />
                      </div>
                    </div>
                    <p className="text-sm text-zinc-400 ml-13">
                      Essentiels au fonctionnement du site (connexion, panier, sécurité).
                    </p>
                  </div>

                  {/* Analytics cookies */}
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                          <Cookie className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Cookies analytiques</h4>
                          <p className="text-xs text-zinc-500">Optionnels</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.analytics ? "bg-primary" : "bg-zinc-700"
                        }`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          preferences.analytics ? "translate-x-6" : "translate-x-0"
                        }`} />
                      </button>
                    </div>
                    <p className="text-sm text-zinc-400 ml-13">
                      Nous aident à comprendre comment les visiteurs utilisent notre site.
                    </p>
                  </div>

                  {/* Marketing cookies */}
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                          <Cookie className="w-5 h-5 text-purple-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Cookies marketing</h4>
                          <p className="text-xs text-zinc-500">Optionnels</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.marketing ? "bg-primary" : "bg-zinc-700"
                        }`}
                      >
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                          preferences.marketing ? "translate-x-6" : "translate-x-0"
                        }`} />
                      </button>
                    </div>
                    <p className="text-sm text-zinc-400 ml-13">
                      Utilisés pour afficher des publicités pertinentes.
                    </p>
                  </div>
                </div>

                {/* Save preferences button */}
                <div className="flex gap-3">
                  <Button
                    onClick={handleSavePreferences}
                    className="flex-1 bg-primary hover:bg-primary/90 text-black font-semibold h-12 rounded-xl"
                  >
                    Enregistrer les préférences
                  </Button>
                  <Button
                    onClick={() => setShowCustomize(false)}
                    variant="outline"
                    className="h-12 px-6 rounded-xl border-zinc-700 hover:bg-zinc-800"
                  >
                    Retour
                  </Button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default CookieConsent;
