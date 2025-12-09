import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PasswordProtection } from "@/components/PasswordProtection";
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
  Maximize,
  Minimize,
} from "lucide-react";

const TOTAL_SLIDES = 22;

const CRDPresentationEN = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const totalSlides = TOTAL_SLIDES;
  const slideMatches = (id: number) => currentSlide === id;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  // Fullscreen functionality
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }, []);

  // Track fullscreen state changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
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
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextSlide, prevSlide, totalSlides, toggleFullscreen]);

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
      {/* Fullscreen toggle button */}
      <button
        onClick={toggleFullscreen}
        className="fixed top-6 right-6 z-50 p-4 rounded-full bg-zinc-900/70 backdrop-blur-xl border-2 border-zinc-800/60 hover:border-[#E5C268]/70 text-[#E5C268] hover:bg-zinc-900/90 hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl shadow-black/50 group"
        aria-label={isFullscreen ? "Exit fullscreen (F)" : "Enter fullscreen (F)"}
        title={isFullscreen ? "Exit fullscreen (F)" : "Enter fullscreen (F)"}
      >
        {isFullscreen ? (
          <Minimize className="w-5 h-5" />
        ) : (
          <Maximize className="w-5 h-5" />
        )}
      </button>

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
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows - Enhanced */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="fixed left-6 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-4 sm:p-5 rounded-full bg-zinc-900/70 backdrop-blur-xl border-2 border-zinc-800/60 hover:border-[#E5C268]/70 text-[#E5C268] hover:bg-zinc-900/90 hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed shadow-xl shadow-black/50"
        aria-label="Previous slide"
      >
        <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>
      <button
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        className="fixed right-6 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-4 sm:p-5 rounded-full bg-zinc-900/70 backdrop-blur-xl border-2 border-zinc-800/60 hover:border-[#E5C268]/70 text-[#E5C268] hover:bg-zinc-900/90 hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed shadow-xl shadow-black/50"
        aria-label="Next slide"
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
                  French Legal-Tech Taskforce • Hybrid Escalations
                </p>
              </motion.div>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                The French taskforce that neutralizes the most resistant leaks.
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto"
              >
                Complete escalation chain (proprietary scan → enhanced DMCA → host → registrar → ICANN) operated by senior agents and our internal modules to protect agencies, studios, and at-risk creators.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-400"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C268]" />
                  <span>Dedicated crisis agent per portfolio</span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C268]" />
                  <span>ICANN escalations, hosts, registrars</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C268]" />
                  <span>24/7 monitoring + legally actionable reports</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6"
              >
                {[
                  { value: "500+", label: "creators & agencies under protection" },
                  { value: "450+", label: "platforms continuously monitored" },
                  { value: "99.2%", label: "resolution rate on resistant cases" },
                  { value: "24h", label: "to trigger first neutralization" },
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
                Who We Are
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12"
              >
                France's #1 digital protection taskforce
              </motion.p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Rocket,
                    title: "French legal-tech taskforce",
                    desc: "Teams composed of former IP lawyers, cyber analysts, and escalation operators based in Paris & Lyon.",
                  },
                  {
                    icon: Code,
                    title: "Proprietary technology",
                    desc: "Internal scanner, timestamped evidence, escalation files generated as legal documents.",
                  },
                  {
                    icon: Scale,
                    title: "International legal network",
                    desc: "Partners in Moldova, Hong Kong, EU & US to activate registrar complaints, host pressure, ICANN.",
                  },
                  {
                    icon: Users,
                    title: "Dedicated crisis management",
                    desc: "One senior agent per agency, direct line 24/7 and complete coordination of complex escalations.",
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
                  <span className="text-[#E5C268] font-bold">We are a team of specialists</span> — lawyers,
                  analysts, engineers, and dedicated agents —{" "}
                  <span className="text-[#E5C268] font-bold">mobilized every day for your creators.</span>
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
                Who We Protect
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { icon: Video, label: "Premium studios & agencies", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                  { icon: TrendingUp, label: "High-audience MYM / OF creators", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                  { icon: Users, label: "Managed influencers & talents", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                  { icon: Building2, label: "High-risk media brands", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                  { icon: Image, label: "Webcam models & private studios", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
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
                The Problem
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                What repeated leaks inflict on your revenue
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {[
                  { icon: FileWarning, label: "Endless reposts", desc: "Each leak is re-uploaded on Moldovan, Russian, or French platforms for years." },
                  { icon: UserCheck, label: "Monetized impersonations", desc: "Fake accounts that capture subscriptions & tips instead of your talents." },
                  { icon: Upload, label: "Endless loop", desc: "A deleted link reappears elsewhere as long as no taskforce directs the escalation chain." },
                  { icon: AlertTriangle, label: "Destroyed image & sales", desc: "An exposed creator immediately loses private sales, subscriptions, and agent trust." },
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
                Our CRD Method
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl text-[#E5C268] mb-12 text-center"
              >
                The complete escalation chain, operated internally
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Scan, label: "Internal 24/7 scanner", desc: "Monitoring 450+ platforms, AI fingerprints, timestamped captures." },
                  { icon: Eye, label: "Human analysts", desc: "Manual evidence qualification, classification by criticality." },
                  { icon: Zap, label: "Enhanced DMCA", desc: "Notices drafted as legal documents, sent within <24h." },
                  { icon: Globe, label: "Escalation chain", desc: "Recalcitrant host → registrar → ICANN until suspension." },
                  { icon: Scale, label: "Real legal pressure", desc: "Moldova / Hong Kong / EU / US network for targeted legal actions." },
                  { icon: Shield, label: "Proactive monitoring", desc: "Blocking reuploads before mass distribution + long-term tracking." },
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
                How It Works
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                An operational protocol in 5 steps
              </motion.p>
              <div className="relative">
                {/* Connection lines */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E5C268]/20 via-[#E5C268]/40 to-[#E5C268]/20 transform -translate-y-1/2" />
                
                <div className="grid md:grid-cols-5 gap-4 md:gap-6">
                  {[
                    { icon: UserCheck, step: "1", title: "Confidential onboarding", desc: "Creator mapping, secure access, SLA protocol." },
                    { icon: Settings, step: "2", title: "Calibration", desc: "Selection of critical platforms, sensitive keywords, geographic zones." },
                    { icon: Scan, step: "3", title: "Active monitoring", desc: "Internal scanner + human hunting, detection before mass distribution." },
                    { icon: Zap, step: "4", title: "Escalation chain", desc: "Legal DMCA → host → registrar → ICANN until suspension." },
                    { icon: BarChart3, step: "5", title: "Tracking & reports", desc: "Dashboard, timestamped evidence, briefs ready to share." },
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
                Dedicated Crisis Agents
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12"
              >
                Human management for each sensitive case
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Users,
                    title: "Escalation commander",
                    desc: "One senior point of contact, responsible for technical + legal strategy and authorized to activate our international network.",
                  },
                  {
                    icon: Briefcase,
                    title: "24/7 crisis management",
                    desc: "Real-time incident tracking, automatic prioritization, daily briefings for your internal teams.",
                  },
                  {
                    icon: Bell,
                    title: "Direct communication",
                    desc: "Reports via SecureChat/Signal, responses within minutes, proactive alerts before you even ask.",
                  },
                  {
                    icon: FileCheck,
                    title: "Legally ready files",
                    desc: "Every action documented, timestamped evidence, complete history to reassure creators and legal partners.",
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
                International Legal Network
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                A global escalation chain ready to strike
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { number: "10+", label: "partners (Moldova, HK, EU, US)", icon: Gavel },
                  { number: "15+", label: "activatable jurisdictions", icon: Globe },
                  { number: "20+", label: "difficult hosts & registrars (AlexHost, FlokiNet…)", icon: FileText },
                  { number: "5+", label: "dedicated crisis & IP firms", icon: Scale },
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
                  <span className="text-[#E5C268] font-bold">Formal complaints & host pressure</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Targeted actions for "impossible" cases</span>
                </p>
                <p className="text-center text-zinc-400 mt-2">
                  We operate in France, Europe, and internationally as needed
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
                Our Partners & Network
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12"
              >
                Hosts, registrars, and institutions that still respond to our cases
              </motion.p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {[
                  { icon: Gavel, title: "Legal taskforce", count: "10+", desc: "IP & tech litigation firms (FR, EU, HK, US)" },
                  { icon: Globe, title: "Active jurisdictions", count: "15+", desc: "Procedures and institutional contacts" },
                  { icon: Building2, title: "Difficult hosts", count: "20+", desc: "AlexHost, FlokiNet, HostSailor, etc." },
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
                CRD Ecosystem
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Tech + legal combined in a single cockpit
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Code,
                    title: "CRD Scanner",
                    desc: "AI + human monitoring on 450+ platforms, specific signatures Leakimedia/Sxyprn/Erome.",
                  },
                  {
                    icon: BarChart3,
                    title: "Mission Control Dashboard",
                    desc: "Consolidated agency view, timestamps, PDF exports ready for your creators / lawyers.",
                  },
                  {
                    icon: Scale,
                    title: "Integrated escalations",
                    desc: "Enhanced DMCA → host → registrar → ICANN, everything orchestrated from the same interface.",
                  },
                  {
                    icon: FileCheck,
                    title: "Auto-generated legal files",
                    desc: "Captures, hash, timestamps, memos ready to sign for host, registrar, or lawyer.",
                  },
                  {
                    icon: Bell,
                    title: "Multi-channel alerting",
                    desc: "Email, Signal, Slack/Teams: automatic prioritization and playbooks adapted to each creator.",
                  },
                  {
                    icon: Lock,
                    title: "Security & compliance",
                    desc: "Sovereign infrastructure, end-to-end encryption, complete audit trail, compartmentalized agency/CRD access.",
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
                Real Client Cases
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Concrete results, not promises
              </motion.p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Born to be f*ck",
                    subtitle: "Complete suspension",
                    stats: "70+ links • registrar block • 19 days",
                    desc: "Moldovan site hosted on AlexHost. Ignored DMCA → host pressure → registrar complaint → ICANN file drafted as a legal action. Domain frozen, lost revenue for pirates.",
                    image: caseStudy4,
                    gradient: "from-red-500/30 via-orange-500/20 to-red-500/30",
                  },
                  {
                    title: "talullax",
                    subtitle: "Preventive operation",
                    stats: "600+ videos • 300 links neutralized • 30 days",
                    desc: "Premium influencer whose videos leaked every night. CRD scanner + human hunting → removals before public distribution, then host pressure on FlokiNet to cut the loop.",
                    image: caseStudy5,
                    gradient: "from-yellow-500/30 via-green-500/20 to-yellow-500/30",
                  },
                  {
                    title: "Leakimedia",
                    subtitle: "Confidential case",
                    stats: "Complete removal • 2 weeks",
                    desc: "French platform reputed to be impossible. We combined legal summons + CNIL escalation + operator contact. Files taken offline + ban on republishing within 48h.",
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
                        <span className="text-xs text-zinc-500">Mission successful</span>
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
                Why We Go Further
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Standard services stop at Google. We push all the way to operator suspension.
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
                    <h3 className="text-2xl font-bold text-white">Standard providers</h3>
                  </div>
                  <ul className="space-y-4 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Google de-indexing and PDF reports</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Generic copy/paste DMCA</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>No legal network or host pressure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Total powerlessness on AlexHost, FlokiNet, etc.</span>
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
                      <span>Scanner + preventive actions on 450+ platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Legal DMCA + targeted host pressure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Registrar/ICANN escalations + local complaints</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Resolution of so-called "impossible" cases</span>
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
                  <span className="text-[#E5C268] font-bold">Proprietary procedures</span>: Enhanced DMCA → host → registrar → ICANN, activated by{" "}
                  <span className="text-[#E5C268] font-bold">a global legal taskforce</span> to neutralize{" "}
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
                  "Dedicated agent per client",
                  "Internally developed tools",
                  "Daily scan 450+ sites",
                  "Systematic human verification",
                  "Real legal escalations",
                  "International host network",
                  "Real-time dashboard",
                  "Priority 24/7 support",
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
                Our Results
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                What our covert operations actually deliver
              </motion.p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { percentage: "99.2%", label: "Resolution of resistant cases", desc: "Confirmed host/registrar suspensions" },
                  { percentage: "87%", label: "Proactive neutralization rate", desc: "Reposts stopped before mass distribution" },
                  { percentage: "500k+", label: "Content removed", desc: "Including Leakimedia, Sxyprn, Erome, AlexHost mirror" },
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
                  <span className="text-[#E5C268] font-bold">500+ creators, agencies & studios</span> •{" "}
                  <span className="text-[#E5C268] font-bold">450+ mapped platforms</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Legal network Moldova / HK / EU / US</span>
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
                ROI & Measurable Impact
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                What your agency gains from the first weeks of collaboration
              </motion.p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Clock, value: "15+", unit: "h", label: "internal effort saved", desc: "We handle DMCA, evidence, escalations, and reports" },
                  { icon: DollarSign, value: "$X", unit: "/month", label: "revenue protected", desc: "Stopped leaks = loyal subscribers & controlled churn" },
                  { icon: TrendingUp, value: "99.2%", unit: "", label: "success rate observed", desc: "Guaranteed removals even on resistant platforms" },
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
                    title: "Why agencies choose us",
                    desc: "Turnkey taskforce: proprietary tech, lawyers, dedicated agent, consolidated reporting.",
                    items: [
                      { icon: Users, label: "Dedicated taskforce", sub: "Senior agent + lawyers + analysts connected to your team." },
                      { icon: Building2, label: "Unified management", sub: "Multi-creator view, grouped billing, automatic prioritization." },
                      { icon: Shield, label: "Guaranteed escalations", sub: "ICANN, registrars, hosts, and lawyers under one pipeline." },
                      { icon: Zap, label: "Agency SLA", sub: "Dedicated files, 24/7 crisis cell, responses within hours." },
                    ],
                  },
                  {
                    title: "What you offer your clients",
                    desc: "Concrete deliverables to nurture the relationship and prove your value.",
                    items: [
                      { icon: MonitorCheck, label: "Ready-to-deliver reporting", sub: "Exportable reports, white-label alerts, shared evidence." },
                      { icon: Crown, label: "Preserved relationship", sub: "Total white-label: your creators stay in your ecosystem." },
                      { icon: Building2, label: "Consolidated operations", sub: "Multi-creator, multi-agency, single interface." },
                      { icon: Shield, label: "Multi-account protection", sub: "Customized policies + preferential rates." },
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
                Speed of Action
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                A complete escalation triggered from day 0
              </motion.p>
              <div className="space-y-6">
                {[
                  { time: "24h", icon: Zap, title: "Scan & evidence", desc: "Proactive monitoring + legal capture + incident prioritization." },
                  { time: "48h", icon: CheckCircle2, title: "DMCA & host pressure", desc: "Personalized notices, direct pressure on host / CDN." },
                  { time: "7 days", icon: Shield, title: "Registrar & ICANN escalations", desc: "Complete file ready before day 7 to request early action (where a standard response can take 60 days)." },
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
                Plans & Pricing
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-[#E5C268] mb-2 text-center font-semibold"
              >
                Choose the protection level adapted to your exposure
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-zinc-400 mb-12 text-center"
              >
                Advanced escalations (registrar / ICANN) are included only in the Elite offer
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
                    <p className="text-sm text-zinc-400 mb-4">Continuous protection (monitoring + DMCA + host pressure).</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Weekly internal scanner + priority alerts</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Enhanced DMCA (50 links / month)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Automatic monitoring + human hunting</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Real-time tracking in Mission Control</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">De-indexing & SERP removal</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Private dashboard + PDF exports</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Advanced search (Bing, Yandex, Tor)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Dedicated agent (standard SLA)</span>
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
                    RECOMMENDED
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
                    <p className="text-sm text-zinc-300 mb-4">Complete protection + registrar/ICANN escalations + crisis cell.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Continuous scanner + live alerts</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Unlimited removal with escalation priority</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Facial recognition / watermark tracking</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Preventive blocking of reuploads</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Crisis manager + 24/7 hotline</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Official DMCA registration + attorney of record</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Proactive monitoring 7/7 + daily reports</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Senior crisis agent (4h SLA)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Registrar + ICANN escalations + local procedures included</span>
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
                  <span className="text-[#E5C268] font-bold">Agency rates on request</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Preferential rates</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Best quality/price ratio</span>
                </p>
                <p className="text-center text-zinc-400 mt-2 text-sm">
                  Detailed rates on request – adapted to your agency situation
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
                Security & Compliance
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Such a sensitive operation requires impeccable hygiene
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Lock, title: "End-to-end encryption", desc: "Encrypted storage, keys held by CRD only, partitions by agency." },
                  { icon: Shield, title: "GDPR & CNIL compliance", desc: "Data hosted in France, processing registers available on request." },
                  { icon: Key, title: "Granular access control", desc: "2FA, consultable logs, compartmentalization by creator/team." },
                  { icon: Database, title: "Sovereign infrastructure", desc: "FR datacenters, isolated backups, continuity plan tested quarterly." },
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
                  <span className="text-[#E5C268] font-bold">Absolute confidentiality</span> •{" "}
                  <span className="text-[#E5C268] font-bold">French infrastructure</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Isolated & auditable backups</span>
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
                AI vs Human
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                In this sensitive industry, only the combination of AI + human expertise works
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
                    <h3 className="text-2xl font-bold text-white">Automated solutions alone</h3>
                  </div>
                  <ul className="space-y-4 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">100% AI scan</span> incapable of understanding dedicated mirrors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">40% of leaks undetected</span> on FR / Russian / dark web platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Generic DMCA without legal weight</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>No human control, non-existent escalations</span>
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
                      <span><span className="font-semibold">Proprietary AI</span> + specialist analysts Leakimedia, AlexHost, etc.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">Human control</span> to prioritize each sensitive incident</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>DMCA drafted as signed legal notices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">Human decisions</span> to launch registrars, ICANN, local lawsuits</span>
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
                  <span className="text-[#E5C268] font-bold">AI accelerates, humans decide.</span> In this sensitive industry,{" "}
                  <span className="text-[#E5C268] font-bold">every decision counts.</span> That's why we combine{" "}
                  <span className="text-[#E5C268] font-bold">the power of AI with human expertise.</span>
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
                Frequently Asked Questions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                The answers your creators and teams ask before outsourcing
              </motion.p>
              <div className="space-y-4">
                {[
                  {
                    question: "How long to stop a critical leak?",
                    answer: "24h to trigger DMCA + host pressure, 48h to escalate registrar if needed.",
                  },
                  {
                    question: "What do you do when a host ignores the request?",
                    answer: "Automatic escalation: host > registrar > ICANN + activation of our legal network Moldova / HK / EU.",
                  },
                  {
                    question: "How do you guarantee file confidentiality?",
                    answer: "FR infrastructure, encrypted data, compartmentalized agency/CRD access, reinforced NDA for each agent.",
                  },
                  {
                    question: "Does the creator need to intervene?",
                    answer: "No. We operate in full delegation: scan, removal, escalation, legal reporting ready to sign.",
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
                CRD vs The Competition
              </motion.h2>
              <div className="space-y-6">
                {[
                  { feature: "Dedicated crisis agent", crd: true, other: false },
                  { feature: "Internal scanner 450+ platforms", crd: true, other: false },
                  { feature: "Legal DMCA + host pressure", crd: true, other: false },
                  { feature: "Registrar & ICANN escalations", crd: true, other: false },
                  { feature: "Legal network Moldova / HK / EU / US", crd: true, other: false },
                  { feature: "Timestamped files ready for lawyers", crd: true, other: "Basic reports" },
                  { feature: "Proactive monitoring & reupload blocking", crd: true, other: "Reactive" },
                  { feature: "24/7 support under SLA", crd: true, other: "Generic" },
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
                            <span className="text-sm text-zinc-400">Others</span>
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
                Next Steps
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl lg:text-4xl text-[#E5C268] mb-16 font-semibold"
              >
                Let's schedule an audit of your leaks and current escalations
              </motion.p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Shield, label: "Confidential exposure brief", desc: "We map your creators, studios, and sensitive platforms." },
                  { icon: Zap, label: "Current escalation audit", desc: "We analyze your DMCA, recalcitrant hosts, ICANN risks." },
                  { icon: Users, label: "Taskforce setup", desc: "Assignment of a senior agent + SLA protocol / reporting." },
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
                Take back control
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl sm:text-3xl lg:text-4xl text-[#E5C268] mb-16 font-medium"
              >
                — we operate the invisible offensive for you.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-16"
              >
                <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/50 transition-all duration-500">
                  <p className="text-xl sm:text-2xl text-white mb-6 font-medium">Let's engage in a discrete, documented, and lasting partnership.</p>
                  <div className="flex items-center justify-center gap-3 group cursor-pointer">
                    <div className="p-3 rounded-full bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 group-hover:from-[#E5C268]/30 group-hover:to-[#E5C268]/20 transition-all duration-300">
                      <Phone className="w-6 h-6 text-[#E5C268]" />
                    </div>
                    <span className="text-lg sm:text-xl text-[#E5C268] font-semibold group-hover:text-[#E5C268]/90 transition-colors">
                      Schedule a confidential audit
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

const ProtectedPresentationEN = () => (
  <PasswordProtection correctPassword="240307" storageKey="agency_presentation_auth">
    <CRDPresentationEN />
  </PasswordProtection>
);

export default ProtectedPresentationEN;
