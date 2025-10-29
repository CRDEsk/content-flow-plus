import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Lock, Zap } from "lucide-react";

const CaseStudiesSection = () => {
  const cases = [
    {
      title: "Tout a disparu. Même les pires. En moins d'un mois.",
      badge: "P★H★★★S OUT",
      detail: "TOUT A DISPARU.\nMÊME LES PIRES.\nEN MOINS D'UN MOIS.",
      stats: { links: "847", time: "28 jours", rate: "100%" },
      gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20"
    },
    {
      title: "Dossier confidentiel — Leakimedia supprimé. Dossier clos.",
      badge: "LEAKIMEDIA",
      detail: "LEAKIMEDIA\nSUPPRIMÉ.\nPOUR DE VRAI.",
      stats: { links: "243", time: "12 jours", rate: "100%" },
      gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20"
    },
    {
      title: "Dossier Ava21 / Petitabricot",
      badge: "AVA21",
      detail: "AVA21 :\nTOUS SES LEAKS\nSUPPRIMÉS\nEN 1 MOIS",
      stats: { links: "534", time: "30 jours", rate: "98%" },
      gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20"
    }
  ];

  return (
    <section id="cases" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-6">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-sm text-zinc-400 font-medium">Études de cas</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-display font-bold mb-2">
              <span className="text-zinc-500">Histoires</span>
            </h2>
            <h3 className="text-5xl sm:text-6xl font-display font-bold gradient-text">
              vraies
            </h3>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-black font-semibold rounded-full px-8 py-6 text-base group shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
            Explorer nos interventions
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/70 to-zinc-950/70 backdrop-blur-xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-500"
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Corner glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
              
              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 mb-6 backdrop-blur-sm">
                  <Lock className="h-3 w-3 text-primary" />
                  <span className="text-xs font-medium text-primary tracking-wider uppercase">
                    {caseItem.badge}
                  </span>
                </div>

                {/* Title */}
                <p className="text-2xl font-bold text-foreground leading-tight mb-8 whitespace-pre-line min-h-[140px]">
                  {caseItem.detail.split('\n').map((line, i) => (
                    <span key={i} className="block">
                      {line.includes('DISPARU') || line.includes('SUPPRIMÉ') || line.includes('SUPPRIMÉS') ? (
                        <span className="gradient-text">{line}</span>
                      ) : (
                        line
                      )}
                    </span>
                  ))}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 rounded-xl bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary mb-1">{caseItem.stats.links}</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Liens</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary mb-1">{caseItem.stats.time}</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Durée</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary mb-1">{caseItem.stats.rate}</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Succès</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="relative z-10 px-8 pb-8">
                <div className="pt-6 border-t border-zinc-800/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <div className="w-5 h-5 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                        <span className="text-[10px] text-primary">®</span>
                      </div>
                      <span className="font-medium">Content Removal Desk</span>
                    </div>
                    <Zap className="h-4 w-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
