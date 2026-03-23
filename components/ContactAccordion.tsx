"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does OMX Info Management provide?",
      answer:
        "OMX Info Management offers Records Management, Digitization, Secure Shredding, and Cloud DMS solutions for businesses nationwide.",
    },
    {
      question: "How can I submit a service request?",
      answer:
        "You can submit a service request using our Institutional Inquiry Portal available on the Contact page. Fill in the form with your details and requirements.",
    },
    {
      question: "Are your storage facilities secure?",
      answer:
        "Yes, all our facilities comply with ISO 9001:2015, GDPR regulations, and have Tier 4 Physical Security to ensure the safety of your documents.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[900px] mx-auto px-6">
      <h2 className="text-4xl font-bold text-black text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`mb-4 rounded-xl border border-white/30 backdrop-blur-lg bg-white/30 shadow-md ${
              openIndex === index ? "scale-105" : "scale-100"
            }`}
          >
            {/* Question */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left text-lg md:text-xl font-semibold text-gray-900 bg-white  transition-all duration-500"
            >
              {faq.question}
              <ChevronDown
                size={24}
                className={`transform transition-transform duration-500 ${
                  openIndex === index ? "rotate-180 text-[tomato]" : "text-gray-400"
                }`}
              />
            </button>

            {/* Answer */}
            <div
              className={`px-6 pt-0 pb-5 text-[tomato] text-base md:text-lg transition-all duration-500 overflow-hidden ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}