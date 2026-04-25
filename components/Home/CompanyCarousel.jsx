"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const companies = [
  { id: 1, img: "/companies/supply chain logo.png" },
  { id: 2, img: "/companies/ominfra.webp" },
  { id: 3, img: "/companies/omtelicom.webp" },
  { id: 4, img: "/companies/omTrax.webp" },
  { id: 5, img: "/companies/rapidship.webp" },
  { id: 6, img: "/companies/sanjvik.webp" },
  { id: 7, img: "/companies/trans.webp" },
  { id: 8, img: "/companies/Transife.webp" },
];

export default function CompanyCarousel() {
  return (
    <section className="w-full py-16 bg-[#eaf3f9]">
      
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-semibold">
          OUR GROUP OF COMPANIES
        </h2>
        {/* <p className="max-w-2xl mx-auto text-gray-600 mt-4">
          With a unified vision, the Om group companies established to streamline
          supply chain operations with one stop solution.
        </p> */}
      </div>

      {/* Swiper */}
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {companies.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="h-[130px] bg-white border rounded-xl flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-xl">
                <Image
                  src={item.img}
                  alt="company"
                  width={140}
                  height={70}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}