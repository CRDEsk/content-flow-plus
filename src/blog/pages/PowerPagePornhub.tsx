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

const PowerPagePornhub = () => {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'fr' 
      ? 'Supprimer du Contenu Pornhub — Guide Complet 2025 | ContentRemovalDesk'
      : 'Remove Pornhub Content — Complete Guide 2025 | ContentRemovalDesk';
    
    const description = language === 'fr'
      ? 'Guide complet pour supprimer vos contenus depuis Pornhub. Processus DMCA, délais, et méthodes efficaces. Intervention professionnelle garantie.'
      : 'Complete guide to remove your content from Pornhub. DMCA process, timelines, and effective methods. Guaranteed professional intervention.';
    
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
      title: 'Supprimer du Contenu Pornhub',
      subtitle: 'Guide Complet 2025 — Méthodes Efficaces et Rapides',
      intro: 'Votre contenu apparaît sur Pornhub sans votre consentement ? Ce guide vous explique comment le supprimer rapidement via le processus DMCA.',
      why: 'Pourquoi Pornhub est Difficile',
      whyText: 'Pornhub reçoit des milliers de demandes DMCA quotidiennes. Sans une demande correctement formatée et suivie, votre contenu peut rester en ligne pendant des mois.',
      process: 'Processus DMCA Pornhub',
      step1: 'Préparer la Demande',
      step1Desc: 'Rassemblez les preuves : captures d\'écran, liens exacts, et informations de copyright.',
      step2: 'Envoyer la Demande',
      step2Desc: 'Utilisez le formulaire DMCA officiel de Pornhub ou contactez directement leur équipe.',
      step3: 'Suivi et Relance',
      step3Desc: 'Pornhub répond généralement sous 7-14 jours. Un suivi professionnel accélère le processus.',
      timeline: 'Délais Typiques',
      timelineText: 'Avec une demande bien formatée : 7-14 jours pour suppression. Sans suivi : 30-60 jours ou plus.',
      cta: 'Besoin d\'aide professionnelle ?',
      ctaText: 'Notre équipe gère toutes les demandes Pornhub avec un taux de succès de 98%.',
    },
    en: {
      title: 'Remove Pornhub Content',
      subtitle: 'Complete Guide 2025 — Effective and Fast Methods',
      intro: 'Your content appears on Pornhub without your consent? This guide explains how to remove it quickly via the DMCA process.',
      why: 'Why Pornhub is Difficult',
      whyText: 'Pornhub receives thousands of DMCA requests daily. Without a properly formatted and followed request, your content can remain online for months.',
      process: 'Pornhub DMCA Process',
      step1: 'Prepare the Request',
      step1Desc: 'Gather evidence: screenshots, exact links, and copyright information.',
      step2: 'Send the Request',
      step2Desc: 'Use Pornhub\'s official DMCA form or contact their team directly.',
      step3: 'Follow-up and Reminder',
      step3Desc: 'Pornhub typically responds within 7-14 days. Professional follow-up speeds up the process.',
      timeline: 'Typical Timelines',
      timelineText: 'With a well-formatted request: 7-14 days for removal. Without follow-up: 30-60 days or more.',
      cta: 'Need Professional Help?',
      ctaText: 'Our team handles all Pornhub requests with a 98% success rate.',
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

            {/* Why Section */}
            <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl font-bold text-white">{t.why}</h2>
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed">
                {t.whyText}
              </p>
            </div>

            {/* Process */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-white">{t.process}</h2>
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

            {/* Timeline */}
            <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50">
              <h2 className="text-2xl font-bold mb-4 text-white">{t.timeline}</h2>
              <p className="text-zinc-300 text-lg leading-relaxed">
                {t.timelineText}
              </p>
            </div>

            {/* CTAs */}
            <BlogCTA variant="contact" position="intro" />
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

export default PowerPagePornhub;

