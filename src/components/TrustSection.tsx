import { Shield, CheckCircle, TrendingUp, Award, Lock, Zap } from "lucide-react";

const TrustSection = () => {
  const metrics = [
    { 
      value: "500k+", 
      label: "Liens supprimés",
      icon: Zap,
      gradient: "from-primary/20 to-yellow-500/20"
    },
    { 
      value: "223+", 
      label: "Créateurs protégés",
      icon: Shield,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    { 
      value: "15k+", 
      label: "Contenus supprimés",
      icon: CheckCircle,
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    { 
      value: "<24h", 
      label: "Délai moyen de retrait",
      icon: TrendingUp,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    { 
      value: "99.2%", 
      label: "Taux de réussite",
      icon: Award,
      gradient: "from-red-500/20 to-orange-500/20"
    },
    { 
      value: "500+", 
      label: "Plateformes scannées",
      icon: Lock,
      gradient: "from-indigo-500/20 to-violet-500/20"
    },
  ];

  return (
    <section id="trust" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-8">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span className="text-sm text-zinc-400 font-medium">Pourquoi nous faire confiance ?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Les résultats<br />
            <span className="gradient-text">parlent d'eux-mêmes.</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Chaque scan, chaque retrait, chaque victoire est comptée.<br />
            Voici ce qu'on a accompli jusqu'ici :
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-8 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-zinc-800/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-5xl font-bold font-display text-primary mb-3">
                    {metric.value}
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {metric.label}
                  </p>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            );
          })}
        </div>

        {/* Bottom Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Google Badge */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-8 border border-zinc-800/50 hover:border-primary/50 transition-all duration-500">
            <div className="relative z-10">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Agence reconnue par Google
                  </h3>
                  <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-xl shadow-2xl">
                    <div className="w-10 h-10 relative flex-shrink-0">
                      <svg viewBox="0 0 48 48" className="w-full h-full">
                        <circle cx="24" cy="24" r="20" fill="none" stroke="#4285F4" strokeWidth="4"/>
                        <path d="M24 4 A20 20 0 0 1 44 24" fill="none" stroke="#EA4335" strokeWidth="4"/>
                        <path d="M44 24 A20 20 0 0 1 24 44" fill="none" stroke="#FBBC05" strokeWidth="4"/>
                        <path d="M24 44 A20 20 0 0 1 4 24" fill="none" stroke="#34A853" strokeWidth="4"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 text-sm">Google's Trusted</div>
                      <div className="font-bold text-gray-900 text-sm">Copyright Removal Program</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
          </div>

          {/* Guarantee */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-8 border border-zinc-800/50 hover:border-green-500/50 transition-all duration-500">
            <div className="relative z-10">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="h-8 w-8 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Garantie & confidentialité
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Protection <span className="text-foreground font-semibold">100% confidentielle</span>. Aucune info partagée. Chaque demande est traitée manuellement, sans bots, dans un environnement sécurisé.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <div className="px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                      ✓ RGPD Compliant
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                      ✓ ISO 27001
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                      ✓ Audité
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
