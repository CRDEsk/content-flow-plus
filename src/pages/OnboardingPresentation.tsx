import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  CheckCircle2,
  Clock,
  AlertTriangle,
  TrendingUp,
  Eye,
  Zap,
  Rocket,
  X,
  ArrowRight,
  ArrowLeft,
  Maximize,
  Minimize,
  Search,
  Globe,
  FileCheck,
  ChevronRight,
} from "lucide-react";

const TOTAL_SLIDES = 11;

const OnboardingPresentation = () => {
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
      <button
        onClick={toggleFullscreen}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 text-white hover:bg-zinc-800/80 transition-all duration-200"
        aria-label="Toggle fullscreen"
      >
        {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
      </button>

      <AnimatePresence mode="wait" custom={direction}>
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
          {/* Slide 1: Open Strong */}
          {slideMatches(0) && (
            <div className="w-full max-w-6xl mx-auto text-center space-y-10">
              {/* Animated CRD Logo - Luxury & Authoritative */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex justify-center mb-12"
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  {['C', 'R', 'D'].map((letter, index) => (
                    <motion.div
                      key={letter}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        delay: 0.2 + index * 0.1,
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      <motion.span
                        animate={{
                          y: [0, -4, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.15,
                          ease: "easeInOut"
                        }}
                        className="text-6xl sm:text-7xl lg:text-8xl font-extralight text-white tracking-[0.15em]"
                        style={{ 
                          fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
                          letterSpacing: '0.2em',
                          fontWeight: 200,
                        }}
                      >
                        {letter}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Astrid, here's what we'll do in 15 minutes:
              </motion.h1>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-4 max-w-3xl mx-auto"
              >
                <div className="flex items-center justify-center gap-3 text-lg sm:text-xl text-zinc-300">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span>What we found</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-lg sm:text-xl text-zinc-300">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span>How we protect you</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-lg sm:text-xl text-zinc-300">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span>What we start today</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-lg sm:text-xl text-zinc-300">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span>What we escalate later (if needed)</span>
                </div>
                
              </motion.div>
            </div>
          )}

          {/* Slide 2: Leak Detection Summary */}
          {slideMatches(1) && (
            <div className="w-full max-w-6xl mx-auto space-y-8">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center mb-8"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Search className="w-8 h-8 text-white" />
                  <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight"
                    style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif" }}
                  >
                    Leak Detection Summary
                  </h2>
                </div>
                <p className="text-xl text-zinc-400">
                  We've identified several sources, but they don't all have the same level of severity.
                </p>
              </motion.div>

              {/* Critical Sites Table */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="overflow-hidden rounded-2xl border border-zinc-800/30 bg-transparent"
              >
                <div className="border-b border-zinc-800/30 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-white" />
                    <h3 className="text-2xl font-bold text-white">Most Critical Sites (Absolute Priority)</h3>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-800/30">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-300">Site</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-300">Level</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-300">Why it's critical</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/30">
                      {[
                        { site: 'borntobefuck.com', level: 'Critical', levelColor: 'red', reason: 'Complete model page, well-referenced, strong redistribution' },
                        { site: 'bunkr.cr', level: 'Critical', levelColor: 'red', reason: 'Massive hosting (albums), source of reposts' },
                        { site: 'leakimedia.com', level: 'Critical', levelColor: 'red', reason: 'Major aggregator, ignores standard DMCA' },
                        { site: 'gofile.io', level: 'High', levelColor: 'orange', reason: '27 active links (direct hosting)' },
                        { site: 'mega.nz', level: 'High', levelColor: 'orange', reason: 'Complete folders, private → public distribution' },
                        { site: 'xx-videos / leak networks', level: 'High', levelColor: 'orange', reason: 'Mirror networks, rapid duplication' },
                      ].map((item, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="hover:bg-zinc-900/20 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <span className="font-semibold text-white">{item.site}</span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="px-3 py-1 rounded-full text-xs font-bold text-white border border-zinc-700/50">
                              {item.level}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-zinc-300 text-sm">{item.reason}</span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="p-6 rounded-2xl bg-transparent border border-zinc-800/30"
              >
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">
                    <span className="font-semibold">These sites represent the majority of exposure and risk.</span>
                    <br />
                    <span className="text-zinc-300">Other links are secondary and handled automatically afterward.</span>
                  </p>
                </div>
              </motion.div>
            </div>
          )}

          {/* Slide 3: How We Handle It */}
          {slideMatches(2) && (
            <div className="w-full max-w-6xl mx-auto space-y-10">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl font-light text-white text-center mb-12 tracking-tight"
                style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif" }}
              >
                How We Handle It
              </motion.h2>
              
              <div className="space-y-5">
                {[
                  { 
                    step: "1", 
                    title: "Fast removal on « standard » platforms",
                    icon: Zap
                  },
                  { 
                    step: "2", 
                    title: "Handling of hosts (gofile, mega, bunkr)",
                    icon: Globe
                  },
                  { 
                    step: "3", 
                    title: "Specialized escalations for sites that refuse",
                    subtitle: "BTBF, Leakimedia, etc.",
                    icon: Shield
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.15 }}
                      className="border border-zinc-800/30 bg-transparent rounded-lg p-6 hover:border-zinc-700/50 transition-all"
                    >
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-transparent border-2 border-primary/40 flex items-center justify-center">
                          <span className="text-2xl font-light text-primary">{item.step}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <Icon className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-light text-white">{item.title}</h3>
                          </div>
                          {item.subtitle && (
                            <p className="text-zinc-400 text-sm font-light ml-11 mt-1">{item.subtitle}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="border border-zinc-800/30 bg-transparent rounded-lg p-8 mt-10 space-y-4"
              >
                <div className="flex items-start gap-4">
                  <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-white font-light">
                    <span className="font-normal">Important:</span> escalations are done site by site, not link by link.
                  </p>
                </div>
                <div className="flex items-start gap-4 ml-9">
                  <p className="text-sm text-zinc-400 font-light italic">
                    Every action is manually verified before escalation.
                  </p>
                </div>
              </motion.div>
            </div>
          )}

          {/* Slide 4: Elite Protection Plan */}
          {slideMatches(3) && (
            <div className="w-full max-w-6xl mx-auto space-y-10">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl font-light text-white text-center mb-12 tracking-tight"
                style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif" }}
              >
                Elite Protection Plan
              </motion.h2>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="border border-zinc-800/30 bg-transparent rounded-lg overflow-hidden"
              >
                {/* Pricing Header */}
                <div className="px-8 py-6 border-b border-zinc-800/30">
                  <div className="flex items-baseline justify-center gap-3">
                    <div className="text-6xl font-light text-primary tracking-tight">€269</div>
                    <div className="text-xl text-zinc-400 font-light">/3 months</div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="px-8 py-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { feature: "Covers 50+ platforms" },
                      { feature: "Priority removals" },
                      { feature: "Dedicated agent" },
                      { feature: "Ongoing monitoring" },
                      { feature: "Daily intelligent scan" },
                      { feature: "Unlimited & priority removal" },
                      { feature: "Advanced content matching & detection" },
                      { feature: "Proactive repost tracking" },
                      { feature: "Priority support + dedicated manager" },
                      { feature: "Official DMCA registration (included)" },
                      { feature: "Proactive 24/7 monitoring" },
                      { feature: "Dedicated specialized agent" },
                      { feature: "Full access to legal & technical escalations" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-zinc-300 font-light">{item.feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer Quote */}
                <div className="px-8 py-6 border-t border-zinc-800/30">
                  <p className="text-center text-lg text-zinc-300 font-light italic">
                    "This handles 80–90% of the internet."
                  </p>
                </div>
              </motion.div>
            </div>
          )}

          {/* Slide 5: Hard Sites */}
          {slideMatches(4) && (
            <div className="w-full max-w-5xl mx-auto space-y-8">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl font-bold text-white text-center mb-8"
              >
                Hard Sites
              </motion.h2>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 mb-6"
              >
                <p className="text-xl text-zinc-300 mb-6">
                  Some sites don't play by the rules:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-orange-500" />
                    <span className="text-lg text-white">BTBF</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-orange-500" />
                    <span className="text-lg text-white">LeakiMedia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-orange-500" />
                    <span className="text-lg text-white">Aggregators</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-orange-900/20 border border-orange-800/30"
              >
                <p className="text-lg text-zinc-300 mb-4">
                  These are <strong className="text-white">NOT</strong> part of subscriptions.
                </p>
                <p className="text-zinc-300">
                  They require infrastructure pressure, hosting escalation, and legal leverage.
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 6: BTBF */}
          {slideMatches(5) && (
            <div className="w-full max-w-7xl mx-auto space-y-10">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl font-light text-white text-center mb-12 tracking-tight"
                style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif" }}
              >
                BTBF
              </motion.h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-stretch">
                {/* Left Column - Information */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="border border-zinc-800/30 bg-transparent rounded-lg p-8"
                  >
                    <h3 className="text-2xl font-light text-white mb-8 tracking-tight">Your Case</h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 font-light">
                          <strong className="text-white font-normal">40+ videos</strong> identified
                        </span>
                      </div>
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 font-light">Known site</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 font-light">We've handled it before</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="border border-zinc-800/30 bg-transparent rounded-lg p-8"
                  >
                    <h3 className="text-2xl font-light text-white mb-8 tracking-tight">How We Treat It</h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <Rocket className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 font-light">Full site-level escalation</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <Rocket className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 font-light">Not video-by-video</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 font-light">Typical timeline: 4–6 weeks</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column - Website Screenshot */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="flex flex-col"
                >
                  <div className="relative group flex-1 min-h-[500px]">
                    {/* Border with glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div className="relative border-2 border-primary/50 rounded-2xl overflow-hidden bg-zinc-950 shadow-2xl shadow-primary/20 h-full flex items-center justify-center">
                      <img 
                        src="/images/borntobefuck-astrid-nelsia.png" 
                        alt="BTBF website showing Astrid Nelsia content"
                        className="w-full h-full object-contain opacity-95"
                      />
                    </div>
                  </div>
                  
                  {/* Info Badges */}
                  <div className="grid grid-cols-2 gap-4 mt-5">
                    <div className="border border-zinc-800/30 bg-transparent rounded-lg px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-zinc-400" />
                        <span className="text-sm text-zinc-400 font-light">
                          Latest upload: <span className="text-white font-normal">3 days ago</span>
                        </span>
                      </div>
                    </div>
                    <div className="border border-zinc-800/30 bg-transparent rounded-lg px-4 py-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-sm text-zinc-400 font-light">
                          Ranked: <span className="text-primary font-normal">#19</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {/* Slide 7: Leakimedia */}
          {slideMatches(6) && (
            <div className="w-full max-w-7xl mx-auto space-y-10">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl font-light text-white text-center mb-12 tracking-tight"
                style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif" }}
              >
                Leakimedia
              </motion.h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-stretch">
                {/* Left Column - Information */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="border border-zinc-800/30 bg-transparent rounded-lg p-8"
                  >
                    <h3 className="text-2xl font-light text-white mb-8 tracking-tight">Your Case</h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 font-light">
                          <strong className="text-white font-normal">Centre of 500+ media leaks</strong> of you
                        </span>
                      </div>
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 font-light">Known site</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 font-light">We've handled it before</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 font-light">
                          <strong className="text-white font-normal">10M+ visitors</strong> monthly
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="border border-zinc-800/30 bg-transparent rounded-lg p-8"
                  >
                    <h3 className="text-2xl font-light text-white mb-8 tracking-tight">How We Treat It</h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <Rocket className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 font-light">Legal escalation (more than technical)</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <Rocket className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 font-light">Through partners in Moldova</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <Rocket className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 font-light">AlexHost hosting pressure</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300 font-light">Typical timeline: 4–6 weeks</span>
                      </div>
                    </div>
                    
                    {/* Subtle Note */}
                    <div className="mt-6 pt-6 border-t border-zinc-800/20">
                      <p className="text-xs text-zinc-500 font-light italic text-center">
                        This is the highest level of escalation we do. We only go there if you explicitly ask us to.
                      </p>
                    </div>
                  </motion.div>

                </div>

                {/* Right Column - Website Screenshot */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="flex flex-col h-full"
                >
                  <div className="relative group flex-1 min-h-[600px]">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div className="relative border-2 border-primary/50 rounded-2xl overflow-hidden bg-zinc-950 shadow-2xl shadow-primary/20 h-full flex items-center justify-center">
                      <img 
                        src="/images/leakimedia-astrid-nelsia.png" 
                        alt="Leakimedia website showing Astrid Nelsia content"
                        className="w-full h-full object-cover opacity-95"
                      />
                    </div>
                  </div>
                  
                  {/* Centralized Hub Info */}
                  <div className="border border-zinc-800/30 bg-transparent rounded-lg px-4 py-3 mt-5">
                    <p className="text-sm text-zinc-400 font-light text-center">
                      Centralized hub: <span className="text-white font-normal">gofile, mega, files, luvideo, original media</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {/* Slide 8: Start Today */}
          {slideMatches(7) && (
            <div className="w-full max-w-6xl mx-auto space-y-10">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl font-light text-white text-center mb-12 tracking-tight"
                style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif" }}
              >
                What We Do Today (5 minutes)
              </motion.h2>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-5"
              >
                {[
                  { num: "1", title: "Elite subscription payment" },
                  { num: "2", title: "DMCA authorization signature" },
                  { num: "3", title: "ID document upload" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="border border-zinc-800/30 bg-transparent rounded-lg p-6 hover:border-zinc-700/50 transition-all"
                  >
                    <div className="flex items-center gap-6">
                      <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-transparent border-2 border-primary/40 text-primary font-light text-2xl flex-shrink-0">
                        {item.num}
                      </div>
                      <span className="text-xl text-white font-light">{item.title}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="border border-zinc-800/30 bg-transparent rounded-lg p-8 mt-10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-xl text-white font-light">As soon as it's done:</p>
                </div>
                <div className="space-y-4 ml-10">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-zinc-300 font-light text-lg">Protection starts</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-zinc-300 font-light text-lg">Standard removals begin</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-zinc-300 font-light text-lg">Monitoring is active</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Slide 9: Close */}
          {slideMatches(8) && (
            <div className="w-full max-w-6xl mx-auto space-y-8">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl font-bold text-white text-center mb-8"
              >
                Two Clean Options
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="border border-zinc-800/30 bg-transparent rounded-lg p-8"
                >
                  <h3 className="text-2xl font-light text-white mb-4 tracking-tight">Option 1</h3>
                  <p className="text-xl text-zinc-300 mb-8 font-light">Start Elite now, escalate later</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-zinc-300 font-light">Protection begins today</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-zinc-300 font-light">Discuss escalations separately</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="border border-primary/40 bg-transparent rounded-lg p-8"
                >
                  <h3 className="text-2xl font-light text-white mb-4 tracking-tight">Option 2</h3>
                  <p className="text-xl text-zinc-300 mb-8 font-light">Start Elite + discuss BTBF next</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-zinc-300 font-light">Protection begins today</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-zinc-300 font-light">We'll follow up on escalation</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center mt-12"
              >
                <p className="text-2xl text-white font-light mb-4">
                  Either way, you're protected starting today.
                </p>
                <p className="text-lg text-zinc-400 font-light italic">
                  Does starting protection today make sense for you?
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 10: BTBF Escalation */}
          {slideMatches(9) && (
            <div className="w-full max-w-6xl mx-auto space-y-10">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl font-light text-white text-center mb-12 tracking-tight"
                style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif" }}
              >
                BTBF Escalation
              </motion.h2>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="border border-zinc-800/30 bg-transparent rounded-lg overflow-hidden"
              >
                {/* Pricing Header */}
                <div className="px-8 py-6 border-b border-zinc-800/30">
                  <div className="flex items-baseline justify-center gap-3">
                    <div className="text-6xl font-light text-primary tracking-tight">€5,000</div>
                  </div>
                  <p className="text-center text-zinc-400 font-light mt-3">
                    One-time escalation fee
                  </p>
                </div>

                {/* Why This Investment */}
                <div className="px-8 py-8">
                  <h3 className="text-2xl font-light text-white mb-8 tracking-tight text-center">
                    Why This Investment
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { 
                        title: "Big model exposure", 
                        desc: "High visibility requires specialized handling and protection"
                      },
                      { 
                        title: "Repost assurance", 
                        desc: "Prevents content from being re-uploaded and redistributed"
                      },
                      { 
                        title: "Manual technical expertise", 
                        desc: "Human-led escalation with deep technical knowledge"
                      },
                      { 
                        title: "Comprehensive site-level action", 
                        desc: "Site-level neutralization, not just individual link removal"
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="border border-zinc-800/30 bg-transparent rounded-lg p-6"
                      >
                        <h4 className="text-lg font-light text-white mb-3">{item.title}</h4>
                        <p className="text-sm text-zinc-400 font-light leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-6 border-t border-zinc-800/30">
                  <p className="text-center text-zinc-400 font-light text-sm">
                    This escalation is handled separately from your Elite subscription
                  </p>
                </div>
              </motion.div>
            </div>
          )}

          {/* Slide 11: Leakimedia Escalation */}
          {slideMatches(10) && (
            <div className="w-full max-w-7xl mx-auto space-y-10">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl font-light text-white text-center mb-12 tracking-tight"
                style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif" }}
              >
                Leakimedia Escalation
              </motion.h2>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="border border-zinc-800/30 bg-transparent rounded-lg overflow-hidden"
              >
                {/* Pricing Header */}
                <div className="px-8 py-6 border-b border-zinc-800/30">
                  <div className="flex items-baseline justify-center gap-3">
                    <div className="text-6xl font-light text-primary tracking-tight">€10,000</div>
                  </div>
                  <p className="text-center text-zinc-400 font-light mt-3">
                    Legal escalation fee
                  </p>
                  <p className="text-center text-zinc-500 font-light text-sm mt-2">
                    Only initiated upon explicit client request
                  </p>
                </div>

                {/* Cost Breakdown */}
                <div className="px-8 py-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Legal Team - Moldova */}
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="border border-zinc-800/30 bg-transparent rounded-lg p-6"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-light text-white tracking-tight">
                          Legal Team (Moldova)
                        </h3>
                        <div className="text-3xl font-light text-primary">€7,000</div>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <p className="text-zinc-300 font-light">1st instance court proceeding</p>
                            <p className="text-xs text-zinc-500 mt-1">Document review, drafting SoC, court representation, pleadings</p>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-light">40 hours</div>
                            <div className="text-sm text-zinc-400">€5,000</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start justify-between gap-4 pt-3 border-t border-zinc-800/30">
                          <div className="flex-1">
                            <p className="text-zinc-300 font-light">Extra retainer hours</p>
                            <p className="text-xs text-zinc-500 mt-1">Seize and desist letters, court orders, strategy, cost structure</p>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-light">16 hours</div>
                            <div className="text-sm text-zinc-400">€2,000</div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-zinc-800/50">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-zinc-400 font-light">Total hours</span>
                          <span className="text-white font-light">56 hours</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Internal Technical Work */}
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="border border-zinc-800/30 bg-transparent rounded-lg p-6"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-light text-white tracking-tight">
                          Internal Technical Work
                        </h3>
                        <div className="text-3xl font-light text-primary">€3,000</div>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <p className="text-zinc-300 font-light">Translations & case building</p>
                            <p className="text-xs text-zinc-500 mt-1">Legal document translation, evidence compilation, case documentation</p>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-light">12 hours</div>
                            <div className="text-sm text-zinc-400">€1,500</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start justify-between gap-4 pt-3 border-t border-zinc-800/30">
                          <div className="flex-1">
                            <p className="text-zinc-300 font-light">Technical coordination</p>
                            <p className="text-xs text-zinc-500 mt-1">Hosting analysis, technical documentation, escalation support</p>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-light">12 hours</div>
                            <div className="text-sm text-zinc-400">€1,500</div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-zinc-800/50">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-zinc-400 font-light">Total hours</span>
                          <span className="text-white font-light">24 hours</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Process Overview */}
                  <div className="mt-8 pt-8 border-t border-zinc-800/30">
                    <h3 className="text-xl font-light text-white mb-6 tracking-tight text-center">
                      Process Overview
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-lg border-2 border-primary/40 flex items-center justify-center mx-auto mb-3 bg-transparent">
                          <span className="text-primary text-xl font-light">1</span>
                        </div>
                        <p className="text-zinc-300 font-light">Legal escalation through Moldova partners</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-lg border-2 border-primary/40 flex items-center justify-center mx-auto mb-3 bg-transparent">
                          <span className="text-primary text-xl font-light">2</span>
                        </div>
                        <p className="text-zinc-300 font-light">Pressure on AlexHost (Moldova-based hosting)</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-lg border-2 border-primary/40 flex items-center justify-center mx-auto mb-3 bg-transparent">
                          <span className="text-primary text-xl font-light">3</span>
                        </div>
                        <p className="text-zinc-300 font-light">Site-level suspension via legal channels</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-6 border-t border-zinc-800/30">
                  <p className="text-center text-zinc-400 font-light text-sm">
                    This escalation is handled separately from your Elite subscription
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <button
          onClick={() => {
            setDirection(-1);
            prevSlide();
          }}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 text-white hover:bg-zinc-800/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                slideChange(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "w-8 bg-primary"
                  : "bg-zinc-600 hover:bg-zinc-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => {
            setDirection(1);
            nextSlide();
          }}
          disabled={currentSlide === totalSlides - 1}
          className="p-3 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 text-white hover:bg-zinc-800/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          aria-label="Next slide"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide counter */}
      <div className="fixed top-4 left-4 z-50 px-4 py-2 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 text-white text-sm">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
};

export default OnboardingPresentation;
