"use client";
import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// Define the shape of a single slide
interface Slide {
  title: string;
  sub: string;
  img: string;
  accent: string;
}

// Define the props for the Carousel component
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
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10 " />
          <Image 
            src={slide.img}
            alt={slide.title}
            fill
            className="object-cover "
            priority={index === 0}
            
          />
          <div className="relative z-20 h-full max-w-[1400px] mx-auto px-6 flex flex-col justify-center">
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-12 text-[#006853]"></span>
                <span className="text-[#000033] text-xs font-bold">
                  {slide.accent}
                </span>
              </div>
              <p className="text-5xl md:text-7xl text-white font-light leading-tight">
                {slide.title.split(" ").map((word, i) => (
                  <span key={i} className={i === 1 ? "font-medium" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </p>
              <p className="text-small text-gray-100 max-w-xl leading-relaxed">
                {slide.sub}
              </p>
              <div className="pt-8 flex gap-4">
                <Link
                  href="/services"
                  className="text-[#006853] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-[12px] border p-4"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/30 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-[12px] border p-4"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-12 right-12 z-30 flex gap-4">
        <button
          onClick={prevSlide}
          className="p-4 border border-white/20 text-white hover:bg-[#000033] transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-4 border border-white/20 text-white hover:bg-[#000033] transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </>
  );
}