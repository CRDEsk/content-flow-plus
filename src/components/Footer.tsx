import { Phone, Mail, Instagram, Shield, Clock, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("footer.quickLinks.home"), href: "/" },
    { label: t("footer.quickLinks.howItWorks"), href: "/#how-it-works" },
    { label: t("footer.quickLinks.testimonials"), href: "/#testimonials" },
    { label: t("footer.quickLinks.faq"), href: "/#faq" },
    { label: t("footer.quickLinks.caseStudies"), href: "/cas-clients" }
  ];

  const legal = [
    { label: t("footer.legalLinks.legalNotice"), href: "/mentions-legales" },
    { label: t("footer.legalLinks.privacyPolicy"), href: "/politique-confidentialite" },
    { label: t("footer.legalLinks.terms"), href: "/cgv" },
    { label: t("footer.legalLinks.refundPolicy"), href: "/politique-remboursement" },
    { label: t("footer.legalLinks.cookies"), href: "/politique-cookies" }
  ];

  const services = [
    { label: t("footer.servicesLinks.contentRemoval"), href: "/notre-solution" },
    { label: t("footer.servicesLinks.legalEscalations"), href: "/escalades-legal" },
    { label: t("footer.servicesLinks.imageProtection"), href: "/escalades-legal" },
    { label: t("footer.servicesLinks.scanMonitoring"), href: "https://scan.contentremovaldesk.com/scan", external: true },
    { label: t("footer.servicesLinks.emergencyLine"), href: "https://wa.me/32460236990", external: true }
  ];

  return (
    <footer className="relative border-t border-zinc-800/50 bg-black overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-black to-black pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      
      {/* Subtle glow effects */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-5 blur-[120px] pointer-events-none" style={{ background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)` }} />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-5 blur-[100px] pointer-events-none" style={{ background: `radial-gradient(circle, hsl(var(--primary) / 0.6) 0%, transparent 70%)` }} />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Emergency Bar - Premium highlight */}
        <div className="border-b border-zinc-800/50">
          <div className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-zinc-900/50 via-zinc-900/80 to-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-primary/30 transition-all duration-500 group">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-start gap-3 sm:gap-4 w-full lg:w-auto">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center border border-red-500/30 group-hover:border-red-500/50 transition-all flex-shrink-0">
                    <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-red-500 animate-pulse" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-xs sm:text-sm font-bold text-red-500 uppercase tracking-wider">{t("footer.emergencyTitle")}</span>
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-1">{t("footer.emergencySubtitle")}</h3>
                    <p className="text-xs sm:text-sm text-zinc-400">{t("footer.emergencyDesc")}</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/32460236990" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-primary hover:text-primary/80 transition-colors flex items-center gap-2 group-hover:scale-105 transition-transform duration-300 w-full lg:w-auto justify-center lg:justify-start"
                >
                  <span className="break-all sm:break-normal">+32 460 23 69 90</span>
                  <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            
            {/* Brand Column - Spans 4 columns */}
            <div className="lg:col-span-4">
              <div className="space-y-6">
                <div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-display font-bold mb-3 tracking-tight relative group"
                  >
                    <span className="relative inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                      ContentRemovalDesk
                    </span>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-foreground via-primary/50 to-foreground bg-clip-text text-transparent blur-sm opacity-50 group-hover:opacity-70 transition-opacity duration-300" aria-hidden="true">
                      ContentRemovalDesk
                    </div>
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-zinc-400 leading-relaxed"
                  >
                    {t("footer.description")}
                  </motion.p>
                </div>

                {/* Trust Badges - Premium styling */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap gap-3"
                >
                  <div className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
                    <div className="relative">
                      <Shield className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="text-xs font-medium text-zinc-300 group-hover:text-foreground transition-colors">{t("footer.googleTrusted")}</span>
                  </div>
                  <div className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
                    <div className="relative">
                      <Shield className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="text-xs font-medium text-zinc-300 group-hover:text-foreground transition-colors">{t("footer.rgpdCompliant")}</span>
                  </div>
                </motion.div>

                {/* Contact Info - Premium styling */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-3 pt-4"
                >
                  <a href="mailto:support@contentremovaldesk.com" className="group relative flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-primary transition-all duration-300 hover:bg-zinc-900/50 hover:border-primary/20 border border-transparent">
                    <div className="relative">
                      <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">support@contentremovaldesk.com</span>
                  </a>
                  <a href="https://instagram.com/crdprotect" className="group relative flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-primary transition-all duration-300 hover:bg-zinc-900/50 hover:border-primary/20 border border-transparent">
                    <div className="relative">
                      <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">@crdprotect</span>
                  </a>
                  <a href="https://x.com/CRDFRANCE" className="group relative flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-primary transition-all duration-300 hover:bg-zinc-900/50 hover:border-primary/20 border border-transparent">
                    <div className="relative">
                      <svg className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">@CRDFRANCE</span>
                  </a>
                  <div className="flex items-center gap-3 px-3 py-2 text-zinc-400">
                    <MapPin className="h-5 w-5" />
                    <span className="text-sm">Paris, France</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-4"
            >
              <h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider relative inline-block">
                {t("footer.services")}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
              </h4>
              <ul className="space-y-2.5">
                {services.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  >
                    {item.external ? (
                      <a 
                        href={item.href}
                        target={item.href.includes('wa.me') ? '_blank' : undefined}
                        rel={item.href.includes('wa.me') ? 'noopener noreferrer' : undefined}
                        className="group relative flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-400 hover:text-primary transition-all duration-300 hover:bg-zinc-900/50 hover:border-primary/20 border border-transparent"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                      </a>
                    ) : (
                      <Link 
                        to={item.href}
                        className="group relative flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-400 hover:text-primary transition-all duration-300 hover:bg-zinc-900/50 hover:border-primary/20 border border-transparent"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider relative inline-block">
                {t("footer.legal")}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
              </h4>
              <ul className="space-y-2.5">
                {legal.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  >
                    <Link 
                      to={item.href} 
                      className="group relative flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-400 hover:text-primary transition-all duration-300 hover:bg-zinc-900/50 hover:border-primary/20 border border-transparent"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Availability Badge - Premium styling */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 backdrop-blur-xl border border-zinc-800/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
              <div className="relative">
                <Clock className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{t("footer.available")}</div>
                <div className="text-xs text-zinc-500">{t("footer.availableDesc")}</div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar - Premium styling */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-8 border-t border-zinc-800/50"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-zinc-500 text-center md:text-left">
                <span className="font-semibold">© {currentYear} <span className="text-primary/90 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">ContentRemovalDesk</span>.</span>{" "}
                {language === "fr" ? "Tous droits réservés." : "All rights reserved."}
                <span className="block md:inline md:ml-2 mt-1 md:mt-0">
                  {t("footer.developed")}
                </span>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800/50">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-green-500/50 rounded-full blur-sm animate-pulse" />
                </div>
                <span className="text-xs text-zinc-400 font-medium">{t("footer.serviceActive")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
