"use client";
import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";

interface Slide {
  title: string;
  sub: string;
  img: string;
  accent: string;
}

export default function HeroSection({ slides }: { slides: Slide[] }) {
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
    <section className=" relative w-full h-screen overflow-hidden md:h-[calc(100vh-140px)] overflow-hidden">
  <Carousel
    slides={slides}
    currentSlide={currentSlide}
    nextSlide={nextSlide}
    prevSlide={prevSlide}
  />
</section>
  );
}