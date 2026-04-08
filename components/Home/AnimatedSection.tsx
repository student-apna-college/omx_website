"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TechnicalSection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-white via-white to-white">
      <div className="max-w-[1400px] mx-auto space-y-16 md:space-y-32">

        {/* BLOCK 1: Document Scanning */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-xl md:text-2xl font-black text-[#000033]  tracking-widest">
              Document Scanning Services
            </h2>

            <h3 className="sm:text-2xl md:text-xl  leading-snug tracking-tight">
              OMX Info Management Ltd provides reliable document scanning services to convert physical records into digital format
              <span className="block mt-2  text-[#1a1a1a]">
                Digital records save office space, improve work speed, and protect files from damage
              </span>
            </h3>

            <p className="text-base md:text-lg text-gray-500 leading-relaxed border-l-4  pl-6">
              Our trained team carefully handles all documents to maintain privacy and accuracy. From old files to legal papers, we manage every document with care
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] bg-gray-100 border border-gray-200 shadow-xl overflow-hidden rounded-xl"
          >
            <Image
              src="/images/abc.png"
              alt="Document Scanning Services"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* BLOCK 2: Record Storage Facility */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] bg-gray-100 border border-gray-200 shadow-xl overflow-hidden rounded-xl"
          >
            <Image
              src="/images/wharehouse.jpeg"
              alt="Safer Record Storage Facility"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-xl md:text-2xl font-black text-[#000033] tracking-widest">
              Reliable Record Storage Facility
            </h2>

            <h3 className="text-xl sm:text-2xl md:text-xl leading-snug tracking-tight text-[#1a1a1a]">
              We provide Confidential and well-managed storage facilities for important business files. Our warehouses feature strong security, fire safety systems, and organized storage arrangements
              <span className="block mt-2">
                Each file is labeled and tracked to ensure it can be located quickly whenever required.
              </span>
            </h3>

            <p className="text-base md:text-lg text-gray-500 leading-relaxed border-l-4  pl-6">
              Our storage services help companies free up office space while keeping documents safe and organized. Clients get reliable solutions with full safety, confidentiality, and professional support
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-[#1a1a1a]">Accountability</h4>
                <p className="text-sm text-gray-500">Expert management at local levels across India</p>
              </div>
              <div>
                <h4 className="font-bold text-[#1a1a1a]">Expertise</h4>
                <p className="text-sm text-gray-500">Quality assurance at every stage of the document lifecycle</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}