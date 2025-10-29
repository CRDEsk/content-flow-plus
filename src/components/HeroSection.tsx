import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Scale } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  isLoggedIn?: boolean;
}

const HeroSection = ({ isLoggedIn = false }: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black overflow-hidden pt-20">
      {/* Premium mesh gradient background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full opacity-30 blur-[120px]"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.3) 40%, transparent 70%)`,
            transform: `translate(calc(-50% + ${mousePosition.x * 0.03}px), ${mousePosition.y * 0.03}px)`
          }}
        />
        <div 
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary) / 0.6) 0%, transparent 60%)`,
            transform: `translate(${mousePosition.x * 0.02}px, -${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[90px]"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)`,
            transform: `translate(-${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-12">
          
          {/* Trust badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-500 group">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-zinc-400 group-hover:text-foreground transition-colors">
              Agence certifiée • Google Trusted • Intervention 24/7
            </span>
          </div>

          {/* Main headline with stagger animation */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="font-display font-bold leading-[1.1] tracking-tight">
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-4">
                Protégez votre image
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
                <span className="text-foreground">effacez vos </span>
                <span className="relative inline-block">
                  <span className="text-primary">fuites</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 blur-sm" />
                </span>
              </span>
            </h1>
            
            <div className="space-y-4 max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl lg:text-3xl text-zinc-300 font-medium leading-relaxed">
                Ton nom circule sur des sites chelous ?<br className="hidden sm:block" /> Tu sais pas quoi faire ?
              </p>
              
              <p className="text-lg sm:text-xl text-zinc-400 font-normal max-w-3xl mx-auto leading-relaxed">
                On protège ton contenu, ton image, ta tranquillité.<br className="hidden sm:block" />
                <span className="text-primary font-semibold">Service hybride légal-tech</span> avec intervention humaine garantie.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-black font-semibold rounded-full px-10 py-7 text-lg shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Scan gratuit immédiat
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="group border-2 border-zinc-800 hover:border-primary/50 bg-black/50 backdrop-blur-xl text-foreground font-semibold rounded-full px-10 py-7 text-lg hover:bg-zinc-900/50 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Scale className="h-5 w-5" />
                Expertise légale
              </span>
            </Button>
          </div>

          {/* Trust indicators with icons */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-12">
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center border border-zinc-700/50 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">100% Confidentiel</div>
                <div className="text-xs text-zinc-500">Discrétion absolue</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center border border-zinc-700/50 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">Réponse &lt;24h</div>
                <div className="text-xs text-zinc-500">Intervention rapide</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center border border-zinc-700/50 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">Expert légal FR</div>
                <div className="text-xs text-zinc-500">Cadre juridique strict</div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="pt-16">
            <div className="inline-flex items-center divide-x divide-zinc-800 bg-zinc-900/30 backdrop-blur-xl rounded-2xl border border-zinc-800/50 p-1">
              <div className="px-8 py-4">
                <div className="text-3xl font-bold text-primary mb-1">500k+</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">Contenus supprimés</div>
              </div>
              <div className="px-8 py-4">
                <div className="text-3xl font-bold text-primary mb-1">99.2%</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">Taux de réussite</div>
              </div>
              <div className="px-8 py-4">
                <div className="text-3xl font-bold text-primary mb-1">&lt;24h</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">Délai moyen</div>
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
