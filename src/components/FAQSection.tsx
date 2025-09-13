import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does the content removal process take?",
      answer: "The timeline varies depending on the platform and type of content. Simple removals can take 24-72 hours, while more complex cases involving legal processes may take 2-4 weeks. We provide regular updates throughout the process."
    },
    {
      question: "What types of content can you remove?",
      answer: "We can remove various types of unwanted content including negative reviews, defamatory articles, personal information, photos, social media posts, search results, and more. We work with all major platforms including Google, Facebook, Twitter, Instagram, and hundreds of websites."
    },
    {
      question: "Is the removal process guaranteed?",
      answer: "While we cannot guarantee 100% removal due to varying platform policies and legal restrictions, we have a 94.8% success rate. We only take on cases where we're confident we can achieve results, and we provide a detailed assessment before starting."
    },
    {
      question: "How much does content removal cost?",
      answer: "Costs vary based on the complexity and number of items to be removed. We offer free consultations to assess your case and provide transparent pricing. Many simple removals start at $299, while comprehensive reputation management packages are available for ongoing protection."
    },
    {
      question: "Will the removed content stay removed permanently?",
      answer: "In most cases, yes. However, some content may reappear if it's republished or if new similar content is created. We offer ongoing monitoring services to detect and address any reappearing content quickly."
    },
    {
      question: "Do you work internationally?",
      answer: "Yes, we work with clients and platforms globally. We understand international privacy laws including GDPR, CCPA, and other regional regulations, allowing us to effectively remove content worldwide."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Absolutely. We maintain strict confidentiality and use secure, encrypted systems for all communications and data storage. We can also work with you anonymously if needed and never disclose client information."
    },
    {
      question: "Can you help with positive content creation?",
      answer: "Yes, in addition to removing negative content, we offer reputation management services that include creating and promoting positive content to improve your online presence and search results."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to the most common questions about our content removal services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="glass-card p-8 rounded-2xl border border-border/20">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/20 rounded-lg px-6 bg-card/30 hover:bg-card/40 transition-colors duration-200"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Have a specific question not covered here?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@contentremovaldesk.com"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              support@contentremovaldesk.com
            </a>
            <span className="text-muted-foreground hidden sm:block">•</span>
            <a 
              href="tel:+1-800-REMOVAL"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              1-800-REMOVAL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;