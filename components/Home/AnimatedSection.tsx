"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TechnicalSection() {
  return (
   <section className="py-12 md:py-16 px-4 md:px-6 
bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] shadow-[0_10px_40px_rgba(0,0,0,0.05)]
text-white">
      <div className="max-w-[1200px] mx-auto space-y-16 md:space-y-24">



  {/* BLOCK 2 */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] bg-gray-100 border border-gray-200 shadow-lg overflow-hidden rounded-xl"
          >
            <Image
              src="/images/wharehousee6.jpeg"
              alt="Safer Record Storage Facility"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h2 className="text-lg md:text-2xl font-semibold text-slate-800 tracking-tight leading-snug">
              Smart and Safer Record Storage Facility
            </h2>

            <h3 className="text-xl md:text-1xl font-semibold leading-snug text-[#1a1a1a]">
              We provide confidential and well-managed storage facilities for important business files
            </h3>

            <p className="text-sm md:text-base text-gray-500 leading-relaxed border-l-4 border-tomato pl-4">
              Our warehouses feature strong security, fire safety systems, and organized storage. Each file is labeled and tracked for quick access whenever required.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <h4 className="font-semibold text-[#1a1a1a]">Accountability</h4>
                <p className="text-xs md:text-sm text-gray-500">
                  Expert management at local levels across India
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#1a1a1a]">Expertise</h4>
                <p className="text-xs md:text-sm text-gray-500">
                  Quality assurance at every stage
                </p>
              </div>
            </div>
          </motion.div>

        </div>





        {/* BLOCK 1 */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h2 className="text-lg md:text-2xl font-semibold text-slate-800 tracking-tight leading-snug">
              Document Scanning Services
            </h2>

            <h3 className="text-xl md:text-1xl font-semibold leading-snug text-[#1a1a1a]">
              OMX Info Management Ltd provides smart and safer document scanning services to convert physical records into digital format
            </h3>

            <p className="text-sm md:text-base text-gray-500 leading-relaxed border-l-4 border-tomato pl-4">
              Digital records save office space, improve work speed, and protect files from damage. Our trained team carefully handles all documents to maintain privacy and accuracy.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] bg-gray-100 border border-gray-200 shadow-lg overflow-hidden rounded-xl"
          >
            <Image
              src="/images/abc.png"
              alt="Document Scanning Services"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </div>

      

      </div>
    </section>
  );
}