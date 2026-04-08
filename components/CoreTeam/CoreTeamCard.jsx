import Image from "next/image";

export default function CoreTeamCard({ name, role, image }) {
  return (
    <div className="relative group rounded-2xl overflow-hidden  transition duration-300">
      
      {/* IMAGE */}
      <div className="relative w-full h-[250px] md:h-[320px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-fit group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* DARK OVERLAY */}


      {/* TEXT CONTENT */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="text-lg md:text-xl font-bold tracking-wide">
          {name.toUpperCase()}
        </h3>

        {role && (
          <p className="text-sm md:text-base opacity-90 mt-1">
            {role}
          </p>
        )}
      </div>
    </div>
  );
}