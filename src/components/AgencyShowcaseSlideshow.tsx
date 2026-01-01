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
  Clock
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
  autoPlay?: boolean;
  slideDuration?: number;
  onSlideChange?: (slideIndex: number) => void;
  className?: string;
}

export function AgencyShowcaseSlideshow({
  autoPlay = true,
  slideDuration = 10000,
  onSlideChange,
  className = ''
}: AgencyShowcaseSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying] = useState(autoPlay);
  const language = 'fr'; // Fixed to French only

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


  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;
  const slideContent = currentSlideData.content;
  const isEmphasized = currentSlideData.emphasis;

  return (
    <div className={`w-full bg-transparent relative overflow-hidden ${className}`}>
      {/* Main content - seamless and minimal */}
      <div className="relative z-10 w-full flex flex-col">

        {/* Slide content - minimal and embedded */}
        <div className="flex items-center justify-center p-4 md:p-8 py-12 md:py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="max-w-6xl w-full"
            >
              <div className="bg-transparent p-8 md:p-12">
                {/* Icon and title - minimal */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <Icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium text-zinc-500">
                        {currentSlide + 1} / {slides.length}
                      </span>
                      <div className="flex-1 h-1 bg-zinc-800/30 rounded-full overflow-hidden">
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
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-semibold uppercase tracking-wide">
                          <AlertTriangle className="w-3 h-3" />
                          Spécialité CRD
                        </span>
                      </div>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight text-white">
                      {slideContent.title[language]}
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-300">
                      {slideContent.subtitle[language]}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-zinc-300 mb-8 leading-relaxed max-w-4xl">
                  {slideContent.description[language]}
                </p>

                {/* Stats grid - minimal */}
                {slideContent.stats && (
                  <div className={`grid ${isEmphasized ? 'grid-cols-1 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-3'} gap-4`}>
                    {slideContent.stats.map((stat, index) => {
                      const StatIcon = stat.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 rounded-lg bg-zinc-900/30 border border-zinc-800/50 hover:border-blue-500/30 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            {StatIcon && (
                              <StatIcon className="w-5 h-5 text-blue-400" />
                            )}
                            <span className="text-xs font-medium text-zinc-400">
                              {stat.label[language]}
                            </span>
                          </div>
                          <p className="text-xl md:text-2xl font-bold text-white">{stat.value}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal slide indicators only */}
        <div className="pb-8 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-blue-500 w-8'
                  : 'bg-zinc-800 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AgencyShowcaseSlideshow;

