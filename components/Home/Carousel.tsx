"use client";
import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Slide {
  title: string;
  sub: string;
  img: string;
  accent: string;
}

interface CarouselProps {
  slides: Slide[];
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
}

export default function Carousel({
  slides,
  currentSlide,
  nextSlide,
  prevSlide,
}: CarouselProps) {
  return (
    <>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* IMAGE */}
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            className="object-contain md:object-cover object-center md:object-[center_30%]"
            priority={index === 0}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* CONTENT */}
          <div className="relative z-20 h-full max-w-[1400px] mx-auto px-6 flex items-center">
            <div className="max-w-4xl space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-12 bg-[white]"></span>
                <span className="text-[white] text-xs font-bold">
                  {slide.accent}
                </span>
              </div>

              <h1 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight text-white">
                {slide.title}
              </h1>

              <p className="text-sm md:text-base text-gray-200 max-w-xl">
                {slide.sub}
              </p>

              <div className="pt-6 flex gap-4 flex-wrap">
                <Link
                  href="/services"
                  className="border border-white/40  text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition"
                >
                  Our Services
                </Link>

                <Link
                  href="/contact"
                  className="border border-white/40 text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition"
                >
                  Get a Quote
                </Link>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* BUTTONS */}
      <div className="absolute bottom-12 right-14 md:bottom-50 md:right-12 z-30 flex gap-3">
        <button
          onClick={prevSlide}
          className="p-3 border border-white/30 text-white hover:bg-[#000033] rounded-md"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="p-3 border border-white/30 text-white hover:bg-[#000033] rounded-md"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </>
  );
}