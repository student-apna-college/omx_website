"use client";

import Image from "next/image";

export default function ClientCarousel({ clientData }) {

  // Clean data (remove undefined)
  const cleanData = (clientData || []).filter(
    (item) => item && item.logo
  );

  // Split into 2 rows
  const mid = Math.ceil(cleanData.length / 2);
  const topClients = cleanData.slice(0, mid);
  const bottomClients = cleanData.slice(mid);

  return (
    <div className="w-full bg-blue-100 py-10 overflow-hidden  ">

      {/*  TOP ROW */}
      <div className="overflow-hidden">
        <div className="flex w-max animate-left pause-on-hover">
 
          {/* ORIGINAL */}
          {topClients.map((client, index) => (
            <Logo key={`top-1-${index}`} client={client} />
          ))}

          {/* CLONE */}
          {topClients.map((client, index) => (
            <Logo key={`top-2-${index}`} client={client} />
          ))}

        </div>
      </div>

      {/*  BOTTOM ROW */}
      <div className="overflow-hidden mt-6">
        <div className="flex w-max animate-right pause-on-hover">

          {/* ORIGINAL */}
          {bottomClients.map((client, index) => (
            <Logo key={`bottom-1-${index}`} client={client} />
          ))}

          {/* CLONE */}
          {bottomClients.map((client, index) => (
            <Logo key={`bottom-2-${index}`} client={client} />
          ))}

        </div>
      </div>

      {/*  CSS */}
      <style jsx>{`
        @keyframes leftScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes rightScroll {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-left {
          animation: leftScroll 25s linear infinite;
        }

        .animate-right {
          animation: rightScroll 25s linear infinite;
        }

        /*  Hover Pause */
        .pause-on-hover:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-left,
          .animate-right {
            animation-duration: 35s;
          }
        }
      `}</style>
    </div>
  );
}

/*  Logo Component */
function Logo({ client }) {
  return (
    <div className="mx-6 flex items-center justify-center min-w-[180px]">
      <div className="relative w-36 h-24">
        <Image
          src={client.logo}
          alt={client.name || "client"}
          fill
          className="object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}