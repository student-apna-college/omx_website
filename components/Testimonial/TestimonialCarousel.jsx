"use client";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "ICICI ",
    since:"Associated Since Last 20 Years",
    logo: "/logo/client4.jpg",
    text: "Omx Info has done a stupendous job in closing all audit points related to Risk Management. We appreciate the efforts put in by the team for effectively executing all points and parameters, while maintaining the highest Quality standards OMX INFO has delivered reliable and efficient document management services for ICICI Bank Ltd. Their expertise in document storage, secure & timely shredding, has ensured smooth handling of sensitive records We commend the team’s commitment to confidentiality, compliance, and overall service excellence.",
  },
  {
    name: "IBS Hospital",
    logo: "/logo/client16.jpg",
    text: "Omx Info has demonstrated strong capability in managing Scanning Services & Document Storage for IBS Hospital. The team ensured that all records were systematically organized and digitized with precision, enabling improved accessibility and operational efficiency within TAT.Their disciplined approach towards data handling, along with a clear focus on accuracy and process quality, has been noteworthy.",
  },
  {
    name: "PristynCare Hospital",
    logo: "/logo/pristyn care.png",
    text: "Omx Info has successfully executed document storage and scanning services across all branches of Prystin Care Hospital in India, including locations beyond the city. The team ensured seamless coordination and consistency in managing records across multiple sites.Their ability to handle large or small volumes of documentation with structured processes and timely execution has contributed to improved record management and accessibility. The focus on standardization and operational efficiency across all locations is highly commendable.",
  },

  {
    name: "FARO",
    logo: "/logo/client17.png",
    text: "The document storage services provided by Omx Info have been managed with strong efficiency and a well-controlled process. Records are maintained in an organized and secure environment, ensuring easy and timely retrieval whenever needed.The team’s structured workflow, accuracy in handling data, and consistent service standards have contributed positively to FARO’s overall storage management system.",
  },
  {
    name: "Yatharth Hospital",
    logo: "/logo/yatharth.png",
    text: "Document storage and retrieval services for Yatharth Hospital across all branch locations have been managed by Omx Info with a well-structured and controlled operational approach. Records are systematically maintained to ensure security, accuracy, and timely availability whenever required.The organization has maintained a consistent standard of coordination and precision in handling documentation requests, resulting in improved efficiency and seamless accessibility of records across all branches.OMX commend the team’s commitment to confidentiality, compliance, and overall service excellence.",
  },

 {
    name: "Forties Hospital",
    since:"Associated Since Last 18 Years",
    logo: "/logo/client14.jpg",
    text: "Omx Info has been instrumental in delivering efficient document management solutions for Fortis Hospital, supported by a streamlined and well-governed operational process. All records are organized and preserved with a strong emphasis on data security, accuracy, and quick retrieval whenever needed.The team has consistently demonstrated a high level of professionalism in managing documentation workflows, ensuring smooth coordination and dependable turnaround times. This structured approach has significantly improved record accessibility and overall operational effectiveness across all locations. Omx Info appreciates the team’s dedication towards maintaining strict confidentiality standards, adhering to compliance requirements, and delivering reliable service quality.",
  },


];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [expanded, setExpanded] = useState({}); 

  // AUTO SLIDE (pause on hover)
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [paused]);

  const prevIndex = index === 0 ? testimonials.length - 1 : index - 1;
  const nextIndex = index === testimonials.length - 1 ? 0 : index + 1;

  const toggleReadMore = (i) => {
    setExpanded((prev) => ({
      ...prev,
      [i]: !prev[i],
    }));
  };

  return (
    <section className="py-10 mt-10 bg-gradient-to-b from-[#000033] to-[#0041C7]">

      {/* HEADER */}
      <div className="max-w-[1300px] mx-auto px-6 mb-5 flex justify-between items-center text-white">
        <div>
          <p className="text-sm">Testimonial</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        <div className="flex gap-3">
          <button onClick={() => setIndex(prevIndex)} className="p-3 rounded-full bg-white/20 text-white">
            <ArrowLeft size={18} />
          </button>

          <button onClick={() => setIndex(nextIndex)} className="p-3 rounded-full bg-white text-[#D60000]">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-8 px-6">

        {[prevIndex, index, nextIndex].map((i, pos) => {
          const item = testimonials[i];
          const isCenter = pos === 1;
          const isExpanded = expanded[i];

          const shortText =
            item.text.length > 140
              ? item.text.slice(0, 140) + "..."
              : item.text;

          return (
            <div
              key={i}
              onMouseEnter={() => setPaused(true)}   // 👈 pause
              onMouseLeave={() => setPaused(false)}  // 👈 resume
              className={`transition-all duration-500 rounded-3xl p-[2px]
              ${isCenter ? "scale-110 z-10" : "scale-90 opacity-40"}`}
            >
              <div className="bg-gradient-to-r from-[#ff4d4d] via-[#D60000] to-[#ff1a1a] rounded-3xl p-[2px]">

                <div className="bg-white rounded-3xl p-8 md:p-10 w-[320px] md:w-[380px] min-h-[260px] flex flex-col justify-between shadow-2xl">

                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="relative w-25 h-14">
                        <Image src={item.logo} alt={item.name} fill className="object-contain" />
                      </div>

                      <h3 className="text-base md:text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      
                    </div>
                    <p className="text-base md:text-sm  font-semibold text-gray-500 mb-2">
                        {item.since}
                      </p>

                    <Quote className="text-[#D60000] mb-3" size={28} />

                    {/* TEXT */}
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {isExpanded ? item.text : shortText}
                    </p>

                    {/* SEE MORE */}
                    {item.text.length > 140 && (
                      <button
                        onClick={() => toggleReadMore(i)}
                        className="text-[#D60000] text-xs mt-2 font-semibold"
                      >
                        {isExpanded ? "See Less" : "See More"}
                      </button>
                    )}
                  </div>

                  <div className="mt-3 text-yellow-400 text-lg">
                    ★★★★★
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-10 gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full cursor-pointer ${
              i === index ? "w-8 bg-white" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>

    </section>
  );
}