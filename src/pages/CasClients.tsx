import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import caseStudy1 from "@/assets/case-study-1.png";
import caseStudy2 from "@/assets/case-study-2.png";
import caseStudy3 from "@/assets/case-study-3.png";
import caseStudy4 from "@/assets/case-study-4.png";
import caseStudy5 from "@/assets/case-study-5.png";

const CasClients = () => {
  useEffect(() => {
    // SEO optimization for Case Studies page
    document.title = "Cas Clients | ContentRemovalDesk - Témoignages & Succès de Protection";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Découvrez nos cas clients et témoignages réels. Suppressions réussies, protection juridique, et actions efficaces contre les fuites de contenu. 99.2% de réussite.");
    }
  }, []);

  const cases = [
    {
      id: 1,
      title: "Tout a disparu. Même les pires. En moins d'un mois.",
      subtitle: "P★H★★★S OUT",
      image: caseStudy1,
      description: "Elle ne voulait pas un service. Elle voulait une solution. Une sortie. Une paix qu'on ne trouve rarement dans ce genre d'affaires. Elle voulait que tout disparaisse rapidement, discrètement, et sans bruit.",
      gradient: "from-pink-500/30 via-purple-500/20 to-pink-500/30",
      author: "Content Removal Desk"
    },
    {
      id: 2,
      title: "Dossier confidentiel — Leakimedia supprimé. Dossier clos.",
      subtitle: "LEAKIMEDIA",
      image: caseStudy2,
      description: "Un dossier sensible sur une des plateformes les plus résistantes. Mission accomplie avec discrétion totale. Chaque lien éradiqué, chaque trace effacée. Le dossier est maintenant fermé.",
      gradient: "from-purple-500/30 via-blue-500/20 to-purple-500/30",
      author: "Content Removal Desk"
    },
    {
      id: 3,
      title: "Dossier Ava21 / Petitabricot",
      subtitle: "AVA21",
      image: caseStudy3,
      description: "Une intervention complète pour effacer toute trace de fuites. Opération menée avec succès en un temps record. Protection totale restaurée.",
      gradient: "from-orange-500/30 via-red-500/20 to-orange-500/30",
      author: "Content Removal Desk"
    },
    {
      id: 4,
      title: "On a fait tomber Born to be f*ck",
      subtitle: "BORNTOBEF*CK",
      image: caseStudy4,
      description: "Site majeur de piratage neutralisé. Une victoire stratégique qui a permis de protéger des centaines de créateurs.",
      gradient: "from-red-500/30 via-orange-500/20 to-red-500/30",
      author: "Content Removal Desk"
    },
    {
      id: 5,
      title: "talullax : On surveille toutes les Cam Girls. Elle l'a vécu en pire. Et on a tout inversé.",
      subtitle: "talullax",
      image: caseStudy5,
      description: "Surveillance proactive et intervention rapide pour une créatrice ciblée. Situation renversée avec succès.",
      gradient: "from-yellow-500/30 via-green-500/20 to-yellow-500/30",
      author: "Content Removal Desk"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white antialiased">
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

      {/* Featured Case - Headline Case Study */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl border border-zinc-800/50">
            <div className={`absolute inset-0 bg-gradient-to-br ${cases[0].gradient} opacity-50`} />
            
            <div className="relative z-10 p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Case Study Image */}
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-700/50">
                  <img 
                    src={cases[0].image} 
                    alt={cases[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <div className="w-6 h-6 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                      <span className="text-[10px] text-primary">®</span>
                    </div>
                    <span>{cases[0].author}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    {cases[0].title}
                  </h2>

                  <p className="text-lg text-zinc-400 leading-relaxed">
                    {cases[0].description}
                  </p>

                  <Link 
                    to={`/cas-clients/${cases[0].id}`}
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

      {/* Cases Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.filter((caseItem) => caseItem.id !== cases[0].id).map((caseItem) => (
              <Link
                key={caseItem.id}
                to={`/cas-clients/${caseItem.id}`}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/70 to-zinc-950/70 backdrop-blur-xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-500 block"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Case Study Image */}
                <div className="relative aspect-video overflow-hidden border-b border-zinc-800/50">
                  <img 
                    src={caseItem.image} 
                    alt={caseItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasClients;