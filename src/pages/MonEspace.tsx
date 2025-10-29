import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const MonEspace = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Mon Espace Client
              </h1>
              <p className="text-xl text-zinc-400">
                Accédez à votre tableau de bord personnalisé
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Contenus protégés</h3>
                  <p className="text-3xl font-bold text-primary">1,247</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <Activity className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Suppressions actives</h3>
                  <p className="text-3xl font-bold text-primary">23</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Taux de réussite</h3>
                  <p className="text-3xl font-bold text-primary">99.2%</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-zinc-400 mb-6">
                  Connectez-vous pour accéder à votre espace personnalisé
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold">
                  Se connecter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MonEspace;
