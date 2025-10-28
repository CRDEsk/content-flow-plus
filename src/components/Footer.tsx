import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        
        {/* Tagline */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-primary mb-2">
            {t('footer.tagline')}
          </h3>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/20">
          <div className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              {t('footer.legal')}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;