import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { setCookie, getCookie } from "@/lib/cookies";
import { initAnalytics } from "@/lib/analytics";

const CookieConsent = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check both cookie and localStorage for backward compatibility
    const cookieConsent = getCookie("cookie-consent");
    const localConsent = localStorage.getItem("cookie-consent");
    
    // Migrate from localStorage to cookie if needed
    if (localConsent && !cookieConsent) {
      setCookie("cookie-consent", localConsent, 365);
    }
    
    const consent = cookieConsent || localConsent;
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Store in both cookie and localStorage for compatibility
    setCookie("cookie-consent", "accepted", 365);
    localStorage.setItem("cookie-consent", "accepted");
    
    // Initialize analytics after consent
    initAnalytics();
    
    setIsVisible(false);
    setHasInteracted(true);
  };

  const handleDecline = () => {
    // Store in both cookie and localStorage for compatibility
    setCookie("cookie-consent", "declined", 365);
    localStorage.setItem("cookie-consent", "declined");
    
    setIsVisible(false);
    setHasInteracted(true);
  };

  if (!isVisible) return null;

  return createPortal(
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[200] w-full max-w-[min(92vw,760px)] px-4 pointer-events-none">
      <div className="pointer-events-auto">
        <div className="pointer-events-auto overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-950/95 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)] animate-in slide-in-from-bottom-8 duration-600">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative flex flex-col sm:flex-row gap-5 px-6 py-5 sm:px-8 sm:py-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                <Cookie className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-semibold text-foreground tracking-wide uppercase">
                  {t('cookies.title')}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {t('cookies.description')}{" "}
                  <Link to="/politique-cookies" className="text-primary hover:underline font-medium">
                    {t('cookies.policy')}
                  </Link>. {t('cookies.free')}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
              <Button
                onClick={handleAccept}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-black font-semibold rounded-xl px-5 sm:px-6 h-10 sm:h-11 text-sm shadow-[0_10px_30px_rgba(201,165,82,0.35)]"
              >
                {t('common.accept')}
              </Button>
              <Button
                onClick={handleDecline}
                variant="outline"
                className="w-full sm:w-auto border-zinc-700/80 hover:bg-zinc-800/60 text-foreground rounded-xl px-5 sm:px-6 h-10 sm:h-11 text-sm"
              >
                {t('common.decline')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CookieConsent;
