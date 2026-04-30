import CoreTeam from "@/components/CoreTeam/CoreTeamCard";

const teamData = [
  {
    name: "Ajay Singhal",
    role: "Chief Managing Director",
    image: "/coreteam/CMD Sir.png",
  },
  {
    name: "Raghav Singhal",
    role: "Executive Director",
    image: "/coreteam/Raghav Sir.png",
  },
  {
    name: "Kamal Gupta",
    role: "Head of Operations",
    image: "/coreteam/kamalsir.png",
  },
];

export default function CoreTeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-16 pt-20 md:pt-8">

      {/* MAIN CONTAINER (aligned with other pages) */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">

        {/* HEADING */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
            Meet Our{" "}
            <span className="font-semibold text-[#000033]">Core Team</span>
          </h1>

          <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-600 mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
            In the dynamic and visionary landscape of{" "}
            <span className="font-semibold text-[#000033]">
              Om Logistics Supply Chain
            </span>{" "}
            our core team stands as the driving force behind our continued success.
            As strategic leaders, they bring a wealth of experience, insight, and innovation
          </p>

          <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Through strong collaboration and forward-thinking approaches, the team fosters a high-performance work culture that motivates every employee to excel. Each member contributes distinct strengths, creating a cohesive and empowered unit
          </p>

          <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Together, they shape a workplace defined by professionalism, growth, and excellence
          </p>

        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-items-center">

          {teamData.map((member, index) => (
            <div key={index} className="w-full max-w-sm">
              <CoreTeam {...member} />
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}