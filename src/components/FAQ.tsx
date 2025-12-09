import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this medical advice?",
    answer: "No, the Peak Brain Score is a self-assessment tool designed for informational purposes only. It provides insights based on your responses but should not replace professional medical advice. If you have concerns about your cognitive health, please consult a healthcare provider.",
  },
  {
    question: "How is my data used?",
    answer: "Your data is encrypted and stored securely. We use it solely to generate your personalized report and improve our assessment methodology. We never sell your data to third parties. You can request data deletion at any time.",
  },
  {
    question: "How accurate is the Peak Brain Score?",
    answer: "Our assessment is based on validated neuroscience research and correlates well with clinical cognitive assessments. However, it's a screening tool, not a diagnostic test. Your actual cognitive performance may vary based on factors we can't measure remotely.",
  },
  {
    question: "How long does the assessment take?",
    answer: "Most users complete the assessment in 2-3 minutes. We've designed it to be quick yet comprehensive, covering the key domains of cognitive performance without being overwhelming.",
  },
  {
    question: "What happens after I complete the assessment?",
    answer: "You'll immediately see your Peak Brain Score dashboard with breakdowns across cognitive domains. Within minutes, you'll also receive a detailed email report with personalized recommendations and next steps.",
  },
  {
    question: "Can I retake the assessment?",
    answer: "Yes! We recommend retaking the assessment every 4-6 weeks to track your cognitive trends over time. Each assessment gives you a fresh snapshot of where you stand.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-heading mb-4">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="section-subheading mx-auto">
            Everything you need to know about the Peak Brain Score
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card border-none px-6 animate-fade-in-up data-[state=open]:ring-1 data-[state=open]:ring-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 text-base font-medium">
                {faq.question}
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

export default FAQ;
