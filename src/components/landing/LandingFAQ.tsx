"use client";

import React from "react";

import { Accordion, AccordionItem } from "@heroui/react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface LandingFAQProps {
  title: string;
  faqs: FAQItem[];
  className?: string;
}

export function LandingFAQ({ title, faqs, className = "" }: LandingFAQProps) {
  return (
    <section className={`py-16 lg:py-20 ${className}`}>
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-900 mb-12 text-center">
            {title}
          </h2>

          <Accordion
            variant="splitted"
            className="px-0"
            itemClasses={{
              base: "px-6 py-4",
              title: "text-lg font-semibold text-navy-900",
              content: "text-gray-700 leading-relaxed",
              trigger: "py-4",
            }}
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} aria-label={faq.question} title={faq.question}>
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
