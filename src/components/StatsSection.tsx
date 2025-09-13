const StatsSection = () => {
  const stats = [
    {
      number: "20M+",
      label: "CONTENT PIECES REMOVED",
      description: "Successfully removed unwanted content across the web"
    },
    {
      number: "375+",
      label: "WEBSITES & PLATFORMS",
      description: "Connected to major search engines and social platforms"
    },
    {
      number: "18+",
      label: "YEARS OF EXPERIENCE",
      description: "Industry-leading expertise in content removal"
    },
    {
      number: "500+",
      label: "SATISFIED CLIENTS",
      description: "Helping individuals and businesses protect their reputation"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">thousands</span> worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven track record speaks for itself. We've helped countless individuals 
            and businesses take control of their digital presence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="glass-card p-8 rounded-2xl border border-border/20 hover:border-accent/30 transition-colors duration-300">
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2 group-hover:glow-purple transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Join hundreds of satisfied clients who have successfully removed unwanted content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No upfront costs</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Success guarantee</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Completely confidential</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;