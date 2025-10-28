import { useLanguage } from "@/hooks/useLanguage";
import { FileCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudiesSection = () => {
  const { t } = useLanguage();

  const cases = [
    {
      title: t('cases.case1'),
      icon: FileCheck,
    },
    {
      title: t('cases.case2'),
      icon: ShieldCheck,
    },
    {
      title: t('cases.case3'),
      icon: FileCheck,
    },
  ];

  return (
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            {t('cases.title')} <span className="text-primary">{t('cases.titleHighlight')}</span>
          </h2>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cases.map((caseItem, index) => {
            const IconComponent = caseItem.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 rounded-xl border border-border/20 hover:border-primary/30 transition-all group"
              >
                <IconComponent className="h-12 w-12 text-primary mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {caseItem.title}
                </p>
                <div className="mt-4 text-xs text-primary">Content Removal Desk</div>
              </div>
            );
          })}
        </div>

        {/* Featured Testimonial */}
        <div className="glass-card p-8 sm:p-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed italic">
              {t('cases.testimonial')}
            </p>
            <div className="font-semibold text-primary">Ava 21.</div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            {t('finalCta.title')}
          </h3>
          <Button variant="luxury" size="xl">
            {t('finalCta.button')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
