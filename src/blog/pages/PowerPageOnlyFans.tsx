import { motion } from 'framer-motion';
import { Shield, CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCTA from '../components/BlogCTA';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { getBlogListRoute } from '../utils/routes';
import { useEffect } from 'react';

const PowerPageOnlyFans = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'fr' 
      ? 'Supprimer les Leaks OnlyFans — Guide Complet 2025 | ContentRemovalDesk'
      : 'Remove OnlyFans Leaks — Complete Guide 2025 | ContentRemovalDesk';
    
    const description = language === 'fr'
      ? 'Guide complet pour supprimer vos contenus OnlyFans leakés. Méthodes DMCA, escalades juridiques, et protection proactive. Intervention rapide garantie.'
      : 'Complete guide to remove your leaked OnlyFans content. DMCA methods, legal escalations, and proactive protection. Guaranteed rapid intervention.';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [language]);

  const content = {
    fr: {
      title: 'Supprimer les Leaks OnlyFans',
      subtitle: 'Guide Complet 2025 — Protection Rapide et Discrète',
      intro: 'Vos contenus OnlyFans ont été leakés ? Ce guide vous explique toutes les méthodes pour les supprimer rapidement et protéger vos revenus.',
      problem: 'Le Problème',
      problemText: 'Les contenus OnlyFans sont particulièrement ciblés par les sites de leaks. Une fois partagés, ils peuvent être copiés des centaines de fois en quelques heures, impactant directement vos revenus.',
      methods: 'Méthodes de Suppression',
      method1: 'DMCA Standard',
      method1Desc: 'Envoi de demandes DMCA aux sites hébergeurs. Efficace pour la plupart des plateformes légitimes.',
      method2: 'Escalade Juridique',
      method2Desc: 'Intervention via nos partenaires avocats pour les sites résistants. Résultats garantis en 2-3 mois.',
      method3: 'Suppression Google',
      method3Desc: 'Déindexation des contenus depuis Google Images et résultats de recherche. Impact immédiat sur la visibilité.',
      steps: 'Processus en 3 Étapes',
      step1: 'Détection',
      step1Desc: 'Scan automatique de 30+ sites pour identifier tous les liens leakés.',
      step2: 'Suppression',
      step2Desc: 'Envoi des demandes DMCA et suivi jusqu\'à confirmation de retrait.',
      step3: 'Protection',
      step3Desc: 'Monitoring continu pour détecter et supprimer les nouveaux leaks.',
      cta: 'Besoin d\'aide immédiate ?',
      ctaText: 'Notre équipe peut intervenir en moins de 24h pour supprimer vos leaks OnlyFans.',
    },
    en: {
      title: 'Remove OnlyFans Leaks',
      subtitle: 'Complete Guide 2025 — Fast and Discreet Protection',
      intro: 'Your OnlyFans content has been leaked? This guide explains all methods to remove it quickly and protect your revenue.',
      problem: 'The Problem',
      problemText: 'OnlyFans content is particularly targeted by leak sites. Once shared, it can be copied hundreds of times in a few hours, directly impacting your revenue.',
      methods: 'Removal Methods',
      method1: 'Standard DMCA',
      method1Desc: 'Sending DMCA requests to hosting sites. Effective for most legitimate platforms.',
      method2: 'Legal Escalation',
      method2Desc: 'Intervention through our lawyer partners for resistant sites. Guaranteed results in 2-3 months.',
      method3: 'Google Removal',
      method3Desc: 'Deindexing content from Google Images and search results. Immediate impact on visibility.',
      steps: '3-Step Process',
      step1: 'Detection',
      step1Desc: 'Automatic scan of 30+ sites to identify all leaked links.',
      step2: 'Removal',
      step2Desc: 'Sending DMCA requests and follow-up until removal confirmation.',
      step3: 'Protection',
      step3Desc: 'Continuous monitoring to detect and remove new leaks.',
      cta: 'Need Immediate Help?',
      ctaText: 'Our team can intervene in less than 24h to remove your OnlyFans leaks.',
    },
  };

  const t = content[language];

  return (
    <>
      <div className="min-h-screen bg-black text-white antialiased">
        <Header />
        <main>
          <article className="pt-24 sm:pt-32 pb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Hero */}
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" />
                <span>{language === 'fr' ? 'Guide Premium' : 'Premium Guide'}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                {t.title}
              </h1>
              <p className="text-xl text-zinc-300 mb-8">
                {t.subtitle}
              </p>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                {t.intro}
              </p>
            </div>

            {/* Problem Section */}
            <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl font-bold text-white">{t.problem}</h2>
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed">
                {t.problemText}
              </p>
            </div>

            {/* Methods */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-white">{t.methods}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{t.method1}</h3>
                  <p className="text-zinc-400">{t.method1Desc}</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{t.method2}</h3>
                  <p className="text-zinc-400">{t.method2Desc}</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{t.method3}</h3>
                  <p className="text-zinc-400">{t.method3Desc}</p>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-white">{t.steps}</h2>
              <div className="space-y-6">
                {[
                  { title: t.step1, desc: t.step1Desc, num: 1 },
                  { title: t.step2, desc: t.step2Desc, num: 2 },
                  { title: t.step3, desc: t.step3Desc, num: 3 },
                ].map((step) => (
                  <div key={step.num} className="flex gap-6 p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                      <p className="text-zinc-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <BlogCTA variant="scan" position="intro" />
            <BlogCTA variant="expert" position="end" />

            {/* Related Articles */}
            <div className="mt-16 pt-8 border-t border-zinc-800/50">
              <h2 className="text-2xl font-bold mb-6 text-white">
                {language === 'fr' ? 'Articles Connexes' : 'Related Articles'}
              </h2>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="outline" className="border-zinc-800 text-zinc-300 hover:text-white">
                  <Link to={getBlogListRoute()}>
                    {language === 'fr' ? 'Voir tous les guides' : 'View All Guides'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PowerPageOnlyFans;

