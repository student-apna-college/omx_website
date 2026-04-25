"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [focused, setFocused] = useState<string | null>(null);

  // ✅ POPUP STATE
  const [isOpen, setIsOpen] = useState(false);

  // ✅ PAGE LOAD PE POPUP OPEN
  useEffect(() => {
    setIsOpen(true);
  }, []);

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
        setIsOpen(false);
      } else {
        alert("Error submitting query. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting query.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#f5fffb] via-white to-[#f7faff] text-[#1a1a1a]">

      {/* HERO */}
      <section className="relative w-full h-[55vh] md:h-[80vh] overflow-hidden">
        <Image src="/images/contact.jpg" alt="OMX Contact Infrastructure" fill priority className="object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            CONNECT TO <br /> INTERFACE
          </h1>
          <p className="mt-4 text-white/80 text-sm md:text-base max-w-lg">
            Access our nationwide network of high-security record centers and digitization hubs
          </p>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section className="max-w-[1300px] mx-auto py-16 md:py-10 px-6 grid lg:grid-cols-12 gap-5">

        {/* LEFT */}
        <div className="lg:col-span-4 space-y-10">
          <div className="space-y-4">
            <p className="text-2xl font-bold text-[#0f172a] hover:text-green-600 transition">
              omxinfo@omx.in
            </p>
            <p className="text-xl font-bold">+91 83768 07367</p>
            <p className="text-xl font-bold text-gray-500">+91 88263 32236</p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-pink-100/50 border">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="text-green-600" size={18} />
              <h4 className="text-xs font-bold uppercase tracking-widest">Compliance Standards</h4>
            </div>
            <ul className="space-y-2">
              {["ISO 9001:2015 Certified", "GDPR Compliance Rules", "Tier 4 Physical Security"].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={14} className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ORIGINAL FORM SAME */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-2xl shadow-lg border p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Institutional Inquiry Portal
            </h3>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

              <input name="name" placeholder="Full Name" className="border rounded-xl px-4 py-3" />
              <input name="company" placeholder="Company" className="border rounded-xl px-4 py-3" />
              <input name="email" type="email" placeholder="Email" className="border rounded-xl px-4 py-3" />
              <input name="region" placeholder="Region" className="border rounded-xl px-4 py-3" />

              <textarea name="scope" rows={4} placeholder="Describe your requirement..." className="md:col-span-2 border rounded-xl px-4 py-4 bg-gray-50" />

              <button type="submit" className="md:col-span-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 rounded-full font-bold">
                Send Request
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* MAPS */}
      <section className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Locations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {maps.map((map) => (
            <div key={map.name} className="rounded-2xl overflow-hidden shadow-md bg-white">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-center py-2 font-semibold">
                {map.name}
              </div>
              <iframe src={map.url} className="w-full h-64 border-0" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* BRANCHES */}
      <section className="py-20 max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl md:text-5xl text-center mb-12">National Directory</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.map((b, i) => (
            <div key={i} className="rounded-2xl p-6 bg-gradient-to-br from-white via-blue-50 to-purple-50 border">
              <p className="text-xs font-bold text-green-600 uppercase">{b.state}</p>
              <h4 className="text-2xl font-bold mt-2">{b.city}</h4>
              <p className="text-sm text-gray-500 mt-3">{b.address}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ POPUP FORM */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-6 md:p-10 relative">

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-6 text-center">Quick Inquiry</h3>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

              <input name="name" placeholder="Full Name" className="border rounded-xl px-4 py-3" />
              <input name="company" placeholder="Company" className="border rounded-xl px-4 py-3" />
              <input name="email" placeholder="Email" className="border rounded-xl px-4 py-3" />
              <input name="region" placeholder="Region" className="border rounded-xl px-4 py-3" />

              <textarea name="scope" rows={4} placeholder="Describe your requirement..." className="md:col-span-2 border rounded-xl px-4 py-4 bg-gray-50" />

              <button type="submit" className="md:col-span-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 rounded-full font-bold">
                Submit Request
              </button>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}