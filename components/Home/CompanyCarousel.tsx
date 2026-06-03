"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

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

interface Company {
  id: number;
  img: string;
}

export default function CompanyCarousel() {
  return (
    <section className="w-full py-16 bg-[#eaf3f9]">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Our Group of Companies
        </h2>
      </div>

      <div className="max-w-full mx-auto px-4">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          centeredSlides={true}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {companies.map((item: Company) => (
            <SwiperSlide key={item.id}>
              <div className="h-[130px] bg-white border rounded-xl flex items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300">
                <Image
                  src={item.img}
                  alt={`Company ${item.id}`}
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