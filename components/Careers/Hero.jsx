import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden ">

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
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT CONTAINER (aligned like upper section) */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1300px] mx-auto w-full px-6 md:px-12">

          <h1 className="text-white text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-light leading-tight drop-shadow-lg max-w-xl">
            Evolve Your <br />
            <span className="font-semibold">Potential</span>
          </h1>

        </div>
      </div>

    </div>
  );
}