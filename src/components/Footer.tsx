const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-foreground mb-4">CRD</div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Tu crées. On protège.
            </p>
            <div className="flex gap-4">
              <a href="mailto:support@contentremovaldesk.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                support@contentremovaldesk.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Liens rapides</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">Comment ça marche</a></li>
              <li><a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Avis</a></li>
              <li><a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Légal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Conditions d&apos;utilisation</a></li>
            </ul>
          </div>
        </div>

        {/* Emergency Line */}
        <div className="py-6 mb-8 border-y border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-foreground mb-1">Ligne d&apos;urgence 24/7</div>
              <div className="text-xs text-muted-foreground">Pour les cas critiques nécessitant une intervention immédiate</div>
            </div>
            <a href="tel:+33123456789" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              +33 1 23 45 67 89
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>
            © {currentYear} Content Removal Desk. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/crdprotect" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Instagram
            </a>
            <span>•</span>
            <a href="https://twitter.com/crdprotect" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
