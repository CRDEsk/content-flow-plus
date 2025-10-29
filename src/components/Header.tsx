import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  isLoggedIn?: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
}

const Header = ({ isLoggedIn = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Accueil", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Comment ça marche", href: "#how-it-works" },
    { label: "Avis", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-2xl border-b border-zinc-800/50 shadow-2xl" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-6 w-6 text-black" />
            </div>
            <div>
              <div className="text-xl font-display font-bold text-foreground tracking-tight">
                CRD
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider leading-none">
                Protection
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-foreground transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              size="sm"
              variant="ghost"
              className="text-zinc-400 hover:text-foreground font-medium"
            >
              Connexion
            </Button>
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-black font-semibold rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
            >
              Commencer
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-xl text-foreground hover:bg-zinc-900 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-zinc-800/50 py-6 space-y-1 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-sm text-zinc-400 hover:text-foreground hover:bg-zinc-900/50 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-4 space-y-3 border-t border-zinc-800/50 mt-4">
              <Button 
                size="sm"
                variant="outline"
                className="w-full border-zinc-800 hover:border-primary/50 text-foreground"
              >
                Connexion
              </Button>
              <Button 
                size="sm"
                className="w-full bg-primary hover:bg-primary/90 text-black font-semibold rounded-full"
              >
                Commencer
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
