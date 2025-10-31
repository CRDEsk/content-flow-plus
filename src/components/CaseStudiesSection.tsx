import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudiesSection = () => {
  const cases = [
    {
      title: "Tout a disparu. Même les pires. En moins d'un mois.",
      image: "/src/assets/case-study-1.png",
      gradient: "from-pink-500/30 via-purple-500/20 to-pink-500/30",
      author: "Content Removal Desk"
    },
    {
      title: "Dossier confidentiel — Leakimedia supprimé. Dossier clos.",
      image: "/src/assets/case-study-2.png",
      gradient: "from-purple-500/30 via-blue-500/20 to-purple-500/30",
      author: "Content Removal Desk"
    },
    {
      title: "Dossier Ava21 / Petitabricot",
      image: "/src/assets/case-study-3.png",
      gradient: "from-orange-500/30 via-red-500/20 to-orange-500/30",
      author: "Content Removal Desk"
    }
  ];

  return (
    <section id="cases" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
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
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold">
              <span className="text-zinc-500 block mb-2">Histoires</span>
              <span className="text-foreground block">vraies</span>
            </h2>
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-black font-semibold rounded-full px-8 py-6 text-base group shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link to="/cas-clients">
              Explorer nos interventions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <Link 
              key={index}
              to="/cas-clients"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/70 to-zinc-950/70 backdrop-blur-xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-500 block"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
              
              {/* Image */}
              <div className="relative aspect-[4/3] bg-zinc-800/50 border-b border-zinc-800/50 overflow-hidden">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-foreground leading-tight mb-4">
                  {caseItem.title}
                </h3>

                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <div className="w-5 h-5 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                    <span className="text-[10px] text-primary">®</span>
                  </div>
                  <span className="font-medium">{caseItem.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
