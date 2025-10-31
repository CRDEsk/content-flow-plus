import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Shield, Lock, Eye, Database, UserCheck } from "lucide-react";

const PolitiqueConfidentialite = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Politique de Confidentialité - ContentRemovalDesk"
        description="Politique de confidentialité et protection des données personnelles de ContentRemovalDesk. Conformité RGPD."
      />
      
      <div className="min-h-screen bg-black flex flex-col">
        <Header />
        
        <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-6">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm text-zinc-400 font-medium">Protection des données</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                Politique de Confidentialité
              </h1>
              <p className="text-lg text-zinc-400">
                Comment nous collectons, utilisons et protégeons vos données personnelles
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              
              {/* Introduction */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Introduction</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <p>
                    ContentRemovalDesk (Aoufi Ventures LLC) accorde une importance capitale à la protection de vos données personnelles. Cette politique explique comment nous collectons, utilisons, stockons et protégeons vos informations.
                  </p>
                  <p>
                    Nous nous engageons à respecter le Règlement Général sur la Protection des Données (RGPD) ainsi que toutes les législations applicables en matière de protection des données.
                  </p>
                </div>
              </section>

              {/* Données collectées */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Données Collectées</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <p><strong className="text-foreground">Informations d'identification :</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nom, prénom, pseudonyme</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Informations de paiement (traitées de manière sécurisée)</li>
                  </ul>

                  <p className="pt-4"><strong className="text-foreground">Données relatives à votre contenu :</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>URLs des contenus à protéger ou supprimer</li>
                    <li>Preuves de propriété intellectuelle</li>
                    <li>Communications et échanges avec notre service</li>
                  </ul>

                  <p className="pt-4"><strong className="text-foreground">Données techniques :</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur et système d'exploitation</li>
                    <li>Données de navigation (cookies)</li>
                  </ul>
                </div>
              </section>

              {/* Utilisation des données */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Utilisation des Données</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <p>Nous utilisons vos données personnelles pour :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fournir et améliorer nos services de protection digitale</li>
                    <li>Communiquer avec vous concernant votre compte et vos demandes</li>
                    <li>Traiter vos paiements de manière sécurisée</li>
                    <li>Détecter et supprimer les contenus non autorisés</li>
                    <li>Assurer la sécurité et prévenir la fraude</li>
                    <li>Respecter nos obligations légales</li>
                    <li>Vous envoyer des informations importantes sur nos services (avec votre consentement)</li>
                  </ul>
                </div>
              </section>

              {/* Partage des données */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Partage des Données</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations uniquement dans les cas suivants :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-foreground">Prestataires de services :</strong> Partenaires techniques nécessaires à la fourniture de nos services (hébergement, paiement, etc.)</li>
                    <li><strong className="text-foreground">Obligations légales :</strong> Si la loi l'exige ou pour protéger nos droits légaux</li>
                    <li><strong className="text-foreground">Partenaires juridiques :</strong> Avocats et experts légaux dans le cadre d'actions juridiques</li>
                  </ul>
                  <p className="pt-4">
                    Tous nos partenaires sont tenus par des accords de confidentialité stricts et ne peuvent utiliser vos données qu'aux fins spécifiées.
                  </p>
                </div>
              </section>

              {/* Sécurité */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Sécurité des Données</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <p>Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Chiffrement des données en transit et au repos (SSL/TLS)</li>
                    <li>Accès restreint aux données personnelles</li>
                    <li>Surveillance et audits de sécurité réguliers</li>
                    <li>Protocoles de sauvegarde sécurisés</li>
                    <li>Formation du personnel sur la protection des données</li>
                  </ul>
                </div>
              </section>

              {/* Vos droits */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Vos Droits (RGPD)</h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4 text-zinc-300">
                  <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-foreground">Droit d'accès :</strong> Consulter les données que nous détenons sur vous</li>
                    <li><strong className="text-foreground">Droit de rectification :</strong> Corriger vos données inexactes</li>
                    <li><strong className="text-foreground">Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                    <li><strong className="text-foreground">Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                    <li><strong className="text-foreground">Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                    <li><strong className="text-foreground">Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                  </ul>
                  <p className="pt-4">
                    Pour exercer vos droits, contactez-nous à : <a href="mailto:support@contentremovaldesk.com" className="text-primary hover:underline">support@contentremovaldesk.com</a>
                  </p>
                </div>
              </section>

              {/* Cookies */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Cookies</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
                  </p>
                  <p><strong className="text-foreground">Types de cookies utilisés :</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Cookies essentiels (fonctionnement du site)</li>
                    <li>Cookies analytiques (statistiques anonymisées)</li>
                    <li>Cookies fonctionnels (préférences utilisateur)</li>
                  </ul>
                </div>
              </section>

              {/* Conservation */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Conservation des Données</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, ou conformément aux obligations légales.
                  </p>
                  <p>
                    Les données relatives aux services rendus peuvent être conservées pour des raisons légales ou comptables selon les réglementations en vigueur.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section className="glass-card p-8 rounded-2xl border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact DPO</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>Pour toute question relative à cette politique de confidentialité ou à vos données personnelles :</p>
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

export default PolitiqueConfidentialite;
