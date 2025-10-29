import { useState } from "react";
import { Search, Flag, BarChart3, Check, Zap, Shield } from "lucide-react";

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Scan complet",
      icon: Search,
      badge: "Détection intelligente, scan global & audit manuel",
      title: "Protéger ton nom.",
      titleHighlight: "Défendre ton image.",
      description: "Nous lançons une détection intelligente sur l'ensemble du web : sites de leaks, forums, moteurs de recherche, hébergeurs, etc. Chaque lien est identifié, analysé et classé par niveau de gravité. Nos agents vérifient manuellement pour s'assurer qu'aucune fuite ne passe entre les mailles du filet.",
      features: [
        "Agent propriétaire de détection intelligente",
        "Analyse complète par nom, pseudo, contenu privé",
        "Classement automatique par priorité"
      ],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      label: "Signalement",
      icon: Flag,
      badge: "Soumissions puissantes + suppression Google",
      title: "Takedowns &",
      titleHighlight: "suppression de Google",
      description: "Chaque contenu signalé est traité via un système automatisé renforcé par des soumissions manuelles. Nous envoyons des signalements puissants, même pour les sites les plus compliqués. Tous les liens sont également désindexés de Google pour qu'ils disparaissent des recherches. On relance les sites si nécessaire, et on agit rapidement en cas de reposts.",
      features: [
        "Signalements renforcés (manuels + automatisés)",
        "Modèles DMCA personnalisés pour chaque plateforme",
        "Compatible avec +50 sites",
        "Suppression des résultats Google & des reposts"
      ],
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      label: "Suivi & tableau",
      icon: BarChart3,
      badge: "Contrôle en temps réel, visible et organisé",
      title: "Suivi en temps réel +",
      titleHighlight: "tableau client",
      description: "Vous accédez à un tableau de bord privé et mis à jour en continu : liens trouvés, état des signalements, suppressions en cours… Vous gardez le contrôle sans rien gérer.",
      features: [
        "Suivi intelligent de chaque lien détecté",
        "Mises à jour continues, visibles à tout moment",
        "Espace privé dédié, sans rien à gérer"
      ],
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated grid background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'scroll 20s linear infinite'
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-8">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm text-zinc-400 font-medium">Comment ça marche</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Détection, retrait et protection,<br />
            <span className="gradient-text">Sans stress, sans délai.</span>
          </h2>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap gap-2 p-2 bg-zinc-900/30 backdrop-blur-xl rounded-2xl border border-zinc-800/50">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`relative overflow-hidden flex items-center gap-2 px-6 py-4 rounded-xl font-medium text-sm transition-all duration-300 ${
                    activeTab === index
                      ? "bg-zinc-800 text-foreground shadow-lg scale-105"
                      : "text-zinc-400 hover:text-foreground hover:bg-zinc-800/50"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                  {activeTab === index && (
                    <>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full animate-[slide_2s_ease-in-out_infinite]" />
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative">
          <div className="rounded-3xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-8 sm:p-12 border border-zinc-800/50 overflow-hidden group">
            {/* Animated background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${tabs[activeTab].color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10 max-w-5xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 mb-6">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-xs text-zinc-400 font-medium">{tabs[activeTab].badge}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-4xl sm:text-5xl font-display font-bold mb-6 leading-tight">
                <span className="text-foreground">{tabs[activeTab].title}</span><br />
                <span className="gradient-text">{tabs[activeTab].titleHighlight}</span>
              </h3>
              
              {/* Description */}
              <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-4xl">
                {tabs[activeTab].description}
              </p>

              {/* Features List */}
              <div className="space-y-4">
                {tabs[activeTab].features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 group/item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium group-hover/item:text-primary transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mt-10 pt-10 border-t border-zinc-800/50">
                <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-xs font-medium text-zinc-400">
                  🤖 IA Propriétaire
                </div>
                <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-xs font-medium text-zinc-400">
                  ⚖️ Équipe juridique
                </div>
                <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-xs font-medium text-zinc-400">
                  🔒 Sécurisé
                </div>
              </div>
            </div>

            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-500 overflow-hidden" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 60px 60px;
          }
        }
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;
