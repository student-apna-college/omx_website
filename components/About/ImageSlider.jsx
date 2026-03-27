"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt={`Slide ${i}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={85}
          priority={i === 0} // only first image priority
          className={`object-cover absolute inset-0 transition-all duration-700 ease-in-out
            ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
        />
      ))}

    </div>
  );
}