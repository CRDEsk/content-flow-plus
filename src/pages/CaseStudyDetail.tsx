import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Shield, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import caseStudy1 from "@/assets/case-study-1.png";
import caseStudy2 from "@/assets/case-study-2.png";
import caseStudy3 from "@/assets/case-study-3.png";
import caseStudy4 from "@/assets/case-study-4.png";
import caseStudy5 from "@/assets/case-study-5.png";

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Case studies data - same as CasClients page
  const allCases = [
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
      author: "Content Removal Desk",
      clientName: "LisaAmelK94",
      fullContent: true
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

  const caseStudy = allCases.find(c => c.id === Number(id));
  const currentIndex = allCases.findIndex(c => c.id === Number(id));
  const nextCase = currentIndex < allCases.length - 1 ? allCases[currentIndex + 1] : null;
  const prevCase = currentIndex > 0 ? allCases[currentIndex - 1] : null;

  useEffect(() => {
    if (caseStudy) {
      document.title = `${caseStudy.title} | ContentRemovalDesk - Cas Client`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", caseStudy.description);
      }
    }
  }, [caseStudy]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-black text-white antialiased">
        <Header />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Cas non trouvé</h1>
          <Link to="/cas-clients" className="text-primary hover:underline">
            Retour aux cas clients
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black antialiased">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <Link 
            to="/cas-clients"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Retour aux cas clients</span>
          </Link>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl border border-zinc-800/50">
            <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient} opacity-50`} />
            
            <div className="relative z-10 p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Case Study Image */}
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-700/50">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <div className="w-6 h-6 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                      <span className="text-[10px] text-primary">®</span>
                    </div>
                    <span>{caseStudy.author}</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    {caseStudy.title}
                  </h1>

                  <p className="text-lg text-zinc-400 leading-relaxed">
                    {caseStudy.description}
                  </p>

                  {/* Stats */}
                  {caseStudy?.id === 4 && (
                    <div className="grid grid-cols-2 gap-4 pt-6">
                      <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800/50">
                        <div className="text-2xl font-bold text-primary mb-1">87%</div>
                        <div className="text-xs text-zinc-400">Liens neutralisés</div>
                      </div>
                      <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800/50">
                        <div className="text-2xl font-bold text-primary mb-1">19</div>
                        <div className="text-xs text-zinc-400">Jours</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Content for Lisa Malek Case */}
      {caseStudy?.id === 4 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Lorsque <span className="text-primary font-semibold">LisaAmelK94</span> nous a contactés en mai 2025, sa situation semblait hors de contrôle. Plus de <span className="text-primary font-semibold">70 liens</span> étaient déjà actifs, certains indexés par Google, et une partie de ses contenus circulait sur des sites classés parmi les plus résistants du paysage pirate. Au centre de cette fuite massive, un nom revenait avec insistance : <span className="text-primary font-semibold">borntobefuck.com</span>.
              </p>
              <div className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 border-l-4 border-primary/50 rounded-r-xl p-6">
                <p className="text-zinc-300 italic leading-relaxed">
                  Dans l'esprit de la communauté, ce site était réputé intouchable, hors d'atteinte des procédures habituelles.
                </p>
              </div>
            </motion.div>

            {/* The Escalation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">L'escalade juridique</h2>
              </div>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Nos premières démarches classiques – notifications DMCA, contacts directs – n'ont rencontré que le silence. Là où d'autres agences s'arrêtent, <span className="text-primary font-semibold">Content Removal Desk</span> a enclenché une mécanique différente : l'escalade. Nous avons construit un dossier juridique complet démontrant les manquements du registrar responsable et l'avons porté directement devant <span className="text-primary font-semibold">ICANN Contractual Compliance</span>.
              </p>
            </motion.div>

            {/* Multi-Front Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Action sur plusieurs fronts</h2>
              </div>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Pendant que cette procédure suivait son cours, nos équipes ont continué à frapper sur plusieurs fronts. Chaque lien a été cartographié, priorisé selon son impact SEO et la toxicité de la plateforme. Certains hébergeurs ont coopéré après une seule mise en demeure. D'autres ont nécessité des pressions supplémentaires : contact direct aux administrateurs via WHOIS, remontées aux fournisseurs d'infrastructure, signalements techniques aux intermédiaires. Le travail était minutieux, souvent répétitif, mais toujours traçable.
              </p>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl rounded-3xl border border-primary/20 p-8 lg:p-12 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-50" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/20 border border-primary/40 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">Résultats en 19 jours</h2>
                  </div>
                  <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                    En dix-neuf jours seulement, plus de <span className="text-primary font-bold text-xl">87%</span> des liens recensés ont été neutralisés. Et surtout, le <span className="text-primary font-semibold">7 août 2025</span>, ICANN confirmait la suspension du domaine <span className="text-primary font-semibold">borntobefuck.com</span> par son registrar. Le site n'a pu revenir en ligne qu'après avoir retiré l'intégralité des contenus liés à notre cliente.
                  </p>
                  <div className="bg-black/50 rounded-xl p-6 border border-primary/20">
                    <p className="text-zinc-200 font-semibold text-lg leading-relaxed">
                      Un symbole fort : pour se maintenir actif, même un acteur aussi réputé "intouchable" a dû céder face à notre action.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CRD Difference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">La différence CRD</h2>
              </div>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Ce dossier est un exemple clair de la différence entre CRD et les autres acteurs du marché. Là où beaucoup se contentent d'envoyer des DMCA standardisés et d'espérer un retrait, nous combinons <span className="text-primary font-semibold">stratégie juridique</span>, <span className="text-primary font-semibold">persistance opérationnelle</span> et <span className="text-primary font-semibold">connaissance fine des circuits d'escalade</span>. L'efficacité n'est pas qu'une question de rapidité, c'est une question de système : savoir jusqu'où pousser, qui alerter, quel levier utiliser, et quand.
              </p>
            </motion.div>

            {/* Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Impact à long terme</h2>
              </div>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Aujourd'hui, <span className="text-primary font-semibold">Lisa</span> ne fait plus face à un océan de pages illégales. Ses principaux points d'exposition ont été neutralisés, une veille active continue de scanner son pseudo chaque semaine, et toute nouvelle fuite reçoit une réponse sous vingt-quatre heures. Là où elle envisageait d'abandonner sa carrière, elle a retrouvé une <span className="text-primary font-semibold">stabilité numérique</span>.
              </p>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl rounded-3xl border border-zinc-800/50 p-8 lg:p-12">
                <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                  Ce dossier démontre une réalité simple : <span className="text-primary font-semibold">l'impossible peut être accompli</span>, à condition d'avoir les bons leviers et la bonne méthode. Contrairement aux services improvisés ou aux freelances qui s'arrêtent au premier refus, Content Removal Desk agit de manière structurée, légale et documentée, jusqu'au bout du processus. Nous ne promettons pas des miracles, nous les produisons avec méthode.
                </p>
                <div className="pt-6 border-t border-zinc-800/50">
                  <p className="text-lg text-zinc-300 leading-relaxed">
                    Notre engagement reste le même pour chaque cliente : <span className="text-primary font-semibold">des prix justes</span>, <span className="text-primary font-semibold">des actions traçables</span>, et <span className="text-primary font-semibold">des résultats concrets</span>. Les sites tombent, les liens disparaissent, et nos créatrices retrouvent la maîtrise de leur image. Nous ne travaillons pas seulement pour nos clientes, nous travaillons <span className="text-primary font-semibold">avec elles et pour elles, dans la durée</span>.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-zinc-900/90 to-primary/10 backdrop-blur-xl border border-primary/20 p-8 lg:p-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50" />
              <div className="relative z-10 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Prête à savoir si ton contenu est leaké ?
                </h3>
                <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                  Rejoins les centaines de créatrices qui nous font confiance pour protéger leur image et leur contenu.
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-bold rounded-full px-8 shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="https://scan.contentremovaldesk.com/scan">
                    Vérifier maintenant
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Navigation to other cases */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-4">
            {prevCase ? (
              <Link
                to={`/cas-clients/${prevCase.id}`}
                className="group flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900/50 border border-zinc-800/50 hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-xs text-zinc-500">Précédent</div>
                  <div className="text-sm font-medium line-clamp-1">{prevCase.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {nextCase ? (
              <Link
                to={`/cas-clients/${nextCase.id}`}
                className="group flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900/50 border border-zinc-800/50 hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300"
              >
                <div className="text-right">
                  <div className="text-xs text-zinc-500">Suivant</div>
                  <div className="text-sm font-medium line-clamp-1">{nextCase.title}</div>
                </div>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;

