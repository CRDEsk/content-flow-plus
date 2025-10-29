import { TrendingUp, Eye, Settings, HeadphonesIcon } from "lucide-react";

const DashboardSection = () => {
  const stats = [
    { value: "+15 312", change: "+4%", label: "Contenus supprimés" },
    { value: "223", change: "+12%", label: "Clients protégés" },
    { value: "30+", change: "+3%", label: "Plateformes scannées" },
    { value: "246", change: "+8%", label: "Contenus détectés" },
  ];

  const topClients = [
    { name: "Ava", color: "from-pink-500 to-rose-500" },
    { name: "Elodie Giry", color: "from-purple-500 to-indigo-500" },
    { name: "Noonababe", color: "from-blue-500 to-cyan-500" },
    { name: "Zineb D.", color: "from-green-500 to-emerald-500" },
    { name: "Looana Paul", color: "from-yellow-500 to-orange-500" },
    { name: "Jade Belle", color: "from-red-500 to-pink-500" },
  ];

  const chartData = [120, 180, 150, 200, 170, 250, 220, 280, 240, 300, 270, 320];

  return (
    <section id="dashboard" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 rounded-full border border-zinc-800 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">CONTENTREMOVALDESK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Statistiques
          </h2>
        </div>

        {/* Dashboard */}
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Left: Navigation */}
          <div className="lg:col-span-2 space-y-2">
            <button className="w-full px-4 py-3 text-left rounded-xl bg-zinc-900/50 border border-primary text-foreground text-sm font-medium">
              Statistiques
            </button>
            <button className="w-full px-4 py-3 text-left rounded-xl hover:bg-zinc-900/30 text-muted-foreground text-sm font-medium transition-colors">
              <Eye className="inline h-4 w-4 mr-2" />
              Scan en cours
            </button>
            <button className="w-full px-4 py-3 text-left rounded-xl hover:bg-zinc-900/30 text-muted-foreground text-sm font-medium transition-colors">
              <Settings className="inline h-4 w-4 mr-2" />
              Paramètres
            </button>
            <button className="w-full px-4 py-3 text-left rounded-xl hover:bg-zinc-900/30 text-muted-foreground text-sm font-medium transition-colors">
              <HeadphonesIcon className="inline h-4 w-4 mr-2" />
              Assistance
            </button>
          </div>

          {/* Middle: Stats Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mb-2">{stat.label}</p>
                  <div className="flex items-center text-xs text-green-400">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-semibold text-foreground">Ce mois</h3>
                <button className="text-xs text-muted-foreground hover:text-foreground">Tout temps</button>
              </div>
              <div className="flex items-end justify-between h-32 gap-1">
                {chartData.map((value, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-primary/80 hover:bg-primary rounded-t transition-all"
                    style={{ height: `${(value / 320) * 100}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Top Clients */}
          <div className="lg:col-span-4 bg-zinc-900/50 backdrop-blur-sm p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-sm font-semibold mb-6 text-foreground">Top clients récemment protégés</h3>
            <div className="space-y-3 mb-6">
              {topClients.map((client, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800/50 transition-colors">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${client.color}`}></div>
                  <span className="text-sm text-foreground">{client.name}</span>
                </div>
              ))}
            </div>
            <button className="text-xs text-primary hover:underline">Voir tous les profils</button>

            <div className="mt-8 pt-6 border-t border-zinc-800 space-y-4">
              <div>
                <div className="text-2xl font-bold text-primary">750</div>
                <p className="text-xs text-muted-foreground">+5%</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">197</div>
                <p className="text-xs text-muted-foreground">+6%</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Délai moyen de suppression</p>
                <div className="text-2xl font-bold text-foreground">48h</div>
                <p className="text-xs text-red-400">-1%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
