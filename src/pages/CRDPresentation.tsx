import { useState, useEffect, useCallback } from "react";
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
  Star,
  TrendingDown,
  ArrowRightCircle,
  PlayCircle,
  HelpCircle,
  CheckCircle,
  Timer,
  Database,
  Key,
  MessageSquare,
  Quote,
  Settings,
  MonitorCheck,
} from "lucide-react";

const TOTAL_SLIDES = 22;

const CRDPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = TOTAL_SLIDES;
  const slideMatches = (id: number) => currentSlide === id;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

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
  }, [nextSlide, prevSlide, totalSlides]);

  const slideChange = (newIndex: number) => {
    setCurrentSlide(newIndex);
  };

  // Slide variants - Enhanced for sleekness
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1200 : -1200,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1200 : -1200,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const [direction, setDirection] = useState(0);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-950 to-black overflow-hidden">
      {/* Navigation dots - Enhanced */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2 max-w-[90vw] overflow-x-auto px-4 py-2 scrollbar-hide">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => slideChange(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
              index === currentSlide
                ? "w-10 bg-[#E5C268] shadow-lg shadow-[#E5C268]/50"
                : "w-2.5 bg-zinc-700/60 hover:bg-zinc-600/80 hover:w-4"
            }`}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows - Enhanced */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="fixed left-6 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-4 sm:p-5 rounded-full bg-zinc-900/70 backdrop-blur-xl border-2 border-zinc-800/60 hover:border-[#E5C268]/70 text-[#E5C268] hover:bg-zinc-900/90 hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed shadow-xl shadow-black/50"
        aria-label="Slide précédente"
      >
        <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>
      <button
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        className="fixed right-6 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-4 sm:p-5 rounded-full bg-zinc-900/70 backdrop-blur-xl border-2 border-zinc-800/60 hover:border-[#E5C268]/70 text-[#E5C268] hover:bg-zinc-900/90 hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed shadow-xl shadow-black/50"
        aria-label="Slide suivante"
      >
        <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>


      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 400, damping: 35 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.4, ease: "easeOut" },
          }}
          className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 lg:p-12 xl:p-16"
        >
          {/* Slide 0: Title Slide */}
          {slideMatches(0) && (
            <div className="w-full max-w-6xl mx-auto text-center space-y-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-10"
              >
                <div className="inline-flex items-center justify-center w-36 h-36 rounded-full bg-gradient-to-br from-[#E5C268]/25 via-[#E5C268]/10 to-transparent border-2 border-[#E5C268]/40 shadow-[0_10px_60px_rgba(229,194,104,0.2)] mb-8">
                  <Shield className="w-18 h-18 text-[#E5C268]" />
                </div>
                <p className="uppercase tracking-[0.4em] text-xs sm:text-sm text-[#E5C268]/80">
                  Taskforce Legal-Tech Française • Escalades Hybrides
                </p>
              </motion.div>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                La taskforce française qui neutralise les fuites les plus résistantes.
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto"
              >
                Chaîne d’escalade complète (scan propriétaire → DMCA renforcé → hébergeur → registrar → ICANN) opérée par des agents seniors et nos modules internes pour protéger agences, studios et créateurs à risque.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-400"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C268]" />
                  <span>Agent de crise dédié par portefeuille</span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C268]" />
                  <span>Escalades ICANN, hosts, registrars</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C268]" />
                  <span>Veille 24/7 + rapports juridiquement exploitables</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6"
              >
                {[
                  { value: "500+", label: "créateurs & agences sous protection" },
                  { value: "450+", label: "plateformes surveillées en continu" },
                  { value: "99.2%", label: "taux de résolution sur cas résistants" },
                  { value: "24h", label: "pour enclencher la première neutralisation" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur">
                    <p className="text-3xl font-bold text-[#E5C268]">{stat.value}</p>
                    <p className="text-xs uppercase tracking-wide text-zinc-400 mt-2">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Slide 1: Qui Sommes-Nous */}
          {slideMatches(1) && (
            <div className="w-full max-w-5xl mx-auto text-center">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Qui Sommes-Nous
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12"
              >
                Taskforce #1 de protection digitale française
              </motion.p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Rocket,
                    title: "Taskforce legal-tech française",
                    desc: "Teams composées d’anciens juristes IP, analystes cyber et opérateurs escalade basés à Paris & Lyon.",
                  },
                  {
                    icon: Code,
                    title: "Technologie propriétaire",
                    desc: "Scanner interne, preuves horodatées, dossiers d’escalade générés comme des actes juridiques.",
                  },
                  {
                    icon: Scale,
                    title: "Réseau juridique international",
                    desc: "Partenaires en Moldavie, Hong Kong, UE & US pour activer plainte registrar, host pressure, ICANN.",
                  },
                  {
                    icon: Users,
                    title: "Direction de crise dédiée",
                    desc: "Un agent senior par agence, ligne directe 24/7 et coordination complète des escalades complexes.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 backdrop-blur-xl border border-zinc-800/60 hover:border-[#E5C268]/50 transition-all duration-500 text-left"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#E5C268]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/40"
              >
                <p className="text-lg text-white">
                  <span className="text-[#E5C268] font-bold">Nous sommes une équipe de spécialistes</span> — juristes,
                  analystes, ingénieurs et agents dédiés —{" "}
                  <span className="text-[#E5C268] font-bold">mobilisés chaque jour pour vos créateurs.</span>
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 2: Qui Nous Protégons */}
          {slideMatches(2) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Qui Nous Protégons
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { icon: Video, label: "Studios & agences premium", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                  { icon: TrendingUp, label: "Créateurs MYM / OF à forte audience", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                  { icon: Users, label: "Influenceurs & talents gérés", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                  { icon: Building2, label: "Marques média haut risque", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                  { icon: Image, label: "Modèles webcam & studios privés", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative p-8 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 backdrop-blur-xl border border-zinc-800/60 hover:border-[#E5C268]/60 hover:shadow-xl hover:shadow-[#E5C268]/20 transition-all duration-500 text-center"
                    >
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-[#E5C268]" />
                      </div>
                      <p className="text-lg font-medium text-white">{item.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 4: Le Problème */}
          {slideMatches(4) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Le Problème
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Ce que les leaks répétés infligent à vos revenus
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {[
                  { icon: FileWarning, label: "Reposts en boucle", desc: "Chaque leak est rechargé sur des plateformes moldaves, russes ou françaises pendant des années." },
                  { icon: UserCheck, label: "Usurpations monétisées", desc: "Faux comptes qui captent abonnements & tips à la place de vos talents." },
                  { icon: Upload, label: "Boucle sans fin", desc: "Un lien supprimé réapparaît ailleurs tant qu’aucune taskforce n'oriente la chaîne d’escalade." },
                  { icon: AlertTriangle, label: "Image & ventes détruites", desc: "Un créateur exposé perd immédiatement ventes privées, abonnements et confiance agents." },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.15 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-red-950/20 backdrop-blur-xl border border-red-800/30 hover:border-red-700/50 transition-all duration-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-900/30 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.label}</h3>
                          <p className="text-zinc-400">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 5: Notre Méthode CRD */}
          {slideMatches(5) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Notre Méthode CRD
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl text-[#E5C268] mb-12 text-center"
              >
                La chaîne d’escalade complète, opérée en interne
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Scan, label: "Scanner interne 24/7", desc: "Veille 450+ plateformes, empreintes IA, captures horodatées." },
                  { icon: Eye, label: "Analystes humains", desc: "Qualification manuelle des preuves, classement par criticité." },
                  { icon: Zap, label: "DMCA renforcés", desc: "Notices rédigées comme des actes juridiques, envoyées en <24h." },
                  { icon: Globe, label: "Chaîne d’escalade", desc: "Hébergeur récalcitrant → registrar → ICANN jusqu’à suspension." },
                  { icon: Scale, label: "Pression juridique réelle", desc: "Réseau Moldavie / Hong Kong / UE / US pour assignations ciblées." },
                  { icon: Shield, label: "Surveillance proactive", desc: "Blocage des reuploads avant diffusion massive + suivi long terme." },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/60 hover:shadow-lg hover:shadow-[#E5C268]/20 transition-all duration-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#E5C268]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.label}</h3>
                          <p className="text-zinc-400">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 6: Process Flow / Comment Ça Marche */}
          {slideMatches(6) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Comment Ça Marche
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Un protocole opérationnel en 5 mouvements
              </motion.p>
              <div className="relative">
                {/* Connection lines */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E5C268]/20 via-[#E5C268]/40 to-[#E5C268]/20 transform -translate-y-1/2" />
                
                <div className="grid md:grid-cols-5 gap-4 md:gap-6">
                  {[
                    { icon: UserCheck, step: "1", title: "Onboarding confidentiel", desc: "Cartographie des créateurs, accès sécurisés, protocole SLA." },
                    { icon: Settings, step: "2", title: "Calibration", desc: "Choix des plateformes critiques, mots-clés sensibles, zones géographiques." },
                    { icon: Scan, step: "3", title: "Veille active", desc: "Scanner interne + hunting humain, détection avant diffusion massive." },
                    { icon: Zap, step: "4", title: "Chaîne d’escalade", desc: "DMCA juridique → host → registrar → ICANN jusqu’à suspension." },
                    { icon: BarChart3, step: "5", title: "Suivi & rapports", desc: "Dash dashboards, preuves horodatées, brief prêts à transmettre." },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="relative"
                      >
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/50 transition-all duration-500 text-center group">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 mb-4 group-hover:scale-110 transition-transform">
                            <Icon className="w-8 h-8 text-[#E5C268]" />
                          </div>
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#E5C268] flex items-center justify-center text-black font-bold text-sm">
                            {item.step}
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 mt-2">{item.title}</h3>
                          <p className="text-sm text-zinc-400">{item.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Slide 8: Agent Dédié Par Client */}
          {slideMatches(8) && (
            <div className="w-full max-w-6xl mx-auto text-center">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Agents de Crise Dédiés
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12"
              >
                Pilotage humain pour chaque dossier sensible
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Users,
                    title: "Commandant d’escalade",
                    desc: "Un seul interlocuteur senior, responsable de la stratégie technique + juridique et habilité à activer notre réseau international.",
                  },
                  {
                    icon: Briefcase,
                    title: "Gestion de crise 24/7",
                    desc: "Suivi temps réel des incidents, priorisation automatique, briefing quotidien pour vos équipes internes.",
                  },
                  {
                    icon: Bell,
                    title: "Communication directe",
                    desc: "Signalements via SecureChat/Signal, réponses en quelques minutes, alertes proactives avant même votre demande.",
                  },
                  {
                    icon: FileCheck,
                    title: "Dossiers juridiquement prêts",
                    desc: "Chaque action documentée, preuves horodatées, historique complet pour rassurer créateurs et partenaires juridiques.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.15 }}
                      className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/50 transition-all duration-500"
                    >
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 mb-6">
                        <Icon className="w-10 h-10 text-[#E5C268]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-zinc-400">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 9: Réseau Juridique International */}
          {slideMatches(9) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Réseau Juridique International
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Une chaîne d’escalade mondiale prête à frapper
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { number: "10+", label: "partenaires (Moldavie, HK, EU, US)", icon: Gavel },
                  { number: "15+", label: "juridictions activables", icon: Globe },
                  { number: "20+", label: "hébergeurs & registrars difficiles (AlexHost, FlokiNet…)", icon: FileText },
                  { number: "5+", label: "cabinets crise & IP dédiés", icon: Scale },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/50 transition-all duration-500"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-[#E5C268]" />
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-[#E5C268] mb-2">{stat.number}</div>
                          <p className="text-lg text-white">{stat.label}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30"
              >
                <p className="text-center text-lg text-white">
                  <span className="text-[#E5C268] font-bold">DMCA → host → registrar → ICANN</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Plainte formelle & host pressure</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Actions ciblées pour cas “impossibles”</span>
                </p>
                <p className="text-center text-zinc-400 mt-2">
                  Nous intervenons en France, Europe, et à l'international selon les besoins
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 3: Social Proof / Partenaires */}
          {slideMatches(3) && (
            <div className="w-full max-w-6xl mx-auto text-center">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Nos Partenaires & Réseau
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12"
              >
                Hébergeurs, registrars et institutions qui répondent encore à nos dossiers
              </motion.p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {[
                  { icon: Gavel, title: "Taskforce juridique", count: "10+", desc: "Cabinets IP & litige tech (FR, EU, HK, US)" },
                  { icon: Globe, title: "Juridictions actives", count: "15+", desc: "Procédures et contacts institutionnels" },
                  { icon: Building2, title: "Hébergeurs difficiles", count: "20+", desc: "AlexHost, FlokiNet, HostSailor, etc." },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/50 transition-all duration-500"
                    >
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 mb-4">
                        <Icon className="w-10 h-10 text-[#E5C268]" />
                      </div>
                      <div className="text-5xl font-bold text-[#E5C268] mb-3">{item.count}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-zinc-400">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50"
              >
                <p className="text-lg text-white">
                  <span className="text-[#E5C268] font-bold">ICANN Compliance</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Cloudflare Trust & Safety</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Registrars EU/US/Asie</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Autorités locales</span>
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 7: Écosystème CRD */}
          {slideMatches(7) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Écosystème CRD
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Tech + juridique réunis dans un seul cockpit
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Code,
                    title: "CRD Scanner",
                    desc: "Veille IA + humaine sur 450+ plateformes, signatures spécifiques Leakimedia/Sxyprn/Erome.",
                  },
                  {
                    icon: BarChart3,
                    title: "Mission Control Dashboard",
                    desc: "Vue consolidée agence, horodatages, exports PDF prêts pour vos créateurs / juristes.",
                  },
                  {
                    icon: Scale,
                    title: "Escalades intégrées",
                    desc: "DMCA renforcé → host → registrar → ICANN, tout est orchestré depuis la même interface.",
                  },
                  {
                    icon: FileCheck,
                    title: "Dossiers juridiques auto-générés",
                    desc: "Captures, hash, horodatages, mémos prêts à signer pour host, registrar ou avocat.",
                  },
                  {
                    icon: Bell,
                    title: "Alerting multi-canal",
                    desc: "Email, Signal, Slack/Teams : priorisation automatique et playbooks adaptés à chaque créateur.",
                  },
                  {
                    icon: Lock,
                    title: "Sécurité & conformité",
                    desc: "Infra souveraine, chiffrement bout en bout, audit trail complet, accès compartimentés agence/CRD.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/60 hover:shadow-lg hover:shadow-[#E5C268]/20 transition-all duration-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#E5C268]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-zinc-400">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 10: Cas Clients Réels */}
          {slideMatches(10) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Cas Clients Réels
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Des résultats concrets, pas des promesses
              </motion.p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Born to be f*ck",
                    subtitle: "Suspension complète",
                    stats: "70+ liens • blocage registrar • 19 jours",
                    desc: "Site moldave hébergé chez AlexHost. DMCA ignorés → host pressure → plainte registrar → dossier ICANN rédigé comme une assignation. Domaine gelé, revenus perdus pour les pirates.",
                    image: caseStudy4,
                    gradient: "from-red-500/30 via-orange-500/20 to-red-500/30",
                  },
                  {
                    title: "talullax",
                    subtitle: "Opération préventive",
                    stats: "600+ vidéos • 300 liens neutralisés • 30 jours",
                    desc: "Influenceuse premium dont les vidéos sortaient chaque nuit. Scanner CRD + hunting humain → retraits avant diffusion publique, puis host pressure sur FlokiNet pour couper la boucle.",
                    image: caseStudy5,
                    gradient: "from-yellow-500/30 via-green-500/20 to-yellow-500/30",
                  },
                  {
                    title: "Leakimedia",
                    subtitle: "Dossier confidentiel",
                    stats: "Suppression complète • 2 semaines",
                    desc: "Plateforme française réputée impossible. Nous avons combiné sommations juridiques + escalade CNIL + contact opérateur. Mise hors ligne des dossiers + interdiction de republier sous 48h.",
                    image: caseStudy2,
                    gradient: "from-purple-500/30 via-blue-500/20 to-purple-500/30",
                  },
                ].map((caseItem, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.15 }}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/50 transition-all duration-500"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Image */}
                    <div className="relative aspect-video bg-zinc-800/50 border-b border-zinc-800/50 overflow-hidden">
                      <img 
                        src={caseItem.image} 
                        alt={caseItem.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6">
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-white mb-1">{caseItem.title}</h3>
                        <p className="text-sm text-[#E5C268] font-semibold mb-2">{caseItem.subtitle}</p>
                        <p className="text-sm text-[#E5C268] font-medium mb-3">{caseItem.stats}</p>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed">{caseItem.desc}</p>
                      <div className="mt-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#E5C268]" />
                        <span className="text-xs text-zinc-500">Mission réussie</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 13: Pourquoi Nous Allons Plus Loin */}
          {slideMatches(13) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Pourquoi Nous Allons Plus Loin
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Les services classiques stoppent à Google. Nous poussons jusqu’à la suspension des opérateurs.
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-red-900/20 to-red-950/20 backdrop-blur-xl border border-red-800/30"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <X className="w-8 h-8 text-red-400" />
                    <h3 className="text-2xl font-bold text-white">Prestataires classiques</h3>
                  </div>
                  <ul className="space-y-4 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Désindexation Google et rapports PDF</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>DMCA génériques copiés/collés</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Pas de réseau juridique ni host pressure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Impuissance totale sur AlexHost, FlokiNet, etc.</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 backdrop-blur-xl border border-[#E5C268]/50"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#E5C268]" />
                    <h3 className="text-2xl font-bold text-white">CRD Taskforce</h3>
                  </div>
                  <ul className="space-y-4 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Scanner + actions préventives sur 450+ plateformes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>DMCA juridiques + host pressure ciblée</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Escalades registrar/ICANN + plaintes locales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Résolution de cas dits “impossibles”</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30"
              >
                <p className="text-center text-lg text-white">
                  <span className="text-[#E5C268] font-bold">Procédures propriétaires</span> : DMCA renforcé → host → registrar → ICANN, activées par{" "}
                  <span className="text-[#E5C268] font-bold">une taskforce juridique mondiale</span> pour neutraliser{" "}
                  <span className="text-[#E5C268] font-bold">AlexHost, FlokiNet, HostSailor, etc.</span>
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10 grid md:grid-cols-2 gap-4"
              >
                {[
                  "Agent dédié par client",
                  "Outils développés en interne",
                  "Scan quotidien 450+ sites",
                  "Vérification humaine systématique",
                  "Escalades juridiques réelles",
                  "Réseau international d'hébergeurs",
                  "Tableau de bord en temps réel",
                  "Support 24/7 prioritaire",
                ].map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/60 hover:border-[#E5C268]/40 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#E5C268]" />
                    <span className="text-sm text-zinc-200">{feature}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Slide 11: Résultats Globaux */}
          {slideMatches(11) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Nos Résultats
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Ce que nos opérations covert délivrent réellement
              </motion.p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { percentage: "99.2%", label: "Résolution de cas résistants", desc: "Suspensions host/registrar confirmées" },
                  { percentage: "87%", label: "Taux de neutralisation proactive", desc: "Reposts stoppés avant diffusion massive" },
                  { percentage: "500k+", label: "Contenus retirés", desc: "Dont Leakimedia, Sxyprn, Erome, AlexHost mirror" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.15 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 text-center"
                  >
                    <div className="text-6xl font-bold text-[#E5C268] mb-4">{item.percentage}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.label}</h3>
                    <p className="text-zinc-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50"
              >
                <p className="text-center text-lg text-white">
                  <span className="text-[#E5C268] font-bold">500+ créateurs, agences & studios</span> •{" "}
                  <span className="text-[#E5C268] font-bold">450+ plateformes cartographiées</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Réseau juridique Moldavie / HK / EU / US</span>
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 15: ROI / Valeur */}
          {slideMatches(15) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                ROI & Impact Mesurable
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Ce que votre agence gagne dès les premières semaines de collaboration
              </motion.p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Clock, value: "15+", unit: "h", label: "d'efforts internes économisés", desc: "Nous traitons DMCA, preuves, escalades et rapports" },
                  { icon: DollarSign, value: "X€", unit: "/mois", label: "de revenus protégés", desc: "Fuites stoppées = abonnés fidèles & churn maîtrisé" },
                  { icon: TrendingUp, value: "99.2%", unit: "", label: "de réussite constatée", desc: "Suppressions garanties même sur les plateformes résistantes" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 text-center"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 mb-4">
                        <Icon className="w-8 h-8 text-[#E5C268]" />
                      </div>
                      <div className="text-5xl font-bold text-[#E5C268] mb-2">
                        {item.value}
                        {item.unit && <span className="text-2xl">{item.unit}</span>}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.label}</h3>
                      <p className="text-zinc-400 text-sm">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-10 grid md:grid-cols-2 gap-6"
              >
                {[
                  {
                    title: "Pourquoi les agences nous choisissent",
                    desc: "Taskforce clé en main : tech propriétaire, juristes, agent dédié, reporting consolidé.",
                    items: [
                      { icon: Users, label: "Taskforce dédiée", sub: "Agent senior + juristes + analysts connectés à votre équipe." },
                      { icon: Building2, label: "Pilotage unifié", sub: "Vue multi-créateurs, facturation groupée, priorisation auto." },
                      { icon: Shield, label: "Escalades garanties", sub: "ICANN, registrars, hébergeurs et avocats sous un même pipeline." },
                      { icon: Zap, label: "SLA agence", sub: "Files dédiées, cellule de crise 24/7, réponses en heures." },
                    ],
                  },
                  {
                    title: "Ce que vous offrez à vos clients",
                    desc: "Des livrables concrets pour nourrir la relation et prouver votre valeur.",
                    items: [
                      { icon: MonitorCheck, label: "Reporting prêt à livrer", sub: "Rapports exportables, alertes white-label, preuves partagées." },
                      { icon: Crown, label: "Relation conservée", sub: "White-label total : vos créateurs restent dans votre écosystème." },
                      { icon: Building2, label: "Opérations consolidées", sub: "Multi-créateurs, multi-agences, une seule interface." },
                      { icon: Shield, label: "Protection multi-comptes", sub: "Politiques personnalisées + tarifs préférentiels." },
                    ],
                  },
                ].map((column, colIndex) => (
                  <motion.div
                    key={column.title}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + colIndex * 0.1 }}
                    className={`p-6 rounded-2xl ${colIndex === 0 ? "bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 border border-zinc-800/60" : "bg-gradient-to-br from-[#E5C268]/12 to-[#E5C268]/4 border border-[#E5C268]/40"}`}
                  >
                    <div className="text-center mb-6 space-y-2">
                      <p className="text-[#E5C268] font-semibold uppercase tracking-[0.3em]">
                        {column.title}
                      </p>
                      <p className="text-zinc-400 text-xs sm:text-sm">{column.desc}</p>
                    </div>
                    <div className="space-y-4">
                      {column.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.label} className="flex items-start gap-3">
                            <div className={`flex-shrink-0 ${colIndex === 0 ? "w-10 h-10" : "w-9 h-9"} rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 flex items-center justify-center`}>
                              <Icon className={`${colIndex === 0 ? "w-5 h-5" : "w-4 h-4"} text-[#E5C268]`} />
                            </div>
                            <div>
                              <h3 className={`${colIndex === 0 ? "text-base" : "text-sm"} font-semibold text-white`}>{item.label}</h3>
                              <p className={`${colIndex === 0 ? "text-sm" : "text-xs sm:text-sm"} text-zinc-400`}>{item.sub}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Slide 16: Timeline / Rapidité */}
          {slideMatches(16) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Rapidité d'Action
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Une escalation complète enclenchée dès J+0
              </motion.p>
              <div className="space-y-6">
                {[
                  { time: "24h", icon: Zap, title: "Scan & preuves", desc: "Veille proactive + capture juridique + priorisation des incidents." },
                  { time: "48h", icon: CheckCircle2, title: "DMCA & host pressure", desc: "Notices personnalisées, pression directe sur hébergeur / CDN." },
                  { time: "7 jours", icon: Shield, title: "Escalades registrar & ICANN", desc: "Dossier complet prêt avant J+7 pour solliciter une action anticipée (là où une réponse standard peut prendre 60 jours)." },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.15 }}
                      className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/50 transition-all duration-500"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 flex items-center justify-center">
                          <Icon className="w-10 h-10 text-[#E5C268]" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-3xl font-bold text-[#E5C268]">{item.time}</span>
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-zinc-400">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 17: Plans & Tarifs */}
          {slideMatches(17) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Plans & Tarifs
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-[#E5C268] mb-2 text-center font-semibold"
              >
                Choisissez le niveau de protection adapté à votre exposition
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-zinc-400 mb-12 text-center"
              >
                Les escalades avancées (registrar / ICANN) sont incluses uniquement dans l’offre Elite
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Plan Core */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/50 transition-all duration-500"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 mb-4">
                      <Shield className="w-8 h-8 text-[#E5C268]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Plan Core</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#E5C268]">79€</span>
                      <span className="text-lg text-zinc-400">/mois</span>
                    </div>
                    <p className="text-sm text-zinc-400 mb-4">Protection continue (surveillance + DMCA + host pressure).</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Scanner interne hebdo + alertes prioritaires</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">DMCA renforcés (50 liens / mois)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Veille automatique + hunting humain</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Suivi en temps réel dans Mission Control</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Désindexation & suppression SERP</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Tableau de bord privé + exports PDF</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Recherche avancée (Bing, Yandex, Tor)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Agent dédié (SLA standard)</span>
                    </div>
                  </div>
                </motion.div>

                {/* Plan Elite */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 backdrop-blur-xl border border-[#E5C268]/50 hover:border-[#E5C268]/70 transition-all duration-500 relative"
                >
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-[#E5C268] text-black text-xs font-bold">
                    RECOMMANDÉ
                  </div>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E5C268]/30 to-[#E5C268]/15 mb-4">
                      <Crown className="w-8 h-8 text-[#E5C268]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Plan Elite</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#E5C268]">99€</span>
                      <span className="text-lg text-zinc-400">/mois</span>
                    </div>
                    <p className="text-sm text-zinc-300 mb-4">Protection intégrale + escalades registrar/ICANN + cellule de crise.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Scanner continu + alertes en direct</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Suppression illimitée avec priorité escalade</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Reconnaissance faciale / watermark tracking</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Blocage préventif des reuploads</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Gestionnaire de crise + hotline 24/7</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Enregistrement DMCA officiel + attorney of record</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Veille proactive 7j/7 + rapports quotidiens</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Agent de crise senior (SLA 4h)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Escalades registrar + ICANN + procédures locales incluses</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30"
              >
                <p className="text-center text-lg text-white">
                  <span className="text-[#E5C268] font-bold">Tarifs agences sur demande</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Tarifs préférentiels</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Meilleur rapport qualité/prix</span>
                </p>
                <p className="text-center text-zinc-400 mt-2 text-sm">
                  Tarifs détaillés sur demande – adaptés à votre situation d'agence
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 18: Sécurité & Conformité */}
          {slideMatches(18) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Sécurité & Conformité
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Une opération aussi sensible exige une hygiène irréprochable
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Lock, title: "Chiffrement bout en bout", desc: "Stockage chiffré, clés détenues par CRD uniquement, partitions par agence." },
                  { icon: Shield, title: "Conformité RGPD & CNIL", desc: "Données hébergées en France, registres de traitement disponibles sur demande." },
                  { icon: Key, title: "Contrôle d’accès granulaire", desc: "2FA, journaux consultables, cloisonnement par créateur/équipe." },
                  { icon: Database, title: "Infra souveraine", desc: "Datacenters FR, backups isolés, plan de continuité testé trimestriellement." },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/60 hover:shadow-lg hover:shadow-[#E5C268]/20 transition-all duration-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#E5C268]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-zinc-400">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50"
              >
                <p className="text-center text-lg text-white">
                  <span className="text-[#E5C268] font-bold">Confidentialité absolue</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Infrastructure française</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Backups isolés & auditables</span>
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 14: IA vs Humain - Pourquoi L'Excellence Nécessite Les Deux */}
          {slideMatches(14) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                IA vs Humain
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Dans cette industrie sensible, seule la combinaison IA + expertise humaine fonctionne
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-red-900/20 to-red-950/20 backdrop-blur-xl border border-red-800/30"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Code className="w-8 h-8 text-red-400" />
                    <h3 className="text-2xl font-bold text-white">Solutions automatisées seules</h3>
                  </div>
                  <ul className="space-y-4 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">Scan 100% IA</span> incapable de comprendre les miroirs dédiés</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">40% de fuites non détectées</span> sur plateformes FR / rus / dark web</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>DMCA génériques sans poids juridique</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Aucun contrôle humain, escalades inexistantes</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 backdrop-blur-xl border border-[#E5C268]/50"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Users className="w-8 h-8 text-[#E5C268]" />
                    <h3 className="text-2xl font-bold text-white">Taskforce CRD</h3>
                  </div>
                  <ul className="space-y-4 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">IA propriétaire</span> + analysts spécialistes Leakimedia, AlexHost, etc.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">Contrôle humain</span> pour hiérarchiser chaque incident sensible</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>DMCA rédigés comme des mises en demeure signées</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">Décisions humaines</span> pour lancer registrars, ICANN, poursuites locales</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30"
              >
                <p className="text-center text-lg text-white">
                  <span className="text-[#E5C268] font-bold">L'IA accélère, l'humain décide.</span> Dans cette industrie sensible,{" "}
                  <span className="text-[#E5C268] font-bold">chaque décision compte.</span> C'est pourquoi nous combinons{" "}
                  <span className="text-[#E5C268] font-bold">la puissance de l'IA avec l'expertise humaine.</span>
                </p>
              </motion.div>
            </div>
          )}


          {/* Slide 19: FAQ / Questions Fréquentes */}
          {slideMatches(19) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Questions Fréquentes
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Les réponses que vos créateurs et équipes posent avant d’externaliser
              </motion.p>
              <div className="space-y-4">
                {[
                  {
                    question: "Combien de temps pour stopper un leak critique ?",
                    answer: "24h pour enclencher DMCA + host pressure, 48h pour escalader registrar si besoin.",
                  },
                  {
                    question: "Que faites-vous lorsqu’un host ignore la demande ?",
                    answer: "Escalade automatique : host > registrar > ICANN + activation de notre réseau juridique Moldavie / HK / UE.",
                  },
                  {
                    question: "Comment garantissez-vous la confidentialité des dossiers ?",
                    answer: "Infra FR, données chiffrées, accès cloisonnés agence/CRD, NDA renforcé pour chaque agent.",
                  },
                  {
                    question: "Le créateur doit-il intervenir ?",
                    answer: "Non. Nous opérons en full delegation : scan, suppression, escalade, reporting juridique prêts à signer.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/30 transition-all duration-500"
                  >
                    <div className="flex items-start gap-4">
                      <HelpCircle className="w-6 h-6 text-[#E5C268] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.question}</h3>
                        <p className="text-zinc-400">{item.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 12: Comparaison - Nous vs Concurrence */}
          {slideMatches(12) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                CRD vs La Concurrence
              </motion.h2>
              <div className="space-y-6">
                {[
                  { feature: "Agent de crise dédié", crd: true, other: false },
                  { feature: "Scanner interne 450+ plateformes", crd: true, other: false },
                  { feature: "DMCA juridiques + host pressure", crd: true, other: false },
                  { feature: "Escalades registrar & ICANN", crd: true, other: false },
                  { feature: "Réseau juridique Moldavie / HK / UE / US", crd: true, other: false },
                  { feature: "Dossiers horodatés prêts pour les avocats", crd: true, other: "Rapports basiques" },
                  { feature: "Veille proactive & blocage des reuploads", crd: true, other: "Réactif" },
                  { feature: "Support 24/7 sous SLA", crd: true, other: "Générique" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50"
                  >
                    <span className="text-lg font-medium text-white flex-1">{item.feature}</span>
                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6 text-[#E5C268]" />
                        <span className="text-sm text-zinc-400">CRD</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.other ? (
                          <>
                            <X className="w-6 h-6 text-red-400" />
                            <span className="text-sm text-zinc-400">{item.other}</span>
                          </>
                        ) : (
                          <>
                            <X className="w-6 h-6 text-red-400" />
                            <span className="text-sm text-zinc-400">Autres</span>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 20: Prochaines Étapes */}
          {slideMatches(20) && (
            <div className="w-full max-w-5xl mx-auto text-center">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Prochaines Étapes
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl lg:text-4xl text-[#E5C268] mb-16 font-semibold"
              >
                Programmons un audit de vos fuites et de vos escalades actuelles
              </motion.p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Shield, label: "Brief d’exposition confidentiel", desc: "Cartographions vos créateurs, studios et plateformes sensibles." },
                  { icon: Zap, label: "Audit escalades en cours", desc: "Nous analysons vos DMCA, hosts récalcitrants, risques ICANN." },
                  { icon: Users, label: "Mise en place taskforce", desc: "Assignation d’un agent senior + protocole SLA / reporting." },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/50 transition-all duration-500"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 mb-4">
                        <Icon className="w-8 h-8 text-[#E5C268]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.label}</h3>
                      <p className="text-sm text-zinc-400">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 21: Slide Finale */}
          {slideMatches(21) && (
            <div className="w-full max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-16"
              >
                <div className="inline-flex items-center justify-center w-48 h-48 rounded-full bg-gradient-to-br from-[#E5C268]/20 via-[#E5C268]/10 to-[#E5C268]/5 border-2 border-[#E5C268]/40 shadow-2xl shadow-[#E5C268]/20 mb-8">
                  <Shield className="w-24 h-24 text-[#E5C268]" />
                </div>
              </motion.div>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Reprenez le contrôle
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl sm:text-3xl lg:text-4xl text-[#E5C268] mb-16 font-medium"
              >
                — nous opérons l’offensive invisible pour vous.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-16"
              >
                <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/50 transition-all duration-500">
                  <p className="text-xl sm:text-2xl text-white mb-6 font-medium">Engageons un partenariat discret, documenté et durable.</p>
                  <div className="flex items-center justify-center gap-3 group cursor-pointer">
                    <div className="p-3 rounded-full bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 group-hover:from-[#E5C268]/30 group-hover:to-[#E5C268]/20 transition-all duration-300">
                      <Phone className="w-6 h-6 text-[#E5C268]" />
                    </div>
                    <span className="text-lg sm:text-xl text-[#E5C268] font-semibold group-hover:text-[#E5C268]/90 transition-colors">
                      Programmer un audit confidentiel
                    </span>
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
