import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, CheckCircle2, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCTA from '../components/BlogCTA';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect } from 'react';

const PowerPageReportTool = () => {
  const { language } = useLanguage();
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = language === 'fr' 
      ? 'Analyser un Site Pirate — Outil Gratuit | ContentRemovalDesk'
      : 'Analyze a Pirate Site — Free Tool | ContentRemovalDesk';
    
    const description = language === 'fr'
      ? 'Analysez gratuitement un site pirate pour découvrir son hébergement, son registrar, et les méthodes de suppression. Rapport détaillé par email.'
      : 'Analyze a pirate site for free to discover its hosting, registrar, and removal methods. Detailed report by email.';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [language]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    
    // Simulate analysis (in production, this would call an API)
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsSubmitted(true);
      // In production, send email with report
    }, 2000);
  };

  const content = {
    fr: {
      title: 'Analyser un Site Pirate',
      subtitle: 'Outil Gratuit — Découvrez l\'Hébergement et les Méthodes de Suppression',
      intro: 'Entrez l\'URL d\'un site pirate et recevez un rapport détaillé sur son hébergement, son registrar, et les meilleures méthodes pour le supprimer.',
      formTitle: 'Analyse Gratuite',
      urlPlaceholder: 'https://exemple-site-pirate.com',
      emailPlaceholder: 'votre@email.com',
      buttonText: 'Analyser le Site',
      analyzing: 'Analyse en cours...',
      success: 'Analyse Terminée !',
      successText: 'Votre rapport détaillé a été envoyé par email. Vérifiez votre boîte de réception.',
      features: 'Ce que vous recevrez',
      feature1: 'Informations d\'hébergement',
      feature1Desc: 'Nom de l\'hébergeur, localisation, et contact',
      feature2: 'Registrar du domaine',
      feature2Desc: 'Informations sur le registrar et possibilités de suspension',
      feature3: 'Méthodes de suppression',
      feature3Desc: 'Recommandations personnalisées selon le type de site',
      feature4: 'Rapport complet',
      feature4Desc: 'Document PDF avec toutes les informations et étapes',
    },
    en: {
      title: 'Analyze a Pirate Site',
      subtitle: 'Free Tool — Discover Hosting and Removal Methods',
      intro: 'Enter the URL of a pirate site and receive a detailed report on its hosting, registrar, and best methods to remove it.',
      formTitle: 'Free Analysis',
      urlPlaceholder: 'https://example-pirate-site.com',
      emailPlaceholder: 'your@email.com',
      buttonText: 'Analyze Site',
      analyzing: 'Analyzing...',
      success: 'Analysis Complete!',
      successText: 'Your detailed report has been sent by email. Check your inbox.',
      features: 'What You\'ll Receive',
      feature1: 'Hosting Information',
      feature1Desc: 'Host name, location, and contact',
      feature2: 'Domain Registrar',
      feature2Desc: 'Registrar information and suspension possibilities',
      feature3: 'Removal Methods',
      feature3Desc: 'Personalized recommendations based on site type',
      feature4: 'Complete Report',
      feature4Desc: 'PDF document with all information and steps',
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
                <Search className="w-4 h-4" />
                <span>{language === 'fr' ? 'Outil Gratuit' : 'Free Tool'}</span>
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

            {/* Form */}
            <div className="mb-12">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-white">
                        {language === 'fr' ? 'URL du Site' : 'Site URL'}
                      </label>
                      <Input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder={t.urlPlaceholder}
                        required
                        className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-white">
                        {language === 'fr' ? 'Votre Email' : 'Your Email'}
                      </label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.emailPlaceholder}
                        required
                        className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-500"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isAnalyzing}
                      className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-black font-semibold"
                      size="lg"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          {t.analyzing}
                        </>
                      ) : (
                        <>
                          <Search className="w-4 h-4 mr-2" />
                          {t.buttonText}
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{t.success}</h3>
                    <p className="text-zinc-400">{t.successText}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-white">{t.features}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: t.feature1, desc: t.feature1Desc },
                  { title: t.feature2, desc: t.feature2Desc },
                  { title: t.feature3, desc: t.feature3Desc },
                  { title: t.feature4, desc: t.feature4Desc },
                ].map((feature, index) => (
                  <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-zinc-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <BlogCTA variant="expert" position="end" />
          </motion.div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PowerPageReportTool;

