"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({images,}: ImageSliderProps) {
  

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (!images?.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images?.length) {
    return null;
  }

  return (
    <div className="relative h-[300px] sm:h-[350px] md:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden">
      {images.map((img: string, i: number) => (
        <Image
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={90}
          priority={i === 0}
          className={`
            absolute inset-0
            object-cover
            object-center
            transition-all duration-700 ease-in-out
            ${
              i === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }
          `}
        />
      ))}

      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}