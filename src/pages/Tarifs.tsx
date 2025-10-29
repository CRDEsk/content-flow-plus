import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, X, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Tarifs = () => {
  const [billing, setBilling] = useState<'monthly' | 'quarterly'>('monthly');

  const plans = {
    monthly: [
      {
        name: "Free Trial (7 jours)",
        price: "0",
        period: "/une fois",
        description: "Découvre la protection CRD sans engagement.",
        tagline: "Scan illimité + 5 suppressions réelles offertes.",
        features: [
          "Audit complet de ton nom et pseudo",
          "Retrait de 5 liens fuites",
          "Rapport avant / après suppression",
          "Accès au tableau de bord complet",
          "Sans carte ni engagement"
        ],
        cta: "Essayer gratuitement",
        variant: "outline" as const
      },
      {
        name: "Core Plan",
        badge: "Préféré des créateurs",
        price: "79",
        originalPrice: "199",
        period: "/month",
        description: "Protection continue et automatisée pour créateurs actifs, avec tableau de bord et rapports mensuels.",
        tagline: "Votre protection mensuelle comprend",
        features: [
          "Scan intelligent hebdomadaire",
          "Suppression manuelle (50 liens/mois)",
          "Surveillance automatique des reposts",
          "Suivi en temps réel + retraits automatiques",
          "Désindexation moteur de recherches",
          "Tableau de bord privé",
          "Outils de scan avancés (Bing, Yandex…)"
        ],
        cta: "Commencer",
        variant: "primary" as const,
        highlighted: true
      },
      {
        name: "Elite Plan",
        price: "99",
        period: "/month",
        description: "Pour les créateurs à forte visibilité ou très exposés. Notre service le plus complet, discret et ultra réactif.",
        tagline: "Protection maximale + DMCA inclus",
        features: [
          "Scan intelligent quotidien",
          "Suppression illimitée & prioritaire",
          "Reconnaissance faciale & recherche AI",
          "Reposts retirés automatiquement",
          "Support prioritaire + gestionnaire dédié",
          "Enregistrement DMCA officiel",
          "Veille proactive 7j/7"
        ],
        cta: "Activer",
        variant: "outline" as const
      }
    ],
    quarterly: [
      {
        name: "Free Trial (7 jours)",
        price: "0",
        period: "/une fois",
        description: "Découvre la protection CRD sans engagement.",
        tagline: "Scan illimité + 5 suppressions réelles offertes.",
        features: [
          "Audit complet de ton nom et pseudo",
          "Retrait manuel et ciblé sans limite de liens",
          "Rapport avant / après suppression",
          "Accès au tableau de bord complet",
          "Sans carte ni engagement"
        ],
        cta: "Essayer gratuitement",
        variant: "outline" as const
      },
      {
        name: "Core Plan",
        badge: "Préféré des créateurs",
        price: "199",
        period: "/mois",
        description: "Protection continue et automatisée pour créateurs actifs, avec tableau de bord et rapports mensuels.",
        tagline: "Votre protection mensuelle comprend",
        features: [
          "Scan intelligent hebdomadaire",
          "Suppression manuelle (50 liens/mois)",
          "Surveillance automatique des reposts",
          "Suivi en temps réel + retraits automatiques",
          "Désindexation moteur de recherches",
          "Tableau de bord privé",
          "Outils de scan avancés (Bing, Yandex…)"
        ],
        cta: "Commencer",
        variant: "primary" as const,
        highlighted: true
      },
      {
        name: "Elite Plan",
        price: "269",
        period: "/mois",
        description: "Pour les créateurs à forte visibilité ou très exposés. Notre service le plus complet, discret et ultra réactif.",
        tagline: "Protection maximale + DMCA inclus",
        features: [
          "Scan intelligent quotidien",
          "Suppression illimitée & prioritaire",
          "Reconnaissance faciale & recherche AI",
          "Reposts retirés automatiquement",
          "Support prioritaire + gestionnaire dédié",
          "Enregistrement DMCA officiel",
          "Veille proactive 7j/7"
        ],
        cta: "Activer",
        variant: "outline" as const
      }
    ]
  };

  const comparisonFeatures = [
    {
      category: "Fonctionnalités essentielles",
      items: [
        { name: "Scan intelligent IA", free: "1 scan complet", core: "Hebdomadaire", elite: "Quotidien" },
        { name: "Suppression manuelle", free: "Illimitée", core: "50 liens/mois", elite: "Illimitée + prioritaire" },
        { name: "Suppression automatique", free: false, core: true, elite: true },
        { name: "Désindexation moteurs de recherche", free: false, core: true, elite: true },
        { name: "Rapport PDF", free: "1 rapport avec preuves", core: "Rapport mensuel", elite: "Rapport complet" },
        { name: "Veille proactive 7j/7", free: false, core: "Standard", elite: "Avec alertes avancées" },
        { name: "Whitelisting de partenaires", free: false, core: false, elite: true }
      ]
    },
    {
      category: "Tableau de bord & visibilité",
      items: [
        { name: "Tableau de bord privé", free: true, core: true, elite: true },
        { name: "Suivi en temps réel", free: false, core: true, elite: true },
        { name: "Historique des retraits", free: false, core: true, elite: true },
        { name: "Badge \"Protégé par ContentRemovalDesk\"", free: false, core: false, elite: true }
      ]
    },
    {
      category: "Outils Premium & IA",
      items: [
        { name: "Surveillance automatique des reposts", free: false, core: true, elite: true },
        { name: "Reconnaissance faciale (images/vidéos)", free: false, core: false, elite: true },
        { name: "Suivi BING/YANDEX/YAHOO", free: false, core: false, elite: true },
        { name: "Outils de scan Telegram", free: false, core: false, elite: true }
      ]
    },
    {
      category: "Protection Réseaux & Imposteurs",
      items: [
        { name: "Signalement des comptes fake / usurpation", free: false, core: true, elite: true },
        { name: "Suppression réseaux sociaux", free: false, core: false, elite: true },
        { name: "Veille quotidienne sur Telegram / Instagram", free: false, core: false, elite: true }
      ]
    },
    {
      category: "Support & service client",
      items: [
        { name: "Support email", free: true, core: true, elite: true },
        { name: "Support prioritaire", free: false, core: false, elite: true },
        { name: "Gestionnaire dédié", free: false, core: false, elite: true }
      ]
    },
    {
      category: "Fonctionnalités supplémentaires",
      items: [
        { name: "Enregistrement copyright (DMCA)", free: false, core: "190€", elite: "150€", special: "Inclus" },
        { name: "Nom de domaine personnalisé", free: false, core: false, elite: true },
        { name: "Scan Telegram caché", free: false, core: false, elite: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black antialiased">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-6">
              <span className="text-sm text-zinc-400 font-medium">Tarifs</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Commence à protéger ton contenu<br />dès aujourd'hui.
            </h1>
            
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto mb-10">
              Simple, évolutif et sans prise de tête. Scans, suppressions<br />
              et mises à jour régulières tout est géré pour toi.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-zinc-900/50 border border-zinc-800/50">
              <button
                onClick={() => setBilling('monthly')}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  billing === 'monthly'
                    ? 'bg-zinc-800 text-foreground'
                    : 'text-zinc-400 hover:text-foreground'
                }`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setBilling('quarterly')}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  billing === 'quarterly'
                    ? 'bg-zinc-800 text-foreground'
                    : 'text-zinc-400 hover:text-foreground'
                }`}
              >
                Trimestriel
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans[billing].map((plan, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${
                  plan.highlighted
                    ? 'from-zinc-900/90 to-zinc-950/90 border-2 border-primary/50'
                    : 'from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50'
                } backdrop-blur-xl transition-all duration-500 hover:border-primary/50`}
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold">
                    {plan.badge}
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      {plan.originalPrice && (
                        <span className="text-2xl text-zinc-600 line-through">€{plan.originalPrice}</span>
                      )}
                      <span className="text-5xl font-bold text-primary">€{plan.price}</span>
                      <span className="text-zinc-400">{plan.period}</span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">{plan.description}</p>
                  </div>

                  {/* CTA */}
                  <Button
                    className={`w-full mb-6 rounded-full font-semibold ${
                      plan.variant === 'primary'
                        ? 'bg-primary hover:bg-primary/90 text-black'
                        : 'bg-transparent border-2 border-zinc-700 hover:border-primary text-foreground'
                    }`}
                    size="lg"
                    asChild
                  >
                    <a href="https://espace.contentremovaldesk.com/auth?mode=signup" target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
                  </Button>

                  {/* Features */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-400 mb-3">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="font-medium">{plan.tagline}</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-zinc-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="text-center mb-16">
            <p className="text-sm text-zinc-500 mb-6">Méthodes de paiement acceptées</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {/* Stripe */}
              <div className="flex items-center justify-center w-16 h-10">
                <svg viewBox="0 0 60 25" className="w-full h-full">
                  <path fill="#635BFF" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.93 0 1.85 6.29.97 6.29 5.88z"/>
                </svg>
              </div>
              
              {/* Apple Pay */}
              <div className="flex items-center justify-center w-16 h-10">
                <svg viewBox="0 0 50 20" className="w-full h-full">
                  <g fill="#000">
                    <path d="M9.536 2.458c.568-.673 1.016-1.609.905-2.458-.875.03-1.941.583-2.571 1.256-.537.642-1.016 1.609-.875 2.549.964.03 1.91-.582 2.541-1.347zm.904 1.486c-1.411-.08-2.6.783-3.27.783-.67 0-1.697-.753-2.8-.722-1.457.03-2.787.843-3.537 2.15-1.517 2.611-.384 6.491 1.086 8.611.711 1.047 1.567 2.214 2.67 2.184 1.055-.031 1.456-.672 2.735-.672s1.617.672 2.784.642c1.15-.03 1.878-1.047 2.589-2.123a10.93 10.93 0 0 0 1.166-2.367c-.031 0-2.239-.843-2.27-3.356-.031-2.122 1.74-3.137 1.819-3.197-1.005-1.457-2.56-1.608-3.089-1.638z"/>
                    <path d="M26.172 15.594h-1.456l-.798-2.52h-2.77l-.766 2.52h-1.425l2.754-8.581h1.74zm-2.489-3.566l-.735-2.274c-.064-.223-.255-.831-.542-1.883h-.032c-.064.32-.239.927-.511 1.883l-.718 2.274h2.538zm11.677 3.566h-1.313v-4.203c0-1.344-.51-2.016-1.503-2.016-.526 0-.942.192-1.232.575-.289.384-.447.832-.447 1.313v4.331h-1.313v-5.743c0-.48-.016-.991-.031-1.535h1.134l.08.926h.032c.463-.703 1.15-1.07 2.047-1.07 1.64 0 2.546 1.134 2.546 3.246z"/>
                    <path d="M44.82 9.555c0 .511-.191.927-.59 1.247-.367.32-.863.479-1.487.479-.592 0-1.087-.095-1.503-.255v-1.2c.527.239 1.054.351 1.566.351.32 0 .575-.064.766-.207.16-.127.239-.303.239-.511 0-.192-.08-.368-.239-.527-.16-.16-.447-.352-.862-.591-.943-.527-1.408-1.166-1.408-1.898 0-.527.191-.958.591-1.295.399-.352.91-.511 1.551-.511.543 0 1.007.08 1.408.239v1.166c-.431-.207-.895-.303-1.376-.303-.303 0-.543.064-.718.207-.143.127-.223.287-.223.479 0 .192.08.352.239.511.143.127.415.303.798.511.527.287.91.591 1.166.894.271.336.383.72.383 1.214z"/>
                  </g>
                </svg>
              </div>

              {/* Mastercard */}
              <div className="flex items-center justify-center w-16 h-10">
                <svg viewBox="0 0 50 30" className="w-full h-full">
                  <circle cx="15" cy="15" r="13" fill="#EB001B"/>
                  <circle cx="35" cy="15" r="13" fill="#F79E1B"/>
                  <path d="M25 5.5a12.95 12.95 0 0 0 0 19 12.95 12.95 0 0 0 0-19z" fill="#FF5F00"/>
                </svg>
              </div>

              {/* Visa */}
              <div className="flex items-center justify-center w-16 h-10">
                <svg viewBox="0 0 50 16" className="w-full h-full">
                  <path fill="#1434CB" d="M18.742 1.453h-3.421l-5.298 13.094h3.432l1.053-2.615h3.827l.594 2.615h3.014zm-3.976 8.11l1.425-3.54.797 3.54zm10.812-8.11h-2.588l-4.34 13.094h3.432l.839-2.159h2.962l.375 2.159h3.014zm-3.665 8.11l1.149-2.972.527 2.972zm15.17-8.11h-3.223l-2.82 9.56-1.15-9.56h-3.54l2.245 12.204c.132.593-.022 1.047-.352 1.323-.286.286-.726.418-1.27.418h-1.578v2.18h2.159c1.19 0 2.115-.242 2.765-.748.638-.495 1.069-1.27 1.29-2.324zm8.626-1.19c-1.015-.572-2.445-.858-4.317-.858-2.379 0-4.185.583-5.418 1.732-1.223 1.138-1.843 2.753-1.843 4.823 0 1.963.583 3.488 1.732 4.559 1.16 1.069 2.787 1.611 4.867 1.611 1.798 0 3.213-.275 4.252-.814v-2.511c-1.15.627-2.423.935-3.817.935-1.18 0-2.115-.286-2.798-.869-.682-.583-1.026-1.391-1.026-2.423 0-1.069.352-1.909 1.058-2.511.693-.604 1.633-.902 2.809-.902 1.378 0 2.62.319 3.73.957z"/>
                </svg>
              </div>

              {/* Apple Pay text */}
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                  <path fill="#000" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09l-.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              </div>
            </div>
            <p className="text-xs text-zinc-600 mt-6">Paiement sécurisé. Traitement rapide après validation.</p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950/50">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-8">
              Compare our plans
            </h2>
          </div>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-zinc-800/50">
                  <th className="text-left py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-zinc-400 w-2/5 sm:w-1/2"></th>
                  <th className="text-center py-4 px-2 sm:px-4">
                    <div className="text-xs sm:text-sm font-medium text-zinc-400">Free Trial</div>
                    <div className="text-lg sm:text-xl font-bold text-primary mt-1">€0</div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="mt-2 rounded-full text-xs sm:text-sm px-3 sm:px-4"
                      asChild
                    >
                      <a href="https://espace.contentremovaldesk.com/auth?mode=signup" target="_blank" rel="noopener noreferrer">
                        Essayer
                      </a>
                    </Button>
                  </th>
                  <th className="text-center py-4 px-2 sm:px-4 bg-zinc-900/30 rounded-t-2xl">
                    <div className="text-xs sm:text-sm font-medium text-zinc-400">Core Plan</div>
                    <div className="text-lg sm:text-xl font-bold text-primary mt-1">€79 / mois</div>
                    <Button 
                      size="sm" 
                      className="mt-2 rounded-full bg-primary text-black hover:bg-primary/90 text-xs sm:text-sm px-3 sm:px-4"
                      asChild
                    >
                      <a href="https://espace.contentremovaldesk.com/auth?mode=signup" target="_blank" rel="noopener noreferrer">
                        Commencer
                      </a>
                    </Button>
                  </th>
                  <th className="text-center py-4 px-2 sm:px-4">
                    <div className="text-xs sm:text-sm font-medium text-zinc-400">Elite Plan</div>
                    <div className="text-lg sm:text-xl font-bold text-primary mt-1">€99 / mois</div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="mt-2 rounded-full text-xs sm:text-sm px-3 sm:px-4"
                      asChild
                    >
                      <a href="https://espace.contentremovaldesk.com/auth?mode=signup" target="_blank" rel="noopener noreferrer">
                        Activer
                      </a>
                    </Button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, catIdx) => (
                  <>
                    <tr key={`cat-${catIdx}`} className="border-t border-zinc-800">
                      <td colSpan={4} className="py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base font-bold text-foreground">
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, itemIdx) => (
                      <tr key={`item-${catIdx}-${itemIdx}`} className="border-t border-zinc-800/30 hover:bg-zinc-900/20">
                        <td className="py-2 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm text-zinc-400">{item.name}</td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm">
                          {typeof item.free === 'boolean' ? (
                            item.free ? (
                              <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mx-auto" />
                            ) : (
                              <X className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-700 mx-auto" />
                            )
                          ) : (
                            <span className="text-zinc-300 text-xs sm:text-sm">{item.free}</span>
                          )}
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm bg-zinc-900/10">
                          {typeof item.core === 'boolean' ? (
                            item.core ? (
                              <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mx-auto" />
                            ) : (
                              <X className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-700 mx-auto" />
                            )
                          ) : (
                            <span className="text-zinc-300 text-xs sm:text-sm">{item.core}</span>
                          )}
                        </td>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs sm:text-sm">
                          {typeof item.elite === 'boolean' ? (
                            item.elite ? (
                              <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mx-auto" />
                            ) : (
                              <X className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-700 mx-auto" />
                            )
                          ) : (
                            <span className="text-zinc-300 text-xs sm:text-sm">{item.elite}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <Button
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-black font-bold rounded-full px-10 py-6 text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://espace.contentremovaldesk.com/auth?mode=signup" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-3">
                Effectuer un scan gratuit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </Button>
          <p className="text-sm text-zinc-500 mt-4">Aucune carte bancaire requise</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tarifs;