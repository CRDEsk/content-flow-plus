import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CaseStudiesSection = () => {
  const cases = [
    {
      title: "Tout a disparu. Même les pires. En moins d'un mois.",
      badge: "P★H★★★S OUT",
      detail: "TOUT A DISPARU.\nMÊME LES PIRES.\nEN MOINS D'UN MOIS."
    },
    {
      title: "Dossier confidentiel — Leakimedia supprimé. Dossier clos.",
      badge: "LEAKIMEDIA",
      detail: "LEAKIMEDIA\nSUPPRIMÉ.\nPOUR DE VRAI."
    },
    {
      title: "Dossier Ava21 / Petitabricot",
      badge: "AVA21",
      detail: "AVA21 :\nTOUS SES LEAKS\nSUPPRIMÉS\nEN 1 MOIS"
    }
  ];

  return (
    <section id="cases" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-muted-foreground mb-2">
              Histoires
            </h2>
            <h3 className="text-4xl sm:text-5xl font-bold text-foreground">
              vraies
            </h3>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-black font-medium rounded-full px-8 py-6 group">
            Explorer nos interventions
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cases.map((caseItem, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950 border border-zinc-800 p-8 hover:border-primary/50 transition-all duration-500"
            >
              {/* Mock image background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-transparent opacity-50"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-xs font-medium text-primary mb-4 tracking-wider">
                  {caseItem.badge}
                </div>
                <p className="text-lg font-bold text-foreground leading-tight mb-6 whitespace-pre-line">
                  {caseItem.detail.split('\n').map((line, i) => (
                    <span key={i}>
                      {line.includes('DISPARU') || line.includes('SUPPRIMÉ') || line.includes('SUPPRIMÉS') ? (
                        <span className="text-primary">{line}</span>
                      ) : (
                        line
                      )}
                      {i < caseItem.detail.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>

              {/* Footer */}
              <div className="relative z-10 mt-8 pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-4 h-4 rounded-full bg-zinc-800 flex items-center justify-center">
                    <span className="text-[8px]">®</span>
                  </div>
                  <span>Content Removal Desk</span>
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
