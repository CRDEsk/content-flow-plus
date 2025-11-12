import { useState } from "react";
import { Search, Flag, BarChart3, Check, Zap, Shield } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const HowItWorksSection = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  
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
            return <button key={index} onClick={() => setActiveTab(index)} className={`relative overflow-hidden flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 flex-1 sm:flex-none ${activeTab === index ? "bg-zinc-800 text-foreground shadow-lg scale-105" : "text-zinc-400 hover:text-foreground hover:bg-zinc-800/50"}`}>
                  <Icon className="h-5 w-5 sm:h-5 sm:w-5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="whitespace-nowrap">{tab.label}</span>
                  {activeTab === index && <>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full animate-[slide_2s_ease-in-out_infinite]" />
                    </>}
                </button>;
          })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-4 sm:p-6 lg:p-8 xl:p-12 border border-zinc-800/50 overflow-hidden group">
            {/* Animated background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${tabs[activeTab].color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10 max-w-5xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 mb-4 sm:mb-6">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="text-[10px] sm:text-xs text-zinc-400 font-medium">{tabs[activeTab].badge}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-foreground">{tabs[activeTab].title}</span><br />
                <span className="gradient-text">{tabs[activeTab].titleHighlight}</span>
              </h3>
              
              {/* Description */}
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-4xl">
                {tabs[activeTab].description}
              </p>

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4">
                {tabs[activeTab].features.map((feature, index) => <div key={index} className="flex items-start gap-2 sm:gap-3 lg:gap-4 group/item" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground font-medium group-hover/item:text-primary transition-colors duration-300 leading-relaxed">
                      {feature}
                    </span>
                  </div>)}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mt-6 sm:mt-8 lg:mt-10 pt-6 sm:pt-8 lg:pt-10 border-t border-zinc-800/50">
                
                
                
              </div>
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
    </section>;
};
export default HowItWorksSection;