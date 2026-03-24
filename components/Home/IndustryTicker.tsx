"use client";
import React from "react";

interface IndustryTickerProps {
  industries: string[];
}

export default function IndustryTicker({ industries }: IndustryTickerProps) {
  return (
    <div className="overflow-hidden py-12 relative">
      <div className="flex animate-marquee whitespace-nowrap gap-16 text-lg font-bold text-gray-700">
        {industries.map((industry, i) => (
          <span key={i} className="uppercase">
            {industry}
          </span>
        ))}
        {industries.map((industry, i) => (
          <span key={"dup" + i} className="uppercase">
            {industry}
          </span>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
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