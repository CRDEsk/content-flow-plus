import { Button } from '@/components/ui/button';
import { Shield, Scan, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

interface BlogCTAProps {
  variant: 'scan' | 'contact' | 'expert';
  position?: 'intro' | 'mid' | 'end';
}

const BlogCTA = ({ variant, position = 'mid' }: BlogCTAProps) => {
  const { language, t } = useLanguage();

  const ctaConfig = {
    scan: {
      title: language === 'fr' 
        ? 'Vérifiez gratuitement si vos contenus circulent en ligne'
        : 'Check if your content is circulating online for free',
      subtitle: language === 'fr'
        ? 'Scanner CRD — Analyse en 1 minute'
        : 'CRD Scanner — Analysis in 1 minute',
      buttonText: language === 'fr'
        ? 'Scanner mon contenu gratuitement'
        : 'Scan My Content Free',
      buttonIcon: Scan,
      href: 'https://scan.contentremovaldesk.com',
      gradient: 'from-primary/20 via-primary/10 to-primary/5',
      borderColor: 'border-primary/30',
    },
    contact: {
      title: language === 'fr'
        ? 'Besoin de faire retirer des contenus ?'
        : 'Need to remove content?',
      subtitle: language === 'fr'
        ? 'Contactez un expert CRD — Réponse en moins de 30 minutes'
        : 'Contact a CRD expert — Response in under 30 minutes',
      buttonText: language === 'fr'
        ? 'Contacter un expert'
        : 'Contact an Expert',
      buttonIcon: MessageCircle,
      href: 'https://wa.me/32460236990',
      gradient: 'from-blue-500/20 via-blue-500/10 to-blue-500/5',
      borderColor: 'border-blue-500/30',
    },
    expert: {
      title: language === 'fr'
        ? 'Parlez à un spécialiste CRD'
        : 'Talk to a CRD Specialist',
      subtitle: language === 'fr'
        ? 'Intervention rapide garantie — Protection discrète et efficace'
        : 'Guaranteed rapid intervention — Discreet and effective protection',
      buttonText: language === 'fr'
        ? 'Démarrer maintenant'
        : 'Get Started Now',
      buttonIcon: Shield,
      href: 'https://espace.contentremovaldesk.com/auth?mode=signup',
      gradient: 'from-primary/20 via-primary/10 to-primary/5',
      borderColor: 'border-primary/40',
    },
  };

  const config = ctaConfig[variant];
  const Icon = config.buttonIcon;

  // Different styling based on position
  const containerClass = position === 'intro'
    ? 'mb-8 mt-6'
    : position === 'mid'
    ? 'my-12'
    : 'mt-12 mb-8';

  const sizeClass = position === 'end'
    ? 'p-8 lg:p-10'
    : 'p-6 lg:p-8';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={containerClass}
    >
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${config.gradient} border ${config.borderColor} ${sizeClass} shadow-xl group`}>
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${config.gradient} border ${config.borderColor}`}>
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {config.title}
                </h3>
              </div>
              <p className="text-zinc-300 text-sm md:text-base">
                {config.subtitle}
              </p>
            </div>
            
            <Button
              asChild
              size={position === 'end' ? 'lg' : 'default'}
              className={`bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 ${
                position === 'end' ? 'px-8 py-6 text-base' : 'px-6'
              }`}
            >
              <a 
                href={config.href}
                target={variant === 'expert' ? '_self' : '_blank'}
                rel={variant === 'expert' ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-2"
              >
                <span>{config.buttonText}</span>
                {variant === 'expert' ? (
                  <ArrowRight className="w-4 h-4" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCTA;

