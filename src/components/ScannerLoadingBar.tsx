import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ScannerLoadingBarProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export default function ScannerLoadingBar({ isLoading, onComplete }: ScannerLoadingBarProps) {
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        onComplete?.();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: -4, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -4, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-[10002] h-1 bg-black/80 backdrop-blur-sm shadow-lg shadow-primary/5 pointer-events-none"
        >
          {/* Subtle glow underneath */}
          <div className="absolute inset-0 bg-primary/10 blur-md" />
          
          {/* Progress bar */}
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="relative h-full bg-gradient-to-r from-primary via-primary/90 to-primary overflow-hidden"
          >
            {/* Fast shimmer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
            
            {/* Slow shimmer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 0.3,
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
