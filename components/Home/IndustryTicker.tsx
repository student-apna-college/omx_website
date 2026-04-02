"use client";
import React from "react";

interface IndustryTickerProps {
  industries: string[];
}

export default function IndustryTicker({ industries }: IndustryTickerProps) {
  return (
    <div className="relative overflow-hidden py-12 bg-gradient-to-r from-blue-50 via-white to-blue-50">

      {/* LEFT FADE */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>

      {/* RIGHT FADE */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-blue-50 to-transparent z-10"></div>

      {/* TICKER */}
      <div className="group flex whitespace-nowrap gap-8 animate-marquee px-6">

        {[...industries, ...industries].map((industry, i) => (
          <span
            key={i}
            className="px-6 py-3 rounded-full bg-white border border-blue-100 shadow-sm text-sm font-semibold text-[#1e293b] hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 cursor-pointer"
          >
            {industry}
          </span>
        ))}

      </div>

      {/* ANIMATION */}
      <style jsx>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 25s linear infinite;
        }

        .group:hover .animate-marquee {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}