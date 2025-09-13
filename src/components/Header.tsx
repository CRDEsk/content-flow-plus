import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import LanguageSelector from "./LanguageSelector";

interface HeaderProps {
  isLoggedIn?: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
}

const Header = ({ isLoggedIn = false, onLogin, onLogout }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t('nav.home'), href: "#" },
    { label: t('nav.services'), href: "#services" },
    { label: t('nav.howItWorks'), href: "#how-it-works" },
    { label: t('nav.faq'), href: "#faq" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-border/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-bold gradient-text tracking-tight">
              BUREAU SUPPRESSION
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-dark transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector />
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground font-medium">{t('nav.welcomeBack')}</span>
                <Button variant="outline" size="sm" onClick={onLogout}>
                  {t('nav.logout')}
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm" onClick={onLogin}>
                  {t('nav.login')}
                </Button>
                <Button variant="luxury" size="sm">
                  {t('nav.getStarted')}
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-accent/10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/10 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-300 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col space-y-3 px-4 pt-4 border-t border-border/10">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-muted-foreground">Language</span>
                <LanguageSelector />
              </div>
              {isLoggedIn ? (
                <>
                  <span className="text-sm text-muted-foreground font-medium">{t('nav.welcomeBack')}</span>
                  <Button variant="outline" size="sm" onClick={onLogout} className="w-full">
                    {t('nav.logout')}
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" onClick={onLogin} className="w-full">
                    {t('nav.login')}
                  </Button>
                  <Button variant="luxury" size="sm" className="w-full">
                    {t('nav.getStarted')}
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;