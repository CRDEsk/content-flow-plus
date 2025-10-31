import { TrendingUp, TrendingDown, Eye, Settings, HeadphonesIcon, Activity, Zap, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const DashboardSection = () => {
  const [activeTab, setActiveTab] = useState<"scan" | "signalement" | "suivi">("scan");
  const [timeView, setTimeView] = useState<"month" | "alltime">("month");
  const [liveCount, setLiveCount] = useState(15312);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate time view every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setTimeView(prev => prev === "month" ? "alltime" : "month");
        setIsTransitioning(false);
      }, 300);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate active tab every 15 seconds
  useEffect(() => {
    const tabs: Array<"scan" | "signalement" | "suivi"> = ["scan", "signalement", "suivi"];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[currentIndex]);
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);

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
      label: "Contenus supprimés",
      trend: true,
      icon: Zap,
      color: "from-primary/20 to-primary/5"
    },
    { 
      value: "223", 
      change: "+3%", 
      label: "Clients protégés",
      trend: true,
      icon: Activity,
      color: "from-green-500/20 to-green-500/5"
    },
    { 
      value: "30+", 
      change: "+8%", 
      label: "Plateformes scannées",
      trend: true,
      icon: Eye,
      color: "from-blue-500/20 to-blue-500/5"
    },
    { 
      value: "246", 
      change: "+15%", 
      label: "Contenus détectés",
      trend: true,
      icon: Clock,
      color: "from-purple-500/20 to-purple-500/5"
    },
  ];

  const alltimeStats = [
    { 
      value: "500k+", 
      change: "+156%", 
      label: "Contenus supprimés",
      trend: true,
      icon: Zap,
      color: "from-primary/20 to-primary/5"
    },
    { 
      value: "2,847", 
      change: "+234%", 
      label: "Clients protégés",
      trend: true,
      icon: Activity,
      color: "from-green-500/20 to-green-500/5"
    },
    { 
      value: "500+", 
      change: "+412%", 
      label: "Plateformes scannées",
      trend: true,
      icon: Eye,
      color: "from-blue-500/20 to-blue-500/5"
    },
    { 
      value: "15k+", 
      change: "+289%", 
      label: "Contenus détectés",
      trend: true,
      icon: Clock,
      color: "from-purple-500/20 to-purple-500/5"
    },
  ];

  const stats = timeView === "month" ? monthStats : alltimeStats;

  const topClients = [
    { name: "Ava", avatar: "bg-gradient-to-br from-pink-500 to-rose-500", protected: "142 liens" },
    { name: "Elodie Giry", avatar: "bg-gradient-to-br from-purple-500 to-indigo-500", protected: "89 liens" },
    { name: "Noonababe", avatar: "bg-gradient-to-br from-blue-500 to-cyan-500", protected: "201 liens" },
    { name: "Zineb D.", avatar: "bg-gradient-to-br from-green-500 to-emerald-500", protected: "156 liens" },
    { name: "Looana Paul", avatar: "bg-gradient-to-br from-yellow-500 to-orange-500", protected: "178 liens" },
    { name: "Jade Belle", avatar: "bg-gradient-to-br from-red-500 to-pink-500", protected: "134 liens" },
  ];

  const monthChartData = [85, 92, 78, 96, 88, 94, 87, 98, 91, 95, 89, 97];
  const alltimeChartData = [62, 71, 68, 78, 82, 85, 88, 91, 93, 94, 96, 97];
  
  const chartData = timeView === "month" ? monthChartData : alltimeChartData;

  return (
    <section id="dashboard" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header with live indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-zinc-900/50 rounded-full border border-zinc-800/50 mb-4">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
                </div>
                <span className="text-sm text-zinc-400 font-medium">Système actif • Surveillance en temps réel</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-2">
                Tableau de bord
              </h2>
              <p className="text-zinc-400">Analyse et monitoring en direct de votre protection</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 bg-zinc-900/30 backdrop-blur-xl rounded-2xl p-1.5 border border-zinc-800/50 w-fit">
            {[
              { id: "scan", label: "Scan complet", icon: Eye },
              { id: "signalement", label: "Signalement", icon: Activity },
              { id: "suivi", label: "Suivi & tableau", icon: Settings }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "scan" | "signalement" | "suivi")}
                  className={`relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-500 ease-out transform ${
                    activeTab === tab.id
                      ? "bg-zinc-800 text-foreground shadow-lg scale-105"
                      : "text-zinc-400 hover:text-foreground hover:scale-102"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Icon className="h-4 w-4 transition-transform duration-300" />
                    {tab.label}
                  </span>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary animate-in slide-in-from-left duration-500" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Stats Grid */}
          <div className="lg:col-span-8 space-y-6">
            <div className={`grid grid-cols-2 gap-4 transition-all duration-500 ease-out ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={`${timeView}-${index}`} 
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-6 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Loading shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-6 w-6 text-primary animate-in zoom-in duration-300" style={{ animationDelay: `${index * 150}ms` }} />
                        </div>
                        <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium animate-in slide-in-from-right duration-300 ${
                          stat.trend ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                        }`} style={{ animationDelay: `${index * 150}ms` }}>
                          {stat.trend ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                          {stat.change}
                        </div>
                      </div>
                      <div className="text-4xl font-bold font-display text-foreground mb-2 animate-in fade-in zoom-in duration-500" style={{ animationDelay: `${index * 200}ms` }}>{stat.value}</div>
                      <p className="text-sm text-zinc-400 animate-in fade-in duration-300" style={{ animationDelay: `${index * 250}ms` }}>{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Chart */}
            <div className="rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-8 border border-zinc-800/50">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Performance mensuelle</h3>
                  <p className="text-sm text-zinc-400">Taux de suppression réussi</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setTimeView("month");
                        setIsTransitioning(false);
                      }, 300);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-500 ease-out transform ${
                      timeView === "month" 
                        ? "bg-primary text-black scale-105 shadow-lg shadow-primary/20" 
                        : "bg-zinc-800/50 text-zinc-400 hover:text-foreground hover:scale-102"
                    }`}
                  >
                    Ce mois
                  </button>
                  <button 
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setTimeView("alltime");
                        setIsTransitioning(false);
                      }, 300);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-500 ease-out transform ${
                      timeView === "alltime" 
                        ? "bg-primary text-black scale-105 shadow-lg shadow-primary/20" 
                        : "bg-zinc-800/50 text-zinc-400 hover:text-foreground hover:scale-102"
                    }`}
                  >
                    Tout temps
                  </button>
                </div>
              </div>
              <div className="flex items-end justify-between h-48 gap-2">
                {chartData.map((value, index) => (
                  <div
                    key={index}
                    className="group relative flex-1 bg-gradient-to-t from-primary via-primary/80 to-primary/60 rounded-t-lg hover:from-primary hover:to-primary/80 transition-all duration-300 cursor-pointer"
                    style={{ 
                      height: `${value}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 px-2 py-1 rounded text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {value}%
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-xs text-zinc-500">
                {["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"].map((month, i) => (
                  <span key={i}>{month}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="lg:col-span-4 space-y-6">
            {/* Top Clients */}
            <div className="rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-6 border border-zinc-800/50">
              <h3 className="text-lg font-semibold text-foreground mb-6">Clients récemment protégés</h3>
              <div className="space-y-3 mb-6">
                {topClients.map((client, index) => (
                  <div key={index} className="group flex items-center justify-between p-3 rounded-xl hover:bg-zinc-800/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${client.avatar} flex items-center justify-center text-white font-semibold text-sm shadow-lg`}>
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{client.name}</div>
                        <div className="text-xs text-zinc-500">{client.protected}</div>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
              <button className="w-full px-4 py-3 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 text-sm font-medium text-foreground transition-colors border border-zinc-700/50 hover:border-zinc-600">
                Voir tous les profils →
              </button>
            </div>

            {/* Quick Stats */}
            <div className="rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-6 border border-zinc-800/50 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/50">
                <div>
                  <div className="text-3xl font-bold font-display text-primary">750</div>
                  <div className="text-xs text-zinc-400 mt-1">Signalements actifs</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">
                  +5%
                </div>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/50">
                <div>
                  <div className="text-3xl font-bold font-display text-primary">197</div>
                  <div className="text-xs text-zinc-400 mt-1">En cours de traitement</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium">
                  +6%
                </div>
              </div>
              <div>
                <div className="text-xs text-zinc-400 mb-2">Délai moyen de suppression</div>
                <div className="flex items-end gap-2">
                  <div className="text-4xl font-bold font-display text-foreground">48h</div>
                  <div className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-medium mb-1">
                    -1%
                  </div>
                </div>
                <div className="mt-3 h-2 bg-zinc-800/50 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-primary to-primary/60 rounded-full" />
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
