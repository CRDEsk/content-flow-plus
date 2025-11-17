import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";
import { Shield } from "lucide-react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
    trackEvent("404", "error", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white antialiased relative overflow-hidden">
      {/* Animated background - matching site design */}
      <div className="absolute inset-0 overflow-hidden" style={{ 
        transform: 'translateZ(0)', 
        WebkitTransform: 'translateZ(0)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
      } as React.CSSProperties}>
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[800px] h-[800px]"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 223, 125, 0.15) 0%, rgba(255, 223, 125, 0.08) 40%, transparent 70%)',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          } as React.CSSProperties}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px]"
          animate={{
            opacity: [0.25, 0.45, 0.25],
            scale: [1, 1.08, 1],
            x: [0, -30, 20, 0],
            y: [0, 20, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 223, 125, 0.12) 0%, rgba(255, 223, 125, 0.06) 40%, transparent 70%)',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          } as React.CSSProperties}
        />
        {/* Subtle grid overlay */}
        <motion.div 
          className="absolute inset-0 opacity-[0.02]"
          animate={{
            opacity: [0.02, 0.04, 0.02]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 223, 125, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 223, 125, 1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          } as React.CSSProperties}
        />
      </div>

      {/* Header with only logo */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 py-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="group relative z-10 flex-shrink-0 inline-block">
            <div className="flex items-center gap-2.5">
              <div 
                className="relative overflow-hidden rounded-xl w-11 h-11"
                style={{
                  transition: 'width 0.3s ease-out, height 0.3s ease-out',
                  willChange: 'width, height',
                  WebkitTransform: 'translateZ(0)',
                  transform: 'translateZ(0)'
                }}
              >
                <div 
                  className="absolute inset-0 blur-md opacity-60 group-hover:opacity-90 bg-gradient-to-br from-primary via-primary/70 to-primary/50"
                  style={{ 
                    transition: 'opacity 0.2s ease-out',
                    willChange: 'opacity',
                    WebkitTransform: 'translateZ(0)',
                    transform: 'translateZ(0)'
                  }}
                ></div>
                <div 
                  className="relative w-full h-full flex items-center justify-center group-hover:scale-105 bg-gradient-to-br from-primary to-primary/80 shadow-xl shadow-primary/20"
                  style={{ 
                    isolation: 'isolate',
                    transition: 'transform 0.2s ease-out',
                    willChange: 'transform',
                    WebkitTransform: 'translateZ(0)',
                    transform: 'translateZ(0)'
                  }}
                >
                  <Shield 
                    className="w-5 h-5 text-black" 
                    strokeWidth={2.5}
                    style={{
                      transition: 'width 0.3s ease-out, height 0.3s ease-out',
                      willChange: 'width, height'
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div 
                  className="font-display font-bold tracking-tight text-foreground text-xs leading-tight"
                  style={{
                    transition: 'font-size 0.3s ease-out',
                    willChange: 'font-size'
                  }}
                >
                  ContentRemovalDesk
                </div>
                <div 
                  className="text-[7px] uppercase tracking-[0.2em] leading-none font-semibold opacity-100 text-primary/90"
                  style={{
                    transition: 'opacity 0.3s ease-out',
                    willChange: 'opacity'
                  }}
                >
                  Protection Numérique
                </div>
              </div>
            </div>
          </Link>
        </div>
      </header>
      
      <main className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center space-y-12"
          >
            {/* Branded Logo Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-primary/50 rounded-2xl blur-2xl opacity-50"
                />
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40">
                  <Shield className="w-12 h-12 sm:w-14 sm:h-14 text-black" strokeWidth={2.5} />
                </div>
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-4 bg-primary/20 rounded-full blur-xl"
                />
              </div>
            </motion.div>

            {/* 404 Number with Premium Styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative inline-block"
            >
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary via-primary/70 to-primary/50 rounded-3xl blur-3xl"
              />
              <h1 className="relative text-8xl sm:text-9xl lg:text-[12rem] font-display font-bold bg-gradient-to-br from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent leading-none">
                404
              </h1>
            </motion.div>

            {/* Error Message with Liquid Glass Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative"
            >
              <motion.div
                className="relative mx-auto max-w-2xl rounded-3xl p-8 sm:p-12"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(30px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  border: '1px solid rgba(255, 223, 125, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)',
                }}
                whileHover={{
                  borderColor: 'rgba(255, 223, 125, 0.4)',
                  boxShadow: '0 12px 40px 0 rgba(255, 223, 125, 0.2), inset 0 0 80px rgba(255, 223, 125, 0.1)',
                }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
                  Page introuvable
                </h2>
                <p className="text-lg sm:text-xl text-zinc-400">
                  Cette page n'existe pas ou a été déplacée.
                </p>
              </motion.div>
            </motion.div>

            {/* Retour à l'accueil Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-center items-center pt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/"
                  className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold rounded-full text-foreground transition-all duration-300 overflow-hidden"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(30px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                    border: '1px solid rgba(255, 223, 125, 0.2)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.4)';
                    e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(255, 223, 125, 0.2), inset 0 0 80px rgba(255, 223, 125, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.2)';
                    e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)';
                  }}
                >
                  <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Retour à l'accueil</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
