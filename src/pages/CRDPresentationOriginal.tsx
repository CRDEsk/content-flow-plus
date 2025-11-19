import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import caseStudy2 from "@/assets/case-study-2.png";
import caseStudy4 from "@/assets/case-study-4.png";
import caseStudy5 from "@/assets/case-study-5.png";
import {
  Shield,
  Users,
  Video,
  TrendingUp,
  AlertTriangle,
  AlertCircle,
  DollarSign,
  Image,
  Search,
  FileWarning,
  Zap,
  CheckCircle2,
  Globe,
  Lock,
  BarChart3,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  Mail,
  QrCode,
  Scan,
  Eye,
  FileCheck,
  Scale,
  Clock,
  Target,
  Crown,
  Building2,
  UserCheck,
  Rocket,
  Award,
  Upload,
  Bell,
  Phone,
  Calendar,
  X,
  Code,
  Gavel,
  FileText,
  Briefcase,
} from "lucide-react";

const CRDPresentationOriginal: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 20;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const slideChange = (newIndex: number) => {
    setCurrentSlide(newIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "Home") {
        setCurrentSlide(0);
      } else if (e.key === "End") {
        setCurrentSlide(totalSlides - 1);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide]);

  return (
    <div
      className="fixed inset-0 bg-black overflow-hidden relative"
      style={{ opacity: 1 }}
    >
      {/* Debug badge */}
      <div className="absolute top-4 right-4 text-xs text-[#E5C268] z-[9999]">
        CRD Slides actifs
      </div>
      {/* Navigation dots */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => slideChange(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-[#E5C268]"
                : "w-2 bg-zinc-700 hover:bg-zinc-600"
            }`}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/50 text-[#E5C268] hover:bg-zinc-900/70 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Slide précédente"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/50 text-[#E5C268] hover:bg-zinc-900/70 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Slide suivante"
      >
        <ArrowRight className="w-6 h-6" />
      </button>

      {/* Slide counter */}
      <div className="fixed top-8 right-8 z-50 px-4 py-2 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 text-zinc-400 text-sm">
        {currentSlide + 1} / {totalSlides}
      </div>

      <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12 lg:p-16 z-10">
          {/* Slide 0: Title Slide */}
          {currentSlide === 0 && (
            <div className="w-full max-w-6xl mx-auto text-center space-y-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-12"
              >
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 border border-[#E5C268]/30 mb-8">
                  <Shield className="w-16 h-16 text-[#E5C268]" />
                </div>
              </motion.div>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Content Removal Desk
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl sm:text-2xl lg:text-3xl text-[#E5C268] mb-4"
              >
                Agence Legal-Tech Française
              </motion.p>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto"
              >
                Protection numérique, suppression de fuites, escalades légales.
              </motion.p>
            </div>
          )}

          {/* Slide 1: Qui Nous Protégons */}
          {currentSlide === 1 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Qui Nous Protégons
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { icon: Video, label: "Créateurs MYM", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                  { icon: TrendingUp, label: "Créateurs OnlyFans", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                  { icon: Users, label: "Influenceurs", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                  { icon: Building2, label: "Agences de contenu", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                  { icon: Image, label: "Modèles webcam", color: "from-[#E5C268]/20 to-[#E5C268]/5" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative p-8 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/50 transition-all duration-500 text-center"
                    >
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-[#E5C268]" />
                      </div>
                      <p className="text-lg font-medium text-white">{item.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 2: Le Problème */}
          {currentSlide === 2 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Le Problème
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Ce que vos créateurs subissent chaque jour
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {[
                  { icon: FileWarning, label: "Contenu fuité", desc: "Distribution non autorisée sur 450+ sites" },
                  { icon: UserCheck, label: "Usurpation d'identité", desc: "Faux profils et imposteurs" },
                  { icon: Upload, label: "Republications non autorisées", desc: "Piratage de contenu" },
                  { icon: AlertTriangle, label: "Risque réputationnel", desc: "Dommages à long terme" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.15 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-red-900/20 to-red-950/20 backdrop-blur-xl border border-red-800/30 hover:border-red-700/50 transition-all duration-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-900/30 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.label}</h3>
                          <p className="text-zinc-400">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 3: Notre Solution (Méthode CRD) */}
          {currentSlide === 3 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Notre Solution
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl text-[#E5C268] mb-12 text-center"
              >
                La Méthode CRD
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Scan, label: "Système de scan quotidien", desc: "450+ sites surveillés 24/7" },
                  { icon: Eye, label: "Vérification humaine", desc: "Précision garantie, zéro faux positif" },
                  { icon: Zap, label: "DMCA rapides", desc: "Réponse en moins de 24h" },
                  { icon: Globe, label: "Escalades hébergeurs/registrars", desc: "Cloudflare, registrars, réseaux" },
                  { icon: Scale, label: "Escalade juridique", desc: "Quand nécessaire, nous agissons" },
                  { icon: Shield, label: "Surveillance & prévention", desc: "Protection continue" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/50 transition-all duration-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#E5C268]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.label}</h3>
                          <p className="text-zinc-400">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 4: Agent Dédié Par Client */}
          {currentSlide === 4 && (
            <div className="w-full max-w-6xl mx-auto text-center">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Agent Dédié Par Client
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12"
              >
                Un accompagnement personnalisé, pas un service générique
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Users,
                    title: "Agent spécialisé dédié",
                    desc: "Chaque client a son agent dédié qui connaît son dossier, son historique et ses besoins spécifiques. Pas de roulement, pas de perte d'information.",
                  },
                  {
                    icon: Briefcase,
                    title: "Suivi personnalisé",
                    desc: "Votre agent suit chaque fuite, chaque escalade, chaque résultat. Il est votre point de contact unique et connaît votre situation sur le bout des doigts.",
                  },
                  {
                    icon: Bell,
                    title: "Communication directe",
                    desc: "Contactez directement votre agent par email, chat ou ticket. Réponse rapide, suivi transparent, relation de confiance.",
                  },
                  {
                    icon: FileCheck,
                    title: "Historique complet",
                    desc: "Votre agent maintient un dossier complet de toutes les actions, suppressions, escalades et résultats. Tout est tracé et documenté.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.15 }}
                      className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/50 transition-all duration-500"
                    >
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 mb-6">
                        <Icon className="w-10 h-10 text-[#E5C268]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-zinc-400">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 5: Partenariats Juridiques & Juridictions */}
          {currentSlide === 5 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Réseau Juridique International
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Escalades légales à travers différentes juridictions
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { number: "10+", label: "Partenaires juridiques & institutionnels", icon: Gavel },
                  { number: "15+", label: "Juridictions couvertes", icon: Globe },
                  { number: "20+", label: "Hébergeurs & registrars traités", icon: FileText },
                  { number: "5+", label: "Réseau d'avocats spécialisés", icon: Scale },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/50 transition-all duration-500"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-[#E5C268]" />
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-[#E5C268] mb-2">{stat.number}</div>
                          <p className="text-lg text-white">{stat.label}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30"
              >
                <p className="text-center text-lg text-white">
                  <span className="text-[#E5C268] font-bold">Escalades ICANN</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Actions judiciaires</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Pressions institutionnelles</span>
                </p>
                <p className="text-center text-zinc-400 mt-2">
                  Nous intervenons en France, Europe, et à l'international selon les besoins
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 6: Outils Développés En Interne */}
          {currentSlide === 6 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Outils Développés En Interne
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Tous nos outils sont conçus et développés spécifiquement pour CRD
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Code,
                    title: "CRD Scanner",
                    desc: "Outil de scan développé en interne, optimisé pour détecter les fuites sur 450+ plateformes. Mis à jour quotidiennement avec de nouveaux sites.",
                  },
                  {
                    icon: BarChart3,
                    title: "Tableau de bord en temps réel",
                    desc: "Dashboard développé sur mesure pour suivre chaque fuite, chaque action, chaque résultat. Export PDF, logs horodatés, historique complet.",
                  },
                  {
                    icon: Scale,
                    title: "Module d'escalade intégré",
                    desc: "Système unique en France : lancez une escalade légale directement depuis votre dashboard. Suivi en temps réel, paiement intégré.",
                  },
                  {
                    icon: FileCheck,
                    title: "Système de rapports",
                    desc: "Génération automatique de rapports détaillés, preuves juridiques, documentation complète. Tout est tracé et exportable.",
                  },
                  {
                    icon: Bell,
                    title: "Système d'alertes",
                    desc: "Notifications instantanées par email, SMS, ou dans le dashboard. Alertes personnalisables selon vos préférences.",
                  },
                  {
                    icon: Lock,
                    title: "Sécurité & confidentialité",
                    desc: "Infrastructure sécurisée, chiffrement des données, conformité RGPD. Vos données sont protégées au plus haut niveau.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/50 transition-all duration-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#E5C268]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-zinc-400">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 7: Cas Clients Réels */}
          {currentSlide === 7 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Cas Clients Réels
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Des résultats concrets, pas des promesses
              </motion.p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Born to be f*ck",
                    subtitle: "Suspension complète",
                    stats: "70+ liens • 87% supprimés • 19 jours",
                    desc: "Escalade ICANN réussie, domaine suspendu officiellement. Site majeur de piratage neutralisé.",
                    image: caseStudy4,
                    gradient: "from-red-500/30 via-orange-500/20 to-red-500/30",
                  },
                  {
                    title: "talullax",
                    subtitle: "Intervention massive",
                    stats: "600+ vidéos • 300+ liens neutralisés • 30 jours",
                    desc: "Tanaleaks.com et Camlib.com neutralisés. 75% des résultats Google retirés. Surveillance proactive et intervention rapide.",
                    image: caseStudy5,
                    gradient: "from-yellow-500/30 via-green-500/20 to-yellow-500/30",
                  },
                  {
                    title: "Leakimedia",
                    subtitle: "Dossier confidentiel",
                    stats: "Suppression complète • Dossier clos",
                    desc: "Une des plateformes les plus résistantes. Mission accomplie avec discrétion totale.",
                    image: caseStudy2,
                    gradient: "from-purple-500/30 via-blue-500/20 to-purple-500/30",
                  },
                ].map((caseItem, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.15 }}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/50 transition-all duration-500"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Image */}
                    <div className="relative aspect-video bg-zinc-800/50 border-b border-zinc-800/50 overflow-hidden">
                      <img 
                        src={caseItem.image} 
                        alt={caseItem.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6">
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-white mb-1">{caseItem.title}</h3>
                        <p className="text-sm text-[#E5C268] font-semibold mb-2">{caseItem.subtitle}</p>
                        <p className="text-sm text-[#E5C268] font-medium mb-3">{caseItem.stats}</p>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed">{caseItem.desc}</p>
                      <div className="mt-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#E5C268]" />
                        <span className="text-xs text-zinc-500">Mission réussie</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 8: Pourquoi Nous Allons Plus Loin */}
          {currentSlide === 8 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Pourquoi Nous Allons Plus Loin
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Les autres agences s'arrêtent à la désindexation Google. Nous, nous poussons jusqu'aux escalades légales.
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-red-900/20 to-red-950/20 backdrop-blur-xl border border-red-800/30"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <X className="w-8 h-8 text-red-400" />
                    <h3 className="text-2xl font-bold text-white">Les Autres Agences</h3>
                  </div>
                  <ul className="space-y-4 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Désindexation Google uniquement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>S'arrêtent aux DMCA basiques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Pas d'escalades juridiques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Résultats limités sur sites résistants</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 backdrop-blur-xl border border-[#E5C268]/50"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#E5C268]" />
                    <h3 className="text-2xl font-bold text-white">Content Removal Desk</h3>
                  </div>
                  <ul className="space-y-4 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Désindexation Google + escalades techniques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>DMCA + contacts hébergeurs/registrars</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Escalades ICANN, actions judiciaires</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Résultats même sur sites les plus résistants</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30"
              >
                <p className="text-center text-lg text-white">
                  <span className="text-[#E5C268] font-bold">Procédures développées en interne</span> qui nous ont permis d'atteindre{" "}
                  <span className="text-[#E5C268] font-bold">99.2% de réussite</span> et de traiter{" "}
                  <span className="text-[#E5C268] font-bold">20+ hébergeurs & registrars</span>
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 9: Système d'Escalades - Notre Secret Sauce */}
          {currentSlide === 9 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Système d'Escalades
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-2 text-center"
              >
                Une page dédiée dans votre dashboard
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-[#E5C268] mb-12 text-center font-semibold"
              >
                Escaladez chaque site en un clic • Notre secret sauce
              </motion.p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-[#E5C268]" />
                    <h3 className="text-xl font-bold text-white">Page dédiée dans votre dashboard</h3>
                  </div>
                  <p className="text-zinc-300 mb-4">
                    Chaque site détecté peut être escaladé directement depuis votre tableau de bord. 
                    Un système unique développé en interne.
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Escaladez chaque site individuellement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Suivi en temps réel de chaque escalade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Historique complet de toutes vos escalades</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-6 h-6 text-[#E5C268]" />
                    <h3 className="text-xl font-bold text-white">Notre secret sauce</h3>
                  </div>
                  <p className="text-zinc-300 mb-4">
                    Nous ne révélons pas nos méthodes exactes - c'est ce qui nous différencie. 
                    Mais voici ce que nous faisons :
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Procédures développées en interne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Réseau juridique international exclusif</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>Méthodes testées et éprouvées</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: AlertCircle, label: "Sites pirates & forums", desc: "Intervention directe" },
                  { icon: Globe, label: "Hébergeurs & CDN", desc: "20+ traités" },
                  { icon: FileText, label: "Registrars & ICANN", desc: "Actions officielles" },
                  { icon: Gavel, label: "Actions légales", desc: "10+ partenaires" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="p-4 rounded-xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/50 transition-all duration-500 text-center"
                    >
                      <Icon className="w-8 h-8 text-[#E5C268] mx-auto mb-3" />
                      <h4 className="text-sm font-bold text-white mb-1">{item.label}</h4>
                      <p className="text-xs text-zinc-400">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { number: "87%", label: "Takedowns réussis", color: "from-green-500/20 to-emerald-500/20" },
                  { number: "39%", label: "Escalades institutionnelles", color: "from-blue-500/20 to-cyan-500/20" },
                  { number: "66%", label: "Procédures juridiques", color: "from-purple-500/20 to-pink-500/20" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} backdrop-blur-xl border border-zinc-800/50 text-center`}
                  >
                    <div className="text-4xl font-bold text-[#E5C268] mb-2">{item.number}</div>
                    <p className="text-sm text-zinc-300">{item.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30"
              >
                <p className="text-center text-lg text-white">
                  <span className="text-[#E5C268] font-bold">10+ partenaires juridiques</span> •{" "}
                  <span className="text-[#E5C268] font-bold">15+ juridictions couvertes</span> •{" "}
                  <span className="text-[#E5C268] font-bold">20+ hébergeurs & registrars traités</span>
                </p>
                <p className="text-center text-zinc-400 mt-3 text-sm">
                  Pour plus d'informations, consultez notre page Escalades & Actions Légales
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 10: Résultats Globaux */}
          {currentSlide === 10 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Nos Résultats
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Des chiffres qui parlent
              </motion.p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { percentage: "99.2%", label: "Taux de réussite", desc: "Suppressions réussies" },
                  { percentage: "87%", label: "Takedowns réussis", desc: "Même sur sites difficiles" },
                  { percentage: "500k+", label: "Contenus supprimés", desc: "Depuis notre lancement" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.15 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 text-center"
                  >
                    <div className="text-6xl font-bold text-[#E5C268] mb-4">{item.percentage}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.label}</h3>
                    <p className="text-zinc-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50"
              >
                <p className="text-center text-lg text-white">
                  <span className="text-[#E5C268] font-bold">500+ créateurs protégés</span> •{" "}
                  <span className="text-[#E5C268] font-bold">450+ sites scannés</span> •{" "}
                  <span className="text-[#E5C268] font-bold">10+ partenaires juridiques</span>
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 11: Pourquoi Les Agences Nous Choisissent */}
          {currentSlide === 11 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Pourquoi Les Agences Nous Choisissent
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                La valeur que nous apportons à votre business
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Clock, label: "Gagnez du temps. Beaucoup de temps.", desc: "Plus besoin de jongler entre 30 emails, DMCA, hébergeurs, forums. On gère tout." },
                  { icon: Target, label: "Donnez de la valeur à vos créateurs", desc: "Vous leur offrez une vraie protection + des preuves + une équipe dédiée derrière eux." },
                  { icon: Lock, label: "Réduisez vos risques", desc: "Les escalades juridiques deviennent notre responsabilité, pas la vôtre. Vous êtes protégés." },
                  { icon: TrendingUp, label: "Augmentez les revenus", desc: "Protection des revenus de vos créateurs = moins de pertes = plus de satisfaction" },
                  { icon: Building2, label: "Solution white-label", desc: "Intégration transparente à votre marque. Vos créateurs voient votre logo, pas le nôtre." },
                  { icon: Users, label: "Support dédié agence", desc: "Votre propre point de contact pour gérer tous vos créateurs en un seul endroit." },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/50 transition-all duration-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#E5C268]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.label}</h3>
                          <p className="text-zinc-400">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 12: Plans & Tarifs */}
          {currentSlide === 12 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Plans & Tarifs
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-[#E5C268] mb-2 text-center font-semibold"
              >
                Les meilleurs prix du marché • Les plus compétitifs
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-zinc-400 mb-12 text-center"
              >
                Solutions adaptées à vos besoins
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Plan Core */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/50 transition-all duration-500"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 mb-4">
                      <Shield className="w-8 h-8 text-[#E5C268]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Plan Core</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#E5C268]">79€</span>
                      <span className="text-lg text-zinc-400">/mois</span>
                    </div>
                    <p className="text-sm text-zinc-400 mb-4">Protection continue et automatisée pour créateurs actifs</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Scan intelligent hebdomadaire</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Suppression manuelle (50 liens/mois)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Surveillance automatique des reposts</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Suivi en temps réel + retraits automatiques</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Désindexation moteur de recherches</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Tableau de bord privé</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Outils de scan avancés (Bing, Yandex…)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Agent spécialisé dédié à votre protection</span>
                    </div>
                  </div>
                </motion.div>

                {/* Plan Elite */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 backdrop-blur-xl border border-[#E5C268]/50 hover:border-[#E5C268]/70 transition-all duration-500 relative"
                >
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-[#E5C268] text-black text-xs font-bold">
                    RECOMMANDÉ
                  </div>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E5C268]/30 to-[#E5C268]/15 mb-4">
                      <Crown className="w-8 h-8 text-[#E5C268]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Plan Elite</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#E5C268]">99€</span>
                      <span className="text-lg text-zinc-400">/mois</span>
                    </div>
                    <p className="text-sm text-zinc-300 mb-4">Protection maximale + DMCA inclus pour créateurs très exposés</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Scan intelligent quotidien</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Suppression illimitée & prioritaire</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Reconnaissance faciale & recherche AI</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Reposts retirés automatiquement</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Support prioritaire + gestionnaire dédié</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Enregistrement DMCA officiel</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Veille proactive 7j/7</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Agent spécialisé dédié à votre protection</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300 font-semibold">Accès complet et prioritaire aux escalades juridiques</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30"
              >
                <p className="text-center text-lg text-white">
                  <span className="text-[#E5C268] font-bold">Tarifs agences sur demande</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Tarifs préférentiels</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Meilleur rapport qualité/prix</span>
                </p>
                <p className="text-center text-zinc-400 mt-2 text-sm">
                  Tarifs détaillés sur demande – adaptés à votre situation d'agence
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 13: Solutions Agences */}
          {currentSlide === 13 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Solutions Agences
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Si vous êtes intéressé par une solution agence
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: Building2,
                    title: "Tableau de bord centralisé",
                    desc: "Gérez 10, 20, 50 créateurs depuis un seul dashboard. Vue d'ensemble de tous vos clients, suivi en temps réel.",
                  },
                  {
                    icon: Users,
                    title: "Support dédié agence",
                    desc: "Votre propre point de contact pour toutes vos questions. Réponse rapide, suivi personnalisé.",
                  },
                  {
                    icon: Shield,
                    title: "Protection multi-comptes",
                    desc: "Protégez tous vos créateurs avec un seul compte agence. Tarifs préférentiels, facturation centralisée.",
                  },
                  {
                    icon: Zap,
                    title: "Escalades prioritaires",
                    desc: "Accès prioritaire aux escalades juridiques. Traitement en urgence pour vos cas sensibles.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/50 transition-all duration-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#E5C268]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-zinc-400">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 text-center"
              >
                <p className="text-lg text-white mb-2">
                  <span className="text-[#E5C268] font-bold">Tarifs adaptés aux agences</span> •{" "}
                  <span className="text-[#E5C268] font-bold">White-label disponible</span> •{" "}
                  <span className="text-[#E5C268] font-bold">Support dédié</span>
                </p>
                <p className="text-zinc-400">Discutons de vos besoins spécifiques lors de l'appel</p>
              </motion.div>
            </div>
          )}

          {/* Slide 14: IA vs Humain - Pourquoi L'Excellence Nécessite Les Deux */}
          {currentSlide === 14 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                IA vs Humain
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Dans cette industrie sensible, nous avons besoin de décisions humaines
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-red-900/20 to-red-950/20 backdrop-blur-xl border border-red-800/30"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Code className="w-8 h-8 text-red-400" />
                    <h3 className="text-2xl font-bold text-white">Les Autres Agences</h3>
                  </div>
                  <ul className="space-y-4 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">Dépendent entièrement de l'IA</span> pour les scans et suppressions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">L'IA peut rater jusqu'à 40% des fuites</span> - faux négatifs critiques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>DMCA générés automatiquement - <span className="font-semibold">manque d'autorité</span></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Pas de vérification humaine - <span className="font-semibold">erreurs coûteuses</span></span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 backdrop-blur-xl border border-[#E5C268]/50"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Users className="w-8 h-8 text-[#E5C268]" />
                    <h3 className="text-2xl font-bold text-white">Content Removal Desk</h3>
                  </div>
                  <ul className="space-y-4 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">Utilisons l'IA mais n'en dépendons pas</span> - complément, pas remplacement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">Vérification humaine systématique</span> - 0% de fuites manquées</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span>DMCA rédigés par <span className="font-semibold">experts humains</span> - autorité, pouvoir, efficacité</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268] flex-shrink-0 mt-0.5" />
                      <span><span className="font-semibold">Décisions humaines</span> pour chaque escalade - expertise et jugement</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30"
              >
                <p className="text-center text-lg text-white">
                  <span className="text-[#E5C268] font-bold">L'IA accélère, l'humain décide.</span> Dans cette industrie sensible,{" "}
                  <span className="text-[#E5C268] font-bold">chaque décision compte.</span> C'est pourquoi nous combinons{" "}
                  <span className="text-[#E5C268] font-bold">la puissance de l'IA avec l'expertise humaine.</span>
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 15: Écosystème CRD */}
          {currentSlide === 15 && (
            <div className="w-full max-w-6xl mx-auto text-center">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                CRD : Plus Qu'une Agence
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl text-[#E5C268] mb-12"
              >
                Un écosystème complet pour répondre aux besoins des créateurs
              </motion.p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Protection Digitale",
                    desc: "Suppression de fuites, surveillance 24/7, escalades légales. La base de notre écosystème.",
                  },
                  {
                    icon: Scale,
                    title: "Services Juridiques",
                    desc: "Dépôt de marques, protection d'image, actions légales. Protection complète de votre identité.",
                  },
                  {
                    icon: Rocket,
                    title: "Outils & Technologies",
                    desc: "Dashboard, scanner, rapports. Tous nos outils développés en interne pour vous servir.",
                  },
                  {
                    icon: Users,
                    title: "Support Dédié",
                    desc: "Agent dédié par client, support 24/7, accompagnement personnalisé. Vous n'êtes jamais seul.",
                  },
                  {
                    icon: Building2,
                    title: "Solutions Agences",
                    desc: "Tableau de bord centralisé, white-label, tarifs préférentiels. Pour les agences qui veulent protéger leurs créateurs.",
                  },
                  {
                    icon: Globe,
                    title: "Expansion Continue",
                    desc: "Nous construisons un écosystème qui évolue avec vos besoins. Protection aujourd'hui, solutions demain.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/50 transition-all duration-500"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 mb-4">
                        <Icon className="w-8 h-8 text-[#E5C268]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-sm text-zinc-400">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50"
              >
                <p className="text-lg text-white">
                  <span className="text-[#E5C268] font-bold">CRD ne sera pas seulement une agence,</span> mais{" "}
                  <span className="text-[#E5C268] font-bold">un écosystème complet</span> pour{" "}
                  <span className="text-[#E5C268] font-bold">répondre à tous les besoins des créateurs.</span>
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 16: Ce Qui Rend CRD Unique */}
          {currentSlide === 16 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ce Qui Rend CRD Unique
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                Pourquoi nous, et pas les autres ?
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Users, label: "Agent dédié par client", desc: "Chaque client a son agent spécialisé. Pas de service générique." },
                  { icon: Rocket, label: "Approche legal-tech hybride", desc: "Le meilleur des deux mondes : tech + expertise juridique" },
                  { icon: Code, label: "Outils développés en interne", desc: "Tous nos outils sont conçus spécifiquement pour CRD, pas des solutions tierces" },
                  { icon: Scale, label: "Réseau juridique international", desc: "10+ partenaires, 15+ juridictions, escalades réelles" },
                  { icon: Globe, label: "Expertise française", desc: "Connaissance locale des lois et procédures" },
                  { icon: Award, label: "Vrais résultats vs agences qui 'googlent'", desc: "Nous agissons, pas juste des rapports. 99.2% de réussite prouvée." },
                  { icon: Eye, label: "Vérification humaine systématique", desc: "L'IA peut rater 40% des fuites. Nous, 0%. Chaque fuite est vérifiée par un expert." },
                  { icon: Gavel, label: "DMCA avec autorité humaine", desc: "L'IA écrit, l'humain ajoute le pouvoir et l'autorité. Nos DMCA sont rédigés par des experts." },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border border-[#E5C268]/30 hover:border-[#E5C268]/50 transition-all duration-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#E5C268]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.label}</h3>
                          <p className="text-zinc-400">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Slide 17: Comparaison - Nous vs Concurrence */}
          {currentSlide === 17 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                CRD vs La Concurrence
              </motion.h2>
              <div className="space-y-6">
                {[
                  { feature: "Agent dédié par client", crd: true, other: false },
                  { feature: "Outils développés en interne", crd: true, other: false },
                  { feature: "Scan quotidien 450+ sites", crd: true, other: false },
                  { feature: "Vérification humaine", crd: true, other: false },
                  { feature: "Escalades juridiques réelles", crd: true, other: false },
                  { feature: "Réseau juridique international", crd: true, other: false },
                  { feature: "Tableau de bord en temps réel", crd: true, other: "Limité" },
                  { feature: "Support 24/7 dédié", crd: true, other: "Générique" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50"
                  >
                    <span className="text-lg font-medium text-white flex-1">{item.feature}</span>
                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6 text-[#E5C268]" />
                        <span className="text-sm text-zinc-400">CRD</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.other ? (
                          <>
                            <X className="w-6 h-6 text-red-400" />
                            <span className="text-sm text-zinc-400">{item.other}</span>
                          </>
                        ) : (
                          <>
                            <X className="w-6 h-6 text-red-400" />
                            <span className="text-sm text-zinc-400">Autres</span>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Slide 18: Prochaines Étapes */}
          {currentSlide === 18 && (
            <div className="w-full max-w-5xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Prochaines Étapes
              </motion.h2>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl mx-auto mb-8"
              >
                <div className="p-10 rounded-3xl bg-gradient-to-br from-[#E5C268]/20 via-[#E5C268]/10 to-[#E5C268]/5 backdrop-blur-xl border-2 border-[#E5C268]/40 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5C268]/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#E5C268]/5 rounded-full blur-2xl" />
                  
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#E5C268]/20 mb-6">
                      <Users className="w-10 h-10 text-[#E5C268]" />
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                      Rejoignez la famille CRD dès maintenant
                    </h3>
                    <p className="text-lg text-zinc-200 leading-relaxed mb-6">
                      Si vous avez des questions, n'hésitez pas à nous les poser
                    </p>
                    <div className="flex items-center justify-center gap-3 text-[#E5C268]">
                      <Phone className="w-5 h-5" />
                      <span className="text-sm font-medium">Discutons ensemble de la meilleure solution pour votre cas</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-zinc-900/60 to-zinc-950/60 backdrop-blur-xl border border-zinc-800/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#E5C268]/5 via-transparent to-[#E5C268]/5" />
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E5C268]/10 border border-[#E5C268]/20">
                      <CheckCircle2 className="w-5 h-5 text-[#E5C268]" />
                      <span className="text-sm font-semibold text-white">Prêt à protéger vos créateurs</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E5C268]/10 border border-[#E5C268]/20">
                      <Zap className="w-5 h-5 text-[#E5C268]" />
                      <span className="text-sm font-semibold text-white">Réponse rapide garantie</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E5C268]/10 border border-[#E5C268]/20">
                      <Users className="w-5 h-5 text-[#E5C268]" />
                      <span className="text-sm font-semibold text-white">Support dédié agence</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Slide 19: Slide Finale */}
          {currentSlide === 19 && (
            <div className="w-full max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-12"
              >
                <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 border-2 border-[#E5C268]/30 mb-8">
                  <Shield className="w-20 h-20 text-[#E5C268]" />
                </div>
              </motion.div>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Reprenez le contrôle
              </motion.p>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl sm:text-3xl text-[#E5C268] mb-12"
              >
                — nous gérons le reste.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-12"
              >
                <p className="text-2xl sm:text-3xl text-[#E5C268] mb-4 font-semibold">
                  Merci pour votre temps
                </p>
                <p className="text-lg text-zinc-400">
                  C'est tout pour cette présentation
                </p>
              </motion.div>
            </div>
          )}

          {/* Slide 20: Qui Sommes-Nous (Bonus pour agence manager) */}
          {currentSlide === 20 && (
            <div className="w-full max-w-6xl mx-auto">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Qui Sommes-Nous
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-12 text-center"
              >
                L'équipe derrière CRD
              </motion.p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Rocket,
                    title: "Agence Legal-Tech Française",
                    desc: "Créée en 2024, spécialisée dans la protection digitale pour créateurs. Approche unique combinant technologie et expertise juridique.",
                  },
                  {
                    icon: Code,
                    title: "Développement interne",
                    desc: "Tous nos outils sont développés en interne par notre équipe technique. Pas de dépendance à des solutions tierces.",
                  },
                  {
                    icon: Scale,
                    title: "Expertise juridique",
                    desc: "Réseau de 10+ partenaires juridiques, 15+ juridictions couvertes. Escalades ICANN, actions judiciaires, procédures internationales.",
                  },
                  {
                    icon: Users,
                    title: "Équipe dédiée",
                    desc: "Chaque client a son agent dédié. Support 24/7, suivi personnalisé, relation de confiance sur le long terme.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 hover:border-[#E5C268]/50 transition-all duration-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#E5C268]/20 to-[#E5C268]/5 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#E5C268]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-zinc-400">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default CRDPresentationOriginal;
