import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of businesses can benefit from AI automation?",
    answer:
      "Virtually any business can benefit from AI automation. Our clients range from small businesses to large enterprises across retail, healthcare, finance, manufacturing, and service industries. If your business has repetitive tasks or data-heavy processes, there's likely an automation opportunity.",
  },
  {
    question: "How long does implementation typically take?",
    answer:
      "Implementation timelines vary based on complexity, but most projects fall between 4-12 weeks. Simple workflow automations can be completed in as little as 2-3 weeks, while enterprise-wide solutions may take 3-6 months.",
  },
  {
    question: "What level of technical expertise is required on our end?",
    answer:
      "No technical expertise is required from your team. We handle all technical aspects of implementation, integration, and training. We'll work with your team to understand your processes, but the technical execution is entirely our responsibility.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing varies based on project scope, complexity, and integration requirements. We offer flexible pricing models including fixed-price projects, monthly subscriptions, and ROI-based arrangements. Contact us for a personalized quote based on your specific needs.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-8 md:px-16 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-12">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border-t-2 border-black pt-4"
          >
            <AccordionTrigger className="flex justify-between items-center text-lg font-bold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2 text-sm">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
