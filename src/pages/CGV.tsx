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
                    Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre ContentRemovalDesk (Aoufi Ventures LLC) et ses clients pour la fourniture de services de protection digitale, de détection et de suppression de contenus non autorisés.
                  </p>
                  <p>
                    Toute commande de service implique l'acceptation sans réserve des présentes CGV.
                  </p>
                </div>
              </section>

              {/* Article 2 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Article 2 - Services Proposés</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>ContentRemovalDesk propose les services suivants :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-foreground">Détection automatique :</strong> Scan et surveillance des contenus non autorisés</li>
                    <li><strong className="text-foreground">Suppression de contenu :</strong> Takedowns via notifications DMCA et contacts directs</li>
                    <li><strong className="text-foreground">Protection continue :</strong> Surveillance régulière et alertes</li>
                    <li><strong className="text-foreground">Escalades légales :</strong> Actions renforcées et accompagnement juridique</li>
                    <li><strong className="text-foreground">Rapports détaillés :</strong> Tableaux de bord et rapports d'activité</li>
                  </ul>
                  <p className="pt-4">
                    Les détails spécifiques de chaque formule sont disponibles sur notre page Tarifs.
                  </p>
                </div>
              </section>

              {/* Article 3 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Article 3 - Commande et Souscription</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    La souscription à nos services s'effectue en ligne via notre plateforme ou par contact direct avec notre équipe.
                  </p>
                  <p><strong className="text-foreground">Processus de commande :</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Sélection de la formule souhaitée</li>
                    <li>Création d'un compte client</li>
                    <li>Acceptation des présentes CGV</li>
                    <li>Paiement sécurisé</li>
                    <li>Confirmation de commande par email</li>
                  </ul>
                  <p className="pt-4">
                    Toute commande vaut acceptation des prix et descriptions des services disponibles au moment de la commande.
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
                  <p><strong className="text-foreground">Tarification :</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Les prix sont indiqués en euros (EUR), toutes taxes comprises</li>
                    <li>Les tarifs peuvent être modifiés à tout moment, sans effet rétroactif</li>
                    <li>Les formules d'abonnement sont facturées mensuellement ou annuellement</li>
                  </ul>
                  
                  <p className="pt-4"><strong className="text-foreground">Modalités de paiement :</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Paiement par carte bancaire via plateforme sécurisée</li>
                    <li>Paiement par virement bancaire (sur demande)</li>
                    <li>Le paiement est exigible immédiatement à la commande</li>
                    <li>En cas de défaut de paiement, l'accès aux services peut être suspendu</li>
                  </ul>
                </div>
              </section>

              {/* Article 5 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Article 5 - Durée et Résiliation</h2>
                <div className="space-y-4 text-zinc-300">
                  <p><strong className="text-foreground">Durée du contrat :</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Les abonnements sont souscrits pour une durée d'un mois ou d'un an selon la formule choisie</li>
                    <li>Renouvellement automatique sauf résiliation avant la fin de la période en cours</li>
                  </ul>
                  
                  <p className="pt-4"><strong className="text-foreground">Résiliation :</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Le client peut résilier à tout moment depuis son espace client</li>
                    <li>La résiliation prend effet à la fin de la période de facturation en cours</li>
                    <li>Aucun remboursement au prorata pour les périodes non utilisées</li>
                    <li>ContentRemovalDesk se réserve le droit de résilier en cas de violation des CGV</li>
                  </ul>
                </div>
              </section>

              {/* Article 6 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Article 6 - Obligations du Client</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <p>Le client s'engage à :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fournir des informations exactes et à jour</li>
                    <li>Détenir les droits légitimes sur les contenus à protéger</li>
                    <li>Ne pas utiliser nos services à des fins illégales ou abusives</li>
                    <li>Respecter la confidentialité de ses identifiants de connexion</li>
                    <li>Informer ContentRemovalDesk de tout changement dans sa situation</li>
                    <li>Coopérer lors des procédures de vérification de propriété</li>
                  </ul>
                </div>
              </section>

              {/* Article 7 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Article 7 - Garanties et Limitations</h2>
                <div className="space-y-4 text-zinc-300">
                  <p><strong className="text-foreground">Engagement de moyens :</strong></p>
                  <p>
                    ContentRemovalDesk s'engage à mettre en œuvre tous les moyens nécessaires pour fournir les services décrits. Toutefois, nos services constituent une obligation de moyens et non de résultat.
                  </p>
                  
                  <p className="pt-4"><strong className="text-foreground">Limitations :</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nous ne garantissons pas la suppression à 100% de tous les contenus</li>
                    <li>Les délais peuvent varier selon les plateformes et juridictions</li>
                    <li>Certaines plateformes peuvent refuser de coopérer</li>
                    <li>Nous ne sommes pas responsables des contenus réapparaissant après suppression</li>
                  </ul>
                  
                  <p className="pt-4">
                    Notre responsabilité est limitée au montant des sommes effectivement payées par le client au cours des 12 derniers mois.
                  </p>
                </div>
              </section>

              {/* Article 8 */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <AlertCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Article 8 - Données Personnelles</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Les données personnelles collectées font l'objet d'un traitement conforme au RGPD. Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</a>.
                  </p>
                </div>
              </section>

              {/* Article 9 */}
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
                <p>Dernière mise à jour : Janvier 2025</p>
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
