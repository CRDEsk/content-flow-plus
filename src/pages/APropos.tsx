import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Users, Heart, Lock, Target, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const APropos = () => {
  useEffect(() => {
    // SEO optimization for About page
    document.title = "À Propos | ContentRemovalDesk - Protection des Créateurs de Contenu";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "ContentRemovalDesk : plateforme de protection digitale née en 2024 pour redonner le contrôle aux créateurs. Suppression de fuites, protection d'image, service discret et efficace.");
    }

    // Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'À Propos - ContentRemovalDesk | Notre Mission de Protection');

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Découvrez l\'histoire de ContentRemovalDesk et notre mission de protéger les créateurs contre les fuites de contenu.');
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Protection Discrète",
      description: "Nous agissons en toute confidentialité pour protéger votre image et votre vie privée sans exposition inutile."
    },
    {
      icon: Target,
      title: "Efficacité Rapide",
      description: "Suppression des fuites en 48h en moyenne. Chaque minute compte quand il s'agit de protéger votre contenu."
    },
    {
      icon: Heart,
      title: "Approche Humaine",
      description: "Pas besoin de raconter votre histoire 100 fois. Une équipe empathique qui comprend vos enjeux."
    },
    {
      icon: Lock,
      title: "Surveillance Continue",
      description: "Suivi automatique des reposts et surveillance permanente pour une protection durable dans le temps."
    }
  ];

  const stats = [
    { number: "2024", label: "Année de création" },
    { number: "500k+", label: "Contenus supprimés" },
    { number: "223+", label: "Créateurs protégés" },
    { number: "99.2%", label: "Taux de réussite" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                Né de la frustration face aux{" "}
                <span className="text-primary">fuites de contenus</span>
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed">
                ContentRemovalDesk a été conçu pour redonner le contrôle aux créateurs.
              </p>
            </div>
          </div>
        </section>

        {/* Origin Story Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto max-w-5xl">
            <Card className="p-8 sm:p-12 bg-zinc-900/50 border-zinc-800">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Notre Histoire</h2>
              
              <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
                <p>
                  En 2024, nous avons remarqué que de plus en plus de créatrices voyaient leur contenu privé 
                  partagé sans leur consentement. Ce n'était pas seulement un problème technique, 
                  <strong className="text-white"> c'était une attaque contre leur image, leur sécurité et leur travail.</strong>
                </p>
                
                <p>
                  Face à cette réalité, nous avons décidé d'agir. Les solutions existantes étaient soit trop lentes, 
                  soit trop complexes, soit totalement absentes. Les créateurs se retrouvaient seuls, obligés de 
                  passer des heures à contacter des plateformes, à expliquer leur situation encore et encore, 
                  sans garantie de résultat.
                </p>
                
                <p>
                  <strong className="text-primary">C'est ainsi qu'est né ContentRemovalDesk :</strong> une plateforme 
                  discrète, efficace, et humaine, qui supprime les fuites rapidement, suit les reposts, 
                  et protège l'image des créateurs.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                Notre Mission
              </h2>
              <p className="text-xl text-primary font-semibold mb-4">
                Protéger ce qui t'appartient.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-lg text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Sans stress</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Sans perte de temps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Sans répéter ton histoire 100 fois</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="p-6 bg-zinc-900/50 border-zinc-800 hover:border-primary/50 transition-all">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Notre Impact</h2>
              <p className="text-lg text-zinc-400">Des résultats concrets pour protéger les créateurs</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 sm:p-8 bg-zinc-900/50 border-zinc-800 text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-zinc-400">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <Card className="p-8 sm:p-12 bg-zinc-900/50 border-zinc-800">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
                Ce qui nous rend différents
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Avant ContentRemovalDesk</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Des heures à chercher les fuites manuellement</li>
                    <li>• Répéter son histoire à chaque plateforme</li>
                    <li>• Aucune garantie de suppression</li>
                    <li>• Stress et anxiété constants</li>
                    <li>• Repost non surveillés</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Avec ContentRemovalDesk</h3>
                  <ul className="space-y-3 text-zinc-300">
                    <li>• Détection automatique sur 500+ plateformes</li>
                    <li>• Une seule déclaration, nous gérons le reste</li>
                    <li>• 99.2% de taux de réussite garanti</li>
                    <li>• Tranquillité d'esprit totale</li>
                    <li>• Surveillance continue des reposts</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Team Values */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Une Équipe qui Comprend
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed mb-8">
              Nous savons que derrière chaque fuite, il y a une personne qui mérite respect, 
              protection et résultats rapides. C'est pourquoi nous avons construit une équipe 
              dédiée, disponible 24/7, avec une expertise technique et juridique pour protéger 
              votre contenu et votre image.
            </p>
            <p className="text-xl text-primary font-semibold">
              Parce que ton travail mérite d'être protégé.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default APropos;
