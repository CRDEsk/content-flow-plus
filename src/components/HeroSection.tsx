import { Button } from "@/components/ui/button";
import { BarChart, Users, Shield, Zap } from "lucide-react";

interface HeroSectionProps {
  isLoggedIn?: boolean;
}

const HeroSection = ({ isLoggedIn = false }: HeroSectionProps) => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Remove your digital{" "}
              <span className="gradient-text">footprint</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Take control of your online presence. We help individuals and businesses 
              remove unwanted content, protect their reputation, and maintain their privacy 
              across the digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {isLoggedIn ? (
                <>
                  <Button variant="premium" size="xl">
                    Access Dashboard
                  </Button>
                  <Button variant="nav-outline" size="xl">
                    View My Cases
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="cta-yellow" size="xl">
                    Start Free Consultation
                  </Button>
                  <Button variant="nav-outline" size="xl">
                    Learn More
                  </Button>
                </>
              )}
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-accent" />
                <span>Expert Team</span>
              </div>
            </div>
          </div>

          {/* Right side - Dashboard Mockup */}
          <div className="relative">
            <div className="glass-card p-6 rounded-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-lg">Removal Dashboard</h3>
                  <p className="text-sm text-muted-foreground">Real-time monitoring</p>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-card/50 p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">Active</div>
                  <div className="text-2xl font-bold gradient-text">24</div>
                </div>
                <div className="bg-card/50 p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">Removed</div>
                  <div className="text-2xl font-bold text-green-400">156</div>
                </div>
                <div className="bg-card/50 p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">Pending</div>
                  <div className="text-2xl font-bold text-yellow-400">8</div>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-card/30 p-4 rounded-lg mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">Success Rate</span>
                  <span className="text-sm font-semibold text-green-400">94.8%</span>
                </div>
                <div className="flex items-end space-x-2 h-16">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-purple to-purple-light rounded-sm flex-1"
                      style={{ height: `${Math.random() * 80 + 20}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground mb-2">Recent Activity</div>
                {[
                  { action: "Content removed", site: "Google Search", status: "success" },
                  { action: "Request submitted", site: "Social Media", status: "pending" },
                  { action: "Takedown successful", site: "News Site", status: "success" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-card/30 rounded">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        item.status === 'success' ? 'bg-green-400' : 'bg-yellow-400'
                      }`} />
                      <span className="text-sm">{item.action}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{item.site}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple to-purple-light rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow to-yellow/70 rounded-full opacity-30 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;