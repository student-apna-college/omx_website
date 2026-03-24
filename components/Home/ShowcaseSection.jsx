"use client";
import React from "react";
import Image from "next/image";

export default function ShowcaseSection() {
  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
      <Image
        src="/images/wharhouse2.png"
        alt="Warehouse"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center">
        <div className="ml-8 max-w-xl">
          <h2 className="text-1xl md:text-8xl font-light text-white leading-none tracking-tighter">
            Best Warehouse Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
            We specialize in secure document storage, warehouse record
            management, document scanning, and secure shredding services.
            Our solutions ensure safety, efficiency, and reliability for your business.
          </p>
        </div>
      </div>
    </div>
  );
}