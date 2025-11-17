import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Zap, 
  Bell, 
  ArrowRight,
  Check,
  Smartphone,
  Clock,
  Lock,
  Search,
  Trash2,
  Eye,
  Scale,
  Video,
  Image,
  Users,
  TrendingUp,
  FileText,
  AlertCircle,
  Mail,
  MessageSquare,
  Sparkles,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const PourCreateurs = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    document.title = "Pour Créateurs | ContentRemovalDesk - Protection Adaptée à Ton Métier";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "CRD s'adapte automatiquement à ton métier et tes risques. Protection pour créateurs MYM/OnlyFans, webcam, modèles photo, influenceurs. Une seule interface, une protection complète.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Header />

      {/* SECTION 1 - Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-20">
        {/* Optimized animated background - Safari optimized, minimal effects */}
        <div className="absolute inset-0 overflow-hidden" style={{ 
          transform: 'translateZ(0)', 
          WebkitTransform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden'
        } as React.CSSProperties}>
          {/* Simplified gradient orbs - only 2 for performance with subtle movement */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-[800px] h-[800px]"
            animate={{
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.1, 1],
              x: [0, 20, -15, 0],
              y: [0, -15, 20, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: 'radial-gradient(circle at center, rgba(255, 223, 125, 0.15) 0%, rgba(255, 223, 125, 0.08) 40%, transparent 70%)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px]"
            animate={{
              opacity: [0.35, 0.55, 0.35],
              scale: [1, 1.08, 1],
              x: [0, -20, 15, 0],
              y: [0, 15, -20, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            style={{
              background: 'radial-gradient(circle at center, rgba(255, 223, 125, 0.12) 0%, rgba(255, 223, 125, 0.06) 40%, transparent 70%)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties}
          />
          {/* Subtle animated grid overlay */}
          <motion.div 
            className="absolute inset-0 opacity-[0.03]"
            animate={{
              opacity: [0.03, 0.05, 0.03]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              backgroundImage: 'linear-gradient(rgba(255, 223, 125, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 223, 125, 1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            } as React.CSSProperties}
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [0, -8, 0]
            }}
            transition={{ 
              opacity: { duration: 0.6 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }
            }}
            className="text-center space-y-8"
          >
            {/* Badge - Simplified with subtle icon animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: 0
              }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-primary/15 via-primary/20 to-primary/15 backdrop-blur-xl border border-primary/40"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                } as React.CSSProperties}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </motion.div>
              <span className="text-xs sm:text-sm font-semibold text-primary">
                Protection Adaptée
              </span>
            </motion.div>

            {/* Headline - Simplified with subtle scale pulse */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display font-bold leading-[1.1] tracking-tight"
            >
              <motion.span 
                className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-6"
                animate={{
                  scale: [1, 1.01, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2
                }}
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                } as React.CSSProperties}
              >
                CRD n'est pas une simple plateforme.
              </motion.span>
            </motion.h1>

            {/* Subheadline - Simplified */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-xl sm:text-2xl lg:text-3xl text-zinc-200 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Ton espace sécurisé pour protéger ton contenu, ton image et ta tranquillité.
            </motion.p>

            {/* Core Message - Simplified */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 max-w-2xl mx-auto"
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-lg sm:text-xl text-zinc-300 leading-relaxed mb-4"
              >
                CRD s'adapte automatiquement à ton métier et tes risques.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-xl sm:text-2xl font-semibold text-foreground"
              >
                Une seule plateforme. Une protection calibrée pour toi.
              </motion.p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  opacity: { delay: 0.6, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }
                }}
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                } as React.CSSProperties}
              >
                <Button
                  size="lg"
                  className="group relative bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary text-black font-semibold rounded-full px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 text-base sm:text-lg lg:text-xl transition-all duration-300 w-full sm:w-auto cursor-pointer border border-primary/30"
                  asChild
                >
                  <a href="https://espace.contentremovaldesk.com">
                    <span className="flex items-center gap-2 sm:gap-3 justify-center">
                      <motion.span
                        animate={{
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2
                        }}
                        style={{
                          display: 'inline-block',
                          transform: 'translateZ(0)',
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                        } as React.CSSProperties}
                      >
                        <Zap className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
                      </motion.span>
                      <span className="text-sm sm:text-base lg:text-lg">Mon espace CRD</span>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </span>
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-2 border-zinc-800 hover:border-primary/50 bg-black/50 backdrop-blur-xl text-foreground font-semibold rounded-full px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 text-base sm:text-lg lg:text-xl hover:bg-zinc-900/50 transition-all duration-300 w-full sm:w-auto"
                  asChild
                >
                  <Link to="/tarifs">
                    <span className="flex items-center gap-3 justify-center">
                      Voir les tarifs
                      <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - Creator Types - Enhanced & Animated */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Tabs for Desktop - Beautiful Switcher */}
          <div className="hidden lg:flex items-center justify-center gap-2 mb-12 p-2 bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800/50 shadow-lg">
            {[
              { id: 0, label: "MYM & OnlyFans", icon: Shield },
              { id: 1, label: "Webcam", icon: Video },
              { id: 2, label: "Photo & Cosplay", icon: Image },
              { id: 3, label: "Influenceurs", icon: TrendingUp },
              { id: 4, label: "Hybrides", icon: Users }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-foreground'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 rounded-xl shadow-lg shadow-primary/20"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Mobile: Stacked Cards | Desktop: Single Active Card */}
          <div className="space-y-16 sm:space-y-24 lg:space-y-0">
            {/* Mobile: All Cards Stacked */}
            <div className="lg:hidden space-y-16 sm:space-y-24">
              {/* MYM & OnlyFans - Mobile */}
              <motion.div
                initial={{ y: 30, scale: 0.95 }}
                whileInView={{ y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.01, y: -5 }}
                className="group relative rounded-3xl p-8 sm:p-12 lg:p-16 transition-all duration-500 overflow-hidden"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(30px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  border: '1px solid rgba(255, 223, 125, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)',
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  isolation: 'isolate',
                  opacity: 1,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.4)';
                  e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(255, 223, 125, 0.2), inset 0 0 80px rgba(255, 223, 125, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.2)';
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)';
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-8">
                    <motion.div 
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
                        Créateurs MYM & OnlyFans
                      </h2>
                      <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
                        Ton contenu est premium. Il circule vite, parfois sans ton accord.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-base sm:text-lg text-zinc-300 mb-6">
                      Dans ton Espace CRD, tu peux :
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Scanner automatiquement tes fuites",
                        "Supprimer les contenus repostés sur les sites pirates",
                        "Nettoyer les clones, mirrors et forums",
                        "Suivre chaque retrait avec preuve",
                        "Lancer une escalade légale si un site résiste"
                      ].map((feature, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.4 }}
                          className="flex items-start gap-3 group/item"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          </motion.div>
                          <span className="text-base sm:text-lg text-zinc-300 group-hover/item:text-foreground transition-colors">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.p 
                    className="text-lg sm:text-xl font-semibold text-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Tu continues à créer. Nous, on efface ce qui ne devrait pas être là.
                  </motion.p>
                </div>
              </motion.div>

              {/* Webcam & Studios - Mobile */}
              <motion.div
                initial={{ y: 30, scale: 0.95 }}
                whileInView={{ y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.01, y: -5 }}
                className="group relative rounded-3xl p-8 sm:p-12 lg:p-16 transition-all duration-500 overflow-hidden"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(30px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  border: '1px solid rgba(255, 223, 125, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)',
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  isolation: 'isolate',
                  opacity: 1,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.4)';
                  e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(255, 223, 125, 0.2), inset 0 0 80px rgba(255, 223, 125, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.2)';
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)';
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-8">
                    <motion.div 
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Video className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
                        Modèles webcam & studios cam
                      </h2>
                      <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
                        Tes lives sont souvent enregistrés. Ces vidéos finissent sur des sites où tu n'as aucun contrôle.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-base sm:text-lg text-zinc-300 mb-6">
                      CRD te protège grâce à :
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "La détection automatique de vidéos volées",
                        "Le retrait rapide des enregistrements illégaux",
                        "La surveillance continue des plateformes pirates",
                        "Les escalades techniques si le site ne coopère"
                      ].map((feature, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                          className="flex items-start gap-3 group/item"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          </motion.div>
                          <span className="text-base sm:text-lg text-zinc-300 group-hover/item:text-foreground transition-colors">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.p 
                    className="text-lg sm:text-xl font-semibold text-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Le live est ton métier. Tout ce qui en sort, on le gère.
                  </motion.p>
                </div>
              </motion.div>

              {/* Photo Models - Mobile */}
              <motion.div
                initial={{ y: 30, scale: 0.95 }}
                whileInView={{ y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.01, y: -5 }}
                className="group relative rounded-3xl p-8 sm:p-12 lg:p-16 transition-all duration-500 overflow-hidden"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(30px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  border: '1px solid rgba(255, 223, 125, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)',
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  isolation: 'isolate',
                  opacity: 1,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.4)';
                  e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(255, 223, 125, 0.2), inset 0 0 80px rgba(255, 223, 125, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.2)';
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)';
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-8">
                    <motion.div 
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
                        Modèles photo, cosplay & créateurs visuels
                      </h2>
                      <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
                        Tu travailles avec ton image, tes mises en scène, ton esthétique. Une fuite ou un vol d'identité peut te suivre longtemps.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-base sm:text-lg text-zinc-300 mb-6">
                      CRD t'aide à :
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Surveiller l'usage de ton image partout",
                        "Détecter les copies, les montages, les réutilisations",
                        "Supprimer les profils fake",
                        "Désindexer tes photos des moteurs de recherche"
                      ].map((feature, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                          className="flex items-start gap-3 group/item"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          </motion.div>
                          <span className="text-base sm:text-lg text-zinc-300 group-hover/item:text-foreground transition-colors">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.p 
                    className="text-lg sm:text-xl font-semibold text-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Ton image t'appartient. Nous veillons dessus pour toi.
                  </motion.p>
                </div>
              </motion.div>

              {/* Influencers - Mobile */}
              <motion.div
                initial={{ y: 30, scale: 0.95 }}
                whileInView={{ y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.01, y: -5 }}
                className="group relative rounded-3xl p-8 sm:p-12 lg:p-16 transition-all duration-500 overflow-hidden"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(30px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  border: '1px solid rgba(255, 223, 125, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)',
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  isolation: 'isolate',
                  opacity: 1,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.4)';
                  e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(255, 223, 125, 0.2), inset 0 0 80px rgba(255, 223, 125, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.2)';
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)';
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-8">
                    <motion.div 
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
                        Influenceurs & micro-influenceurs
                      </h2>
                      <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
                        Même sans contenu sensible, tu es exposé : faux comptes, deepfakes, arnaques, usurpations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-base sm:text-lg text-zinc-300 mb-6">
                      Dans CRD, tu peux :
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Signaler et faire tomber les faux profils",
                        "Surveiller les clones et escroqueries",
                        "Protéger ton nom et ton identité",
                        "Supprimer immédiatement une vidéo ou photo réutilisée"
                      ].map((feature, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                          className="flex items-start gap-3 group/item"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          </motion.div>
                          <span className="text-base sm:text-lg text-zinc-300 group-hover/item:text-foreground transition-colors">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.p 
                    className="text-lg sm:text-xl font-semibold text-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Ton audience te suit. Nous protégeons tout ce qui pourrait l'abuser.
                  </motion.p>
                </div>
              </motion.div>

              {/* Hybrid Creators - Mobile */}
              <motion.div
                initial={{ y: 30, scale: 0.95 }}
                whileInView={{ y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.01, y: -5 }}
                className="group relative rounded-3xl p-8 sm:p-12 lg:p-16 transition-all duration-500 overflow-hidden"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(30px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  border: '1px solid rgba(255, 223, 125, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)',
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  isolation: 'isolate',
                  opacity: 1,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.4)';
                  e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(255, 223, 125, 0.2), inset 0 0 80px rgba(255, 223, 125, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.2)';
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)';
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-8">
                    <motion.div 
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
                        Créateurs hybrides : lifestyle, coaching, musique, fitness…
                      </h2>
                      <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
                        Plus ton audience grandit, plus les risques augmentent.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-base sm:text-lg text-zinc-300 mb-6">
                      CRD te protège contre :
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "L'utilisation non-autorisée de ton contenu",
                        "Le repost massif sans crédit",
                        "Les faux abonnements / fausses offres",
                        "Les plateformes qui aspirent tes vidéos sans ton accord"
                      ].map((feature, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                          className="flex items-start gap-3 group/item"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          </motion.div>
                          <span className="text-base sm:text-lg text-zinc-300 group-hover/item:text-foreground transition-colors">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.p 
                    className="text-lg sm:text-xl font-semibold text-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Ton univers est large. Notre protection l'est encore plus.
                  </motion.p>
                </div>
              </motion.div>
            </div>

            {/* Desktop: Single Active Card with Tabs */}
            <AnimatePresence mode="wait">
              {/* MYM & OnlyFans - Desktop */}
              {activeTab === 0 && (
              <motion.div
                key="mym"
                initial={{ y: 30, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: -30, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.01, y: -5 }}
                className="hidden lg:block group relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl rounded-3xl border border-zinc-800/50 hover:border-primary/50 p-8 sm:p-12 lg:p-16 shadow-[0_18px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_25px_50px_rgba(255,223,125,0.15)] transition-all duration-500 overflow-hidden"
                style={{
                  opacity: 1,
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  isolation: 'isolate',
                } as React.CSSProperties}
              >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              />
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-8">
                  <motion.div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
                      Créateurs MYM & OnlyFans
                    </h2>
                    <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
                      Ton contenu est premium. Il circule vite, parfois sans ton accord.
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <p className="text-base sm:text-lg text-zinc-300 mb-6">
                    Dans ton Espace CRD, tu peux :
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Scanner automatiquement tes fuites",
                      "Supprimer les contenus repostés sur les sites pirates",
                      "Nettoyer les clones, mirrors et forums",
                      "Suivre chaque retrait avec preuve",
                      "Lancer une escalade légale si un site résiste"
                    ].map((feature, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        </motion.div>
                        <span className="text-base sm:text-lg text-zinc-300 group-hover/item:text-foreground transition-colors">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.p 
                  className="text-lg sm:text-xl font-semibold text-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Tu continues à créer. Nous, on efface ce qui ne devrait pas être là.
                </motion.p>
              </div>
            </motion.div>
              )}

            {/* Webcam & Studios - Enhanced */}
            {activeTab === 1 && (
            <motion.div
              key="webcam"
              initial={{ y: 30, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.01, y: -5 }}
              className="hidden lg:block group relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl rounded-3xl border border-zinc-800/50 hover:border-primary/50 p-8 sm:p-12 lg:p-16 shadow-[0_18px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_25px_50px_rgba(255,223,125,0.15)] transition-all duration-500 overflow-hidden"
              style={{
                opacity: 1,
                transform: 'translate3d(0, 0, 0)',
                WebkitTransform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                isolation: 'isolate',
              } as React.CSSProperties}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              />
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-8">
                  <motion.div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Video className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
                      Modèles webcam & studios cam
                    </h2>
                    <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
                      Tes lives sont souvent enregistrés. Ces vidéos finissent sur des sites où tu n'as aucun contrôle.
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <p className="text-base sm:text-lg text-zinc-300 mb-6">
                    CRD te protège grâce à :
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "La détection automatique de vidéos volées",
                      "Le retrait rapide des enregistrements illégaux",
                      "La surveillance continue des plateformes pirates",
                      "Les escalades techniques si le site ne coopère"
                    ].map((feature, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        </motion.div>
                        <span className="text-base sm:text-lg text-zinc-300 group-hover/item:text-foreground transition-colors">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.p 
                  className="text-lg sm:text-xl font-semibold text-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Le live est ton métier. Tout ce qui en sort, on le gère.
                </motion.p>
              </div>
            </motion.div>
            )}

            {/* Photo Models - Enhanced */}
            {activeTab === 2 && (
            <motion.div
              key="photo"
              initial={{ y: 30, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.01, y: -5 }}
              className="hidden lg:block group relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl rounded-3xl border border-zinc-800/50 hover:border-primary/50 p-8 sm:p-12 lg:p-16 shadow-[0_18px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_25px_50px_rgba(255,223,125,0.15)] transition-all duration-500 overflow-hidden"
              style={{
                opacity: 1,
                transform: 'translate3d(0, 0, 0)',
                WebkitTransform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                isolation: 'isolate',
              } as React.CSSProperties}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              />
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-8">
                  <motion.div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
                      Modèles photo, cosplay & créateurs visuels
                    </h2>
                    <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
                      Tu travailles avec ton image, tes mises en scène, ton esthétique. Une fuite ou un vol d'identité peut te suivre longtemps.
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <p className="text-base sm:text-lg text-zinc-300 mb-6">
                    CRD t'aide à :
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Surveiller l'usage de ton image partout",
                      "Détecter les copies, les montages, les réutilisations",
                      "Supprimer les profils fake",
                      "Désindexer tes photos des moteurs de recherche"
                    ].map((feature, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        </motion.div>
                        <span className="text-base sm:text-lg text-zinc-300 group-hover/item:text-foreground transition-colors">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.p 
                  className="text-lg sm:text-xl font-semibold text-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Ton image t'appartient. Nous veillons dessus pour toi.
                </motion.p>
              </div>
            </motion.div>
            )}

            {/* Influencers - Enhanced */}
            {activeTab === 3 && (
            <motion.div
              key="influencers"
              initial={{ y: 30, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.01, y: -5 }}
              className="hidden lg:block group relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl rounded-3xl border border-zinc-800/50 hover:border-primary/50 p-8 sm:p-12 lg:p-16 shadow-[0_18px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_25px_50px_rgba(255,223,125,0.15)] transition-all duration-500 overflow-hidden"
              style={{
                opacity: 1,
                transform: 'translate3d(0, 0, 0)',
                WebkitTransform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                isolation: 'isolate',
              } as React.CSSProperties}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              />
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-8">
                  <motion.div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
                      Influenceurs & micro-influenceurs
                    </h2>
                    <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
                      Même sans contenu sensible, tu es exposé : faux comptes, deepfakes, arnaques, usurpations.
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <p className="text-base sm:text-lg text-zinc-300 mb-6">
                    Dans CRD, tu peux :
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Signaler et faire tomber les faux profils",
                      "Surveiller les clones et escroqueries",
                      "Protéger ton nom et ton identité",
                      "Supprimer immédiatement une vidéo ou photo réutilisée"
                    ].map((feature, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        </motion.div>
                        <span className="text-base sm:text-lg text-zinc-300 group-hover/item:text-foreground transition-colors">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.p 
                  className="text-lg sm:text-xl font-semibold text-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Ton audience te suit. Nous protégeons tout ce qui pourrait l'abuser.
                </motion.p>
              </div>
            </motion.div>
            )}

            {/* Hybrid Creators - Enhanced */}
            {activeTab === 4 && (
            <motion.div
              key="hybrid"
              initial={{ y: 30, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.01, y: -5 }}
              className="hidden lg:block group relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-xl rounded-3xl border border-zinc-800/50 hover:border-primary/50 p-8 sm:p-12 lg:p-16 shadow-[0_18px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_25px_50px_rgba(255,223,125,0.15)] transition-all duration-500 overflow-hidden"
              style={{
                opacity: 1,
                transform: 'translate3d(0, 0, 0)',
                WebkitTransform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                isolation: 'isolate',
              } as React.CSSProperties}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              />
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-8">
                  <motion.div 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
                      Créateurs hybrides : lifestyle, coaching, musique, fitness…
                    </h2>
                    <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
                      Plus ton audience grandit, plus les risques augmentent.
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <p className="text-base sm:text-lg text-zinc-300 mb-6">
                    CRD te protège contre :
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "L'utilisation non-autorisée de ton contenu",
                      "Le repost massif sans crédit",
                      "Les faux abonnements / fausses offres",
                      "Les plateformes qui aspirent tes vidéos sans ton accord"
                    ].map((feature, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        </motion.div>
                        <span className="text-base sm:text-lg text-zinc-300 group-hover/item:text-foreground transition-colors">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.p 
                  className="text-lg sm:text-xl font-semibold text-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Ton univers est large. Notre protection l'est encore plus.
                </motion.p>
              </div>
            </motion.div>
            )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Experience - Enhanced & Animated */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-primary/2 via-zinc-950/50 to-transparent">
        {/* Subtle glow continuation */}
        <div className="absolute inset-0" style={{ willChange: 'opacity', transform: 'translateZ(0)' }}>
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1000px] h-[200px] sm:h-[300px] rounded-full opacity-8 sm:opacity-12 blur-[80px] sm:blur-[100px]"
            animate={{
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: `radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 60%)`,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              willChange: 'opacity'
            } as React.CSSProperties}
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-4 sm:mb-6">
              <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">Ton espace</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Une expérience pensée pour ton rythme
            </h2>
            <p className="text-xl sm:text-2xl text-zinc-400 max-w-3xl mx-auto">
              Tout ce dont tu as besoin est accessible depuis ton espace sécurisé CRD
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Zap, text: "Scan en 1 clic" },
              { icon: Clock, text: "Résultats instantanés (fuites, images, vidéos)" },
              { icon: Trash2, text: "Actions rapides : supprimer, désindexer, signaler" },
              { icon: FileText, text: "Historique complet des retraits" },
              { icon: Shield, text: "Preuves & rapports" },
              { icon: Bell, text: "Alertes Telegram et email" },
              { icon: Scale, text: "Lancement d'escalades légales directement depuis l'interface" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, scale: 0.96 }}
                whileInView={{ y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative flex items-start gap-4 p-6 sm:p-8 rounded-2xl transition-all duration-500 overflow-hidden"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(30px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  border: '1px solid rgba(255, 223, 125, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)',
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  isolation: 'isolate',
                  opacity: 1,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.4)';
                  e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(255, 223, 125, 0.2), inset 0 0 80px rgba(255, 223, 125, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.2)';
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)';
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                />
                <motion.div 
                  className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/20"
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <span className="relative z-10 text-base sm:text-lg text-foreground font-medium pt-2 group-hover:text-primary transition-colors">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-12 sm:mt-16"
          >
            <p className="text-xl sm:text-2xl font-semibold text-foreground">
              Tu n'as pas besoin d'une autre version.
            </p>
            <p className="text-lg sm:text-xl text-zinc-400 mt-2">
              Ton espace CRD sait exactement comment t'aider.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - Why CRD - Enhanced & Animated */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-transparent via-zinc-950/30 to-transparent">
        {/* Subtle glow continuation */}
        <div className="absolute inset-0" style={{ willChange: 'opacity', transform: 'translateZ(0)' }}>
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[180px] sm:h-[250px] rounded-full opacity-6 sm:opacity-10 blur-[70px] sm:blur-[90px]"
            animate={{
              opacity: [0.06, 0.1, 0.06],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: `radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 65%)`,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              willChange: 'opacity'
            } as React.CSSProperties}
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-4 sm:mb-6">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span className="text-xs sm:text-sm text-zinc-400 font-medium">Pourquoi CRD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Pourquoi CRD est essentiel pour les créateurs ?
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto mb-8">
              Tu n'as pas le temps d'envoyer 30 mails. Tu n'as pas les contacts, ni les bonnes portes d'entrée. Ces plateformes ne coopèrent pas facilement.
            </p>
          </motion.div>

          {/* Services Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Search,
                title: "Le repérage",
                description: "Scan intelligent hebdomadaire sur tous les moteurs de recherche. Détection automatique des fuites, clones et mirrors.",
                gradient: "from-blue-500/20 to-blue-500/5"
              },
              {
                icon: Trash2,
                title: "Le retrait",
                description: "Suppression manuelle et automatique des contenus. Désindexation des moteurs de recherche en un clic.",
                gradient: "from-red-500/20 to-red-500/5"
              },
              {
                icon: Eye,
                title: "La surveillance",
                description: "Surveillance continue des reposts. Alertes en temps réel dès qu'un nouveau contenu apparaît.",
                gradient: "from-purple-500/20 to-purple-500/5"
              },
              {
                icon: Scale,
                title: "Les escalades",
                description: "Escalades juridiques et techniques intégrées. Gestion des cas complexes avec suivi en temps réel.",
                gradient: "from-orange-500/20 to-orange-500/5"
              },
              {
                icon: FileText,
                title: "La documentation",
                description: "Rapports détaillés, preuves de suppression, historique complet. Exportable en PDF à tout moment.",
                gradient: "from-green-500/20 to-green-500/5"
              },
              {
                icon: Zap,
                title: "L'automatisation",
                description: "Tableau de bord centralisé, retraits automatiques, suivi en temps réel. Tout se fait sans que tu t'en occupes.",
                gradient: "from-yellow-500/20 to-yellow-500/5"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, scale: 0.95 }}
                whileInView={{ y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative rounded-2xl p-6 sm:p-8 transition-all duration-500 overflow-hidden"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(30px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  border: '1px solid rgba(255, 223, 125, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)',
                  transform: 'translate3d(0, 0, 0)',
                  WebkitTransform: 'translate3d(0, 0, 0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  isolation: 'isolate',
                  opacity: 1,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.4)';
                  e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(255, 223, 125, 0.2), inset 0 0 80px rgba(255, 223, 125, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.2)';
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)';
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                />
                <div className="relative z-10">
                  <motion.div 
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.gradient} border border-primary/30 flex items-center justify-center mb-4 shadow-lg shadow-primary/20`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final Message Card */}
          <motion.div
            initial={{ y: 30, scale: 0.95 }}
            whileInView={{ y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative rounded-3xl p-8 sm:p-12 overflow-hidden"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 223, 125, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 0 100px rgba(255, 223, 125, 0.15)',
              transform: 'translate3d(0, 0, 0)',
              WebkitTransform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              isolation: 'isolate',
              opacity: 1,
            } as React.CSSProperties}
          >
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
            />
            <div className="relative z-10 text-center">
              <motion.p 
                className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Tu continues à créer.
              </motion.p>
              <motion.p 
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Nous gérons tes crises.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 - Final CTA - Enhanced & Animated */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-primary/10">
        {/* Strong glow matching banner */}
        <div className="absolute inset-0" style={{ willChange: 'opacity', transform: 'translateZ(0)' }}>
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1000px] h-[800px] sm:h-[1000px] rounded-full opacity-25 sm:opacity-30 blur-[100px] sm:blur-[120px]"
            animate={{
              opacity: [0.25, 0.35, 0.25],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: `radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.4) 35%, transparent 70%)`,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              willChange: 'opacity, transform',
              boxShadow: '0 0 200px rgba(255, 223, 125, 0.25), 0 0 400px rgba(255, 223, 125, 0.12)'
            } as React.CSSProperties}
          />
          <motion.div 
            className="absolute top-1/3 left-1/4 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] rounded-full opacity-15 sm:opacity-20 blur-[80px] sm:blur-[100px]"
            animate={{
              opacity: [0.15, 0.22, 0.15],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            style={{
              background: `radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 65%)`,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              willChange: 'opacity, transform'
            } as React.CSSProperties}
          />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ y: 30, scale: 0.95 }}
            whileInView={{ y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.01, y: -5 }}
            className="group relative text-center rounded-3xl p-8 sm:p-12 lg:p-16 transition-all duration-500 overflow-hidden"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(30px) saturate(180%)',
              WebkitBackdropFilter: 'blur(30px) saturate(180%)',
              border: '1px solid rgba(255, 223, 125, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)',
              transform: 'translate3d(0, 0, 0)',
              WebkitTransform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              isolation: 'isolate',
              opacity: 1,
            } as React.CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.4)';
              e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(255, 223, 125, 0.2), inset 0 0 80px rgba(255, 223, 125, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 223, 125, 0.2)';
              e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(255, 223, 125, 0.05)';
            }}
          >
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                L'espace CRD s'adapte à ton métier, ton contenu, ton image.
              </h2>
              <p className="text-xl sm:text-2xl text-zinc-300 mb-4">
                Une seule interface. Une protection complète.
              </p>
              <p className="text-lg sm:text-xl text-zinc-400 mb-8">
                Pour que tu puisses créer librement, sans stress.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="group relative bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary text-black font-semibold rounded-full px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 text-base sm:text-lg lg:text-xl transition-all duration-300 border border-primary/30"
                  asChild
                >
                  <a href="https://espace.contentremovaldesk.com">
                    <span className="flex items-center gap-2 sm:gap-3 justify-center">
                      <Zap className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
                      <span className="text-sm sm:text-base lg:text-lg">Mon espace CRD</span>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PourCreateurs;
