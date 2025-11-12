import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Target, Shield, Zap, Globe2, Users, Rocket, Layers } from "lucide-react";

const coreStats = [
  { value: "2024", label: "Année de création" },
  { value: "500k+", label: "Contenus supprimés" },
  { value: "500+", label: "Créateurs protégés" },
  { value: "99.2%", label: "Taux de réussite" },
];

const pillars = [
  {
    title: "Notre mission",
    copy:
      "Offrir une réponse humaine, rapide et légitime à tous les créateurs qui veulent reprendre le contrôle sur leur image et leurs contenus en ligne.",
  },
  {
    title: "Notre conviction",
    copy:
      "La fuite de données, le piratage et l'exploitation sans consentement ne doivent plus être une fatalité. Nous construisons chaque jour un rempart fiable et transparent.",
  },
  {
    title: "Notre promesse",
    copy:
      "Un accompagnement premium, centré sur la confidentialité, la réactivité et la preuve. Chaque dossier est suivi par un agent dédié." },
];

const timeline = [
  {
    year: "2024",
    title: "Lancement",
    items: [
      "Premiers retraits manuels et procédures DMCA", 
      "Création d'une équipe franco-européenne spécialisée",
      "Premier tableau de bord client sécurisé",
    ],
  },
  {
    year: "2025",
    title: "Industrialisation",
    items: [
      "Scanner propriétaire connecté à plus de 50 plateformes",
      "Infrastructure légale renforcée avec avocats partenaires",
      "Déploiement d'un monitoring 24/7 pour les clients premium",
    ],
  },
  {
    year: "2026",
    title: "Expansion",
    items: [
      "Opérations dans 10+ pays et 6 langues",
      "Escalades légales reconnues par registrars et hébergeurs",
      "Réseau de partenaires officiels (ICANN, EUIPO, WIPO, Cloudflare)",
    ],
  },
];

const values = [
  {
    icon: Shield,
    title: "Confidentialité absolue",
    copy: "Aucune donnée exposée. Tout est chiffré, audité et conservé en France.",
  },
  {
    icon: Target,
    title: "Transparence totale",
    copy: "Suivi temps réel, reporting clair et décisions partagées avec les clients.",
  },
  {
    icon: Zap,
    title: "Réactivité signature",
    copy: "Escalade engagée en moins de 2 heures pour les dossiers critiques.",
  },
  {
    icon: Globe2,
    title: "Approche internationale",
    copy: "Procédures locales, escalades juridiques et partenariats sur trois continents.",
  },
];

const teamHighlights = [
  {
    title: "Une équipe à taille humaine",
    copy: "Derrière chaque retrait, il y a un humain. Nos agents analysent, escaladent et suivent chaque demande sans automatiser la relation client.",
  },
  {
    title: "Un réseau à forte valeur",
    copy: "Hébergeurs, registrars, réseaux sociaux, plateformes de paiement : nous activons nos interlocuteurs pour accélérer chaque suppression.",
  },
  {
    title: "Un accompagnement premium",
    copy: "Chaque client dispose d'un responsable dédié, de points hebdomadaires et d'un reporting certifié.",
  },
];

const APropos = () => {
  useEffect(() => {
    document.title = "À Propos | ContentRemovalDesk - Protection des Créateurs de Contenu";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "ContentRemovalDesk : agence française de protection digitale fondée en 2024. Plus de 500 000 liens supprimés pour 500+ créateurs. Service humain, discret et ultra réactif."
      );
    }

    const ensureMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    ensureMeta("og:title", "À Propos - ContentRemovalDesk | Notre Mission de Protection");
    ensureMeta(
      "og:description",
      "Découvrez l'histoire de ContentRemovalDesk, agence française de protection digitale pour créateurs. Fondée en 2024, plus de 500k liens supprimés."
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-28 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-20 right-8 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-24 left-10 w-80 h-80 bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />

          <div className="relative z-10 container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm text-zinc-400 font-medium">Agence française de protection digitale</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
                À propos de
                <span className="text-primary"> Content Removal Desk</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                Depuis 2024, nous accompagnons les créateurs, talents et agences pour reprendre la main sur leurs contenus et leur image. Notre promesse : action, discrétion et résultats.
              </p>
            </motion.div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {coreStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="rounded-2xl border border-zinc-800/60 bg-zinc-950/50 backdrop-blur-xl p-6 text-center shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <p className="text-xs sm:text-sm text-zinc-400 uppercase tracking-[0.3em]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto max-w-6xl grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full p-8 bg-zinc-900/60 border-zinc-800 hover:border-primary/40 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{pillar.title}</h3>
                  <p className="text-zinc-300 leading-relaxed">{pillar.copy}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Notre trajectoire</h2>
              <p className="text-lg text-zinc-400">
                De quelques demandes DMCA manuelles à un réseau international de partenaires officiels.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {timeline.map((step, index) => (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative"
                >
                  <Card className="h-full bg-zinc-900/50 border-zinc-800 p-8 hover:border-primary/40 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                        {step.year}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    <ul className="space-y-3 text-zinc-300 leading-relaxed list-disc list-inside">
                      {step.items.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto max-w-6xl grid gap-6 lg:grid-cols-3">
            {teamHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full p-8 bg-zinc-900/60 border-zinc-800 hover:border-primary/40 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{highlight.title}</h3>
                  <p className="text-zinc-300 leading-relaxed">{highlight.copy}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Nos valeurs fondamentales</h2>
              <p className="text-lg text-zinc-400">
                Les piliers qui guident chacune de nos décisions et de nos actions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Card className="h-full p-6 bg-zinc-900/50 border-zinc-800 hover:border-primary/40 transition-all duration-500">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                      <p className="text-sm text-zinc-300 leading-relaxed">{value.copy}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/60 border border-zinc-800/60">
                <Rocket className="h-4 w-4 text-primary" />
                <span className="text-sm text-zinc-300 font-medium">Prêt à passer à l'action ?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                On s'occupe des fuites, tu te concentres sur ta création.
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Rejoins les talents qui nous confient leurs contenus. Un agent dédié répond en quelques minutes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://scan.contentremovaldesk.com/scan"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-black font-semibold shadow-[0_15px_40px_rgba(201,165,82,0.45)] hover:bg-primary/90 hover:shadow-[0_20px_50px_rgba(201,165,82,0.55)] transition-all duration-300"
                >
                  Scan gratuit
                  <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://wa.me/32460236990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-zinc-700 text-zinc-300 hover:border-primary/60 hover:text-primary transition-all duration-300"
                >
                  <Users className="h-5 w-5" />
                  Parler à un expert
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default APropos;
