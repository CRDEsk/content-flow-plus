import { useLanguage } from "@/hooks/useLanguage";
import { Shield } from "lucide-react";

const TrustSection = () => {
  const { t } = useLanguage();

  const metricsLeft = [
    { value: "500k+", label: "Liens\nsupprimés" },
    { value: "223+", label: "Créateurs\nprotégés" },
    { value: "15k+", label: "Contenus\nsupprimés" },
  ];

  const metricsRight = [
    { value: "<24h", label: "Délai moyen\nde retrait" },
    { value: "99.2%", label: "Taux de\nréussite" },
    { value: "500+", label: "Plateformes\nscannées" },
  ];

  return (
    <section id="trust" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-4 py-2 border border-primary rounded-full mb-8">
            <span className="text-sm text-foreground">Pourquoi nous faire confiance ?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Les résultats<br />parlent d&apos;eux-mêmes.
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Chaque scan, chaque retrait, chaque victoire est comptée.<br />
            Voici ce qu&apos;on a accompli jusqu&apos;ici :
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Left Column - Metrics Grid */}
          <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800">
            <div className="grid grid-cols-2 gap-x-12 gap-y-8">
              {metricsLeft.map((metric, index) => (
                <div key={index} className="text-left">
                  <div className="text-5xl font-bold text-primary mb-3">
                    {metric.value}
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {metric.label}
                  </p>
                </div>
              ))}
              {metricsRight.map((metric, index) => (
                <div key={index} className="text-left">
                  <div className="text-5xl font-bold text-primary mb-3">
                    {metric.value}
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Google Badge & Guarantee */}
          <div className="flex flex-col gap-6">
            
            {/* Google Recognition */}
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 flex-1 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Agence reconnue par Google
              </h3>
              <div className="bg-white rounded-xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 relative">
                  <svg viewBox="0 0 48 48" className="w-full h-full">
                    <circle cx="24" cy="24" r="20" fill="none" stroke="#4285F4" strokeWidth="4"/>
                    <path d="M24 4 A20 20 0 0 1 44 24" fill="none" stroke="#EA4335" strokeWidth="4"/>
                    <path d="M44 24 A20 20 0 0 1 24 44" fill="none" stroke="#FBBC05" strokeWidth="4"/>
                    <path d="M24 44 A20 20 0 0 1 4 24" fill="none" stroke="#34A853" strokeWidth="4"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-sm">Google&apos;s Trusted</div>
                  <div className="font-semibold text-gray-900 text-sm">Copyright Removal Program</div>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 flex-1">
              <div className="flex items-start gap-4">
                <Shield className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Garantie & confidentialité
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Protection 100% confidentielle Aucune info partagée. Chaque demande est traitée manuellement, sans bots, dans un environnement sécurisé.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
