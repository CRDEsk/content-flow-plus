import { TrendingUp, TrendingDown, Eye, Settings, HeadphonesIcon, Activity, Zap, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const DashboardSection = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"scan" | "signalement" | "suivi">("scan");
  const [timeView, setTimeView] = useState<"month" | "alltime">("month");
  const [liveCount, setLiveCount] = useState(15312);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-rotate time view every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setTimeView(prev => prev === "month" ? "alltime" : "month");
        setIsTransitioning(false);
      }, 400);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // Tabs are now static - no auto-rotation
  // Users can manually switch between tabs

  // Simulate real-time counter updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Daily fluctuation - stats change by max 20% each day
  useEffect(() => {
    const dailyUpdate = setInterval(() => {
      setLiveCount(prev => {
        const variation = Math.floor(Math.random() * (prev * 0.2)); // Max 20%
        return prev + variation;
      });
    }, 86400000); // 24 hours
    return () => clearInterval(dailyUpdate);
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

  const monthChartData = [85, 92, 78, 96, 88, 94, 87, 98, 91, 95, 89, 97];
  const alltimeChartData = [62, 71, 68, 78, 82, 85, 88, 91, 93, 94, 96, 97];
  
  const chartData = timeView === "month" ? monthChartData : alltimeChartData;

  return (
    <section id="dashboard" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated background - Reduced for Safari performance */}
      <div className="absolute inset-0 opacity-30" style={{ willChange: 'opacity', WebkitTransform: 'translateZ(0)' }}>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" style={{ animation: 'none' }} />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl" style={{ animation: 'none' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header with live indicator */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="w-full">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-zinc-900/50 rounded-full border border-zinc-800/50 mb-3 sm:mb-4">
                <div className="relative">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full" />
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
          <div className="flex items-center gap-0.5 sm:gap-1.5 lg:gap-2 bg-zinc-900/30 sm:bg-zinc-900/30/90 backdrop-blur-md sm:backdrop-blur-xl rounded-xl sm:rounded-xl lg:rounded-2xl p-0.5 sm:p-1 lg:p-1.5 border border-zinc-800/40 sm:border-zinc-800/50 w-full sm:w-fit overflow-x-auto">
            {[
              { id: "scan", label: t("dashboard.tabScan"), shortLabel: "Scan", icon: Eye },
              { id: "signalement", label: t("dashboard.tabReporting"), shortLabel: "Signalement", icon: Activity },
              { id: "suivi", label: t("dashboard.tabTracking"), shortLabel: "Suivi", icon: Settings }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "scan" | "signalement" | "suivi")}
                  className={`relative px-1.5 sm:px-3 lg:px-4 xl:px-6 py-1 sm:py-2 lg:py-2.5 xl:py-3 rounded-lg sm:rounded-lg lg:rounded-xl font-medium text-[11px] sm:text-xs lg:text-sm transition-all duration-250 ease-out flex-shrink-0 flex-1 sm:flex-none ${
                    isActive
                      ? "bg-zinc-800 text-foreground shadow-md sm:shadow-lg"
                      : "text-zinc-400 hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.97 }}
                  initial={false}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  <span className="flex items-center justify-center gap-0.5 sm:gap-1.5 lg:gap-2">
                    <motion.div
                      animate={{ rotate: isActive ? [0, -6, 6, 0] : 0, scale: isActive ? 1.05 : 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
                    </motion.div>
                    <span className="whitespace-nowrap hidden sm:inline">{tab.label}</span>
                    <span className="whitespace-nowrap sm:hidden">{tab.shortLabel}</span>
                  </span>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 h-0.5 bg-primary"
                      layoutId="activeTab"
                      initial={false}
                      style={{ width: "50%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 26 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Stats Grid */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={timeView}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isTransitioning ? 0.5 : 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                className="grid grid-cols-2 gap-3 sm:gap-4"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={`${timeView}-${index}`}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                          delay: index * 0.05,
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 p-3 sm:p-4 lg:p-6 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300"
                      style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
                      whileHover={{ y: -2, scale: 1.01 }}
                    >
                      {/* Gradient overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color}`}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Loading shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "200%" }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                      />
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-2 sm:mb-3 lg:mb-4">
                          <motion.div
                            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-zinc-800/50 flex items-center justify-center flex-shrink-0"
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
                          </motion.div>
                          <motion.div
                            className={`flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium flex-shrink-0 ${
                              stat.trend ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                            }`}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                          >
                            {stat.trend ? <TrendingUp className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> : <TrendingDown className="h-2.5 w-2.5 sm:h-3 sm:w-3" />}
                            <span className="whitespace-nowrap">{stat.change}</span>
                          </motion.div>
                        </div>
                        <motion.div
                          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-display text-foreground mb-1 sm:mb-2 leading-tight"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                        >
                          {stat.value}
                        </motion.div>
                        <motion.p
                          className="text-[10px] sm:text-xs lg:text-sm text-zinc-400 leading-tight"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                        >
                          {stat.label}
                        </motion.p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Chart */}
            <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 p-4 sm:p-6 lg:p-8 border border-zinc-800/50" style={{ WebkitTransform: 'translateZ(0)' }}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4 sm:mb-6 lg:mb-8">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{t("dashboard.monthlyPerformance")}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400">{t("dashboard.successRate")}</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <motion.button
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setTimeView("month");
                        setIsTransitioning(false);
                      }, 400);
                    }}
                    className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium ${
                      timeView === "month" 
                        ? "bg-primary text-black shadow-lg shadow-primary/20" 
                        : "bg-zinc-800/50 text-zinc-400 hover:text-foreground"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      scale: timeView === "month" ? 1.05 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {t("dashboard.thisMonth")}
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setTimeView("alltime");
                        setIsTransitioning(false);
                      }, 400);
                    }}
                    className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium ${
                      timeView === "alltime" 
                        ? "bg-primary text-black shadow-lg shadow-primary/20" 
                        : "bg-zinc-800/50 text-zinc-400 hover:text-foreground"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      scale: timeView === "alltime" ? 1.05 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {t("dashboard.allTime")}
                  </motion.button>
                </div>
              </div>
              <div ref={chartRef} className="flex items-end justify-between h-32 sm:h-40 lg:h-48 gap-1 sm:gap-2 relative overflow-x-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={timeView}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-end justify-between gap-2"
                  >
                    {chartData.map((value, index) => (
                      <motion.div
                        key={`${timeView}-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: `${value}%`, opacity: 1 }}
                        transition={{
                          delay: index * 0.03,
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        className="group relative flex-1 bg-gradient-to-t from-primary via-primary/80 to-primary/60 rounded-t-lg hover:from-primary hover:to-primary/80 transition-all duration-300 cursor-pointer"
                        whileHover={{ scaleY: 1.05, y: -2 }}
                      >
                        <motion.div
                          className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 px-2 py-1 rounded text-xs font-medium text-foreground whitespace-nowrap pointer-events-none z-10"
                          initial={{ opacity: 0, y: 5 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {value}%
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex justify-between mt-3 sm:mt-4 text-[9px] sm:text-xs text-zinc-500 overflow-x-auto">
                {language === 'en' 
                  ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, i) => (
                      <span key={i} className="flex-shrink-0">{month}</span>
                    ))
                  : ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"].map((month, i) => (
                      <span key={i} className="flex-shrink-0">{month}</span>
                    ))
                }
              </div>
            </div>
          </div>

          {/* Side Panel - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-4 space-y-4 sm:space-y-6">
            {/* Top Clients */}
            <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 p-4 sm:p-6 border border-zinc-800/50" style={{ WebkitTransform: 'translateZ(0)' }}>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">{t("dashboard.recentClients")}</h3>
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {topClients.map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="group flex items-center justify-between p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-zinc-800/30 transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 4, scale: 1.02 }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <motion.div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${client.avatar} flex items-center justify-center text-white font-semibold text-xs sm:text-sm shadow-lg flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {client.name.charAt(0)}
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm font-medium text-foreground truncate">{client.name}</div>
                        <div className="text-[10px] sm:text-xs text-zinc-500 truncate">{client.protected}</div>
                      </div>
                    </div>
                    <motion.div
                      className="w-2 h-2 bg-green-500 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                ))}
              </div>
              <motion.button
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-zinc-800/50 hover:bg-zinc-800 text-xs sm:text-sm font-medium text-foreground transition-colors border border-zinc-700/50 hover:border-zinc-600"
                whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.98 }}
              >
                {t("dashboard.viewAllProfiles")}
              </motion.button>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 p-4 sm:p-6 border border-zinc-800/50 space-y-4 sm:space-y-6"
              style={{ WebkitTransform: 'translateZ(0)' }}
            >
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="flex items-center justify-between pb-3 sm:pb-4 border-b border-zinc-800/50"
              >
                <div>
                  <motion.div
                    className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-primary"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    750
                  </motion.div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 mt-1">{t("dashboard.activeReports")}</div>
                </div>
                <motion.div
                  className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] sm:text-xs font-medium"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
                >
                  +5%
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex items-center justify-between pb-3 sm:pb-4 border-b border-zinc-800/50"
              >
                <div>
                  <motion.div
                    className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-primary"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                  >
                    197
                  </motion.div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 mt-1">{t("dashboard.inProgress")}</div>
                </div>
                <motion.div
                  className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] sm:text-xs font-medium"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
                >
                  +6%
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <div className="text-[10px] sm:text-xs text-zinc-400 mb-2">{t("dashboard.avgRemovalTime")}</div>
                <div className="flex items-end gap-2">
                  <motion.div
                    className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-display text-foreground"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  >
                    48h
                  </motion.div>
                  <motion.div
                    className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-red-500/10 text-red-400 text-[10px] sm:text-xs font-medium mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
                  >
                    -1%
                  </motion.div>
                </div>
                <div className="mt-3 h-2 bg-zinc-800/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full w-3/4 bg-gradient-to-r from-primary to-primary/60 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
