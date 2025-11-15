import { useState, useEffect } from "react";
import { Search, Flag, BarChart3, Check, Zap, Shield } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { motion, AnimatePresence } from "framer-motion";

const HowItWorksSection = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoSwitching, setIsAutoSwitching] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const getTabData = (tabKey: string) => {
    const tab = (translations[language] as any).howItWorks[tabKey];
    return {
      label: tab.label,
      badge: tab.badge,
      title: tab.title,
      titleHighlight: tab.titleHighlight,
      description: tab.description,
      features: tab.features as string[],
    };
  };
  
  const tabs = [
    {
      ...getTabData("tab1"),
      icon: Search,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      ...getTabData("tab2"),
      icon: Flag,
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      ...getTabData("tab3"),
      icon: BarChart3,
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  // Auto-switch tabs every 7 seconds
  useEffect(() => {
    let tabAutoSwitchInterval: ReturnType<typeof setInterval> | null = null;

    const startInterval = () => {
      if (tabAutoSwitchInterval) clearInterval(tabAutoSwitchInterval);
      tabAutoSwitchInterval = setInterval(() => {
        if (!document.hidden) {
          setIsAutoSwitching(true);
          setIsTransitioning(true);
          setTimeout(() => {
            setActiveTab(prev => (prev + 1) % tabs.length);
            setTimeout(() => {
              setIsTransitioning(false);
              setIsAutoSwitching(false);
            }, 200);
          }, 150);
        }
      }, 7000);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (tabAutoSwitchInterval) clearInterval(tabAutoSwitchInterval);
        tabAutoSwitchInterval = null;
      } else {
        startInterval();
      }
    };

    startInterval();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (tabAutoSwitchInterval) clearInterval(tabAutoSwitchInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [tabs.length]);
  return <section id="how-it-works" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
      backgroundSize: '60px 60px',
      animation: 'scroll 20s linear infinite'
    }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-4 sm:mb-6 lg:mb-8">
            <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm text-zinc-400 font-medium">{t("howItWorks.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2">
            {t("howItWorks.title")}<br />
            <span className="gradient-text">{t("howItWorks.titleHighlight")}</span>
          </h2>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12 px-2">
          <div className="inline-flex flex-wrap gap-2 p-1.5 sm:p-2 bg-zinc-900/30 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-zinc-800/50 w-full sm:w-auto">
            {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = activeTab === index;
            return <button 
              key={index} 
              onClick={() => {
                if (index !== activeTab) {
                  setIsAutoSwitching(false);
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setActiveTab(index);
                    setTimeout(() => {
                      setIsTransitioning(false);
                    }, 200);
                  }, 150);
                }
              }} 
              className={`relative overflow-hidden flex items-center justify-center gap-0 md:gap-1.5 lg:gap-2 px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-medium transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex-1 md:flex-none ${isActive ? "bg-zinc-800 text-foreground shadow-lg scale-105" : "text-zinc-400 hover:text-foreground hover:bg-zinc-800/50 active:scale-95"}`}
              style={{ 
                transform: isActive ? 'translateZ(0) scale(1.05)' : 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitTapHighlightColor: 'transparent',
                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
                  <div
                    className={`flex-shrink-0 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                      isActive 
                        ? 'scale-110 text-primary' 
                        : 'scale-100 text-zinc-400 hover:scale-110 hover:text-foreground'
                    }`}
                    style={{
                      transform: isActive ? 'translateZ(0) scale(1.1)' : 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  >
                    <Icon className="h-5 w-5 sm:h-5 sm:w-5 md:h-4 md:w-4 lg:h-5 lg:w-5" strokeWidth={2.5} />
                  </div>
                  {/* Hide text on mobile (below md breakpoint) */}
                  <span className="hidden md:inline whitespace-nowrap text-xs sm:text-sm">{tab.label}</span>
                  {isActive && <>
                      <motion.div 
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '50%' }}
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full animate-[slide_2s_ease-in-out_infinite]" />
                      {/* Subtle pulse effect for active tab on mobile */}
                      <div
                        className="absolute inset-0 rounded-lg sm:rounded-xl bg-primary/5 animate-pulse pointer-events-none"
                        style={{
                          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                          backfaceVisibility: 'hidden'
                        }}
                      />
                    </>}
                </button>;
          })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-4 sm:p-6 lg:p-8 xl:p-12 border border-zinc-800/50 overflow-hidden group" style={{ minHeight: '550px', height: 'auto' }}>
            {/* Animated background gradient */}
            <motion.div 
              key={activeTab}
              className={`absolute inset-0 bg-gradient-to-br ${tabs[activeTab].color} opacity-0 group-hover:opacity-100`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            
            <div className="relative z-10 max-w-5xl" style={{ minHeight: '450px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isTransitioning ? 0.5 : 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                {/* Badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 mb-4 sm:mb-6"
                >
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                  <span className="text-[10px] sm:text-xs text-zinc-400 font-medium">{tabs[activeTab].badge}</span>
                </motion.div>
                
                {/* Title */}
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 leading-tight"
                >
                  <span className="text-foreground">{tabs[activeTab].title}</span><br />
                  <span className="gradient-text">{tabs[activeTab].titleHighlight}</span>
                </motion.h3>
                
                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-4xl"
                >
                  {tabs[activeTab].description}
                </motion.p>

                {/* Features List */}
                <div className="space-y-3 sm:space-y-4">
                  {tabs[activeTab].features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + (index * 0.05), duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="flex items-start gap-2 sm:gap-3 lg:gap-4 group/item"
                    >
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-500" style={{ transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground font-medium group-hover/item:text-primary transition-colors duration-500 leading-relaxed" style={{ transition: 'color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mt-6 sm:mt-8 lg:mt-10 pt-6 sm:pt-8 lg:pt-10 border-t border-zinc-800/50">
              
            </div>

            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-500 overflow-hidden" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </section>
};
export default HowItWorksSection;