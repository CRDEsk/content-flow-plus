import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Users, Globe, Award } from "lucide-react";

const APropos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                À Propos de CRD
              </h1>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                Leader français de la protection digitale depuis 2020
              </p>
            </div>

            <div className="glass-card p-12 rounded-2xl mb-12">
              <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                Content Removal Desk (CRD) est né d'une conviction simple : chaque créateur mérite de contrôler son contenu. 
                Nous avons développé une solution hybride combinant intelligence artificielle et expertise juridique pour offrir 
                la protection la plus efficace du marché.
              </p>
              <p className="text-xl text-zinc-400 leading-relaxed">
                Notre technologie scanne en permanence plus de 500 plateformes pour détecter et supprimer rapidement tout 
                contenu non autorisé. Avec un taux de réussite de 99.2% et un délai moyen de 48h, nous sommes devenus 
                la référence en protection digitale en France.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8 rounded-2xl">
                <Shield className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Expertise Technique</h3>
                <p className="text-zinc-400 text-lg">
                  Notre IA propriétaire détecte les contenus piratés sur plus de 500 plateformes avec une précision exceptionnelle.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <Users className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Équipe Dédiée</h3>
                <p className="text-zinc-400 text-lg">
                  Une équipe de juristes spécialisés et d'experts tech disponibles 24/7 pour protéger vos intérêts.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <Globe className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Couverture Mondiale</h3>
                <p className="text-zinc-400 text-lg">
                  Protection sur les plateformes françaises et internationales, avec une expertise particulière sur le marché FR.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <Award className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Reconnu par Google</h3>
                <p className="text-zinc-400 text-lg">
                  Membre du Google Trusted Copyright Removal Program, garantissant des suppressions prioritaires.
                </p>
              </div>
            </div>

            <div className="text-center glass-card p-12 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Les Chiffres</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500k+</div>
                  <div className="text-zinc-400">Contenus supprimés</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">223+</div>
                  <div className="text-zinc-400">Créateurs protégés</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">99.2%</div>
                  <div className="text-zinc-400">Taux de réussite</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">48h</div>
                  <div className="text-zinc-400">Délai moyen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default APropos;
