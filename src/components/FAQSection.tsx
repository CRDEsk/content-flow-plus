import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Mail, Calendar } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const FAQSection = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t("faq.questions.q1"),
      answer: t("faq.questions.a1"),
    },
    {
      question: t("faq.questions.q2"),
      answer: t("faq.questions.a2"),
    },
    {
      question: t("faq.questions.q3"),
      answer: t("faq.questions.a3"),
    },
    {
      question: t("faq.questions.q4"),
      answer: t("faq.questions.a4"),
    },
    {
      question: t("faq.questions.q5"),
      answer: t("faq.questions.a5"),
    },
    {
      question: t("faq.questions.q6"),
      answer: t("faq.questions.a6"),
    },
    {
      question: t("faq.questions.q7"),
      answer: t("faq.questions.a7"),
    },
    {
      question: t("faq.questions.q8"),
      answer: t("faq.questions.a8"),
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
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
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 mb-4 sm:mb-6 lg:mb-8">
            <HelpCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm text-zinc-400 font-medium">{t("faq.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 sm:mb-6 text-foreground leading-tight">
            {t("faq.title")}<br />
            <span className="gradient-text">{t("faq.titleHighlight")}</span>
          </h2>

          {/* Quick contact buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="mailto:support@contentremovaldesk.com"
              className="group inline-flex items-center gap-2 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 hover:border-primary/50 rounded-full transition-all duration-300 text-xs sm:text-sm lg:text-base w-full sm:w-auto justify-center"
            >
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span className="font-medium text-zinc-300 group-hover:text-foreground">{t("faq.emailButton")}</span>
            </a>
            <button
              type="button"
              data-cal-namespace="diagnostic-createur"
              data-cal-link="chan-aoufi-ttauyj/diagnostic-createur"
              data-cal-config='{"layout":"month_view"}'
              className="group inline-flex items-center gap-2 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 hover:border-primary/50 rounded-full transition-all duration-300 text-xs sm:text-sm lg:text-base w-full sm:w-auto justify-center"
            >
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span className="font-medium text-zinc-300 group-hover:text-foreground">Démarrer une conversation</span>
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
              
              <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-5 lg:py-6 relative">
                <span className="font-semibold text-sm sm:text-base lg:text-lg text-foreground pr-4 group-hover:text-primary transition-colors leading-tight">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm lg:text-base text-zinc-400 pb-4 sm:pb-5 lg:pb-6 leading-relaxed relative">
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
