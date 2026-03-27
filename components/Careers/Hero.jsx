import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">

      {/* Optimized Image */}
      <Image
        src="/images/careers.png"
        alt="Careers"
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105 transition-transform duration-[2500ms]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <h1 className="relative z-10 text-white text-4xl sm:text-5xl md:text-7xl font-bold text-center leading-tight drop-shadow-lg px-4">
        EVOLVE YOUR{" "}
        <span className="text-[#FF6347] italic">
          POTENTIAL
        </span>
      </h1>

    </div>
  );
}