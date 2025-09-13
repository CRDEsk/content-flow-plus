import { Button } from "@/components/ui/button";
import { Shield, Clock, Users, BarChart3, TrendingUp, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface HeroSectionProps {
  isLoggedIn?: boolean;
}

const HeroSection = ({ isLoggedIn = false }: HeroSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/20 to-background"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                {t('hero.title')}{" "}
                <span className="gradient-text block lg:inline">
                  {t('hero.titleAccent')}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {isLoggedIn ? (
                <>
                  <Button variant="luxury" size="xl" className="font-semibold">
                    {t('hero.ctaLoggedIn')}
                  </Button>
                  <Button variant="luxury-outline" size="xl">
                    {t('hero.ctaViewCases')}
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="luxury" size="xl" className="font-semibold shadow-2xl">
                    {t('hero.ctaPrimary')}
                  </Button>
                  <Button variant="minimal" size="xl">
                    {t('hero.ctaSecondary')}
                  </Button>
                </>
              )}
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gold to-gold-dark flex items-center justify-center">
                  <Shield className="h-5 w-5 text-black" />
                </div>
                <span className="text-muted-foreground font-medium">{t('hero.trustConfidential')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gold to-gold-dark flex items-center justify-center">
                  <Clock className="h-5 w-5 text-black" />
                </div>
                <span className="text-muted-foreground font-medium">{t('hero.trustSupport')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gold to-gold-dark flex items-center justify-center">
                  <Users className="h-5 w-5 text-black" />
                </div>
                <span className="text-muted-foreground font-medium">{t('hero.trustExpert')}</span>
              </div>
            </div>
          </div>

          {/* Right side - Dashboard Mockup */}
          <div className="relative">
            <div className="elegant-card p-8 rounded-2xl animate-glow">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-bold text-xl gradient-text">Tableau de Bord</h3>
                  <p className="text-sm text-muted-foreground mt-1">Surveillance en temps réel</p>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="glass-card p-4 rounded-xl border border-border/10 hover:border-accent/30 transition-all duration-300">
                  <div className="text-xs text-muted-foreground mb-1">Actif</div>
                  <div className="text-2xl font-bold gradient-text">24</div>
                  <div className="text-xs text-green-400 flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3" />
                    +12%
                  </div>
                </div>
                <div className="glass-card p-4 rounded-xl border border-border/10 hover:border-accent/30 transition-all duration-300">
                  <div className="text-xs text-muted-foreground mb-1">Supprimé</div>
                  <div className="text-2xl font-bold text-green-400">156</div>
                  <div className="text-xs text-green-400 flex items-center gap-1 mt-1">
                    <CheckCircle className="h-3 w-3" />
                    94.8%
                  </div>
                </div>
                <div className="glass-card p-4 rounded-xl border border-border/10 hover:border-accent/30 transition-all duration-300">
                  <div className="text-xs text-muted-foreground mb-1">En cours</div>
                  <div className="text-2xl font-bold text-gold">8</div>
                  <div className="text-xs text-gold flex items-center gap-1 mt-1">
                    <BarChart3 className="h-3 w-3" />
                    -3%
                  </div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="glass-card p-6 rounded-xl mb-6 border border-border/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Taux de réussite</span>
                  <span className="text-sm font-bold text-green-400">94.8%</span>
                </div>
                <div className="flex items-end justify-between space-x-2 h-20">
                  {[65, 80, 45, 90, 75, 95, 85, 70, 88, 92, 78, 96].map((height, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-gold/80 to-gold rounded-sm flex-1 transition-all duration-500 hover:from-gold hover:to-gold-light"
                      style={{ 
                        height: `${height}%`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-muted-foreground mb-4">Activité récente</div>
                {[
                  { action: "Contenu supprimé", site: "Recherche Google", status: "success", time: "Il y a 2h" },
                  { action: "Demande soumise", site: "Réseau social", status: "pending", time: "Il y a 4h" },
                  { action: "Suppression réussie", site: "Site d'actualités", status: "success", time: "Il y a 6h" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 glass-card rounded-lg border border-border/5 hover:border-accent/20 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        item.status === 'success' ? 'bg-green-400 shadow-lg shadow-green-400/30' : 'bg-gold shadow-lg shadow-gold/30'
                      }`} />
                      <div>
                        <div className="text-sm font-medium">{item.action}</div>
                        <div className="text-xs text-muted-foreground">{item.site}</div>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-gold/20 to-gold-dark/20 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-accent/20 to-gold/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;