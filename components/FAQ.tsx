import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How does ACC acupuncture work?",
    answer: "To use ACC coverage for acupuncture, you'll need a valid ACC45 form from your doctor or you can self-refer for certain injuries. Bring this form to your first appointment, and we'll handle the rest of the ACC claim process for you."
  },
  {
    question: "Do acupuncture treatments hurt?",
    answer: "Most patients experience minimal to no discomfort. Acupuncture needles are extremely thin (much thinner than injection needles). You may feel a slight tingling or warmth, but treatments are generally very relaxing and comfortable."
  },
  {
    question: "How many sessions do I need for pain relief?",
    answer: "Treatment length varies by individual and condition. Many patients notice improvement within 3-5 sessions for acute injuries. Chronic conditions may require 8-12 sessions. We'll create a personalized treatment plan during your initial consultation."
  },
  {
    question: "Do I need a GP referral to use ACC?",
    answer: "For ACC claims, you may not need a GP referral depending on your injury type. You can self-refer for many musculoskeletal injuries. We recommend calling us to discuss your specific situation before your first appointment."
  },
  {
    question: "What conditions can acupuncture treat?",
    answer: "Acupuncture is effective for many ACC-covered conditions including back pain, neck pain, shoulder injuries, headaches and migraines, sports injuries, stress-related conditions, and general musculoskeletal pain. We can discuss your specific condition during your consultation."
  }
];

export function FAQ() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4" style={{ fontWeight: 600 }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our acupuncture services and ACC coverage
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}