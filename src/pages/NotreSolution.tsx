import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Scan, FileCheck, Bell } from "lucide-react";

const NotreSolution = () => {
  const features = [
    {
      icon: Scan,
      title: "Scan automatisé",
      description: "Notre IA scanne 500+ plateformes en continu pour détecter vos contenus piratés"
    },
    {
      icon: FileCheck,
      title: "Retrait légal",
      description: "Équipe juridique dédiée qui gère tous les aspects légaux des suppressions"
    },
    {
      icon: Bell,
      title: "Alertes instantanées",
      description: "Notifications en temps réel dès qu'un nouveau contenu est détecté"
    },
    {
      icon: Shield,
      title: "Protection continue",
      description: "Surveillance 24/7 pour garantir que vos contenus restent protégés"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Notre Solution
              </h1>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Une protection complète qui combine technologie de pointe et expertise juridique
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300">
                  <feature.icon className="w-16 h-16 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-zinc-400 text-lg">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="glass-card p-12 rounded-2xl text-center">
              <h2 className="text-3xl font-bold mb-6">Technologie Hybride</h2>
              <p className="text-xl text-zinc-400 mb-8 max-w-3xl mx-auto">
                Nous combinons l'intelligence artificielle pour la détection rapide avec une intervention humaine experte pour garantir des résultats optimaux et conformes aux réglementations.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotreSolution;
