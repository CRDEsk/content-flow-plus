import { useLanguage } from "@/hooks/useLanguage";
import { Shield, CheckCircle } from "lucide-react";

const TrustSection = () => {
  const { t } = useLanguage();

  const metrics = [
    { value: "500k+", label: t('trust.linksRemoved') },
    { value: "223+", label: t('trust.creatorsProtected') },
    { value: "15k+", label: t('trust.contentRemoved') },
    { value: "<24h", label: t('trust.avgTime') },
    { value: "99.2%", label: t('trust.successRate') },
    { value: "500+", label: t('trust.platformsScanned') },
  ];

  return (
    <section id="trust" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('trust.title')}
          </h2>
          <p className="text-xl font-semibold text-primary mb-2">
            {t('trust.subtitle')}
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('trust.description')}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="glass-card p-6 rounded-xl border border-border/20 text-center hover:border-primary/30 transition-all hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <p className="text-sm text-muted-foreground">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Google Badge & Guarantee */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Google Recognition */}
          <div className="glass-card p-8 rounded-xl border border-border/20 flex items-center justify-center">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {t('trust.googleBadge')}
              </h3>
            </div>
          </div>

          {/* Guarantee */}
          <div className="glass-card p-8 rounded-xl border border-border/20">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {t('trust.guaranteeTitle')}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('trust.guaranteeDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
