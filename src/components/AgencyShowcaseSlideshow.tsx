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
  Sparkles
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
  slideDuration = 5000,
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

  // Helper to get slide index with wrapping
  const getSlideIndex = (offset: number) => {
    return (currentSlide + offset + slides.length) % slides.length;
  };

  return (
    <div className={`w-full relative ${className}`}>
      {/* Integrated slideshow - no outer card, just content */}
      <div className="relative w-full">
        {/* Content */}
        <div className="relative py-4 md:py-6 min-h-[350px] md:min-h-[400px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="w-full"
                  style={{
                    transform: 'translate3d(0, 0, 0)',
                    WebkitTransform: 'translate3d(0, 0, 0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  } as React.CSSProperties}
                >
                  {(() => {
                    const slide = slides[currentSlide];
                    const Icon = slide.icon;
                    const content = slide.content;
                    const isEmphasized = slide.emphasis;

                    return (
                      <div className="max-w-6xl mx-auto px-6 md:px-8">
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
                          {/* Icon on left - subtle and integrated */}
                          <div className="flex-shrink-0">
                            <motion.div
                              initial={{ scale: 0.9, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.4 }}
                              className="relative"
                            >
                              <div className="p-6 md:p-7 rounded-2xl bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-blue-700/5 border border-blue-500/30 shadow-lg">
                                <Icon className="w-16 h-16 md:w-18 md:h-18 text-blue-400" />
                              </div>
                            </motion.div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 w-full text-center lg:text-left">
                            {/* Badge - subtle */}
                            {isEmphasized && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className="mb-3 flex justify-center lg:justify-start"
                              >
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-xs font-semibold uppercase tracking-wide">
                                  <AlertTriangle className="w-3.5 h-3.5" />
                                  Spécialité CRD
                                </span>
                              </motion.div>
                            )}
                            
                            {/* Title and subtitle - matches hero style */}
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.1 }}
                            >
                              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight text-white">
                                {content.title[language]}
                              </h2>
                              <p className="text-lg md:text-xl text-zinc-300 mb-4">
                                {content.subtitle[language]}
                              </p>
                            </motion.div>

                            {/* Description - subtle */}
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                              className="text-sm md:text-base text-zinc-400 mb-6 leading-relaxed max-w-3xl mx-auto lg:mx-0"
                            >
                              {content.description[language]}
                            </motion.p>

                            {/* Stats grid - compact */}
                            {content.stats && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                className={`grid ${isEmphasized ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-3'} gap-3 md:gap-4`}
                              >
                                {content.stats.map((stat, index) => {
                                  const StatIcon = stat.icon;
                                  return (
                                    <div
                                      key={index}
                                      className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/50 hover:border-blue-500/40 transition-all duration-300 group"
                                    >
                                      <div className="flex items-center gap-2 mb-2">
                                        {StatIcon && (
                                          <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                            <StatIcon className="w-4 h-4 text-blue-400" />
                                          </div>
                                        )}
                                        <span className="text-xs font-medium text-zinc-400">
                                          {stat.label[language]}
                                        </span>
                                      </div>
                                      <p className="text-xl md:text-2xl font-bold text-white">{stat.value}</p>
                                    </div>
                                  );
                                })}
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default AgencyShowcaseSlideshow;

