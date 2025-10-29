import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Tarifs = () => {
  const plans = [
    {
      name: "Starter",
      price: "149",
      period: "/mois",
      features: [
        "Scan hebdomadaire",
        "Jusqu'à 50 retraits/mois",
        "Support par email",
        "Tableau de bord basique"
      ]
    },
    {
      name: "Pro",
      price: "299",
      period: "/mois",
      popular: true,
      features: [
        "Scan quotidien",
        "Retraits illimités",
        "Support prioritaire 24/7",
        "Tableau de bord avancé",
        "Rapport mensuel détaillé",
        "Équipe juridique dédiée"
      ]
    },
    {
      name: "Enterprise",
      price: "Sur mesure",
      period: "",
      features: [
        "Scan en temps réel",
        "Retraits illimités",
        "Support VIP 24/7",
        "Dashboard personnalisé",
        "Rapports hebdomadaires",
        "Équipe juridique dédiée",
        "API access",
        "Account manager dédié"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Tarifs Transparents
              </h1>
              <p className="text-xl text-zinc-400">
                Choisissez le plan qui correspond à vos besoins
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`glass-card p-8 rounded-2xl relative ${plan.popular ? 'border-primary/50 shadow-2xl shadow-primary/20' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-6 py-2 rounded-full font-semibold text-sm">
                      Plus populaire
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-zinc-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90 text-black' : 'bg-zinc-900 hover:bg-zinc-800'}`}>
                    Commencer
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tarifs;
