import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PasswordProtection } from "@/components/PasswordProtection";
import {
  Shield,
  Users,
  AlertTriangle,
  Globe,
  Zap,
  CheckCircle2,
  Lock,
  ArrowRight,
  ArrowLeft,
  Scan,
  Eye,
  FileCheck,
  Scale,
  Clock,
  Target,
  Building2,
  Briefcase,
  Bell,
  Maximize,
  Minimize,
  X,
  FileText,
  Gavel,
  TrendingUp,
} from "lucide-react";

const TOTAL_SLIDES = 11;

const AgencyPresentation2 = () => {
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
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
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
                  Confidential Overview
                </p>
              </motion.div>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Content Removal Desk (CRD)
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl sm:text-3xl text-[#E5C268] max-w-3xl mx-auto font-medium"
              >
                Digital Protection & Takedown Agency
              </motion.p>
            </div>
          )}

          {/* Slide 1: Who We Are */}
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
                className="text-xl sm:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed"
              >
                Content Removal Desk is a French-focused digital protection agency.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed mt-6"
              >
                We specialise in removing leaked content, detecting new exposures, and managing legal escalation for creators, entrepreneurs, and high-exposure individuals.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed mt-6"
              >
                Our approach combines technical expertise, legal structure, and strategic monitoring.
              </motion.p>
            </div>
          )}

          {/* Slide 2: Who We Protect */}
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
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Users, label: "Digital creators (MYM, OF, Influence)" },
                  { icon: Building2, label: "Entrepreneurs & brands" },
                  { icon: Target, label: "Public figures facing exposure risks" },
                  { icon: Shield, label: "Individuals subject to leaks, harassment, or non-consensual distribution" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 backdrop-blur-xl border border-zinc-800/60 hover:border-[#E5C268]/50 transition-all duration-500 text-center"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 mb-4">
                        <Icon className="w-8 h-8 text-[#E5C268]" />
                      </div>
                      <p className="text-lg font-medium text-white">{item.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 3: The Problem */}
          {slideMatches(3) && (
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
                High-level landscape challenges
              </motion.p>
              <div className="space-y-4">
                {[
                  "Growing volume of leaked content across clones & mirrors",
                  "Anonymous hosts (AlexHost, Moldova, NL, offshore)",
                  "Faster replication and scraping",
                  "Platforms ignoring removal requests",
                  "Reputational & safety risks",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/30 transition-all duration-500 flex items-start gap-4"
                  >
                    <AlertTriangle className="w-6 h-6 text-[#E5C268] flex-shrink-0 mt-1" />
                    <p className="text-lg text-zinc-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 4: Our Core Services */}
          {slideMatches(4) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Our Core Services
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Three pillars of protection
              </motion.p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Zap,
                    title: "1. Takedown Operations",
                    desc: "Removing leaked photos/videos from hosts, registrars, search engines, social platforms.",
                  },
                  {
                    icon: Scan,
                    title: "2. Monitoring & Scanning",
                    desc: "Daily detection of new leaks to react before damage grows.",
                  },
                  {
                    icon: Scale,
                    title: "3. Legal Escalation Framework",
                    desc: "Escalation chain: platform → registrar → host → compliance → search engines.",
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
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 mb-6">
                        <Icon className="w-8 h-8 text-[#E5C268]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-zinc-400">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 5: How We Work */}
          {slideMatches(5) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                How We Work
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Methodology
              </motion.p>
              <div className="space-y-4">
                {[
                  "Identification & verification of infringing material",
                  "Classification by severity & hosting difficulty",
                  "Takedown requests & follow-ups",
                  "Legal escalation when needed",
                  "Reporting & tracking",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/30 transition-all duration-500 flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E5C268] flex items-center justify-center text-black font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-lg text-zinc-300 flex-1">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 6: Hard-to-Remove Sites Expertise */}
          {slideMatches(6) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Hard-to-Remove Sites Expertise
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Where we demonstrate credibility
              </motion.p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Offshore hosts",
                  "Mirror networks",
                  "Cloned domains",
                  "Host-registrar bridges",
                  "Sites with closed abuse channels",
                  "Cyberlocker cascades",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/30 transition-all duration-500 flex items-center gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#E5C268] flex-shrink-0" />
                    <p className="text-lg text-zinc-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 7: Why Partners Choose CRD */}
          {slideMatches(7) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Why Partners Choose CRD
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                What makes us the right integration partner
              </motion.p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Fast execution",
                  "Discreet and confidential",
                  "Structured escalation workflow",
                  "Experience with hard platforms",
                  "Reporting adapted to partner needs",
                  "High-trust, long-term collaboration",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/50 transition-all duration-500 flex items-center gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#E5C268] flex-shrink-0" />
                    <p className="text-lg text-white font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 8: Collaboration Models */}
          {slideMatches(8) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Collaboration Models
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Two simple options for integration
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Briefcase,
                    title: "Case-by-Case Collaboration",
                    desc: "You send cases → we handle → we report back.",
                  },
                  {
                    icon: Building2,
                    title: "Partner Integration",
                    desc: "We create a private channel + reporting format for your clients. Priority queue.",
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
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 mb-6">
                        <Icon className="w-8 h-8 text-[#E5C268]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-lg text-zinc-300">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 9: Next Steps */}
          {slideMatches(9) && (
            <div className="w-full max-w-5xl mx-auto text-center">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Next Steps
              </motion.h2>
              <div className="space-y-6">
                {[
                  "We receive anonymized use cases",
                  "We evaluate the risks",
                  "We propose a tailored collaboration",
                  "Optional NDA for confidentiality",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.15 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/30 transition-all duration-500 flex items-center justify-center gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E5C268] flex items-center justify-center text-black font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-xl text-zinc-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 10: CRD Values (Optional but Powerful) */}
          {slideMatches(10) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                CRD Values
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                What defines us as a serious, stable agency
              </motion.p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Lock, label: "Confidentiality" },
                  { icon: Target, label: "Precision" },
                  { icon: Clock, label: "Calm execution" },
                  { icon: Scale, label: "Legal integrity" },
                  { icon: Shield, label: "Long-term protection" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/50 transition-all duration-500 text-center"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 mb-4">
                        <Icon className="w-8 h-8 text-[#E5C268]" />
                      </div>
                      <p className="text-xl font-bold text-white">{item.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ProtectedAgencyPresentation2 = () => (
  <PasswordProtection correctPassword="240307" storageKey="agency_presentation_2_auth">
    <AgencyPresentation2 />
  </PasswordProtection>
);

export default ProtectedAgencyPresentation2;

