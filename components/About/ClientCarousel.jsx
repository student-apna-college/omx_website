import Image from "next/image";

export default function ClientCarousel({ clientData }) {
  return (
    <div className="relative flex overflow-hidden group">
      
      <div className="flex animate-marquee whitespace-nowrap py-12 group-hover:[animation-play-state:paused]">

        {[...clientData, ...clientData].map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="mx-4 flex items-center justify-center min-w-[180px]"
          >
            <div className="relative w-40 h-32">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}

      </div>

      {/* Gradient fade */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
    </div>
  );
}