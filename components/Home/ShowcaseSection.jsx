"use client";
import React from "react";
import Image from "next/image";

export default function ShowcaseSection() {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">

      {/* IMAGE */}
      <Image
        src="/images/placeholder6.jpeg"
        alt="Warehouse"
        fill
       className="object-cover object-top"
        priority
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center">
        <div className="px-4 md:px-8 max-w-xl text-white">

          <h2 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Best Record Management Storage Solution
          </h2>

          <p className="text-sm md:text-base mt-3 md:mt-5 text-gray-200 leading-relaxed">
            We specialize in smarter record management, document storage,
            scanning, digital storage, DMS software, and confidential
            document shredding services. Our solutions ensure safety,
            efficiency, and reliability for your business.
          </p>

        </div>
      </div>

    </section>
  );
}