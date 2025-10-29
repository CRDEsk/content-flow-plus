import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  FileText, 
  Scale, 
  FileSignature, 
  Award, 
  MessageCircle,
  ArrowRight,
  Zap,
  CheckCircle2,
  Shield,
  Activity,
  BarChart3
} from "lucide-react";
import { useState } from "react";

const NotreSolution = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollMarquee, setScrollMarquee] = useState(0);

  useEffect(() => {
    // SEO optimization for Solution page
    document.title = "Notre Solution | ContentRemovalDesk - Technologie de Protection Digitale";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Découvrez notre solution complète de protection digitale : détection automatique, suppression DMCA, surveillance 24/7, et protection juridique pour créateurs de contenu.");
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollMarquee(prev => {
        if (prev <= -2000) return 0; // Reset to create infinite loop
        return prev - 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const marqueeItems = [
    "Rapide", "Simple", "Discret", "Sécurisé", "Évolutif", "Intelligent", 
    "Fast", "Zéro stress", "Sans effort"
  ];

  const mainFeatures = [
    {
      badge: "Nouveau",
      badgeType: "Fonctionnalité",
      title: "Rapports détaillés en temps réel",
      description: "Ton espace client centralise toutes les fuites détectées. Chaque action – qu'il s'agisse d'un scan, d'un DMCA envoyé ou d'un retrait confirmé – est inscrite dans ton journal de logs directement dans l'application. Tu vois immédiatement quelles fuites sont actives, lesquelles ont été résolues et lesquelles sont critiques. Chaque entrée est horodatée, accompagnée de l'URL et du statut. En un clic, tu peux exporter un rapport complet en PDF, transformant ton tableau de bord en véritable dossier juridique numérique prêt à l'emploi.",
      gradient: "from-primary/20 to-primary/5",
      icon: FileText
    },
    {
      badge: "Nouveau",
      badgeType: "Fonctionnalité",
      title: "Escalades spéciales intégrées",
      description: "L'application intègre un module exclusif d'escalade légale. Depuis ton tableau de bord, tu sélectionnes un site résistant et tu lances une escalade en un seul clic. L'interface affiche un suivi clair et transparent, du lancement à la clôture, avec chaque étape visible en temps réel. Le prix est affiché directement dans l'app et le paiement se fait sans friction. Tu gardes ainsi le contrôle complet de ton processus, avec une visibilité totale sur l'avancement. Content Removal Desk est aujourd'hui la seule application française qui permet de déclencher et suivre de vraies escalades légales directement depuis un dashboard sécurisé.",
      gradient: "from-orange-500/20 to-orange-500/5",
      icon: Scale
    }
  ];

  const features = [
    {
      icon: LayoutDashboard,
      title: "Tableau de bord intuitif",
      description: "Suis en temps réel les contenus supprimés, les escalades en cours et ton Brand Score. Tout est centralisé dans une interface claire et visuelle, pensée pour les créateurs.",
      gradient: "from-blue-500/20 to-blue-500/5"
    },
    {
      icon: BarChart3,
      title: "Rapports détaillés et journaux de scan",
      description: "Chaque fuite détectée est documentée avec l'URL, la date, le statut et l'action entreprise. Ton tableau de bord devient ton journal de preuves : consultable à tout moment et exportable en PDF.",
      gradient: "from-purple-500/20 to-purple-500/5"
    },
    {
      icon: Scale,
      title: "Escalades spéciales intégrées",
      description: "Lance une escalade légale directement depuis ton dashboard quand un site résiste. Suivi en temps réel, paiement intégré, historique détaillé. CRD est la seule application française à proposer ce module exclusif.",
      gradient: "from-red-500/20 to-red-500/5"
    },
    {
      icon: FileSignature,
      title: "Autorisation DMCA sécurisée",
      description: "Signe électroniquement ton mandat DMCA depuis l'app. Plus besoin de paperasse : une signature suffit pour que nous agissions immédiatement en ton nom.",
      gradient: "from-green-500/20 to-green-500/5"
    },
    {
      icon: Award,
      title: "Marque déposée depuis l'app",
      description: "Protège ton nom, logo et image avec nos packs officiels (France, Union Européenne, International). Tout le processus est suivi dans ton espace client, étape par étape.",
      gradient: "from-yellow-500/20 to-yellow-500/5"
    },
    {
      icon: MessageCircle,
      title: "Support intégré 24/7",
      description: "Un ticket, un chat, ou un email : tu choisis. Chaque demande est historisée dans ton compte et tu suis son avancement en direct.",
      gradient: "from-pink-500/20 to-pink-500/5"
    }
  ];

  return (
    <div className="min-h-screen bg-black antialiased">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-32 pb-20">
        {/* Premium gradient background */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full opacity-25 blur-[120px]"
            style={{
              background: `radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.3) 40%, transparent 70%)`,
              transform: `translate(calc(-50% + ${mousePosition.x * 0.02}px), ${mousePosition.y * 0.02}px)`
            }}
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/20">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Tableau client</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="font-display font-bold leading-[1.15] tracking-tight">
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
                  <span className="text-zinc-300">La </span>
                  <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent animate-pulse">
                    première
                  </span>
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mt-3">
                  <span className="text-zinc-300">plateforme </span>
                  <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
                    française
                  </span>
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-6 text-zinc-400">
                  de protection digitale
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-2 text-zinc-400">
                  pour créateurs.
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Scrolling Marquee */}
      <div className="relative overflow-hidden py-8 border-y border-zinc-800/50 bg-zinc-950/50">
        <div 
          className="flex gap-12 whitespace-nowrap"
          style={{ transform: `translateX(${scrollMarquee}px)` }}
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-lg font-semibold text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard Section Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Ton tableau de bord<br />devient ton arme digitale
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto">
            Rapports détaillés, logs complets et escalades intégrées : tout est réuni pour protéger ton contenu en temps réel.
          </p>
        </div>
      </section>

      {/* Main Feature Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-8">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      <div className="flex-1 space-y-6">
                        {/* Badges */}
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 rounded-full bg-primary text-black text-xs font-bold uppercase tracking-wider">
                            {feature.badge}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-300 text-xs font-medium uppercase tracking-wider">
                            {feature.badgeType}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                            {feature.title}
                          </h3>
                          <p className="text-base text-zinc-400 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="relative">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 flex items-center justify-center border border-zinc-700/50 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500">
                          <Icon className="w-12 h-12 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-6 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-zinc-800/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="text-center space-y-8">
            <Button 
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-black font-bold rounded-full px-10 py-6 text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://espace.contentremovaldesk.com/auth?mode=signup" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center gap-3">
                  Effectue un scan gratuit
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
            </Button>
            <p className="text-sm text-zinc-500">Aucune carte bancaire requise</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotreSolution;