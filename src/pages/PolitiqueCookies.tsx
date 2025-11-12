import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Cookie, Shield, BarChart3, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCookieConsent, setCookie, deleteCookie } from "@/lib/cookies";
import { initAnalytics } from "@/lib/analytics";
import { toast } from "@/hooks/use-toast";

const CookieManagementButtons = () => {
  const [consent, setConsent] = useState<'accepted' | 'declined' | null>(null);

  useEffect(() => {
    setConsent(getCookieConsent());
  }, []);

  const handleAccept = () => {
    setCookie("cookie-consent", "accepted", 365);
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
    initAnalytics();
    toast({
      title: "Cookies acceptés",
      description: "Vos préférences ont été enregistrées.",
    });
  };

  const handleDecline = () => {
    setCookie("cookie-consent", "declined", 365);
    localStorage.setItem("cookie-consent", "declined");
    setConsent("declined");
    toast({
      title: "Cookies refusés",
      description: "Vos préférences ont été enregistrées.",
    });
  };

  const handleReset = () => {
    deleteCookie("cookie-consent");
    localStorage.removeItem("cookie-consent");
    setConsent(null);
    toast({
      title: "Préférences réinitialisées",
      description: "Le bandeau de consentement réapparaîtra lors de votre prochaine visite.",
    });
    // Reload page to show consent banner
    setTimeout(() => window.location.reload(), 1000);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={handleAccept}
          className="flex-1 bg-primary hover:bg-primary/90 text-black font-semibold rounded-xl"
        >
          Accepter les cookies
        </Button>
        <Button
          onClick={handleDecline}
          variant="outline"
          className="flex-1 border-zinc-700/80 hover:bg-zinc-800/60 text-foreground rounded-xl"
        >
          Refuser les cookies
        </Button>
      </div>
      
      {consent && (
        <div className="pt-4 border-t border-zinc-800/50">
          <p className="text-sm text-zinc-400 mb-3">
            Statut actuel : <span className="text-primary font-semibold">
              {consent === 'accepted' ? 'Accepté' : 'Refusé'}
            </span>
          </p>
          <Button
            onClick={handleReset}
            variant="outline"
            className="w-full sm:w-auto border-zinc-700/80 hover:bg-zinc-800/60 text-foreground rounded-xl text-sm"
          >
            Réinitialiser mes préférences
          </Button>
        </div>
      )}
    </div>
  );
};

const PolitiqueCookies = () => {
  return (
    <>
      <SEO 
        title="Politique de Cookies - ContentRemovalDesk"
        description="Découvrez comment ContentRemovalDesk utilise les cookies pour améliorer votre expérience et protéger vos données."
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-6">
                <Cookie className="h-4 w-4 text-primary" />
                <span className="text-sm text-zinc-400 font-medium">Transparence totale</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
                Politique de Cookies
              </h1>
              <p className="text-xl text-zinc-400">
                Dernière mise à jour : 29 Mars 2025
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-zinc max-w-none space-y-8">
              
              {/* Introduction */}
              <div className="rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-8 border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-white mb-4">Qu'est-ce qu'un cookie ?</h2>
                <p className="text-zinc-300 leading-relaxed">
                  Un cookie est un petit fichier texte déposé sur votre appareil lors de votre visite sur notre site <strong className="text-white">contentremovaldesk.com</strong>. 
                  Les cookies permettent de mémoriser vos préférences, d'analyser l'usage du site et d'améliorer votre expérience utilisateur.
                </p>
                <p className="text-zinc-300 leading-relaxed mt-4">
                  Content Removal Desk LLC, en tant que responsable du traitement, s'engage à utiliser les cookies de manière transparente 
                  et conforme au Règlement Général sur la Protection des Données (RGPD).
                </p>
              </div>

              {/* Types de cookies */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Types de cookies utilisés</h2>
                <div className="space-y-4">
                  
                  <div className="rounded-xl bg-zinc-900/30 backdrop-blur-xl p-6 border border-zinc-800/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">1. Cookies strictement nécessaires</h3>
                        <p className="text-zinc-400 mb-2">
                          Ces cookies sont indispensables au fonctionnement du site. Ils permettent la navigation, l'accès aux espaces sécurisés 
                          et la gestion de votre connexion.
                        </p>
                        <p className="text-sm text-zinc-500 italic">
                          Durée de conservation : session ou jusqu'à 12 mois<br />
                          Base légale : intérêt légitime
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-zinc-900/30 backdrop-blur-xl p-6 border border-zinc-800/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="h-6 w-6 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">2. Cookies analytiques</h3>
                        <p className="text-zinc-400 mb-2">
                          Nous utilisons Google Analytics pour mesurer l'audience et améliorer nos services. Ces cookies collectent des données 
                          anonymisées sur votre navigation (pages visitées, durée, provenance).
                        </p>
                        <p className="text-sm text-zinc-500 italic">
                          Durée de conservation : jusqu'à 24 mois<br />
                          Base légale : consentement
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-zinc-900/30 backdrop-blur-xl p-6 border border-zinc-800/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <Settings className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">3. Cookies de préférences</h3>
                        <p className="text-zinc-400 mb-2">
                          Ces cookies mémorisent vos choix (langue, paramètres d'affichage) pour personnaliser votre expérience lors de vos prochaines visites.
                        </p>
                        <p className="text-sm text-zinc-500 italic">
                          Durée de conservation : jusqu'à 12 mois<br />
                          Base légale : consentement
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Gestion des cookies */}
              <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-xl p-8 border border-primary/20">
                <h2 className="text-2xl font-bold text-white mb-4">Gestion de vos cookies</h2>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  Vous pouvez à tout moment accepter, refuser ou retirer votre consentement concernant les cookies non essentiels.
                </p>
                <div className="space-y-3 text-zinc-300 mb-6">
                  <p>
                    <strong className="text-white">Via notre site :</strong> Un bandeau de consentement s'affiche lors de votre première visite. 
                    Vous pouvez modifier vos préférences à tout moment.
                  </p>
                  <p>
                    <strong className="text-white">Via votre navigateur :</strong> Vous pouvez configurer votre navigateur pour refuser les cookies. 
                    Consultez les paramètres de votre navigateur (Chrome, Firefox, Safari, Edge) pour gérer vos préférences.
                  </p>
                  <p className="text-sm text-zinc-400 italic mt-4">
                    ⚠️ Attention : le refus de certains cookies peut limiter l'accès à certaines fonctionnalités du site.
                  </p>
                </div>
                
                {/* Cookie Management Buttons */}
                <CookieManagementButtons />
              </div>

              {/* Cookies tiers */}
              <div className="rounded-xl bg-zinc-900/30 backdrop-blur-xl p-6 border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-white mb-4">Cookies tiers</h2>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  Certains cookies sont déposés par des services tiers que nous utilisons (Google Analytics, hébergement, paiement sécurisé). 
                  Ces partenaires sont tenus de respecter la confidentialité de vos données.
                </p>
                <p className="text-zinc-400 text-sm">
                  Nous ne vendons ni ne partageons vos données à des fins commerciales avec des tiers non autorisés.
                </p>
              </div>

              {/* Sécurité */}
              <div className="rounded-xl bg-zinc-900/30 backdrop-blur-xl p-6 border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-white mb-4">Sécurité et confidentialité</h2>
                <p className="text-zinc-300 leading-relaxed">
                  Tous les cookies sont protégés par des protocoles de sécurité SSL et stockés de manière chiffrée. 
                  Nous mettons en œuvre des mesures techniques et organisationnelles strictes pour prévenir tout accès non autorisé.
                </p>
              </div>

              {/* Droits et contact */}
              <div className="rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl p-8 border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-white mb-4">Vos droits</h2>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition 
                  et de portabilité de vos données personnelles liées aux cookies.
                </p>
                <p className="text-zinc-300 leading-relaxed mb-4">
                  Pour exercer vos droits ou pour toute question concernant notre politique de cookies, contactez-nous à :
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700">
                  <span className="text-primary font-semibold">contact@contentremovaldesk.com</span>
                </div>
                <p className="text-sm text-zinc-400 mt-6">
                  Vous pouvez également introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) 
                  sur <a href="https://www.cnil.fr" className="text-primary hover:underline">www.cnil.fr</a>
                </p>
              </div>

              {/* Modifications */}
              <div className="rounded-xl bg-zinc-900/30 backdrop-blur-xl p-6 border border-zinc-800/50">
                <h2 className="text-2xl font-bold text-white mb-4">Modifications de la politique</h2>
                <p className="text-zinc-300 leading-relaxed">
                  Content Removal Desk se réserve le droit de modifier cette politique de cookies à tout moment pour refléter 
                  les évolutions légales, techniques ou organisationnelles. La date de dernière mise à jour est indiquée en haut de cette page.
                </p>
              </div>

            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PolitiqueCookies;
