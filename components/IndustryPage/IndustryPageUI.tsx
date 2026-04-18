"use client";
import { useState } from "react";
import Image from "next/image";

export default function IndustryPageUI({ data }: any) {
  const [showMore, setShowMore] = useState(false);

  const shortText = data.content?.slice(0, 400);

  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen">

      {/* HERO FULL SCREEN */}
      <section className="relative h-[calc(100vh-70px)] w-full overflow-hidden">

        <Image
          src={data.heroImage || data.image}
          alt={data.title}
          fill
          priority
          className="object-cover"   // ✅ FIX: cover use karo (contain hatao)
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center px-6 md:px-12">
          
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 max-w-3xl">
            {data.heroTitle}
          </h1>

          <p className="text-gray-200 max-w-2xl text-sm md:text-lg">
            {data.description}
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-5 md:px-10 py-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {data.heading}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* LEFT IMAGE */}
          <div className="md:sticky md:top-20">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={data.image}
                alt={data.title}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-white rounded-2xl shadow-lg p-5 md:p-6">

            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {showMore ? data.content : shortText + "..."}
            </p>

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