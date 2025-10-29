import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "On bosse avec plusieurs créatrices et c'est devenu notre partenaire officiel pour gérer les leaks. Ils sont sérieux, à jour, et surtout très réactifs. Chaque semaine, on reçoit un rapport clair pour chaque modèle. Ils savent gérer la pression et les urgences, surtout sur les sites français.",
      author: "Mathieu R.",
      role: "Agent & fondateur d'une agence de créateurs",
      rating: 5
    },
    {
      quote: "J'ai testé d'autres services mais là c'est carré. Chaque lien est suivi, j'ai un tableau avec toutes les preuves, les statuts, même les emails envoyés. J'ai repris le contrôle sur mon image.",
      author: "Sonia R.",
      role: "Créatrice OF",
      rating: 5
    },
    {
      quote: "Leur tableau est propre, simple, et tout est visible : liens détectés, supprimés, preuves, scans. Zéro prise de tête, je peux bosser tranquille pendant qu'ils gèrent mes leaks.",
      author: "Laury D.",
      role: "Créatrice digitale",
      rating: 5
    },
    {
      quote: "Ce que j'ai aimé ? Ils me donnent un update chaque semaine sans que j'aie à demander. Ils m'ont supprimé 14 liens en quelques jours, surtout sur des forums FR que je ne connaissais même pas.",
      author: "Élodie G.",
      role: "Créatrice MYM",
      rating: 5
    },
    {
      quote: "Franchement j'étais sceptique. Mais en 24h ils m'ont envoyé un scan avec plus de 30 liens exposés. Et en 1 semaine y'avait déjà des suppressions actives.",
      author: "Mélina V.",
      role: "Créatrice indépendante",
      rating: 5
    },
    {
      quote: "Merci infiniment 🙏 Votre sérieux et professionnalisme me soulagent énormément. Grâce à vous je peux avancer sereinement, me sentir clean et en sécurité à 100%. Toute ma gratitude 💜✨",
      author: "Chloinpanama.",
      role: "Créatrice MYM & OF",
      rating: 5
    },
    {
      quote: "J'ai testé un service à 200€/mois avant eux… aucune comparaison. Ici, le taf est mieux fait, plus rapide, et surtout on voit vraiment les résultats. Franchement, pour ce prix-là, c'est une pépite. Ils méritent d'être connus.",
      author: "Nina Z.",
      role: "Créatrice MYM & OF",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-8">
            <Star className="h-4 w-4 text-primary fill-primary" />
            <span className="text-sm text-zinc-400 font-medium">Témoignages vérifiés</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Avis de créateurs<br />
            <span className="gradient-text">qui nous font confiance</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de leur expérience avec nous
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative h-full bg-gradient-to-br from-zinc-900/70 to-zinc-950/70 backdrop-blur-xl rounded-2xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-500 overflow-hidden">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-8 flex flex-col h-full">
                    {/* Quote icon */}
                    <div className="mb-6">
                      <Quote className="h-10 w-10 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                      ))}
                    </div>

                    {/* Quote text */}
                    <p className="text-zinc-300 leading-relaxed mb-8 flex-grow text-sm">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="pt-6 border-t border-zinc-800/50">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-zinc-700/50">
                          <span className="text-primary font-semibold text-lg">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-zinc-500 mt-1">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-12">
            <CarouselPrevious className="relative static translate-y-0 bg-zinc-900/50 border-zinc-800/50 hover:bg-zinc-800 hover:border-primary/50" />
            <CarouselNext className="relative static translate-y-0 bg-zinc-900/50 border-zinc-800/50 hover:bg-zinc-800 hover:border-primary/50" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
