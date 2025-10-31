import { Phone, Mail, Instagram, Shield, Clock, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Accueil", href: "#" },
    { label: "Comment ça marche", href: "#how-it-works" },
    { label: "Avis clients", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Cas réels", href: "#cases" }
  ];

  const legal = [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
    { label: "CGV", href: "/cgv" },
    { label: "Politique de remboursement", href: "/politique-remboursement" }
  ];

  const services = [
    { label: "Suppression de contenu", href: "#" },
    { label: "Protection d'image", href: "#" },
    { label: "Surveillance continue", href: "#" },
    { label: "Conseil juridique", href: "#" },
    { label: "Intervention d'urgence", href: "#" }
  ];

  return (
    <footer className="relative border-t border-zinc-800 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 to-black pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Emergency Bar - Premium highlight */}
        <div className="border-b border-zinc-800/50">
          <div className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-zinc-900/50 via-zinc-900/80 to-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-500 group">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center border border-red-500/30 group-hover:border-red-500/50 transition-all">
                    <Phone className="h-7 w-7 text-red-500 animate-pulse" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Ligne d'urgence 24/7</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">Intervention immédiate</h3>
                    <p className="text-sm text-zinc-400">Pour les cas critiques nécessitant une action rapide</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/32460236990" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl sm:text-4xl font-bold font-display text-primary hover:text-primary/80 transition-colors flex items-center gap-2 group-hover:scale-105 transition-transform duration-300"
                >
                  +32 460 23 69 90
                  <ExternalLink className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            
            {/* Brand Column - Spans 4 columns */}
            <div className="lg:col-span-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-display font-bold text-foreground mb-3 tracking-tight">ContentRemovalDesk</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Agence française spécialisée en protection digitale. Service hybride légal-tech avec intervention humaine garantie.
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium text-zinc-300">Google Trusted</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium text-zinc-300">RGPD Compliant</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 pt-4">
                  <a href="mailto:support@contentremovaldesk.com" className="flex items-center gap-3 text-zinc-400 hover:text-primary transition-colors group">
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">support@contentremovaldesk.com</span>
                  </a>
                  <a href="https://instagram.com/crdprotect" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-400 hover:text-primary transition-colors group">
                    <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">@crdprotect</span>
                  </a>
                  <div className="flex items-center gap-3 text-zinc-400">
                    <MapPin className="h-5 w-5" />
                    <span className="text-sm">Paris, France</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">Nos Services</h4>
              <ul className="space-y-3">
                {services.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href} 
                      className="text-sm text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-3">
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href} 
                      className="text-sm text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">Légal</h4>
              <ul className="space-y-3">
                {legal.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href} 
                      className="text-sm text-zinc-400 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Availability Badge */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <div className="text-sm font-semibold text-foreground">Disponible 24/7</div>
                <div className="text-xs text-zinc-500">Réponse garantie sous 24h • Intervention d'urgence possible</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-zinc-800/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-sm text-zinc-500 text-center md:text-left">
                © {currentYear} Content Removal Desk. Tous droits réservés.
                <span className="block md:inline md:ml-2 mt-1 md:mt-0">
                  Développé avec excellence en France.
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-zinc-500 font-medium">Service actif</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
