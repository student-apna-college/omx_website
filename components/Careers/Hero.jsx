import Image from "next/image";

export default function Hero() {
  return (
    
    <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/careers.png"
        alt="Careers"
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105 transition-transform duration-[2500ms]"
      />
      <div className="absolute inset-0 bg-black/50" />
      <h1 className="relative z-10 text-white text-4xl sm:text-5xl md:text-7xl  text-center leading-tight drop-shadow-lg px-4">
        EVOLVE YOUR POTENTIAL
      </h1>
    </div>
  );
}