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
    }, 1800);

    return () => clearInterval(interval);
  }, [industries.length]);

  const list = [...industries, ...industries];

  return (
    <div className="relative w-full overflow-hidden py-10 bg-gradient-to-r from-slate-50 via-white to-slate-50">
      {/* FADE LEFT */}
      
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

      {/* FADE RIGHT */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* TRACK */}
      <div className="ticker-track flex whitespace-nowrap items-center">
        

        {list.map((item, index) => {
          const isCurrent = index % industries.length === activeIndex;

          return (
            <span
              key={index}
              className={`
                px-10
                text-lg md:text-2xl
                uppercase
                tracking-wide
                transition-all duration-500 ease-out
                relative
                
                ${
                  isCurrent
                    ? "text-[#0f172a] scale-110 font-semibold opacity-100"
                    : "text-gray-400 opacity-50"
                }
              `}
            >
              {item}

              {/* underline glow effect */}
              {isCurrent && (
                <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
              )}
            </span>
          );
        })}
      </div>

      {/* CSS */}
      <style jsx>{`
        .ticker-track {
          animation: scrollTicker 20s linear infinite;
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