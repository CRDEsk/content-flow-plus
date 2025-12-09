import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PasswordProtection } from "@/components/PasswordProtection";
import caseStudy2 from "@/assets/case-study-2.png";
import caseStudy4 from "@/assets/case-study-4.png";
import {
  Shield,
  Users,
  AlertTriangle,
  FileWarning,
  Zap,
  CheckCircle2,
  Globe,
  Server,
  Building2,
  Phone,
  X,
  Eye,
  FileCheck,
  Scale,
  Clock,
  Target,
  Crown,
  ArrowRight,
  ArrowLeft,
  Maximize,
  Minimize,
  Search,
  Database,
  Gavel,
  FileText,
  TrendingUp,
  Lock,
  BarChart3,
} from "lucide-react";

const TOTAL_SLIDES = 14;

const HardSiteEscalations = () => {
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
          {/* Slide 0: Title / Introduction */}
          {slideMatches(0) && (
            <div className="w-full max-w-6xl mx-auto text-center space-y-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-10"
              >
                <div className="inline-flex items-center justify-center w-36 h-36 rounded-full bg-gradient-to-br from-[#E5C268]/25 via-[#E5C268]/10 to-transparent border-2 border-[#E5C268]/40 shadow-[0_10px_60px_rgba(229,194,104,0.2)] mb-8">
                  <Server className="w-18 h-18 text-[#E5C268]" />
                </div>
                <p className="uppercase tracking-[0.4em] text-xs sm:text-sm text-[#E5C268]/80">
                  Difficult Sites & Server-Level Removal
                </p>
              </motion.div>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                CRD – Difficult Sites & Server-Level Removal
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto"
              >
                Presentation for Elite Agency
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto"
              >
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur text-left">
                  <h3 className="text-xl font-bold text-[#E5C268] mb-4">Who we are</h3>
                  <ul className="space-y-2 text-zinc-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>CRD = French digital protection agency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>Specialised in complex takedowns: hosting-level, registrar-level, legal escalations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>99.2% success rate on classic sites</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>Only team in France offering full-stack escalations on hard targets</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/60 backdrop-blur text-left">
                  <h3 className="text-xl font-bold text-[#E5C268] mb-4">Who this call is for</h3>
                  <ul className="space-y-2 text-zinc-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>Agencies managing high-volume creators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5C268] flex-shrink-0 mt-1" />
                      <span>Need fast, reliable removal on sites that ignore DMCA</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          )}

          {/* Slide 1: The Real Problem */}
          {slideMatches(1) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                The Real Problem
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-8 text-center"
              >
                Standard DMCA fails because:
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: X, label: "Sites ignore emails", desc: "No response to standard DMCA notices" },
                  { icon: Globe, label: "Hosts are offshore", desc: "Moldova, Cyprus, Seychelles…" },
                  { icon: FileWarning, label: "Mirrors & clones multiply", desc: "Content reappears on new domains" },
                  { icon: Database, label: "Content is cached", desc: "Reuploaded, indexed on Google" },
                  { icon: TrendingUp, label: "Platforms rely on leaks", desc: "Thothub, Camwhores, BTBF" },
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
                          <p className="text-zinc-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-red-900/30 to-red-950/30 backdrop-blur-xl border border-red-800/40"
              >
                <p className="text-center text-lg text-white">
                  <span className="text-red-400 font-bold">Result:</span> Creators stay exposed despite "DMCA attempts."
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 2: What Elite Agency Asked Us */}
          {slideMatches(2) && (
            <div className="w-full max-w-6xl mx-auto text-center">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                What Elite Agency Asked Us
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12"
              >
                We prepared this presentation to answer your priority:
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Shield, label: "Removal on difficult sites" },
                  { icon: Server, label: "Server/hosting takedowns" },
                  { icon: Globe, label: "Thothub, Camwhores, BTBF, Leakimedia, Amateurdoporn" },
                  { icon: CheckCircle2, label: "Reliable, repeatable process your team can count on" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/60 hover:shadow-lg hover:shadow-[#E5C268]/20 transition-all duration-500"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#E5C268]" />
                        </div>
                        <p className="text-lg font-medium text-white text-left">{item.label}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 3: Our Process - Step 1 Investigation */}
          {slideMatches(3) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Our Process: Server-Level Removal
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl text-[#E5C268] mb-8 text-center"
              >
                Step 1 — Investigation
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Eye, label: "Identify host / registrar / DNS / CDN", desc: "Complete technical mapping of infrastructure" },
                  { icon: Search, label: "Map all URLs, mirrors, duplicates", desc: "Track every instance of the content" },
                  { icon: FileCheck, label: "Capture technical evidence", desc: "Screenshots, timestamps, network data" },
                  { icon: FileText, label: "Build escalation file", desc: "Complete file for legal + host contacts" },
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
                          <p className="text-zinc-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 4: Our Process - Step 2 Action */}
          {slideMatches(4) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Our Process: Server-Level Removal
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl text-[#E5C268] mb-8 text-center"
              >
                Step 2 — Action
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Server, label: "Direct contact with hosting provider", desc: "Abuse + server takedown request" },
                  { icon: Scale, label: "Registrar escalation", desc: "If host ignores our requests" },
                  { icon: Globe, label: "Cloudflare / CDN unmasking", desc: "Reveal real hosting behind CDN" },
                  { icon: Gavel, label: "Legal notice if necessary", desc: "Formal legal pressure" },
                  { icon: Zap, label: "Parallel DMCA", desc: "Fast removal on clones and mirrors" },
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
                          <p className="text-zinc-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 5: Our Process - Step 3 Reinforcement */}
          {slideMatches(5) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Our Process: Server-Level Removal
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl text-[#E5C268] mb-8 text-center"
              >
                Step 3 — Reinforcement
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Search, label: "Google Search / Google Images takedown", desc: "Remove from search results" },
                  { icon: Globe, label: "External indexing cleanup", desc: "Remove from all search engines" },
                  { icon: Eye, label: "Monitoring for reuploads", desc: "24/7 watch for new instances" },
                  { icon: Zap, label: "Re-escalation", desc: "In case of mirror replication" },
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
                          <p className="text-zinc-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 6: Examples of Sites We Can Remove */}
          {slideMatches(6) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Examples of Sites We Can Remove
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-8 text-center"
              >
                Hard sites we regularly handle
              </motion.p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Leakimedia",
                  "Borntobefuck (BTBF)",
                  "Amateurdoporn",
                  "Thothub mirrors",
                  "Camwhores",
                  "Bunkr / Gofile",
                  "Sxyprn",
                  "PornLeaks / Fapopedia",
                  "Any offshore host using AlexHost, Cloudflare, PrivateLayer, DDoS-Guard, etc.",
                ].map((site, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 backdrop-blur-xl border border-zinc-800/60 hover:border-[#E5C268]/50 transition-all duration-500 text-center"
                  >
                    <p className="text-sm font-medium text-white">{site}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 7: Case Study 1 */}
          {slideMatches(7) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Case Studies
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-[#E5C268] mb-8 text-center"
              >
                Case Study 1 — BTBF Complete Removal
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30"
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#E5C268] mb-2">Hosting identified</h3>
                      <p className="text-white">AlexHost</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#E5C268] mb-2">Strategy</h3>
                      <p className="text-white">Double escalation (registrar + host)</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#E5C268] mb-2">Removal time</h3>
                      <p className="text-white text-2xl font-bold">72h</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 backdrop-blur-xl border border-zinc-800/60"
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Reinforcement</h3>
                      <p className="text-zinc-300">Reinforced indexing + monitoring</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Result</h3>
                      <p className="text-zinc-300">No reupload since</p>
                    </div>
                    <div className="mt-6">
                      <CheckCircle2 className="w-8 h-8 text-[#E5C268] mx-auto" />
                      <p className="text-center text-[#E5C268] font-bold mt-2">Mission Successful</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {/* Slide 8: Case Study 2 */}
          {slideMatches(8) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Case Studies
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-[#E5C268] mb-8 text-center"
              >
                Case Study 2 — Leakimedia (Legal Escalation)
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30"
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#E5C268] mb-2">Challenge</h3>
                      <p className="text-white">One of the hardest platforms online</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#E5C268] mb-2">Server location</h3>
                      <p className="text-white">Moldova</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#E5C268] mb-2">Initial response</h3>
                      <p className="text-white">DMCA ignored</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 backdrop-blur-xl border border-zinc-800/60"
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Solution</h3>
                      <p className="text-zinc-300">Legal threat + registrar pressure</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Actions taken</h3>
                      <p className="text-zinc-300">Google demotion + image removal</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Result</h3>
                      <p className="text-zinc-300">Proven results with multiple creators</p>
                    </div>
                    <div className="mt-6">
                      <CheckCircle2 className="w-8 h-8 text-[#E5C268] mx-auto" />
                      <p className="text-center text-[#E5C268] font-bold mt-2">Mission Successful</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {/* Slide 9: What Creators Get */}
          {slideMatches(9) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                What Creators Get
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Shield, label: "Complete cleanup", desc: "All instances removed" },
                  { icon: Clock, label: "Fast removal", desc: "48h–5 days depending on target" },
                  { icon: Lock, label: "Protection from reuploads", desc: "24/7 monitoring" },
                  { icon: Users, label: "Dedicated escalation agent", desc: "Personal point of contact" },
                  { icon: FileCheck, label: "Transparent reports", desc: "Full documentation" },
                  { icon: Crown, label: "Peace of mind for the agency", desc: "One less thing to worry about" },
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
                          <p className="text-zinc-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 10: What Elite Agency Gets */}
          {slideMatches(10) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                What Elite Agency Gets
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30"
                >
                  <h3 className="text-2xl font-bold text-[#E5C268] mb-6">Operational Benefits</h3>
                  <ul className="space-y-4 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>A partner that handles everything you can't touch internally</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Reduction in support tickets from creators</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Zero time wasted chasing sites that ignore DMCA</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>One contact for all escalations</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 backdrop-blur-xl border border-zinc-800/60"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Business Benefits</h3>
                  <ul className="space-y-4 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Volume pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Priority support for your creators</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Optional white-label solution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Strengthens agency value for creators</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          )}

          {/* Slide 11: Pricing Overview */}
          {slideMatches(11) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Pricing Overview
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
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
                    <h3 className="text-2xl font-bold text-white mb-2">Classic Plan</h3>
                    <p className="text-sm text-zinc-400">For standard sites</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 backdrop-blur-xl border border-[#E5C268]/50 hover:border-[#E5C268]/70 transition-all duration-500 relative"
                >
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-[#E5C268] text-black text-xs font-bold">
                    FOR DIFFICULT SITES
                  </div>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E5C268]/30 to-[#E5C268]/15 mb-4">
                      <Server className="w-8 h-8 text-[#E5C268]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Escalations</h3>
                    <p className="text-sm text-zinc-300">For difficult sites (server-level, legal, offshore)</p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30"
              >
                <p className="text-center text-lg text-white mb-4">
                  Pricing depends on:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E5C268]" />
                    <span>Target site</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E5C268]" />
                    <span>Number of URLs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E5C268]" />
                    <span>Level of resistance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E5C268]" />
                    <span>Volume from agency</span>
                  </div>
                </div>
                <p className="text-center text-[#E5C268] font-bold mt-6">
                  "On call, we present concrete options based on your needs."
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 12: How We Work Together */}
          {slideMatches(12) && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                How We Work Together
              </motion.h2>
              <div className="relative">
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E5C268]/20 via-[#E5C268]/40 to-[#E5C268]/20 transform -translate-y-1/2" />
                <div className="grid md:grid-cols-5 gap-4 md:gap-6">
                  {[
                    { icon: FileText, step: "1", title: "You send URLs", desc: "Or creators send directly" },
                    { icon: Eye, step: "2", title: "We audit", desc: "Classify the difficulty" },
                    { icon: Zap, step: "3", title: "We launch", desc: "Takedowns on hosting + registrar" },
                    { icon: BarChart3, step: "4", title: "You get reports", desc: "Dashboard or report for each request" },
                    { icon: CheckCircle2, step: "5", title: "You escalate", desc: "Only when needed" },
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

          {/* Slide 13: Final Slide */}
          {slideMatches(13) && (
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
                We remove what others can't.
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl sm:text-3xl lg:text-4xl text-[#E5C268] mb-16 font-medium"
              >
                You focus on growing your creators, we protect them in the shadows.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mt-16"
              >
                <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/50 transition-all duration-500">
                  <p className="text-xl sm:text-2xl text-white mb-6 font-medium">Let's build this together.</p>
                  <div className="flex items-center justify-center gap-3 group cursor-pointer">
                    <div className="p-3 rounded-full bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 group-hover:from-[#E5C268]/30 group-hover:to-[#E5C268]/20 transition-all duration-300">
                      <Phone className="w-6 h-6 text-[#E5C268]" />
                    </div>
                    <span className="text-lg sm:text-xl text-[#E5C268] font-semibold group-hover:text-[#E5C268]/90 transition-colors">
                      Schedule a call
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

const ProtectedHardSiteEscalations = () => (
  <PasswordProtection correctPassword="240307" storageKey="hardsite_escalations_auth">
    <HardSiteEscalations />
  </PasswordProtection>
);

export default ProtectedHardSiteEscalations;

