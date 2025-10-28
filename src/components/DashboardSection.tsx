import { useLanguage } from "@/hooks/useLanguage";
import { TrendingUp, TrendingDown } from "lucide-react";

const DashboardSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "+15 312", change: "+4%", label: t('dashboard.clients'), up: true },
    { value: "223", change: "+12%", label: t('dashboard.clients'), up: true },
    { value: "30+", change: "+3%", label: t('dashboard.platforms'), up: true },
    { value: "246", change: "+8%", label: t('dashboard.content'), up: true },
  ];

  const chartData = [
    { month: "Jan", value: 120 },
    { month: "Fév", value: 180 },
    { month: "Mar", value: 150 },
    { month: "Avr", value: 200 },
    { month: "Mai", value: 250 },
    { month: "Juin", value: 280 },
  ];

  const topClients = [
    "Ava",
    "Elodie Giry",
    "Noonababe",
    "Zineb D.",
    "Looana Paul",
    "Jade Belle"
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            {t('dashboard.stats')}
          </h2>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Stats Cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-xl border border-border/20 hover:border-primary/30 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-3xl font-bold">{stat.value}</span>
                  <div className={`flex items-center text-xs ${stat.up ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.up ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                    {stat.change}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="glass-card p-6 rounded-xl border border-border/20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-semibold">{t('dashboard.thisMonth')}</h3>
              <button className="text-xs text-muted-foreground hover:text-foreground">{t('dashboard.allTime')}</button>
            </div>
            <div className="flex items-end justify-between h-40 space-x-2">
              {chartData.map((data, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="w-full bg-primary/20 rounded-t-lg relative" style={{ height: `${(data.value / maxValue) * 100}%` }}>
                    <div className="absolute bottom-0 w-full h-1/2 bg-primary rounded-t-lg"></div>
                  </div>
                  <span className="text-xs text-muted-foreground mt-2">{data.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Clients */}
          <div className="lg:col-span-2 glass-card p-6 rounded-xl border border-border/20">
            <h3 className="text-sm font-semibold mb-4">{t('dashboard.topClients')}</h3>
            <div className="space-y-3">
              {topClients.map((client, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-500"></div>
                  <span className="text-sm">{client}</span>
                </div>
              ))}
            </div>
            <button className="text-xs text-primary hover:underline mt-4">{t('dashboard.viewAll')}</button>
          </div>

          {/* Additional Stats */}
          <div className="glass-card p-6 rounded-xl border border-border/20">
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-primary">750</div>
                <p className="text-xs text-muted-foreground">+5%</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">197</div>
                <p className="text-xs text-muted-foreground">+6%</p>
              </div>
              <div className="mt-6">
                <p className="text-xs text-muted-foreground mb-1">{t('dashboard.removal')}</p>
                <div className="text-2xl font-bold">48h</div>
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
