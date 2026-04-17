"use client";
import React from "react";

interface IndustryTickerProps {
  industries: string[];
}

export default function IndustryTicker({ industries }: IndustryTickerProps) {
  return (
    <div className=" w-full z-[60] overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-50">

      {/* INNER WRAPPER (controls height) */}
      <div className="relative py-3">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-blue-50 to-transparent z-10"></div>

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-blue-50 to-transparent z-10"></div>

        {/* TICKER */}
        <div className="flex whitespace-nowrap gap-8 animate-marquee px-6 group">

          {[...industries, ...industries].map((industry, i) => (
            <span
              key={i}
              className="px-5 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-sm font-semibold text-[#1e293b] hover:bg-white hover:text-[#1e293b] transition cursor-pointer"
            >
              {industry}
            </span>
          ))}

        </div>

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