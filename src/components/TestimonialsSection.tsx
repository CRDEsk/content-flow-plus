import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote, Star, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const testimonials = [
    {
      quote: "Une équipe très professionnelle et réactive ! Grâce à eux, j'ai pu retirer plusieurs contenus indésirables, notamment sur Google, avec un suivi clair et efficace. Leur travail m'a permis de défendre mes droits à l'image et de reprendre le contrôle sur ma vie en ligne. Je recommande cette entreprise à 100 % 👏",
      author: "Claire Moineau",
      role: "FR",
      location: "France",
      rating: 5,
      verified: true
    },
    {
      quote: "Un service impeccable ! L'équipe est très professionnelle, agréable et réactive. Toujours à l'écoute, ils réagissent rapidement. Je suis vraiment contente du service, tout est clair, efficace et sérieux. Très pros, je recommande sans hésiter ✨",
      author: "Jessexnihilo",
      role: "BE",
      location: "Belgique",
      rating: 5,
      verified: true
    },
    {
      quote: "Super expérience. Le prix est très bas pour un tel travail! Je recommande à toutes mes collègues ! Je suis très satisfaite, la communication est super et le travail est effectué en un temps record. Merci 🙏",
      author: "Talulla",
      role: "US",
      location: "États-Unis",
      rating: 5,
      verified: true
    },
    {
      quote: "Service impeccable, bon suivi, l'équipe est très disponible et compétente.",
      author: "J.M",
      role: "BE",
      location: "Belgique",
      rating: 5,
      verified: true
    },
    {
      quote: "Je recommande ! Prix très raisonnable pour le travail de qualité effectué et le suivis régulier toutes les semaines ! Merci beaucoup ☺️",
      author: "Looana Paul",
      role: "FR",
      location: "France",
      rating: 5,
      verified: true
    },
    {
      quote: "J'utilise ces services depuis 5 mois et j'en suis très satisfaites, il est très pro, j'ai la possibilité d'avoir des rapports semestriel et des tableaux, il prend le temps de m'expliquer les choses, voilà que du positif ! Aillant beaucoup beaucoup de leak j'ai fais pas mal de recherche et je n'ai jamais trouvé un prestataire avec des prix aussi intéressants..",
      author: "Little Ava",
      role: "FR",
      location: "France",
      rating: 5,
      verified: true
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-4 sm:mb-6 lg:mb-8">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-primary fill-primary" />
            <span className="text-xs sm:text-sm text-zinc-400 font-medium">{t("testimonials.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            {t("testimonials.title")}<br />
            <span className="gradient-text">{t("testimonials.subtitle")}</span>
          </h2>
          <div className="flex justify-center mt-4 sm:mt-6">
            <Button 
              variant="outline" 
              size="lg"
              className="group border-primary/30 hover:border-primary/50 bg-zinc-900/50 hover:bg-zinc-800/50 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 text-xs sm:text-sm lg:text-base rounded-full"
              asChild
            >
              <a 
                href="https://www.trustpilot.com/review/contentremovaldesk.com"
                className="flex items-center gap-2 justify-center"
              >
                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary" />
                {t("testimonials.trustpilotButton")}
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
          </div>
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
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {testimonial.author}
                            </div>
                            {testimonial.verified && (
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                            )}
                          </div>
                          <div className="text-sm text-zinc-500 mt-1">
                            {testimonial.role} • {testimonial.location}
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
