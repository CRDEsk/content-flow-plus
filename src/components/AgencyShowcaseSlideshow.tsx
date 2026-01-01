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
        fr: "Surveillance • Alertes • Priorités",
        en: "Monitoring • Alerts • Priorities"
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
        fr: "Jusqu'à 100 • Suivi individuel • Risques",
        en: "Up to 100 • Individual tracking • Risks"
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
        fr: "Partenaires spécialisés • Offshore • CDN",
        en: "Specialized partners • Offshore • CDN"
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
        fr: "PDF • Preuves • Statistiques",
        en: "PDF • Proof • Statistics"
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
        fr: "Priorité • Automatisé • 24-48h",
        en: "Priority • Automated • 24-48h"
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
        fr: "Google • Automatisé • Rapide",
        en: "Google • Automated • Fast"
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
        fr: "Logo • Couleurs • Sous-domaine",
        en: "Logo • Colors • Subdomain"
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
        fr: "Temps réel • Fuites • Critiques",
        en: "Real-time • Leaks • Critical"
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
        fr: "24/7 • Contact dédié • < 2h",
        en: "24/7 • Dedicated contact • < 2h"
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
      {/* Integrated slideshow - fixed height container */}
      <div className="relative w-full flex items-center">
        {/* Fixed height container to prevent jumping */}
        <div className="relative w-full h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.95, x: 30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -30 }}
                  transition={{ 
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="w-full absolute inset-0 flex items-center justify-center"
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
                      <div className="w-full px-2">
                        <div className="flex flex-col items-center justify-center h-full space-y-4">
                          {/* Animated Icon - Smaller */}
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ 
                              scale: 1, 
                              rotate: 0,
                              y: [0, -8, 0]
                            }}
                            transition={{ 
                              scale: { duration: 0.5, ease: "easeOut" },
                              rotate: { duration: 0.5, ease: "easeOut" },
                              y: { 
                                duration: 2.5, 
                                repeat: Infinity, 
                                ease: "easeInOut",
                                delay: 0.5
                              }
                            }}
                            className="relative mb-2"
                          >
                            <div className="p-4 md:p-5 rounded-xl bg-gradient-to-br from-blue-500/30 via-blue-600/20 to-blue-700/10 border-2 border-blue-500/40 shadow-xl shadow-blue-500/20">
                              <Icon className="w-12 h-12 md:w-14 md:h-14 text-blue-400" />
                            </div>
                            {/* Glow effect */}
                            <motion.div
                              animate={{
                                opacity: [0.2, 0.5, 0.2],
                                scale: [1, 1.15, 1],
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="absolute inset-0 bg-blue-500/15 blur-lg rounded-xl -z-10"
                            />
                          </motion.div>
                          
                          {/* Key Words - Compact */}
                          <div className="text-center space-y-2">
                            <motion.h2
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                              className="text-2xl md:text-3xl font-bold text-white"
                            >
                              {content.title[language]}
                            </motion.h2>
                            
                            {/* Highlighted key phrases - Compact */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.4 }}
                              className="flex flex-wrap justify-center gap-2 mt-3"
                            >
                              {content.subtitle[language].split(' • ').map((phrase, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ 
                                    duration: 0.25, 
                                    delay: 0.5 + i * 0.08,
                                    type: "spring",
                                    stiffness: 300
                                  }}
                                  className="px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs md:text-sm font-medium"
                                >
                                  {phrase}
                                </motion.span>
                              ))}
                            </motion.div>

                            {/* Visual Stats - Compact */}
                            {content.stats && (
                              <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4"
                              >
                                {content.stats.slice(0, 3).map((stat, index) => {
                                  const StatIcon = stat.icon;
                                  return (
                                    <motion.div
                                      key={index}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ 
                                        duration: 0.3, 
                                        delay: 0.7 + index * 0.1,
                                        type: "spring",
                                        stiffness: 300
                                      }}
                                      whileHover={{ scale: 1.05, y: -3 }}
                                      className="flex flex-col items-center gap-1.5 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/50 hover:border-blue-500/50 transition-all duration-300"
                                    >
                                      {StatIcon && (
                                        <StatIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                                      )}
                                      <p className="text-xl md:text-2xl font-bold text-white">{stat.value}</p>
                                      <span className="text-[10px] md:text-xs text-zinc-400 text-center max-w-[70px] leading-tight">
                                        {stat.label[language]}
                                      </span>
                                    </motion.div>
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

