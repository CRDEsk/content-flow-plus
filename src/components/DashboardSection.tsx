import { TrendingUp, TrendingDown, Eye, Settings, Activity, Zap, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

const DashboardSection = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"scan" | "signalement" | "suivi">("scan");
  const [timeView, setTimeView] = useState<"month" | "alltime">("month");
  const [liveCount, setLiveCount] = useState(15312);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoSwitching, setIsAutoSwitching] = useState(false);

  // Combined interval management for better performance
  useEffect(() => {
    let timeViewInterval: ReturnType<typeof setInterval> | null = null;
    let counterInterval: ReturnType<typeof setInterval> | null = null;
    let dailyUpdateTimeout: ReturnType<typeof setTimeout> | null = null;
    let tabAutoSwitchInterval: ReturnType<typeof setInterval> | null = null;

    // Only run intervals when tab is visible
    const startIntervals = () => {
      // Auto-rotate time view every 15 seconds
      if (timeViewInterval) clearInterval(timeViewInterval);
      timeViewInterval = setInterval(() => {
        if (!document.hidden) {
          setIsTransitioning(true);
          setTimeout(() => {
            setTimeView(prev => prev === "month" ? "alltime" : "month");
            setIsTransitioning(false);
          }, 400);
        }
      }, 15000);

      // Simulate real-time counter updates every 5 seconds
      if (counterInterval) clearInterval(counterInterval);
      counterInterval = setInterval(() => {
        if (!document.hidden) {
          setLiveCount(prev => prev + Math.floor(Math.random() * 3));
        }
      }, 5000);

      // Auto-switch tabs every 7 seconds (random between 5-10)
      if (tabAutoSwitchInterval) clearInterval(tabAutoSwitchInterval);
      tabAutoSwitchInterval = setInterval(() => {
        if (!document.hidden) {
          setIsAutoSwitching(true);
          setIsTransitioning(true);
          setTimeout(() => {
            setActiveTab(prev => {
              if (prev === "scan") return "signalement";
              if (prev === "signalement") return "suivi";
              return "scan";
            });
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
        if (timeViewInterval) clearInterval(timeViewInterval);
        if (counterInterval) clearInterval(counterInterval);
        if (tabAutoSwitchInterval) clearInterval(tabAutoSwitchInterval);
        timeViewInterval = null;
        counterInterval = null;
        tabAutoSwitchInterval = null;
      } else {
        startIntervals();
      }
    };

    startIntervals();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Daily fluctuation - stats change by max 20% each day (only once per day)
    dailyUpdateTimeout = setTimeout(() => {
      setLiveCount(prev => {
        const variation = Math.floor(Math.random() * (prev * 0.2)); // Max 20%
        return prev + variation;
      });
    }, 86400000); // 24 hours

    return () => {
      if (timeViewInterval) clearInterval(timeViewInterval);
      if (counterInterval) clearInterval(counterInterval);
      if (tabAutoSwitchInterval) clearInterval(tabAutoSwitchInterval);
      if (dailyUpdateTimeout) clearTimeout(dailyUpdateTimeout);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const monthStats = [
    { 
      value: `+${liveCount.toLocaleString()}`, 
      change: "+12%", 
      label: t("dashboard.contentRemoved"),
      trend: true,
      icon: Zap,
      color: "from-primary/20 to-primary/5"
    },
    { 
      value: "500+", 
      change: "+3%", 
      label: t("dashboard.clientsProtected"),
      trend: true,
      icon: Activity,
      color: "from-green-500/20 to-green-500/5"
    },
    { 
      value: "30+", 
      change: "+8%", 
      label: t("dashboard.platformsScanned"),
      trend: true,
      icon: Eye,
      color: "from-blue-500/20 to-blue-500/5"
    },
    { 
      value: "246", 
      change: "+15%", 
      label: t("dashboard.contentDetected"),
      trend: true,
      icon: Clock,
      color: "from-purple-500/20 to-purple-500/5"
    },
  ];

  const alltimeStats = [
    { 
      value: "500k+", 
      change: "+156%", 
      label: t("dashboard.contentRemoved"),
      trend: true,
      icon: Zap,
      color: "from-primary/20 to-primary/5"
    },
    { 
      value: "2,847", 
      change: "+234%", 
      label: t("dashboard.clientsProtected"),
      trend: true,
      icon: Activity,
      color: "from-green-500/20 to-green-500/5"
    },
    { 
      value: "500+", 
      change: "+412%", 
      label: t("dashboard.platformsScanned"),
      trend: true,
      icon: Eye,
      color: "from-blue-500/20 to-blue-500/5"
    },
    { 
      value: "15k+", 
      change: "+289%", 
      label: t("dashboard.contentDetected"),
      trend: true,
      icon: Clock,
      color: "from-purple-500/20 to-purple-500/5"
    },
  ];

  const stats = timeView === "month" ? monthStats : alltimeStats;

  const topClients = [
    { name: "Ava", avatar: "bg-gradient-to-br from-pink-500 to-rose-500", protected: `142 ${t("dashboard.links")}` },
    { name: "Elodie Giry", avatar: "bg-gradient-to-br from-purple-500 to-indigo-500", protected: `89 ${t("dashboard.links")}` },
    { name: "Noonababe", avatar: "bg-gradient-to-br from-blue-500 to-cyan-500", protected: `201 ${t("dashboard.links")}` },
    { name: "Zineb D.", avatar: "bg-gradient-to-br from-green-500 to-emerald-500", protected: `156 ${t("dashboard.links")}` },
    { name: "Looana Paul", avatar: "bg-gradient-to-br from-yellow-500 to-orange-500", protected: `178 ${t("dashboard.links")}` },
    { name: "Jade Belle", avatar: "bg-gradient-to-br from-red-500 to-pink-500", protected: `134 ${t("dashboard.links")}` },
  ];

  // Daily data for last 2 weeks (14 days) - realistic variation
  const monthChartData = [87, 91, 89, 94, 86, 92, 88, 95, 90, 93, 87, 96, 89, 94];
  // Monthly data for all time (last 12 months)
  const alltimeChartData = [62, 71, 68, 78, 82, 85, 88, 91, 93, 94, 96, 97];
  
  const chartData = timeView === "month" ? monthChartData : alltimeChartData;

  return (
    <section id="dashboard" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated background - Optimized for Safari */}
      <div className="absolute inset-0 opacity-30" style={{ willChange: 'opacity', transform: 'translateZ(0)' }}>
        <div 
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{
            animation: 'pulse 4s ease-in-out infinite',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          style={{ 
            animation: 'pulse 4s ease-in-out infinite 2s',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header with live indicator */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="w-full">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-zinc-900/50 rounded-full border border-zinc-800/50 mb-3 sm:mb-4">
                <div className="relative" style={{ transform: 'translateZ(0)' }}>
                  <div 
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"
                    style={{
                      animation: 'pulse 2s ease-in-out infinite',
                      backfaceVisibility: 'hidden'
                    }}
                  />
                  <div 
                    className="absolute inset-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"
                    style={{
                      animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                      backfaceVisibility: 'hidden'
                    }}
                  />
                </div>
                <span className="text-xs sm:text-sm text-zinc-400 font-medium">{t("dashboard.systemActive")}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-2 leading-tight">
                {t("dashboard.title")}
              </h2>
              <p className="text-sm sm:text-base text-zinc-400">{t("dashboard.subtitle")}</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-0.5 sm:gap-1.5 lg:gap-2 bg-zinc-900/30 sm:bg-zinc-900/30/90 rounded-xl sm:rounded-xl lg:rounded-2xl p-0.5 sm:p-1 lg:p-1.5 border border-zinc-800/40 sm:border-zinc-800/50 w-full overflow-hidden">
            {[
              { id: "scan", label: t("dashboard.tabScan"), shortLabel: "Scan", icon: Eye },
              { id: "signalement", label: t("dashboard.tabReporting"), shortLabel: "Signalement", icon: Activity },
              { id: "suivi", label: t("dashboard.tabTracking"), shortLabel: "Suivi", icon: Settings }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    if (tab.id !== activeTab) {
                      setIsAutoSwitching(false);
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setActiveTab(tab.id as "scan" | "signalement" | "suivi");
                        setTimeout(() => {
                          setIsTransitioning(false);
                        }, 200);
                      }, 150);
                    }
                  }}
                  className={`relative px-3 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-2.5 sm:py-2 lg:py-2.5 xl:py-3 rounded-lg sm:rounded-lg lg:rounded-xl font-medium transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex-1 md:flex-none min-w-0 ${
                    isActive
                      ? "bg-zinc-800 text-foreground shadow-md sm:shadow-lg"
                      : "text-zinc-400 hover:text-foreground active:scale-95"
                  }`}
                  style={{ 
                    transform: isActive ? 'translateZ(0) scale(1.05)' : 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitTapHighlightColor: 'transparent',
                    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  <span className="flex items-center justify-center gap-0 md:gap-1.5 lg:gap-2 min-w-0 w-full">
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
                      <Icon className="h-5 w-5 sm:h-5 sm:w-5 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                    </div>
                    {/* Hide text completely on mobile (below md breakpoint) */}
                    <span className="hidden md:inline whitespace-nowrap truncate text-xs md:text-sm min-w-0 text-center md:ml-1">
                      {tab.label}
                    </span>
                  </span>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 h-0.5 bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '50%' }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ transform: 'translateX(-50%)' }}
                    />
                  )}
                  {/* Subtle pulse effect for active tab on mobile */}
                  {isActive && (
                    <div
                      className="absolute inset-0 rounded-lg sm:rounded-lg lg:rounded-xl bg-primary/5 animate-pulse pointer-events-none"
                      style={{
                        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        backfaceVisibility: 'hidden'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Stats Grid */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            <motion.div
              key={timeView}
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                transform: 'translate3d(0, 0, 0)',
                WebkitTransform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              } as React.CSSProperties}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={`${timeView}-${index}`}
                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 p-3 sm:p-4 lg:p-6 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500"
                    style={{ 
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translate3d(0, -4px, 0) scale(1.02)';
                      e.currentTarget.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translate3d(0, 0, 0) scale(1)';
                      e.currentTarget.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    }}
                  >
                    {/* Gradient overlay - simplified */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                      style={{ transition: 'opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-2 sm:mb-3 lg:mb-4">
                        <div
                          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-zinc-800/50 flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
                          style={{ transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                        >
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
                        </div>
                        <div
                          className={`flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium flex-shrink-0 ${
                            stat.trend ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                          }`}
                        >
                          {stat.trend ? <TrendingUp className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> : <TrendingDown className="h-2.5 w-2.5 sm:h-3 sm:w-3" />}
                          <span className="whitespace-nowrap">{stat.change}</span>
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-display text-foreground mb-1 sm:mb-2 leading-tight">
                        {stat.value}
                      </div>
                      <p className="text-[10px] sm:text-xs lg:text-sm text-zinc-400 leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Chart */}
            <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 p-4 sm:p-6 lg:p-8 border border-zinc-800/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4 sm:mb-6 lg:mb-8">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{t("dashboard.monthlyPerformance")}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400">{t("dashboard.successRate")}</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setTimeView("month");
                        setTimeout(() => {
                          setIsTransitioning(false);
                        }, 200);
                      }, 150);
                    }}
                    className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                      timeView === "month" 
                        ? "bg-primary text-black shadow-lg shadow-primary/20" 
                        : "bg-zinc-800/50 text-zinc-400 hover:text-foreground"
                    }`}
                    style={{ 
                      transform: timeView === "month" ? 'translateZ(0) scale(1.05)' : 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  >
                    {t("dashboard.thisMonth")}
                  </button>
                  <button
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setTimeView("alltime");
                        setTimeout(() => {
                          setIsTransitioning(false);
                        }, 200);
                      }, 150);
                    }}
                    className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                      timeView === "alltime" 
                        ? "bg-primary text-black shadow-lg shadow-primary/20" 
                        : "bg-zinc-800/50 text-zinc-400 hover:text-foreground"
                    }`}
                    style={{ 
                      transform: timeView === "alltime" ? 'translateZ(0) scale(1.05)' : 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  >
                    {t("dashboard.allTime")}
                  </button>
                </div>
              </div>
              <div className="flex items-end justify-between h-32 sm:h-40 lg:h-48 gap-0.5 sm:gap-1 lg:gap-1.5 relative">
                <motion.div
                  key={timeView}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isTransitioning ? 0.5 : 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0 flex items-end justify-between gap-0.5 sm:gap-1 lg:gap-1.5"
                  style={{ 
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  {chartData.map((value, index) => (
                    <div
                      key={`${timeView}-${index}`}
                      className="group relative flex-1 bg-gradient-to-t from-primary via-primary/80 to-primary/60 rounded-t-lg hover:from-primary hover:to-primary/80 transition-all duration-500 cursor-pointer"
                      style={{ 
                        height: `${value}%`,
                        transform: 'translateZ(0)',
                        transition: `height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.03}s`,
                        backfaceVisibility: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translate3d(0, -2px, 0) scaleY(1.05)';
                        e.currentTarget.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translate3d(0, 0, 0) scaleY(1)';
                        e.currentTarget.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                      }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 px-2 py-1 rounded text-xs font-medium text-foreground whitespace-nowrap pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {value}%
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
              <div className={`mt-3 sm:mt-4 text-[9px] sm:text-xs text-zinc-500 ${timeView === "month" ? "flex justify-between" : "flex justify-between"}`}>
                {timeView === "month" 
                  ? // Show all days for last 2 weeks (14 days)
                    Array.from({ length: 14 }, (_, i) => {
                      // Get the day number (last 14 days from today)
                      const today = new Date();
                      const dayDate = new Date(today);
                      dayDate.setDate(today.getDate() - (13 - i));
                      return dayDate.getDate();
                    }).map((day, i) => (
                      <span key={i} className="flex-shrink-0 text-center" style={{ width: `${100 / 14}%` }}>
                        {day}
                      </span>
                    ))
                  : // Show months for all time
                    (language === 'en' 
                      ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, i) => (
                          <span key={i} className="flex-shrink-0">{month}</span>
                        ))
                      : ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"].map((month, i) => (
                          <span key={i} className="flex-shrink-0">{month}</span>
                        ))
                    )
                }
              </div>
            </div>
          </div>

          {/* Side Panel - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-4 space-y-4 sm:space-y-6">
            {/* Top Clients */}
            <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 p-4 sm:p-6 border border-zinc-800/50">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">{t("dashboard.recentClients")}</h3>
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {topClients.map((client, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-between p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-zinc-800/30 transition-all duration-200 cursor-pointer"
                    style={{ 
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translate3d(4px, 0, 0) scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translate3d(0, 0, 0) scale(1)';
                    }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${client.avatar} flex items-center justify-center text-white font-semibold text-xs sm:text-sm shadow-lg flex-shrink-0 transition-transform duration-200 group-hover:scale-110`}
                      >
                        {client.name.charAt(0)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm font-medium text-foreground truncate">{client.name}</div>
                        <div className="text-[10px] sm:text-xs text-zinc-500 truncate">{client.protected}</div>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                ))}
              </div>
              <button
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-zinc-800/50 hover:bg-zinc-800 text-xs sm:text-sm font-medium text-foreground transition-all duration-200 border border-zinc-700/50 hover:border-primary"
                style={{ 
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateZ(0) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateZ(0) scale(1)';
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'translateZ(0) scale(0.98)';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = 'translateZ(0) scale(1.02)';
                }}
              >
                {t("dashboard.viewAllProfiles")}
              </button>
            </div>

            {/* Quick Stats */}
            <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 p-4 sm:p-6 border border-zinc-800/50 space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-zinc-800/50">
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-primary">
                    750
                  </div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 mt-1">{t("dashboard.activeReports")}</div>
                </div>
                <div className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] sm:text-xs font-medium">
                  +5%
                </div>
              </div>
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-zinc-800/50">
                <div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-primary">
                    197
                  </div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 mt-1">{t("dashboard.inProgress")}</div>
                </div>
                <div className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] sm:text-xs font-medium">
                  +6%
                </div>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-zinc-400 mb-2">{t("dashboard.avgRemovalTime")}</div>
                <div className="flex items-end gap-2">
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-display text-foreground">
                    48h
                  </div>
                  <div className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-red-500/10 text-red-400 text-[10px] sm:text-xs font-medium mb-1">
                    -1%
                  </div>
                </div>
                <div className="mt-3 h-2 bg-zinc-800/50 rounded-full overflow-hidden">
                  <div
                    className="h-full w-3/4 bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
