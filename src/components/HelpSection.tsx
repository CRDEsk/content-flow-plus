import { useLanguage } from "@/hooks/useLanguage";
import { DollarSign, Heart, Shield, Lock } from "lucide-react";

const HelpSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: DollarSign,
      title: t('help.revenue.title'),
      description: t('help.revenue.desc'),
    },
    {
      icon: Heart,
      title: t('help.serenity.title'),
      description: t('help.serenity.desc'),
    },
    {
      icon: Shield,
      title: t('help.reputation.title'),
      description: t('help.reputation.desc'),
    },
    {
      icon: Lock,
      title: t('help.control.title'),
      description: t('help.control.desc'),
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto max-w-6xl">
        
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 text-sm font-semibold text-primary mb-4">
            {t('help.badge')}
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('help.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('help.subtitle')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 rounded-xl border border-border/20 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
