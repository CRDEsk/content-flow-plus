import { useEffect, useState, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scale, FileText, Shield, CheckCircle2, AlertCircle, Lock, Gavel, Globe, Eye, Zap, TrendingUp, Award, Users, Phone, ArrowRight, Mail, MessageCircle, HelpCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
const GlobeComponent = lazy(() => import("@/components/Globe"));
import AnimatedNumber from "@/components/AnimatedNumber";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EscaladesLegal = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // SEO optimization for Escalades & Legal page
    document.title = "Escalades & Actions Légales | ContentRemovalDesk - Protection Juridique Renforcée";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Service d'escalades légales et actions juridiques pour créateurs. Procédures DMCA, actions ICANN, dépôt de marques, injonctions judiciaires. 99.2% de réussite.");
    }

  }, []);

  const interventionDomains = [
    { icon: AlertCircle, text: "Sites pirates & forums de leaks" },
    { icon: Globe, text: "Hébergeurs & CDN internationaux" },
    { icon: FileText, text: "Registrars & domaines (ICANN, abuse contacts)" },
    { icon: Gavel, text: "Actions légales et ordonnances judiciaires" },
    { icon: Shield, text: "Protection d'image & identité digitale" },
    { icon: Eye, text: "Veille juridique & action immédiate" },
    { icon: Zap, text: "Pressions institutionnelles & collaborations officielles" },
    { icon: Users, text: "Accompagnement juridique international" },
  ];

  const stats = [
    { number: "10+", label: "partenaires juridiques & institutionnels" },
    { number: "15+", label: "juridictions couvertes" },
    { number: "20+", label: "hébergeurs & registrars déjà traités" },
    { number: "5+", label: "Réseau actif d'avocats spécialisés" },
  ];

  const results = [
    { label: "Takedowns réussis", percentage: "87%" },
    { label: "Escalades institutionnelles", percentage: "39%" },
    { label: "Procédures juridiques engagées", percentage: "66%" },
  ];

  const services = [
    {
      number: "01",
      title: "Escalades Techniques",
      description: "Nous intervenons directement auprès des hébergeurs, registrars et réseaux pour signaler et forcer la suppression des contenus."
    },
    {
      number: "02",
      title: "Procédures Avancées",
      description: "Quand les démarches classiques échouent, nous activons des recours renforcés : ICANN, abuse contacts, et pressions institutionnelles."
    },
    {
      number: "03",
      title: "Actions Légales",
      description: "Nous mobilisons nos partenaires juridiques pour obtenir des injonctions, ordonnances et décisions contraignantes face aux plateformes récalcitrantes."
    },
    {
      number: "04",
      title: "Protection Continue",
      description: "Surveillance et suivi réguliers des contenus supprimés afin d'éviter les réapparitions et garantir une protection durable."
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analyse du dossier",
      description: "identification des bases légales (droits d'auteur, marque, image)."
    },
    {
      step: "02",
      title: "Signalements aux autorités",
      description: "hébergeurs, registrars, autorités (ICANN, CNIL, etc.) et mise en pression officielle."
    },
    {
      step: "03",
      title: "Actions légales",
      description: "Si nécessaire, lancement d'actions légales : injonctions, ordonnances et collaborations avec avocats spécialisés."
    },
  ];

  const trademarkServices = [
    {
      title: "Dépôt de marque (INPI, EUIPO, OMPI)",
      description: "Rédaction et dépôt de vos marques en France, en Europe et à l'international, avec un suivi complet du processus administratif et légal."
    },
    {
      title: "Surveillance & opposition",
      description: "Mise en place d'une veille active pour détecter toute utilisation abusive ou tentative d'imitation, et dépôt d'oppositions officielles lorsque c'est nécessaire."
    },
    {
      title: "Actions auprès des registrars & ICANN",
      description: "Intervention directe en cas de cybersquatting, avec démarches auprès des registrars, hébergeurs et organismes de régulation (ICANN, WIPO)."
    },
    {
      title: "Escalades juridiques",
      description: "Recours aux actions légales et contentieuses, menées avec nos avocats partenaires spécialisés en propriété intellectuelle et droit international."
    },
  ];

  const trademarkStats = [
    { number: "40+", label: "dépôts de marques" },
    { number: "10+", label: "procédures internationales" },
    { number: "8", label: "avocats spécialisés" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={mounted ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6"
              >
                <Scale className="w-4 h-4 text-primary" />
                <span className="text-sm text-zinc-400">Service spécialisé pour créateurs</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight"
              >
                Escalades & Protection{" "}
                <span className="text-primary">Légale sur mesure</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-zinc-400 mb-8 leading-relaxed"
              >
                Intervention dédiée pour les cas sensibles : retraits difficiles, marques déposées, 
                dépôts de plainte et actions légales
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Button
                  size="lg"
                  className="group"
                  type="button"
                  data-cal-namespace="diagnostic-createur"
                  data-cal-link="contentremovaldesk/diagnostic-createur"
                  data-cal-config='{"layout":"month_view"}'
                >
                Demander une escalade
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              </motion.div>
            </motion.div>
            
                    <div className="relative hidden lg:block">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl" />
                      <div className="relative rounded-3xl h-[500px] flex items-center justify-center">
                        <Suspense fallback={
                          <div className="flex items-center justify-center h-full">
                            <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                          </div>
                        }>
                          <GlobeComponent key="globe-escalade-static" />
                        </Suspense>
                      </div>
                    </div>
          </div>
        </div>
      </section>

      {/* Intervention Domains */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/20 to-transparent" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Domaines d'intervention
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              De la détection à l'action en justice nous suivons vos dossiers les plus 
              complexes à chaque étape.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interventionDomains.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <Card className="p-6 bg-zinc-900/50 border-zinc-800 hover:border-primary/50 transition-all group h-full">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Icon className="w-8 h-8 text-primary mb-4" />
                    </motion.div>
                    <p className="text-sm text-zinc-300">{domain.text}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Animated grid background */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-8">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm text-zinc-400 font-medium">Notre réseau juridique</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Des résultats<br />
              <span className="gradient-text">qui parlent d'eux-mêmes</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const gradients = [
                "from-primary/20 to-yellow-500/20",
                "from-blue-500/20 to-cyan-500/20",
                "from-green-500/20 to-emerald-500/20",
                "from-purple-500/20 to-pink-500/20",
              ];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={mounted ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-6 sm:p-8 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500"
                >
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 text-center">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary mb-3">
                      <AnimatedNumber value={stat.number} duration={2} />
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {stat.label}
                    </p>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Résultats
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Des retraits aux actions judiciaires, notre expertise produit des résultats.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {results.map((result, index) => {
              const resultGradients = [
                "from-primary/20 to-yellow-500/20",
                "from-green-500/20 to-emerald-500/20",
                "from-blue-500/20 to-cyan-500/20",
              ];
              return (
              <motion.div
                key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={mounted ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-8 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500"
              >
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${resultGradients[index % resultGradients.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 text-center">
                  <motion.div
                      className="text-5xl sm:text-6xl font-bold font-display text-primary mb-4"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={mounted ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  >
                    <AnimatedNumber value={result.percentage} duration={2} />
                  </motion.div>
                    <div className="text-lg text-zinc-300 font-medium">{result.label}</div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Nos Services d'Escalade & Protection
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={mounted ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5, type: "spring", stiffness: 100 }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <Card className="p-8 bg-zinc-900/50 border-zinc-800 hover:border-primary/50 transition-all h-full">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="text-5xl font-bold text-primary/30"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {service.number}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Notre processus d'escalade
            </h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              Un plan clair, en plusieurs étapes, pour agir quand les retraits classiques échouent.
            </p>
          </div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={mounted ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5, type: "spring", stiffness: 100 }}
                whileHover={{ x: 8, scale: 1.01 }}
              >
                <Card className="p-8 bg-zinc-900/50 border-zinc-800 hover:border-primary/50 transition-all">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <motion.div
                      className="text-6xl font-bold text-primary/20"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {step.step}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trademark Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Marques déposées
            </h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              Nous aidons nos clients à déposer, protéger et défendre leurs marques en France, 
              en Europe et à l'international
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {trademarkServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <Card className="p-8 bg-zinc-900/50 border-zinc-800 hover:border-primary/50 transition-all h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    </motion.div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-zinc-400 ml-10 leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {trademarkStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={mounted ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.4, type: "spring", stiffness: 150 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <Card className="p-4 sm:p-6 bg-zinc-900/50 border-zinc-800 text-center hover:border-primary/50 transition-all duration-300">
                  <motion.div
                    className="text-3xl sm:text-4xl font-bold text-primary mb-2"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={mounted ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                  >
                    <AnimatedNumber value={stat.number} duration={2} />
                  </motion.div>
                  <div className="text-xs sm:text-sm text-zinc-400">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Animated background grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-8">
              <HelpCircle className="h-4 w-4 text-primary" />
              <span className="text-sm text-zinc-400 font-medium">Questions fréquentes</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
              FAQ Escalades & Légal
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-8">
              Des réponses précises pour comprendre nos procédures renforcées et notre réseau juridique international.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@contentremovaldesk.com"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 hover:border-primary/50 rounded-full transition-all duration-300"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-zinc-300 group-hover:text-foreground">Envoyer un email</span>
              </a>
          </div>
          </motion.div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[{
              question: "Quand avez-vous recours à une escalade légale ?",
              answer: "Nous lançons ce type de procédure uniquement quand un site ignore nos demandes DMCA classiques. C'est notre solution de dernier recours, mais elle permet d'obtenir des résultats même face aux plateformes les plus résistantes."
            },{
              question: "Combien de temps dure une procédure ?",
              answer: "En moyenne, une escalade juridique prend 2 à 3 mois. Cela dépend de la juridiction (Russie, Moldavie, Europe, etc.) et du niveau de résistance du site ou de l'hébergeur."
            },{
              question: "Quels résultats puis-je espérer ?",
              answer: "Les escalades permettent d'obtenir des ordonnances de retrait, des blocages techniques, ou encore de faire pression via les hébergeurs et registrars. Dans la majorité des cas, les contenus sont retirés ou rendus inaccessibles."
            },{
              question: "Est-ce que je suis obligée d'aller au tribunal ?",
              answer: "Non. Nous travaillons avec nos avocats partenaires qui s'occupent de la procédure. Vous n'avez pas besoin de comparaître, sauf cas exceptionnel."
            },{
              question: "Est-ce que ces actions protègent aussi mon image/marque ?",
              answer: "Oui. En plus des retraits, nous pouvons utiliser le droit des marques et de l'image pour bloquer l'utilisation abusive de votre pseudo, photos ou identité."
            },{
              question: "Et si le site réapparaît après la procédure ?",
              answer: "Nous gardons une veille active et relançons si nécessaire. Une escalade réussie crée un précédent légal qui renforce les actions futures et accélère les retraits."
            },{
              question: "Est-ce que c'est risqué pour moi ?",
              answer: "Non, tout est géré de manière confidentielle et discrète. Votre nom n'apparaît pas publiquement : c'est notre structure et nos avocats qui portent les démarches en votre nom."
            }].map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="group relative border border-zinc-800/60 rounded-2xl px-6 bg-gradient-to-br from-zinc-900/40 to-zinc-950/40 backdrop-blur-md hover:border-primary/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <AccordionTrigger className="text-left hover:no-underline py-6 relative">
                  <span className="font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pb-6 leading-relaxed relative">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
            </Accordion>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center mt-12"
          >
          </motion.div>
        </div>
      </section>

      {/* Official Partners Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-foreground">
              Nos interlocuteurs & instances officielles
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10">
              {[
                { src: "/icann-logo.svg", alt: "ICANN" },
                { src: "/inpi-logo.svg", alt: "INPI" },
                { src: "/cnil-logo.svg", alt: "CNIL" },
                { src: "/cloudflare-logo.svg", alt: "Cloudflare" },
                { src: "/euipo-logo.svg", alt: "EUIPO" },
                { src: "/wipo-logo.svg", alt: "WIPO" },
              ].map((partner, index) => (
              <motion.div
                  key={partner.alt}
                  initial={{ opacity: 0, scale: 0.85 }}
                animate={mounted ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.45 }}
                  whileHover={{ scale: 1.05, opacity: 1 }}
                  className="group relative flex items-center justify-center w-48 sm:w-56 lg:w-64 h-24 sm:h-28 lg:h-32 rounded-2xl border border-zinc-800/60 bg-zinc-950/60 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.35)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="relative z-10 max-h-16 sm:max-h-20 lg:max-h-24 w-auto object-contain drop-shadow-[0_8px_18px_rgba(201,165,82,0.25)]"
                />
              </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EscaladesLegal;
