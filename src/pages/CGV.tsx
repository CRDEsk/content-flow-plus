import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { FileText, CheckCircle2, AlertCircle, Shield } from "lucide-react";

const CGV = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Conditions Générales de Vente - ContentRemovalDesk"
        description="Conditions générales de vente et d'utilisation des services ContentRemovalDesk."
      />
      
      <div className="min-h-screen bg-black flex flex-col">
        <Header />
        
        <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-6">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-sm text-zinc-400 font-medium">Conditions contractuelles</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Conditions Générales de Vente
              </h1>
              <p className="text-lg text-zinc-400">
                Conditions applicables à l'utilisation des services ContentRemovalDesk
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              
              {/* Article 1 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Article 1 - Objet</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Les présentes CGV encadrent les relations entre Content Removal Desk (le Prestataire) et toute personne (le Client) souhaitant utiliser ses services de détection et de suppression de contenus non autorisés en ligne.
                  </p>
                </div>
              </section>

              {/* Article 2 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Article 2 - Prestations</h2>
                <div className="space-y-4 text-zinc-300">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-foreground">Scan & Clean :</strong> Retrait manuel et ciblé sans limite de liens</li>
                    <li><strong className="text-foreground">Abonnements mensuels</strong> (Core Plan, Elite Plan) : veille continue, alertes, rapports personnalisés</li>
                  </ul>
                </div>
              </section>

              {/* Article 3 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Article 3 - Commande</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Toute commande vaut acceptation des présentes CGV. Les services sont activés sous 24 à 48h après validation du paiement.
                  </p>
                </div>
              </section>

              {/* Article 4 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Article 4 - Prix et Paiement</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Les prix sont indiqués en euros TTC. Content Removal Desk se réserve le droit de les modifier sans préavis, hors contrats en cours.
                  </p>
                </div>
              </section>

              {/* Article 5 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Article 5 - Paiement</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Paiement sécurisé via Stripe ou PayPal. Pour les abonnements, un prélèvement mensuel automatique est effectué jusqu'à résiliation.
                  </p>
                </div>
              </section>

              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Article 6 - Durée & Résiliation</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Les abonnements sont sans engagement. Le client peut résilier à tout moment. Aucun remboursement ne sera effectué pour le mois en cours.
                  </p>
                </div>
              </section>

              {/* Article 6 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Article 7 - Obligations du Prestataire</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <p className="mb-4">Le Prestataire s'engage à :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Mettre en œuvre tous les moyens raisonnables pour effectuer les suppressions</li>
                    <li>Fournir un rapport clair</li>
                    <li>Protéger la confidentialité des données transmises</li>
                    <li>Agir dans la limite des moyens techniques et juridiques disponibles</li>
                  </ul>
                </div>
              </section>

              {/* Article 8 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Article 8 - Obligations du Client</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Le Client s'engage à fournir des informations exactes et à ne pas utiliser les services dans un but frauduleux ou illégal.
                  </p>
                </div>
              </section>

              {/* Article 9 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Article 9 - Responsabilité</h2>
                <div className="space-y-4 text-zinc-300">
                  <p className="mb-4">Le Prestataire ne peut être tenu responsable :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Des plateformes, hébergeurs ou registrars qui refusent, ignorent ou retardent les demandes de suppression</li>
                    <li>Des délais imposés par des tiers, ou des procédures relevant de juridictions étrangères</li>
                    <li>De l'impossibilité de garantir la suppression totale de certains contenus hébergés sur des sites connus pour leur résistance aux demandes légales et techniques</li>
                    <li>Des contenus qui réapparaissent après suppression, via de nouveaux dépôts ou sur des miroirs/clones</li>
                  </ul>
                </div>
              </section>

              {/* Article 10 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Article 10 - Droit de rétractation</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Aucun droit de rétractation ne s'applique (article L221-28 du Code de la consommation) dès lors que l'exécution a débuté avec votre accord.
                  </p>
                </div>
              </section>

              {/* Article 11 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Article 11 - Données personnelles</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Les données sont traitées dans le strict cadre de la relation client. Voir notre <a href="/politique-confidentialite" className="text-primary hover:underline">politique de confidentialité</a>.
                  </p>
                </div>
              </section>

              {/* Article 12 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Article 12 - Litiges</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    En cas de litige, une solution amiable sera recherchée. À défaut, compétence sera attribuée aux tribunaux français.
                  </p>
                </div>
              </section>

              {/* Article 13 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Article 13 - Modifications</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Content Removal Desk se réserve le droit de modifier les présentes CGV à tout moment. Les nouvelles dispositions s'appliquent uniquement aux commandes passées après leur mise en ligne.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Article 9 - Force Majeure</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    ContentRemovalDesk ne pourra être tenu responsable en cas de force majeure ou d'événements indépendants de sa volonté (pannes techniques, catastrophes naturelles, conflits sociaux, etc.).
                  </p>
                </div>
              </section>

              {/* Article 10 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Article 10 - Droit Applicable et Litiges</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Les présentes CGV sont soumises au droit applicable dans les juridictions où ContentRemovalDesk opère (principalement France et Belgique).
                  </p>
                  <p>
                    En cas de litige, nous encourageons une résolution amiable. À défaut, les tribunaux compétents de la juridiction du client seront saisis.
                  </p>
                </div>
              </section>

              {/* Article 11 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Article 11 - Modification des CGV</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    ContentRemovalDesk se réserve le droit de modifier les présentes CGV à tout moment. Les clients seront informés par email de toute modification substantielle. Les nouvelles CGV s'appliquent aux services souscrits après leur mise en ligne.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>Pour toute question concernant ces CGV :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Email : <a href="mailto:support@contentremovaldesk.com" className="text-primary hover:underline">support@contentremovaldesk.com</a></li>
                    <li>WhatsApp : <a href="https://wa.me/32460236990" className="text-primary hover:underline">+32 460 23 69 90</a></li>
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

export default CGV;
