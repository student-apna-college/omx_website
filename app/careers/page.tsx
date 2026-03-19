"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Briefcase, MapPin, Clock, ArrowRight, FileText, User, Send, Target } from 'lucide-react';

// Mock API Data for Job Postings
const jobPostings = [
  {
    id: "OMX-001",
    role: "Operations Manager - Records",
    location: "New Delhi (HQ)",
    type: "Full-Time",
    experience: "5-8 Years"
  },
  {
    id: "OMX-002",
    role: "Senior Digitization Specialist",
    location: "Hyderabad",
    type: "Full-Time",
    experience: "3-5 Years"
  },
  {
    id: "OMX-003",
    role: "Warehouse Supervisor",
    location: "Kochi",
    type: "On-Site",
    experience: "2-4 Years"
  }
];

export default function CareersPage() {
  const [activeJob, setActiveJob] = useState<string | null>(null);

  return (
    <div className="bg-white text-[#1a1a1a]">
      
      {/* 1. INSTITUTIONAL HERO BANNER - TEXT OVER IMAGE */}
      <section className="relative pt-20 pb-0 overflow-hidden w-full">
        <div className="relative w-full h-[60vh] min-h-[500px] group overflow-hidden bg-gray-100">
          <Image 
            src="/images/careers.png" 
            alt="OMX Careers" 
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
                    <span className="text-[tomato] text-[10px] font-black uppercase tracking-[0.5em]">Join the Legacy</span>
                  </div>
                  <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.85] m-0 text-white">
                    EVOLVE YOUR <br/>
                    <span className="font-medium italic text-[tomato]">POTENTIAL.</span>
                  </h1>
                </div>
                <div className="lg:col-span-4 lg:pb-4">
                  <div className="p-6 border-l border-white/30 backdrop-blur-sm bg-black/20 text-white">
                    <p className="text-lg font-medium leading-snug">
                      Join a team of specialists managing India's most critical information assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE OPENINGS (THE JOB BOARD) */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex justify-between items-end mb-16 border-b border-gray-100 pb-8">
            <h2 className="text-4xl font-light tracking-tight">Active <span className="font-medium">Openings</span></h2>
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-none">
                 Hiring Now
               </p>
            </div>
          </div>

          <div className="grid grid-cols-1 border-l border-gray-200">
            {jobPostings.map((job) => (
              <div 
                key={job.id} 
                className="group border-r border-b border-gray-100 p-12 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-all"
              >
                <div className="space-y-3 mb-6 md:mb-0">
                  <span className="text-[tomato] text-[10px] font-mono tracking-widest font-bold">{job.id}</span>
                  <h3 className="text-3xl font-bold group-hover:text-[tomato] transition-colors tracking-tight">{job.role}</h3>
                  <div className="flex flex-wrap gap-6 text-xs text-gray-400 font-medium">
                    <span className="flex items-center gap-2"><MapPin size={14} className="text-[tomato]" /> {job.location}</span>
                    <span className="flex items-center gap-2"><Clock size={14} className="text-[tomato]" /> {job.type}</span>
                    <span className="flex items-center gap-2 uppercase tracking-tighter italic border-l border-gray-200 pl-6">{job.experience} Exp.</span>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setActiveJob(job.role);
                    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-4 bg-[#1a1a1a] text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-[tomato] transition-all self-start"
                >
                  Apply Now <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. APPLICATION PORTAL */}
      <section id="application-form" className="py-32 bg-[#fcfcfc] border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20">
            
            <div className="lg:col-span-4 space-y-12">
              <h2 className="text-5xl font-light leading-tight tracking-tighter">Join the <br/> <span className="font-medium italic text-[tomato]">Talent Pool</span></h2>
              <div className="space-y-4">
                {[
                  { icon: <Target size={18} />, text: "Merit-based selection process" },
                  { icon: <FileText size={18} />, text: "Manual HR screening of profiles" },
                  { icon: <Briefcase size={18} />, text: "Career growth within the 3000Cr OM Group" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white border border-gray-100 shadow-sm">
                    <div className="text-[tomato]">{item.icon}</div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 bg-white p-12 border border-gray-200 shadow-xl">
              <form className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                <div className="space-y-2 border-b border-gray-100 pb-2 focus-within:border-[tomato] transition-colors">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                  <input type="text" className="w-full bg-transparent p-2 text-xl font-medium outline-none" placeholder="First Last" />
                </div>
                <div className="space-y-2 border-b border-gray-100 pb-2 focus-within:border-[tomato] transition-colors">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Corporate Email</label>
                  <input type="email" className="w-full bg-transparent p-2 text-xl font-medium outline-none" placeholder="email@example.com" />
                </div>
                <div className="space-y-2 border-b border-gray-100 pb-2 focus-within:border-[tomato] transition-colors">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Selected Designation</label>
                  <input 
                    type="text" 
                    value={activeJob || ''} 
                    onChange={(e) => setActiveJob(e.target.value)}
                    className="w-full bg-transparent p-2 text-xl font-bold text-[tomato] outline-none" 
                    placeholder="General Inquiry" 
                  />
                </div>
                <div className="space-y-2 border-b border-gray-100 pb-2 focus-within:border-[tomato] transition-colors">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Experience Level</label>
                  <select className="w-full bg-transparent p-2 text-xl font-medium outline-none cursor-pointer">
                    <option>Entry Level</option>
                    <option>1-3 Years</option>
                    <option>5+ Years</option>
                    <option>Institutional Leadership</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2 border-b border-gray-100 pb-2 focus-within:border-[tomato] transition-colors">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Portfolio / LinkedIn / Resume Link</label>
                  <input type="text" className="w-full bg-transparent p-2 text-xl font-medium outline-none" placeholder="https://" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Brief Intent Statement</label>
                  <textarea rows={4} className="w-full bg-gray-50 p-4 border border-gray-100 outline-none focus:border-[tomato] transition-all"></textarea>
                </div>
                <div className="md:col-span-2 pt-6">
                  <button className="bg-[#1a1a1a] text-white px-12 py-6 text-xs font-black uppercase tracking-[0.3em] hover:bg-[tomato] transition-all flex items-center gap-6 group">
                    Dispatch Application <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}