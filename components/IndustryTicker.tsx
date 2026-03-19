"use client";
import React, { useState, useEffect } from "react";

interface TickerProps {
  industries: string[];
}

export default function IndustryTicker({ industries }: TickerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === industries.length - 1 ? 0 : prev + 1
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [industries.length]);

  // duplicate only 2 times (not 3)
  const list = [...industries, ...industries];

  return (
    <div className="relative w-full overflow-hidden py-8">

      {/* FADE LEFT */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

      {/* FADE RIGHT */}
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />


      {/* SCROLL CONTAINER */}
      <div className="ticker-track flex whitespace-nowrap">

        {list.map((item, index) => {

          const isCurrent = index % industries.length === activeIndex;

          return (
            <span
              key={index}
              className={`
                px-8
                text-lg md:text-2xl
                uppercase
                italic
                tracking-tight
                transition-all duration-500
                
                ${
                  isCurrent
                    ? "text-[#1a1a1a] scale-110 font-medium opacity-100"
                    : "text-gray-400 opacity-60"
                }
              `}
            >
              {item}
            </span>
          );
        })}

      </div>


      {/* CSS */}
      <style jsx>{`
        .ticker-track {
          animation: scrollTicker 18s linear infinite;
        }

        @keyframes scrollTicker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </div>
  );
}