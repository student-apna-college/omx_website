"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe, ArrowRight, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import ContactAccordion from '@/components/ContactAccordion'
export default function ContactPage() {
  const [focused, setFocused] = useState<string | null>(null);

  const branches = [
    { city: "Kochin", state: "Kerala", gst: "32AAACO7157P1Z2", address: "Srambikkal House, Neericode, 683511" },
    { city: "Hyderabad", state: "Telangana", gst: "36AAACO7157P1ZU", address: "Yellampet Village, Medchal, 501401" },
    { city: "Jaipur", state: "Rajasthan", gst: "08AAACO7157P1ZT", address: "Village Keshwana Rajpoot, 303108" },
    { city: "Indore", state: "Madhya Pradesh", gst: "23AAACO7157P1Z1", address: "Sullakhedi Road, Mangalya, 453771" },
  ];

  return (
    <div className="bg-white text-[#1a1a1a] selection:bg-[tomato] selection:text-white">
      
      {/* HERO BANNER */}
      <section className="relative pt-20 overflow-hidden w-full">
        <div className="relative w-full h-[60vh] min-h-[500px] group overflow-hidden bg-gray-100">
          <Image 
            src="/images/contactus.jpg" 
            alt="OMX Contact Infrastructure" 
            fill 
            className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-20">
            <div className="max-w-[1440px] mx-auto w-full">
              <div className="grid lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[2px] w-10 bg-[tomato]"></div>
                    <span className="text-[tomato] text-[10px] font-black uppercase tracking-[0.5em]">Global Connectivity</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light leading-[1.1] m-0 text-white">
                    CONNECT TO <br/>
                    <span className="font-medium italic text-[tomato]">INTERFACE.</span>
                  </h1>
                </div>
                <div className="lg:col-span-4 lg:pb-4">
                  <div className="p-6 border-l border-white/30 backdrop-blur-sm bg-black/20 text-white text-sm sm:text-base">
                    Access our nationwide network of high-security record centers and digitization hubs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION PORTAL */}
      <section className="py-16 md:py-32 px-4 md:px-8 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-24">
          
          {/* LEFT CONTACT & COMPLIANCE */}
          <div className="lg:col-span-4 space-y-12 md:space-y-16">
            <div className="space-y-8">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold hover:text-[tomato] transition-all duration-500 cursor-pointer">omxinfo@omx.in</p>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold">+91 83768 07367</p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400 group-hover:text-gray-500 transition-colors underline decoration-[tomato] underline-offset-4">+91 88263 32236</p>
              </div>
            </div>

            <div className="pt-8 md:pt-16 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <ShieldCheck className="text-[tomato]" size={20} />
                <h4 className="text-xs font-black uppercase tracking-widest">Compliance Standards</h4>
              </div>
              <ul className="space-y-2 md:space-y-3">
                {["ISO 9001:2015 Certified", "GDPR Compliance Rules", "Tier 4 Physical Security"].map((item) => (
                  <li key={item} className="flex items-center gap-2 md:gap-3 text-sm text-gray-500 font-medium">
                    <CheckCircle2 size={14} className="text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-8">
            <div className="bg-white p-2 border border-gray-200 shadow-xl">
              <div className="border border-gray-100 p-8 md:p-12 lg:p-16">
                <h3 className="text-3xl sm:text-4xl lg:text-4xl font-light mb-12 lg:mb-16 tracking-tight">
                  Institutional <span className="font-medium italic text-[tomato]">Inquiry Portal</span>
                </h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-6 md:gap-y-12">
                  {[
                    { label: "Authorized Representative", placeholder: "Full Name", type: "text" },
                    { label: "Organization Entity", placeholder: "Company Name", type: "text" },
                    { label: "Corporate Email", placeholder: "corporate@domain.com", type: "email" },
                    { label: "Operational Region", placeholder: "City / State", type: "text" }
                  ].map((field) => (
                    <div key={field.label} className="relative group">
                      <label className={`absolute -top-5 left-0 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${focused === field.label ? 'text-[tomato]' : 'text-gray-400'}`}>
                        {field.label}
                      </label>
                      <input 
                        type={field.type}
                        onFocus={() => setFocused(field.label)}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-transparent border-b-2 border-gray-100 py-3 text-lg font-medium outline-none focus:border-[tomato] transition-all placeholder:text-gray-300"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}

                  <div className="md:col-span-2 mt-4 relative">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block">Scope of Technical Audit</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-gray-50/50 border border-gray-100 p-4 md:p-6 text-lg outline-none focus:border-[tomato] transition-all"
                      placeholder="Detail your record volume and specific service requirements..."
                    ></textarea>
                  </div>

                  <div className="md:col-span-2 pt-4 md:pt-8">
                    <button className="group bg-[#1a1a1a] text-white px-8 md:px-16 py-4 md:py-6 text-xs md:text-sm font-black uppercase tracking-[0.3em] flex items-center gap-4 md:gap-6 hover:bg-[tomato] transition-all duration-500">
                      Dispatch Requirements
                      <Send size={18} className="group-hover:translate-x-1 md:group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANCH DIRECTORY */}
      <section className="bg-[#fcfcfc] py-16 md:py-32 border-y border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-20 gap-4 md:gap-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light tracking-tight">National <span className="font-medium italic">Directory.</span></h2>
            <div className="flex items-center gap-2 md:gap-4 border border-gray-200 px-4 md:px-6 py-2 md:py-3 bg-white">
              <Globe size={16} className="text-[tomato] animate-pulse" />
              <p className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest">Active Hubs Priority Zones</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200">
            {branches.map((b) => (
              <div key={b.gst} className="group p-6 md:p-12 border-r border-b border-gray-200 bg-white hover:bg-[#1a1a1a] transition-all duration-500">
                <div className="flex justify-between items-start mb-4 md:mb-10">
                  <span className="text-[tomato] font-mono text-[10px] font-black uppercase tracking-widest">{b.state}</span>
                  <MapPin size={16} className="text-gray-400 group-hover:text-[tomato] transition-colors" />
                </div>
                <h4 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2 md:mb-6 group-hover:text-white transition-colors">{b.city}</h4>
                <p className="text-sm md:text-base text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed mb-4 md:mb-12 h-16 italic">
                  {b.address}
                </p>
                <div className="pt-4 border-t border-gray-100 group-hover:border-gray-800 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">GST: {b.gst}</span>
                  <ArrowRight size={16} className="text-transparent group-hover:text-[tomato] transform -translate-x-2 group-hover:translate-x-0 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* MAPS */}
<section className="py-8 md:py-16 px-2 md:px-8 max-w-[1440px] mx-auto">
  <div className="flex flex-wrap -mx-[5px]">
    {[
      {
        name: "Noida",
        url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14019.123681878993!2d77.40943!3d28.546304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9002ae7998f%3A0xf04535f4cbb02663!2sOMX%20Info%20Management%20Ltd.!5e0!3m2!1sen!2sin!4v1773997521581!5m2!1sen!2sin"
      },
      {
        name: "Delhi",
        url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14001.891900215232!2d77.143127!3d28.675495!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x444265d0984d2861%3A0x6147c9a215eb0a11!2sOmx%20Info%20Management%20Ltd.!5e0!3m2!1sen!2sin!4v1773997461325!5m2!1sen!2sin"
      },
      {
        name: "Faridabad",
        url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28060.852832025175!2d77.310465!3d28.461273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb007fd692b9%3A0xb48435f528e7cc7d!2sOMX%20Info%20Management%20Ltd.%20-%20Faridabad!5e0!3m2!1sen!2sin!4v1773997363453!5m2!1sen!2sin"
      },
      {
        name: "Jamalpur",
        url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14041.469622583367!2d76.835165!3d28.377969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3f00517a91d1%3A0x60c896d28e1828ba!2sOMX%20Info%20Management%20Ltd.%20-%20Jamalpur!5e0!3m2!1sen!2sin!4v1773997259987!5m2!1sen!2sin"
      },
    ].map((map) => (
      <div key={map.name} className="px-[5px] w-full sm:w-1/2 lg:w-1/4 mb-4">
        {/* Location Name */}
        <p className="text-center text-sm md:text-base font-bold mb-2">{map.name}</p>

        {/* Map iframe */}
        <iframe
          src={map.url}
          className="w-full h-64 md:h-80 lg:h-96 border-0 rounded-lg shadow-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    ))}
  </div>
</section>

<ContactAccordion></ContactAccordion>
      
    </div>

    
  );
}