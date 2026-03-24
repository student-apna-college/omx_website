"use client";

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TechnicalSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto space-y-32">

        {/* Document Scanning Services */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* TEXT LEFT */}
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.4 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-[tomato] uppercase tracking-[0.4em]">
                Document Scanning Services
              </h2>
              <h3 className="text-2.5xl font-light leading-tight tracking-tight">
                OMX Info Management Ltd provides reliable document scanning services for companies that want to convert physical records into digital format.
                <span className="font-medium italic"> Digital records help businesses save office space, improve work speed, and protect files from damage.</span>
              </h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-[tomato] pl-8">
              Our trained team carefully handles all documents to maintain privacy and accuracy. Whether you have old files, office records, legal papers, or daily documents.
            </p>
          </motion.div>

          {/* IMAGE RIGHT */}
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.4 }}
            className="relative aspect-square bg-gray-100 border border-gray-200 shadow-2xl overflow-hidden"
          >
            <Image
              src="/images/abc.png"
              alt="OMX Warehouse Infrastructure"
              fill
              className="object-cover"
            />
            <div className="absolute top-0 right-0 bg-white p-8 border-l border-b border-gray-200">
              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Facility Est.</p>
              <p className="text-2xl font-bold">2004</p>
            </div>
          </motion.div>
        </div>

        {/* Secure Record Storage Facility */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* IMAGE LEFT */}
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.4 }}
            className="relative aspect-square bg-gray-100 border border-gray-200 shadow-2xl overflow-hidden"
          >
            <Image
              src="/images/wharehouse.png"
              alt="Secure Record Storage Facility"
              fill
              className="object-cover"
            />
            <div className="absolute top-0 right-0 bg-white p-8 border-l border-b border-gray-200">
              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Facility Est.</p>
              <p className="text-2xl font-bold">2004</p>
            </div>
          </motion.div>

          {/* TEXT RIGHT */}
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.4 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-xs font-black text-[tomato] uppercase tracking-[0.4em]">
                Secure Record Storage Facility
              </h2>
              <h3 className="text-2.5xl font-light leading-tight tracking-tight">
                We provide secure and well-managed record storage facilities for businesses that need safe space for their important files and documents. Our warehouse is designed with strong security, fire safety systems, and proper storage arrangements to keep records protected for long periods.
                <span className="font-medium italic"> . Each file is stored with proper labelling and tracking so it can be found quickly whenever required.</span>
              </h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-[tomato] pl-8">
              Our storage service helps companies free their office space while keeping documents safe and organized. With OMX info Management Ltd, clients get reliable storage solutions with full safety, confidentiality, and professional record management support.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <h4 className="font-bold">Accountability</h4>
                <p className="text-sm text-gray-500">Full expert management at local levels across India.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold">Expertise</h4>
                <p className="text-sm text-gray-500">Quality assurance at every level of the document lifecycle.</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

























