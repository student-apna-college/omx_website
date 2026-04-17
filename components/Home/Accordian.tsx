"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function CompanyAccordion() {

  const [open, setOpen] = useState<number | null>(null);

 const data = [
  {
    q: "What services do you offer?",
    a: "We provide end-to-end Records & Information Management solutions including document storage, scanning, digitization, DMS (Document Management System), and secure data destruction services.",
  },
  {
    q: "What do you mean by document digitization?",
    a: "Document digitization is the process of converting physical paper records into secure digital files using high-quality scanning equipment and advanced processing systems.",
  },
  {
    q: "Why is document scanning important for companies?",
    a: "It helps reduce physical storage, improves access speed, enhances security, and ensures better document management and compliance.",
  },
  {
    q: "Which types of records can be digitized?",
    a: "We digitize office files, legal documents, invoices, registers, books, drawings, and large-format records with high accuracy.",
  },
  {
    q: "Do you provide searchable scanned files?",
    a: "Yes, we use OCR technology to create fully searchable files so you can easily find any content within documents.",
  },
  {
    q: "Can large volume records be scanned quickly?",
    a: "Yes, our high-speed production scanners handle bulk records efficiently while maintaining quality and proper indexing.",
  },
  {
    q: "Do you provide digital backup after scanning?",
    a: "Yes, files can be delivered via hard drives, secure servers, or cloud storage based on your requirements.",
  },
  {
    q: "How secure is my data with OMX?",
    a: "Your data security is our top priority. We use advanced security systems, access controls, and ISO-certified processes to ensure complete confidentiality and protection of your records.",
  },
  {
    q: "Can I access my documents anytime?",
    a: "Yes, our advanced DMS allows you to securely access, track, and retrieve your documents anytime, from anywhere.",
  },
  {
    q: "Do you provide services across India?",
    a: "Yes, we have a strong Pan India presence with secure infrastructure and dedicated teams to serve clients nationwide.",
  },
  {
    q: "How quickly can I get my documents when needed?",
    a: "We are strongly focused on TAT (Turnaround Time) and ensure fast and reliable document retrieval as per your requirements.",
  },
  {
    q: "Do you offer customized solutions for businesses?",
    a: "Absolutely. We understand that every business is different, so we provide tailored solutions based on your specific needs and industry requirements.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve multiple industries including Banking, Healthcare, Insurance, Legal, Logistics, FMCG, Telecom, and more.",
  },
  {
    q: "Do you provide on-site services?",
    a: "Yes, we offer both on-site and off-site services including scanning, shredding, and record management setup.",
  },

  // 🔥 UPDATED CONTACT FAQ WITH LINK
  {
    q: "How can I get started with your services?",
    a: (
      <>
        Simply contact us through our{" "}
        <Link
          href="/contact"
          className="text-blue-600 font-semibold underline underline-offset-4 hover:text-blue-800 transition"
        >
          Contact Us page
        </Link>{" "}
        and our team will get in touch with you to understand your requirements and provide the best solution.
      </>
    ),
  },

  {
    q: "Why should I choose OMX Info Management Ltd?",
    a: "With 20+ years of experience, ISO certification, strong infrastructure, and a commitment to security and reliability, OMX is a trusted partner for managing your business information.",
  },
  {
    q: "Is there any cost for consultation?",
    a: "No, we offer a free initial consultation to understand your requirements and suggest the best solution.",
  },
  {
    q: "How do you ensure compliance and legal safety?",
    a: "Our processes are designed to meet industry standards and compliance requirements, ensuring your data is handled legally and securely.",
  },
];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-[1100px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-500 text-sm md:text-base">
            Everything you need to know before getting started
          </p>
        </div>

        {/* 🔥 GRID START */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {data.map((item, i) => (

            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >

              {/* Question */}
              <div
                onClick={() => setOpen(open === i ? null : i)}
                className="flex justify-between items-center p-5 cursor-pointer"
              >

                <h3 className="font-medium text-slate-800 text-base md:text-lg">
                  {item.q}
                </h3>

                <ChevronDown
                  className={`text-slate-500 transition-transform duration-300 ${
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
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {item.a}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}