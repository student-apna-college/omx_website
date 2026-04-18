"use client";
import Image from "next/image";
import { MapPin, Globe, Building2, Mail } from "lucide-react";

const branchData = [
  { city: "New Delhi", state: "Delhi NCR", category: "Corporate HQ", address: "141 Ring Road Transport Centre, Punjabi Bagh, New Delhi-110035", contact: "omxinfo@omx.in" },
  { city: "Kochin", state: "Kerala", category: "Regional Hub", address: "Srambikkal House, Koduvazhanga, Neericode, 683511", contact: "omxinfo@omx.in" },
  { city: "Hyderabad", state: "Telangana", category: "Technical Center", address: "Survey No.185/186 Yellampet Village, Medchal, 501401", contact: "omxinfo@omx.in" },
  { city: "Jaipur", state: "Rajasthan", category: "Records Vault", address: "651,652,661,663 Village Keshwana Rajpoot, 303108", contact: "omxinfo@omx.in" },
  { city: "Indore", state: "Madhya Pradesh", category: "Logistics Node", address: "Survey No-310 Sullakhedi Road, Manglia Village, 453771", contact: "omxinfo@omx.in" },
  { city: "Noida", state: "Uttar Pradesh", category: "Logistics Noida", address: "B-202, Phase II, Sector 81, Noida, Uttar Pradesh - 201306", contact: "omxrmc.noida@omlogistics.co.in" },
  { city: "Faridabad", state: "Haryana", category: "Logistics Faridabad", address: "2nd Floor, 23/1, DLF Industrial Area Phase 1, near NHPC Metro Station, Faridabad - 121003", contact: "omxrmc.faridabad@omlogistics.co.in" },
  { city: "Jamalpur", state: "Haryana", category: "Logistics Jamalpur", address: "Khasara No. 2/11, Near Bharat Petrol Pump, Highway No-26, Jamalpur, Haryana - 123003", contact: "omxrmc.jamalpur@omlogistics.co.in" }
];

export default function BranchesPage() {
 return (
  <div className="bg-gradient-to-b from-[#f5fffb] via-white to-[#f7faff] text-[#1a1a1a]">

    {/* HERO */}
    <section className="relative w-full h-[55vh] md:h-[75vh] overflow-hidden">

      <Image
        src="/images/branch_locationss.jpg"
        alt="OMX National Network"
        fill
        priority
        className="object-cover scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">

        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          NATIONAL <br />
          <span className="text-[white] font-medium">FOOTPRINT</span>
        </h1>

        <p className="mt-4 text-white/80 text-sm md:text-base max-w-lg">
          Access our nationwide network of strategic record centers, digitization hubs, and logistics nodes
        </p>

      </div>
    </section>

    {/* STATS */}
    <section className="grid grid-cols-2 lg:grid-cols-4 bg-white border-b">

      {[
        { label: "Total Reach", val: "750+ Hubs" },
        { label: "Vault Security", val: "Tier 4" },
        { label: "Presence", val: "Pan India" },
        { label: "Audit Standards", val: "ISO 9001" }
      ].map((stat, idx) => (
        <div
          key={idx}
          className="py-10 md:py-14 flex flex-col items-center justify-center hover:bg-green-50 transition"
        >
          <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">
            {stat.label}
          </p>
          <p className="text-xl md:text-2xl font-bold text-[#0f172a]">
            {stat.val}
          </p>
        </div>
      ))}

    </section>

    {/* TITLE */}
    <section className="py-16 md:py-24 max-w-[1400px] mx-auto px-6">

      <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">

        <div className="lg:col-span-8">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">
            Strategic{" "}
            <span className="text-[#000033] font-medium">Locations</span>
          </h2>
        </div>

        <div className="lg:col-span-4 text-gray-500 text-sm leading-relaxed">
          Each OMX facility is engineered for safer and smarter record preservation, climate control, and rapid retrieval logistics
        </div>

      </div>

      {/* BRANCH GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {branchData.map((branch, i) => (
          <div
            key={i}
            className="group relative p-6 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition overflow-hidden"
          >

            {/* BACK ICON */}
            <Building2
              size={120}
              className="absolute -top-8 -right-8 text-green-100 group-hover:text-green-200 transition"
            />

            <div className="relative space-y-5">

              <div className="flex justify-between items-center">
                <span className="text-[#000033] font-mono text-[10px] font-bold uppercase tracking-widest">
                  {branch.state}
                </span>

                <MapPin size={18} className="text-gray-400 group-hover:text-[#000033]" />
              </div>

              <h3 className="text-2xl font-bold group-hover:text-[#000033] transition">
                {branch.city}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {branch.address}
              </p>

              <div className="pt-4 border-t flex items-center gap-2 text-xs text-gray-500 group-hover:text-gray-700">
                <Mail size={14} className="text-green-600" />
                {branch.contact}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>

    {/* FOOTER STRIP */}
    <section className="py-16 bg-white border-t">

      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex items-center gap-4">
          <Globe className="text-green-600" size={28} />
          <p className="text-lg text-gray-600 font-light">
            Centralized Control, Localized Execution
          </p>
        </div>

        <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
          Part of the 3000Cr OM Group Network
        </p>

      </div>

    </section>

  </div>
);}