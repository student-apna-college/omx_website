"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CompanyAccordion() {

  const [open, setOpen] = useState<number | null>(null);

  const data = [
    {
      q: "What do you mean by document digitization?",
      a: "Document digitization is the method of converting paper records into digital files using professional scanning equipment and secure processing software",
    },
    {
      q: "Why is document scanning important for companies?",
      a: "Scanning helps organizations reduce physical storage space, improve file access speed, and keep records safe in digital format",
    },
    {
      q: "Which types of records can be digitized?",
      a: "We handle office files, legal papers, registers, drawings, invoices, books, and large-size documents with high accuracy scanning",
    },
    {
      q: "Do you provide searchable scanned files?",
      a: "Yes, we create searchable digital files using OCR technology so that text inside scanned documents can be easily found",
    },
    {
      q: "How do you maintain data safety during scanning?",
      a: "All documents are processed in controlled environment with restricted access, secure systems, and monitored workflow",
    },
    {
      q: "Can large volume records be scanned quickly?",
      a: "Our production scanners allow bulk scanning with high speed while maintaining image clarity and proper indexing",
    },
    {
      q: "Do you provide digital backup after scanning?",
      a: "Yes, scanned files can be delivered in hard drive, server storage, or cloud system as per client requirement",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100">

      <div className="max-w-[900px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#0f172a] text-center mb-12">
          Document Scanning FAQ
        </h2>

        {data.map((item, i) => (

          <div
            key={i}
            className="mb-5 rounded-2xl border border-blue-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
          >

            {/* Question */}
            <div
              onClick={() => setOpen(open === i ? null : i)}
              className="flex justify-between items-center p-5 cursor-pointer"
            >

              <h3 className="font-semibold text-[#1e293b]">
                {item.q}
              </h3>

              <ChevronDown
                className={` transition duration-300 ${
                  open === i ? "rotate-180" : ""
                }`}
              />

            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 px-5 ${
                open === i ? "max-h-40 pb-5" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">
                {item.a}
              </p>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}