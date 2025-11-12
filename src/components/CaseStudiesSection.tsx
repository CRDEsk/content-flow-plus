import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import caseStudy1 from "@/assets/case-study-1.png";
import caseStudy2 from "@/assets/case-study-2.png";
import caseStudy3 from "@/assets/case-study-3.png";

const CaseStudiesSection = () => {
  const cases = [
    {
      title: "Tout a disparu. Même les pires. En moins d'un mois.",
      image: caseStudy1,
      gradient: "from-pink-500/30 via-purple-500/20 to-pink-500/30",
      author: "Content Removal Desk"
    },
    {
      title: "Dossier confidentiel — Leakimedia supprimé. Dossier clos.",
      image: caseStudy2,
      gradient: "from-purple-500/30 via-blue-500/20 to-purple-500/30",
      author: "Content Removal Desk"
    },
    {
      title: "Dossier Ava21 / Petitabricot",
      image: caseStudy3,
      gradient: "from-orange-500/30 via-red-500/20 to-orange-500/30",
      author: "Content Removal Desk"
    }
  ];

  return (
    <section id="cases" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
              <span className="text-zinc-500 block mb-1 sm:mb-2">Histoires</span>
              <span className="text-foreground block">vraies</span>
            </h2>
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-black font-semibold rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 text-sm sm:text-base group shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            asChild
          >
            <Link to="/cas-clients">
              Explorer nos interventions
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Cases Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cases.map((caseItem, index) => (
            <Link 
              key={index}
              to="/cas-clients"
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-zinc-900/70 to-zinc-950/70 backdrop-blur-xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-500 block"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
              
              {/* Image */}
              <div className="relative aspect-video bg-zinc-800/50 border-b border-zinc-800/50 overflow-hidden">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-center gap-2 text-[10px] sm:text-xs text-zinc-500">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center flex-shrink-0">
                    <span className="text-[8px] sm:text-[10px] text-primary">®</span>
                  </div>
                  <span className="font-medium truncate">{caseItem.author}</span>
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
