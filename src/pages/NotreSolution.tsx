import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
  BarChart3,
  Loader2
} from "lucide-react";
import { useState } from "react";
import { trackButtonClick } from "@/lib/analytics";
import { AnimatePresence } from "framer-motion";

const NotreSolution = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollMarquee, setScrollMarquee] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);

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
      description: "Ton espace client centralise toutes les fuites détectées. Chaque action qu'il s'agisse d'un scan, d'un DMCA envoyé ou d'un retrait confirmé est inscrite dans ton journal de logs directement dans l'application. Tu vois immédiatement quelles fuites sont actives, lesquelles ont été résolues et lesquelles sont critiques. Chaque entrée est horodatée, accompagnée de l'URL et du statut. En un clic, tu peux exporter un rapport complet en PDF, transformant ton tableau de bord en véritable dossier juridique numérique prêt à l'emploi.",
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
    <div className="min-h-screen bg-black text-white antialiased">
      <Header />
      
      {/* Smooth transition overlay */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center space-y-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 mx-auto border-4 border-primary/30 border-t-primary rounded-full"
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-semibold text-foreground"
              >
                Connexion au tableau de bord...
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm text-zinc-400"
              >
                Redirection en cours
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Unique Design */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-20">
        {/* Animated gradient background - different pattern */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 right-1/4 w-[800px] h-[800px] rounded-full opacity-25 blur-[100px]"
            style={{
              background: `radial-gradient(circle, hsl(var(--primary) / 0.8) 0%, hsl(var(--primary) / 0.2) 50%, transparent 80%)`,
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
          <div 
            className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] rounded-full opacity-20 blur-[90px]"
            style={{
              background: `radial-gradient(circle, hsl(var(--primary) / 0.6) 0%, transparent 70%)`,
              transform: `translate(-${mousePosition.x * 0.015}px, -${mousePosition.y * 0.015}px)`
            }}
          />
          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left side - Content */}
            <div className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 backdrop-blur-xl border border-primary/30 shadow-lg shadow-primary/10"
              >
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm font-semibold text-primary">Tableau client</span>
              </motion.div>

              {/* Headline - Different layout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4 sm:space-y-6"
              >
                <h1 className="font-display font-bold leading-[1.1] tracking-tight">
                  <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                    <span className="text-foreground">La première</span>
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-2">
                    <span className="text-primary">plateforme française</span>
                  </span>
                  <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-3 sm:mt-4 text-zinc-300">
                    de protection digitale
                  </span>
                  <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-1 text-zinc-300">
                    pour créateurs.
                  </span>
                </h1>
              </motion.div>

              {/* Description - More compact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3 max-w-2xl mx-auto lg:mx-0"
              >
                <p className="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed">
                  Une solution complète qui combine <span className="text-primary font-semibold">détection automatique</span>, <span className="text-foreground font-semibold">suppression DMCA</span> et <span className="text-primary font-semibold">surveillance 24/7</span>.
                </p>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  Ton tableau de bord centralise toutes les fuites détectées, chaque action est documentée et tu peux lancer des escalades légales en un clic.
                </p>
              </motion.div>

              {/* CTA - Single prominent button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-2"
              >
                <Button 
                  size="lg"
                  disabled={isNavigating}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavigating(true);
                    
                    // Track the click
                    trackButtonClick('Accéder au tableau de bord', 'NotreSolution');
                    
                    // Add tracking parameters to URL
                    const dashboardUrl = new URL('https://espace.contentremovaldesk.com/auth');
                    dashboardUrl.searchParams.set('mode', 'signup');
                    dashboardUrl.searchParams.set('utm_source', 'contentremovaldesk');
                    dashboardUrl.searchParams.set('utm_medium', 'website');
                    dashboardUrl.searchParams.set('utm_campaign', 'dashboard_access');
                    dashboardUrl.searchParams.set('utm_content', 'notre_solution_banner');
                    dashboardUrl.searchParams.set('ref', window.location.href);
                    
                    // Smooth transition with delay
                    setTimeout(() => {
                      window.location.href = dashboardUrl.toString();
                    }, 800);
                  }}
                  className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-black font-semibold rounded-full px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 text-base sm:text-lg lg:text-xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto disabled:opacity-90 disabled:cursor-wait"
                >
                  <span className="relative z-10 flex items-center gap-3 justify-center">
                    {isNavigating ? (
                      <>
                        <Loader2 className="h-5 w-5 sm:h-6 sm:w-6 animate-spin" />
                        <span>Connexion...</span>
                      </>
                    ) : (
                      <>
                        <LayoutDashboard className="h-5 w-5 sm:h-6 sm:w-6" />
                        Accéder au tableau de bord
                        <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  {!isNavigating && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  )}
                </Button>
              </motion.div>
            </div>

            {/* Right side - Feature highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 w-full lg:w-auto"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {[
                  { icon: Shield, title: "Protection totale", desc: "Surveillance 24/7" },
                  { icon: Activity, title: "Rapports temps réel", desc: "Suivi détaillé" },
                  { icon: Scale, title: "Escalades intégrées", desc: "Action légale directe" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="group rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 backdrop-blur-xl p-5 sm:p-6 border border-zinc-800/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/30 group-hover:border-primary/50 transition-all duration-300 flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                          <p className="text-xs sm:text-sm text-zinc-400">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Ton tableau de bord<br className="hidden sm:block" /> devient ton arme digitale
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto px-4">
            Rapports détaillés, logs complets et escalades intégrées : tout est réuni pour protéger ton contenu en temps réel.
          </p>
        </div>
      </section>

      {/* Main Feature Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-6 sm:space-y-8">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 p-5 sm:p-6 lg:p-8 xl:p-12">
                    <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 lg:gap-8 items-start">
                      <div className="flex-1 space-y-3 sm:space-y-4 lg:space-y-6 w-full">
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <span className="px-2.5 sm:px-3 py-1 rounded-full bg-primary text-black text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                            {feature.badge}
                          </span>
                          <span className="px-2.5 sm:px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-300 text-[10px] sm:text-xs font-medium uppercase tracking-wider">
                            {feature.badgeType}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground leading-tight">
                            {feature.title}
                          </h3>
                          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="relative self-center sm:self-start flex-shrink-0">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 flex items-center justify-center border border-zinc-700/50 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500">
                          <Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />
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

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8">
            <Button 
              size="lg"
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-black font-bold rounded-full px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href="https://scan.contentremovaldesk.com/scan">
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  Effectue un scan gratuit
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
            </Button>
            <p className="text-xs sm:text-sm text-zinc-500">Aucune carte bancaire requise</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotreSolution;