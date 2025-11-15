import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Target, Shield, Zap, Globe2, Users, Rocket, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedNumber from "@/components/AnimatedNumber";

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

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Header />

      <main>
        {/* Hero Section - Enhanced with Strong Glow */}
        <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-20">
          {/* Premium animated background with STRONG GLOW - Optimized for Safari */}
          <div className="absolute inset-0" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
            {/* Main glow orb - STRONGER */}
            <motion.div 
              className="absolute -top-40 sm:-top-10 left-1/2 -translate-x-1/2 w-[900px] sm:w-[1200px] h-[720px] sm:h-[800px] rounded-full opacity-35 sm:opacity-40 blur-[60px] sm:blur-[80px]"
              animate={{
                opacity: [0.35, 0.5, 0.35],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: `radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.4) 35%, hsl(var(--primary) / 0.2) 50%, transparent 70%)`,
                transform: `translate3d(calc(-50% + ${mousePosition.x * 0.03}px), ${mousePosition.y * 0.02}px, 0)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'opacity, transform',
                boxShadow: '0 0 200px rgba(255, 223, 125, 0.3), 0 0 400px rgba(255, 223, 125, 0.15)'
              } as React.CSSProperties}
            />
            {/* Secondary glow orb - STRONGER */}
            <motion.div 
              className="absolute bottom-0 left-1/4 w-[420px] sm:w-[600px] h-[420px] sm:h-[600px] rounded-full opacity-20 sm:opacity-25 blur-[40px] sm:blur-[60px]"
              animate={{
                opacity: [0.2, 0.3, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              style={{
                background: `radial-gradient(circle, hsl(var(--primary) / 0.7) 0%, hsl(var(--primary) / 0.4) 40%, transparent 65%)`,
                transform: `translate3d(${mousePosition.x * 0.02}px, -${mousePosition.y * 0.02}px, 0)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'opacity, transform',
                boxShadow: '0 0 150px rgba(255, 223, 125, 0.25), 0 0 300px rgba(255, 223, 125, 0.1)'
              } as React.CSSProperties}
            />
            {/* Tertiary glow orb */}
            <motion.div 
              className="absolute top-1/3 right-1/4 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full opacity-15 sm:opacity-20 blur-[35px] sm:blur-[50px]"
              animate={{
                opacity: [0.15, 0.25, 0.15],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              style={{
                background: `radial-gradient(circle, hsl(var(--primary) / 0.5) 0%, hsl(var(--primary) / 0.3) 40%, transparent 70%)`,
                transform: `translate3d(-${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px, 0)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'opacity, transform',
                boxShadow: '0 0 120px rgba(255, 223, 125, 0.2)'
              } as React.CSSProperties}
            />
            {/* Additional glow layer for extra depth */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] sm:w-[1400px] h-[1000px] sm:h-[1400px] rounded-full opacity-10 sm:opacity-15 blur-[100px] sm:blur-[120px]"
              animate={{
                opacity: [0.1, 0.18, 0.1],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: `radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 60%)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'opacity, transform'
              } as React.CSSProperties}
            />
            {/* Animated grid overlay */}
            <motion.div 
              className="absolute inset-0 opacity-[0.04]"
              animate={{
                opacity: [0.03, 0.05, 0.03],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'opacity'
              } as React.CSSProperties}
            />
            {/* Seamless gradient fade to blend with next section - Enhanced */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-40 sm:h-56 bg-gradient-to-b from-transparent via-primary/8 via-primary/6 via-primary/4 to-primary/12"
              style={{
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)'
              }}
            />
            {/* Additional soft overlay for extra smoothness */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-b from-transparent via-primary/3 to-primary/8"
              style={{
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                opacity: 0.6
              }}
            />
          </div>

          <div className="relative z-10 container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center space-y-8"
            >
              {/* Badge - Enhanced */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-primary/15 via-primary/20 to-primary/15 backdrop-blur-xl border border-primary/40 shadow-2xl shadow-primary/30 overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut"
                  }}
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  } as React.CSSProperties}
                />
                <Sparkles className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-primary drop-shadow-[0_0_8px_rgba(255,223,125,0.8)]" />
                <span className="relative z-10 text-xs sm:text-sm font-semibold text-primary drop-shadow-[0_0_4px_rgba(255,223,125,0.6)]">
                  Agence française de protection digitale
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-display font-bold leading-[1.1] tracking-tight"
              >
                <motion.span 
                  className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-2"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(255, 223, 125, 0.2), 0 0 40px rgba(255, 223, 125, 0.1)',
                      '0 0 30px rgba(255, 223, 125, 0.3), 0 0 60px rgba(255, 223, 125, 0.15)',
                      '0 0 20px rgba(255, 223, 125, 0.2), 0 0 40px rgba(255, 223, 125, 0.1)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                    WebkitFilter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
                  }}
                >
                À propos de
                <span className="text-primary"> Content Removal Desk</span>
                </motion.span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-xl sm:text-2xl lg:text-3xl text-zinc-200 max-w-4xl mx-auto leading-relaxed font-medium"
                style={{
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
                  WebkitFilter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
                }}
              >
                Depuis 2024, nous accompagnons les créateurs, talents et agences pour reprendre la main sur leurs contenus et leur image. Notre promesse : action, discrétion et résultats.
              </motion.p>
            </motion.div>

            {/* Stats Grid - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            >
              {coreStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative rounded-2xl border border-zinc-800/60 bg-gradient-to-br from-zinc-950/80 to-zinc-900/50 backdrop-blur-xl p-6 sm:p-8 text-center shadow-[0_18px_40px_rgba(0,0,0,0.35)] hover:border-primary/50 hover:shadow-[0_25px_50px_rgba(255,223,125,0.15)] transition-all duration-500 overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}
                  />
                  <div className="relative z-10">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                      {stat.value.includes('%') || stat.value.includes('+') || stat.value.includes('k') || isNaN(parseInt(stat.value)) ? (
                        stat.value
                      ) : (
                        <AnimatedNumber value={stat.value} />
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 uppercase tracking-[0.3em] font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pillars Section - Blended with Banner Glow */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden -mt-20 sm:-mt-28">
          {/* Seamless blend from banner glow - Enhanced for smooth transition */}
          <div className="absolute inset-0" style={{ willChange: 'opacity', transform: 'translateZ(0)' }}>
            {/* Continuation of banner glow - fading smoothly */}
            <div 
              className="absolute -top-20 sm:-top-28 left-1/2 -translate-x-1/2 w-[1200px] sm:w-[1600px] h-[500px] sm:h-[600px] rounded-full opacity-15 sm:opacity-20 blur-[100px] sm:blur-[120px]"
              style={{
                background: `radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, hsl(var(--primary) / 0.15) 30%, hsl(var(--primary) / 0.08) 50%, transparent 75%)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)'
              }}
            />
            {/* Subtle background glow */}
            <motion.div 
              className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl"
              animate={{
                opacity: [0.08, 0.12, 0.08],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'opacity, transform'
              } as React.CSSProperties}
            />
            {/* Smooth gradient overlay - Multi-layer for seamless blend */}
            <div 
              className="absolute top-0 left-0 right-0 h-40 sm:h-56 bg-gradient-to-b from-primary/12 via-primary/8 via-primary/5 via-primary/3 to-transparent"
              style={{
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)'
              }}
            />
            {/* Additional soft layer for extra smoothness */}
            <div 
              className="absolute top-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-b from-primary/6 via-primary/4 to-transparent"
              style={{
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                opacity: 0.7
              }}
            />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-4 sm:mb-6">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="text-xs sm:text-sm text-zinc-400 font-medium">Notre ADN</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Mission, conviction, promesse
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <Card className="h-full p-8 sm:p-10 bg-gradient-to-br from-zinc-900/70 to-zinc-950/70 backdrop-blur-xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-500 shadow-[0_18px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_25px_50px_rgba(255,223,125,0.15)] overflow-hidden relative">
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                      }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">{pillar.title}</h3>
                      </div>
                      <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">{pillar.copy}</p>
                    </div>
                </Card>
              </motion.div>
            ))}
            </div>
          </div>
        </section>

        {/* Timeline Section - Blended */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-primary/3 via-zinc-950/30 to-transparent">
          {/* Subtle glow continuation */}
          <div className="absolute inset-0" style={{ willChange: 'opacity', transform: 'translateZ(0)' }}>
            <motion.div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1000px] h-[200px] sm:h-[300px] rounded-full opacity-8 sm:opacity-12 blur-[80px] sm:blur-[100px]"
              animate={{
                opacity: [0.08, 0.12, 0.08],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: `radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 60%)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'opacity'
              } as React.CSSProperties}
            />
          </div>
          {/* Animated grid background */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          />

          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-4 sm:mb-6">
                <Rocket className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="text-xs sm:text-sm text-zinc-400 font-medium">Notre évolution</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Notre trajectoire
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto">
                De quelques demandes DMCA manuelles à un réseau international de partenaires officiels.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
              {timeline.map((step, index) => (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative"
                >
                  <Card className="h-full bg-gradient-to-br from-zinc-900/70 to-zinc-950/70 backdrop-blur-xl border border-zinc-800/50 p-8 sm:p-10 hover:border-primary/50 transition-all duration-500 shadow-[0_18px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_25px_50px_rgba(255,223,125,0.15)] overflow-hidden relative">
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                      }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <motion.div 
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-lg shadow-lg shadow-primary/20"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                        {step.year}
                        </motion.div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">{step.title}</h3>
                      </div>
                      <ul className="space-y-3 text-zinc-300 leading-relaxed">
                        {step.items.map((item, itemIndex) => (
                          <motion.li 
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + itemIndex * 0.1, duration: 0.4 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-base sm:text-lg">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section - Blended */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-transparent via-primary/2 to-transparent">
          <div className="absolute inset-0" style={{ willChange: 'opacity', transform: 'translateZ(0)' }}>
            <motion.div 
              className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary/6 rounded-full blur-3xl"
              animate={{
                opacity: [0.06, 0.1, 0.06],
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              style={{ 
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'opacity, transform'
              } as React.CSSProperties}
            />
            {/* Subtle top glow */}
            <motion.div 
              className="absolute top-0 left-1/3 w-[600px] sm:w-[800px] h-[150px] sm:h-[200px] rounded-full opacity-5 sm:opacity-8 blur-[60px] sm:blur-[80px]"
              animate={{
                opacity: [0.05, 0.08, 0.05],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: `radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 60%)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'opacity'
              } as React.CSSProperties}
            />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-4 sm:mb-6">
                <Users className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="text-xs sm:text-sm text-zinc-400 font-medium">Notre force</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Une équipe dédiée à votre protection
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-3">
            {teamHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <Card className="h-full p-8 sm:p-10 bg-gradient-to-br from-zinc-900/70 to-zinc-950/70 backdrop-blur-xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-500 shadow-[0_18px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_25px_50px_rgba(255,223,125,0.15)] overflow-hidden relative">
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                      }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <Shield className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">{highlight.title}</h3>
                      </div>
                      <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">{highlight.copy}</p>
                    </div>
                </Card>
              </motion.div>
            ))}
            </div>
          </div>
        </section>

        {/* Values Section - Blended */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-primary/2 via-zinc-950/30 to-transparent">
          {/* Subtle glow continuation */}
          <div className="absolute inset-0" style={{ willChange: 'opacity', transform: 'translateZ(0)' }}>
            <motion.div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[180px] sm:h-[250px] rounded-full opacity-6 sm:opacity-10 blur-[70px] sm:blur-[90px]"
              animate={{
                opacity: [0.06, 0.1, 0.06],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: `radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 65%)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'opacity'
              } as React.CSSProperties}
            />
          </div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-4 sm:mb-6">
                <Target className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="text-xs sm:text-sm text-zinc-400 font-medium">Nos fondations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Nos valeurs fondamentales
              </h2>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto">
                Les piliers qui guident chacune de nos décisions et de nos actions.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <Card className="h-full p-6 sm:p-8 bg-gradient-to-br from-zinc-900/70 to-zinc-950/70 backdrop-blur-xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-500 shadow-[0_18px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_25px_50px_rgba(255,223,125,0.15)] overflow-hidden relative">
                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          transform: 'translateZ(0)',
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden'
                        }}
                      />
                      <div className="relative z-10">
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center mb-5 text-primary shadow-lg shadow-primary/20"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                        <Icon className="h-6 w-6" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">{value.copy}</p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section - Blended with Strong Glow */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-primary/10">
          {/* Animated background - Strong glow matching banner */}
          <div className="absolute inset-0" style={{ willChange: 'opacity', transform: 'translateZ(0)' }}>
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1000px] h-[800px] sm:h-[1000px] rounded-full opacity-25 sm:opacity-30 blur-[100px] sm:blur-[120px]"
              animate={{
                opacity: [0.25, 0.35, 0.25],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: `radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.4) 35%, transparent 70%)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'opacity, transform',
                boxShadow: '0 0 200px rgba(255, 223, 125, 0.25), 0 0 400px rgba(255, 223, 125, 0.12)'
              } as React.CSSProperties}
            />
            {/* Additional glow layers */}
            <motion.div 
              className="absolute top-1/3 left-1/4 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] rounded-full opacity-15 sm:opacity-20 blur-[80px] sm:blur-[100px]"
              animate={{
                opacity: [0.15, 0.22, 0.15],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              style={{
                background: `radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 65%)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'opacity, transform'
              } as React.CSSProperties}
            />
          </div>

          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-primary/15 via-primary/20 to-primary/15 backdrop-blur-xl border border-primary/40 shadow-2xl shadow-primary/30"
              >
                <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span className="text-sm sm:text-base text-primary font-semibold">Prêt à passer à l'action ?</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight"
                style={{
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
                  WebkitFilter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
                }}
              >
                On s'occupe des fuites, tu te concentres sur ta création.
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
              >
                Rejoins les talents qui nous confient leurs contenus. Un agent dédié répond en quelques minutes.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
              >
                <motion.a
                  href="https://scan.contentremovaldesk.com/scan"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-3 px-8 sm:px-10 lg:px-12 py-5 sm:py-6 rounded-full bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary text-black font-semibold shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300 overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-200%', '200%'],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "easeInOut"
                    }}
                    style={{
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    } as React.CSSProperties}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                  Scan gratuit
                  <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>
                
                <motion.a
                  href="https://wa.me/32460236990"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 sm:px-10 lg:px-12 py-5 sm:py-6 rounded-full border-2 border-zinc-800 hover:border-primary/60 bg-black/50 backdrop-blur-xl text-zinc-300 hover:text-primary transition-all duration-300 font-semibold"
                >
                  <Users className="h-5 w-5" />
                  Parler à un expert
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default APropos;
