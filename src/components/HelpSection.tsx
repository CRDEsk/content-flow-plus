import { DollarSign, Shield, Crown, Lock } from "lucide-react";

const HelpSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Récupère tes revenus",
      description: "Le piratage te fait perdre de l'argent. On te permet de récupérer ce qui t'appartient."
    },
    {
      icon: Shield,
      title: "Sérénité garantie",
      description: "Les fuites de contenu sont stressantes. On gère pour que tu restes concentré sur ta création."
    },
    {
      icon: Crown,
      title: "Protège ta réputation",
      description: "On défend ton image et ton nom contre les imposteurs et le contenu volé."
    },
    {
      icon: Lock,
      title: "Tu décides, pas eux",
      description: "On t'aide à contrôler l'usage de ton contenu et à faire respecter ton consentement."
    }
  ];

  return (
    <section id="help" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 border border-primary rounded-full mb-8">
            <span className="text-sm text-foreground">On peut t&apos;aider</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            On protège ton contenu, ton image, et ta tranquillité.
          </h2>
          <p className="text-xl text-muted-foreground">
            Chaque jour, on te rend ce qui t&apos;appartient.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                      {benefit.title.includes("Récupère") && <span className="text-primary">💰</span>}
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
