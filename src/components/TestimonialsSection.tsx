import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Marketing Executive",
      image: "/api/placeholder/60/60",
      rating: 5,
      testimonial: "Content Removal Desk saved my career. They successfully removed false accusations from Google search results in just two weeks. Professional, discrete, and incredibly effective.",
    },
    {
      name: "Michael Chen",
      title: "Business Owner",
      image: "/api/placeholder/60/60", 
      rating: 5,
      testimonial: "Outstanding service! They removed over 50 negative reviews and articles about my business. My online reputation has completely transformed. Highly recommend their services.",
    },
    {
      name: "Jennifer Martinez",
      title: "Healthcare Professional",
      image: "/api/placeholder/60/60",
      rating: 5,
      testimonial: "After a cyberbullying incident, I was devastated by what appeared online about me. This team worked tirelessly to remove all harmful content. I can't thank them enough.",
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people who have successfully removed unwanted content 
            and protected their digital reputation.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl border border-border/20 hover:border-accent/30 transition-all duration-300 group hover:scale-[1.02]"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow text-yellow" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.testimonial}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple to-purple-light rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Verified Reviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>100% Authentic</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Real Results</span>
            </div>
          </div>
          
          <div className="mt-8 glass-card p-6 rounded-xl border border-border/20 max-w-md mx-auto">
            <div className="text-2xl font-bold gradient-text mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground mb-2">Average Client Rating</div>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow text-yellow" />
              ))}
            </div>
            <div className="text-xs text-muted-foreground mt-2">Based on 500+ reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;