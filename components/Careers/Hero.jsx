import Image from "next/image";

export default function Hero() {
  return (
    
    <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-start overflow-hidden">

  <Image
    src="/images/careers.jpg"
    alt="Careers"
    fill
    priority
    sizes="100vw"
    className="object-cover scale-105 transition-transform duration-[2500ms]"
  />

  <div className="absolute inset-0 bg-black/50" />

  <h1 className="z-10 text-left text-white text-4xl sm:text-5xl md:text-7xl leading-tight drop-shadow-lg px-6 md:px-12 max-w-[600px]">
    Evolve Your <br /> Potential
  </h1>

</div>
  );
}