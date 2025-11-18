import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Scale, Calendar } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";

interface HeroSectionProps {
  isLoggedIn?: boolean;
}

const HeroSection = ({ isLoggedIn = false }: HeroSectionProps) => {
  const { t, language } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const lastUpdateRef = useRef<number>(0);

  useEffect(() => {
    // Optimized for Safari - reduced update frequency and smoother throttling
    const throttleDelay = 32; // ~30fps for better Safari performance
    let ticking = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const now = Date.now();
          if (now - lastUpdateRef.current >= throttleDelay) {
            lastUpdateRef.current = now;
            setMousePosition({ x: e.clientX, y: e.clientY });
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);


  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black overflow-hidden pt-32 sm:pt-28 md:pt-24">
      {/* Premium mesh gradient background - Optimized for Safari */}
      <div className="absolute inset-0" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
        <div 
          className="absolute -top-40 sm:-top-10 left-1/2 -translate-x-1/2 w-[900px] sm:w-[1200px] h-[720px] sm:h-[800px] rounded-full opacity-25 sm:opacity-30 blur-[60px] sm:blur-[80px]"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.28) 38%, transparent 68%)`,
            transform: `translate3d(calc(-50% + ${mousePosition.x * 0.03}px), ${mousePosition.y * 0.02}px, 0)`,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        />
        <div 
          className="absolute bottom-0 left-1/4 w-[420px] sm:w-[600px] h-[420px] sm:h-[600px] rounded-full opacity-15 sm:opacity-20 blur-[40px] sm:blur-[60px]"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary) / 0.6) 0%, transparent 60%)`,
            transform: `translate3d(${mousePosition.x * 0.02}px, -${mousePosition.y * 0.02}px, 0)`,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full opacity-10 sm:opacity-15 blur-[35px] sm:blur-[50px]"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)`,
            transform: `translate3d(-${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px, 0)`,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-12">
          
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-500 group mt-4 sm:mt-0">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-zinc-400 group-hover:text-foreground transition-colors text-center">
              {language === 'en' ? (
                <>
                  <span className="hidden sm:inline">Certified Agency • Google Trusted • 24/7 Intervention</span>
                  <span className="sm:hidden">Certified Agency • 24/7 Intervention</span>
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">Agence certifiée • Google Trusted • Intervention 24/7</span>
                  <span className="sm:hidden">Agence certifiée • Intervention 24/7</span>
                </>
              )}
            </span>
          </div>

          {/* Main headline with stagger animation */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="font-display font-bold leading-[1.1] tracking-tight">
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-4">
                {t("hero.title")}
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
                <span className="relative inline-block">
                  <span className="text-primary">{t("hero.titleHighlight")}</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
                </span>
              </span>
            </h1>
            
            <div className="space-y-4 max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl lg:text-3xl text-zinc-300 font-medium leading-relaxed">
                {t("hero.subtitle").replace(/\s+\?/g, '\u00A0?')}
              </p>
              
              <p className="text-lg sm:text-xl text-zinc-400 font-normal max-w-3xl mx-auto leading-relaxed">
                {language === 'en' ? (
                  <>
                    <span className="text-foreground font-semibold">French agency specialized in digital protection.</span><br className="hidden sm:block" />
                    <span className="text-primary font-semibold">Legal-tech hybrid service</span> with guaranteed human intervention.
                  </>
                ) : (
                  <>
                    <span className="text-foreground font-semibold">Agence française spécialisée en protection digitale.</span><br className="hidden sm:block" />
                    <span className="text-primary font-semibold">Service hybride légal-tech</span> avec intervention humaine garantie.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-black font-semibold rounded-full px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href="https://scan.contentremovaldesk.com/scan">
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  {t("hero.cta")}
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
            </Button>
            <Button 
              size="lg"
              type="button"
              data-cal-namespace="diagnostic-createur"
              data-cal-link="chan-aoufi-ttauyj/diagnostic-createur"
              data-cal-config='{"layout":"month_view"}'
              className="group relative overflow-hidden bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 hover:border-primary/50 text-white font-semibold rounded-full px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg shadow-2xl shadow-zinc-900/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                <Scale className="h-4 w-4 sm:h-5 sm:w-5" />
                Parler à un agent
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Button>
          </div>

          {/* Trust indicators with icons */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-10 lg:pt-12">
            <div className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center border border-zinc-700/50 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-semibold text-foreground">{t("hero.trustConfidential")}</div>
                <div className="text-[10px] sm:text-xs text-zinc-500">{language === 'en' ? 'Absolute discretion' : 'Discrétion absolue'}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center border border-zinc-700/50 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-semibold text-foreground">{t("hero.trustSupport")}</div>
                <div className="text-[10px] sm:text-xs text-zinc-500">{language === 'en' ? 'Fast intervention' : 'Intervention rapide'}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center border border-zinc-700/50 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-semibold text-foreground">{t("hero.trustExpert")}</div>
                <div className="text-[10px] sm:text-xs text-zinc-500">{language === 'en' ? 'Strict legal framework' : 'Cadre juridique strict'}</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default HeroSection;
