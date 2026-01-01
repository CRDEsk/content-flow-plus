import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Shield, 
  BarChart3, 
  FileText, 
  Zap, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp,
  Palette,
  Globe,
  Search,
  Download,
  Scale,
  Clock,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';

interface SlideContent {
  title: { fr: string; en: string };
  subtitle: { fr: string; en: string };
  description: { fr: string; en: string };
  stats?: { label: { fr: string; en: string }; value: string; icon?: any }[];
}

interface Slide {
  id: number;
  content: SlideContent;
  icon: any;
  color: string;
  bgGradient: string;
  emphasis?: boolean;
}

const slides: Slide[] = [
  {
    id: 1,
    content: {
      title: {
        fr: "Tableau de bord centralisé",
        en: "Centralized Dashboard"
      },
      subtitle: {
        fr: "Gérez tous vos créateurs en un seul endroit",
        en: "Manage all your creators in one place"
      },
      description: {
        fr: "Vue d'ensemble complète de tous vos modèles, statistiques agrégées et métriques de protection en temps réel.",
        en: "Complete overview of all your models, aggregated statistics and real-time protection metrics."
      },
      stats: [
        { label: { fr: "Modèles actifs", en: "Active Models" }, value: "47", icon: Users },
        { label: { fr: "Fuites détectées (30j)", en: "Leaks Detected (30d)" }, value: "156", icon: AlertTriangle },
        { label: { fr: "Contenu supprimé", en: "Content Removed" }, value: "1,247", icon: CheckCircle2 },
        { label: { fr: "En cours", en: "In Progress" }, value: "23", icon: Clock },
      ]
    },
    icon: BarChart3,
    color: "text-blue-400",
    bgGradient: "from-blue-500/20 via-blue-600/20 to-blue-700/20"
  },
  {
    id: 2,
    content: {
      title: {
        fr: "Indice de santé de protection",
        en: "Protection Health Index"
      },
      subtitle: {
        fr: "Surveillance en temps réel",
        en: "Real-time monitoring"
      },
      description: {
        fr: "Score de protection automatique qui indique l'état de santé global de vos créateurs avec alertes prioritaires.",
        en: "Automatic protection score indicating the overall health status of your creators with priority alerts."
      },
      stats: [
        { label: { fr: "Statut", en: "Status" }, value: "Stable", icon: CheckCircle2 },
        { label: { fr: "Escalades actives", en: "Active Escalations" }, value: "2", icon: TrendingUp },
        { label: { fr: "Cas critiques", en: "Critical Cases" }, value: "0", icon: AlertTriangle },
      ]
    },
    icon: Shield,
    color: "text-blue-400",
    bgGradient: "from-blue-500/20 via-indigo-500/20 to-blue-600/20"
  },
  {
    id: 3,
    content: {
      title: {
        fr: "Gestion multi-créateurs",
        en: "Multi-Creator Management"
      },
      subtitle: {
        fr: "Ajoutez et gérez jusqu'à 100 créateurs",
        en: "Add and manage up to 100 creators"
      },
      description: {
        fr: "Ajout simplifié, suivi individuel par créateur avec niveaux de risque, statuts de protection et alertes personnalisées.",
        en: "Simplified addition, individual tracking per creator with risk levels, protection statuses and personalized alerts."
      },
      stats: [
        { label: { fr: "Niveau faible", en: "Low Risk" }, value: "32 créateurs", icon: CheckCircle2 },
        { label: { fr: "Niveau moyen", en: "Medium Risk" }, value: "12 créateurs", icon: Clock },
        { label: { fr: "Niveau élevé", en: "High Risk" }, value: "3 créateurs", icon: AlertTriangle },
      ]
    },
    icon: Users,
    color: "text-blue-400",
    bgGradient: "from-blue-500/20 via-blue-400/20 to-indigo-500/20"
  },
  {
    id: 4,
    content: {
      title: {
        fr: "Escalades juridiques structurées",
        en: "Structured Legal Escalations"
      },
      subtitle: {
        fr: "Pour les cas complexes",
        en: "For complex cases"
      },
      description: {
        fr: "Système d'escalade professionnel via des procédures encadrées et des partenaires spécialisés. Intervention pour registrars offshore, hosts récalcitrants, plateformes complexes et CDN.",
        en: "Professional escalation system via structured procedures and specialized partners. Intervention for offshore registrars, uncooperative hosts, complex platforms and CDNs."
      },
      stats: [
        { label: { fr: "Escalades en cours", en: "Active Escalations" }, value: "8", icon: Scale },
        { label: { fr: "Terminées avec succès", en: "Completed Successfully" }, value: "247", icon: CheckCircle2 },
        { label: { fr: "Taux de succès", en: "Success Rate" }, value: "94%", icon: TrendingUp },
        { label: { fr: "Plateformes complexes", en: "Complex Platforms" }, value: "Toutes", icon: Globe },
      ]
    },
    icon: Scale,
    color: "text-blue-400",
    bgGradient: "from-blue-500/30 via-blue-600/30 to-indigo-500/30",
    emphasis: true
  },
  {
    id: 5,
    content: {
      title: {
        fr: "Rapports consolidés",
        en: "Consolidated Reports"
      },
      subtitle: {
        fr: "Preuves et statistiques détaillées",
        en: "Detailed proof and statistics"
      },
      description: {
        fr: "Générez des rapports professionnels en PDF avec toutes les preuves, statistiques et analyses par créateur ou globalement.",
        en: "Generate professional PDF reports with all proof, statistics and analyses per creator or globally."
      },
      stats: [
        { label: { fr: "Rapports mensuels", en: "Monthly Reports" }, value: "24", icon: FileText },
        { label: { fr: "Rapports créateurs", en: "Creator Reports" }, value: "47", icon: Download },
        { label: { fr: "Export PDF", en: "PDF Export" }, value: "Disponible", icon: CheckCircle2 },
      ]
    },
    icon: FileText,
    color: "text-blue-400",
    bgGradient: "from-blue-500/20 via-indigo-500/20 to-blue-600/20"
  },
  {
    id: 6,
    content: {
      title: {
        fr: "Suppression prioritaire",
        en: "Priority Removal"
      },
      subtitle: {
        fr: "Vos créateurs passent en première ligne",
        en: "Your creators get priority treatment"
      },
      description: {
        fr: "Traitement accéléré et prioritaire pour tous vos modèles avec retraits automatisés et suivi en temps réel.",
        en: "Accelerated and priority processing for all your models with automated removals and real-time tracking."
      },
      stats: [
        { label: { fr: "Délai moyen", en: "Average Delay" }, value: "24-48h", icon: Clock },
        { label: { fr: "Taux de succès", en: "Success Rate" }, value: "98%", icon: CheckCircle2 },
        { label: { fr: "Traitements/mois", en: "Processed/Month" }, value: "1,200+", icon: TrendingUp },
      ]
    },
    icon: Zap,
    color: "text-blue-400",
    bgGradient: "from-blue-500/20 via-blue-400/20 to-indigo-500/20"
  },
  {
    id: 7,
    content: {
      title: {
        fr: "Désindexation Google",
        en: "Google De-indexing"
      },
      subtitle: {
        fr: "Supprimez les références dans les moteurs",
        en: "Remove references from search engines"
      },
      description: {
        fr: "Système automatisé de désindexation Google pour retirer les contenus des résultats de recherche rapidement.",
        en: "Automated Google de-indexing system to remove content from search results quickly."
      },
      stats: [
        { label: { fr: "Requêtes traitées", en: "Requests Processed" }, value: "892", icon: FileText },
        { label: { fr: "Succès", en: "Success" }, value: "867", icon: CheckCircle2 },
        { label: { fr: "En attente", en: "Pending" }, value: "25", icon: Clock },
      ]
    },
    icon: Search,
    color: "text-blue-400",
    bgGradient: "from-blue-500/20 via-indigo-500/20 to-blue-600/20"
  },
  {
    id: 8,
    content: {
      title: {
        fr: "Branding personnalisé",
        en: "Custom Branding"
      },
      subtitle: {
        fr: "Marque blanche complète",
        en: "Complete white-label"
      },
      description: {
        fr: "Personnalisez votre interface avec logo, couleurs, sous-domaine dédié et thème pour une expérience sur-mesure.",
        en: "Customize your interface with logo, colors, dedicated subdomain and theme for a tailored experience."
      },
      stats: [
        { label: { fr: "Logo personnalisé", en: "Custom Logo" }, value: "✓", icon: CheckCircle2 },
        { label: { fr: "Couleurs custom", en: "Custom Colors" }, value: "✓", icon: CheckCircle2 },
        { label: { fr: "Sous-domaine", en: "Subdomain" }, value: "votre-agence.crd.fr", icon: Globe },
      ]
    },
    icon: Palette,
    color: "text-blue-400",
    bgGradient: "from-blue-500/20 via-blue-400/20 to-indigo-500/20"
  },
  {
    id: 9,
    content: {
      title: {
        fr: "Alertes intelligentes",
        en: "Smart Alerts"
      },
      subtitle: {
        fr: "Soyez informés en temps réel",
        en: "Stay informed in real-time"
      },
      description: {
        fr: "Système d'alertes prioritaire qui vous notifie instantanément des nouvelles fuites, escalades et problèmes critiques.",
        en: "Priority alert system that instantly notifies you of new leaks, escalations and critical issues."
      },
      stats: [
        { label: { fr: "Alertes haute priorité", en: "High Priority Alerts" }, value: "3", icon: AlertTriangle },
        { label: { fr: "Alertes moyennes", en: "Medium Alerts" }, value: "7", icon: Clock },
        { label: { fr: "Tout sous contrôle", en: "All Under Control" }, value: "✓", icon: CheckCircle2 },
      ]
    },
    icon: AlertTriangle,
    color: "text-blue-400",
    bgGradient: "from-blue-500/20 via-blue-400/20 to-indigo-500/20"
  },
  {
    id: 10,
    content: {
      title: {
        fr: "Support dédié",
        en: "Dedicated Support"
      },
      subtitle: {
        fr: "Votre équipe, notre priorité",
        en: "Your team, our priority"
      },
      description: {
        fr: "Contact unique, réponses rapides, escalades prioritaires et support 24/7 pour votre agence.",
        en: "Single point of contact, quick responses, priority escalations and 24/7 support for your agency."
      },
      stats: [
        { label: { fr: "Temps de réponse", en: "Response Time" }, value: "< 2h", icon: Clock },
        { label: { fr: "Support 24/7", en: "24/7 Support" }, value: "✓", icon: CheckCircle2 },
        { label: { fr: "Contact dédié", en: "Dedicated Contact" }, value: "✓", icon: Users },
      ]
    },
    icon: Users,
    color: "text-blue-400",
    bgGradient: "from-blue-500/20 via-indigo-500/20 to-blue-600/20"
  }
];

