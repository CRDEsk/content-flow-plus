import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Scale, Building2, Mail, MapPin } from "lucide-react";

const MentionsLegales = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Mentions Légales - ContentRemovalDesk"
        description="Mentions légales de ContentRemovalDesk, service de protection digitale et suppression de contenu non autorisé."
      />
      
      <div className="min-h-screen bg-black flex flex-col">
        <Header />
        
        <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-6">
                <Scale className="h-4 w-4 text-primary" />
                <span className="text-sm text-zinc-400 font-medium">Informations légales</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Mentions Légales
              </h1>
              <p className="text-lg text-zinc-400">
                Informations légales concernant ContentRemovalDesk
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              
              {/* Éditeur */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Éditeur du site</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <p><strong className="text-foreground">Raison sociale :</strong> Aoufi Ventures LLC</p>
                  <p><strong className="text-foreground">Nom commercial :</strong> ContentRemovalDesk</p>
                  <p><strong className="text-foreground">Forme juridique :</strong> Limited Liability Company (LLC)</p>
                  <p><strong className="text-foreground">Pays d'enregistrement :</strong> États-Unis</p>
                  <p><strong className="text-foreground">Zone d'activité principale :</strong> Europe (France, Belgique)</p>
                  <p><strong className="text-foreground">Email :</strong> <a href="mailto:support@contentremovaldesk.com" className="text-primary hover:underline">support@contentremovaldesk.com</a></p>
                  <p><strong className="text-foreground">Téléphone :</strong> <a href="https://wa.me/32460236990" className="text-primary hover:underline">+32 460 23 69 90</a></p>
                </div>
              </section>

              {/* Hébergement */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Hébergement</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <p>Le site est hébergé par des prestataires conformes aux normes européennes de protection des données.</p>
                  <p>Les données sont stockées et traitées dans le respect du RGPD.</p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Propriété Intellectuelle</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    L'ensemble du contenu présent sur ce site (textes, images, logos, design, etc.) est la propriété exclusive de ContentRemovalDesk / Aoufi Ventures LLC, sauf mention contraire.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de ContentRemovalDesk.
                  </p>
                </div>
              </section>

              {/* Limitation de responsabilité */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Limitation de Responsabilité</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    ContentRemovalDesk met tout en œuvre pour offrir des informations fiables et à jour. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                  </p>
                  <p>
                    ContentRemovalDesk ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation de ce site, y compris l'inaccessibilité, les pertes de données ou la présence de virus.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Contact</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <p>Pour toute question concernant ces mentions légales, vous pouvez nous contacter :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Par email : <a href="mailto:support@contentremovaldesk.com" className="text-primary hover:underline">support@contentremovaldesk.com</a></li>
                    <li>Par WhatsApp : <a href="https://wa.me/32460236990" className="text-primary hover:underline">+32 460 23 69 90</a></li>
                  </ul>
                </div>
              </section>

              {/* Date */}
              <div className="text-center text-sm text-zinc-500 pt-8 border-t border-zinc-800/50">
                <p>Dernière mise à jour : 29 Mars 2025</p>
              </div>

            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MentionsLegales;
