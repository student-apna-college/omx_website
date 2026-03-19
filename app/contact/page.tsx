"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe, ArrowRight, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [focused, setFocused] = useState<string | null>(null);

  const branches = [
    { city: "Kochin", state: "Kerala", gst: "32AAACO7157P1Z2", address: "Srambikkal House, Neericode, 683511" },
    { city: "Hyderabad", state: "Telangana", gst: "36AAACO7157P1ZU", address: "Yellampet Village, Medchal, 501401" },
    { city: "Jaipur", state: "Rajasthan", gst: "08AAACO7157P1ZT", address: "Village Keshwana Rajpoot, 303108" },
    { city: "Indore", state: "Madhya Pradesh", gst: "23AAACO7157P1Z1", address: "Sullakhedi Road, Mangalya, 453771" },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#1a1a1a] selection:bg-[tomato] selection:text-white">
      
      {/* 1. INSTITUTIONAL HERO BANNER - FULL WIDTH TEXT OVER IMAGE */}
      <section className="relative pt-20 pb-0 overflow-hidden w-full">
        <div className="relative w-full h-[60vh] min-h-[500px] group overflow-hidden bg-gray-100">
          <Image 
            src="/images/contactus.jpg" 
            alt="OMX Contact Infrastructure" 
            fill 
            className="object-cover transition-all duration-[2000ms] group-hover:scale-105"
            priority
          />
          
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* Content Over Image */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center">
            <div className="max-w-[1440px] mx-auto w-full px-8 md:px-20">
              <div className="grid lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[2px] w-10 bg-[tomato]"></div>
                    <span className="text-[tomato] text-[10px] font-black uppercase tracking-[0.5em]">Global Connectivity</span>
                  </div>
                  <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.85] m-0 text-white">
                    CONNECT TO <br/>
                    <span className="font-medium italic text-[tomato]">INTERFACE.</span>
                  </h1>
                </div>
                <div className="lg:col-span-4 lg:pb-4">
                  <div className="p-6 border-l border-white/30 backdrop-blur-sm bg-black/20 text-white">
                    <p className="text-lg font-medium leading-snug">
                      Access our nationwide network of high-security record centers and digitization hubs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CONSULTATION PORTAL */}
      <section className="py-32 px-8 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-24">
          
          {/* Left: Metadata & Direct Contact */}
          <div className="lg:col-span-4 space-y-16">
            <div className="space-y-12">
              <div className="group cursor-pointer">
                <p className="text-3xl md:text-4xl font-bold hover:text-[tomato] transition-all duration-500">omxinfo@omx.in</p>
              </div>
              
              <div className="group">
                <div className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold">+91 83768 07367</p>
                  <p className="text-3xl md:text-4xl font-bold text-gray-200 group-hover:text-gray-400 transition-colors underline decoration-[tomato] underline-offset-8">+91 88263 32236</p>
                </div>
              </div>
            </div>

            <div className="pt-16 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-[tomato]" size={20} />
                <h4 className="text-xs font-black uppercase tracking-widest">Compliance Standards</h4>
              </div>
              <ul className="space-y-3">
                {["ISO 9001:2015 Certified", "GDPR Compliance Rules", "Tier 4 Physical Security"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                    <CheckCircle2 size={14} className="text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: The High-End Form */}
          <div className="lg:col-span-8">
            <div className="bg-white p-2 border border-gray-200 shadow-xl">
               <div className="border border-gray-100 p-12 lg:p-16">
                  <h3 className="text-4xl font-light mb-16 tracking-tight">Institutional <span className="font-medium italic text-[tomato]">Inquiry Portal</span></h3>
                  
                  <form className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                    {[
                      { label: "Authorized Representative", placeholder: "Full Name", type: "text" },
                      { label: "Organization Entity", placeholder: "Company Name", type: "text" },
                      { label: "Corporate Email", placeholder: "corporate@domain.com", type: "email" },
                      { label: "Operational Region", placeholder: "City / State", type: "text" }
                    ].map((field) => (
                      <div key={field.label} className="relative group">
                        <label className={`absolute -top-6 left-0 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${focused === field.label ? 'text-[tomato]' : 'text-gray-400'}`}>
                          {field.label}
                        </label>
                        <input 
                          type={field.type}
                          onFocus={() => setFocused(field.label)}
                          onBlur={() => setFocused(null)}
                          className="w-full bg-transparent border-b-2 border-gray-100 py-3 text-xl font-medium outline-none focus:border-[tomato] transition-all placeholder:text-gray-100"
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                    
                    <div className="md:col-span-2 relative mt-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 block">Scope of Technical Audit</label>
                      <textarea 
                        rows={4}
                        className="w-full bg-gray-50/50 border border-gray-100 p-6 text-lg outline-none focus:border-[tomato] transition-all"
                        placeholder="Detail your record volume and specific service requirements..."
                      ></textarea>
                    </div>

                    <div className="md:col-span-2 pt-8">
                      <button className="group bg-[#1a1a1a] text-white px-16 py-6 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-6 hover:bg-[tomato] transition-all duration-500">
                        Dispatch Requirements
                        <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                      </button>
                    </div>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. REGIONAL DIRECTORY GRID */}
      <section className="bg-[#fcfcfc] py-32 border-y border-gray-200">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl font-light tracking-tight">National <span className="font-medium italic">Directory.</span></h2>
            <div className="flex items-center gap-4 border border-gray-200 px-6 py-3 bg-white">
              <Globe size={16} className="text-[tomato] animate-pulse" />
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest">Active Hubs Priority Zones</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200">
            {branches.map((b) => (
              <div key={b.gst} className="group p-12 border-r border-b border-gray-200 bg-white hover:bg-[#1a1a1a] transition-all duration-700">
                <div className="flex justify-between items-start mb-10">
                  <span className="text-[tomato] font-mono text-[10px] font-black uppercase tracking-widest">{b.state}</span>
                  <MapPin size={16} className="text-gray-200 group-hover:text-[tomato] transition-colors" />
                </div>
                <h4 className="text-3xl font-bold mb-6 group-hover:text-white transition-colors">{b.city}</h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-500 transition-colors leading-relaxed mb-12 h-16 italic">
                  {b.address}
                </p>
                <div className="pt-8 border-t border-gray-100 group-hover:border-gray-800 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-gray-300 uppercase tracking-tighter">GST: {b.gst}</span>
                  <ArrowRight size={16} className="text-transparent group-hover:text-[tomato] transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}