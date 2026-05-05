"use client";
import Image from "next/image";

export default function CoreTeamCard({ name, role, image }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

      {/* IMAGE */}
      <div className="relative w-full h-[295px] sm:h-[340px] md:h-[360px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className=" object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* CONTENT BELOW IMAGE */}
      <div className="p-4 md:p-5 text-center">

        {/* NAME */}
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
          {name}
        </h3>

        {/* ROLE */}
        {role && (
          <p className="text-sm md:text-base text-gray-500 mt-1">
            {role}
          </p>
        )}

        {/* LINE ANIMATION */}
        <div className="w-0 h-[2px] bg-blue-600 mx-auto mt-2 group-hover:w-10 transition-all duration-300"></div>

      </div>
    </div>
  );
}