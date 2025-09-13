import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Shield, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-card/50 pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-xl font-bold gradient-text mb-4">
              CONTENT REMOVAL DESK
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Professional digital footprint management and content removal services. 
              Protecting your privacy and reputation across the digital landscape.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-accent" />
                <span>Secure & Confidential</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Content Removal",
                "Reputation Management", 
                "Privacy Protection",
                "Search Result Cleanup",
                "Social Media Protection",
                "Legal Takedowns"
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "How It Works",
                "Success Stories",
                "Privacy Policy", 
                "Terms of Service",
                "Contact Us"
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium">1-800-REMOVAL</div>
                  <div className="text-sm text-muted-foreground">24/7 Emergency Line</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium">support@contentremovaldesk.com</div>
                  <div className="text-sm text-muted-foreground">Get expert advice</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium">Response Time</div>
                  <div className="text-sm text-muted-foreground">Within 2 hours</div>
                </div>
              </div>
            </div>

            <Button variant="cta-yellow" size="sm" className="mt-6 w-full">
              Get Free Consultation
            </Button>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="glass-card p-6 rounded-xl border border-accent/20 mb-8 bg-gradient-to-r from-accent/10 to-purple/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div>
                <div className="font-semibold">Emergency Content Removal</div>
                <div className="text-sm text-muted-foreground">Crisis situations require immediate action</div>
              </div>
            </div>
            <Button variant="premium" size="lg">
              Emergency Line: 1-800-REMOVAL
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Content Removal Desk. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;