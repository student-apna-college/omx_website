"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function IndustryPageUI({ data }: any) {

  const [showMore, setShowMore] = useState(false);

  const shortText = data.content?.slice(0, 400);

  return (
    <div className="bg-gradient-to-b from-[#f8fbff] via-white to-[#eef5ff] min-h-screen overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[92vh] min-h-[650px] overflow-hidden">

        {/* IMAGE */}
        <Image
          src={data.heroImage || data.image}
          alt={data.title}
          fill
          priority
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 768px) 100vw,
            (max-width: 1024px) 100vw,
            100vw
          "
          className="
            object-cover
            object-center
            scale-105
          "
        />

        {/* PREMIUM OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021B3A]/90 via-[#021B3A]/50 to-[#021B3A]/20 z-10" />

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full z-10" />

        {/* CONTENT */}
        <div className="absolute inset-0 z-20 flex mt-25">

          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full">

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl"
            >

              {/* TOP LABEL */}
              <div className="flex items-center gap-4 mb-4">

                <div className="h-[2px] w-14 bg-white"></div>

                <span className="uppercase tracking-[0.3em] text-xs font-semibold text-white/80">
                  Enterprise Solutions
                </span>

              </div>

              {/* TITLE */}
              <h1 className="
                text-white
                text-3xl
                sm:text-5xl
                md:text-4xl
                lg:text-4xl
                font-light
                leading-tight
                mb-6
              ">
                {data.heroTitle || data.title}
              </h1>

              {/* DESCRIPTION */}
              <p className="
                text-white/85
                text-base
                md:text-lg
                leading-relaxed
                max-w-2xl
              ">
                {data.description}
              </p>

              {/* BUTTON */}
              <div className="mt-8">

                <button
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    bg-white
                    text-[#021B3A]
                    px-7
                    py-3
                    rounded-full
                    font-semibold
                    shadow-xl
                    hover:scale-105
                    transition-all
                    duration-500
                  "
                >

                  Explore More

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />

                </button>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="relative py-20">

        {/* Background Blur */}
        <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-blue-200/30 blur-3xl rounded-full" />

        <div className="max-w-[1350px] mx-auto px-6 lg:px-12 relative z-10">

          {/* HEADING */}
          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.3em] text-sm text-[#1574AD] font-semibold mb-4">
              Industry Overview
            </p>

            <h2 className="
              text-3xl
              md:text-5xl
              font-light
              text-slate-900
              leading-tight
            ">
              Smarter Information{" "}
              <span className="font-semibold text-[#1574AD]">
                Management
              </span>
            </h2>

          </div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-24"
            >

              <div className="
                relative
                overflow-hidden
                rounded-[32px]
                shadow-[0_25px_70px_rgba(2,27,58,0.18)]
                group
              ">

                <Image
                  src={data.image}
                  alt={data.title}
                  width={700}
                  height={500}
                  className="
                    object-cover
                    w-full
                    h-full
                    group-hover:scale-105
                    transition-transform
                    duration-700
                  "
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              </div>

            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="
                relative
                bg-white/70
                backdrop-blur-xl
                border
                border-white/50
                rounded-[32px]
                p-7
                md:p-10
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >

              {/* TOP BAR */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-12 h-[3px] bg-[#1574AD] rounded-full"></div>
                <span className="uppercase tracking-[0.25em] text-xs text-slate-500 font-semibold">
                  Detailed Insights
                </span>
              </div>

              {/* CONTENT */}
              <p className="
                text-slate-600
                leading-[2]
                text-base
                whitespace-pre-line
              ">
                {showMore ? data.content : shortText + "..."}
              </p>

              {/* BUTTON */}
              <button
                onClick={() => setShowMore(!showMore)}
                className="
                  mt-8
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-[#1574AD]
                  font-semibold
                  hover:gap-3
                  transition-all
                "
              >
                {showMore ? "Show Less" : "Read More"}

                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition"
                />

              </button>
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
}