import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Mail, MessageCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Pourquoi ContentRemovalDesk ?",
      answer: "Fondée en France, notre agence est pionnière dans la protection digitale des créateurs de contenu. Contrairement aux services anonymes à l'étranger, nous vous offrons une expertise locale, un suivi humain, et une discrétion totale."
    },
    {
      question: "Comment ça fonctionne exactement ?",
      answer: "Tu nous donnes ton pseudo, on scanne plus de 30+ sites français et internationaux. On identifie les fuites, on les signale, et on suit chaque retrait. Tout est visible dans ton tableau de bord privé."
    },
    {
      question: "Combien de temps faut-il pour voir des résultats ?",
      answer: "Tu reçois les premiers liens détectés en 24h. Les retraits commencent dès que les premiers signalements sont envoyés. On te tient informée de chaque étape."
    },
    {
      question: "Est-ce que vous connaissez les sites français ?",
      answer: "Oui, c'est notre spécialité. On connaît tous les sites français de leaks (forums, plateformes, réseaux) et on sait comment les signaler efficacement."
    },
    {
      question: "Est-ce que je peux voir des preuves avant de payer ?",
      answer: "Bien sûr. On peut te montrer quelques liens détectés gratuitement, sans engagement. Ensuite, tu choisis si tu veux qu'on lance les suppressions."
    },
    {
      question: "Comment je suis les suppressions ?",
      answer: "Tu as un tableau de bord privé où tu vois : les liens détectés, les retraits confirmés, et les plateformes surveillées. Tout est mis à jour en temps réel."
    },
    {
      question: "Que se passe-t-il si des liens réapparaissent ?",
      answer: "Si un lien revient après suppression, on le signale à nouveau immédiatement sans frais supplémentaires. C'est inclus dans tous nos plans. On garde un œil constant sur les plateformes connues pour les reposts."
    },
    {
      question: "Pourquoi vos prix sont plus bas que d'autres ?",
      answer: "Certaines agences facturent 400€/mois ou plus, sans résultats concrets. Nous, on est transparents, efficaces, et abordables avec un vrai suivi, et une vraie différence."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated background grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-8">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm text-zinc-400 font-medium">Questions fréquentes</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
            Des questions ?<br />
            <span className="gradient-text">On est là pour toi.</span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-8">
            Écris-nous à <a href="mailto:support@contentremovaldesk.com" className="text-primary hover:underline font-medium">support@contentremovaldesk.com</a> on répond vite (souvent en moins d'1h).
          </p>

          {/* Quick contact buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="mailto:support@contentremovaldesk.com"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 hover:border-primary/50 rounded-full transition-all duration-300"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-zinc-300 group-hover:text-foreground">Email direct</span>
            </a>
            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-black rounded-full transition-all duration-300 font-medium">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">Démarrer une conversation</span>
            </button>
          </div>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="group border border-zinc-800/50 rounded-2xl px-6 bg-gradient-to-br from-zinc-900/30 to-zinc-950/30 backdrop-blur-sm hover:from-zinc-900/50 hover:to-zinc-950/50 hover:border-zinc-700/50 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <AccordionTrigger className="text-left hover:no-underline py-6 relative">
                <span className="font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 pb-6 leading-relaxed relative">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
