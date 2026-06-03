"use client";

import {
  ShieldCheck,
  Clock,
  Truck,
  BadgeCheck,
  MonitorCloud,
  FileScanIcon,
} from "lucide-react";

import { motion } from "framer-motion";

export default function StatsSection() {

  const statsData = [
    {
      icon: ShieldCheck,
      title: "Safer and Trusted Storage",
      color: "bg-[#1574AD] text-white",
    },

    {
      icon: Clock,
      title: "Efficient and Timely Retrieval",
      color: "bg-[#1574AD] text-white",
    },

    {
      icon: Truck,
      title: "100% TAT Adherence Guaranteed",
      color: "bg-[#1574AD] text-white",
    },

    {
      icon: BadgeCheck,
      title: "Eco-Friendly Certified Shradding",
      color: "bg-[#1574AD] text-white",
    },

    {
      icon: MonitorCloud,
      title: "Robust and Secure DMS Software",
      color: "bg-[#1574AD] text-white",
    },

    {
      icon: FileScanIcon,
      title: "High Resolution Scanning",
      color: "bg-[#1574AD] text-white",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-[#eef5ff]">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-200/30 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-200/30 blur-3xl rounded-full" />

      <div className="max-w-[1250px] mx-auto px-6 relative z-10">

        {/* HEADING */}
        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.3em] text-sm text-[#1574AD] font-semibold mb-3">
            Enterprise Advantages
          </p>

          <h2 className="text-3xl md:text-5xl font-light text-slate-900 leading-tight">
            Why Businesses Trust{" "}
            <span className="font-semibold text-[#000033]">
              OMX Solutions
            </span>
          </h2>

        </div>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >

          {statsData.map((item, i) => (

            <motion.div
              key={i}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 80,
                  rotateX: 40,
                  scale: 0.85,
                  filter: "blur(10px)",
                },

                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative rounded-[30px] p-[1px] bg-gradient-to-br ${item.color}`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >

              {/* CARD */}
              <div
                className="
                  group
                  relative
                  h-full
                  rounded-[30px]
                   ${item.color} 
                
                  backdrop-blur-xl
                  border
                  border-white/50
                  p-8
                  overflow-hidden
                  shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-700
                  md:hover:-translate-y-3
                  md:hover:shadow-[0_30px_70px_rgba(2,27,58,0.18)]
                "
              >

                {/* Animated Glow */}
                <div className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-700
                  bg-gradient-to-br
                  from-white/50
                  via-transparent
                  to-transparent
                " />

                {/* Floating Gradient */}
                <div className="
                  absolute
                  -top-10
                  -right-10
                  w-32
                  h-32
                  bg-white/30
                  blur-3xl
                  rounded-full
                  group-hover:scale-150
                  transition
                  duration-1000
                " />

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* ICON BOX */}
                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-white
                      shadow-lg
                      flex
                      items-center
                      justify-center
                      mb-6
                      mx-auto
                      group-hover:rotate-6
                      group-hover:scale-110
                      transition-all
                      duration-500
                    "
                  >

                    <item.icon
                      size={32}
                      className="text-[#0f172a]"
                    />

                  </div>

                  {/* TITLE */}
                  <h3 className="
                    text-lg
                    md:text-xl
                    font-semibold
                    text-white
                    leading-snug
                    tracking-tight
                    text-center
                  ">
                    {item.title}
                  </h3>

                  {/* Bottom Line */}
                  <div className="
                    mt-5
                    mx-auto
                    w-0
                    h-[3px]
                    rounded-full
                    bg-gradient-to-r
                    from-[#1574AD]
                    to-[#000033]
                    group-hover:w-20
                    transition-all
                    duration-500
                  " />

                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}