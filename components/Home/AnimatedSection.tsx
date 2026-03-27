"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TechnicalSection() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-[1400px] mx-auto space-y-16 md:space-y-32">

        {/* BLOCK 1 */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-[tomato] uppercase tracking-widest">
                Document Scanning Services
              </h2>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-light leading-tight tracking-tight">
                OMX Info Management Ltd provides reliable document scanning services for companies that want to convert physical records into digital format.
                <span className="font-medium italic">
                  {" "}Digital records help businesses save office space, improve work speed, and protect files from damage.
                </span>
              </h3>
            </div>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed border-l-4 border-[tomato] pl-6">
              Our trained team carefully handles all documents to maintain privacy and accuracy. Whether you have old files, office records, legal papers, or daily documents.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative aspect-square bg-gray-100 border border-gray-200 shadow-xl overflow-hidden"
          >
            <Image
              src="/images/abc.png"
              alt="Document Scanning Services"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* BLOCK 2 */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative aspect-square bg-gray-100 border border-gray-200 shadow-xl overflow-hidden"
          >
            <Image
              src="/images/wharehouse.png"
              alt="Secure Record Storage Facility"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              className="object-cover"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-[tomato] uppercase tracking-widest">
                Secure Record Storage Facility
              </h2>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-light leading-tight tracking-tight">
                We provide secure and well-managed record storage facilities for businesses that need safe space for their important files and documents. Our warehouse is designed with strong security, fire safety systems, and proper storage arrangements to keep records protected for long periods.
                <span className="font-medium italic">
                  {" "}Each file is stored with proper labelling and tracking so it can be found quickly whenever required.
                </span>
              </h3>
            </div>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed border-l-4 border-[tomato] pl-6">
              Our storage service helps companies free their office space while keeping documents safe and organized. With OMX Info Management Ltd, clients get reliable storage solutions with full safety, confidentiality, and professional record management support.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold">Accountability</h4>
                <p className="text-sm text-gray-500">
                  Full expert management at local levels across India.
                </p>
              </div>
              <div>
                <h4 className="font-bold">Expertise</h4>
                <p className="text-sm text-gray-500">
                  Quality assurance at every level of the document lifecycle.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}