import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scale, FileText, Shield, Target, CheckCircle2, AlertCircle, Lock, Gavel, Globe, Eye, Zap, TrendingUp, Award, Users, Phone, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EscaladesLegal = () => {
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
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
                <Scale className="w-4 h-4 text-primary" />
                <span className="text-sm text-zinc-400">Service spécialisé pour créateurs</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Escalades & Protection{" "}
                <span className="text-primary">Légale sur mesure</span>
              </h1>
              
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                Intervention dédiée pour les cas sensibles : retraits difficiles, marques déposées, 
                dépôts de plainte et actions légales
              </p>
              
              <Button size="lg" className="group">
                Demander une escalade
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative glass-strong rounded-3xl p-8 border border-primary/20">
                <Scale className="w-32 h-32 text-primary mx-auto opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intervention Domains */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Domaines d'intervention
            </h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              De la détection à l'action en justice nous suivons vos dossiers les plus 
              complexes à chaque étape.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interventionDomains.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <Card key={index} className="p-6 bg-zinc-900/50 border-zinc-800 hover:border-primary/50 transition-all group">
                  <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-zinc-300">{domain.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                Notre engagement
              </h2>
              <p className="text-lg text-zinc-400 mb-6">
                Des solutions claires et efficaces, adaptées aux cas les plus complexes
              </p>
              <Button variant="outline" className="group">
                Demander une prise en charge
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="mt-12 space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  Notre approche repose sur la transparence, la réactivité et une expertise stratégique. 
                  Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs enjeux 
                  et agir rapidement.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 bg-zinc-900/50 border-zinc-800 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Résultats
            </h2>
            <p className="text-lg text-zinc-400">
              Des retraits aux actions judiciaires, notre expertise produit des résultats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="p-8 bg-zinc-900/50 border-zinc-800 text-center">
                <div className="text-5xl font-bold text-primary mb-4">{result.percentage}</div>
                <div className="text-zinc-300">{result.label}</div>
              </Card>
            ))}
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
              <Card key={index} className="p-8 bg-zinc-900/50 border-zinc-800 hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-5xl font-bold text-primary/30">{service.number}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-zinc-400">{service.description}</p>
                  </div>
                </div>
              </Card>
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
              <Card key={index} className="p-8 bg-zinc-900/50 border-zinc-800">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="text-6xl font-bold text-primary/20">{step.step}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-zinc-400">{step.description}</p>
                  </div>
                </div>
              </Card>
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
              <Card key={index} className="p-8 bg-zinc-900/50 border-zinc-800">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-zinc-400 ml-10">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 mb-12">
            {trademarkStats.map((stat, index) => (
              <Card key={index} className="p-6 bg-zinc-900/50 border-zinc-800 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="group">
              Déposez votre marque avec confiance
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              FAQ
            </h2>
            <p className="text-lg text-zinc-400">
              Des réponses simples à vos questions les plus complexes.
            </p>
          </div>

          <Card className="p-8 bg-zinc-900/50 border-zinc-800 mb-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-zinc-800">
                <AccordionTrigger className="text-left hover:text-primary">
                  Qu'est-ce qu'une escalade légale ?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  Une escalade légale intervient lorsque les démarches standard de retrait échouent. 
                  Nous activons alors des procédures renforcées impliquant des autorités, des registrars 
                  et si nécessaire, des actions judiciaires.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-zinc-800">
                <AccordionTrigger className="text-left hover:text-primary">
                  Combien de temps prend une procédure d'escalade ?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  Le délai varie selon la complexité du cas. Les escalades techniques prennent généralement 
                  5-10 jours, tandis que les actions légales peuvent nécessiter plusieurs semaines selon les 
                  juridictions impliquées.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-zinc-800">
                <AccordionTrigger className="text-left hover:text-primary">
                  Quels sont les coûts associés ?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  Les tarifs dépendent du type d'intervention requise. Nous proposons une évaluation 
                  gratuite de votre dossier avant toute action, avec un devis détaillé et transparent.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <div className="text-center">
            <Button variant="outline" size="lg" className="group">
              <Phone className="mr-2 w-4 h-4" />
              Parler à un expert
            </Button>
          </div>
        </div>
      </section>

      {/* Official Partners Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h3 className="text-2xl font-bold text-center mb-12">
            Nos interlocuteurs & instances officielles
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-zinc-400 font-mono text-sm">ICANN</div>
            <div className="text-zinc-400 font-mono text-sm">INPI</div>
            <div className="text-zinc-400 font-mono text-sm">EUIPO</div>
            <div className="text-zinc-400 font-mono text-sm">CNIL</div>
            <div className="text-zinc-400 font-mono text-sm">WIPO</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EscaladesLegal;
