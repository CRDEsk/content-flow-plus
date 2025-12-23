import { X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnnouncementBannerProps {
  message: string;
  dismissible?: boolean;
}

const AnnouncementBanner = ({ message, dismissible = true }: AnnouncementBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 backdrop-blur-md border-b border-primary/10"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 py-2 sm:py-2.5">
              {/* Decorative dot */}
              <span className="hidden sm:flex w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
              
              {/* Message */}
              <p className="text-xs sm:text-sm text-foreground/80 text-center font-medium tracking-wide">
                <span className="text-primary/90">✨</span>
                <span className="mx-2">{message}</span>
                <span className="text-primary/90">✨</span>
              </p>
              
              {/* Dismiss button */}
              {dismissible && (
                <button
                  onClick={() => setIsVisible(false)}
                  className="absolute right-3 sm:right-6 p-1 rounded-full text-foreground/50 hover:text-foreground/80 hover:bg-foreground/5 transition-all duration-200"
                  aria-label="Fermer l'annonce"
                >
                  <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;
