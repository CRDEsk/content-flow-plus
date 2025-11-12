import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { setCookie, getCookie } from "@/lib/cookies";
import { initAnalytics } from "@/lib/analytics";
import { motion, AnimatePresence } from "framer-motion";

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

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] pointer-events-none"
        >
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[min(92vw,760px)] px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                mass: 0.8,
                duration: 0.6
              }}
              className="pointer-events-auto"
            >
              <div className="relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-950/95 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                {/* Animated gradient overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"
                />

                {/* Shine effect on entrance */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />

                <div className="relative flex flex-col sm:flex-row gap-5 px-6 py-5 sm:px-8 sm:py-6">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Enhanced Cookie Icon - 3D Realistic Design */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        damping: 15,
                        stiffness: 200,
                        delay: 0.2
                      }}
                      className="relative mt-0.5 flex-shrink-0"
                    >
                      {/* Cookie glow effect */}
                      <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-md animate-pulse" />
                      
                      {/* Main cookie container with 3D effect */}
                      <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 shadow-lg shadow-amber-900/50 border-2 border-amber-400/30 flex items-center justify-center overflow-hidden">
                        {/* Cookie texture - chocolate chips */}
                        <div className="absolute inset-0">
                          {/* Top chips */}
                          <div className="absolute top-2 left-3 w-1.5 h-1.5 rounded-full bg-amber-900/80" />
                          <div className="absolute top-3 right-4 w-1 h-1 rounded-full bg-amber-900/80" />
                          <div className="absolute top-4 left-1/2 w-1.5 h-1.5 rounded-full bg-amber-900/80" />
                          {/* Bottom chips */}
                          <div className="absolute bottom-3 left-2 w-1 h-1 rounded-full bg-amber-900/80" />
                          <div className="absolute bottom-2 right-3 w-1.5 h-1.5 rounded-full bg-amber-900/80" />
                          {/* Middle chip */}
                          <div className="absolute top-1/2 left-1/3 w-1 h-1 rounded-full bg-amber-900/80" />
                        </div>
                        
                        {/* Cookie highlight for 3D effect */}
                        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-amber-300/40 to-transparent rounded-t-2xl" />
                        
                        {/* Cookie icon overlay */}
                        <Cookie className="relative h-6 w-6 text-amber-900/60 z-10" strokeWidth={2} />
                      </div>
                      
                      {/* Sparkle effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full blur-sm"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="space-y-2 flex-1"
                    >
                      <h3 className="text-sm sm:text-base font-semibold text-foreground tracking-wide uppercase">
                        {t('cookies.title')}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {t('cookies.description')}{" "}
                        <Link to="/politique-cookies" className="text-primary hover:underline font-medium">
                          {t('cookies.policy')}
                        </Link>. {t('cookies.free')}
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto"
                  >
                    <Button
                      onClick={handleAccept}
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-black font-semibold rounded-xl px-5 sm:px-6 h-10 sm:h-11 text-sm shadow-[0_10px_30px_rgba(201,165,82,0.35)] hover:shadow-[0_15px_40px_rgba(201,165,82,0.5)] transition-all duration-300 hover:scale-105"
                    >
                      {t('common.accept')}
                    </Button>
                    <Button
                      onClick={handleDecline}
                      variant="outline"
                      className="w-full sm:w-auto border-zinc-700/80 hover:bg-zinc-800/60 text-foreground rounded-xl px-5 sm:px-6 h-10 sm:h-11 text-sm hover:scale-105 transition-all duration-300"
                    >
                      {t('common.decline')}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default CookieConsent;
