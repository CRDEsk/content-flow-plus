import { useLanguage } from "@/hooks/useLanguage";
import { Search, Flag, BarChart3, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Search, label: t('howItWorks.step1') },
    { icon: Flag, label: t('howItWorks.step2') },
    { icon: BarChart3, label: t('howItWorks.step3') },
  ];

  const features = [
    t('howItWorks.feature1'),
    t('howItWorks.feature2'),
    t('howItWorks.feature3'),
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-1">
            {t('howItWorks.subtitle')}
          </p>
          <p className="text-xl text-muted-foreground">
            {t('howItWorks.subtitleEnd')}
          </p>
        </div>

        {/* Steps */}
        <div className="flex justify-center items-center space-x-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 hover:bg-primary/30 transition-colors">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-semibold">{step.label}</p>
              </div>
            );
          })}
        </div>

        {/* Detection Section */}
        <div className="glass-card p-8 sm:p-12 rounded-2xl border border-border/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Left: Title & Description */}
            <div>
              <p className="text-sm text-primary font-semibold mb-4">
                {t('howItWorks.detectionTitle')}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                {t('howItWorks.protectTitle')}
              </h3>
              <h4 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                {t('howItWorks.protectSubtitle')}
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('howItWorks.description')}
              </p>
            </div>

            {/* Right: Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
