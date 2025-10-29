import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "On bosse avec plusieurs créatrices et c'est devenu notre partenaire officiel pour gérer les leaks. Ils sont sérieux, à jour, et surtout très réactifs. Chaque semaine, on reçoit un rapport clair pour chaque modèle. Ils savent gérer la pression et les urgences, surtout sur les sites français.",
      author: "Mathieu R.",
      role: "Agent & fondateur d'une agence de créateurs"
    },
    {
      quote: "J'ai testé d'autres services mais là c'est carré. Chaque lien est suivi, j'ai un tableau avec toutes les preuves, les statuts, même les emails envoyés. J'ai repris le contrôle sur mon image.",
      author: "Sonia R.",
      role: "Créatrice OF"
    },
    {
      quote: "Leur tableau est propre, simple, et tout est visible : liens détectés, supprimés, preuves, scans. Zéro prise de tête, je peux bosser tranquille pendant qu'ils gèrent mes leaks.",
      author: "Laury D.",
      role: "Créatrice digitale"
    },
    {
      quote: "Ce que j'ai aimé ? Ils me donnent un update chaque semaine sans que j'aie à demander. Ils m'ont supprimé 14 liens en quelques jours, surtout sur des forums FR que je ne connaissais même pas.",
      author: "Élodie G.",
      role: "Créatrice MYM"
    },
    {
      quote: "Franchement j'étais sceptique. Mais en 24h ils m'ont envoyé un scan avec plus de 30 liens exposés. Et en 1 semaine y'avait déjà des suppressions actives.",
      author: "Mélina V.",
      role: "Créatrice indépendante"
    },
    {
      quote: "Merci infiniment 🙏 Votre sérieux et professionnalisme me soulagent énormément. Grâce à vous je peux avancer sereinement, me sentir clean et en sécurité à 100%. Toute ma gratitude 💜✨",
      author: "Chloinpanama.",
      role: "Créatrice MYM & OF"
    },
    {
      quote: "J'ai testé un service à 200€/mois avant eux… aucune comparaison. Ici, le taf est mieux fait, plus rapide, et surtout on voit vraiment les résultats. Franchement, pour ce prix-là, c'est une pépite. Ils méritent d'être connus.",
      author: "Nina Z.",
      role: "Créatrice MYM & OF"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Avis de créateurs<br />
            <span className="text-primary">qui nous font confiance</span>
          </h2>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-8 h-full bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-primary/50 transition-all">
                  <p className="text-muted-foreground leading-relaxed mb-6 min-h-[200px]">
                    {testimonial.quote}
                  </p>
                  <div className="pt-4 border-t border-zinc-800">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground mt-1">{testimonial.role}</div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;