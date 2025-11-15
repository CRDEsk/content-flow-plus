import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Radar, Shield, Sparkles, Target, TrendingUp, Zap } from "lucide-react";
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
      title: "Dossier confidentiel : Leakimedia supprimé. Dossier clos.",
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

  const avaHighlights = [
    { value: "70+", label: "liens pirates cartographiés" },
    { value: "75%", label: "suppression confirmée" },
    { value: "3 mois", label: "durée de mission" },
  ];

  const avaOperationFronts = [
    {
      title: "Cartographie et stabilisation",
      subtitle: "Première offensive",
      icon: Target,
      points: ["Cartographie des 70+ liens priorisés", "DMCA ciblés dans les 24 h", "Coupures immédiates sur Gofile, Nudostar, Nudogram, Faponic"],
    },
    {
      title: "Escalade juridique",
      subtitle: "Forcer les résistants",
      icon: Shield,
      points: ["Escalade sur Leakimedia, Bunkr, Wildskirts", "Mises en demeure aux registrars et hébergeurs", "Pressions WHOIS et signaux techniques ciblés"],
    },
    {
      title: "Désindexation et purge",
      subtitle: "Effacer les traces",
      icon: Radar,
      points: ["Désindexation Google Images", "Purge Fapello, Leakomax, TheFappeningbook, Rentry, Share-Nude", "Veille renforcée sur les miroirs restants"],
    },
  ];

  const avaTimeline = [
    {
      phase: "Mai 2025",
      title: "Cartographie complète",
      description: "Recensement de 70+ liens et priorisation des plateformes les plus résistantes.",
    },
    {
      phase: "Juin 2025",
      title: "Premières suppressions",
      description: "DMCA ciblés, contacts directs, coupures confirmées sur Gofile, Nudostar, Nudogram, Faponic.",
    },
    {
      phase: "Juillet 2025",
      title: "Escalade contrôlée",
      description: "Mises en demeure, pressions WHOIS, signalements techniques, désindexation Google Images lancée.",
    },
    {
      phase: "Août 2025",
      title: "Basculement final",
      description: "75% des liens neutralisés, index Google nettoyé, surveillance active sur Leakimedia et Bunkr.",
    },
  ];

  const avaResultPoints = [
    "75% des liens identifiés supprimés ou neutralisés",
    "Index Google nettoyé des images principales",
    "Sites majeurs Nudostar, Faponic, Leakomax, Fapello, Gofile vidés",
    "Surveillance active maintenue sur Leakimedia et Bunkr",
  ];

  const lisaHighlights = [
    { value: "70+", label: "liens pirates identifiés" },
    { value: "87%", label: "suppression confirmée" },
    { value: "19 jours", label: "durée de mission" },
  ];

  const lisaOperationFronts = [
    {
      title: "Escalade juridique",
      subtitle: "Dossier complet",
      icon: Shield,
      points: ["Dossier ICANN préparé en 48 h", "Manquements registrar démontrés", "Suspension demandée"],
    },
    {
      title: "Cartographie totale",
      subtitle: "Action terrain",
      icon: Target,
      points: ["Cartographie SEO et toxicité", "Contacts directs et WHOIS", "Relais vers fournisseurs d'infrastructure"],
    },
    {
      title: "Surveillance serrée",
      subtitle: "Reporting continu",
      icon: Radar,
      points: ["Tableau de suivi mis à jour", "Vérifications quotidiennes", "Preuves horodatées"],
    },
  ];

  const lisaTimeline = [
    {
      phase: "Mai 2025",
      title: "Alerte maximale",
      description: "70+ liens actifs, marge SEO critique, cible principale borntobefuck.com.",
    },
    {
      phase: "Juin 2025",
      title: "Escalade ICANN",
      description: "Dossier juridique déposé, conformité ICANN enclenchée, preuves rassemblées.",
    },
    {
      phase: "Juillet 2025",
      title: "Pression multicanal",
      description: "WHOIS, hébergeurs, fournisseurs : chaque lien traité et relancé.",
    },
    {
      phase: "Août 2025",
      title: "Suspension confirmée",
      description: "87% des liens supprimés, domaine borntobefuck.com suspendu.",
    },
  ];

  const lisaResultPoints = [
    "87% des liens recensés neutralisés en 19 jours",
    "Suspension officielle de borntobefuck.com",
    "Suivi hebdomadaire maintenu sur les miroirs restants",
    "Preuves juridiques et techniques classées dans le dossier client",
  ];

  const lisaGallery = [
    {
      label: "Recherche initiale",
      title: "Index complet",
      description: "Résultats publics montrant le profil LisaAmelK94 sur borntobefuck.com.",
      image: "/images/borntobefuck-search.avif",
    },
    {
      label: "Escalade ouverte",
      title: "Case 01429212",
      description: "Accusé de réception ICANN confirmant la prise en charge du dossier.",
      image: "/images/icann-case-created.avif",
    },
    {
      label: "Preuves juridiques",
      title: "Plainte détaillée",
      description: "Notifications complètes envoyées au registrar et actées par ICANN.",
      image: "/images/icann-complaint-details.avif",
    },
    {
      label: "Tableau de bord",
      title: "Liens neutralisés",
      description: "Suivi Airtable indiquant chaque lien supprimé.",
      image: "/images/lisa-dashboard.avif",
    },
    {
      label: "Décision finale",
      title: "Case closed",
      description: "ICANN confirme la suspension du domaine borntobefuck.com.",
      image: "/images/icann-case-closed.avif",
    },
    {
      label: "Après",
      title: "Page indisponible",
      description: "Capture montrant le message Page not found sur borntobefuck.com.",
      image: "/images/borntobefuck-404.avif",
    },
  ];

  const lisaCta = {
    title: "Prête à savoir si ton contenu est leaké ?",
    subtitle: "Rejoins les centaines de créatrices qui nous font confiance pour protéger leur image et leur contenu.",
    buttonLabel: "Vérifier maintenant",
    link: "https://scan.contentremovaldesk.com/scan",
  };

  const talullaxHighlights = [
    { value: "600+", label: "vidéos volées identifiées" },
    { value: "300+", label: "liens actifs neutralisés" },
    { value: "30 jours", label: "durée de mission" },
  ];

  const talullaxOperationFronts = [
    {
      title: "Contenir l'explosion",
      subtitle: "Phase 1",
      icon: Target,
      points: ["Signalements ciblés en 48 h", "Suppressions Gofile, Faponic, Nudostar, Erome", "140+ liens désactivés"],
    },
    {
      title: "Plateformes majeures",
      subtitle: "Focus ciblé",
      icon: Shield,
      points: ["Tanaleaks.com : page catégorie supprimée", "Camlib.com : profil désactivé", "Escalades juridiques progressives"],
    },
    {
      title: "Nettoyage des résidus",
      subtitle: "Phase 2",
      icon: Radar,
      points: ["Désindexation Google Search et Images", "75% des résultats retirés des SERPs", "Pression légale sur sites résistants"],
    },
  ];

  const talullaxTimeline = [
    {
      phase: "Juillet 2025",
      title: "Alerte maximale",
      description: "600+ vidéos volées, 300+ liens actifs, catégories automatisées à son nom.",
    },
    {
      phase: "Jours 1-2",
      title: "Contenir l'explosion",
      description: "140+ liens désactivés, surface d'exposition réduite de 40%.",
    },
    {
      phase: "Semaines 2-3",
      title: "Plateformes majeures",
      description: "Tanaleaks.com et Camlib.com neutralisés, profils supprimés.",
    },
    {
      phase: "Semaine 4",
      title: "Nettoyage final",
      description: "75% des résultats Google retirés, base active réduite à moins de 10 liens.",
    },
  ];

  const talullaxResultPoints = [
    "600+ fichiers visibles réduits à moins de 10 liens résiduels",
    "Tanaleaks.com : page catégorie entière supprimée",
    "Camlib.com : profil Talullax désactivé et déréférencé",
    "75% des résultats Google retirés des SERPs",
    "Veille active maintenue sur les sites résistants",
  ];

  const talullaxCta = {
    title: "Prête à savoir si ton contenu est leaké ?",
    subtitle: "Rejoins les centaines de créatrices qui nous font confiance pour protéger leur image et leur contenu.",
    buttonLabel: "Vérifier maintenant",
    link: "https://scan.contentremovaldesk.com/scan",
  };

  const leakimediaCta = {
    title: "Prête à savoir si ton contenu est leaké ?",
    subtitle: "Rejoins les centaines de créatrices qui nous font confiance pour protéger leur image et leur contenu.",
    buttonLabel: "Vérifier maintenant",
    link: "https://scan.contentremovaldesk.com/scan",
  };

  const avaGallery = [
    {
      label: "Avant",
      title: "Profil Leakimedia accessible",
      description: "Page publique, tags explicites, trafic en hausse et indexation Google Images active.",
      image: "/images/leakimedia-before.avif",
    },
    {
      label: "Après",
      title: "Désindexation Google Images",
      description: "Résultats de recherche montrant le site Leakimedia désindexé.",
      image: "/images/google-images-cleared.avif",
    },
    {
      label: "Détail",
      title: "Capture d'écran du désindexation",
      description: "Vue détaillée de la page d'indexation Google.",
      image: "/images/google-images-detail.avif",
    },
    {
      label: "Purge Fapello",
      title: "Leakomax vidé",
      description: "Capture d'écran montrant le site Leakomax vide.",
      image: "/images/leakomax-cleared.avif",
    },
    {
      label: "Gofile",
      title: "Fapellovidé",
      description: "Capture d'écran montrant le site Fapello vide.",
      image: "/images/fapello-cleared.avif",
    },
    {
      label: "Rentry",
      title: "TheFappeningbook vidé",
      description: "Capture d'écran montrant le site TheFappeningbook vide.",
      image: "/images/thefappeningbook-cleared.avif",
    },
  ];

  const avaCta = {
    title: "Prête à savoir si ton contenu est leaké ?",
    subtitle: "Rejoins les centaines de créatrices qui nous font confiance pour protéger leur image et leur contenu.",
    buttonLabel: "Vérifier maintenant",
  };

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

      {/* Full Content for Purehumansoul Case */}
      {caseStudy?.id === 1 && (
        <section className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl space-y-8 sm:space-y-12 lg:space-y-20">
            {/* Video Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={mounted ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Témoignage</span>
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-black/70 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)] overflow-hidden">
                  <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-[9/16]">
                    <video
                      className="w-full h-full object-contain"
                      controls
                      playsInline
                      preload="auto"
                    >
                      <source src="/videos/purehumansoul-testimonial.mp4" type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Opening */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Mission</span>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-3 sm:mt-4">
                  Elle ne voulait pas un service. Elle voulait une solution. Une sortie. Une paix qu'on trouve rarement dans ce genre d'affaires. Elle voulait que tout disparaisse rapidement, discrètement, et sans bruit.
                </p>
              </div>
            </motion.div>

            {/* Context */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Situation initiale</span>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-3 sm:mt-4">
                  Lorsque nous avons été contactés, la demande était simple mais exigeante : faire disparaître toute trace numérique illégale, en priorité une page active et massive sur le site borntobefuck.com.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-4">
                  Ce site, connu pour héberger du contenu volé à grande échelle, classé par modèle, avec vidéos, miniatures et noms explicites, est l'un des plus résistants que nous avons rencontrés. La page dédiée à Purehumansoul recensait une dizaine de fichiers multimédias, dont des vidéos inédites issues de ses anciennes publications sur MYM et OnlyFans.
                </p>
              </div>
            </motion.div>

            {/* Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Plan d'intervention</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">72 heures pour établir la stratégie</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Dès les premières 72 heures, nous avons établi un plan d'intervention clair.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  La cible principale : borntobefuck.com, hébergé par AlexHost S.R.L (Moldavie), et enregistré chez PublicDomainRegistry. Deux entités connues pour leur résistance aux signalements classiques.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Mais nous ne nous sommes pas arrêtés là.
                </p>
              </div>
            </motion.div>

            {/* Multiple Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Plateformes multiples</span>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-3 sm:mt-4">
                  En parallèle, d'autres plateformes hébergeaient ses contenus : Gofile, Sxyprn, Bigwarp, Share-nude, Veryleaks, Redfans.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-4">
                  Certaines de ces pages étaient référencées dans Google Search et Google Images, exposant le nom de la créatrice à un trafic non désiré.
                </p>
              </div>
            </motion.div>

            {/* Method */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Méthode CRD</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Une escalade juridique ciblée</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Ce que nous avons entrepris n'était pas automatique. Pas une simple demande DMCA envoyée dans l'espoir d'une réponse.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Mais une escalade juridique ciblée, construite lien par lien, dossier par dossier.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Hébergeur, registrar, contact WHOIS, page cache, détection miroir. Chaque point a été traité.
                </p>
              </div>
            </motion.div>

            {/* Before/After - Vertical Layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Preuves visuelles</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Avant / Après</h2>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-white shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)] overflow-hidden">
                    <div className="p-3 sm:p-4 bg-zinc-900 border-b border-zinc-800/60">
                      <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Avant</p>
                      <p className="text-sm text-zinc-300 mt-1">Page publique, accessible par Google, listée dans plusieurs moteurs alternatifs, et partagée sur des forums.</p>
                    </div>
                    <img src="/images/purehumansoul-avant.avif" alt="Borntobefuck.com page active" className="w-full h-auto object-contain" />
                  </div>
                  <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-white shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)] overflow-hidden">
                    <div className="p-3 sm:p-4 bg-zinc-900 border-b border-zinc-800/60">
                      <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Après</p>
                      <p className="text-sm text-zinc-300 mt-1">Page supprimée, lien introuvable, cache Google désindexé, contenu retiré de l'index images.</p>
                    </div>
                    <img src="/images/purehumansoul-apres.avif" alt="Borntobefuck.com page removed" className="w-full h-auto object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-primary/25 bg-[radial-gradient(circle_at_top,rgba(255,204,112,0.2),transparent_65%),#0b0b10] p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 shadow-[0_60px_170px_-90px_rgba(0,0,0,0.9)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-primary/80">Victoire finale</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">85% supprimé en moins de 30 jours</h2>
                    </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Sur borntobefuck.com, le profil Purehumansoul affichait 11 vidéos, des tags explicites, et des liens vers des hébergements secondaires.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Le taux de suppression global a dépassé 85% en moins de 30 jours, incluant les pires plateformes.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
                  <div className="relative overflow-hidden flex items-center gap-3 rounded-xl sm:rounded-2xl border border-primary/30 bg-gradient-to-br from-black/70 to-zinc-950/70 p-4 sm:p-5 shadow-[0_15px_40px_-20px_rgba(255,204,112,0.1)]">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm text-zinc-200">Borntobefuck : supprimé</p>
                  </div>
                  <div className="relative overflow-hidden flex items-center gap-3 rounded-xl sm:rounded-2xl border border-primary/30 bg-gradient-to-br from-black/70 to-zinc-950/70 p-4 sm:p-5 shadow-[0_15px_40px_-20px_rgba(255,204,112,0.1)]">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm text-zinc-200">Gofile : supprimé</p>
                  </div>
                  <div className="relative overflow-hidden flex items-center gap-3 rounded-xl sm:rounded-2xl border border-primary/30 bg-gradient-to-br from-black/70 to-zinc-950/70 p-4 sm:p-5 shadow-[0_15px_40px_-20px_rgba(255,204,112,0.1)]">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm text-zinc-200">Sxyprn : supprimé</p>
                  </div>
                  <div className="relative overflow-hidden flex items-center gap-3 rounded-xl sm:rounded-2xl border border-primary/30 bg-gradient-to-br from-black/70 to-zinc-950/70 p-4 sm:p-5 shadow-[0_15px_40px_-20px_rgba(255,204,112,0.1)]">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm text-zinc-200">Share-nude : supprimé</p>
                  </div>
                  <div className="relative overflow-hidden flex items-center gap-3 rounded-xl sm:rounded-2xl border border-primary/30 bg-gradient-to-br from-black/70 to-zinc-950/70 p-4 sm:p-5 shadow-[0_15px_40px_-20px_rgba(255,204,112,0.1)]">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm text-zinc-200">Redfans : supprimé</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Suivi transparent</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Traçabilité totale</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  La cliente a pu suivre, jour après jour, l'évolution du traitement. Chaque lien supprimé était notifié, horodaté, vérifiable.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  À la fin du mois, nous lui avons présenté un tableau clair : tous les liens critiques étaient tombés. Les résidus restants étaient sous surveillance automatisée. Son nom n'était plus visible. Son contenu n'était plus exposé.
                    </p>
                  </div>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Résultat final</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Une disparition totale</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Aujourd'hui, Purehumansoul est apaisée. Elle nous l'a dit elle-même : elle s'attendait à "une réduction", pas à une disparition totale.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Mais c'est exactement ce qu'on a livré.
                </p>
                <div className="rounded-xl sm:rounded-2xl border border-primary/30 bg-black/60 p-4 sm:p-6 mt-4">
                  <p className="text-sm sm:text-base text-zinc-200 font-semibold leading-relaxed">
                    Ce n'est pas de la magie. C'est de la méthode, de la persévérance… et du silence.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-zinc-900/90 to-primary/10 backdrop-blur-xl border border-primary/20 p-6 sm:p-8 lg:p-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50" />
              <div className="relative z-10 text-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  Prête à savoir si ton contenu est leaké ?
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Rejoins les centaines de créatrices qui nous font confiance pour protéger leur image et leur contenu.
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-bold rounded-full px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] text-sm sm:text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
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

      {/* Full Content for Leakimedia Case */}
      {caseStudy?.id === 2 && (
        <section className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl space-y-8 sm:space-y-12 lg:space-y-20">
            {/* Context */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Situation initiale</span>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-3 sm:mt-4">
                  Certaines demandes sont simples. D'autres vont beaucoup plus loin.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-4">
                  Cette créatrice, active sur plusieurs plateformes premium, ne voulait pas seulement retirer quelques liens visibles. Elle voulait disparaître. Son objectif était clair dès le départ : supprimer tout ce qui la concernait d'Internet. Pas partiellement. Pas temporairement. Totalement.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-4">
                  Le plus gros problème ? Son nom figurait sur Leakimedia, une plateforme extrêmement difficile à attaquer. Connue pour ignorer les signalements, héberger les contenus en direct, anonymiser ses serveurs, et ne jamais coopérer.
                </p>
                </div>
            </motion.div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Méthode CRD</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Mais là où d'autres abandonnent, nous avons agi</h2>
              </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Après avoir nettoyé plus d'une dizaine de sites secondaires (Shemaleleaks, Share-Nude, XPics, MYM-DB, etc.), notre équipe s'est concentrée uniquement sur Leakimedia.
                </p>
                <div className="space-y-4 pt-4">
                  <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                    Trois mois de travail.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                    Un dossier complet, construit pièce par pièce.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                    Des preuves. Des analyses. Des éléments juridiques. Des signaux techniques.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                    Rien de visible en surface, mais chaque action posée avec précision.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-primary font-semibold leading-relaxed">
                    Et un jour, tout a disparu.
                  </p>
              </div>
              </div>
            </motion.div>

            {/* Before/After - Vertical Layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Preuves visuelles</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Avant / Après</h2>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-white shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)] overflow-hidden">
                    <div className="p-3 sm:p-4 bg-zinc-900 border-b border-zinc-800/60">
                      <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Avant</p>
                      <p className="text-sm text-zinc-300 mt-1">Page active sur Leakimedia</p>
              </div>
                    <img src="/images/leakimedia-avant.avif" alt="Leakimedia page active" className="w-full h-auto object-contain" />
                  </div>
                  <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-white shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)] overflow-hidden">
                    <div className="p-3 sm:p-4 bg-zinc-900 border-b border-zinc-800/60">
                      <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Après</p>
                      <p className="text-sm text-zinc-300 mt-1">Lien supprimé, profil introuvable</p>
                    </div>
                    <img src="/images/leakimedia-apres.avif" alt="Leakimedia page removed" className="w-full h-auto object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-primary/25 bg-[radial-gradient(circle_at_top,rgba(255,204,112,0.2),transparent_65%),#0b0b10] p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 shadow-[0_60px_170px_-90px_rgba(0,0,0,0.9)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-primary/80">Victoire finale</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Dossier entièrement supprimé</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Aujourd'hui, cette créatrice n'a plus aucune page active sur la plateforme. Le thread a été effacé. Aucun miroir. Aucun retour depuis. Et notre équipe continue de surveiller chaque jour pour prévenir toute résurgence.
                </p>
                <div className="rounded-xl sm:rounded-2xl border border-primary/30 bg-black/60 p-4 sm:p-6 mt-4">
                  <p className="text-sm sm:text-base text-zinc-200 font-semibold leading-relaxed">
                    Ce dossier est confidentiel — à la demande de la cliente.
                  </p>
                  <p className="text-sm sm:text-base text-zinc-200 font-semibold leading-relaxed mt-3">
                    Mais son résultat est public : Leakimedia peut être supprimé.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Conclusion</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Pas en croisant les doigts</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Pas en croisant les doigts. Mais avec méthode, rigueur… et silence.
                </p>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-zinc-900/90 to-primary/10 backdrop-blur-xl border border-primary/20 p-6 sm:p-8 lg:p-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50" />
              <div className="relative z-10 text-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  {leakimediaCta.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  {leakimediaCta.subtitle}
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-bold rounded-full px-6 sm:px-8 text-sm sm:text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href={leakimediaCta.link}>
                    {leakimediaCta.buttonLabel}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {caseStudy?.id === 3 && (
        <section className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl space-y-8 sm:space-y-12 lg:space-y-20">
            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                {avaHighlights.map((item) => (
                  <div key={item.label} className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-[radial-gradient(circle_at_top,rgba(255,204,112,0.18),transparent_65%),#0c0c11] p-6 sm:p-8 shadow-[0_40px_140px_-80px_rgba(0,0,0,0.8)]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                <div className="relative z-10">
                      <p className="text-4xl sm:text-5xl font-bold text-primary mb-2 sm:mb-3">{item.value}</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 leading-relaxed">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Context */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-5 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Situation initiale</span>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  En mai 2025, la situation d'Ava21, connue également sous le pseudo Petitabricot, semblait totalement hors de contrôle. Plus de 70 liens actifs diffusaient ses contenus, dont certains indexés par Google Images. Ses vidéos et photos circulaient librement sur des plateformes classées parmi les plus résistantes du paysage pirate.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Chaque jour, de nouveaux miroirs apparaissaient. Mission confiée à Content Removal Desk : stabiliser, neutraliser, documenter.
                    </p>
                  </div>
            </motion.div>

            {/* Operation Fronts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Plan CRD</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Trois fronts pour casser la fuite</h2>
                </div>
              </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {avaOperationFronts.map((front) => (
                    <div key={front.title} className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-black/80 to-zinc-950/80 p-6 sm:p-8 space-y-4 sm:space-y-5 shadow-[0_45px_140px_-90px_rgba(0,0,0,0.85)]">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
                      <div className="relative z-10 space-y-3 sm:space-y-4">
                        <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-sm">
                          <front.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg sm:text-xl font-semibold text-white">{front.title}</h3>
                          <p className="text-xs uppercase tracking-[0.3em] text-primary/80">{front.subtitle}</p>
                        </div>
                        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed pt-2">
                          {front.points.map((point) => (
                            <p key={point} className="text-zinc-400">{point}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Detailed Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Mécanique opérationnelle</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Escalade systématique et traçable</h2>
                </div>
                <div className="space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  <p>
                    Cartographie totale, DMCA ciblés, calls directs : les premières 72 h ont neutralisé Gofile, Nudostar, Nudogram et Faponic. La base était stabilisée.
                  </p>
                  <p>
                    Ensuite, escalade juridique. Leakimedia, Bunkr et Wildskirts ont reçu dossiers complets, mises en demeure et pressions WHOIS relayées jusqu'aux hébergeurs.
                  </p>
                  <p>
                    En parallèle, la désindexation Google Images et la purge Fapello, Leakomax, TheFappeningbook, Rentry, Share-Nude ont fait disparaître les résidus visibles.
                  </p>
              </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/90 via-black/90 to-zinc-950/90 p-6 sm:p-8 lg:p-10 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-6 sm:mb-10">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Chronologie opérationnelle</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Trois mois d'opérations continues</h2>
                </div>
              </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {avaTimeline.map((step) => (
                    <div key={step.phase} className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-black/70 to-zinc-950/70 p-5 sm:p-7 space-y-3 sm:space-y-4 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
                      <div className="relative z-10 space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                          </div>
                          <p className="text-xs uppercase tracking-[0.3em] text-primary/80 font-medium">{step.phase}</p>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-white">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-primary/25 bg-[radial-gradient(circle_at_top,rgba(255,204,112,0.2),transparent_65%),#0b0b10] p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 shadow-[0_60px_170px_-90px_rgba(0,0,0,0.9)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-primary/80">Basculement final</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Plus de 75% des liens neutralisés</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Trois mois plus tard, 75% des liens sont neutralisés. L'index Google est propre et les plateformes majeures ne montrent plus rien, hormis une veille serrée sur Leakimedia et Bunkr.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  {avaResultPoints.map((point) => (
                    <div key={point} className="relative overflow-hidden flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-primary/30 bg-gradient-to-br from-black/70 to-zinc-950/70 p-4 sm:p-6 shadow-[0_15px_40px_-20px_rgba(255,204,112,0.1)]">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
                      <div className="relative z-10 flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Client Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(12,12,16,0.95))] backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-[0_60px_170px_-90px_rgba(0,0,0,0.85)]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-40" />
                <div className="relative z-10 space-y-4 sm:space-y-6">
                  <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <blockquote className="text-base sm:text-lg lg:text-xl text-zinc-100 leading-relaxed font-medium">
                    « Je retrouvais mon pseudo dès que je tapais mon nom. Trois mois plus tard, il ne restait rien. »
                  </blockquote>
                  <div className="pt-2 border-t border-zinc-800/50">
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Ava21, dossier clôturé août 2025</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 shadow-[0_60px_170px_-90px_rgba(0,0,0,0.85)] space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Méthode CRD</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">La différence fondamentale</h2>
                </div>
                <div className="space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  <p>
                    Différence CRD : pression systématique, légale et documentée jusqu'à la suppression ou l'escalade finale. Aucun lien laissé sans réponse.
                  </p>
                  <p>
                    Ava21 retrouve un terrain propre, sous veille active. Nous ne promettons pas des miracles : nous les produisons, preuves à l'appui.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-zinc-900/90 to-primary/10 backdrop-blur-xl border border-primary/20 p-6 sm:p-8 lg:p-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50" />
              <div className="relative z-10 text-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  {avaCta.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  {avaCta.subtitle}
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-bold rounded-full px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] text-sm sm:text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="https://scan.contentremovaldesk.com/scan">
                    {avaCta.buttonLabel}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Full Content for Lisa Malek Case */}
      {caseStudy?.id === 4 && (
        <section className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl space-y-8 sm:space-y-12 lg:space-y-20">
            {/* Initial Situation with Large Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-white shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)] overflow-hidden mb-6 sm:mb-8">
                <img src="/images/borntobefuck-search.avif" alt="Borntobefuck.com search results" className="w-full h-auto object-contain" />
              </div>
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Situation initiale</span>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-3 sm:mt-4">
                  En mai 2025, LisaAmelK94 nous contacte. Plus de 70 liens actifs, certains indexés par Google. Au centre de la fuite : borntobefuck.com, réputé intouchable.
                </p>
              </div>
            </motion.div>

            {/* Operation Fronts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Plan CRD</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Trois fronts coordonnés</h2>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {lisaOperationFronts.map((front) => (
                    <div key={front.title} className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-black/80 to-zinc-950/80 p-6 sm:p-8 space-y-4 sm:space-y-5 shadow-[0_45px_140px_-90px_rgba(0,0,0,0.85)]">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
                      <div className="relative z-10 space-y-3 sm:space-y-4">
                        <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-sm">
                          <front.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg sm:text-xl font-semibold text-white">{front.title}</h3>
                          <p className="text-xs uppercase tracking-[0.3em] text-primary/80">{front.subtitle}</p>
                        </div>
                        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed pt-2">
                          {front.points.map((point) => (
                            <p key={point} className="text-zinc-400">{point}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ICANN Escalation - Visual First */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-white shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)] overflow-hidden">
                  <img src="/images/icann-case-created.avif" alt="ICANN case created" className="w-full h-auto object-contain" />
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-white shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)] overflow-hidden">
                  <img src="/images/icann-complaint-details.avif" alt="ICANN complaint details" className="w-full h-auto object-contain" />
                </div>
              </div>
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Escalade juridique</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-3 sm:mb-4">L'escalade ICANN</h2>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  DMCA et contacts directs restés sans réponse. Nous avons construit un dossier juridique complet et l'avons porté directement devant ICANN Contractual Compliance.
                </p>
              </div>
            </motion.div>

            {/* Dashboard - Visual First */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-white shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)] overflow-hidden mb-6 sm:mb-8">
                <img src="/images/lisa-dashboard.avif" alt="Dashboard showing deleted links" className="w-full h-auto object-contain" />
                    </div>
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Action parallèle</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-3 sm:mb-4">Frappe sur plusieurs fronts</h2>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Pendant l'instruction ICANN, neutralisation terrain : cartographie SEO, pression WHOIS, relances techniques. Chaque lien tracé jusqu'à suppression.
                </p>
                  </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/90 via-black/90 to-zinc-950/90 p-6 sm:p-8 lg:p-10 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-6 sm:mb-10">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Chronologie opérationnelle</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Quatre étapes jusqu'à la suspension</h2>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {lisaTimeline.map((step) => (
                    <div key={step.phase} className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-black/70 to-zinc-950/70 p-5 sm:p-7 space-y-3 sm:space-y-4 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
                      <div className="relative z-10 space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                          </div>
                          <p className="text-xs uppercase tracking-[0.3em] text-primary/80 font-medium">{step.phase}</p>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-white">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Final Results - Visual First */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-white shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)] overflow-hidden">
                  <img src="/images/borntobefuck-404.avif" alt="Borntobefuck.com page not found" className="w-full h-auto object-contain" />
                </div>
                <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-white shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)] overflow-hidden">
                  <img src="/images/icann-case-closed.avif" alt="ICANN case closed" className="w-full h-auto object-contain" />
                </div>
              </div>
              <div className="rounded-2xl sm:rounded-3xl border border-primary/25 bg-[radial-gradient(circle_at_top,rgba(255,204,112,0.2),transparent_65%),#0b0b10] p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 shadow-[0_60px_170px_-90px_rgba(0,0,0,0.9)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-primary/80">Victoire finale</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">87% neutralisés en 19 jours</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  En 19 jours, 87% des liens neutralisés. Le 7 août 2025, ICANN confirme la suspension de borntobefuck.com. Le site ne peut revenir qu'après retrait complet des contenus.
                </p>
                <div className="rounded-xl sm:rounded-2xl border border-primary/30 bg-black/60 p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-zinc-200 font-semibold leading-relaxed">
                    Un symbole fort : même un acteur réputé "intouchable" a dû céder face à notre action.
                    </p>
                  </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  {lisaResultPoints.map((point) => (
                    <div key={point} className="relative overflow-hidden flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-primary/30 bg-gradient-to-br from-black/70 to-zinc-950/70 p-4 sm:p-6 shadow-[0_15px_40px_-20px_rgba(255,204,112,0.1)]">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
                      <div className="relative z-10 flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CRD Difference & Conclusion Combined */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Méthode CRD</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">La différence fondamentale</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Là où d'autres envoient des DMCA standardisés, nous combinons stratégie juridique, persistance opérationnelle et connaissance fine des circuits d'escalade. Savoir jusqu'où pousser, qui alerter, quel levier utiliser, et quand.
                </p>
              </div>
            </motion.div>

            {/* Impact & Conclusion Combined */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Impact durable</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Stabilité retrouvée</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Aujourd'hui, Lisa ne fait plus face à un océan de pages illégales. Ses points d'exposition neutralisés, veille active hebdomadaire, réponse sous 24 h à toute nouvelle fuite. Là où elle envisageait d'abandonner sa carrière, elle a retrouvé une stabilité numérique.
                </p>
                <div className="pt-4 sm:pt-6 border-t border-zinc-800/50 space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                    L'impossible peut être accompli avec les bons leviers et la bonne méthode. Nous ne promettons pas des miracles, nous les produisons avec méthode.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                    Notre engagement : prix justes, actions traçables, résultats concrets. Nous travaillons avec nos clientes et pour elles, dans la durée.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-zinc-900/90 to-primary/10 backdrop-blur-xl border border-primary/20 p-6 sm:p-8 lg:p-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50" />
              <div className="relative z-10 text-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  {lisaCta.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  {lisaCta.subtitle}
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-bold rounded-full px-6 sm:px-8 text-sm sm:text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href={lisaCta.link}>
                    {lisaCta.buttonLabel}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Full Content for Talullax Case */}
      {caseStudy?.id === 5 && (
        <section className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl space-y-8 sm:space-y-12 lg:space-y-20">
            {/* Context */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Situation initiale</span>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-3 sm:mt-4">
                  En juillet 2025, Talullax, créatrice active sur Stripchat, OnlyFans, MYM et Reveal.me, faisait face à une situation critique. Chaque jour, ses shows en direct étaient capturés, rechargés et diffusés illégalement. Plus de 600 vidéos volées circulaient sur des sites pirates, regroupées sous son nom.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-4">
                  En parallèle, plus de 300 liens actifs redirigeaient vers ces fuites, visibles sur les moteurs de recherche et dans des forums spécialisés. Certaines plateformes allaient jusqu'à créer des catégories complètes à son nom, actualisées automatiquement.
                </p>
              </div>
            </motion.div>

            {/* Operation Fronts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Plan CRD</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Trois phases coordonnées</h2>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {talullaxOperationFronts.map((front) => (
                    <div key={front.title} className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-black/80 to-zinc-950/80 p-6 sm:p-8 space-y-4 sm:space-y-5 shadow-[0_45px_140px_-90px_rgba(0,0,0,0.85)]">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
                      <div className="relative z-10 space-y-3 sm:space-y-4">
                        <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-sm">
                          <front.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg sm:text-xl font-semibold text-white">{front.title}</h3>
                          <p className="text-xs uppercase tracking-[0.3em] text-primary/80">{front.subtitle}</p>
                        </div>
                        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed pt-2">
                          {front.points.map((point) => (
                            <p key={point} className="text-zinc-400">{point}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Phase 1 - Contenir */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Phase 1</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Contenir l'explosion</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-3 sm:mt-4">
                  Notre première action a été chirurgicale : nous avons isolé les plateformes à réponse rapide et engagé une série de signalements ciblés. En moins de 48 h, nous avons obtenu la suppression confirmée de ses contenus sur Gofile, Faponic, Nudostar, Erome, Camdownload, Fapello, Leaked.fans, entre autres.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-4">
                  Sur ces seuls premiers jours, plus de 140 liens ont été désactivés ou retirés. La surface d'exposition visible a chuté de près de 40%.
                </p>
              </div>
            </motion.div>

            {/* Tanaleaks Focus */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Avant / Après</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">Tanaleaks.com</h3>
                </div>
                <div className="space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-2xl sm:rounded-3xl border-2 border-zinc-800/60 bg-white shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)] overflow-hidden"
            >
                    <div className="p-3 sm:p-4 bg-zinc-900 border-b border-zinc-800/60">
                      <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Avant</p>
                </div>
                    <img 
                      src="/images/tanaleaks-site.avif" 
                      alt="Tanaleaks.com page active" 
                      className="w-full h-auto object-contain"
                      loading="eager"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-2xl sm:rounded-3xl border-2 border-zinc-800/60 bg-white shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)] overflow-hidden"
                  >
                    <div className="p-3 sm:p-4 bg-zinc-900 border-b border-zinc-800/60">
                      <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Après</p>
              </div>
                    <img 
                      src="/images/tanaleaks-404.avif" 
                      alt="Tanaleaks.com 404 page" 
                      className="w-full h-auto object-contain"
                      loading="eager"
                    />
                  </motion.div>
                </div>
              </div>
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Focus</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Tanaleaks.com</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-3 sm:mt-4">
                  Plateforme spécialisée dans les leaks de modèles cam, Tanaleaks.com maintenait une page de catégorie entièrement dédiée à Talullax, référençant des dizaines de vidéos et captures. Le contenu était constamment actualisé et boosté par des métadonnées SEO automatisées.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-4">
                  Nos interventions ont inclus des signalements réseau, des démarches auprès de l'hébergeur, et des escalades juridiques progressives. L'objectif était clair : non seulement supprimer le contenu, mais faire disparaître toute la structure du dossier.
                </p>
              </div>
            </motion.div>

            {/* Camlib Focus */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Avant / Après</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">Camlib.com</h3>
                </div>
                <div className="space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-2xl sm:rounded-3xl border-2 border-zinc-800/60 bg-white shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)] overflow-hidden"
                  >
                    <div className="p-3 sm:p-4 bg-zinc-900 border-b border-zinc-800/60">
                      <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Avant</p>
                    </div>
                    <img 
                      src="/images/google-dmca-removals.avif" 
                      alt="Camlib.com page active" 
                      className="w-full h-auto object-contain"
                      loading="eager"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-2xl sm:rounded-3xl border-2 border-zinc-800/60 bg-white shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)] overflow-hidden"
                  >
                    <div className="p-3 sm:p-4 bg-zinc-900 border-b border-zinc-800/60">
                      <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Après</p>
                    </div>
                    <img 
                      src="/images/camslib-404.avif" 
                      alt="Camlib.com 404 page" 
                      className="w-full h-auto object-contain"
                      loading="eager"
                    />
                  </motion.div>
                </div>
              </div>
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Focus</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Camlib.com</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-3 sm:mt-4">
                  Camlib.com fonctionnait comme un catalogue automatisé de performances en direct. Le profil Talullax regroupait ses vidéos classées par plateforme, pays, fréquence, tags. Ce genre de page génère un trafic élevé et donne une apparence semi-officielle à des contenus volés.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-4">
                  Une série de signalements techniques et DMCA, combinés à une pression sur l'infrastructure du site, a permis la désactivation complète de son profil. Le lien n'est plus accessible, et son nom n'est plus référencé sur la plateforme.
                  </p>
                </div>
            </motion.div>

            {/* Phase 2 - Nettoyage */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={mounted ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl sm:rounded-3xl border-2 border-zinc-800/60 bg-white shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)] overflow-hidden mb-6 sm:mb-8"
              >
                <img 
                  src="/images/camslib-site.avif" 
                  alt="Google search results with DMCA removals" 
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </motion.div>
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Phase 2</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Nettoyage des résidus</h2>
              </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-3 sm:mt-4">
                  Pendant que les plateformes majeures tombaient, nous avons lancé la désindexation complète sur Google Search et Google Images. En quelques semaines, plus de 75% des résultats liés à son nom ont été retirés des SERPs. Les requêtes associées, les miniatures, et les liens secondaires ont tous été bloqués ou déréférencés.
              </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed mt-4">
                  Certains sites résistants comme Leakedmodels, Leak.xxx, Showcamrips, ou Fapopedia ont été attaqués par des formulaires juridiques, des WHOIS inversés, et des signalements auprès des registrars. Là où un DMCA standard échoue, notre méthode de suivi persistant et notre pression légale obtiennent des résultats.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/90 via-black/90 to-zinc-950/90 p-6 sm:p-8 lg:p-10 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-6 sm:mb-10">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Chronologie opérationnelle</span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground">30 jours jusqu'à la neutralisation</h2>
                </div>
              </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {talullaxTimeline.map((step) => (
                    <div key={step.phase} className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-black/70 to-zinc-950/70 p-5 sm:p-7 space-y-3 sm:space-y-4 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
                      <div className="relative z-10 space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                          </div>
                          <p className="text-xs uppercase tracking-[0.3em] text-primary/80 font-medium">{step.phase}</p>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-white">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-primary/25 bg-[radial-gradient(circle_at_top,rgba(255,204,112,0.2),transparent_65%),#0b0b10] p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 shadow-[0_60px_170px_-90px_rgba(0,0,0,0.9)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-primary/80">Victoire finale</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">600+ fichiers réduits à moins de 10 liens</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  En 30 jours, nous sommes passés de plus de 600 fichiers visibles à une base active réduite à moins de 10 liens résiduels en traitement. La majorité des plateformes ont supprimé son contenu définitivement. Les sites qui persistent sont soit en escalade légale, soit ont déjà reçu une notification et seront poursuivis.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  {talullaxResultPoints.map((point) => (
                    <div key={point} className="relative overflow-hidden flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-primary/30 bg-gradient-to-br from-black/70 to-zinc-950/70 p-4 sm:p-6 shadow-[0_15px_40px_-20px_rgba(255,204,112,0.1)]">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
                      <div className="relative z-10 flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Méthode CRD</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Une approche qui casse les cycles</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Talullax est le parfait exemple de ce que vivent des centaines de créatrices webcam : une fuite devient virale, puis incontrôlable, et chaque tentative de suppression ponctuelle échoue à cause du volume et de la fréquence.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Notre travail ne s'arrête pas au premier signalement. Nous cartographions, attaquons, suivons, et vérifions, lien par lien, site par site. Cette méthode, combinée à une pression constante, permet de briser le cycle des reposts automatisés et de restaurer le contrôle total.
                  </p>
                </div>
            </motion.div>

            {/* Impact */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <div className="rounded-2xl sm:rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-900/92 via-black/92 to-zinc-950/92 p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 shadow-[0_50px_150px_-80px_rgba(0,0,0,0.85)]">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">Impact durable</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Zone saine retrouvée</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed">
                  Aujourd'hui, Talullax a retrouvé une zone saine. Elle peut performer sans craindre l'archivage automatique ou l'exposition de masse. Sa présence sur les sites pirates est désormais minimale, surveillée, et contenue.
                </p>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-zinc-900/90 to-primary/10 backdrop-blur-xl border border-primary/20 p-6 sm:p-8 lg:p-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50" />
              <div className="relative z-10 text-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  {talullaxCta.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  {talullaxCta.subtitle}
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-bold rounded-full px-6 sm:px-8 text-sm sm:text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href={talullaxCta.link}>
                    {talullaxCta.buttonLabel}
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

