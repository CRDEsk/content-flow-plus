import { DollarSign, Shield, Crown, Lock, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HelpSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Récupère tes revenus",
      description: "Le piratage te fait perdre de l'argent. On te permet de récupérer ce qui t'appartient.",
      color: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-500"
    },
    {
      icon: Shield,
      title: "Sérénité garantie",
      description: "Les fuites de contenu sont stressantes. On gère pour que tu restes concentré sur ta création.",
      color: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500"
    },
    {
      icon: Crown,
      title: "Protège ta réputation",
      description: "On défend ton image et ton nom contre les imposteurs et le contenu volé.",
      color: "from-purple-500/20 to-pink-500/20",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-500"
    },
    {
      icon: Lock,
      title: "Tu décides, pas eux",
      description: "On t'aide à contrôler l'usage de ton contenu et à faire respecter ton consentement.",
      color: "from-red-500/20 to-orange-500/20",
      iconBg: "bg-red-500/10",
      iconColor: "text-red-500"
    }
  ];

  return (
    <section id="help" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-zinc-400 font-medium">On peut t'aider</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
            On protège ton contenu,<br />
            ton image, et ta <span className="gradient-text">tranquillité.</span>
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed mb-8">
            Chaque jour, on te rend ce qui t'appartient.
          </p>
          <Button 
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-black font-semibold rounded-full px-8 py-6 shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Commencer maintenant
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-8 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${benefit.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300`}>
                    <Icon className={`h-8 w-8 ${benefit.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
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

        {/* Bottom CTA Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 backdrop-blur-xl p-8 border border-primary/20 relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Prêt à protéger ton contenu ?
              </h3>
              <p className="text-zinc-400">
                Rejoins les 223+ créateurs qui nous font confiance
              </p>
            </div>
            <Button 
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-black font-semibold rounded-full px-8 py-6 shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Scan gratuit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
