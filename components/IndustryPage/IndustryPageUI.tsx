"use client";
import { useState } from "react";
import Image from "next/image";

export default function IndustryPageUI({ data }:any) {
  const [showMore, setShowMore] = useState(false);

  const shortText = data.content?.slice(0, 400);

  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen pt-12 sm:pt-16 md:pt-20">

      {/* HERO */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[420px] lg:h-[480px] overflow-hidden">
        <Image
          src={data.heroImage || data.image}
          alt={data.title}
          fill
          className="object-cover object-contain"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex flex-col items-start justify-center px-6 md:px-12 text-left">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
  {data.heroTitle}
</h1>
          <p className="text-gray-200 max-w-2xl text-sm md:text-lg">
            {data.description}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-5 md:px-10 py-14">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {data.heading}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT - IMAGE (sticky feel) */}
          <div className="md:sticky md:top-24">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={data.image}
                alt={data.title}
                width={600}
                height={400}
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* RIGHT - CONTENT */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">

            {/* Short Content */}
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {showMore ? data.content : shortText + "..."}
            </p>

            {/* Toggle Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 text-blue-600 font-semibold hover:underline"
            >
              {showMore ? "Show Less" : "Read More"}
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}


