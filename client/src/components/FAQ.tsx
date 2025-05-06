import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  // Assuming your translation JSON structure for FAQ is like:
  // "faq": {
  //   "title": "Frequently Asked Questions",
  //   "questions": [
  //     { "question": "Q1?", "answer": "A1" },
  //     { "question": "Q2?", "answer": "A2" }
  //   ]
  // }
  // Need to tell i18next to return the object/array
  const faqItems = t('faq.questions', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          {t('faq.title')}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-black">
              <AccordionTrigger className="text-left font-bold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
