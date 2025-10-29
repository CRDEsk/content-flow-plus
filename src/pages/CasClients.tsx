import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CasClients = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const cases = [
    {
      id: 1,
      title: "Tout a disparu. Même les pires. En moins d'un mois.",
      subtitle: "P★H★★★S OUT",
      badge: {
        line1: "TOUT A",
        highlight: "DISPARU",
        line2: "MÊME LES",
        highlight2: "PIRES",
        line3: "EN MOINS D'UN",
        highlight3: "MOIS"
      },
      description: "Elle ne voulait pas un service. Elle voulait une solution. Une sortie. Une paix qu'on ne trouve rarement dans ce genre d'affaires. Elle voulait que tout disparaisse rapidement, discrètement, et sans bruit.",
      gradient: "from-pink-500/30 via-purple-500/20 to-pink-500/30",
      author: "Content Removal Desk"
    },
    {
      id: 2,
      title: "Dossier confidentiel — Leakimedia supprimé. Dossier clos.",
      subtitle: "LEAKIMEDIA",
      badge: {
        line1: "LEAKIMEDIA",
        highlight: "SUPPRIMÉ",
        line2: "POUR DE VRAI",
        highlight2: "CONFIDENTIEL"
      },
      description: "Un dossier sensible sur une des plateformes les plus résistantes. Mission accomplie avec discrétion totale. Chaque lien éradiqué, chaque trace effacée. Le dossier est maintenant fermé.",
      gradient: "from-purple-500/30 via-blue-500/20 to-purple-500/30",
      author: "Content Removal Desk"
    },
    {
      id: 3,
      title: "Dossier Ava21 / Petitabricot",
      subtitle: "AVA21",
      badge: {
        line1: "AVA21 :",
        highlight: "TOUS SES LEAKS",
        line2: "SUPPRIMÉS",
        line3: "EN 1 MOIS"
      },
      description: "Une intervention complète pour effacer toute trace de fuites. Opération menée avec succès en un temps record. Protection totale restaurée.",
      gradient: "from-orange-500/30 via-red-500/20 to-orange-500/30",
      author: "Content Removal Desk"
    },
    {
      id: 4,
      title: "On a fait tomber Born to be f*ck",
      subtitle: "BORNTOBEF*CK",
      badge: {
        line1: "ON A FAIT",
        highlight: "TOMBER",
        line2: "BORN TO BE",
        highlight2: "F*CK"
      },
      description: "Site majeur de piratage neutralisé. Une victoire stratégique qui a permis de protéger des centaines de créateurs.",
      gradient: "from-red-500/30 via-orange-500/20 to-red-500/30",
      author: "Content Removal Desk"
    },
    {
      id: 5,
      title: "Talu_lax : On surveille toutes les Cam Girls. Elle l'a vécu en pire. Et on a tout inversé.",
      subtitle: "TALU_LAX",
      badge: {
        line1: "TALU_LAX :",
        highlight: "ON SURVEILLE TOUTES",
        line2: "LES CAM GIRLS",
        line3: "ELLE L'A VÉCU EN PIRE.",
        line4: "ET ON A TOUT",
        highlight2: "INVERSÉ"
      },
      description: "Surveillance proactive et intervention rapide pour une créatrice ciblée. Situation renversée avec succès.",
      gradient: "from-yellow-500/30 via-green-500/20 to-yellow-500/30",
      author: "Content Removal Desk"
    }
  ];

  return (
    <div className="min-h-screen bg-black antialiased">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-left mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6">
              <span className="text-zinc-500 block mb-2">Interventions</span>
              <span className="text-foreground block">Perspectives</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Case */}
      {selectedCase !== null && (
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl border border-zinc-800/50">
              <div className={`absolute inset-0 bg-gradient-to-br ${cases[selectedCase].gradient} opacity-50`} />
              
              <div className="relative z-10 p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Image placeholder */}
                  <div className="relative aspect-[4/3] rounded-2xl bg-zinc-800/50 border border-zinc-700/50 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        {Object.entries(cases[selectedCase].badge).map(([key, value], idx) => (
                          <div key={idx}>
                            {key.includes('highlight') ? (
                              <div className="text-3xl sm:text-4xl font-black text-primary">
                                {value}
                              </div>
                            ) : (
                              <div className="text-xl sm:text-2xl font-bold text-foreground">
                                {value}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <div className="w-6 h-6 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                        <span className="text-[10px] text-primary">®</span>
                      </div>
                      <span>{cases[selectedCase].author}</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                      {cases[selectedCase].title}
                    </h2>

                    <p className="text-lg text-zinc-400 leading-relaxed">
                      {cases[selectedCase].description}
                    </p>

                    <Link 
                      to={`/cas-clients/${cases[selectedCase].id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-black font-semibold hover:bg-primary/90 transition-all duration-300 group"
                    >
                      Lire
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cases Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <button
                key={caseItem.id}
                onClick={() => setSelectedCase(index)}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/70 to-zinc-950/70 backdrop-blur-xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-500 text-left"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Image placeholder */}
                <div className="relative aspect-[4/3] bg-zinc-800/50 border-b border-zinc-800/50">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-center space-y-2">
                      {Object.entries(caseItem.badge).map(([key, value], idx) => (
                        <div key={idx}>
                          {key.includes('highlight') ? (
                            <div className="text-xl sm:text-2xl font-black text-primary">
                              {value}
                            </div>
                          ) : (
                            <div className="text-sm sm:text-base font-bold text-foreground">
                              {value}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground leading-tight line-clamp-2">
                    {caseItem.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <div className="w-5 h-5 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                      <span className="text-[10px] text-primary">®</span>
                    </div>
                    <span>{caseItem.author}</span>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasClients;