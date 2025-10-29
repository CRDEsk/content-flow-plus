import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Des questions ?<br />On est là pour toi.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Écris-nous à <a href="mailto:support@contentremovaldesk.com" className="text-primary hover:underline">support@contentremovaldesk.com</a> ou sur Insta <a href="https://instagram.com/crdprotect" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@crdprotect</a> on répond vite (souvent en moins d&apos;1h).
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-zinc-800 rounded-xl px-6 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors duration-200"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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