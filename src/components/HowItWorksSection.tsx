import { useState } from "react";

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Scan complet",
      badge: "Détection intelligente, scan global & audit manuel",
      title: "Protéger ton nom.",
      titleHighlight: "Défendre ton image.",
      description: "Nous lançons une détection intelligente sur l'ensemble du web : sites de leaks, forums, moteurs de recherche, hébergeurs, etc. Chaque lien est identifié, analysé et classé par niveau de gravité. Nos agents vérifient manuellement pour s'assurer qu'aucune fuite ne passe entre les mailles du filet.",
      features: [
        "Agent propriétaire de détection intelligente",
        "Analyse complète par nom, pseudo, contenu privé",
        "Classement automatique par priorité"
      ]
    },
    {
      label: "Signalement",
      badge: "Soumissions puissantes + suppression Google",
      title: "Takedowns &",
      titleHighlight: "suppression de Google",
      description: "Chaque contenu signalé est traité via un système automatisé renforcé par des soumissions manuelles. Nous envoyons des signalements puissants, même pour les sites les plus compliqués. Tous les liens sont également désindexés de Google pour qu'ils disparaissent des recherches. On relance les sites si nécessaire, et on agit rapidement en cas de reposts.",
      features: [
        "Signalements renforcés (manuels + automatisés)",
        "Modèles DMCA personnalisés pour chaque plateforme",
        "Compatible avec +50 sites",
        "Suppression des résultats Google & des reposts"
      ]
    },
    {
      label: "Suivi & tableau",
      badge: "Contrôle en temps réel, visible et organisé",
      title: "Suivi en temps réel +",
      titleHighlight: "tableau client",
      description: "Vous accédez à un tableau de bord privé et mis à jour en continu : liens trouvés, état des signalements, suppressions en cours… Vous gardez le contrôle sans rien gérer.",
      features: [
        "Suivi intelligent de chaque lien détecté",
        "Mises à jour continues, visibles à tout moment",
        "Espace privé dédié, sans rien à gérer"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 border border-primary rounded-full mb-8">
            <span className="text-sm text-foreground">Comment ça marche</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Détection, retrait et protection,<br />
            <span className="text-primary">Sans stress, sans délai.</span>
          </h2>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12 relative">
          <div className="inline-flex gap-8 relative">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-lg font-medium transition-colors pb-4 relative ${
                  activeTab === index
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground/70"
                }`}
              >
                {tab.label}
                {index < tabs.length - 1 && (
                  <span className="absolute right-[-16px] top-1/2 -translate-y-1/2 text-muted-foreground/30">|</span>
                )}
              </button>
            ))}
          </div>
          {/* Active indicator */}
          <div 
            className="absolute bottom-0 h-0.5 bg-primary transition-all duration-300"
            style={{
              left: `${activeTab * 33.33}%`,
              width: "33.33%"
            }}
          />
        </div>

        {/* Tab Content */}
        <div className="bg-zinc-900/50 backdrop-blur-sm p-12 rounded-2xl border border-zinc-800 min-h-[500px]">
          <div className="max-w-5xl">
            <p className="text-sm text-muted-foreground mb-8">{tabs[activeTab].badge}</p>
            
            <h3 className="text-4xl sm:text-5xl font-bold mb-8 text-foreground">
              {tabs[activeTab].title}<br />
              <span className="text-primary">{tabs[activeTab].titleHighlight}</span>
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-4xl">
              {tabs[activeTab].description}
            </p>

            <ul className="space-y-4">
              {tabs[activeTab].features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
