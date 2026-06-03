import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden ">

      {/* BG IMAGE */}
      <Image
        src="/images/careers.jpg"
        alt="Careers"
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105 transition-transform duration-[2500ms]"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#062b57]/95 via-[#08519c]/55" />

      {/* CONTENT CONTAINER (aligned like upper section) */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1300px] mx-auto w-full px-6 md:px-12">
        </div>
      </div>

    </div>
  );
}