import { DollarSign, Shield, Crown, Lock, ArrowRight, Sparkles, Zap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const HelpSection = () => {
  const { t, language } = useLanguage();
  
  const benefits = [
    {
      icon: DollarSign,
      title: t("help.revenueTitle"),
      description: t("help.revenueDesc"),
      color: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-500"
    },
    {
      icon: Shield,
      title: t("help.serenityTitle"),
      description: t("help.serenityDesc"),
      color: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500"
    },
    {
      icon: Crown,
      title: t("help.reputationTitle"),
      description: t("help.reputationDesc"),
      color: "from-purple-500/20 to-pink-500/20",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-500"
    },
    {
      icon: Lock,
      title: t("help.controlTitle"),
      description: t("help.controlDesc"),
      color: "from-red-500/20 to-orange-500/20",
      iconBg: "bg-red-500/10",
      iconColor: "text-red-500"
    }
  ];

  return (
    <section id="help" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-4 sm:mb-6 lg:mb-8">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm text-zinc-400 font-medium">{t("help.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            {t("help.title")}<br />
            <span className="gradient-text">{t("help.titleHighlight")}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-zinc-400 leading-relaxed mb-6 sm:mb-8">
            {t("help.subtitle")}
          </p>
          <Button 
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-black font-semibold rounded-full px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            asChild
          >
            <a href="https://espace.contentremovaldesk.com/auth?mode=signup">
              <span className="flex items-center gap-2 justify-center">
                {t("common.getStarted")}
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-4 sm:p-6 lg:p-8 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex items-start gap-3 sm:gap-4 lg:gap-6">
                  <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl ${benefit.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300`}>
                    <Icon className={`h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 ${benefit.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            );
          })}
        </div>

        {/* Emergency Intervention Stats */}
        <div className="mt-12 sm:mt-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-500/10 via-orange-500/5 to-red-500/10 backdrop-blur-xl p-4 sm:p-6 lg:p-8 border border-red-500/20 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-tight">{t("help.emergencyTitle")}</h3>
                <p className="text-xs sm:text-sm text-zinc-400">{t("help.emergencySubtitle")}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
              <div className="text-center p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-zinc-900/30 border border-zinc-800/50">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-400 mb-1 leading-tight">&lt;2h</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-zinc-400">{t("help.emergencyResponse")}</div>
              </div>
              <div className="text-center p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-zinc-900/30 border border-zinc-800/50">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-400 mb-1 leading-tight">98.7%</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-zinc-400">{t("help.emergencyResolved")}</div>
              </div>
              <div className="text-center p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl bg-zinc-900/30 border border-zinc-800/50">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400 mb-1 leading-tight">750+</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-zinc-400">{t("help.emergencyInterventions")}</div>
              </div>
            </div>

          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 backdrop-blur-xl p-8 border border-primary/20 relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {t("help.ctaTitle")}
              </h3>
              <p className="text-zinc-400">
                {t("help.ctaSubtitle")}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-black font-semibold rounded-full px-8 py-6 shadow-2xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="https://scan.contentremovaldesk.com/scan">
                <span className="flex items-center gap-2">
                  {t("help.ctaButton")}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Button>
              <Button 
                size="lg"
                variant="outline"
                className="group border-zinc-700 hover:border-primary/50 text-white font-semibold rounded-full px-8 py-6 shadow-2xl hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="https://blog.contentremovaldesk.com" target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-2">
                    {language === 'fr' ? 'Lire nos guides' : 'Read Our Guides'}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
