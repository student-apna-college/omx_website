"use client";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Dish TV",
    logo: "/clients/dishtv.png",
    text: "We would like to take this opportunity & express our sincere thanks for providing import services.",
  },
  {
    name: "Jindal SAW Ltd",
    logo: "/clients/jindal.png",
    text: "OmTrans Logistics has done a stupendous job with quality standards and execution.",
  },
  {
    name: "Tata Steel",
    logo: "/clients/tata.png",
    text: "Highly reliable logistics partner with consistent delivery performance.",
  },
  {
    name: "Reliance",
    logo: "/clients/reliance.png",
    text: "Efficient supply chain management and seamless execution.",
  },
  {
    name: "Adani Group",
    logo: "/clients/adani.png",
    text: "Professional team with excellent handling of operations.",
  },

  {
    name: "Adani Group",
    logo: "/clients/adani.png",
    text: "Professional team with excellent handling of operations.",
  },



  {
    name: "Adani Group",
    logo: "/clients/adani.png",
    text: "Professional team with excellent handling of operations.",
  },


  {
    name: "Adani Group",
    logo: "/clients/adani.png",
    text: "Professional team with excellent handling of operations.",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const prevIndex =
    index === 0 ? testimonials.length - 1 : index - 1;
  const nextIndex =
    index === testimonials.length - 1 ? 0 : index + 1;

  return (
    <section className="py-20 mt-10 bg-gradient-to-b from-[#000033] to-[#0041C7]">

      {/* HEADER */}
      <div className="max-w-[1300px] mx-auto px-6 mb-5 flex justify-between items-center text-white">
        <div>
          <p className="text-sm text-white/100">Testimonial</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setIndex(prevIndex)}
            className="p-3 rounded-full bg-white/20 backdrop-blur text-white hover:scale-110 transition"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={() => setIndex(nextIndex)}
            className="p-3 rounded-full bg-white text-[#D60000] shadow hover:scale-110 transition"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-8 px-6">

        {[prevIndex, index, nextIndex].map((i, pos) => {
          const item = testimonials[i];
          const isCenter = pos === 1;

          return (
            <div
              key={i}
              className={`transition-all duration-500 rounded-3xl p-[2px]
              ${
                isCenter
                  ? "scale-110 z-10"
                  : "scale-90 opacity-40"
              }`}
            >
              {/* RED GRADIENT BORDER */}
              <div className="bg-gradient-to-r from-[#ff4d4d] via-[#D60000] to-[#ff1a1a] rounded-3xl p-[2px]">

                {/* CARD */}
                <div className="bg-white rounded-3xl p-8 md:p-10 w-[320px] md:w-[380px] min-h-[260px] flex flex-col justify-between shadow-2xl">

                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="relative w-14 h-14">
                        <Image
                          src={item.logo}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                    </div>

                    <Quote className="text-[#D60000] mb-3" size={28} />

                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-6 text-yellow-400 text-lg">
                    ★★★★★
                  </div>

                </div>
              </div>
            </div>
          );
        })}

      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-10 gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
              i === index ? "w-8 bg-white" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>

    </section>
  );
}