interface AgencyShowcaseSlideshowProps {
  initialLanguage?: 'fr' | 'en';
  autoPlay?: boolean;
  slideDuration?: number;
  onSlideChange?: (slideIndex: number) => void;
  className?: string;
}

export function AgencyShowcaseSlideshow({
  initialLanguage = 'fr',
  autoPlay = true,
  slideDuration = 6000,
  onSlideChange,
  className = ''
}: AgencyShowcaseSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [language, setLanguage] = useState<'fr' | 'en'>(initialLanguage);

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % slides.length;
        onSlideChange?.(next);
        return next;
      });
    }, slideDuration);

    return () => clearInterval(interval);
  }, [isPlaying, slideDuration, onSlideChange]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    onSlideChange?.(index);
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length;
    setCurrentSlide(next);
    onSlideChange?.(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prev);
    onSlideChange?.(prev);
  };

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;
  const slideContent = currentSlideData.content;
  const isEmphasized = currentSlideData.emphasis;

  return (
    <div className={`min-h-screen w-full bg-black relative overflow-hidden ${className}`}>
      {/* Background gradient - blue theme */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.bgGradient} transition-all duration-1000 ${isEmphasized ? 'opacity-100' : 'opacity-60'}`} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(96, 165, 250, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(96, 165, 250, 1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Language Toggle - Top Right */}
        <div className="absolute top-6 right-6 z-20">
          <div className="flex items-center gap-1 bg-black/80 backdrop-blur-sm border border-blue-500/30 rounded-lg p-1">
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                language === 'fr'
                  ? 'bg-blue-500 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                language === 'en'
                  ? 'bg-blue-500 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Slide content */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8 pt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="max-w-6xl w-full"
            >
              <div className={`bg-black/90 backdrop-blur-xl rounded-3xl border-2 ${isEmphasized ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20' : 'border-blue-500/30 shadow-2xl'} p-12 md:p-16`}>
                {/* Icon and title */}
                <div className="flex items-start gap-8 mb-10">
                  <div className={`p-5 rounded-2xl bg-blue-500/20 border border-blue-500/30 ${isEmphasized ? 'scale-110' : ''} transition-transform`}>
                    <Icon className={`w-16 h-16 ${currentSlideData.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-medium text-zinc-400">
                        {currentSlide + 1} / {slides.length}
                      </span>
                      <div className="flex-1 h-1.5 bg-zinc-800/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-blue-500"
                          initial={{ width: 0 }}
                          animate={{ width: isPlaying ? '100%' : '0%' }}
                          transition={{ duration: slideDuration / 1000, ease: "linear" }}
                        />
                      </div>
                    </div>
                    {isEmphasized && (
                      <div className="mb-3">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-xs font-semibold uppercase tracking-wide">
                          <AlertTriangle className="w-3 h-3" />
                          {language === 'fr' ? 'Spécialité CRD' : 'CRD Specialty'}
                        </span>
                      </div>
                    )}
                    <h2 className={`${isEmphasized ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'} font-bold mb-4 leading-tight text-white`}>
                      {slideContent.title[language]}
                    </h2>
                    <p className="text-2xl text-zinc-300">
                      {slideContent.subtitle[language]}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className={`${isEmphasized ? 'text-xl' : 'text-lg'} text-zinc-200 mb-10 leading-relaxed max-w-4xl`}>
                  {slideContent.description[language]}
                </p>

                {/* Stats grid */}
                {slideContent.stats && (
                  <div className={`grid ${isEmphasized ? 'grid-cols-1 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-3'} gap-4 mt-10`}>
                    {slideContent.stats.map((stat, index) => {
                      const StatIcon = stat.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-5 rounded-xl bg-black/60 border border-blue-500/30 backdrop-blur-sm hover:bg-black/80 transition-colors"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            {StatIcon && (
                              <StatIcon className="w-6 h-6 text-blue-400" />
                            )}
                            <span className="text-sm font-medium text-zinc-400">
                              {stat.label[language]}
                            </span>
                          </div>
                          <p className={`${isEmphasized ? 'text-3xl' : 'text-2xl'} font-bold text-white`}>{stat.value}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="p-6 flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center hover:bg-black/70 hover:border-blue-500/50 transition-colors text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Slide indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-blue-500 w-8'
                    : 'bg-zinc-700 hover:bg-zinc-600 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center hover:bg-black/70 hover:border-blue-500/50 transition-colors text-white"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center hover:bg-black/70 hover:border-blue-500/50 transition-colors text-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Keyboard navigation */}
      <div
        className="absolute inset-0"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') prevSlide();
          if (e.key === 'ArrowRight') nextSlide();
          if (e.key === ' ') {
            e.preventDefault();
            setIsPlaying(!isPlaying);
          }
        }}
      />
    </div>
  );
}

export default AgencyShowcaseSlideshow;

