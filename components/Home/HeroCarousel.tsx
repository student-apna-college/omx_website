"use client";
import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";

interface Slide {
  title: string;
  sub: string;
  img: string;
  accent: string;
}

interface HeroSectionProps {
  slides: Slide[];
}

export default function HeroSection({ slides }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-[#1a1a1a]">
      <Carousel
        slides={slides}
        currentSlide={currentSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </section>
  );
}