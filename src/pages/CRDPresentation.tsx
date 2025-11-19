import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import caseStudy2 from "@/assets/case-study-2.png";
import caseStudy4 from "@/assets/case-study-4.png";
import caseStudy5 from "@/assets/case-study-5.png";
import {
  Shield,
  Users,
  Video,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  Image,
  Search,
  FileWarning,
  Zap,
  CheckCircle2,
  Globe,
  Lock,
  BarChart3,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  Mail,
  QrCode,
  Scan,
  Eye,
  FileCheck,
  Scale,
  Clock,
  Target,
  Crown,
  Building2,
  UserCheck,
  Rocket,
  Award,
  Upload,
  Bell,
  Phone,
  Calendar,
  X,
  Code,
  Gavel,
  FileText,
  Briefcase,
} from "lucide-react";

const CRDPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 19;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "Home") {
        setCurrentSlide(0);
      } else if (e.key === "End") {
        setCurrentSlide(totalSlides - 1);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const slideChange = (newIndex: number) => {
    setCurrentSlide(newIndex);
  };

  // Slide variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {/* Navigation dots */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => slideChange(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-[#E5C268]"
                : "w-2 bg-zinc-700 hover:bg-zinc-600"
            }`}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/50 text-[#E5C268] hover:bg-zinc-900/70 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Slide précédente"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/50 text-[#E5C268] hover:bg-zinc-900/70 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Slide suivante"
      >
        <ArrowRight className="w-6 h-6" />
      </button>

      {/* Slide counter */}
      <div className="fixed top-8 right-8 z-50 text-zinc-400 text-sm font-mono">
        {currentSlide + 1} / {totalSlides}
      </div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 flex items-center justify-center p-8 sm:p-12 lg:p-16"
        >
          {/* Slide 0: Title Slide */}
          {currentSlide === 0 && (
            <div className="w-full max-w-6xl mx-auto text-center space-y-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-12"
              >
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 border border-[#E5C268]/30 mb-8">
                  <Shield className="w-16 h-16 text-[#E5C268]" />
                </div>
              </motion.div>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Content Removal Desk
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl sm:text-2xl lg:text-3xl text-[#E5C268] mb-4"
              >
                Agence Legal-Tech Française
              </motion.p>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto"
              >
                Protection numérique, suppression de fuites, escalades légales.
              </motion.p>
            </div>
          )}

          {/* Slide 1: Qui Nous Protégeons */}
          {currentSlide === 1 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Qui Nous Protégeons
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { icon: Video, label: "Créateurs MYM", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                  { icon: TrendingUp, label: "Créateurs OnlyFans", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                  { icon: Users, label: "Influenceurs", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                  { icon: Building2, label: "Agences de contenu", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                  { icon: Image, label: "Modèles webcam", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/30 transition-all duration-300"
                    >
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} border border-[#E5C268]/30 flex items-center justify-center`}>
                        <Icon className="w-8 h-8 text-[#E5C268]" />
                      </div>
                      <p className="text-white text-center text-lg font-medium">{item.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 2: Le Problème */}
          {currentSlide === 2 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Le Problème
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: AlertTriangle,
                    title: "Fuites Incontrôlées",
                    description: "Vos contenus se répandent sur des centaines de sites sans votre permission",
                  },
                  {
                    icon: DollarSign,
                    title: "Pertes Financières",
                    description: "Chaque fuite représente des milliers d'euros de revenus perdus",
                  },
                  {
                    icon: Search,
                    title: "Recherches Impossible",
                    description: "Trouver et supprimer manuellement est chronophage et inefficace",
                  },
                  {
                    icon: Scale,
                    title: "Démarches Légales Complexes",
                    description: "Les procédures DMCA et légales sont techniques et longues",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.15 }}
                      className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50"
                    >
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/30 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-red-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-zinc-400 text-lg">{item.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 3: Notre Solution */}
          {currentSlide === 3 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Notre Solution
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Scan,
                    title: "Scan Automatique",
                    description: "Notre IA scanne 500M+ de pages web quotidiennement",
                  },
                  {
                    icon: Zap,
                    title: "Suppression Rapide",
                    description: "90% des contenus retirés en 24-48h via DMCA",
                  },
                  {
                    icon: Gavel,
                    title: "Escalade Légale",
                    description: "Réseau d'avocats dans 15 juridictions pour les cas complexes",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.15 }}
                      className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50"
                    >
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 border border-[#E5C268]/30 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-[#E5C268]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-zinc-400 text-lg">{item.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 4: Notre Méthodologie */}
          {currentSlide === 4 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Notre Méthodologie
              </motion.h2>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Scan & Détection",
                    description: "IA propriétaire + recherche inversée d'images",
                  },
                  {
                    step: "2",
                    title: "Signalement DMCA",
                    description: "Envoi automatique aux hébergeurs et moteurs de recherche",
                  },
                  {
                    step: "3",
                    title: "Suivi & Vérification",
                    description: "Monitoring continu pour vérifier les suppressions",
                  },
                  {
                    step: "4",
                    title: "Escalade Légale",
                    description: "Si refus: procédures judiciaires avec notre réseau d'avocats",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.15 }}
                    className="flex items-start gap-6 p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 border border-[#E5C268]/30 flex items-center justify-center">
                      <span className="text-3xl font-bold text-[#E5C268]">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-zinc-400 text-lg">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 5: Agent Dédié */}
          {currentSlide === 5 && (
            <div className="w-full max-w-5xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Un Agent Dédié à Votre Service
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50"
                >
                  <UserCheck className="w-12 h-12 text-[#E5C268] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Contact Unique</h3>
                  <ul className="space-y-3 text-zinc-400 text-lg">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>Un agent dédié qui connaît votre dossier</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>Disponible par téléphone, email, WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>Réponse sous 2h en moyenne</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50"
                >
                  <Bell className="w-12 h-12 text-[#E5C268] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Suivi Proactif</h3>
                  <ul className="space-y-3 text-zinc-400 text-lg">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>Alertes en temps réel sur nouvelles fuites</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>Rapports hebdomadaires détaillés</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>Conseils personnalisés de prévention</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          )}

          {/* Slide 6: Réseau Légal */}
          {currentSlide === 6 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Notre Réseau Légal International
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { country: "France", flag: "🇫🇷", specialties: ["CNIL", "INPI", "EUIPO"] },
                  { country: "USA", flag: "🇺🇸", specialties: ["DMCA", "Copyright", "Federal Court"] },
                  { country: "Pays-Bas", flag: "🇳🇱", specialties: ["Hébergeurs", "EU Data Law"] },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.15 }}
                    className="p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50"
                  >
                    <div className="text-5xl mb-4 text-center">{item.flag}</div>
                    <h3 className="text-2xl font-bold text-white mb-3 text-center">{item.country}</h3>
                    <ul className="space-y-2">
                      {item.specialties.map((specialty, i) => (
                        <li key={i} className="text-zinc-400 text-center">• {specialty}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-zinc-400 text-lg"
              >
                + 12 autres juridictions (UK, Allemagne, Canada, Australie, Japon, etc.)
              </motion.p>
            </div>
          )}

          {/* Slide 7: Outils Propriétaires */}
          {currentSlide === 7 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Nos Outils Propriétaires
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50"
                >
                  <Code className="w-12 h-12 text-[#E5C268] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Scanner IA</h3>
                  <ul className="space-y-3 text-zinc-400 text-lg">
                    <li>• Analyse 500M+ pages/jour</li>
                    <li>• Reconnaissance faciale + biométrie</li>
                    <li>• Recherche inversée d'images</li>
                    <li>• Détection de contenus modifiés</li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50"
                >
                  <BarChart3 className="w-12 h-12 text-[#E5C268] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Dashboard Client</h3>
                  <ul className="space-y-3 text-zinc-400 text-lg">
                    <li>• Suivi en temps réel des fuites</li>
                    <li>• Statistiques de suppression</li>
                    <li>• Historique des actions légales</li>
                    <li>• Rapports téléchargeables</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          )}

          {/* Slide 8: Cas Client Réel #1 */}
          {currentSlide === 8 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Cas Client Réel #1
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <img
                    src={caseStudy2}
                    alt="Cas client avant/après"
                    className="rounded-2xl border border-zinc-800/50 shadow-2xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6"
                >
                  <div className="p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50">
                    <h3 className="text-2xl font-bold text-white mb-4">Créatrice MYM</h3>
                    <div className="space-y-3 text-zinc-400 text-lg">
                      <p><strong className="text-[#E5C268]">Problème:</strong> 847 fuites actives sur 23 sites</p>
                      <p><strong className="text-[#E5C268]">Action:</strong> Scan complet + DMCA + escalade légale</p>
                      <p><strong className="text-[#E5C268]">Résultat:</strong> 94% supprimés en 72h</p>
                      <p><strong className="text-[#E5C268]">Impact:</strong> +185% revenus MYM en 2 semaines</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {/* Slide 9: Cas Client Réel #2 */}
          {currentSlide === 9 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Cas Client Réel #2
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <img
                    src={caseStudy4}
                    alt="Cas client avant/après"
                    className="rounded-2xl border border-zinc-800/50 shadow-2xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6"
                >
                  <div className="p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50">
                    <h3 className="text-2xl font-bold text-white mb-4">Créatrice OnlyFans</h3>
                    <div className="space-y-3 text-zinc-400 text-lg">
                      <p><strong className="text-[#E5C268]">Problème:</strong> Site pirate récurrent refusant DMCA</p>
                      <p><strong className="text-[#E5C268]">Action:</strong> Escalade auprès de Cloudflare + ICANN</p>
                      <p><strong className="text-[#E5C268]">Résultat:</strong> Nom de domaine suspendu en 18 jours</p>
                      <p><strong className="text-[#E5C268]">Impact:</strong> Site fermé définitivement</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {/* Slide 10: Cas Client Réel #3 */}
          {currentSlide === 10 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Cas Client Réel #3
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <img
                    src={caseStudy5}
                    alt="Cas client avant/après"
                    className="rounded-2xl border border-zinc-800/50 shadow-2xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6"
                >
                  <div className="p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50">
                    <h3 className="text-2xl font-bold text-white mb-4">Agence de Contenu</h3>
                    <div className="space-y-3 text-zinc-400 text-lg">
                      <p><strong className="text-[#E5C268]">Problème:</strong> 43 créateurs, 12,000+ fuites totales</p>
                      <p><strong className="text-[#E5C268]">Action:</strong> Monitoring automatisé + dashboard agence</p>
                      <p><strong className="text-[#E5C268]">Résultat:</strong> 89% taux de suppression moyen</p>
                      <p><strong className="text-[#E5C268]">Impact:</strong> ROI de 400% sur revenus protégés</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {/* Slide 11: Notre Avantage Unique */}
          {currentSlide === 11 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Pourquoi CRD est Différent
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Rocket,
                    title: "Le Plus Rapide",
                    description: "Moyenne de 36h pour la suppression (vs 7-14 jours concurrents)",
                  },
                  {
                    icon: Globe,
                    title: "Couverture Mondiale",
                    description: "15 juridictions vs 3-5 pour les autres",
                  },
                  {
                    icon: Award,
                    title: "Taux de Réussite Supérieur",
                    description: "91% vs 75-80% concurrents",
                  },
                  {
                    icon: UserCheck,
                    title: "Agent Dédié",
                    description: "Humain francophone vs chatbot ou tickets",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.15 }}
                      className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50"
                    >
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 border border-[#E5C268]/30 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-[#E5C268]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-zinc-400 text-lg">{item.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 12: Notre Secret Sauce */}
          {currentSlide === 12 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Notre Secret Sauce: Le Système d'Escalade
              </motion.h2>
              <div className="space-y-4">
                {[
                  {
                    level: "Niveau 1",
                    title: "DMCA Automatique",
                    description: "90% des cas résolus ici",
                    icon: FileWarning,
                  },
                  {
                    level: "Niveau 2",
                    title: "Escalade Hébergeur",
                    description: "Contact direct avec datacenter/CDN",
                    icon: Globe,
                  },
                  {
                    level: "Niveau 3",
                    title: "Action Registrar",
                    description: "Plainte ICANN/WIPO pour suspension domaine",
                    icon: Lock,
                  },
                  {
                    level: "Niveau 4",
                    title: "Procédure Judiciaire",
                    description: "Avocat local pour action en justice",
                    icon: Gavel,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.15 }}
                      className="flex items-start gap-6 p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50"
                    >
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 border border-[#E5C268]/30 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-[#E5C268]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[#E5C268] font-bold text-lg">{item.level}</span>
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-zinc-400 text-lg">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 13: Résultats Globaux */}
          {currentSlide === 13 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Nos Résultats en Chiffres
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "91%", label: "Taux de suppression", icon: CheckCircle2 },
                  { value: "36h", label: "Délai moyen", icon: Clock },
                  { value: "2.4M+", label: "Contenus supprimés", icon: FileCheck },
                  { value: "450+", label: "Clients actifs", icon: Users },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 text-center"
                    >
                      <Icon className="w-12 h-12 text-[#E5C268] mx-auto mb-4" />
                      <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-zinc-400 text-lg">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 14: Pourquoi les Agences Nous Choisissent */}
          {currentSlide === 14 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Pourquoi les Agences Nous Choisissent
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Building2,
                    title: "Dashboard Multi-Clients",
                    description: "Gérez tous vos créateurs depuis une interface unique",
                  },
                  {
                    icon: Target,
                    title: "Tarifs Volume",
                    description: "Jusqu'à -40% pour les agences avec 10+ créateurs",
                  },
                  {
                    icon: Briefcase,
                    title: "White Label",
                    description: "Offrez CRD sous votre marque à vos créateurs",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.15 }}
                      className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50"
                    >
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 border border-[#E5C268]/30 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-[#E5C268]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-zinc-400 text-lg">{item.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 15: Offres Tarifaires */}
          {currentSlide === 15 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Nos Offres
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2">Core</h3>
                    <div className="text-5xl font-bold text-[#E5C268] mb-2">199€</div>
                    <p className="text-zinc-400">par mois</p>
                  </div>
                  <ul className="space-y-3 text-zinc-400 text-lg mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>Scan quotidien automatique</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>DMCA illimité</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>Dashboard en temps réel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>Agent dédié (email/chat)</span>
                    </li>
                  </ul>
                  <p className="text-center text-sm text-zinc-500">Idéal pour créateurs individuels</p>
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border-2 border-[#E5C268]/50 relative"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E5C268] text-black px-4 py-1 rounded-full text-sm font-bold">
                    RECOMMANDÉ
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2">Elite</h3>
                    <div className="text-5xl font-bold text-[#E5C268] mb-2">499€</div>
                    <p className="text-zinc-400">par mois</p>
                  </div>
                  <ul className="space-y-3 text-zinc-400 text-lg mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span><strong className="text-white">Tout Core +</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>Escalades légales incluses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>Agent dédié (tél + WhatsApp)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>Priorité sur les escalades</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>Rapports personnalisés</span>
                    </li>
                  </ul>
                  <p className="text-center text-sm text-zinc-400">Pour créateurs établis et agences</p>
                </motion.div>
              </div>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-zinc-400 text-lg mt-8"
              >
                Offres agences sur mesure disponibles • Sans engagement
              </motion.p>
            </div>
          )}

          {/* Slide 16: Solution Agences */}
          {currentSlide === 16 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Solution Dédiée Agences
              </motion.h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Building2,
                    title: "Interface Multi-Comptes",
                    description: "Gérez tous vos créateurs depuis un dashboard unifié",
                  },
                  {
                    icon: Crown,
                    title: "Tarifs Dégressifs",
                    description: "De -20% (5 créateurs) à -40% (20+ créateurs)",
                  },
                  {
                    icon: FileText,
                    title: "Rapports Consolidés",
                    description: "Vue globale + détail par créateur pour vos reportings",
                  },
                  {
                    icon: Phone,
                    title: "Account Manager Dédié",
                    description: "Un interlocuteur unique pour toute votre agence",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.15 }}
                      className="flex items-start gap-6 p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50"
                    >
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 border border-[#E5C268]/30 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-[#E5C268]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-zinc-400 text-lg">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 17: IA vs Humain */}
          {currentSlide === 17 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Le Meilleur des Deux Mondes
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50"
                >
                  <Zap className="w-12 h-12 text-[#E5C268] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">IA & Automatisation</h3>
                  <ul className="space-y-3 text-zinc-400 text-lg">
                    <li>• Scan 24/7 de millions de pages</li>
                    <li>• Envoi automatique DMCA</li>
                    <li>• Suivi et relances automatiques</li>
                    <li>• Détection des réapparitions</li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50"
                >
                  <UserCheck className="w-12 h-12 text-[#E5C268] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Expertise Humaine</h3>
                  <ul className="space-y-3 text-zinc-400 text-lg">
                    <li>• Escalades légales complexes</li>
                    <li>• Négociation avec hébergeurs</li>
                    <li>• Stratégie juridique personnalisée</li>
                    <li>• Support et conseils humains</li>
                  </ul>
                </motion.div>
              </div>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-zinc-400 text-xl mt-8"
              >
                = Rapidité de l'IA + Efficacité de l'expertise juridique
              </motion.p>
            </div>
          )}

          {/* Slide 18: Prochaines Étapes */}
          {currentSlide === 18 && (
            <div className="w-full max-w-5xl mx-auto text-center">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Démarrons Ensemble
              </motion.h2>
              <div className="space-y-6 mb-12">
                {[
                  {
                    step: "1",
                    title: "Audit Gratuit",
                    description: "Scan complet de vos fuites actuelles (sans engagement)",
                  },
                  {
                    step: "2",
                    title: "Démo Personnalisée",
                    description: "Présentation du dashboard et de la stratégie adaptée",
                  },
                  {
                    step: "3",
                    title: "Démarrage Immédiat",
                    description: "Configuration en 24h, premiers résultats sous 48h",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start gap-6 p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 text-left"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 border border-[#E5C268]/30 flex items-center justify-center">
                      <span className="text-3xl font-bold text-[#E5C268]">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-zinc-400 text-lg">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="space-y-4"
              >
                <a
                  href="https://cal.com/content-removal-desk/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#E5C268] hover:bg-[#E5C268]/90 text-black text-xl font-bold rounded-xl transition-all duration-300"
                >
                  <Calendar className="w-6 h-6" />
                  Réserver un Appel Découverte
                </a>
                <div className="flex items-center justify-center gap-6 text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span>contact@crdprotect.fr</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>+33 7 56 80 18 60</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CRDPresentation;
