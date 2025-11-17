import { Shield, CheckCircle, TrendingUp, Award, Lock, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const TrustSection = () => {
  const { t } = useLanguage();
  
  const metrics = [
    {
      value: "500k+",
      label: t("trust.contentRemoved"),
      icon: Zap,
      gradient: "from-primary/25 via-primary/10 to-yellow-400/25",
      highlight: true,
    },
    {
      value: "99.2%",
      label: t("trust.successRate"),
      icon: Award,
      gradient: "from-emerald-500/25 via-emerald-400/10 to-green-400/25",
      highlight: true,
    },
    {
      value: "<24h",
      label: t("trust.avgTime"),
      icon: TrendingUp,
      gradient: "from-blue-500/20 via-blue-400/10 to-cyan-400/25",
      highlight: true,
    },
    {
      value: "500+",
      label: t("trust.creatorsProtected"),
      icon: Shield,
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      value: "15k+",
      label: "Infractions détectées",
      icon: CheckCircle,
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      value: "500+",
      label: t("trust.platformsScanned"),
      icon: Lock,
      gradient: "from-indigo-500/20 to-violet-500/20",
    },
  ];

  const numberVariants = {
    hidden: { y: 20, scale: 0.9 },
    visible: (i: number) => ({
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section id="trust" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
            WebkitTransform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          } as React.CSSProperties}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-4 sm:mb-6 lg:mb-8">
            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm text-zinc-400 font-medium">{t("trust.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            {t("trust.title")}<br />
            <span className="gradient-text">{t("trust.titleHighlight")}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed px-2">
            {t("trust.description")}
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                variants={numberVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                custom={index}
                className={`group relative overflow-hidden rounded-2xl backdrop-blur-xl p-6 sm:p-8 border border-zinc-800/50 hover:border-primary/50 transition-all duration-500 ${
                  metric.highlight
                    ? "bg-gradient-to-br from-zinc-900/70 via-zinc-950/60 to-zinc-950/80 hover:scale-110"
                    : "bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 hover:scale-105"
                }`}
                style={{
                  opacity: 1,
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  isolation: 'isolate',
                } as React.CSSProperties}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl bg-zinc-800/50 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300">
                    <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${metric.highlight ? "text-primary" : "text-primary/80"}`} />
                  </div>
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5, type: "spring", stiffness: 200 }}
                    style={{
                      opacity: 1,
                      transform: 'translate3d(0, 0, 0)',
                      WebkitTransform: 'translate3d(0, 0, 0)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    } as React.CSSProperties}
                    className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-display ${
                      metric.highlight ? "text-primary" : "text-primary/90"
                    } mb-2 sm:mb-3 tracking-tight`}
                  >
                    {metric.value}
                  </motion.div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed uppercase tracking-[0.28em]">
                    {metric.label}
                  </p>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Cards */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">

          {/* Google Badge */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-6 sm:p-8 border border-zinc-800/50 hover:border-primary/50 transition-all duration-500">
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-zinc-800/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    {t("trust.googleBadge")}
                  </h3>
                  <div className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-xl shadow-2xl">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 relative flex-shrink-0">
                      <svg viewBox="0 0 48 48" className="w-full h-full">
                        <circle cx="24" cy="24" r="20" fill="none" stroke="#4285F4" strokeWidth="4"/>
                        <path d="M24 4 A20 20 0 0 1 44 24" fill="none" stroke="#EA4335" strokeWidth="4"/>
                        <path d="M44 24 A20 20 0 0 1 24 44" fill="none" stroke="#FBBC05" strokeWidth="4"/>
                        <path d="M24 44 A20 20 0 0 1 4 24" fill="none" stroke="#34A853" strokeWidth="4"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 text-xs sm:text-sm">Google's Trusted</div>
                      <div className="font-bold text-gray-900 text-xs sm:text-sm">Copyright Removal Program</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
          </div>

          {/* Guarantee */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-6 sm:p-8 border border-zinc-800/50 hover:border-green-500/50 transition-all duration-500">
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-zinc-800/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="h-7 w-7 sm:h-8 sm:w-8 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    {t("trust.guaranteeTitle")}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {t("trust.guaranteeDesc")}
                  </p>
                  <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                    <div className="px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                      ✓ {t("trust.rgpd")}
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                      ✓ {t("trust.iso")}
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                      ✓ {t("trust.audited")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-colors duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
