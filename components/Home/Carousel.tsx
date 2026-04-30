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
          className={`absolute inset-0 transition-opacity duration-2000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* IMAGE */}
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            className="object-cover object-center md:object-[center_30%]"
            priority={index === 0}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />

          {/* CONTENT */}
          <div className="relative z-20 h-full max-w-[1400px] mx-auto px-6 flex items-center">
            <div className="max-w-5xl space-y-5">

              {/* TOP LINE */}
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-10 bg-white"></span>
                <span className="text-white text-xs font-semibold tracking-wide">
                  {slide.accent}
                </span>
              </div>

              {/* TITLE */}
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white">
                {slide.title}
              </h1>

              {/* SUB TEXT */}
              <p className="text-1xl md:text-base text-gray-200 max-w-xl">
                {slide.sub}
              </p>

              {/* BUTTONS */}
              <div className="pt-4 flex gap-3 flex-wrap">
                <Link
                  href="/services"
                  className="border border-white/40 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
                >
                  Our Services
                </Link>

                <Link
                  href="/contact"
                  className="border border-white/40 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
                >
                  Get a Quote
                </Link>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* NAV BUTTONS */}
      <div className="absolute bottom-6 right-1/2 translate-x-1/2 md:bottom-12 md:right-12 md:translate-x-0 z-30 flex gap-3">
        <button
          onClick={prevSlide}
          className="p-3 border border-white/30 text-white hover:bg-white hover:text-black rounded-md transition"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={nextSlide}
          className="p-3 border border-white/30 text-white hover:bg-white hover:text-black rounded-md transition"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </>
  );
}