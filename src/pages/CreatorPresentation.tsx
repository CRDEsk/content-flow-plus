import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PasswordProtection } from "@/components/PasswordProtection";
import {
  Shield,
  Heart,
  AlertTriangle,
  Search,
  FileWarning,
  Zap,
  CheckCircle2,
  Lock,
  ArrowRight,
  ArrowLeft,
  Clock,
  Target,
  Award,
  Phone,
  X,
  Star,
  TrendingDown,
  CheckCircle,
  Timer,
  MessageSquare,
  Quote,
  Maximize,
  Minimize,
  Eye,
  Sparkles,
  UserCheck,
  Scan,
  FileCheck,
  Bell,
  HelpCircle,
  Webhook,
  Users,
  Globe,
  Download,
  RotateCw,
  Database,
  Scale,
  Building2,
} from "lucide-react";

const TOTAL_SLIDES = 18;

const CreatorPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [direction, setDirection] = useState(0);
  const totalSlides = TOTAL_SLIDES;
  const slideMatches = (id: number) => currentSlide === id;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev < totalSlides - 1) {
        setDirection(1);
        return prev + 1;
      }
      return prev;
    });
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev > 0) {
        setDirection(-1);
        return prev - 1;
      }
      return 0;
    });
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

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
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextSlide, prevSlide, totalSlides, toggleFullscreen]);

  const slideChange = (newIndex: number) => {
    setDirection(newIndex > currentSlide ? 1 : -1);
    setCurrentSlide(newIndex);
  };

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

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-950 to-black overflow-hidden">
      {/* Slide number indicator */}
      <div className="fixed top-6 left-6 z-50 px-4 py-2 rounded-full bg-zinc-900/70 backdrop-blur-xl border-2 border-zinc-800/60">
        <span className="text-[#E5C268] font-semibold text-sm">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>
      {/* Fullscreen toggle */}
      <button
        onClick={toggleFullscreen}
        className="fixed top-6 right-6 z-50 p-4 rounded-full bg-zinc-900/70 backdrop-blur-xl border-2 border-zinc-800/60 hover:border-[#E5C268]/70 text-[#E5C268] hover:bg-zinc-900/90 hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl shadow-black/50"
        aria-label={isFullscreen ? "Exit fullscreen (F)" : "Enter fullscreen (F)"}
      >
        {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
      </button>

      {/* Navigation dots */}
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

      {/* Navigation arrows */}
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
          {/* Slide 0: Intro */}
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
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="px-4 py-2 rounded-full bg-[#E5C268]/10 border border-[#E5C268]/30 backdrop-blur">
                    <span className="text-[#E5C268] font-semibold text-sm">100% Confidentiel</span>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-[#E5C268]/10 border border-[#E5C268]/30 backdrop-blur">
                    <span className="text-[#E5C268] font-semibold text-sm">24/7</span>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-[#E5C268]/10 border border-[#E5C268]/30 backdrop-blur">
                    <span className="text-[#E5C268] font-semibold text-sm">Zéro Stress</span>
                  </div>
                </div>
              </motion.div>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                On protège ton image.
                <br />
                <span className="text-[#E5C268]">On efface ce qui ne doit pas exister.</span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl sm:text-2xl text-zinc-300 max-w-3xl mx-auto"
              >
                Protection totale pour créateurs MYM & OnlyFans. Zéro paperasse, résultats rapides.
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
              >
                {[
                  { value: "500+", label: "Créateurs protégés" },
                  { value: "450+", label: "Plateformes surveillées" },
                  { value: "87%", label: "Fuites neutralisées" },
                  { value: "24-48h", label: "Premiers résultats" },
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
                Agence française spécialisée dans la suppression de fuites
              </motion.p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "500+ créatrices protégées",
                    desc: "Une communauté grandissante de créateurs qui nous font confiance pour protéger leur image.",
                  },
                  {
                    icon: Clock,
                    title: "Intervention rapide 24-48h",
                    desc: "Pas de temps à perdre. On agit vite pour stopper la propagation de tes contenus.",
                  },
                  {
                    icon: UserCheck,
                    title: "Taskforce dédiée",
                    desc: "Pas un bot, pas une IA seule. Une vraie équipe humaine qui s'occupe de ton cas.",
                  },
                  {
                    icon: Lock,
                    title: "100% Confidentiel",
                    desc: "Discrétion totale. Personne ne saura que tu fais appel à nous.",
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
            </div>
          )}

          {/* Slide 2: Le Problème Concret */}
          {slideMatches(2) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Le Problème Concret
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Ce que les fuites font à ton business
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: AlertTriangle,
                    title: "Fuites qui ruinent l'image",
                    desc: "Ton contenu premium diffusé gratuitement partout, impossible de contrôler.",
                  },
                  {
                    icon: TrendingDown,
                    title: "Repost en boucle",
                    desc: "Tu supprimes 1 lien, 20 reviennent. Les pirates automatisent tout.",
                  },
                  {
                    icon: FileWarning,
                    title: "Sites anonymes impossibles à contacter",
                    desc: "Hébergés en Moldavie, Russie, Hong Kong... Aucune réponse à tes messages.",
                  },
                  {
                    icon: TrendingDown,
                    title: "Perte de revenus",
                    desc: "Pourquoi payer si c'est gratuit ailleurs ? Tes abonnés potentiels disparaissent.",
                  },
                  {
                    icon: Heart,
                    title: "Stress permanent",
                    desc: "\"Je poste mais j'ai peur que tout fuite encore.\" L'angoisse de chaque publication.",
                  },
                  {
                    icon: Eye,
                    title: "Famille & amis",
                    desc: "La peur que tes proches tombent dessus par hasard sur Google.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 backdrop-blur-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-500/5 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-zinc-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 3: Ce Que Nous Trouvons */}
          {slideMatches(3) && (
            <div className="w-full max-w-5xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ce Que Nous Trouvons En Général
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Les créateurs sous-estiment toujours l'ampleur
              </motion.p>
              <div className="space-y-4">
                {[
                  { icon: Search, text: "Dizaines de sites miroirs avec ton pseudo" },
                  { icon: FileWarning, text: "Copies sur pages russes/moldaves impossibles à tracer" },
                  { icon: X, text: "Comptes fake qui se font passer pour toi" },
                  { icon: MessageSquare, text: "Threads cachés / forums privés où tout circule" },
                  { icon: Search, text: "Fuites Google Images / Ton vrai nom apparaît dans les résultats" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur flex items-center gap-4 hover:border-[#E5C268]/50 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#E5C268]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#E5C268]" />
                      </div>
                      <p className="text-white text-lg">{item.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 4: D'où viennent les fuites */}
          {slideMatches(4) && (
            <div className="w-full max-w-5xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                D'où viennent les fuites ?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Tu ne peux pas contrôler ça seule. C'est un écosystème entier.
              </motion.p>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { icon: Webhook, text: "Sites automatiques qui volent ton contenu dès qu'il est posté" },
                  { icon: Globe, text: "Copies russes/moldaves qui republient sans limite" },
                  { icon: Users, text: "Fans mal intentionnés qui partagent en privé" },
                  { icon: X, text: "Comptes fake qui se font passer pour toi" },
                  { icon: MessageSquare, text: "Forums cachés + Telegram" },
                  { icon: Database, text: "Mirror sites (copies d'un site en 30 versions différentes)" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur hover:border-red-500/40 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mt-1">
                          <Icon className="w-5 h-5 text-red-400" />
                        </div>
                        <p className="text-white">{item.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 5: Pourquoi C'est Difficile Sans Nous */}
          {slideMatches(5) && (
            <div className="w-full max-w-5xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Pourquoi C'est Difficile Sans Nous
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Seul = Mission impossible
              </motion.p>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { icon: X, text: "Hébergeurs hors UE qui ignorent les lois françaises" },
                  { icon: Lock, text: "Identités masquées derrière des services anonymes" },
                  { icon: MessageSquare, text: "Sites qui ignorent totalement les DM et demandes" },
                  { icon: Zap, text: "Repost automatique dès que tu supprimes 1 lien" },
                  { icon: FileCheck, text: "Manque de preuves juridiques valables" },
                  { icon: AlertTriangle, text: "\"Tu supprimes 1 lien → 20 reviennent le lendemain\"" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur hover:border-red-500/40 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mt-1">
                          <Icon className="w-5 h-5 text-red-400" />
                        </div>
                        <p className="text-white">{item.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 6: Pourquoi agir maintenant */}
          {slideMatches(6) && (
            <div className="w-full max-w-5xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Pourquoi agir maintenant ?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Agir tôt = sauver ton image et ton business
              </motion.p>
              <div className="space-y-4">
                {[
                  { icon: Timer, text: "Plus tu attends, plus ça circule", color: "red" },
                  { icon: Search, text: "Plus le contenu reste en ligne, plus Google l'indexe", color: "red" },
                  { icon: RotateCw, text: "Les reposts deviennent automatiques (1 fuite → 20 copies)", color: "red" },
                  { icon: Heart, text: "L'impact mental et réputationnel augmente", color: "red" },
                  { icon: TrendingDown, text: "Les revenus baissent si les leaks se diffusent trop", color: "red" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-5 rounded-xl bg-zinc-900/50 border border-red-500/20 backdrop-blur flex items-center gap-4 hover:border-red-500/50 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-red-400" />
                      </div>
                      <p className="text-white text-lg">{item.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 7: Notre Solution */}
          {slideMatches(7) && (
            <div className="w-full max-w-5xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Notre Solution
              </motion.h2>
              <div className="space-y-5">
                {[
                  { num: "1", icon: Scan, title: "On scanne tous les jours", desc: "Surveillance 24/7 de centaines de plateformes et forums." },
                  { num: "2", icon: Target, title: "On cible les fuites les plus graves", desc: "Priorisation intelligente : on s'attaque d'abord aux liens les plus visibles." },
                  { num: "3", icon: FileCheck, title: "On envoie des DMCA juridiques", desc: "Pas des messages aléatoires. Des actes juridiques qui ont du poids." },
                  { num: "4", icon: Zap, title: "On escalade aux hébergeurs difficiles", desc: "Cloudflare, registrars, ICANN... on va jusqu'au bout." },
                  { num: "5", icon: Bell, title: "On surveille pour éviter le repost", desc: "Protection continue. Si ça revient, on neutralise à nouveau." },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.15 }}
                      className="p-6 rounded-2xl bg-gradient-to-r from-[#E5C268]/10 to-transparent border-l-4 border-[#E5C268] backdrop-blur"
                    >
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-xl bg-[#E5C268] flex items-center justify-center text-black text-2xl font-bold">
                            {item.num}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Icon className="w-6 h-6 text-[#E5C268]" />
                            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                          </div>
                          <p className="text-zinc-400 text-lg">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 8: Ce que tu n'as PAS besoin de faire */}
          {slideMatches(8) && (
            <div className="w-full max-w-5xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ce que tu n'as PAS besoin de faire
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Tu postes, on protège.
              </motion.p>
              <div className="space-y-4">
                {[
                  { icon: Search, text: "Pas besoin de chercher tes fuites → on trouve tout" },
                  { icon: MessageSquare, text: "Pas besoin de contacter les sites" },
                  { icon: Scale, text: "Pas besoin de comprendre le juridique" },
                  { icon: Bell, text: "Pas besoin de surveiller ton pseudo" },
                  { icon: X, text: "Pas besoin d'envoyer 100 messages" },
                  { icon: Heart, text: "Pas besoin de gérer le stress" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-5 rounded-xl bg-gradient-to-r from-[#E5C268]/10 to-transparent border-l-4 border-[#E5C268] backdrop-blur flex items-center gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#E5C268]/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#E5C268]" />
                      </div>
                      <p className="text-white text-lg">{item.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 9: Comment Ça Marche */}
          {slideMatches(9) && (
            <div className="w-full max-w-5xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-center"
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
                Simple, rapide, sans stress
              </motion.p>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Tu nous donnes ton pseudo", desc: "Ou tes comptes officiels MYM/OF. C'est tout ce qu'on a besoin." },
                  { step: "2", title: "On analyse tout ce qui existe", desc: "Scan complet de tout le web pour trouver tes fuites." },
                  { step: "3", title: "On nettoie + on supprime", desc: "Action juridique immédiate sur chaque lien trouvé." },
                  { step: "4", title: "Tu reçois des rapports clairs", desc: "Suivi transparent de chaque action menée." },
                  { step: "5", title: "Ton image reste protégée", desc: "Surveillance continue pour empêcher les retours." },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-6 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur hover:border-[#E5C268]/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E5C268] flex items-center justify-center text-black text-xl font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-zinc-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 10: Escalade Légale (Simplifiée) */}
          {slideMatches(10) && (
            <div className="w-full max-w-5xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Escalade Légale
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Tu n'as rien à faire. On s'occupe de tout.
              </motion.p>
              <div className="space-y-5">
                {[
                  {
                    num: "1",
                    icon: FileCheck,
                    title: "DMCA officiel",
                    desc: "On envoie une demande légale de retrait.",
                  },
                  {
                    num: "2",
                    icon: Database,
                    title: "Pression sur l'hébergeur",
                    desc: "Si le site ignore → on contacte l'entreprise qui héberge le site.",
                  },
                  {
                    num: "3",
                    icon: Globe,
                    title: "Pression sur le registrar",
                    desc: "Si l'hébergeur ignore → on contacte l'entreprise qui gère le nom de domaine.",
                  },
                  {
                    num: "4",
                    icon: Target,
                    title: "Signalement ICANN",
                    desc: "Si le registrar ignore → on ouvre un dossier ICANN (autorité mondiale des domaines).",
                  },
                  {
                    num: "5",
                    icon: Building2,
                    title: "Poursuites judiciaires",
                    desc: "Si ICANN n'agit pas → nous engageons des poursuites légales via nos partenaires juridiques.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.15 }}
                      className="p-6 rounded-2xl bg-gradient-to-r from-[#E5C268]/10 to-transparent border-l-4 border-[#E5C268] backdrop-blur"
                    >
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-xl bg-[#E5C268] flex items-center justify-center text-black text-2xl font-bold">
                            {item.num}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Icon className="w-6 h-6 text-[#E5C268]" />
                            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                          </div>
                          <p className="text-zinc-400 text-lg">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-8 p-6 rounded-xl bg-[#E5C268]/10 border border-[#E5C268]/30 backdrop-blur text-center"
              >
                <p className="text-white text-lg">
                  <span className="text-[#E5C268] font-bold">87% des cas</span> → le lien disparaît.
                  <br />
                  Dans les cas extrêmes → le site devient inutilisable ou semble "cassé".
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="mt-6 p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur text-center"
              >
                <p className="text-zinc-300 text-base">
                  C'est ce qui nous différencie des agences "DMCA only". Nous allons jusqu'au bout.
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 11: Exemple de Rapports */}
          {slideMatches(11) && (
            <div className="w-full max-w-5xl mx-auto text-center">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Exemple de Rapports
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12"
              >
                Le travail est réel et traçable
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-500/30 backdrop-blur"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Avant</h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
                      <span className="text-zinc-300">Liens trouvés</span>
                      <span className="text-red-400 font-bold text-xl">247</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
                      <span className="text-zinc-300">Sites hébergeurs</span>
                      <span className="text-red-400 font-bold text-xl">34</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
                      <span className="text-zinc-300">Forums privés</span>
                      <span className="text-red-400 font-bold text-xl">12</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 border-2 border-[#E5C268]/30 backdrop-blur"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Après 30 jours</h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
                      <span className="text-zinc-300">Liens supprimés</span>
                      <span className="text-[#E5C268] font-bold text-xl">215</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
                      <span className="text-zinc-300">Taux de réussite</span>
                      <span className="text-[#E5C268] font-bold text-xl">87%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-lg">
                      <span className="text-zinc-300">Délai moyen</span>
                      <span className="text-[#E5C268] font-bold text-xl">48h</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 p-5 rounded-xl bg-[#E5C268]/10 border border-[#E5C268]/30 backdrop-blur"
              >
                <p className="text-white text-lg">
                  Action dans les <span className="text-[#E5C268] font-bold">24-48 heures</span> suivant ton inscription
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 12: Pourquoi Notre Méthode Fonctionne */}
          {slideMatches(12) && (
            <div className="w-full max-w-5xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Pourquoi Notre Méthode Fonctionne
              </motion.h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: FileCheck, title: "DMCA juridique", desc: "Pas de simple email. Des actes juridiques avec poids légal réel." },
                  { icon: Zap, title: "Escalades registrar/host", desc: "On remonte jusqu'à la source quand les sites ignorent nos demandes." },
                  { icon: Target, title: "Pression Cloudflare/ICANN", desc: "On actionne les leviers les plus puissants du web." },
                  { icon: Bell, title: "Surveillance anti-repost", desc: "Protection continue pour empêcher que ça revienne." },
                  { icon: UserCheck, title: "Agent dédié", desc: "Un humain qui suit ton cas personnellement." },
                  { icon: Sparkles, title: "Technologie propriétaire", desc: "Nos outils détectent ce que les autres manquent." },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 backdrop-blur-xl border border-zinc-800/60 hover:border-[#E5C268]/50 transition-all duration-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#E5C268]/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#E5C268]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-zinc-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 13: Témoignages */}
          {slideMatches(13) && (
            <div className="w-full max-w-5xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ce Que Disent Les Créatrices
              </motion.h2>
              <div className="space-y-6">
                {[
                  {
                    quote: "J'ai récupéré la maîtrise de mon image après 4 ans de fuites incontrôlables. Enfin libre.",
                    author: "Créatrice MYM",
                    rating: 5,
                  },
                  {
                    quote: "Plus aucune fuite sur Google. Mon vrai nom n'apparaît plus. Je peux enfin respirer.",
                    author: "Créatrice OnlyFans",
                    rating: 5,
                  },
                  {
                    quote: "L'équipe est réactive, discrète, efficace. Je n'ai rien eu à faire, tout a été géré.",
                    author: "Modèle Webcam",
                    rating: 5,
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 backdrop-blur-xl border border-zinc-800/60 hover:border-[#E5C268]/50 transition-all duration-500"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <Quote className="w-8 h-8 text-[#E5C268] flex-shrink-0" />
                      <p className="text-lg text-white italic leading-relaxed">{testimonial.quote}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-zinc-400">— {testimonial.author}</p>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#E5C268] text-[#E5C268]" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 14: Résultats Globaux */}
          {slideMatches(14) && (
            <div className="w-full max-w-6xl mx-auto text-center">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Résultats Globaux
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "87%", label: "Fuites neutralisées", icon: CheckCircle },
                  { value: "99.2%", label: "Taux de réussite", icon: Award },
                  { value: "500k+", label: "Contenus retirés", icon: Shield },
                  { value: "24-48h", label: "Premiers résultats", icon: Timer },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1, type: "spring" }}
                      className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 border-2 border-[#E5C268]/30 backdrop-blur hover:scale-105 transition-transform duration-300"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E5C268]/20 mb-4">
                        <Icon className="w-8 h-8 text-[#E5C268]" />
                      </div>
                      <p className="text-5xl font-bold text-[#E5C268] mb-2">{stat.value}</p>
                      <p className="text-sm uppercase tracking-wider text-zinc-300">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 15: Plans & Tarifs */}
          {slideMatches(15) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Plans & Tarifs
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="p-8 rounded-2xl bg-zinc-900/50 border-2 border-zinc-800/60 backdrop-blur hover:border-[#E5C268]/50 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-[#E5C268]">79€</span>
                      <span className="text-zinc-400">/mois</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {["Scan quotidien", "Suppressions DMCA", "Rapports mensuels", "Support par email"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-300">
                        <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 border-2 border-[#E5C268] backdrop-blur relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#E5C268] text-black text-xs font-bold">
                    RECOMMANDÉ
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Full Protection</h3>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-[#E5C268]">99€</span>
                      <span className="text-zinc-400">/mois</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Tout du Starter",
                      "Escalades registrar/host",
                      "Surveillance 24/7",
                      "Agent dédié",
                      "Support prioritaire",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-white">
                        <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          )}

          {/* Slide 16: FAQ */}
          {slideMatches(16) && (
            <div className="w-full max-w-4xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Questions Fréquentes
              </motion.h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Quand je vois un lien, je fais quoi ?",
                    a: "Tu nous l'envoies et on s'en occupe immédiatement. Tu n'as rien à faire d'autre.",
                  },
                  {
                    q: "Est-ce confidentiel ?",
                    a: "100%. Personne ne saura que tu utilises nos services. Discrétion totale garantie.",
                  },
                  {
                    q: "Est-ce que tout se supprime ?",
                    a: "87% des fuites sont neutralisées. Les 13% restants sont sur des sites ultra-résistants qu'on continue à harceler.",
                  },
                  {
                    q: "Est-ce que je dois faire quelque chose ?",
                    a: "Non. Tu nous donnes tes infos, on fait tout le reste. C'est notre job.",
                  },
                  {
                    q: "Est-ce que ça revient ?",
                    a: "Oui, si on ne surveille pas. C'est pour ça qu'on a la surveillance continue 24/7.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur hover:border-[#E5C268]/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <HelpCircle className="w-6 h-6 text-[#E5C268] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                        <p className="text-zinc-400">{faq.a}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 17: Prochaines Étapes */}
          {slideMatches(17) && (
            <div className="w-full max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Prochaines Étapes
              </motion.h2>
              <div className="space-y-6">
                {[
                  { icon: Search, title: "Audit gratuit", desc: "On analyse ta situation actuelle sans engagement" },
                  { icon: Lock, title: "Analyse confidentielle", desc: "Tout reste entre nous, discrétion garantie" },
                  { icon: Eye, title: "On te montre où apparaît ton contenu", desc: "Rapport complet de toutes les fuites trouvées" },
                  { icon: Target, title: "On fixe un plan d'action", desc: "Stratégie personnalisée pour neutraliser les fuites" },
                ].map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.15 }}
                      className="p-6 rounded-2xl bg-gradient-to-r from-[#E5C268]/10 to-transparent border-l-4 border-[#E5C268] backdrop-blur text-left"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#E5C268]/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#E5C268]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                          <p className="text-zinc-400">{step.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10"
              >
                <a
                  href="https://cal.com/crdprotect/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#E5C268] hover:bg-[#E5C268]/90 text-black font-bold text-lg transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Démarrer l'audit gratuit
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          )}

          {/* Slide 18: Final */}
          {slideMatches(17) && (
            <div className="w-full max-w-5xl mx-auto text-center space-y-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-10"
              >
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[#E5C268]/25 via-[#E5C268]/10 to-transparent border-2 border-[#E5C268]/40 shadow-[0_10px_60px_rgba(229,194,104,0.3)] mb-8">
                  <Heart className="w-16 h-16 text-[#E5C268]" />
                </div>
              </motion.div>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ton image est ton business.
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-3xl text-[#E5C268] font-semibold"
              >
                On la protège. Tu crées.
                <br />
                On s'occupe du reste.
              </motion.p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-12"
              >
                <a
                  href="https://cal.com/crdprotect/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#E5C268] hover:bg-[#E5C268]/90 text-black font-bold text-xl transition-all duration-300 hover:scale-110 shadow-xl shadow-[#E5C268]/30"
                >
                  <Shield className="w-6 h-6" />
                  Démarrer la protection
                  <ArrowRight className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ProtectedCreatorPresentation = () => (
  <PasswordProtection correctPassword="240307" storageKey="creator_presentation_auth">
    <CreatorPresentation />
  </PasswordProtection>
);

export default ProtectedCreatorPresentation;
