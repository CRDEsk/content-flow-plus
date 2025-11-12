import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, X, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

const Tarifs = () => {
  const [billing, setBilling] = useState<'monthly' | 'quarterly'>('monthly');

  useEffect(() => {
    // SEO optimization for Tarifs page
    document.title = "Tarifs & Plans | ContentRemovalDesk - Protection Digitale Abordable";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Plans de protection digitale adaptés à tous les créateurs. Essai gratuit 7 jours, Core Plan dès €199, Pro Plan €397. Suppression illimitée, surveillance 24/7.");
    }
  }, []);

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
        period: "/month",
        description: "Protection continue et automatisée pour créateurs actifs, avec tableau de bord, rapports mensuels et agent spécialisé dédié à votre protection.",
        tagline: "Votre protection mensuelle comprend",
        features: [
          "Scan intelligent hebdomadaire",
          "Suppression manuelle (50 liens/mois)",
          "Surveillance automatique des reposts",
          "Suivi en temps réel + retraits automatiques",
          "Désindexation moteur de recherches",
          "Tableau de bord privé",
          "Outils de scan avancés (Bing, Yandex…)",
          "Agent spécialisé dédié à votre protection"
        ],
        cta: "Commencer",
        variant: "primary" as const,
        highlighted: true
      },
      {
        name: "Elite Plan",
        price: "99",
        period: "/month",
        description: "Pour les créateurs à forte visibilité ou très exposés. Notre service le plus complet, discret et ultra réactif, avec agent spécialisé dédié à votre protection.",
        tagline: "Protection maximale + DMCA inclus",
        features: [
          "Scan intelligent quotidien",
          "Suppression illimitée & prioritaire",
          "Reconnaissance faciale & recherche AI",
          "Reposts retirés automatiquement",
          "Support prioritaire + gestionnaire dédié",
          "Enregistrement DMCA officiel",
          "Veille proactive 7j/7",
          "Agent spécialisé dédié à votre protection"
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
        price: "199",
        originalPrice: "237",
        period: "/3 mois",
        description: "Protection continue et automatisée pour créateurs actifs, avec tableau de bord, rapports mensuels et agent spécialisé dédié à votre protection.",
        tagline: "Votre protection mensuelle comprend",
        features: [
          "Scan intelligent hebdomadaire",
          "Suppression manuelle (50 liens/mois)",
          "Surveillance automatique des reposts",
          "Suivi en temps réel + retraits automatiques",
          "Désindexation moteur de recherches",
          "Tableau de bord privé",
          "Outils de scan avancés (Bing, Yandex…)",
          "Agent spécialisé dédié à votre protection"
        ],
        cta: "Commencer",
        variant: "primary" as const,
        highlighted: true
      },
      {
        name: "Elite Plan",
        price: "269",
        originalPrice: "297",
        period: "/3 mois",
        description: "Pour les créateurs à forte visibilité ou très exposés. Notre service le plus complet, discret et ultra réactif, avec agent spécialisé dédié à votre protection.",
        tagline: "Protection maximale + DMCA inclus",
        features: [
          "Scan intelligent quotidien",
          "Suppression illimitée & prioritaire",
          "Reconnaissance faciale & recherche AI",
          "Reposts retirés automatiquement",
          "Support prioritaire + gestionnaire dédié",
          "Enregistrement DMCA officiel",
          "Veille proactive 7j/7",
          "Agent spécialisé dédié à votre protection"
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
        { name: "Suppression manuelle", free: false, core: "50 liens/mois", elite: "Illimitée + prioritaire" },
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
        { name: "Gestionnaire dédié", free: false, core: false, elite: true },
        { name: "Agent spécialisé dédié à votre protection", free: false, core: true, elite: true }
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
    <div className="min-h-screen bg-black text-white antialiased">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-4 sm:mb-6"
            >
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">Tarifs</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2"
            >
              Commence à protéger ton contenu<br className="hidden sm:block" /> dès aujourd'hui.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg text-zinc-400 max-w-3xl mx-auto mb-6 sm:mb-10 px-4"
            >
              Simple, évolutif et sans prise de tête. Scans, suppressions<br className="hidden sm:block" />
              et mises à jour régulières tout est géré pour toi.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="inline-flex items-center gap-2 p-1 sm:p-1.5 rounded-full bg-zinc-900/50 border-2 border-zinc-800/50"
            >
              <motion.button
                onClick={() => setBilling('monthly')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-500 ${
                  billing === 'monthly'
                    ? 'bg-zinc-800 text-foreground shadow-lg'
                    : 'text-zinc-400 hover:text-foreground'
                }`}
              >
                Mensuel
              </motion.button>
              <motion.button
                onClick={() => setBilling('quarterly')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-500 ${
                  billing === 'quarterly'
                    ? 'bg-zinc-800 text-foreground shadow-lg'
                    : 'text-zinc-400 hover:text-foreground'
                }`}
              >
                Trimestriel
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {plans[billing].map((plan, index) => (
              <motion.div
                key={`${billing}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br ${
                  plan.highlighted
                    ? 'from-zinc-900/90 to-zinc-950/90 border-2 border-primary/50'
                    : 'from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50'
                } backdrop-blur-xl transition-all duration-500 hover:border-primary/50`}
              >
                {plan.badge && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + (index * 0.1) }}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2.5 sm:px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] sm:text-xs font-semibold"
                  >
                    {plan.badge}
                  </motion.div>
                )}

                <div className="p-5 sm:p-6 lg:p-8">
                  {/* Header */}
                  <div className="mb-5 sm:mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">{plan.name}</h3>
                    <div className="flex items-baseline gap-2 mb-3 sm:mb-4 flex-wrap">
                      {plan.originalPrice && (
                        <span className="text-xl sm:text-2xl text-zinc-600 line-through">€{plan.originalPrice}</span>
                      )}
                      <span className="text-4xl sm:text-5xl font-bold text-primary">€{plan.price}</span>
                      <span className="text-sm sm:text-base text-zinc-400">{plan.period}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{plan.description}</p>
                  </div>

                  {/* CTA */}
                  <Button
                    className={`w-full mb-5 sm:mb-6 rounded-full font-semibold transition-all duration-300 ${
                      plan.variant === 'primary'
                        ? 'bg-primary hover:bg-primary/90 text-black !important'
                        : 'bg-transparent border-2 border-zinc-500 hover:border-primary/60 text-white !important hover:text-white hover:bg-zinc-900/30'
                    }`}
                    size="lg"
                    asChild
                  >
                    <a href="https://espace.contentremovaldesk.com/auth?mode=signup" className="!text-white">
                      {plan.cta}
                    </a>
                  </Button>

                  {/* Features */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 mb-2 sm:mb-3">
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                      <span className="font-medium">{plan.tagline}</span>
                    </div>
                    <ul className="space-y-2 sm:space-y-3">
                      {plan.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + (index * 0.1) + (idx * 0.05), duration: 0.3 }}
                          className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm"
                        >
                          <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-zinc-300 leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Payment Methods */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-xs sm:text-sm text-zinc-500 mb-4 sm:mb-6">Méthodes de paiement acceptées</p>
            <div className="flex justify-center items-center gap-6 sm:gap-8 lg:gap-12 flex-wrap px-4">
              <img src="/visa-logo.png" alt="Visa" className="h-8 sm:h-10 lg:h-12 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="/mastercard-logo.png" alt="Mastercard" className="h-8 sm:h-10 lg:h-12 opacity-80 hover:opacity-100 transition-opacity" />
              <img src="/apple-pay-logo.svg" alt="Apple Pay" className="h-10 sm:h-12 lg:h-14 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-[10px] sm:text-xs text-zinc-600 mt-4 sm:mt-6 px-4">Paiement sécurisé. Traitement rapide après validation.</p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-6 sm:mb-8 text-center sm:text-left">
              Compare our plans
            </h2>
          </motion.div>

          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <table className="w-full border-collapse min-w-[600px] sm:min-w-[640px]">
              <thead>
                <tr className="border-b border-zinc-800/50">
                  <th className="text-left py-3 sm:py-4 px-2 sm:px-3 lg:px-4 text-xs sm:text-sm font-medium text-zinc-400 w-2/5 sm:w-1/2"></th>
                  <th className="text-center py-3 sm:py-4 px-2 sm:px-4">
                    <div className="text-xs sm:text-sm font-medium text-zinc-400">Free Trial</div>
                  </th>
                  <th className="text-center py-3 sm:py-4 px-2 sm:px-4 bg-zinc-900/30 rounded-t-2xl">
                    <div className="text-xs sm:text-sm font-medium text-zinc-400">Core Plan</div>
                  </th>
                  <th className="text-center py-3 sm:py-4 px-2 sm:px-4">
                    <div className="text-xs sm:text-sm font-medium text-zinc-400">Elite Plan</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, catIdx) => (
                  <>
                    <tr key={`cat-${catIdx}`} className="border-t border-zinc-800">
                      <td colSpan={4} className="py-2.5 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4 text-xs sm:text-sm lg:text-base font-bold text-foreground">
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, itemIdx) => (
                      <tr key={`item-${catIdx}-${itemIdx}`} className="border-t border-zinc-800/30 hover:bg-zinc-900/20">
                        <td className="py-2 sm:py-2.5 lg:py-3 px-2 sm:px-3 lg:px-4 text-[11px] sm:text-xs lg:text-sm text-zinc-400 leading-relaxed">{item.name}</td>
                        <td className="py-2 sm:py-2.5 lg:py-3 px-1.5 sm:px-2 lg:px-4 text-center text-[11px] sm:text-xs lg:text-sm">
                          {typeof item.free === 'boolean' ? (
                            item.free ? (
                              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary mx-auto" />
                            ) : (
                              <X className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-zinc-700 mx-auto" />
                            )
                          ) : (
                            <span className="text-zinc-300 text-[10px] sm:text-xs lg:text-sm">{item.free}</span>
                          )}
                        </td>
                        <td className="py-2 sm:py-2.5 lg:py-3 px-1.5 sm:px-2 lg:px-4 text-center text-[11px] sm:text-xs lg:text-sm bg-zinc-900/10">
                          {typeof item.core === 'boolean' ? (
                            item.core ? (
                              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary mx-auto" />
                            ) : (
                              <X className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-zinc-700 mx-auto" />
                            )
                          ) : (
                            <span className="text-zinc-300 text-[10px] sm:text-xs lg:text-sm">{item.core}</span>
                          )}
                        </td>
                        <td className="py-2 sm:py-2.5 lg:py-3 px-1.5 sm:px-2 lg:px-4 text-center text-[11px] sm:text-xs lg:text-sm">
                          {typeof item.elite === 'boolean' ? (
                            item.elite ? (
                              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary mx-auto" />
                            ) : (
                              <X className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-zinc-700 mx-auto" />
                            )
                          ) : (
                            <span className="text-zinc-300 text-[10px] sm:text-xs lg:text-sm">{item.elite}</span>
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
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-3xl text-center"
        >
          <Button
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-black font-bold rounded-full px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            asChild
          >
            <a href="https://scan.contentremovaldesk.com/scan">
              <span className="flex items-center justify-center gap-2 sm:gap-3">
                Effectuer un scan gratuit
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </Button>
          <p className="text-xs sm:text-sm text-zinc-500 mt-3 sm:mt-4">Aucune carte bancaire requise</p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Tarifs;