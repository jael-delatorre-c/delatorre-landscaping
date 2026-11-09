"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  items: FAQItem[];
}

export function FAQAccordion({ title = "[Frequently Asked Questions]", items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">{title}</h2>
        <dl className="mt-10 space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-lg border border-neutral-200 bg-white overflow-hidden"
            >
              <dt>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-medium text-neutral-900 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-inset"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  {item.question}
                  <span className="ml-2 shrink-0" aria-hidden>
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                hidden={openIndex !== i}
                className="border-t border-neutral-200 px-4 py-3 text-sm text-neutral-600"
              >
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
