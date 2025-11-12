import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WifiOff } from "lucide-react";

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOffline, setShowOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOffline(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOffline(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {showOffline && !isOnline && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-[9999] bg-red-500/90 backdrop-blur-xl border-b border-red-600/50 shadow-lg"
        >
          <div className="container mx-auto px-4 py-3 flex items-center gap-3 text-white">
            <WifiOff className="w-5 h-5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-semibold">Connexion perdue</p>
              <p className="text-xs opacity-90">Vérifiez votre connexion internet</p>
            </div>
            <button
              onClick={() => setShowOffline(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Fermer"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NetworkStatus;

