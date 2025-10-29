import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scale, FileText, Users, Target } from "lucide-react";

const EscaladesLegal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Escalades & Légal
              </h1>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Équipe juridique spécialisée dans la protection de contenu digital
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="glass-card p-8 rounded-2xl">
                <Scale className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Action Juridique</h3>
                <p className="text-zinc-400 text-lg mb-4">
                  Notre équipe d'avocats spécialisés prend en charge tous les aspects légaux de la suppression de contenu.
                </p>
                <ul className="space-y-3 text-zinc-300">
                  <li>• Mise en demeure DMCA</li>
                  <li>• Notification aux hébergeurs</li>
                  <li>• Procédures judiciaires si nécessaire</li>
                  <li>• Suivi des réclamations</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <FileText className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Documentation Complète</h3>
                <p className="text-zinc-400 text-lg mb-4">
                  Tous vos dossiers sont documentés avec précision pour garantir leur efficacité juridique.
                </p>
                <ul className="space-y-3 text-zinc-300">
                  <li>• Preuves horodatées</li>
                  <li>• Captures d'écran certifiées</li>
                  <li>• Correspondances légales</li>
                  <li>• Rapports détaillés</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <Users className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Équipe Experte</h3>
                <p className="text-zinc-400 text-lg mb-4">
                  Avocats spécialisés en propriété intellectuelle et droit digital depuis plus de 10 ans.
                </p>
                <ul className="space-y-3 text-zinc-300">
                  <li>• Expertise internationale</li>
                  <li>• Connaissance des plateformes</li>
                  <li>• Réseau d'avocats partenaires</li>
                  <li>• Taux de réussite: 99.2%</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <Target className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Résultats Garantis</h3>
                <p className="text-zinc-400 text-lg mb-4">
                  Nous nous engageons sur des résultats concrets et mesurables.
                </p>
                <ul className="space-y-3 text-zinc-300">
                  <li>• Délai moyen: 48h</li>
                  <li>• Suivi transparent</li>
                  <li>• Garantie de suppression</li>
                  <li>• Surveillance post-retrait</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EscaladesLegal;
