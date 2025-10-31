import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-zinc-950/95 backdrop-blur-xl rounded-2xl border border-zinc-800/50 shadow-2xl p-6 relative overflow-hidden">
        {/* Subtle gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-primary" />
        
        <button
          onClick={handleDecline}
          className="absolute top-4 right-4 p-1 hover:bg-zinc-800/50 rounded-lg transition-colors"
          aria-label="Fermer"
        >
          <X className="h-4 w-4 text-zinc-400" />
        </button>

        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Cookie className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Cookies & Confidentialité</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre{" "}
              <Link to="/politique-cookies" className="text-primary hover:underline">
                politique de cookies
              </Link>.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={handleAccept}
            className="flex-1 bg-primary hover:bg-primary/90 text-black font-semibold rounded-lg"
            size="sm"
          >
            Accepter
          </Button>
          <Button
            onClick={handleDecline}
            variant="outline"
            className="flex-1 border-zinc-700 hover:bg-zinc-800/50 text-foreground rounded-lg"
            size="sm"
          >
            Refuser
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
