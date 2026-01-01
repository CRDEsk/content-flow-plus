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
      {/* Dashboard container - Fixed height, larger */}
      <div className="relative w-full h-[550px] md:h-[650px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ 
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="w-full absolute inset-0 flex items-center justify-center"
          >
            {(() => {
              const slide = slides[currentSlide];
              const Icon = slide.icon;
              const content = slide.content;

              return (
                <div className="w-full h-full px-2 md:px-4">
                  {/* Dashboard Frame - Glass panel with perspective */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, rotateY: -2 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative w-full h-full max-w-2xl mx-auto"
                    style={{
                      perspective: '1000px',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div 
                      className="relative w-full h-full rounded-xl overflow-hidden border border-zinc-800/50"
                      style={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(20px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                        boxShadow: '0 20px 60px 0 rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(59, 130, 246, 0.1), inset 0 0 80px rgba(59, 130, 246, 0.05)',
                        transform: 'perspective(1000px) rotateY(-2deg)',
                      }}
                    >
                      {/* Dashboard Header */}
                      <div className="flex items-center justify-between p-4 md:p-5 border-b border-zinc-800/50 bg-zinc-900/30">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="p-2.5 rounded-lg bg-blue-500/20 border border-blue-500/30 flex-shrink-0">
                            <Icon className="w-5 h-5 text-blue-400" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-sm md:text-base font-semibold text-white truncate">{content.title[language]}</h3>
                            <p className="text-xs text-zinc-400 truncate">{content.subtitle[language].split(' • ')[0]}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                          {content.subtitle[language].split(' • ').slice(1).map((phrase, i) => (
                            <span key={i} className="px-2 py-1 rounded text-[10px] md:text-xs bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium whitespace-nowrap">
                              {phrase}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Dashboard Content */}
                      <div className="p-4 md:p-5 h-[calc(100%-73px)] overflow-hidden flex flex-col">
                        {/* KPI Row */}
                        <div className="grid grid-cols-3 gap-3 mb-4 flex-shrink-0">
                          {content.stats && content.stats.slice(0, 3).map((stat, index) => {
                            const StatIcon = stat.icon;
                            return (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50 flex flex-col"
                              >
                                <div className="flex items-center gap-1.5 mb-2">
                                  {StatIcon && (
                                    <StatIcon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                  )}
                                  <span className="text-[10px] md:text-xs text-zinc-400 truncate">{stat.label[language]}</span>
                                </div>
                                <p className="text-xl md:text-2xl font-bold text-white leading-tight">{stat.value}</p>
                              </motion.div>
                            );
                          })}
                        </div>

                        {/* Table/List View */}
                        <div className="space-y-2 flex-1 overflow-y-auto">
                          {[1, 2, 3, 4].map((row, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + i * 0.05 }}
                              className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/30 border border-zinc-800/30 hover:bg-zinc-900/50 hover:border-zinc-800/50 transition-all"
                            >
                              <div className="flex items-center gap-3 min-w-0 flex-1">
                                <div className="w-2 h-2 rounded-full bg-blue-500/50 flex-shrink-0"></div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-sm font-medium text-white truncate">Créateur {String.fromCharCode(65 + i)}</div>
                                  <div className="text-xs text-zinc-400 truncate">Protection active</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                                <span className="px-2 py-1 rounded text-[10px] md:text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-medium whitespace-nowrap">
                                  Stable
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-600/5 pointer-events-none" />
                    </div>

                    {/* Glow effect behind */}
                    <motion.div
                      animate={{
                        opacity: [0.1, 0.2, 0.1],
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-xl -z-10"
                    />
                  </motion.div>
                </div>
              );
            })()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default AgencyShowcaseSlideshow;

