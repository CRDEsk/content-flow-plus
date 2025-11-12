import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { RefreshCcw, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

const PolitiqueRemboursement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Politique de Remboursement - ContentRemovalDesk"
        description="Politique de remboursement et conditions d'annulation de ContentRemovalDesk."
      />
      
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        
        <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-6">
                <RefreshCcw className="h-4 w-4 text-primary" />
                <span className="text-sm text-zinc-400 font-medium">Remboursements</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Politique de Remboursement
              </h1>
              <p className="text-lg text-zinc-400">
                Conditions d'annulation et de remboursement de nos services
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              
              {/* Introduction */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50 text-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <RefreshCcw className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Principe Général</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Chez ContentRemovalDesk, nous nous engageons à fournir un service de qualité. Cette politique explique les conditions dans lesquelles un remboursement peut être demandé.
                  </p>
                  <p>
                    <strong className="text-white">Important :</strong> Compte tenu de la nature de nos services (détection et suppression de contenus), les demandes de remboursement sont évaluées au cas par cas.
                  </p>
                </div>
              </section>

              {/* Cas de remboursement acceptés */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50 text-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center border border-green-500/20">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Cas de Remboursement Acceptés</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-transparent rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <p>Un remboursement total ou partiel peut être accordé dans les situations suivantes :</p>
                  
                  <div className="space-y-6 pt-4">
                    <div className="pl-4 border-l-2 border-green-500/30">
                      <h3 className="text-lg font-semibold text-white mb-2">1. Problème technique majeur</h3>
                      <p>Si nos systèmes rencontrent une défaillance technique nous empêchant de fournir le service pendant une période significative.</p>
                    </div>
                    
                    <div className="pl-4 border-l-2 border-green-500/30">
                      <h3 className="text-lg font-semibold text-white mb-2">2. Non-prestation du service</h3>
                      <p>Si nous n'avons fourni aucun service après un délai de 7 jours suivant votre souscription et paiement.</p>
                    </div>
                    
                    <div className="pl-4 border-l-2 border-green-500/30">
                      <h3 className="text-lg font-semibold text-white mb-2">3. Erreur de facturation</h3>
                      <p>En cas de double facturation ou d'erreur manifeste dans le montant facturé.</p>
                    </div>
                    
                    <div className="pl-4 border-l-2 border-green-500/30">
                      <h3 className="text-lg font-semibold text-white mb-2">4. Annulation dans les 48h (sous conditions)</h3>
                      <p>Remboursement possible si demandé dans les 48h suivant la souscription ET qu'aucun scan ou action n'a encore été effectué.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cas de remboursement refusés */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50 text-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center border border-red-500/20">
                    <XCircle className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Cas de Remboursement Refusés</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <p>Les remboursements ne sont généralement pas accordés dans les cas suivants :</p>
                  
                  <ul className="list-disc list-inside space-y-3 ml-4 pt-4">
                    <li>
                      <strong className="text-white">Résultats insatisfaisants :</strong> Si des actions ont été entreprises mais que certaines plateformes n'ont pas supprimé le contenu (obligation de moyens, pas de résultat garanti)
                    </li>
                    <li>
                      <strong className="text-white">Changement d'avis :</strong> Après avoir utilisé les services (scans effectués, rapports générés, actions lancées)
                    </li>
                    <li>
                      <strong className="text-white">Non-respect des CGV :</strong> Si le client a fourni de fausses informations ou utilisé le service de manière abusive
                    </li>
                    <li>
                      <strong className="text-white">Résiliation anticipée :</strong> Aucun remboursement au prorata pour les périodes non utilisées en cas de résiliation avant la fin de l'abonnement
                    </li>
                    <li>
                      <strong className="text-white">Services partiellement utilisés :</strong> Si des scans ont été réalisés et que des actions sont en cours
                    </li>
                  </ul>
                </div>
              </section>

              {/* Délais et procédure */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50 text-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Procédure de Demande</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <p><strong className="text-white">Pour demander un remboursement :</strong></p>
                  
                  <ol className="list-decimal list-inside space-y-3 ml-4 pt-4">
                    <li>
                      <strong className="text-white">Contactez notre support :</strong>
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li>Email : <a href="mailto:support@contentremovaldesk.com" className="text-primary hover:underline">support@contentremovaldesk.com</a></li>
                        <li>WhatsApp : <a href="https://wa.me/32460236990" className="text-primary hover:underline">+32 460 23 69 90</a></li>
                      </ul>
                    </li>
                    <li>
                      <strong className="text-white">Fournissez les informations suivantes :</strong>
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li>Numéro de commande ou référence d'abonnement</li>
                        <li>Raison détaillée de la demande de remboursement</li>
                        <li>Coordonnées bancaires pour le remboursement</li>
                      </ul>
                    </li>
                    <li>
                      <strong className="text-white">Délai de traitement :</strong> Votre demande sera étudiée sous 5 à 7 jours ouvrables
                    </li>
                    <li>
                      <strong className="text-white">Notification :</strong> Vous recevrez une réponse par email avec notre décision motivée
                    </li>
                    <li>
                      <strong className="text-white">Remboursement effectif :</strong> Si accepté, le remboursement sera effectué sous 10 à 15 jours ouvrables
                    </li>
                  </ol>
                </div>
              </section>

              {/* Modalités de remboursement */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50 text-white">
                <h2 className="text-2xl font-bold text-white mb-6">Modalités de Remboursement</h2>
                <div className="space-y-4 text-zinc-300">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Les remboursements sont effectués par le même moyen de paiement utilisé lors de l'achat</li>
                    <li>Les frais de transaction bancaires ne sont pas remboursables</li>
                    <li>Le remboursement peut être partiel en fonction des services déjà fournis</li>
                    <li>En cas de remboursement, l'accès aux services et aux données du compte sera révoqué</li>
                  </ul>
                </div>
              </section>

              {/* Garantie satisfaction */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50 text-white">
                <h2 className="text-2xl font-bold text-white mb-6">Notre Engagement Qualité</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Bien que nous ne puissions garantir la suppression à 100% de tous les contenus (dépendant de la coopération de tiers), nous nous engageons à :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 pt-4">
                    <li>Utiliser tous les moyens légaux à notre disposition</li>
                    <li>Fournir des rapports transparents sur les actions entreprises</li>
                    <li>Répondre rapidement à vos demandes</li>
                    <li>Maintenir la confidentialité absolue de vos informations</li>
                    <li>Vous tenir informé de l'évolution de votre dossier</li>
                  </ul>
                  <p className="pt-4">
                    <strong className="text-white">Si vous n'êtes pas satisfait,</strong> contactez-nous pour trouver une solution adaptée avant de demander un remboursement.
                  </p>
                </div>
              </section>

              {/* Modifications */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50 text-white">
                <h2 className="text-2xl font-bold text-white mb-6">Modifications de la Politique</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    ContentRemovalDesk se réserve le droit de modifier cette politique de remboursement à tout moment. Les clients seront informés de toute modification substantielle par email. Les nouvelles conditions s'appliquent uniquement aux abonnements souscrits après la modification.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50 bg-gradient-to-br from-primary/5 to-transparent">
                <h2 className="text-2xl font-bold text-white mb-6">Besoin d'Aide ?</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>Notre équipe est à votre disposition pour répondre à vos questions :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Email : <a href="mailto:support@contentremovaldesk.com" className="text-primary hover:underline font-semibold">support@contentremovaldesk.com</a></li>
                    <li>WhatsApp : <a href="https://wa.me/32460236990" className="text-primary hover:underline font-semibold">+32 460 23 69 90</a></li>
                  </ul>
                  <p className="pt-4 text-sm">
                    Nous privilégions toujours le dialogue et cherchons à trouver une solution satisfaisante pour nos clients.
                  </p>
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

export default PolitiqueRemboursement;
