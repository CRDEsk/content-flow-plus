import { Shield, Users, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "Privacy Protection",
      description: "Comprehensive privacy protection services to safeguard your personal information across all digital platforms and search engines.",
      features: ["Personal data removal", "Search result cleanup", "Social media protection"]
    },
    {
      icon: Users,
      title: "Personal Protection",
      description: "Dedicated personal protection services designed to remove harmful content and protect your individual reputation online.",
      features: ["Identity protection", "Cyberbullying defense", "Personal brand management"]
    },
    {
      icon: Award,
      title: "Reputation Management", 
      description: "Professional reputation management to maintain and enhance your digital presence across all major platforms and search results.",
      features: ["Brand monitoring", "Crisis management", "Positive content promotion"]
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Emergency content removal services with guaranteed fast response times for urgent reputation and privacy concerns.",
      features: ["24/7 emergency support", "Priority handling", "Expedited removals"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital footprint management solutions tailored to protect 
            your privacy and reputation across all online platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl border border-border/20 hover:border-accent/30 transition-all duration-300 group hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple to-purple-light rounded-xl flex items-center justify-center group-hover:glow-purple transition-all duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="glass-card p-8 rounded-2xl border border-border/20 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-3">How it works</h3>
            <p className="text-muted-foreground">Our proven 4-step process to remove unwanted content</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Analysis", desc: "We analyze your digital footprint and identify problematic content" },
              { step: "2", title: "Strategy", desc: "Custom removal strategy based on platform policies and legal options" },
              { step: "3", title: "Execution", desc: "We execute takedown requests and monitor progress in real-time" },
              { step: "4", title: "Protection", desc: "Ongoing monitoring and protection to prevent future issues" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple to-purple-light rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta-yellow" size="xl">
            Get Free Consultation
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No obligation • Completely confidential • Expert advice
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;