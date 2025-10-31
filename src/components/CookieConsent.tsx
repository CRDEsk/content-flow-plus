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
    <div className="fixed bottom-0 left-0 right-0 z-[100] animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-zinc-950/98 backdrop-blur-xl border-t border-zinc-800/50 shadow-2xl">
        <div className="container mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-start gap-2 sm:gap-3 flex-1">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cookie className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-xs sm:text-sm mb-1">Cookies & Confidentialité</h3>
                <p className="text-[10px] sm:text-xs text-zinc-400 leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre{" "}
                  <Link to="/politique-cookies" className="text-primary hover:underline font-medium">
                    politique de cookies
                  </Link>.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                onClick={handleAccept}
                className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-black font-semibold rounded-lg px-4 sm:px-6 h-8 sm:h-9 text-xs sm:text-sm"
              >
                Accepter
              </Button>
              <Button
                onClick={handleDecline}
                variant="outline"
                className="flex-1 sm:flex-none border-zinc-700 hover:bg-zinc-800/50 text-foreground rounded-lg px-4 sm:px-6 h-8 sm:h-9 text-xs sm:text-sm"
              >
                Refuser
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
