"use client";
import React from 'react';
import Image from 'next/image';
import { MapPin, Globe, ShieldCheck, ArrowRight, Building2, Phone, Mail } from 'lucide-react';

const branchData = [
  {
    city: "New Delhi",
    state: "Delhi NCR",
    category: "Corporate Headquarters",
    address: "141 Ring Road Transport Centre, Punjabi Bagh, New Delhi-110035",
    gst: "07AAACO7157P1ZX", // Example GST for Delhi
    contact: "omxinfo@omx.in"
  },
  {
    city: "Kochin",
    state: "Kerala",
    category: "Regional Hub",
    address: "Srambikkal House, Koduvazhanga, Neericode, 683511",
    gst: "32AAACO7157P1Z2",
    contact: "kochin.hub@omx.in"
  },
  {
    city: "Hyderabad",
    state: "Telangana",
    category: "Technical Center",
    address: "Survey No.185/186 Yellampet Village, Medchal, 501401",
    gst: "36AAACO7157P1ZU",
    contact: "hyd.center@omx.in"
  },
  {
    city: "Jaipur",
    state: "Rajasthan",
    category: "Records Vault",
    address: "651,652,661,663 Village Keshwana Rajpoot, 303108",
    gst: "08AAACO7157P1ZT",
    contact: "jaipur.vault@omx.in"
  },
  {
    city: "Indore",
    state: "Madhya Pradesh",
    category: "Logistics Node",
    address: "Survey No-310 Sullakhedi Road, Manglia Village, 453771",
    gst: "23AAACO7157P1Z1",
    contact: "indore.node@omx.in"
  }
];

export default function BranchesPage() {
  return (
    <div className="bg-white text-[#1a1a1a]">
      
      {/* 1. INSTITUTIONAL HERO - TEXT OVER IMAGE */}
      <section className="relative w-full h-[50vh] min-h-[400px] overflow-hidden bg-gray-100">
        <Image 
          src="/images/branch_locations.png" 
          alt="OMX National Network" 
          fill 
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 z-10 flex flex-col justify-center">
          <div className="max-w-[1440px] mx-auto w-full px-8 md:px-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[tomato]"></div>
              <span className="text-[tomato] text-[10px] font-black uppercase tracking-[0.5em]">Network Infrastructure</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.85] text-white">
              NATIONAL <br/>
              <span className="font-medium italic text-[tomato]">FOOTPRINT.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. INFRASTRUCTURE METRICS */}
      <section className="relative z-20 w-full bg-white border-b border-gray-100">
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full divide-x divide-gray-100">
          {[
            { label: "Total Reach", val: "750+ Hubs" },
            { label: "Vault Security", val: "Tier 4" },
            { label: "Presence", val: "Pan India" },
            { label: "Audit Standards", val: "ISO 9001" },
          ].map((stat, i) => (
            <div key={i} className="py-12 px-8 flex flex-col items-center justify-center text-center">
              <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-2xl font-bold tracking-tighter">{stat.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. THE BRANCH DIRECTORY - TECHNICAL GRID */}
      <section className="py-32 px-8 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 mb-20 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-5xl font-light tracking-tighter">Strategic <span className="font-medium italic">Locations.</span></h2>
          </div>
          <div className="lg:col-span-4 border-l border-gray-200 pl-8">
            <p className="text-gray-500 text-sm leading-relaxed">
              Every OMX facility is engineered for the specific requirements of record preservation, climate control, and rapid retrieval logistics.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {branchData.map((branch, i) => (
            <div 
              key={i} 
              className="group p-12 border-r border-b border-gray-200 hover:bg-[#1a1a1a] transition-all duration-700 relative overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                <Building2 size={120} strokeWidth={1} className="text-white" />
              </div>

              <div className="relative z-10 space-y-10">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[tomato] font-mono text-[10px] font-black uppercase tracking-widest">
                      {branch.state}
                    </span>
                  </div>
                  <MapPin size={20} className="text-gray-200 group-hover:text-[tomato] transition-colors" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-4xl font-bold group-hover:text-white transition-colors tracking-tighter">
                    {branch.city}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed italic pr-4">
                    {branch.address}
                  </p>
                </div>

                <div className="pt-8 border-t border-gray-100 group-hover:border-white/10 flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-[10px] font-mono text-gray-300 group-hover:text-gray-500">
                    <ShieldCheck size={14} className="text-[tomato]" />
                    <span>GSTIN: {branch.gst}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-mono text-gray-300 group-hover:text-gray-500">
                    <Mail size={14} className="text-[tomato]" />
                    <span>{branch.contact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Institutional Inquiry Box */}
          {/* <div className="p-12 border-r border-b border-gray-200 bg-[#1a1a1a] text-white flex flex-col justify-between group">
            <h3 className="text-3xl font-light leading-tight">
              Initialize <br/> <span className="text-[tomato] font-medium italic">Site Audit</span> <br/> in Your Region
            </h3>
            <div className="pt-20">
              <p className="text-sm text-gray-500 mb-8 max-w-xs">
                For regions not listed, we deploy mobile digitization and records auditing teams within 48 hours.
              </p>
              <button className="flex items-center gap-4 text-xs font-black uppercase tracking-widest border-b-2 border-[tomato] pb-2 hover:gap-8 transition-all">
                Connect with Regional Head <ArrowRight size={18} />
              </button>
            </div>
          </div> */}
        </div>
      </section>

      {/* 4. PERFORMANCE FOOTER STRIP */}
      <section className="py-24 bg-[#fcfcfc] border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <Globe className="text-[tomato]" size={32} />
            <p className="text-xl font-light text-gray-500 italic">Centralized Control, Localized Execution.</p>
          </div>
          <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.5em]">Part of the 3000Cr OM Group Network</p>
        </div>
      </section>
    </div>
  );
}