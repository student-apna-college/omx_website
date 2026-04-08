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
    <div className="bg-[#f0fcf8] text-[#1a1a1a] selection:bg-green-600 selection:text-white">

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image 
          src="/images/branch_locations.png" 
          alt="OMX National Network" 
          fill 
          className="object-cover brightness-50 scale-105 transition-transform duration-[2500ms]" 
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-lg">
            NATIONAL <br/>
            <span className="text-green-600  font-medium">FOOTPRINT</span>
          </h1>
          <p className="mt-4 text-white/80 text-sm md:text-base max-w-lg">
            Access our nationwide network of strategic record centers, digitization hubs, and logistics nodes
          </p>
        </div>
      </section>

      {/* INFRASTRUCTURE METRICS */}
      <section className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100 bg-white border-b border-gray-100 text-center">
        {[
          { label: "Total Reach", val: "750+ Hubs" },
          { label: "Vault Security", val: "Tier 4" },
          { label: "Presence", val: "Pan India" },
          { label: "Audit Standards", val: "ISO 9001" }
        ].map((stat, idx) => (
          <div key={idx} className="py-12 px-8 flex flex-col items-center justify-center">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">{stat.label}</p>
            <p className="text-2xl font-bold tracking-tighter">{stat.val}</p>
          </div>
        ))}
      </section>

      {/* BRANCH DIRECTORY */}
      <section className="py-16 md:py-32 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 mb-20 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight">
              Strategic <span className="text-green-600  font-medium">Locations</span>
            </h2>
          </div>
          <div className="lg:col-span-4 border-l border-gray-200 pl-8">
            <p className="text-gray-500 text-sm leading-relaxed">
              Each OMX facility is engineered for secure record preservation, climate control, and rapid retrieval logistics
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200 rounded-2xl overflow-hidden">
          {branchData.map((branch, i) => (
            <div key={i} className="group p-12 border-r border-b border-gray-200 hover:bg-green-50 transition-all relative overflow-hidden rounded-xl">
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                <Building2 size={120} strokeWidth={1} className="text-green-600" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-start">
                  <span className="text-green-600 font-mono text-[10px] font-black uppercase tracking-widest">{branch.state}</span>
                  <MapPin size={20} className="text-gray-400 group-hover:text-green-600 transition-colors" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-green-700 transition-colors">{branch.city}</h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-700 leading-relaxed ">{branch.address}</p>
                </div>
                <div className="pt-4 border-t border-gray-100 group-hover:border-green-200 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 group-hover:text-gray-700">
                    <Mail size={14} className="text-green-600" />
                    <span>{branch.contact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER STRIP */}
      <section className="py-24 bg-[#fcfcfc] border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <Globe className="text-green-600" size={32} />
            <p className="text-xl font-light text-gray-500 ">Centralized Control, Localized Execution</p>
          </div>
          <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.5em]">Part of the 3000Cr OM Group Network</p>
        </div>
      </section>
    </div>
  );
}