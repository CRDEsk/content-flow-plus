import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  isLoggedIn?: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
}

const Header = ({ isLoggedIn = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Mon espace", href: "/mon-espace" },
    { label: "Notre solution", href: "/notre-solution" },
    { label: "Cas Clients", href: "/#cases" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "Escalades & Légal", href: "/escalades-legal" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-black/95 backdrop-blur-2xl border-b border-zinc-800/50 shadow-2xl py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="group">
            <div className={`font-display font-bold tracking-tight text-foreground transition-all duration-500 ${
              scrolled ? "text-2xl" : "text-3xl"
            }`}>
              <span className="relative inline-block">
                CONTENTREMOVALDESK
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  CONTENTREMOVALDESK
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = item.href.startsWith('/#') 
                ? location.pathname === '/' && location.hash === item.href.slice(1)
                : location.pathname === item.href;
              
              return item.href.startsWith('/#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                    isActive ? 'text-primary' : 'text-zinc-400 hover:text-foreground'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                  }`} />
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                    isActive ? 'text-primary' : 'text-zinc-400 hover:text-foreground'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                  }`} />
                </Link>
              );
            })}
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
            {navItems.map((item) => {
              const isActive = item.href.startsWith('/#') 
                ? location.pathname === '/' && location.hash === item.href.slice(1)
                : location.pathname === item.href;
              
              return item.href.startsWith('/#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block px-4 py-3 text-sm rounded-lg transition-all duration-300 ${
                    isActive ? 'text-primary bg-primary/10' : 'text-zinc-400 hover:text-foreground hover:bg-zinc-900/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block px-4 py-3 text-sm rounded-lg transition-all duration-300 ${
                    isActive ? 'text-primary bg-primary/10' : 'text-zinc-400 hover:text-foreground hover:bg-zinc-900/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
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
