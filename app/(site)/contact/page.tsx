"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Globe, ArrowRight, Send, ShieldCheck, CheckCircle2 } from "lucide-react";
import ContactAccordion from "@/components/ContactAccordion";

export default function ContactPage() {
  const [focused, setFocused] = useState<string | null>(null);

  const branches = [
    { city: "New Delhi", state: "Delhi NCR", category: "Corporate Headquarters", address: "141 Ring Road Transport Centre, Punjabi Bagh, New Delhi-110035", contact: "omxinfo@omx.in" },
    { city: "Kochin", state: "Kerala", category: "Regional Hub", address: "Srambikkal House, Koduvazhanga, Neericode, 683511", contact: "omxinfo@omx.in" },
    { city: "Hyderabad", state: "Telangana", category: "Technical Center", address: "Survey No.185/186 Yellampet Village, Medchal, 501401", contact: "omxinfo@omx.in" },
    { city: "Jaipur", state: "Rajasthan", category: "Records Vault", address: "651,652,661,663 Village Keshwana Rajpoot, 303108", contact: "omxinfo@omx.in" },
    { city: "Indore", state: "Madhya Pradesh", category: "Logistics Node", address: "Survey No-310 Sullakhedi Road, Manglia Village, 453771", contact: "omxinfo@omx.in" },
    { city: "Noida", state: "Uttar Pradesh", category: "Logistics Noida", address: "B-202, Phase II, Sector 81, Noida, Uttar Pradesh - 201306", contact: "omxinfo@omx.in" },
    { city: "Faridabad", state: "Haryana", category: "Logistics Faridabad", address: "2nd Floor, 23/1, DLF Industrial Area Phase 1, near NHPC Metro Station, Faridabad - 121003", contact: "omxinfo@omx.in" },
    { city: "Jamalpur", state: "Haryana", category: "Logistics Jamalpur", address: "Khasara No. 2/11, Near Bharat Petrol Pump, Highway No-26, Jamalpur, Haryana - 123003", contact: "omxinfo@omx.in" }
  ];

  const maps = [
    { name: "Noida", url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14019.123681878993!2d77.40943!3d28.546304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9002ae7998f%3A0xf04535f4cbb02663!2sOMX%20Info%20Management%20Ltd.!5e0!3m2!1sen!2sin!4v1773997521581!5m2!1sen!2sin" },
    { name: "Delhi", url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14001.891900215232!2d77.143127!3d28.675495!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x444265d0984d2861%3A0x6147c9a215eb0a11!2sOmx%20Info%20Management%20Ltd.!5e0!3m2!1sen!2sin!4v1773997461325!5m2!1sen!2sin" },
    { name: "Faridabad", url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28060.852832025175!2d77.310465!3d28.461273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb007fd692b9%3A0xb48435f528e7cc7d!2sOMX%20Info%20Management%20Ltd.%20-%20Faridabad!5e0!3m2!1sen!2sin!4v1773997363453!5m2!1sen!2sin" },
    { name: "Jamalpur", url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14041.469622583367!2d76.835165!3d28.377969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3f00517a91d1%3A0x60c896d28e1828ba!2sOMX%20Info%20Management%20Ltd.%20-%20Jamalpur!5e0!3m2!1sen!2sin!4v1773997259987!5m2!1sen!2sin" }
  ];

  // --- HANDLE FORM SUBMISSION ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      region: formData.get("region"),
      scope: formData.get("scope"),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        alert("Your query has been submitted!");
        e.currentTarget.reset();
      } else {
        alert("Error submitting query. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting query.");
    }
  };

  return (
    <div className="bg-[#f0fcf8] text-[#1a1a1a] selection:bg-green-600 selection:text-white">

      {/* HERO BANNER */}
      <section className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden">
        <Image 
          src="/images/contact.jpg" 
          alt="OMX Contact Infrastructure" 
          fill 
          className="object-cover scale-105 transition-transform duration-[2500ms]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
            CONNECT TO <br/>
            INTERFACE
          </h1>
          <p className="mt-4 text-white/80 text-sm md:text-base max-w-lg">
            Access our nationwide network of high-security record centers and digitization hubs
          </p>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section className="max-w-[1400px] mx-auto py-16 md:py-32 px-6 md:px-12 grid lg:grid-cols-12 gap-12 md:gap-24">

        {/* LEFT CONTACT & COMPLIANCE */}
        <div className="lg:col-span-4 space-y-12 md:space-y-16">
          <div className="space-y-6">
            <p className="text-3xl font-bold hover:text-green-600 transition-all cursor-pointer">omxinfo@omx.in</p>
            <div className="space-y-1">
              <p className="text-2xl font-bold">+91 83768 07367</p>
              <p className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors underline decoration-green-600 underline-offset-4">
                +91 88263 32236
              </p>
            </div>
          </div>

          <div className="pt-8 md:pt-16 border-t border-gray-100 space-y-4">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <ShieldCheck className="text-green-600" size={20} />
              <h4 className="text-xs font-black uppercase tracking-widest">Compliance Standards</h4>
            </div>
            <ul className="space-y-2 md:space-y-3">
              {["ISO 9001:2015 Certified", "GDPR Compliance Rules", "Tier 4 Physical Security"].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <CheckCircle2 size={14} className="text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:col-span-8">
          <div className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight">
              Institutional Inquiry Portal
            </h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-6 md:gap-y-12">
              {[
                { label: "Authorized Representative", placeholder: "Full Name", type: "text", name: "name" },
                { label: "Organization Entity", placeholder: "Company Name", type: "text", name: "company" },
                { label: "Corporate Email", placeholder: "corporate@domain.com", type: "email", name: "email" },
                { label: "Operational Region", placeholder: "City / State", type: "text", name: "region" }
              ].map(field => (
                <div key={field.label} className="relative group">
                  <label className={`absolute -top-5 left-0 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${focused === field.label ? 'text-green-600' : 'text-gray-400'}`}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    onFocus={() => setFocused(field.label)}
                    onBlur={() => setFocused(null)}
                    placeholder={field.placeholder}
                    className="w-full border-b-2 border-gray-200 bg-transparent py-3 text-lg font-medium outline-none focus:border-green-600 transition-all"
                  />
                </div>
              ))}

              <div className="md:col-span-2 mt-4 relative">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block">Scope of Technical Audit</label>
                <textarea
                  name="scope"
                  rows={4}
                  placeholder="Detail your record volume and specific service requirements..."
                  className="w-full border border-gray-200 p-4 md:p-6 bg-gray-50/50 rounded-xl outline-none focus:border-green-600 transition-all"
                ></textarea>
              </div>

              <div className="md:col-span-2 pt-4 md:pt-8">
                <button type="submit" className="group bg-green-600 text-white px-8 md:px-16 py-4 md:py-6 text-xs md:text-sm font-black uppercase tracking-[0.3em] rounded-full flex items-center gap-4 md:gap-6 hover:bg-green-700 transition-all">
                  Dispatch Requirements
                  <Send size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* MAPS SECTION */}
      <section className="py-12 md:py-20 px-4 md:px-12 max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
          Our Locations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {maps.map((map) => (
            <div key={map.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <p className="text-center font-semibold text-lg md:text-xl py-3 bg-green-50">{map.name}</p>
              <iframe
                src={map.url}
                className="w-full h-64 md:h-72 lg:h-80 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* BRANCH DIRECTORY */}
      <section className="py-16 md:py-32 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-20 gap-4 md:gap-8">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">National Directory</h2>
          <div className="flex items-center gap-2 md:gap-4 border border-gray-200 px-4 md:px-6 py-2 md:py-3 bg-white rounded-lg">
            <Globe size={16} className="text-green-600 animate-pulse" />
            <p className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest">Active Hubs Priority Zones</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200 rounded-2xl overflow-hidden">
          {branches.map(b => (
            <div key={b.city} className="group p-6 md:p-12 border-r border-b border-gray-200 bg-white hover:bg-green-50 transition-all rounded-xl">
              <div className="flex justify-between items-start mb-4 md:mb-10">
                <span className="text-green-600 font-mono text-[10px] font-black uppercase tracking-widest">{b.state}</span>
                <MapPin size={20} className="text-gray-400 group-hover:text-green-600 transition-colors" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold mb-2 md:mb-6 group-hover:text-green-700 transition-colors">{b.city}</h4>
              <p className="text-sm md:text-base text-gray-500 group-hover:text-gray-700 transition-colors leading-relaxed mb-4 md:mb-12 h-16 italic">{b.address}</p>
              <div className="pt-4 border-t border-gray-100 group-hover:border-green-200 flex justify-between items-center">
                <ArrowRight size={16} className="text-transparent group-hover:text-green-600 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACCORDION */}
      <ContactAccordion />
    </div>
  );
}