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
            index === currentSlide
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
        >
          {/* IMAGE */}
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            priority={index === 0}
            className="
              object-cover
              object-[center_25%]
              md:object-center
            "
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 z-10" />

          {/* CONTENT */}
          <div className="relative z-20 h-full max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center">
            <div className="max-w-5xl space-y-5 md:space-y-6">

              {/* TOP LINE */}
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-10 bg-white"></span>

                <span className="text-white text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase">
                  {slide.accent}
                </span>
              </div>

              {/* TITLE */}
              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                  xl:text-7xl
                  font-bold
                  leading-tight
                  text-white
                  max-w-4xl
                "
              >
                {slide.title}
              </h1>

              {/* SUBTEXT */}
              <p
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  text-white/90
                  leading-relaxed
                  max-w-2xl
                "
              >
                {slide.sub}
              </p>

              {/* BUTTONS */}
              <div className="pt-2 sm:pt-4 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="
                    px-6
                    py-3
                    rounded-xl
                    bg-white
                    text-black
                    font-semibold
                    hover:scale-105
                    hover:bg-white/90
                    transition-all
                    duration-300
                    shadow-xl
                  "
                >
                  Our Services
                </Link>

                <Link
                  href="/contact"
                  className="
                    px-6
                    py-3
                    rounded-xl
                    border
                    border-white/40
                    text-white
                    backdrop-blur-md
                    hover:bg-white
                    hover:text-black
                    transition-all
                    duration-300
                  "
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* NAVIGATION BUTTONS */}
      <div
        className="
          absolute
          bottom-5
          left-1/2
          -translate-x-1/2
          md:left-auto
          md:right-10
          md:translate-x-0
          md:bottom-10
          z-30
          flex
          gap-3
        "
      >
        {/* PREV */}
        <button
          onClick={prevSlide}
          className="
            h-11
            w-11
            md:h-12
            md:w-12
            rounded-full
            border
            border-white/30
            bg-white/10
            backdrop-blur-md
            flex
            items-center
            justify-center
            text-white
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
          "
        >
          <ChevronLeft size={20} />
        </button>

        {/* NEXT */}
        <button
          onClick={nextSlide}
          className="
            h-11
            w-11
            md:h-12
            md:w-12
            rounded-full
            border
            border-white/30
            bg-white/10
            backdrop-blur-md
            flex
            items-center
            justify-center
            text-white
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
          "
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </>
  );
}